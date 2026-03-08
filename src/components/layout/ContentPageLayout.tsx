import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContentPageLayoutProps {
  lang?: string;
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

const ContentPageLayout = ({
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Build FAQ schema if FAQ exists
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
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        {heroType === "cover" ? (
          <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
              <img
                src={heroImage}
                alt={heroTitle}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="container relative z-20 max-w-4xl mx-auto text-center">
              {breadcrumb && (
                <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
                  <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
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
              )}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display">
                {heroTitle}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {heroSubtitle}
              </p>
            </div>
          </section>
        ) : (
          <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-gradient-to-b from-black via-card to-background">
            <div className="container relative z-20 max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display">
                {heroTitle}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {heroSubtitle}
              </p>
            </div>
          </section>
        )}

        {/* CONTENT */}
        {children}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section className="py-16 md:py-24 px-4">
            <div className="container max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center font-display">
                Questions fréquentes
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
        )}

        {/* CTA */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-primary/5 to-black z-0" />
          <div className="container relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-display">
              Rejoignez la communauté AKOKY
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              1,5 million de membres sur le premier réseau social libertin complet.
              Inscription gratuite, sans carte bancaire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.akoky.com/register"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all w-full sm:w-auto"
              >
                Créer mon compte gratuit
              </a>
              <Link
                to="/clubbing"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Voir les clubs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContentPageLayout;
