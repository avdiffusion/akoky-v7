import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Reveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Lang = "fr" | "es" | "de" | "it" | "pt";

interface ContentPageLayoutProps {
  lang?: Lang;
  title: string;
  description: string;
  canonical: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  heroType?: "cover" | "gradient";
  breadcrumb?: Array<{ label: string; href?: string }>;
  faq?: Array<{ question: string; answer: string }>;
  children: React.ReactNode;
  schema?: any;
}

const HOME_LABELS: Record<Lang, string> = {
  fr: "Accueil",
  es: "Inicio",
  de: "Startseite",
  it: "Home",
  pt: "Início",
};

const FAQ_TITLES: Record<Lang, string> = {
  fr: "Questions fréquentes",
  es: "Preguntas frecuentes",
  de: "Häufig gestellte Fragen",
  it: "Domande frequenti",
  pt: "Perguntas frequentes",
};

const CTA_DATA: Record<Lang, { title: string; desc: string; register: string; clubs: string; clubsHref: string }> = {
  fr: { title: "Rejoignez la communauté AKOKY", desc: "1,5 million de membres sur le premier réseau social libertin complet. Inscription gratuite, sans carte bancaire.", register: "Créer mon compte gratuit", clubs: "Voir les clubs", clubsHref: "/fr/clubbing" },
  es: { title: "Únete a la comunidad AKOKY", desc: "1,5 millones de miembros en la primera red social libertina completa. Registro gratuito, sin tarjeta de crédito.", register: "Crear mi cuenta gratis", clubs: "Ver clubes", clubsHref: "/es/clubbing" },
  de: { title: "Treten Sie der AKOKY-Community bei", desc: "1,5 Millionen Mitglieder im führenden libertinen sozialen Netzwerk. Kostenlose Anmeldung, keine Kreditkarte erforderlich.", register: "Kostenloses Konto erstellen", clubs: "Clubs anzeigen", clubsHref: "/de/clubbing" },
  it: { title: "Unisciti alla comunità AKOKY", desc: "1,5 milioni di membri sulla prima rete sociale libertina completa. Iscrizione gratuita, senza carta di credito.", register: "Crea il mio account gratuito", clubs: "Vedi i club", clubsHref: "/it/clubbing" },
  pt: { title: "Junte-se à comunidade AKOKY", desc: "1,5 milhão de membros na principal rede social libertina completa. Registo gratuito, sem cartão de crédito.", register: "Criar minha conta grátis", clubs: "Ver clubes", clubsHref: "/pt/clubbing" },
};

const ContentPageLayout = ({
  lang = "fr" as Lang,
  title,
  description,
  canonical,
  heroTitle,
  heroSubtitle,
  heroImage = "https://legal.akoky.com/UPLOAD-AKOKY/AKOKY.COM/images/hero-home/home2-desktop.webp",
  heroType = "cover",
  breadcrumb,
  faq,
  children,
  schema,
}: ContentPageLayoutProps) => {
  const safeLang = (lang || "fr") as Lang;
  const homeLabel = HOME_LABELS[safeLang];
  const homeHref = `/${safeLang}`;
  const faqTitle = FAQ_TITLES[safeLang];
  const cta = CTA_DATA[safeLang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      }
    }))
  } : null;

  const LOCALE_MAP: Record<string, string> = { fr: "fr_FR", en: "en_US", es: "es_ES", de: "de_DE", it: "it_IT", pt: "pt_PT" };

  return (
    <>
      <Helmet>
        <html lang={safeLang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AKOKY" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={heroImage?.startsWith("http") ? heroImage : `https://akoky.com${heroImage}`} />
        <meta property="og:locale" content={LOCALE_MAP[safeLang] || "fr_FR"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@akoky_official" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
          </script>
        )}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Header lang={safeLang} />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        {heroType === "cover" ? (
          <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
            </div>
            <div className="container relative z-20 max-w-4xl mx-auto text-center">
              {breadcrumb && (
                <Reveal animation="fade-down" duration={600}>
                  <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
                    <Link to={homeHref} className="hover:text-primary transition-colors">{homeLabel}</Link>
                    {breadcrumb.map((item, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span>›</span>
                        {item.href ? (
                          <Link to={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
                        ) : (
                          <span className="text-white">{item.label}</span>
                        )}
                      </span>
                    ))}
                  </nav>
                </Reveal>
              )}
              <Reveal animation="blur-in" duration={1000} delay={100}>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display">
                  {heroTitle}
                </h1>
              </Reveal>
              <Reveal animation="fade-up" duration={800} delay={300}>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {heroSubtitle}
                </p>
              </Reveal>
            </div>
          </section>
        ) : (
          <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-gradient-to-b from-black via-card to-background">
            <div className="container relative z-20 max-w-4xl mx-auto text-center">
              {breadcrumb && (
                <Reveal animation="fade-down" duration={600}>
                  <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
                    <Link to={homeHref} className="hover:text-primary transition-colors">{homeLabel}</Link>
                    {breadcrumb.map((item, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span>›</span>
                        {item.href ? (
                          <Link to={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
                        ) : (
                          <span className="text-white">{item.label}</span>
                        )}
                      </span>
                    ))}
                  </nav>
                </Reveal>
              )}
              <Reveal animation="blur-in" duration={1000} delay={100}>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display">
                  {heroTitle}
                </h1>
              </Reveal>
              <Reveal animation="fade-up" duration={800} delay={300}>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {heroSubtitle}
                </p>
              </Reveal>
            </div>
          </section>
        )}

        {/* CONTENT */}
        {children}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section className="py-16 md:py-24 px-4">
            <div className="container max-w-3xl mx-auto">
              <Reveal animation="fade-up">
                <h2 className="text-3xl font-bold text-foreground mb-10 text-center font-display">
                  {faqTitle}
                </h2>
              </Reveal>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faq.map((item, idx) => (
                  <Reveal key={idx} animation="fade-up" delay={idx * 80}>
                    <AccordionItem value={`item-${idx}`} className="border border-border rounded-xl px-4 bg-card/50 data-[state=open]:border-primary/30 glow-border transition-all duration-500">
                      <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Reveal>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-primary/5 to-black z-0" />
          <div className="absolute inset-0 gold-particles opacity-20 z-0" />
          <div className="container relative z-10 max-w-4xl mx-auto text-center">
            <Reveal animation="blur-in" duration={800}>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-display">
                {cta.title}
              </h2>
            </Reveal>
            <Reveal animation="fade-up" delay={200}>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                {cta.desc}
              </p>
            </Reveal>
            <Reveal animation="scale-up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.akoky.com/register"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 w-full sm:w-auto relative overflow-hidden"
                >
                  <span className="relative z-10">{cta.register}</span>
                </a>
                <Link
                  to={cta.clubsHref}
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-primary/30 transition-all duration-500 w-full sm:w-auto"
                >
                  {cta.clubs}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer lang={safeLang} />
    </>
  );
};

export default ContentPageLayout;
