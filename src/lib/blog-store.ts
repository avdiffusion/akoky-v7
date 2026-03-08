import { BlogArticle, BlogLang, BlogCategory } from "./blog-types";
import { SEED_ARTICLES } from "./blog-seed";

const STORAGE_KEY = "akoky_blog_articles";
const SEED_KEY = "akoky_blog_seeded";
const AUTH_KEY = "akoky_blog_auth";
const ADMIN_PASSWORD = "@Akoky2026";

// ── Auto-seed on first load ──────────────────────────────────────────────────
function ensureSeeded(): void {
  if (!localStorage.getItem(SEED_KEY)) {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing || JSON.parse(existing).length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ARTICLES));
    }
    localStorage.setItem(SEED_KEY, "true");
  }
}

// ── Auth ──────────────────────────────────────────────────────────────────────
export function blogAdminLogin(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, "authenticated");
    return true;
  }
  return false;
}

export function blogAdminLogout(): void {
  sessionStorage.removeItem(AUTH_KEY);
}

export function isBlogAdminAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "authenticated";
}

// ── CRUD ──────────────────────────────────────────────────────────────────────
export function getAllArticles(): BlogArticle[] {
  ensureSeeded();
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getArticleById(id: string): BlogArticle | undefined {
  return getAllArticles().find((a) => a.id === id);
}

export function getArticleBySlug(lang: BlogLang, slug: string): BlogArticle | undefined {
  return getAllArticles().find(
    (a) => a.translations[lang]?.slug === slug && a.translations[lang]?.published
  );
}

export function getPublishedArticles(lang: BlogLang, category?: BlogCategory): BlogArticle[] {
  return getAllArticles()
    .filter((a) => a.translations[lang]?.published)
    .filter((a) => !category || a.category === category)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export function saveArticle(article: BlogArticle): void {
  const articles = getAllArticles();
  const idx = articles.findIndex((a) => a.id === article.id);
  if (idx >= 0) {
    articles[idx] = { ...article, updatedAt: new Date().toISOString() };
  } else {
    articles.push({ ...article, updatedAt: new Date().toISOString() });
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function deleteArticle(id: string): void {
  const articles = getAllArticles().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function exportArticlesJSON(): string {
  return JSON.stringify(getAllArticles(), null, 2);
}

export function importArticlesJSON(json: string): number {
  try {
    const articles: BlogArticle[] = JSON.parse(json);
    if (!Array.isArray(articles)) throw new Error("Invalid format");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    return articles.length;
  } catch {
    throw new Error("Format JSON invalide");
  }
}

export function generateId(): string {
  return `art_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
