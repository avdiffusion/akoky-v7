import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPublishedArticles } from "@/lib/blog-store";
import {
  BLOG_CATEGORIES,
  CATEGORY_ICONS,
  type BlogLang,
  type BlogCategory,
} from "@/lib/blog-types";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const ARTICLES_PER_PAGE = 18;

interface BlogListingProps {
  lang: BlogLang;
}

const META: Record<BlogLang, { title: string; description: string; heroTitle: string; heroSub: string; search: string; noArticles: string }> = {
  fr: {
    title: "Blog libertin AKOKY – Actualités, Conseils & Guides",
    description: "Découvrez nos actualités, conseils, guides et témoignages exclusifs sur le libertinage.",
    heroTitle: "Blog AKOKY",
    heroSub: "Actualités, conseils, guides et témoignages exclusifs sur le libertinage",
    search: "Rechercher un article…",
    noArticles: "Aucun article publié pour le moment.",
  },
  en: {
    title: "AKOKY Libertine Blog – News, Tips & Guides",
    description: "Discover exclusive news, tips, guides and testimonials about the libertine lifestyle.",
    heroTitle: "AKOKY Blog",
    heroSub: "Exclusive news, tips, guides and testimonials about the libertine lifestyle",
    search: "Search articles…",
    noArticles: "No articles published yet.",
  },
  es: {
    title: "Blog libertino AKOKY – Noticias, Consejos & Guías",
    description: "Descubre noticias, consejos, guías y testimonios exclusivos sobre el libertinaje.",
    heroTitle: "Blog AKOKY",
    heroSub: "Noticias, consejos, guías y testimonios exclusivos sobre el libertinaje",
    search: "Buscar artículos…",
    noArticles: "No hay artículos publicados todavía.",
  },
  it: {
    title: "Blog libertino AKOKY – Notizie, Consigli & Guide",
    description: "Scopri notizie, consigli, guide e testimonianze esclusive sul libertinismo.",
    heroTitle: "Blog AKOKY",
    heroSub: "Notizie, consigli, guide e testimonianze esclusive sul libertinismo",
    search: "Cerca articoli…",
    noArticles: "Nessun articolo pubblicato al momento.",
  },
  pt: {
    title: "Blog libertino AKOKY – Notícias, Dicas & Guias",
    description: "Descubra notícias, dicas, guias e depoimentos exclusivos sobre o libertinismo.",
    heroTitle: "Blog AKOKY",
    heroSub: "Notícias, dicas, guias e depoimentos exclusivos sobre o libertinismo",
    search: "Pesquisar artigos…",
    noArticles: "Nenhum artigo publicado ainda.",
  },
  de: {
    title: "AKOKY Libertiner Blog – Neuigkeiten, Tipps & Ratgeber",
    description: "Entdecken Sie exklusive Neuigkeiten, Tipps, Ratgeber und Erfahrungsberichte.",
    heroTitle: "Blog AKOKY",
    heroSub: "Exklusive Neuigkeiten, Tipps, Ratgeber und Erfahrungsberichte",
    search: "Artikel suchen…",
    noArticles: "Noch keine Artikel veröffentlicht.",
  },
};

const BlogListing = ({ lang }: BlogListingProps) => {
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState<BlogCategory | "">("");
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement>(null);
  const meta = META[lang];

  const articles = useMemo(() => {
    const all = getPublishedArticles(lang, filterCat || undefined);
    if (!search) return all;
    const s = search.toLowerCase();
    return all.filter((a) => {
      const t = a.translations[lang];
      return t?.title.toLowerCase().includes(s) || t?.metaDescription.toLowerCase().includes(s);
    });
  }, [lang, filterCat, search]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(ARTICLES_PER_PAGE);
  }, [search, filterCat]);

  // Infinite scroll observer
  useEffect(() => {
    if (visibleCount >= articles.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + ARTICLES_PER_PAGE, articles.length));
        }
      },
      { rootMargin: "200px" }
    );
    const el = loaderRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [visibleCount, articles.length]);

  const visibleArticles = articles.slice(0, visibleCount);

  const canonical = lang === "fr" ? "https://akoky.com/fr/blog" : `https://akoky.com/${lang}/blog`;

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: meta.heroTitle,
            url: canonical,
            description: meta.description,
            publisher: { "@type": "Organization", name: "AKOKY", url: "https://akoky.com" },
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero with cover image */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/libertinage.webp"
              alt={meta.heroTitle}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>
          <div className="container relative z-20 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display">
              {meta.heroTitle}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {meta.heroSub}
            </p>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={meta.search}
                  className="pl-9"
                />
              </div>
              <select
                value={filterCat}
                onChange={(e) => setFilterCat(e.target.value as BlogCategory | "")}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm w-full sm:w-auto"
              >
                <option value="">Toutes</option>
                {BLOG_CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {CATEGORY_ICONS[c.value]} {c.label[lang]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            {articles.length === 0 ? (
              <p className="text-center text-muted-foreground text-lg py-20">{meta.noArticles}</p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleArticles.map((article) => {
                    const t = article.translations[lang]!;
                    const slug = `/${lang}/blog/${t.slug}`;
                    return (
                      <Link
                        key={article.id}
                        to={slug}
                        className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:-translate-y-1"
                      >
                        {article.image && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={article.image}
                              alt={t.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <Badge variant="secondary" className="text-xs mb-3">
                            {CATEGORY_ICONS[article.category]}{" "}
                            {BLOG_CATEGORIES.find((c) => c.value === article.category)?.label[lang]}
                          </Badge>
                          <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {t.title}
                          </h2>
                          {t.metaDescription && (
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {t.metaDescription}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground/50 mt-3">
                            {new Date(article.updatedAt).toLocaleDateString(
                              lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : lang === "es" ? "es-ES" : lang === "it" ? "it-IT" : lang === "pt" ? "pt-PT" : "en-US"
                            )}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Infinite scroll sentinel */}
                {visibleCount < articles.length && (
                  <div ref={loaderRef} className="flex justify-center py-10">
                    <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {/* SEO: Hidden links for all articles so Google can crawl them */}
                {articles.length > visibleCount && (
                  <nav aria-label="All articles" className="sr-only">
                    {articles.slice(visibleCount).map((article) => {
                      const t = article.translations[lang]!;
                      return (
                        <Link key={article.id} to={`/${lang}/blog/${t.slug}`}>
                          {t.title}
                        </Link>
                      );
                    })}
                  </nav>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogListing;
