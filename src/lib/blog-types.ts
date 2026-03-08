export type BlogLang = "fr" | "es" | "it" | "pt" | "de";

export type BlogCategory =
  | "guides"
  | "villes"
  | "clubs"
  | "saunas"
  | "evenements"
  | "conseils";

export const BLOG_LANGS: BlogLang[] = ["fr", "es", "it", "pt", "de"];

export const BLOG_CATEGORIES: { value: BlogCategory; label: Record<BlogLang, string> }[] = [
  { value: "guides", label: { fr: "Guides libertins", es: "Guías libertinas", it: "Guide libertine", pt: "Guias libertinos", de: "Libertine Ratgeber" } },
  { value: "villes", label: { fr: "Villes libertines", es: "Ciudades libertinas", it: "Città libertine", pt: "Cidades libertinas", de: "Libertine Städte" } },
  { value: "clubs", label: { fr: "Clubs libertins", es: "Clubes libertinos", it: "Club libertini", pt: "Clubes libertinos", de: "Libertine Clubs" } },
  { value: "saunas", label: { fr: "Saunas libertins", es: "Saunas libertinos", it: "Saune libertine", pt: "Saunas libertinos", de: "Libertine Saunas" } },
  { value: "evenements", label: { fr: "Événements libertins", es: "Eventos libertinos", it: "Eventi libertini", pt: "Eventos libertinos", de: "Libertine Events" } },
  { value: "conseils", label: { fr: "Conseils & découvertes", es: "Consejos y descubrimientos", it: "Consigli e scoperte", pt: "Conselhos e descobertas", de: "Tipps & Entdeckungen" } },
];

export interface BlogTranslation {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  content: string; // HTML content
  published: boolean;
}

export interface BlogArticle {
  id: string;
  category: BlogCategory;
  image: string; // path in /blog-images/ or /images/
  translations: Partial<Record<BlogLang, BlogTranslation>>;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

export const LANG_LABELS: Record<BlogLang, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  de: "Deutsch",
};

export const CATEGORY_ICONS: Record<BlogCategory, string> = {
  guides: "📘",
  villes: "🏙️",
  clubs: "🎭",
  saunas: "♨️",
  evenements: "🎉",
  conseils: "💡",
};
