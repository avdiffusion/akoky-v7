/**
 * AKOKY Blog Image Downloader
 * Utilitaire pour extraire et gérer les images des articles WordPress
 */

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

export interface ImageMapping {
  originalUrl: string;
  localPath: string;
  filename: string;
  downloaded: boolean;
}

export interface ContentWithImages {
  content: string;
  featuredImage: string;
  images: ImageMapping[];
}

// ═══════════════════════════════════════════════════════════════
// IMAGE URL EXTRACTION
// ═══════════════════════════════════════════════════════════════

/**
 * Extract all image URLs from HTML content
 */
export function extractImageUrls(html: string): string[] {
  const urls: string[] = [];
  
  // Match <img src="...">
  const imgMatches = html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi);
  for (const match of imgMatches) {
    if (match[1]) urls.push(match[1]);
  }
  
  // Match srcset images
  const srcsetMatches = html.matchAll(/srcset=["']([^"']+)["']/gi);
  for (const match of srcsetMatches) {
    const srcset = match[1];
    const srcsetUrls = srcset.split(",").map(s => s.trim().split(" ")[0]);
    urls.push(...srcsetUrls);
  }
  
  // Match background-image: url(...)
  const bgMatches = html.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/gi);
  for (const match of bgMatches) {
    if (match[1]) urls.push(match[1]);
  }
  
  // Match og:image and twitter:image meta tags
  const metaMatches = html.matchAll(/<meta[^>]+content=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg)[^"']*)["'][^>]*>/gi);
  for (const match of metaMatches) {
    if (match[1]) urls.push(match[1]);
  }
  
  // Filter and dedupe
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];
  const uniqueUrls = [...new Set(urls)].filter(url => {
    const lower = url.toLowerCase();
    return validExtensions.some(ext => lower.includes(ext)) && 
           (url.startsWith('http') || url.startsWith('//'));
  });
  
  return uniqueUrls;
}

/**
 * Extract featured image (first large image or og:image)
 */
export function extractFeaturedImage(html: string): string | null {
  // Try og:image first
  const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
  if (ogMatch && ogMatch[1]) return ogMatch[1];
  
  // Try first image in content
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (imgMatch && imgMatch[1]) return imgMatch[1];
  
  return null;
}

// ═══════════════════════════════════════════════════════════════
// URL TO LOCAL PATH CONVERSION
// ═══════════════════════════════════════════════════════════════

/**
 * Generate a clean filename from a WordPress image URL
 */
export function generateLocalFilename(url: string, slug: string): string {
  try {
    const parsed = new URL(url);
    const originalFilename = parsed.pathname.split("/").pop() || "image";
    
    // Remove WordPress size suffixes like -150x150, -300x200, etc.
    const cleanFilename = originalFilename.replace(/-\d+x\d+(?=\.\w+$)/, "");
    
    // Sanitize filename
    const sanitized = cleanFilename
      .toLowerCase()
      .replace(/[^a-z0-9.-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    
    // Ensure unique by prefixing with article slug
    const extension = sanitized.split(".").pop() || "webp";
    const baseName = sanitized.replace(/\.\w+$/, "");
    
    return `${slug}-${baseName}.${extension}`;
  } catch {
    // If URL parsing fails, generate a hash-based name
    const hash = simpleHash(url);
    const ext = url.split(".").pop()?.split("?")[0] || "webp";
    return `${slug}-img-${hash}.${ext}`;
  }
}

/**
 * Simple hash function for generating unique identifiers
 */
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36).slice(0, 8);
}

/**
 * Convert WordPress image URL to local path
 */
export function getLocalImagePath(filename: string): string {
  return `/images/blog/${filename}`;
}

// ═══════════════════════════════════════════════════════════════
// CONTENT TRANSFORMATION
// ═══════════════════════════════════════════════════════════════

/**
 * Process content and create image mappings
 */
export function processContentImages(
  html: string,
  slug: string
): ContentWithImages {
  const imageUrls = extractImageUrls(html);
  const featuredImageUrl = extractFeaturedImage(html);
  
  // Create mappings for all images
  const images: ImageMapping[] = imageUrls.map(url => {
    const filename = generateLocalFilename(url, slug);
    return {
      originalUrl: url,
      localPath: getLocalImagePath(filename),
      filename,
      downloaded: false,
    };
  });
  
  // Replace URLs in content
  let processedContent = html;
  for (const img of images) {
    // Replace all occurrences of the original URL
    processedContent = processedContent.split(img.originalUrl).join(img.localPath);
  }
  
  // Get local path for featured image
  let featuredImage = "/images/blog-cover-ak.webp"; // Default
  if (featuredImageUrl) {
    const featuredMapping = images.find(m => m.originalUrl === featuredImageUrl);
    if (featuredMapping) {
      featuredImage = featuredMapping.localPath;
    } else {
      // Featured image wasn't in content, add it
      const filename = generateLocalFilename(featuredImageUrl, slug);
      featuredImage = getLocalImagePath(filename);
      images.unshift({
        originalUrl: featuredImageUrl,
        localPath: featuredImage,
        filename,
        downloaded: false,
      });
    }
  }
  
  return {
    content: processedContent,
    featuredImage,
    images,
  };
}

// ═══════════════════════════════════════════════════════════════
// DOWNLOAD TRACKING
// ═══════════════════════════════════════════════════════════════

const PENDING_IMAGES_KEY = "akoky_blog_pending_images";

/**
 * Get all pending images to download
 */
export function getPendingImages(): ImageMapping[] {
  try {
    const data = localStorage.getItem(PENDING_IMAGES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Add images to pending download queue
 */
export function addPendingImages(images: ImageMapping[]): void {
  const existing = getPendingImages();
  const newImages = images.filter(
    img => !existing.some(e => e.originalUrl === img.originalUrl)
  );
  const updated = [...existing, ...newImages];
  localStorage.setItem(PENDING_IMAGES_KEY, JSON.stringify(updated));
}

/**
 * Mark an image as downloaded
 */
export function markImageDownloaded(originalUrl: string): void {
  const images = getPendingImages();
  const updated = images.map(img =>
    img.originalUrl === originalUrl ? { ...img, downloaded: true } : img
  );
  localStorage.setItem(PENDING_IMAGES_KEY, JSON.stringify(updated));
}

/**
 * Get images that still need to be downloaded
 */
export function getNotDownloadedImages(): ImageMapping[] {
  return getPendingImages().filter(img => !img.downloaded);
}

/**
 * Clear all pending images
 */
export function clearPendingImages(): void {
  localStorage.removeItem(PENDING_IMAGES_KEY);
}

/**
 * Export pending images as a downloadable script
 * This generates commands that can be used to batch download images
 */
export function exportDownloadScript(): string {
  const pending = getNotDownloadedImages();
  const commands = pending.map(img => 
    `# ${img.filename}\ncurl -o "public${img.localPath}" "${img.originalUrl}"`
  );
  
  return `#!/bin/bash
# AKOKY Blog Image Downloader
# Generated: ${new Date().toISOString()}
# Total images: ${pending.length}

mkdir -p public/images/blog

${commands.join("\n\n")}

echo "Downloaded ${pending.length} images"
`;
}
