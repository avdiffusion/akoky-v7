import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaTags from "@/components/seo/MetaTags";

const PLACEHOLDERS: Record<string, string> = {
  de: "Demnächst verfügbar",
  es: "Próximamente",
  pt: "Em breve",
  it: "Prossimamente",
  en: "Coming soon",
};

const LangPlaceholder = ({ lang }: { lang: string }) => {
  const message = PLACEHOLDERS[lang] || "Coming soon";

  return (
    <>
      <MetaTags
        title={`AKOKY – ${message}`}
        description={`AKOKY – ${message}`}
        canonical={`https://akoky.com/${lang}`}
        lang={lang}
      />
      <Header />
      <main className="min-h-screen flex items-center justify-center pt-[70px]">
        <div className="text-center px-6">
          <h1 className="text-5xl font-black text-gradient-gold mb-6">AKOKY</h1>
          <p className="text-2xl text-foreground font-semibold mb-8">{message}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gradient-primary text-primary-foreground font-bold hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            ← Version française
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LangPlaceholder;
