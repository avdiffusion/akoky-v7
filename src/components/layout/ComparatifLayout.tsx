import { Helmet } from "react-helmet-async";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ComparisonTableProps {
  akokyScore: string;
  competitorScore: string;
  rows: Array<{
    label: string;
    akoky: string;
    competitor: string;
    winner?: "akoky" | "competitor" | "tie" | "none";
  }>;
  competitorName: string;
}

type Lang = "fr" | "es" | "de" | "it" | "pt";

interface ComparatifLayoutProps {
  lang?: Lang;
  title: string;
  description: string;
  canonical: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  competitorName: string;
  verdict: React.ReactNode;
  whyAkoky: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  tableData: ComparisonTableProps;
  children?: React.ReactNode;
  schema?: any;
}

const I18N: Record<Lang, {
  home: string; homePath: string; comparatifs: string; comparatifsPath: string;
  badge: string; verdict: string; verdictTitle: string;
  tableTitle: string; tableSubtitle: string; criterion: string; globalScore: string;
  whyTitle: string; faqTitle: string;
  ctaTitle: string; ctaSubtitle: string; ctaButton: string; ctaClubs: string; ctaClubsPath: string; ctaDisclaimer: string;
  imgAlt: string;
}> = {
  fr: {
    home: "Accueil", homePath: "/", comparatifs: "Comparatifs", comparatifsPath: "/comparatifs",
    badge: "⚖️ Comparatif 2026 — Données vérifiées",
    verdict: "Notre verdict", verdictTitle: "l'essentiel",
    tableTitle: "Tableau comparatif détaillé", tableSubtitle: "Analyse point par point des fonctionnalités",
    criterion: "Critère", globalScore: "Score Global",
    whyTitle: "Pourquoi choisir AKOKY en 2026 ?",
    faqTitle: "Questions fréquentes",
    ctaTitle: "Prêt à découvrir le vrai libertinage ?",
    ctaSubtitle: "Rejoignez 1,5 million de membres sur le premier réseau social libertin complet. Inscription gratuite, sans carte bancaire.",
    ctaButton: "Créer mon compte gratuit",
    ctaClubs: "Voir les clubs", ctaClubsPath: "/clubs",
    ctaDisclaimer: "Certifié 100% discret • Données hébergées en Europe",
    imgAlt: "Comparatif AKOKY vs",
  },
  en: {
    home: "Home", homePath: "/en", comparatifs: "Comparisons", comparatifsPath: "/en/comparisons",
    badge: "⚖️ Comparison 2026 — Verified Data",
    verdict: "Our verdict", verdictTitle: "the essentials",
    tableTitle: "Detailed comparison table", tableSubtitle: "Point-by-point feature analysis",
    criterion: "Criterion", globalScore: "Overall Score",
    whyTitle: "Why choose AKOKY in 2026?",
    faqTitle: "Frequently asked questions",
    ctaTitle: "Ready to discover real swinging?",
    ctaSubtitle: "Join 1.5 million members on the first complete libertine social network. Free sign-up, no credit card required.",
    ctaButton: "Create my free account",
    ctaClubs: "Browse clubs", ctaClubsPath: "/en/clubs",
    ctaDisclaimer: "100% discreet • Data hosted in Europe",
    imgAlt: "AKOKY vs comparison",
  },
  es: {
    home: "Inicio", homePath: "/es", comparatifs: "Comparativas", comparatifsPath: "/es/mejor-sitio-libertino",
    badge: "⚖️ Comparativa 2026 — Datos verificados",
    verdict: "Nuestro veredicto", verdictTitle: "lo esencial",
    tableTitle: "Tabla comparativa detallada", tableSubtitle: "Análisis punto por punto de las funcionalidades",
    criterion: "Criterio", globalScore: "Puntuación Global",
    whyTitle: "¿Por qué elegir AKOKY en 2026?",
    faqTitle: "Preguntas frecuentes",
    ctaTitle: "¿Listo para descubrir el verdadero libertinaje?",
    ctaSubtitle: "Únete a 1,5 millones de miembros en la primera red social libertina completa. Registro gratuito, sin tarjeta de crédito.",
    ctaButton: "Crear mi cuenta gratis",
    ctaClubs: "Ver los clubes", ctaClubsPath: "/es/clubes-libertinos",
    ctaDisclaimer: "100% discreto • Datos alojados en Europa",
    imgAlt: "Comparativa AKOKY vs",
  },
  de: {
    home: "Startseite", homePath: "/de", comparatifs: "Vergleiche", comparatifsPath: "/de/beste-libertine-seite",
    badge: "⚖️ Vergleich 2026 — Verifizierte Daten",
    verdict: "Unser Urteil", verdictTitle: "das Wesentliche",
    tableTitle: "Detaillierte Vergleichstabelle", tableSubtitle: "Punkt-für-Punkt-Analyse der Funktionen",
    criterion: "Kriterium", globalScore: "Gesamtpunktzahl",
    whyTitle: "Warum AKOKY 2026 wählen?",
    faqTitle: "Häufig gestellte Fragen",
    ctaTitle: "Bereit, echtes Swinging zu entdecken?",
    ctaSubtitle: "Schließen Sie sich 1,5 Millionen Mitgliedern im ersten vollständigen libertinen sozialen Netzwerk an. Kostenlose Anmeldung, keine Kreditkarte erforderlich.",
    ctaButton: "Kostenloses Konto erstellen",
    ctaClubs: "Clubs ansehen", ctaClubsPath: "/de/clubs",
    ctaDisclaimer: "100% diskret • Daten in Europa gehostet",
    imgAlt: "AKOKY vs Vergleich",
  },
  it: {
    home: "Home", homePath: "/it", comparatifs: "Confronti", comparatifsPath: "/it/miglior-sito-libertino",
    badge: "⚖️ Confronto 2026 — Dati verificati",
    verdict: "Il nostro verdetto", verdictTitle: "l'essenziale",
    tableTitle: "Tabella comparativa dettagliata", tableSubtitle: "Analisi punto per punto delle funzionalità",
    criterion: "Criterio", globalScore: "Punteggio Globale",
    whyTitle: "Perché scegliere AKOKY nel 2026?",
    faqTitle: "Domande frequenti",
    ctaTitle: "Pronto a scoprire il vero libertinismo?",
    ctaSubtitle: "Unisciti a 1,5 milioni di membri sul primo social network libertino completo. Iscrizione gratuita, senza carta di credito.",
    ctaButton: "Crea il mio account gratuito",
    ctaClubs: "Vedi i club", ctaClubsPath: "/it/club-libertini",
    ctaDisclaimer: "100% discreto • Dati ospitati in Europa",
    imgAlt: "Confronto AKOKY vs",
  },
  pt: {
    home: "Início", homePath: "/pt", comparatifs: "Comparações", comparatifsPath: "/pt/melhor-sitio-libertino",
    badge: "⚖️ Comparação 2026 — Dados verificados",
    verdict: "Nosso veredito", verdictTitle: "o essencial",
    tableTitle: "Tabela comparativa detalhada", tableSubtitle: "Análise ponto a ponto das funcionalidades",
    criterion: "Critério", globalScore: "Pontuação Global",
    whyTitle: "Por que escolher AKOKY em 2026?",
    faqTitle: "Perguntas frequentes",
    ctaTitle: "Pronto para descobrir o verdadeiro libertinismo?",
    ctaSubtitle: "Junte-se a 1,5 milhões de membros na primeira rede social libertina completa. Inscrição gratuita, sem cartão de crédito.",
    ctaButton: "Criar minha conta grátis",
    ctaClubs: "Ver os clubes", ctaClubsPath: "/pt/clubes-libertinos",
    ctaDisclaimer: "100% discreto • Dados alojados na Europa",
    imgAlt: "Comparação AKOKY vs",
  },
};

const ComparatifLayout = ({
  lang = "fr",
  title,
  description,
  canonical,
  heroTitle,
  heroSubtitle,
  heroImage = "https://legal.akoky.com/UPLOAD-AKOKY/AKOKY.COM/images/hero-home/home2-desktop.webp",
  competitorName,
  verdict,
  whyAkoky,
  faq,
  tableData,
  children,
  schema
}: ComparatifLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = I18N[lang];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://akoky.com/images/logo-akoky.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <html lang={lang} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Header lang={lang} />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
            <img 
              src={heroImage} 
              alt={`${t.imgAlt} ${competitorName}`}
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          <div className="container relative z-20 max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
              <Link to={t.homePath} className="hover:text-primary transition-colors">{t.home}</Link>
              <span>›</span>
              <Link to={t.comparatifsPath} className="hover:text-primary transition-colors">{t.comparatifs}</Link>
              <span>›</span>
              <span className="text-white">AKOKY vs {competitorName}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6">
              {t.badge}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display">
              {heroTitle}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>

            <div className="flex items-center justify-center gap-6 mt-10">
              <span className="text-2xl font-black text-primary tracking-widest">AKOKY</span>
              <span className="text-sm font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">VS</span>
              <span className="text-2xl font-bold text-foreground/80">{competitorName}</span>
            </div>
          </div>
        </section>

        {/* VERDICT */}
        <section className="py-16 md:py-24 px-4 bg-card/30 border-y border-border">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">{t.verdict}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-display">
                AKOKY vs {competitorName} : {t.verdictTitle}
              </h2>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark opacity-50" />
              <div className="relative z-10 prose prose-invert prose-lg max-w-none">
                {verdict}
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-16 md:py-24 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-display">{t.tableTitle}</h2>
              <p className="text-muted-foreground">{t.tableSubtitle}</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border shadow-2xl bg-card/50">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/30 border-b border-border">
                    <th className="p-4 md:p-6 text-foreground font-bold w-1/3">{t.criterion}</th>
                    <th className="p-4 md:p-6 text-primary font-black text-lg bg-primary/5 w-1/3 border-x border-primary/10">
                      🚀 AKOKY
                    </th>
                    <th className="p-4 md:p-6 text-muted-foreground font-bold w-1/3">
                      {competitorName}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {tableData.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 md:p-6 text-muted-foreground font-medium">
                        {row.label}
                      </td>
                      <td className={`p-4 md:p-6 font-medium border-x border-primary/10 ${
                        row.winner === 'akoky' ? 'bg-primary/5 text-foreground' : 'text-muted-foreground'
                      }`}>
                        {row.winner === 'akoky' && <span className="mr-2">✅</span>}
                        <span dangerouslySetInnerHTML={{ __html: row.akoky }} />
                      </td>
                      <td className={`p-4 md:p-6 font-medium ${
                        row.winner === 'competitor' ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {row.winner === 'competitor' && <span className="mr-2">✅</span>}
                        {row.winner !== 'competitor' && row.winner !== 'tie' && <span className="mr-2">❌</span>}
                        <span dangerouslySetInnerHTML={{ __html: row.competitor }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-muted/30 border-t border-border">
                    <td className="p-4 md:p-6 font-bold text-foreground">{t.globalScore}</td>
                    <td className="p-4 md:p-6 font-black text-2xl text-primary bg-primary/10 border-x border-primary/20">
                      {tableData.akokyScore}
                    </td>
                    <td className="p-4 md:p-6 font-bold text-xl text-muted-foreground">
                      {tableData.competitorScore}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* CUSTOM CONTENT */}
        {children}

        {/* WHY AKOKY CARDS */}
        <section className="py-16 md:py-24 px-4 bg-card/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                {t.whyTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyAkoky.map((item, idx) => (
                <div key={idx} className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                  <div className="text-4xl mb-6 bg-muted/30 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon || "✨"}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center font-display">
              {t.faqTitle}
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-xl px-4 bg-card/50 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background z-0" />
          <div className="container relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 font-display">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://app.akoky.com/register" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-black text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all w-full sm:w-auto"
              >
                {t.ctaButton}
              </a>
              <Link 
                to={t.ctaClubsPath} 
                className="px-8 py-4 rounded-full bg-muted/30 border border-border text-foreground font-bold text-lg hover:bg-muted/50 transition-all w-full sm:w-auto"
              >
                {t.ctaClubs}
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {t.ctaDisclaimer}
            </p>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default ComparatifLayout;
