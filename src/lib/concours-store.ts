import { ConcoursArticle, ConcoursLang, ConcoursStatus, getConcoursStatus } from "./concours-types";
import { SEED_CONCOURS } from "./concours-seed";

const STORAGE_KEY = "akoky_concours_articles";
const SEED_KEY = "akoky_concours_seeded";

// Uses shared blog auth
const AUTH_KEY = "akoky_blog_auth";

function ensureSeeded(): void {
  if (!localStorage.getItem(SEED_KEY)) {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing || JSON.parse(existing).length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_CONCOURS));
    }
    localStorage.setItem(SEED_KEY, "true");
  }
}

// Auth — shared with blog admin
export function isConcoursAdminAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "authenticated";
}

// CRUD
export function getAllConcours(): ConcoursArticle[] {
  ensureSeeded();
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getConcoursById(id: string): ConcoursArticle | undefined {
  return getAllConcours().find((a) => a.id === id);
}

export function getConcoursBySlug(lang: ConcoursLang, slug: string): ConcoursArticle | undefined {
  return getAllConcours().find(
    (a) => a.translations[lang]?.slug === slug && a.translations[lang]?.published
  );
}

export function getPublishedConcours(lang: ConcoursLang, status?: ConcoursStatus): ConcoursArticle[] {
  return getAllConcours()
    .filter((a) => a.translations[lang]?.published)
    .filter((a) => !status || getConcoursStatus(a) === status)
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

export function saveConcours(article: ConcoursArticle): void {
  const articles = getAllConcours();
  const idx = articles.findIndex((a) => a.id === article.id);
  if (idx >= 0) {
    articles[idx] = { ...article, updatedAt: new Date().toISOString() };
  } else {
    articles.push({ ...article, updatedAt: new Date().toISOString() });
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function deleteConcours(id: string): void {
  const articles = getAllConcours().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function exportConcoursJSON(): string {
  return JSON.stringify(getAllConcours(), null, 2);
}

export function importConcoursJSON(json: string): number {
  try {
    const articles: ConcoursArticle[] = JSON.parse(json);
    if (!Array.isArray(articles)) throw new Error("Invalid format");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    return articles.length;
  } catch {
    throw new Error("Format JSON invalide");
  }
}

export function generateConcoursId(): string {
  return `conc_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
