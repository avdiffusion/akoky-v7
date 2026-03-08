import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Muss man etwas tun?", answer: "Nein. Das Recht Nein zu sagen ist absolut. Viele Paare beobachten nur bei ihrem ersten Besuch." },
  { question: "Muss man zu zweit sein?", answer: "Nein. Alleinstehende Frauen sind sehr willkommen. Alleinstehende Männer unter bestimmten Bedingungen je nach Club." },
  { question: "Ist Libertinismus gefährlich?", answer: "Nein, wenn mit Einwilligung und Kommunikation praktiziert. In verifizierten Clubs ist Sicherheit Priorität." },
  { question: "Wie findet man Partner?", answer: "AKOKY: 1,5M Mitglieder in Europa. Erstelle dein kostenloses Profil und entdecke die Community." },
  { question: "Was kostet der Eintritt?", answer: "Zwischen 20€ und 80€ pro Paar je nach Club. Alleinstehende Frauen: oft kostenlos oder reduziert." },
  { question: "Welchen Dresscode tragen?", answer: "Prüfe das Club-Profil auf AKOKY. Generell elegant oder sexy. Sportschuhe und Jeans sind meist nicht erlaubt." },
];

const QuestionsGuideDe = () => (
  <>
    <MetaTags title="Häufige Fragen für Libertinismus-Anfänger — AKOKY" description="Die 50 häufigsten Fragen von Anfängern beantwortet: Funktionsweise, Sicherheit, Dresscode, Kosten, Vokabular und mehr." canonical="https://akoky.com/de/fragen-anfaenger-guide" lang="de" ogImage="/images/es-preguntas-cover.webp" />
    <HreflangTags slug="fragen-anfaenger-guide" />
    <ContentPageLayout lang="de" title="Häufige Fragen für Libertinismus-Anfänger — AKOKY" description="Die häufigsten Fragen von Anfängern." canonical="https://akoky.com/de/fragen-anfaenger-guide" heroTitle="Fragen für Anfänger" heroSubtitle="Antworten auf die Fragen, die alle beim Entdecken des Libertinismus stellen." heroImage="/images/es-preguntas-cover.webp" breadcrumb={[{ label: "Fragen für Anfänger" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Wichtigsten Fragen Beantwortet</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Libertinismus weckt viele Fragen — besonders wenn man gerade erst anfängt. Hier findest du ehrliche, klare Antworten auf alles, was Anfänger wissen wollen.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Was passiert in einem libertinen Club?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Es gibt bekleidete Bereiche (Bar, Lounge, Tanzfläche) und intime Bereiche. Du entscheidest, wann und ob du die intimeren Bereiche betrittst. Es gibt keine Verpflichtung — viele Besucher verbringen den ganzen Abend in der Bar.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Gibt es Regeln?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ja, klare Regeln: Einverständnis vor jeder Interaktion, keine Fotos, Diskretion nach außen, Respekt gegenüber Ablehnung. Diese Regeln machen libertine Clubs zu sicheren Räumen.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Wie erkennt man seriöse Profile online?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Auf AKOKY sind Profile mit dem SAFE-Badge verifiziert. Achte auf konsistente Beschreibungen, echte Fotos und Community-Bewertungen. Misstraue Profilen ohne Fotos oder mit unrealistischen Beschreibungen.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Was wenn ich Eifersucht empfinde?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Eifersucht ist normal und kein Zeichen von Schwäche. Sprich offen mit deinem Partner darüber. Setze klare Grenzen. Die libertine Welt respektiert dein Tempo vollständig.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Ist die Community einladend für Anfänger?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Sehr. Die meisten erfahrenen Libertinen erinnern sich an ihre eigenen Anfänge und sind geduldig und hilfsbereit. AKOKY organisiert regelmäßig spezielle Anfänger-Events.</p>

          <p className="text-muted-foreground leading-relaxed mb-4 mt-8">
            Bereit loszulegen? <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Leitfaden für Anfänger</Link> | <Link to="/de/erster-libertiner-club" className="text-primary hover:underline">Dein erster Club</Link> | <Link to="/de/lexikon" className="text-primary hover:underline">Libertines Lexikon</Link>
          </p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default QuestionsGuideDe;
