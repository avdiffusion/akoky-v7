import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getConcoursBySlug } from "@/lib/concours-store";
import {
  CONCOURS_LANGS,
  STATUS_LABELS,
  STATUS_ICONS,
  getConcoursStatus,
  type ConcoursLang,
} from "@/lib/concours-types";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Globe } from "lucide-react";
import { useEffect } from "react";

interface ConcoursArticleProps {
  lang: ConcoursLang;
}

const ConcoursArticlePage = ({ lang }: ConcoursArticleProps) => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) return <Navigate to={`/${lang}/concours`} replace />;

  const article = getConcoursBySlug(lang, slug);
  if (!article) return <Navigate to={`/${lang}/concours`} replace />;

  const t = article.translations[lang]!;
  const canonical = `https://akoky.com/${lang}/concours/${t.slug}`;
  const status = getConcoursStatus(article);

  const otherLangs = CONCOURS_LANGS.filter(
    (l) => l !== lang && article.translations[l]?.published
  );

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t.metaTitle || t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t.metaTitle || t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content={canonical} />
        {article.image && <meta property="og:image" content={`https://akoky.com${article.image}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        {CONCOURS_LANGS.filter((l) => article.translations[l]?.published).map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://akoky.com/${l}/concours/${article.translations[l]!.slug}`}
          />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: t.metaTitle || t.title,
            description: t.metaDescription,
            url: canonical,
            image: article.image ? `https://akoky.com${article.image}` : undefined,
            startDate: article.startDate,
            endDate: article.endDate,
            organizer: { "@type": "Organization", name: "AKOKY", url: "https://akoky.com" },
            eventStatus: status === "active" ? "https://schema.org/EventScheduled" :
                         status === "past" ? "https://schema.org/EventCancelled" :
                         "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
            location: { "@type": "VirtualLocation", url: "https://akoky.com" },
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {article.image && (
          <section className="relative h-[50vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background z-10" />
            <img src={article.image} alt={t.title} className="w-full h-full object-cover" loading="eager" />
          </section>
        )}

        <article className="py-12 px-4">
          <div className="container max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
              <Link to={`/${lang}`} className="hover:text-primary transition-colors">
                {lang === "fr" ? "Accueil" : "Home"}
              </Link>
              <span>›</span>
              <Link to={`/${lang}/concours`} className="hover:text-primary transition-colors">
                {lang === "fr" ? "Concours" : "Contests"}
              </Link>
              <span>›</span>
              <span className="text-foreground">{t.title}</span>
            </nav>

            {/* Status + Dates */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Badge className={
                status === "active" ? "bg-green-600 text-white" :
                status === "upcoming" ? "bg-primary text-primary-foreground" :
                "bg-muted text-muted-foreground"
              }>
                {STATUS_ICONS[status]} {STATUS_LABELS[status][lang]}
              </Badge>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(article.startDate).toLocaleDateString(lang === "fr" ? "fr-FR" : `${lang}-${lang.toUpperCase()}`)}
                {" → "}
                {new Date(article.endDate).toLocaleDateString(lang === "fr" ? "fr-FR" : `${lang}-${lang.toUpperCase()}`)}
              </span>
            </div>

            {/* Prize */}
            {article.prize && (
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl mb-8">
                <p className="text-primary font-bold">🏆 {article.prize}</p>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 leading-tight font-display">
              {t.title}
            </h1>

            {/* Content */}
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
                  {lang === "fr" ? "Ce concours est aussi disponible en :" : "Also available in:"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {otherLangs.map((l) => (
                    <Link
                      key={l}
                      to={`/${l}/concours/${article.translations[l]!.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-muted text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {l.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back */}
            <div className="mt-12">
              <Link to={`/${lang}/concours`} className="inline-flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" />
                {lang === "fr" ? "Retour aux concours" : "Back to contests"}
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default ConcoursArticlePage;
