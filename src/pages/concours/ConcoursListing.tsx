import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPublishedConcours } from "@/lib/concours-store";
import {
  STATUS_LABELS,
  STATUS_ICONS,
  getConcoursStatus,
  type ConcoursLang,
  type ConcoursStatus,
} from "@/lib/concours-types";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ConcoursListingProps {
  lang: ConcoursLang;
}

const META: Record<ConcoursLang, { title: string; description: string; heroTitle: string; heroSub: string; search: string; noArticles: string }> = {
  fr: {
    title: "Concours AKOKY – Gagnez des Expériences Libertines Exclusives",
    description: "Participez gratuitement aux concours Akoky et tentez de gagner des séjours, abonnements VIP et expériences uniques.",
    heroTitle: "Concours AKOKY",
    heroSub: "Participez gratuitement et tentez de gagner des séjours, abonnements VIP et expériences libertines exclusives",
    search: "Rechercher un concours…",
    noArticles: "Aucun concours publié pour le moment.",
  },
  es: {
    title: "Concursos AKOKY – Gana Experiencias Libertinas Exclusivas",
    description: "Participa gratis en los concursos Akoky y gana estancias, suscripciones VIP y experiencias únicas.",
    heroTitle: "Concursos AKOKY",
    heroSub: "Participa gratis y gana estancias, suscripciones VIP y experiencias libertinas exclusivas",
    search: "Buscar concursos…",
    noArticles: "No hay concursos publicados todavía.",
  },
  it: {
    title: "Concorsi AKOKY – Vinci Esperienze Libertine Esclusive",
    description: "Partecipa gratuitamente ai concorsi Akoky e vinci soggiorni, abbonamenti VIP ed esperienze uniche.",
    heroTitle: "Concorsi AKOKY",
    heroSub: "Partecipa gratis e vinci soggiorni, abbonamenti VIP ed esperienze libertine esclusive",
    search: "Cerca concorsi…",
    noArticles: "Nessun concorso pubblicato al momento.",
  },
  pt: {
    title: "Concursos AKOKY – Ganhe Experiências Libertinas Exclusivas",
    description: "Participe gratuitamente dos concursos Akoky e ganhe estadias, assinaturas VIP e experiências únicas.",
    heroTitle: "Concursos AKOKY",
    heroSub: "Participe grátis e ganhe estadias, assinaturas VIP e experiências libertinas exclusivas",
    search: "Pesquisar concursos…",
    noArticles: "Nenhum concurso publicado ainda.",
  },
  de: {
    title: "AKOKY Wettbewerbe – Gewinnen Sie exklusive libertine Erlebnisse",
    description: "Nehmen Sie kostenlos an AKOKY-Wettbewerben teil und gewinnen Sie Aufenthalte, VIP-Abonnements und einzigartige Erlebnisse.",
    heroTitle: "AKOKY Wettbewerbe",
    heroSub: "Nehmen Sie kostenlos teil und gewinnen Sie Aufenthalte, VIP-Abonnements und exklusive libertine Erlebnisse",
    search: "Wettbewerbe suchen…",
    noArticles: "Noch keine Wettbewerbe veröffentlicht.",
  },
};

const FILTER_LABELS: Record<string, Record<ConcoursLang, string>> = {
  "": { fr: "Tous", en: "All", es: "Todos", it: "Tutti", pt: "Todos", de: "Alle" },
  active: { fr: "🔥 En cours", en: "🔥 Active", es: "🔥 Activos", it: "🔥 In corso", pt: "🔥 Ativos", de: "🔥 Aktiv" },
  upcoming: { fr: "⏳ À venir", en: "⏳ Upcoming", es: "⏳ Próximos", it: "⏳ In arrivo", pt: "⏳ Em breve", de: "⏳ Bevorstehend" },
  past: { fr: "✅ Terminés", en: "✅ Ended", es: "✅ Finalizados", it: "✅ Terminati", pt: "✅ Encerrados", de: "✅ Beendet" },
};

const ConcoursListing = ({ lang }: ConcoursListingProps) => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<ConcoursStatus | "">("");
  const meta = META[lang];

  const articles = useMemo(() => {
    const all = getPublishedConcours(lang, filterStatus || undefined);
    if (!search) return all;
    const s = search.toLowerCase();
    return all.filter((a) => {
      const t = a.translations[lang];
      return t?.title.toLowerCase().includes(s) || t?.metaDescription.toLowerCase().includes(s);
    });
  }, [lang, filterStatus, search]);

  const canonical = `https://akoky.com/${lang}/concours`;

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
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: meta.heroTitle,
            url: canonical,
            description: meta.description,
            publisher: { "@type": "Organization", name: "AKOKY", url: "https://akoky.com" },
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/libertinage.webp" alt={meta.heroTitle} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>
          <div className="container relative z-20 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display">
              {meta.heroTitle}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {meta.heroSub}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={meta.search} className="pl-9" />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as ConcoursStatus | "")}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm w-full sm:w-auto"
              >
                {["", "active", "upcoming", "past"].map((s) => (
                  <option key={s} value={s}>{FILTER_LABELS[s][lang]}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Concours Grid */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            {articles.length === 0 ? (
              <p className="text-center text-muted-foreground text-lg py-20">{meta.noArticles}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => {
                  const t = article.translations[lang]!;
                  const slug = `/${lang}/concours/${t.slug}`;
                  const status = getConcoursStatus(article);
                  return (
                    <Link
                      key={article.id}
                      to={slug}
                      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:-translate-y-1"
                    >
                      {article.image && (
                        <div className="aspect-video overflow-hidden relative">
                          <img src={article.image} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                          <div className="absolute top-3 left-3">
                            <Badge className={
                              status === "active" ? "bg-green-600 text-white" :
                              status === "upcoming" ? "bg-primary text-primary-foreground" :
                              "bg-muted text-muted-foreground"
                            }>
                              {STATUS_ICONS[status]} {STATUS_LABELS[status][lang]}
                            </Badge>
                          </div>
                        </div>
                      )}
                      <div className="p-5">
                        <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {t.title}
                        </h2>
                        {t.metaDescription && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{t.metaDescription}</p>
                        )}
                        <div className="flex items-center gap-2 mt-3">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground/50" />
                          <span className="text-xs text-muted-foreground/50">
                            {new Date(article.startDate).toLocaleDateString(lang === "fr" ? "fr-FR" : `${lang}-${lang.toUpperCase()}`)}
                            {" → "}
                            {new Date(article.endDate).toLocaleDateString(lang === "fr" ? "fr-FR" : `${lang}-${lang.toUpperCase()}`)}
                          </span>
                        </div>
                        {article.prize && (
                          <p className="text-xs text-primary font-medium mt-2">🏆 {article.prize}</p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ConcoursListing;
