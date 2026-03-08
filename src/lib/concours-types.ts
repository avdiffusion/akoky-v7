export type ConcoursLang = "fr" | "es" | "it" | "pt" | "de";

export type ConcoursStatus = "active" | "upcoming" | "past";

export const CONCOURS_LANGS: ConcoursLang[] = ["fr", "en", "es", "it", "pt", "de"];

export const LANG_LABELS: Record<ConcoursLang, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  de: "Deutsch",
};

export interface ConcoursTranslation {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  content: string; // HTML
  published: boolean;
}

export interface ConcoursArticle {
  id: string;
  image: string;
  translations: Partial<Record<ConcoursLang, ConcoursTranslation>>;
  startDate: string; // ISO date
  endDate: string; // ISO date
  prize: string; // short prize description
  createdAt: string;
  updatedAt: string;
}

export function getConcoursStatus(c: ConcoursArticle): ConcoursStatus {
  const now = new Date();
  const start = new Date(c.startDate);
  const end = new Date(c.endDate);
  if (now < start) return "upcoming";
  if (now > end) return "past";
  return "active";
}

export const STATUS_LABELS: Record<ConcoursStatus, Record<ConcoursLang, string>> = {
  active: { fr: "En cours", en: "Active", es: "Activo", it: "In corso", pt: "Ativo", de: "Aktiv" },
  upcoming: { fr: "À venir", en: "Upcoming", es: "Próximo", it: "In arrivo", pt: "Em breve", de: "Bevorstehend" },
  past: { fr: "Terminé", en: "Ended", es: "Finalizado", it: "Terminato", pt: "Encerrado", de: "Beendet" },
};

export const STATUS_ICONS: Record<ConcoursStatus, string> = {
  active: "🔥",
  upcoming: "⏳",
  past: "✅",
};
