import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getArticleBySlug } from "@/lib/blog-store";
import {
  BLOG_CATEGORIES,
  BLOG_LANGS,
  CATEGORY_ICONS,
  type BlogLang,
} from "@/lib/blog-types";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Globe } from "lucide-react";
import { useEffect } from "react";

const LOCALE_MAP: Record<BlogLang, string> = { fr: "fr_FR", es: "es_ES", de: "de_DE", it: "it_IT", pt: "pt_PT" };

const LABELS: Record<BlogLang, { home: string; blog: string; back: string; alsoIn: string }> = {
  fr: { home: "Accueil", blog: "Blog", back: "Retour au blog", alsoIn: "Cet article est aussi disponible en :" },
  es: { home: "Inicio", blog: "Blog", back: "Volver al blog", alsoIn: "Este artículo también está disponible en:" },
  de: { home: "Startseite", blog: "Blog", back: "Zurück zum Blog", alsoIn: "Dieser Artikel ist auch verfügbar in:" },
  it: { home: "Home", blog: "Blog", back: "Torna al blog", alsoIn: "Questo articolo è disponibile anche in:" },
  pt: { home: "Início", blog: "Blog", back: "Voltar ao blog", alsoIn: "Este artigo também está disponível em:" },
};

interface BlogArticleProps {
  lang: BlogLang;
}

const BlogArticlePage = ({ lang }: BlogArticleProps) => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) return <Navigate to={`/${lang}/blog`} replace />;

  const article = getArticleBySlug(lang, slug);
  if (!article) return <Navigate to={`/${lang}/blog`} replace />;

  const t = article.translations[lang]!;
  const labels = LABELS[lang];
  const canonical = `https://akoky.com/${lang}/blog/${t.slug}`;

  const categoryLabel = BLOG_CATEGORIES.find((c) => c.value === article.category)?.label[lang] || "";

  // Other available languages for this article
  const otherLangs = BLOG_LANGS.filter(
    (l) => l !== lang && article.translations[l]?.published
  );

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home, item: `https://akoky.com/${lang}` },
      { "@type": "ListItem", position: 2, name: labels.blog, item: `https://akoky.com/${lang}/blog` },
      { "@type": "ListItem", position: 3, name: t.title, item: canonical },
    ],
  };

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.metaTitle || t.title,
    description: t.metaDescription,
    url: canonical,
    inLanguage: lang,
    image: article.image ? `https://akoky.com${article.image}` : undefined,
    datePublished: article.createdAt,
    dateModified: article.updatedAt,
    author: { "@type": "Organization", name: "AKOKY", url: "https://akoky.com" },
    publisher: {
      "@type": "Organization",
      name: "AKOKY",
      logo: { "@type": "ImageObject", url: "https://akoky.com/images/logo-akoky.webp" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t.metaTitle || t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AKOKY" />
        <meta property="og:title" content={t.metaTitle || t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={LOCALE_MAP[lang]} />
        {article.image && <meta property="og:image" content={`https://akoky.com${article.image}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@akoky_official" />
        <meta name="twitter:title" content={t.metaTitle || t.title} />
        <meta name="twitter:description" content={t.metaDescription} />
        {article.image && <meta name="twitter:image" content={`https://akoky.com${article.image}`} />}
        {/* Hreflang */}
        {BLOG_LANGS.filter((l) => article.translations[l]?.published).map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://akoky.com/${l}/blog/${article.translations[l]!.slug}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`https://akoky.com/fr/blog/${article.translations.fr?.slug || t.slug}`} />
        {/* Schemas */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header lang={lang} />

      <main className="min-h-screen bg-background">
        {/* Hero Image */}
        {article.image && (
          <section className="relative h-[50vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background z-10" />
            <img
              src={article.image}
              alt={t.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </section>
        )}

        {/* Content */}
        <article className="py-12 px-4">
          <div className="container max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap" aria-label="Breadcrumb">
              <Link to={`/${lang}`} className="hover:text-primary transition-colors">
                {labels.home}
              </Link>
              <span>›</span>
              <Link to={`/${lang}/blog`} className="hover:text-primary transition-colors">
                {labels.blog}
              </Link>
              <span>›</span>
              <span className="text-foreground">{t.title}</span>
            </nav>

            {/* Category + Date */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Badge variant="secondary">
                {CATEGORY_ICONS[article.category]} {categoryLabel}
              </Badge>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(article.updatedAt).toLocaleDateString(
                  lang === "fr" ? "fr-FR" : `${lang}-${lang.toUpperCase()}`
                )}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 leading-tight font-display">
              {t.title}
            </h1>

            {/* Article Body */}
            <div
              className="prose prose-invert max-w-none
                prose-headings:font-display prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:my-6
                prose-blockquote:border-primary prose-blockquote:text-muted-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: t.content }}
            />

            {/* Other Languages */}
            {otherLangs.length > 0 && (
              <div className="mt-12 p-6 bg-card/50 border border-border rounded-2xl">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Globe className="h-4 w-4 text-primary" />
                  {labels.alsoIn}
                </div>
                <div className="flex flex-wrap gap-2">
                  {otherLangs.map((l) => (
                    <Link
                      key={l}
                      to={`/${l}/blog/${article.translations[l]!.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-muted text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {l.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back Link */}
            <div className="mt-12">
              <Link
                to={`/${lang}/blog`}
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                {labels.back}
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogArticlePage;
