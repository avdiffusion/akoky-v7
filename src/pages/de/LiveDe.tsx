import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Wie greift man auf AKOKY Lives zu?", answer: "Lives sind für registrierte Mitglieder zugänglich. Einige Inhalte sind VIP-Mitgliedern vorbehalten. Erstelle deinen Account kostenlos auf AKOKY." },
  { question: "Sind die Lives sicher?", answer: "Ja. Alle Teilnehmer sind verifiziert, die Moderation ist menschlich 24h/7d und der Zugang ist streng auf Mitglieder über 18 Jahre beschränkt." },
  { question: "Kann ich meinen eigenen Live ausstrahlen?", answer: "Ja, verifizierte Mitglieder können ausstrahlen. Jede Übertragung unterliegt der AKOKY-Charta und einer Vorprüfung." },
];

const LiveDe = () => (
  <>
    <MetaTags
      title="Libertine Lives Exklusiv | Premium-Streaming AKOKY Deutschland"
      description="Entdecke 20+ libertine Lives pro Woche: Club-Atmosphäre live, exklusive Abende, VIP-Inhalte. Sicheres und diskretes Streaming."
      canonical="https://akoky.com/de/live"
      lang="de"
    />
    <HreflangTags slug="live" />
    <ContentPageLayout
      lang="de"
      title="Libertine Lives Exklusiv | Premium-Streaming AKOKY Deutschland"
      description="Entdecke 20+ libertine Lives pro Woche: Club-Atmosphäre live, exklusive Abende, VIP-Inhalte."
      canonical="https://akoky.com/de/live"
      heroTitle="AKOKY Lives — Videos und Begegnungen Live"
      heroSubtitle="20+ Lives pro Woche: Clubs live, exklusive Abende, VIP-Inhalte. Sicher und diskret."
      heroImage="/images/es-live-cover.webp"
      breadcrumb={[{ label: "AKOKY Lives" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Willkommen beim AKOKY Live-Erlebnis</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY Live ist Europas vollständigste libertine Streaming-Plattform. Mit über 20 Lives pro Woche tauchst du von zu Hause aus in die Atmosphäre der besten <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertinen Clubs</Link> Europas ein.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Das AKOKY Live-Rahmenwerk</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: "🎥", title: "Immersives Erlebnis", desc: "Erlebe die Atmosphäre der besten libertinen Clubs Europas live. Beobachte, lerne und entscheide." },
              { icon: "🛡️", title: "Menschliche Moderation", desc: "Alle Lives werden in Echtzeit von unserem Moderationsteam überwacht. Keine Kompromisse bei Sicherheit." },
              { icon: "🤝", title: "Respekt und Einverständnis", desc: "Alle Teilnehmer haben ihr ausdrückliches Einverständnis gegeben, gefilmt und ausgestrahlt zu werden." },
            ].map((f, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{f.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Live-Arten</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: "💑", title: "Paar-Lives", desc: "Verifizierte Paare teilen Momente ihres Intimlebens live. Interagiere im Chat und schaffe echte Verbindungen." },
              { icon: "👤", title: "Solo-Lives", desc: "Singles teilen ihre Erfahrungen. Das beliebteste Format für Anfänger." },
              { icon: "🏛️", title: "Lives aus Clubs", desc: "Partner-Clubs übertragen exklusiv für die AKOKY-Community. Vollständige Immersion." },
            ].map((t, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{t.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Lives mit VIP-Status erleben</h3>
            <p className="text-muted-foreground mb-4"><Link to="/de/vip" className="text-primary hover:underline">VIP-Mitglieder</Link> haben Zugang zu exklusiven Lives und können selbst ausstrahlen. Lade die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> herunter.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/vip", label: "VIP" },
              { to: "/de/app", label: "AKOKY App" },
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/events", label: "Events" },
              { to: "/de/spiele", label: "Spiele" },
              { to: "/de/bewertungen", label: "Bewertungen" },
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

export default LiveDe;
