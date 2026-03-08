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

type Lang = "fr" | "en" | "es" | "de" | "it" | "pt";

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
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
            <img 
              src={heroImage} 
              alt={`Comparatif AKOKY vs ${competitorName}`}
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          <div className="container relative z-20 max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
              <span>›</span>
              <Link to="/comparatifs" className="hover:text-primary transition-colors">Comparatifs</Link>
              <span>›</span>
              <span className="text-white">AKOKY vs {competitorName}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6">
              ⚖️ Comparatif 2026 — Données vérifiées
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-display">
              {heroTitle}
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>

            <div className="flex items-center justify-center gap-6 mt-10">
              <span className="text-2xl font-black text-primary tracking-widest">AKOKY</span>
              <span className="text-sm font-bold text-white/40 bg-white/10 px-3 py-1 rounded-full">VS</span>
              <span className="text-2xl font-bold text-white/80">{competitorName}</span>
            </div>
          </div>
        </section>

        {/* VERDICT */}
        <section className="py-16 md:py-24 px-4 bg-card/30 border-y border-white/5">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Notre verdict</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-display">
                AKOKY vs {competitorName} : l'essentiel
              </h2>
            </div>

            <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
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
              <h2 className="text-3xl font-bold text-white mb-4 font-display">Tableau comparatif détaillé</h2>
              <p className="text-gray-400">Analyse point par point des fonctionnalités</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-2xl bg-card/50">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 md:p-6 text-white font-bold w-1/3">Critère</th>
                    <th className="p-4 md:p-6 text-primary font-black text-lg bg-primary/5 w-1/3 border-x border-primary/10">
                      🚀 AKOKY
                    </th>
                    <th className="p-4 md:p-6 text-gray-300 font-bold w-1/3">
                      {competitorName}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tableData.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 md:p-6 text-gray-300 font-medium">
                        {row.label}
                      </td>
                      <td className={`p-4 md:p-6 font-medium border-x border-primary/10 ${
                        row.winner === 'akoky' ? 'bg-primary/5 text-white' : 'text-gray-400'
                      }`}>
                        {row.winner === 'akoky' && <span className="mr-2">✅</span>}
                        {/* Render HTML content safely or just string */}
                        <span dangerouslySetInnerHTML={{ __html: row.akoky }} />
                      </td>
                      <td className={`p-4 md:p-6 font-medium ${
                        row.winner === 'competitor' ? 'text-white' : 'text-gray-400'
                      }`}>
                        {row.winner === 'competitor' && <span className="mr-2">✅</span>}
                        {row.winner !== 'competitor' && row.winner !== 'tie' && <span className="mr-2">❌</span>}
                        {/* Render HTML content safely or just string */}
                        <span dangerouslySetInnerHTML={{ __html: row.competitor }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-white/5 border-t border-white/10">
                    <td className="p-4 md:p-6 font-bold text-white">Score Global</td>
                    <td className="p-4 md:p-6 font-black text-2xl text-primary bg-primary/10 border-x border-primary/20">
                      {tableData.akokyScore}
                    </td>
                    <td className="p-4 md:p-6 font-bold text-xl text-gray-400">
                      {tableData.competitorScore}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* CUSTOM CONTENT (ex: why akoky, features...) */}
        {children}

        {/* WHY AKOKY CARDS */}
        <section className="py-16 md:py-24 px-4 bg-card/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                Pourquoi choisir AKOKY en 2026 ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyAkoky.map((item, idx) => (
                <div key={idx} className="bg-card border border-white/10 p-8 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                  <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon || "✨"}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
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
            <h2 className="text-3xl font-bold text-white mb-10 text-center font-display">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 rounded-xl px-4 bg-card/50 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-primary/5 to-black z-0" />
          <div className="container relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-display">
              Prêt à découvrir le vrai libertinage ?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Rejoignez 1,5 million de membres sur le premier réseau social libertin complet. 
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
                to="/clubs" 
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Voir les clubs
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Certifié 100% discret • Données hébergées en Europe
            </p>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default ComparatifLayout;
