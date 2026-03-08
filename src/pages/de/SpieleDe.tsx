import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Sind die AKOKY-Spiele kostenlos?", answer: "Einige Spiele sind für alle Mitglieder kostenlos zugänglich. Andere Inhalte sind VIP-Mitgliedern vorbehalten." },
  { question: "Sind sie für Anfänger geeignet?", answer: "Absolut. AKOKY-Spiele sind für jeden Erfahrungsstand zugänglich und unterhaltsam gestaltet." },
];

const SpieleDe = () => (
  <>
    <HreflangTags slug="spiele" />
    <ContentPageLayout
      lang="de"
      title="Libertine Spiele AKOKY | Animationen und Aktivitäten für Abende"
      description="Entdecke unsere libertinen Spiele für unvergessliche Abende: erotische Karten, Herausforderungen, interaktive Animationen. Spielerisch, gesellig und respektvoll."
      canonical="https://akoky.com/de/spiele"
      heroTitle="Libertine Spiele AKOKY"
      heroSubtitle="Belebe deine Abende mit unseren exklusiven Spielen: Roulette, Würfel, Wahrheit oder Pflicht und mehr."
      heroImage="/images/es-juegos-cover.webp"
      breadcrumb={[{ label: "Spiele" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Warum Bei Einem Libertinen Abend Spielen?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Spiele sind eine ausgezeichnete Möglichkeit, das Eis zu brechen, Komplizenschaft zu schaffen und Wünsche auf spielerische und druckfreie Weise zu erkunden. In AKOKY Space findest du eine Auswahl von Spielen, die speziell für die libertine Community entwickelt wurden, immer mit <Link to="/de/libertinismus" className="text-primary hover:underline">Einverständnis und Respekt</Link> als Grundwerte.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Unsere Spiele</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "🎯", title: "Libertines Roulette", desc: "Ein digitales Roulette mit anpassbaren Aufgaben je nach Risikobereitschaft der Gruppe. Von sanft bis gewagt wählt jeder Teilnehmer seine Komfortzone." },
              { icon: "🎲", title: "Begehrenswürfel AKOKY", desc: "Ein Spezialwürfel mit verschiedenen Seiten: Aktionen, Körperzonen, Intensitäten. Würfle und entdecke, was das Schicksal bringt." },
              { icon: "❓", title: "Libertines Wahrheit oder Pflicht", desc: "Die Erwachsenenversion des Klassikers. Gewagt Fragen und sinnliche Aufgaben für Momente der Komplizenschaft und Entdeckung." },
              { icon: "💑", title: "Paar-Herausforderungen", desc: "Herausforderungen speziell für Paare: Kommunikation, Vertrauen, Kreativität und Sinnlichkeit. Eine Reise gegenseitiger Entdeckung." },
            ].map((g, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border">
                <span className="text-3xl mb-3 block">{g.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-muted-foreground text-sm">{g.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Grundregeln der AKOKY-Spiele</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Alle AKOKY-Spiele basieren auf denselben Prinzipien: ausdrückliches Einverständnis vor jeder Aktion, absolutes Recht zu passen ohne Erklärungen, Respektierung der Grenzen jedes Teilnehmers. Spielen sollte immer eine Quelle der Freude sein, nie des Drucks.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Spiele für Deinen Ersten Abend</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Wenn du gerade mit dem <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Libertinismus anfängst</Link>, sind Spiele der ideale Einstieg. Sie ermöglichen es, Grenzen spielerisch zu erkunden, ohne Druck. Entdecke auch unser <Link to="/de/lexikon" className="text-primary hover:underline">Libertines Lexikon</Link>, um alle Begriffe zu verstehen.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Bereit zu spielen?</h3>
            <p className="text-muted-foreground mb-4">Entdecke alle Spiele in der <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> und erlebe unvergessliche Abende.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/libertinismus-anfangen", label: "Anfangen" },
              { to: "/de/lexikon", label: "Lexikon" },
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/events", label: "Events" },
              { to: "/de/clubbing", label: "Clubbing" },
              { to: "/de/live", label: "Lives" },
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

export default SpieleDe;
