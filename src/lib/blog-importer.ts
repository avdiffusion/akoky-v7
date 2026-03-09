/**
 * AKOKY Blog WordPress Importer
 * Système automatisé d'import des articles WordPress vers le blog interne FR
 */

import { BlogArticle, BlogCategory } from "./blog-types";
import { generateId, saveArticle, getAllArticles } from "./blog-store";
import { 
  processContentImages, 
  addPendingImages, 
  ImageMapping 
} from "./blog-image-downloader";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

export interface ImportJob {
  id: string;
  status: "pending" | "running" | "paused" | "completed" | "error";
  totalUrls: number;
  processedUrls: number;
  successCount: number;
  errorCount: number;
  duplicateCount: number;
  imagesCount: number; // NEW: Track images found
  startedAt?: string;
  completedAt?: string;
  currentUrl?: string;
  errors: Array<{ url: string; error: string }>;
}

export interface ScrapedContent {
  title: string;
  content: string;
  excerpt?: string;
  imageUrl?: string;
  publishedDate?: string;
}

// ═══════════════════════════════════════════════════════════════
// STORAGE KEYS
// ═══════════════════════════════════════════════════════════════

const IMPORT_JOB_KEY = "akoky_blog_import_job";
const IMPORT_QUEUE_KEY = "akoky_blog_import_queue";
const IMPORT_PROCESSED_KEY = "akoky_blog_import_processed";

// ═══════════════════════════════════════════════════════════════
// URL EXTRACTION FROM SITEMAP
// ═══════════════════════════════════════════════════════════════

/**
 * Parse le sitemap XML et extrait les URLs uniques des articles FR
 */
export async function extractUrlsFromSitemap(): Promise<string[]> {
  try {
    const response = await fetch("/data/blog-sitemap.xml");
    const xmlText = await response.text();
    
    // Extract all <loc> tags
    const urlMatches = xmlText.matchAll(/<loc>(.*?)<\/loc>/g);
    const allUrls = Array.from(urlMatches).map(match => match[1]);
    
    // Filter only blog articles (WordPress uses /blog/ path)
    const blogUrls = allUrls
      .filter(url => url.includes("/blog/"))
      .filter(url => !url.includes("?")) // Remove query strings
      .filter(url => !url.includes("/page/")) // Remove pagination
      .filter(url => {
        // Remove list pages
        const path = new URL(url).pathname.replace(/\/$/, "");
        return path !== "/blog" && path !== "/fr/blog";
      });
    
    // Remove duplicates
    const uniqueUrls = Array.from(new Set(blogUrls));
    
    console.log(`📊 Extracted ${uniqueUrls.length} unique blog URLs from sitemap`);
    return uniqueUrls;
  } catch (error) {
    console.error("❌ Error extracting URLs from sitemap:", error);
    return [];
  }
}

/**
 * Extract slug from URL
 */
function extractSlugFromUrl(url: string): string {
  const match = url.match(/\/blog\/([^/?]+)/);
  return match ? match[1] : "";
}

/**
 * Detect category from URL or content
 */
function detectCategory(url: string, content: string): BlogCategory {
  const urlLower = url.toLowerCase();
  const contentLower = content.toLowerCase();
  
  // URL-based detection
  if (urlLower.includes("club") || urlLower.includes("etablissement")) return "clubs";
  if (urlLower.includes("sauna") || urlLower.includes("hammam")) return "saunas";
  if (urlLower.includes("ville") || urlLower.includes("region") || urlLower.includes("paris") || urlLower.includes("lyon")) return "villes";
  if (urlLower.includes("event") || urlLower.includes("soiree") || urlLower.includes("agenda")) return "evenements";
  if (urlLower.includes("guide") || urlLower.includes("tutoriel") || urlLower.includes("conseil")) return "guides";
  
  // Content-based detection
  if (contentLower.includes("club libertin") || contentLower.includes("établissement")) return "clubs";
  if (contentLower.includes("sauna") || contentLower.includes("spa")) return "saunas";
  if (contentLower.includes("guide") || contentLower.includes("comment")) return "guides";
  if (contentLower.includes("événement") || contentLower.includes("soirée")) return "evenements";
  
  return "conseils"; // Default
}

/**
 * Generate SEO-friendly meta title from title
 */
function generateMetaTitle(title: string): string {
  if (title.length <= 60) return title;
  return title.slice(0, 57) + "...";
}

/**
 * Generate meta description from content
 */
function generateMetaDescription(content: string): string {
  // Remove HTML tags
  const text = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  
  // Take first 160 characters
  if (text.length <= 160) return text;
  
  // Cut at last complete word before 157 chars
  const truncated = text.slice(0, 157);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpace) + "...";
}

/**
 * Clean and convert WordPress content to our format
 */
function cleanWordPressContent(html: string): string {
  // Remove WordPress-specific classes and inline styles
  let cleaned = html
    .replace(/\sclass="[^"]*"/g, "")
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/\sid="[^"]*"/g, "")
    .replace(/\sdata-[^=]*="[^"]*"/g, "");
  
  // Convert WordPress image captions to simple figures
  cleaned = cleaned.replace(
    /<div class="wp-caption[^>]*>(.*?)<\/div>/g,
    "$1"
  );
  
  // Ensure proper heading hierarchy
  cleaned = cleaned.replace(/<h1>/g, "<h2>");
  
  return cleaned.trim();
}

// ═══════════════════════════════════════════════════════════════
// JOB MANAGEMENT
// ═══════════════════════════════════════════════════════════════

/**
 * Get current import job status
 */
export function getImportJob(): ImportJob | null {
  const data = localStorage.getItem(IMPORT_JOB_KEY);
  return data ? JSON.parse(data) : null;
}

/**
 * Save import job
 */
function saveImportJob(job: ImportJob): void {
  localStorage.setItem(IMPORT_JOB_KEY, JSON.stringify(job));
}

/**
 * Get import queue
 */
function getImportQueue(): string[] {
  const data = localStorage.getItem(IMPORT_QUEUE_KEY);
  return data ? JSON.parse(data) : [];
}

/**
 * Save import queue
 */
function saveImportQueue(urls: string[]): void {
  localStorage.setItem(IMPORT_QUEUE_KEY, JSON.stringify(urls));
}

/**
 * Get processed URLs (to avoid duplicates)
 */
function getProcessedUrls(): Set<string> {
  const data = localStorage.getItem(IMPORT_PROCESSED_KEY);
  return new Set(data ? JSON.parse(data) : []);
}

/**
 * Add URL to processed list
 */
function markUrlAsProcessed(url: string): void {
  const processed = getProcessedUrls();
  processed.add(url);
  localStorage.setItem(IMPORT_PROCESSED_KEY, JSON.stringify(Array.from(processed)));
}

/**
 * Check if slug already exists in blog
 */
function slugExists(slug: string): boolean {
  const articles = getAllArticles();
  return articles.some(a => a.translations.fr?.slug === slug);
}

// ═══════════════════════════════════════════════════════════════
// IMPORT ENGINE
// ═══════════════════════════════════════════════════════════════

/**
 * Initialize new import job
 */
export async function startImportJob(): Promise<ImportJob> {
  // Extract all URLs from sitemap
  const allUrls = await extractUrlsFromSitemap();
  
  // Filter out already processed URLs and duplicates
  const processed = getProcessedUrls();
  const pendingUrls = allUrls.filter(url => !processed.has(url));
  
  console.log(`🚀 Starting import job: ${pendingUrls.length} URLs to process`);
  
  // Create job
  const job: ImportJob = {
    id: `import_${Date.now()}`,
    status: "pending",
    totalUrls: pendingUrls.length,
    processedUrls: 0,
    successCount: 0,
    errorCount: 0,
    duplicateCount: 0,
    imagesCount: 0,
    errors: [],
  };
  
  // Save job and queue
  saveImportJob(job);
  saveImportQueue(pendingUrls);
  
  return job;
}

/**
 * Process next URL in queue
 */
export async function processNextUrl(): Promise<boolean> {
  const job = getImportJob();
  if (!job || job.status === "completed" || job.status === "paused") {
    return false;
  }
  
  const queue = getImportQueue();
  if (queue.length === 0) {
    // Job completed
    job.status = "completed";
    job.completedAt = new Date().toISOString();
    saveImportJob(job);
    console.log(`✅ Import job completed! ${job.successCount} articles imported, ${job.errorCount} errors, ${job.duplicateCount} duplicates`);
    return false;
  }
  
  // Get next URL
  const url = queue[0];
  job.currentUrl = url;
  job.status = "running";
  if (!job.startedAt) {
    job.startedAt = new Date().toISOString();
  }
  saveImportJob(job);
  
  console.log(`⏳ Processing [${job.processedUrls + 1}/${job.totalUrls}]: ${url}`);
  
  try {
    // Extract slug
    const slug = extractSlugFromUrl(url);
    
    // Check if already exists
    if (slugExists(slug)) {
      console.log(`⚠️ Duplicate slug detected: ${slug}`);
      job.duplicateCount++;
      job.processedUrls++;
      markUrlAsProcessed(url);
      queue.shift();
      saveImportQueue(queue);
      saveImportJob(job);
      return true;
    }
    
    // Scrape content (simulate for now - you'll need to implement actual scraping)
    const scraped = await scrapeWordPressArticle(url);
    
    if (!scraped) {
      throw new Error("Failed to scrape content");
    }
    
    // Process images - extract URLs and create local mappings
    const { content: processedContent, featuredImage, images } = processContentImages(
      scraped.content,
      slug
    );
    
    // Add images to download queue
    if (images.length > 0) {
      addPendingImages(images);
      job.imagesCount += images.length;
      console.log(`📷 Found ${images.length} images to download`);
    }
    
    // Create article with processed content and local image paths
    const category = detectCategory(url, scraped.content);
    const article: BlogArticle = {
      id: generateId(),
      category,
      image: featuredImage,
      translations: {
        fr: {
          slug,
          metaTitle: generateMetaTitle(scraped.title),
          metaDescription: generateMetaDescription(processedContent),
          title: scraped.title,
          content: cleanWordPressContent(processedContent),
          published: true,
        },
      },
      createdAt: scraped.publishedDate || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Save article
    saveArticle(article);
    
    console.log(`✅ Imported: ${scraped.title}`);
    job.successCount++;
  } catch (error) {
    console.error(`❌ Error processing ${url}:`, error);
    job.errorCount++;
    job.errors.push({
      url,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
  
  // Update progress
  job.processedUrls++;
  markUrlAsProcessed(url);
  queue.shift();
  saveImportQueue(queue);
  saveImportJob(job);
  
  return true;
}

/**
 * Run import job (process all URLs)
 */
export async function runImportJob(onProgress?: (job: ImportJob) => void): Promise<void> {
  let shouldContinue = true;
  
  while (shouldContinue) {
    shouldContinue = await processNextUrl();
    
    const job = getImportJob();
    if (job && onProgress) {
      onProgress(job);
    }
    
    // Small delay to avoid overwhelming the system
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

/**
 * Pause import job
 */
export function pauseImportJob(): void {
  const job = getImportJob();
  if (job) {
    job.status = "paused";
    saveImportJob(job);
  }
}

/**
 * Resume import job
 */
export function resumeImportJob(): void {
  const job = getImportJob();
  if (job) {
    job.status = "pending";
    saveImportJob(job);
  }
}

/**
 * Reset import job
 */
export function resetImportJob(): void {
  localStorage.removeItem(IMPORT_JOB_KEY);
  localStorage.removeItem(IMPORT_QUEUE_KEY);
  localStorage.removeItem(IMPORT_PROCESSED_KEY);
}

// ═══════════════════════════════════════════════════════════════
// SCRAPING (PLACEHOLDER - TO BE IMPLEMENTED WITH ACTUAL FETCHING)
// ═══════════════════════════════════════════════════════════════

/**
 * Scrape WordPress article
 * TODO: Implement actual scraping with lov-fetch-website
 */
async function scrapeWordPressArticle(url: string): Promise<ScrapedContent | null> {
  // This is a placeholder that returns mock data
  // In production, you'd use lov-fetch-website to get actual content
  
  console.log(`🔍 Scraping: ${url}`);
  
  // For now, return mock data
  // You'll need to implement actual scraping
  return {
    title: `Article from ${extractSlugFromUrl(url)}`,
    content: `<p>Content will be scraped from WordPress...</p>`,
    excerpt: "This is a placeholder excerpt",
    imageUrl: "/images/blog-cover-ak.webp",
    publishedDate: new Date().toISOString(),
  };
}
