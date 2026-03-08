import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Wie oft wird die Aktuelles-Sektion aktualisiert?", answer: "Die Aktuelles-Sektion wird wöchentlich mit neuen Trends, Analysen und Branchenneuigkeiten aktualisiert." },
  { question: "Wie kann man Informationen beitragen?", answer: "Verbinde dich mit deinem AKOKY-Mitgliederbereich und nutze das redaktionelle Beitragsformular." },
];

const LibertineAktuellesDe = () => (
  <>
    <MetaTags
      title="Libertine Aktuelles 2026 | Trends und Neuigkeiten — AKOKY Deutschland"
      description="Verfolge die neuesten libertinen Trends in Deutschland und Europa: neue Clubs, besondere Events, Branchenentwicklungen."
      canonical="https://akoky.com/de/libertine-aktuelles"
      lang="de"
    />
    <HreflangTags slug="libertine-aktuelles" />
    <ContentPageLayout
      lang="de"
      title="Libertine Aktuelles 2026 | Trends und Neuigkeiten — AKOKY Deutschland"
      description="Verfolge die neuesten libertinen Trends in Deutschland und Europa."
      canonical="https://akoky.com/de/libertine-aktuelles"
      heroTitle="Libertine Aktuelles und Trends"
      heroSubtitle="Redaktionelle Übersicht der libertinen Szene in Deutschland."
      heroImage="/images/es-actualidad-cover.webp"
      breadcrumb={[{ label: "Libertine Aktuelles" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Redaktionelle Übersicht</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Das AKOKY-Redaktionsteam verfolgt kontinuierlich die libertine Szene: Eröffnungen neuer <Link to="/de/libertine-clubs" className="text-primary hover:underline">Clubs</Link> und <Link to="/de/saunas" className="text-primary hover:underline">Saunas</Link>, Community-Trends, regulatorische Entwicklungen und Branchenanalysen.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Trends 2026 in Deutschland</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "✨", title: "Qualitätsverbesserung", desc: "Neue Einrichtungen setzen auf hochwertigere Dekoration und Services." },
              { icon: "🧖", title: "Wellness-Trend", desc: "Clubs integrieren Spa-Bereiche. Libertines Wellness boomt." },
              { icon: "📱", title: "Digitalisierung", desc: "Online-Buchung und verifizierte Profile via AKOKY werden Standard." },
              { icon: "🎭", title: "Neue Formate", desc: "Luxusvillen, Boutique-Hotels, Bootspartys und Outdoor-Events." },
            ].map((t, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{t.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Zur Aktualität Beitragen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Hast du Informationen über eine neue Einrichtung oder ein <Link to="/de/events" className="text-primary hover:underline">Event</Link>? Teile sie über die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> oder <Link to="/de/kontakt" className="text-primary hover:underline">kontaktiere uns</Link>.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Immer aktuell bleiben</h3>
            <p className="text-muted-foreground mb-4">Lade die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> herunter für Echtzeit-Benachrichtigungen.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/events", label: "Events" },
              { to: "/de/clubbing", label: "Clubbing" },
              { to: "/de/libertinismus", label: "Libertinismus" },
              { to: "/de/bewertungen", label: "Bewertungen" },
              { to: "/de/app", label: "AKOKY App" },
            ].map((l, i) => (
              <Link key={i} to={l.to} className="text-sm px-4 py-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LibertineAktuellesDe;
