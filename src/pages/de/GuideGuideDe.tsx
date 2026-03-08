import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Für wen ist dieser Ratgeber?", answer: "Für alle, die den Libertinismus entdecken oder vertiefen möchten — Paare, Singles, Anfänger und Erfahrene." },
  { question: "Ist der Ratgeber kostenlos?", answer: "Ja. Alle Inhalte auf AKOKY sind kostenlos zugänglich." },
];

const GuideGuideDe = () => (
  <>
    <MetaTags title="Libertinismus-Ratgeber Deutschland 2026 | AKOKY" description="Der Referenz-Ratgeber für Libertinismus in Deutschland: Clubs, Saunas, Praktiken, Events. Alles für Einsteiger und Erfahrene." canonical="https://akoky.com/de/libertinismus-ratgeber" lang="de" ogImage="/images/es-guia-completa-cover.webp" />
    <HreflangTags slug="libertinismus-ratgeber" />
    <ContentPageLayout lang="de" title="Libertinismus-Ratgeber Deutschland 2026 | AKOKY" description="Der Referenz-Ratgeber für Libertinismus in Deutschland." canonical="https://akoky.com/de/libertinismus-ratgeber" heroTitle="Libertinismus-Ratgeber Deutschland" heroSubtitle="Alles verstehen und entdecken über die libertine Welt in Deutschland — der vollständige Ratgeber 2026." heroImage="/images/es-guia-completa-cover.webp" breadcrumb={[{ label: "Libertinismus-Ratgeber" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Dein Einstieg in die Libertine Welt</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Dieser Ratgeber ist dein Kompass durch die libertine Welt in Deutschland. Ob du gerade erst neugierig bist oder schon Erfahrung hast — hier findest du alles, was du brauchst.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              { href: "/de/libertinismus-anfangen", icon: "🧭", title: "Anfangen", desc: "Erste Schritte, Kommunikation, Grenzen setzen" },
              { href: "/de/libertinismus-guide", icon: "📖", title: "Libertinismus Verstehen", desc: "Definition, Praktiken, Werte und Geschichte" },
              { href: "/de/erster-libertiner-club", icon: "🏛️", title: "Erster Club-Besuch", desc: "Dresscode, Regeln, Vorbereitung" },
              { href: "/de/erste-libertine-erfahrung", icon: "💫", title: "Erste Erfahrung", desc: "Treffen vorbereiten und erleben" },
              { href: "/de/libertine-clubs", icon: "📍", title: "Club-Verzeichnis", desc: "120+ verifizierte Clubs in Deutschland" },
              { href: "/de/saunas", icon: "🧖", title: "Libertine Saunas", desc: "Wellness trifft Sinnlichkeit" },
              { href: "/de/events", icon: "📅", title: "Events", desc: "300+ Events pro Monat" },
              { href: "/de/lexikon", icon: "📚", title: "Lexikon", desc: "200+ Begriffe erklärt" },
            ].map((card) => (
              <Link key={card.href} to={card.href} className="block p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all">
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Warum AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY ist Europas führende libertine Plattform: 1,5 Millionen Mitglieder, verifizierte Profile, WhatsApp-ähnlicher Chat, Mehrfachprofile und eine Community, die auf Respekt und Einverständnis aufgebaut ist.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default GuideGuideDe;
