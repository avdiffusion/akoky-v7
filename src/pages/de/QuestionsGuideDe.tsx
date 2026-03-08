import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Muss man etwas tun?", answer: "Nein. Das Recht Nein zu sagen ist absolut. Viele Paare beobachten nur bei ihrem ersten Besuch." },
  { question: "Muss man zu zweit sein?", answer: "Nein. Alleinstehende Frauen sehr willkommen. Alleinstehende Männer unter Bedingungen." },
  { question: "Ist Libertinismus gefährlich?", answer: "Nein, wenn mit Einwilligung und Kommunikation praktiziert. Sicherheit ist zentral." },
  { question: "Wie findet man Partner?", answer: "AKOKY: 1,5M Mitglieder in Europa. Erstelle dein kostenloses Profil." },
  { question: "Was kostet der Eintritt?", answer: "Zwischen 20€ und 80€ pro Paar. Alleinstehende Frauen: oft kostenlos." },
  { question: "Welchen Dresscode tragen?", answer: "Prüfe das Club-Profil auf AKOKY. Generell elegant oder sexy für Männer." },
];

const QuestionsGuideDe = () => (
  <>
    <MetaTags title="Häufige Fragen für Libertinismus-Anfänger — AKOKY" description="Die 50 häufigsten Fragen von Anfängern: Funktionsweise, Sicherheit, Vokabular." canonical="https://akoky.com/de/fragen-anfaenger-guide" lang="de" />
    <HreflangTags slug="fragen-anfaenger-guide" />
    <ContentPageLayout lang="de" title="Häufige Fragen für Libertinismus-Anfänger — AKOKY" description="Die 50 häufigsten Fragen von Anfängern: Funktionsweise, Sicherheit, Vokabular." canonical="https://akoky.com/de/fragen-anfaenger-guide" heroTitle="Fragen für Anfänger" heroSubtitle="Antworten auf die Fragen, die alle beim Entdecken des Libertinismus stellen" breadcrumb={[{ label: "Fragen für Anfänger" }]}
      faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default QuestionsGuideDe;
