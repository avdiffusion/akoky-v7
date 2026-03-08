import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Ist die Teilnahme kostenlos?", answer: "Ja. Alle AKOKY-Gewinnspiele sind kostenlos und stehen allen registrierten Mitgliedern offen." },
  { question: "Wie gewinnt man?", answer: "Jedes Gewinnspiel hat eigene Regeln. Folge den Anweisungen auf der jeweiligen Gewinnspielseite." },
  { question: "Was kann man gewinnen?", answer: "Aufenthalte in Premium-Clubs, VIP-Abonnements, exklusive Erlebnisse und Sachpreise." },
];

const ConcoursGuideDe = () => (
  <>
    <MetaTags title="AKOKY Gewinnspiel 2026 | Mitmachen und Gewinnen" description="Nimm an exklusiven AKOKY-Gewinnspielen teil und gewinne einzigartige Erlebnisse: Aufenthalte, VIP-Zugang, Premium-Events." canonical="https://akoky.com/de/gewinnspiel-akoky-2026" lang="de" />
    <HreflangTags slug="gewinnspiel-akoky-2026" />
    <ContentPageLayout lang="de" title="AKOKY Gewinnspiel 2026" description="Nimm an exklusiven Gewinnspielen teil." canonical="https://akoky.com/de/gewinnspiel-akoky-2026" heroTitle="AKOKY Gewinnspiel 2026" heroSubtitle="Mitmachen und exklusive Preise für die AKOKY-Community gewinnen — kostenlos und ohne Verpflichtung." heroImage="/images/concours/six-cles.webp" breadcrumb={[{ label: "Gewinnspiel" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Aktuelle Gewinnspiele</h2>

          <div className="p-6 rounded-xl border border-primary/30 bg-card/50 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-3">🔑 Das Sechs-Schlüssel-Spiel</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">Finde 6 versteckte Schlüssel auf AKOKY und gewinne eine Woche im RIAD5 Cap d'Agde — Wert 4.500€. Kostenlose Teilnahme, ein Gewinner.</p>
            <Link to="/de/sechs-schluessel-spiel" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all">
              Jetzt teilnehmen →
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Wie Funktioniert Es?</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start"><span className="text-2xl">1️⃣</span><p className="text-muted-foreground">Erstelle dein kostenloses AKOKY-Konto</p></div>
            <div className="flex gap-4 items-start"><span className="text-2xl">2️⃣</span><p className="text-muted-foreground">Wähle ein Gewinnspiel und lies die Regeln</p></div>
            <div className="flex gap-4 items-start"><span className="text-2xl">3️⃣</span><p className="text-muted-foreground">Nimm teil und erfülle die Aufgaben</p></div>
            <div className="flex gap-4 items-start"><span className="text-2xl">4️⃣</span><p className="text-muted-foreground">Gewinner werden per E-Mail benachrichtigt</p></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Vergangene Gewinnspiele</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organisiert regelmäßig Gewinnspiele mit attraktiven Preisen. Folge uns, um kein zukünftiges Gewinnspiel zu verpassen.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ConcoursGuideDe;
