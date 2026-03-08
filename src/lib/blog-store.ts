import { BlogArticle, BlogLang, BlogCategory } from "./blog-types";
import { SEED_ARTICLES } from "./blog-seed";

const STORAGE_KEY = "akoky_blog_articles";
const SEED_KEY = "akoky_blog_seeded_v4";
const AUTH_KEY = "akoky_blog_auth";
const ADMIN_PASSWORD = "@Akoky2026";
const ADMIN_DOB = "12/05/1977";
const LOCKOUT_KEY = "akoky_admin_lockout";
const ATTEMPTS_KEY = "akoky_admin_attempts";
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

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

// ── Rate limiting ────────────────────────────────────────────────────────────
function isLockedOut(): boolean {
  const lockout = sessionStorage.getItem(LOCKOUT_KEY);
  if (!lockout) return false;
  if (Date.now() < parseInt(lockout, 10)) return true;
  sessionStorage.removeItem(LOCKOUT_KEY);
  sessionStorage.removeItem(ATTEMPTS_KEY);
  return false;
}

function recordFailedAttempt(): number {
  const attempts = parseInt(sessionStorage.getItem(ATTEMPTS_KEY) || "0", 10) + 1;
  sessionStorage.setItem(ATTEMPTS_KEY, String(attempts));
  if (attempts >= MAX_ATTEMPTS) {
    sessionStorage.setItem(LOCKOUT_KEY, String(Date.now() + LOCKOUT_DURATION_MS));
  }
  return MAX_ATTEMPTS - attempts;
}

function resetAttempts(): void {
  sessionStorage.removeItem(ATTEMPTS_KEY);
  sessionStorage.removeItem(LOCKOUT_KEY);
}

// ── Auth (step 1: password, step 2: DOB) ─────────────────────────────────────
export function adminCheckLockout(): { locked: boolean; remainingMinutes: number } {
  const lockout = sessionStorage.getItem(LOCKOUT_KEY);
  if (!lockout) return { locked: false, remainingMinutes: 0 };
  const remaining = parseInt(lockout, 10) - Date.now();
  if (remaining <= 0) {
    sessionStorage.removeItem(LOCKOUT_KEY);
    sessionStorage.removeItem(ATTEMPTS_KEY);
    return { locked: false, remainingMinutes: 0 };
  }
  return { locked: true, remainingMinutes: Math.ceil(remaining / 60000) };
}

export function adminValidatePassword(password: string): { success: boolean; attemptsLeft: number } {
  if (isLockedOut()) return { success: false, attemptsLeft: 0 };
  if (password === ADMIN_PASSWORD) {
    return { success: true, attemptsLeft: MAX_ATTEMPTS };
  }
  return { success: false, attemptsLeft: recordFailedAttempt() };
}

export function adminValidateDob(dob: string): { success: boolean; attemptsLeft: number } {
  if (isLockedOut()) return { success: false, attemptsLeft: 0 };
  if (dob === ADMIN_DOB) {
    resetAttempts();
    sessionStorage.setItem(AUTH_KEY, "authenticated");
    return { success: true, attemptsLeft: MAX_ATTEMPTS };
  }
  return { success: false, attemptsLeft: recordFailedAttempt() };
}

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
