import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Sind die AKOKY-Spiele kostenlos?", answer: "Einige Spiele sind für alle Mitglieder kostenlos zugänglich. Andere Inhalte sind VIP-Mitgliedern vorbehalten." },
  { question: "Sind sie für Anfänger geeignet?", answer: "Absolut. AKOKY-Spiele sind für jeden Erfahrungsstand zugänglich und unterhaltsam gestaltet." },
];

const SpieleDe = () => (
  <>
    <MetaTags
      title="Libertine Spiele AKOKY | Animationen und Aktivitäten für Abende"
      description="Entdecke unsere libertinen Spiele für unvergessliche Abende: erotische Karten, Herausforderungen, interaktive Animationen. Spielerisch, gesellig und respektvoll."
      canonical="https://akoky.com/de/spiele"
      lang="de"
    />
    <HreflangTags slug="spiele" />
    <ContentPageLayout
      lang="de"
      title="Libertine Spiele AKOKY | Animationen und Aktivitäten für Abende"
      description="Entdecke unsere libertinen Spiele für unvergessliche Abende: erotische Karten, Herausforderungen, interaktive Animationen. Spielerisch, gesellig und respektvoll."
      canonical="https://akoky.com/de/spiele"
      heroTitle="Libertine Spiele AKOKY"
      heroSubtitle="Belebe deine Abende mit unseren exklusiven Spielen: Roulette, Würfel, Wahrheit oder Pflicht und mehr."
      heroImage="/images/es-juegos-cover.webp"
      breadcrumb={[{ label: "Libertine Spiele AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Warum Bei Einem Libertinen Abend Spielen?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Spiele sind eine ausgezeichnete Möglichkeit, das Eis zu brechen, Komplizenschaft zu schaffen und Wünsche auf spielerische und druckfreie Weise zu erkunden. In AKOKY Space findest du eine Auswahl von Spielen, die speziell für die libertine Community entwickelt wurden, immer mit Einverständnis und Respekt als Grundwerte.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Unsere Spiele</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎯 Libertines Roulette</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ein digitales Roulette mit anpassbaren Aufgaben je nach Risikobereitschaft der Gruppe. Von sanft bis gewagt wählt jeder Teilnehmer seine Komfortzone. Das Spiel passt sich an alle Gruppen an.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎲 Begehrenswürfel AKOKY</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ein Spezialwürfel mit verschiedenen Seiten: Aktionen, Körperzonen, Intensitäten. Würfle und entdecke, was das Schicksal bringt. Ein Klassiker neu erfunden mit AKOKY-Touch.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">❓ Libertines Wahrheit oder Pflicht</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Die Erwachsenenversion des Klassikers. Gewagt Fragen und sinnliche Aufgaben sorgfältig ausgearbeitet, um Momente der Komplizenschaft und Entdeckung zu schaffen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💑 Paar-Herausforderungen</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Herausforderungen speziell für Paare, die gemeinsam erkunden möchten: Kommunikation, Vertrauen, Kreativität und Sinnlichkeit. Eine Reise gegenseitiger Entdeckung mit spielerischer Struktur.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Grundregeln der AKOKY-Spiele</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Alle AKOKY-Spiele basieren auf denselben Prinzipien: ausdrückliches Einverständnis vor jeder Aktion, absolutes Recht zu passen ohne Erklärungen, Respektierung der Grenzen jedes Teilnehmers. Spielen sollte immer eine Quelle der Freude sein, nie des Drucks.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default SpieleDe;
