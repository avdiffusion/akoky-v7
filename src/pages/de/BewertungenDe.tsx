import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import ReviewsList from "@/components/reviews/ReviewsList";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Sind die Bewertungen auf AKOKY authentisch?", answer: "Ja. Alle Bewertungen sind mit verifizierten Profilen verknüpft. Dies gewährleistet ihre Authentizität und verhindert Manipulationen." },
  { question: "Wie hinterlässt man eine Bewertung?", answer: "Verbinde dich mit deinem AKOKY-Konto, besuche das Club- oder Event-Profil und nutze das Bewertungsformular. Bewertungen werden vor der Veröffentlichung moderiert." },
];

const BewertungenDe = () => (
  <>
    <HreflangTags slug="bewertungen" />
    <ContentPageLayout
      lang="de"
      title="AKOKY Bewertungen | Community-Bewertungen der Libertinen Community"
      description="Lies die Bewertungen der AKOKY-Community: echte Erfahrungen, verifizierte Erfahrungsberichte."
      canonical="https://akoky.com/de/bewertungen"
      heroTitle="Bewertungen und Rezensionen AKOKY"
      heroSubtitle="Echte und verifizierte Erfahrungsberichte der europäischen libertinen Community."
      heroImage="/images/es-preguntas-cover.webp"
      breadcrumb={[{ label: "Bewertungen" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Warum Wir Bewertungen Vertrauen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Bei AKOKY sind Bewertungen nicht anonym: Sie sind mit verifizierten Profilen verknüpft. Wenn du eine Bewertung liest, weißt du, dass sie von einer echten Person kommt.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Club-Bewertungen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Jeder in AKOKY gelistete <Link to="/de/libertine-clubs" className="text-primary hover:underline">Club</Link> sammelt Bewertungen von Mitgliedern. Durchschnittliche Bewertung, Atmosphäre, Sauberkeit, Personal — alles auf einen Blick im <Link to="/de/libertine-clubs" className="text-primary hover:underline">Verzeichnis</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Event-Bewertungen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Nach jedem <Link to="/de/events" className="text-primary hover:underline">AKOKY-Event</Link> können Teilnehmer ihre Eindrücke hinterlassen. Atmosphäre, Organisation, Qualität, Preis-Leistungs-Verhältnis.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Sauna-Bewertungen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Auch <Link to="/de/saunas" className="text-primary hover:underline">libertine Saunas</Link> werden von unserer Community bewertet. Hygiene, Ausstattung und Atmosphäre — prüfe die Bewertungen vor deinem Besuch.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Teile Deine Erfahrung</h3>
            <p className="text-muted-foreground mb-4">Lade die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> herunter und hinterlasse deine erste Bewertung.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>
      <ReviewsList lang="de" />

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/events", label: "Events" },
              { to: "/de/vip", label: "VIP" },
              { to: "/de/app", label: "AKOKY App" },
              { to: "/de/akoky-vs-wyylde", label: "AKOKY vs Wyylde" },
              { to: "/de/beste-libertine-seite", label: "Beste Seite" },
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

export default BewertungenDe;
