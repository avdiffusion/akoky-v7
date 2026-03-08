import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Wie kann man an AKOKY-Events teilnehmen?", answer: "Registriere dich bei AKOKY, durchsuche den Eventkalender und buche deinen Platz direkt online. Einige Events erfordern VIP-Status." },
  { question: "Sind Events für Anfänger offen?", answer: "Ja. Viele Events sind speziell darauf ausgelegt, neue Mitglieder herzlich zu empfangen. Sie sind im Kalender klar gekennzeichnet." },
  { question: "Kann man allein zu einem Event gehen?", answer: "Ja. Singles und Paare sind willkommen. Die Zusammensetzung der Abende variiert je nach Event." },
];

const EventsDe = () => (
  <>
    <MetaTags
      title="Libertine Events in Deutschland 2026 | 300+ Abende und Wochenenden — AKOKY"
      description="Entdecke 300+ libertine Events pro Monat: exklusive Abende, Themen-Wochenenden, private Treffen in Berlin, Hamburg und ganz Deutschland."
      canonical="https://akoky.com/de/events"
      lang="de"
    />
    <HreflangTags slug="events" />
    <ContentPageLayout
      lang="de"
      title="Libertine Events in Deutschland 2026 | 300+ Abende und Wochenenden — AKOKY"
      description="Entdecke 300+ libertine Events pro Monat: exklusive Abende, Themen-Wochenenden, private Treffen in Berlin, Hamburg und ganz Deutschland."
      canonical="https://akoky.com/de/events"
      heroTitle="Libertine Events in Deutschland"
      heroSubtitle="300+ Events pro Monat: exklusive Abende, Themen-Wochenenden, private Treffen. Reserviere deinen Platz auf AKOKY."
      heroImage="/images/es-eventos-cover.webp"
      breadcrumb={[{ label: "Libertine Events in Deutschland" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Der Größte Libertine Eventkalender</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organisiert und veröffentlicht über 300 libertine Events pro Monat in ganz Europa. In Deutschland findest du Club-Abende, After-Work Libertine-Aperitifs, Themen-Wochenenden und private Treffen in den wichtigsten Städten.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Arten von Events</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎭 Club-Abende</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Club-Abende sind das traditionellste Format. Mit festlicher Atmosphäre, Musik, Bar und mehreren Themenräumen sind sie perfekt, um die libertine Welt zu entdecken oder deinen sozialen Kreis zu erweitern.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🥂 Libertine Aperitifs</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Libertine Aperitifs sind ungezwungene Treffen, meist in einer privaten Bar oder zu Hause, um andere Paare oder Singles in einer entspannten Atmosphäre kennenzulernen. Ohne Druck, ohne Verpflichtung – ideal für Anfänger.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🌊 Themen-Wochenenden</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Wochenendausflüge in privaten Villen, Hotels oder Stranddestinationen. Diese Events kombinieren Geselligkeit, Tagesaktivitäten und libertine Abende. Plätze sind begrenzt, frühzeitig buchen empfohlen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Private Treffen</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Intimere Treffen in privaten Häusern mit einer kleinen Gruppe ausgewählter Teilnehmer. Der Zugang erfordert eine Vorprüfung und oft eine Einladung von einem Community-Mitglied.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Events für Anfänger</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organisiert regelmäßig Events speziell für Neuankömmlinge im Libertinismus. Diese Events, die im Kalender klar gekennzeichnet sind, zeichnen sich durch eine einladende Atmosphäre ohne Druck aus.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Wie Reserviert Man?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Alle AKOKY-Events werden online direkt auf der Plattform gebucht. Erstelle dein kostenloses Konto, erkunde den Eventkalender in deiner Nähe und buche deinen Platz mit wenigen Klicks.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default EventsDe;
