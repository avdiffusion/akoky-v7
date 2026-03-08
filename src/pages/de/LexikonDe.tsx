import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Was bedeutet Soft Swap?", answer: "Soft Swap bezeichnet Praktiken ohne Penetration mit anderen Partnern. Umfasst Streicheleinheiten und sinnliche Spiele, wobei eine Form sexueller Exklusivität innerhalb des Paares erhalten bleibt." },
  { question: "Was ist der Unterschied zwischen Swingen und offener Beziehung?", answer: "Swingen findet typischerweise in einem Club- oder gemeinsamen Kontext statt und konzentriert sich auf körperliche Begegnungen. Offene Beziehungen können separate emotionale oder sexuelle Verbindungen beinhalten." },
  { question: "Was bedeutet Mélangisme?", answer: "Mélangisme beschreibt das Teilen intimer Momente im selben Raum ohne notwendigerweise Partner zu tauschen. Alle Beteiligten interagieren miteinander in einer offenen Gruppenatmosphäre." },
];

const BEGRIFFE = [
  { term: "Swingen / Partnertausch", desc: "Die bekannteste Form des libertinen Auslebens. Zwei Paare tauschen ihre Partner für intime Momente aus, auf Grundlage gegenseitigen Einverständnisses." },
  { term: "Soft Swap", desc: "Praktiken ohne Penetration mit anderen Partnern. Umfasst Streicheleinheiten und sinnliche Spiele, wobei sexuelle Exklusivität innerhalb des Paares erhalten bleibt." },
  { term: "Full Swap", desc: "Vollständiger Tausch mit Penetration zwischen den Partnern mindestens zweier Paare. Erfordert klares Einverständnis und vorherige Diskussion über Grenzen." },
  { term: "Candaulismus", desc: "Eine Praktik, bei der eines der Paarmitglieder Vergnügen daran findet zu sehen, dass sein Partner Geschlechtsverkehr mit einer anderen Person hat." },
  { term: "Triolismus", desc: "Geschlechtsverkehr zwischen drei Personen. Kann ein Paar sein, das eine dritte Person einlädt, oder drei Personen, die frei interagieren." },
  { term: "Voyeurismus / Exhibitionismus", desc: "Voyeurismus: die Lust, andere bei intimen Momenten zu beobachten. Exhibitionismus: die Lust, bei intimen Momenten beobachtet zu werden." },
  { term: "Private Party", desc: "Ein libertiner Abend an einem privaten Ort (Wohnung, Villa). Zugang nur auf Einladung mit begrenzter Teilnehmerzahl." },
  { term: "Mélangisme", desc: "Mehrere Personen oder Paare teilen intime Momente im selben Raum, ohne notwendigerweise Partner zu tauschen." },
];

const LexikonDe = () => (
  <>
    <MetaTags
      title="Libertines Lexikon 2026 | 200+ Begriffe von A-Z definiert — AKOKY"
      description="Vollständiges libertines Wörterbuch: Swingen, Voyeurismus, Candaulismus, Triolismus und mehr. 200+ Definitionen für das Libertine-Vokabular."
      canonical="https://akoky.com/de/lexikon"
      lang="de"
    />
    <HreflangTags slug="lexikon" />
    <ContentPageLayout
      lang="de"
      title="Libertines Lexikon 2026 | 200+ Begriffe von A-Z definiert — AKOKY"
      description="Vollständiges libertines Wörterbuch: Swingen, Voyeurismus, Candaulismus, Triolismus und mehr."
      canonical="https://akoky.com/de/lexikon"
      heroTitle="Libertines Lexikon"
      heroSubtitle="Das vollständige Wörterbuch der libertinen Community: 200+ Begriffe verständlich erklärt."
      heroImage="/images/es-lexico-cover.webp"
      breadcrumb={[{ label: "Libertines Lexikon" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Das Libertine Referenzwörterbuch</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">In der libertinen Welt gibt es ein spezifisches Vokabular, das für Neuankömmlinge oft undurchdringlich erscheinen kann. Dieses Lexikon wurde entwickelt, um jedem – <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Anfänger</Link> oder Erfahrenen – dabei zu helfen, die verwendeten Begriffe zu verstehen.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Schlüsselbegriffe</h2>
          <div className="space-y-6 mt-6">
            {BEGRIFFE.map((b, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-primary mb-2">{b.term}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Grundlegenden Regeln</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Unabhängig vom verwendeten Vokabular gelten dieselben Grundprinzipien im <Link to="/de/libertinismus" className="text-primary hover:underline">Libertinismus</Link>: freies und informiertes Einverständnis, Respekt für Grenzen, Diskretion und Würde aller Beteiligten.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">In der Praxis Anwenden</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Dieses Vokabular findest du in <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertinen Clubs</Link>, auf Profilen in der <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> und bei <Link to="/de/events" className="text-primary hover:underline">Events</Link>. Es zu kennen erleichtert die Kommunikation und hilft, Missverständnisse zu vermeiden.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Möchtest du diese Begriffe in der Praxis erleben?</h3>
            <p className="text-muted-foreground mb-4">Tritt der AKOKY-Community bei und entdecke die libertine Welt in einem sicheren und respektvollen Rahmen.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/libertinismus", label: "Libertinismus" },
              { to: "/de/libertinismus-anfangen", label: "Anfangen" },
              { to: "/de/spiele", label: "Spiele" },
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/events", label: "Events" },
              { to: "/de/vip", label: "VIP" },
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

export default LexikonDe;
