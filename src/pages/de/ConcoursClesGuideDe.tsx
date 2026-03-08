import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Wie nehme ich teil?", answer: "Erstelle ein kostenloses AKOKY-Konto und erkunde die Plattform. Die 6 Schlüssel sind in verschiedenen Bereichen versteckt." },
  { question: "Ist die Teilnahme kostenlos?", answer: "Ja. Keine Zahlung erforderlich. Alle AKOKY-Mitglieder können teilnehmen." },
  { question: "Was ist der Preis?", answer: "Eine Woche im RIAD5 Cap d'Agde — Gesamtwert 4.500€. Ein Gewinner wird ausgelost." },
  { question: "Wie lange läuft das Spiel?", answer: "Von März bis Dezember 2026. Genug Zeit, um alle Schlüssel zu finden." },
];

const ConcoursClesGuideDe = () => (
  <>
    <MetaTags title="Das Sechs-Schlüssel-Spiel AKOKY 2026 | Gewinne eine Woche in Cap d'Agde" description="Finde 6 versteckte Schlüssel auf AKOKY und gewinne eine Woche im RIAD5 Cap d'Agde (4.500€). Kostenlose Teilnahme." canonical="https://akoky.com/de/sechs-schluessel-spiel" lang="de" />
    <HreflangTags slug="sechs-schluessel-spiel" />
    <ContentPageLayout lang="de" title="Das Sechs-Schlüssel-Spiel AKOKY 2026" description="Finde 6 versteckte Schlüssel und gewinne." canonical="https://akoky.com/de/sechs-schluessel-spiel" heroTitle="Das Sechs-Schlüssel-Spiel" heroSubtitle="Erkunde AKOKY, finde 6 Schlüssel und gewinne eine Woche im RIAD5 Cap d'Agde — Wert 4.500€" heroImage="/images/concours/six-cles.webp" breadcrumb={[{ label: "Gewinnspiel", href: "/de/gewinnspiel-akoky-2026" }, { label: "Das Sechs-Schlüssel-Spiel" }]} faq={FAQ} schema={{ "@context": "https://schema.org", "@type": "Event", name: "Das Sechs-Schlüssel-Spiel AKOKY 2026", url: "https://akoky.com/de/sechs-schluessel-spiel", startDate: "2026-03-01", endDate: "2026-12-31", location: { "@type": "VirtualLocation", url: "https://akoky.com" }, organizer: { "@type": "Organization", name: "AKOKY", url: "https://akoky.com" }, offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" } }}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Das Konzept</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">6 virtuelle Schlüssel sind auf der AKOKY-Plattform versteckt — in verschiedenen Bereichen, Seiten und Funktionen. Erkunde die App, entdecke die Community und sammle alle 6 Schlüssel, um am Hauptgewinn teilzunehmen.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Der Hauptpreis</h2>
          <div className="p-6 rounded-xl border border-primary/30 bg-card/50 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-3">🏖️ Eine Woche im RIAD5 Cap d'Agde</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">Gesamtwert: <strong className="text-primary">4.500€</strong></p>
            <p className="text-muted-foreground leading-relaxed">Luxusunterkunft in einer der bekanntesten libertinen Destinationen Europas. Inklusive Zugang zu exklusiven Events und VIP-Erlebnissen.</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">So Funktioniert Es</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start"><span className="text-2xl font-bold text-primary">1</span><div><h4 className="font-semibold text-foreground">Registrieren</h4><p className="text-muted-foreground text-sm">Erstelle dein kostenloses AKOKY-Konto</p></div></div>
            <div className="flex gap-4 items-start"><span className="text-2xl font-bold text-primary">2</span><div><h4 className="font-semibold text-foreground">Erkunden</h4><p className="text-muted-foreground text-sm">Durchsuche Profile, Clubs, Events, Lives und mehr</p></div></div>
            <div className="flex gap-4 items-start"><span className="text-2xl font-bold text-primary">3</span><div><h4 className="font-semibold text-foreground">Sammeln</h4><p className="text-muted-foreground text-sm">Finde alle 6 versteckten Schlüssel</p></div></div>
            <div className="flex gap-4 items-start"><span className="text-2xl font-bold text-primary">4</span><div><h4 className="font-semibold text-foreground">Gewinnen</h4><p className="text-muted-foreground text-sm">Unter allen Teilnehmern mit 6 Schlüsseln wird ein Gewinner gezogen</p></div></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Teilnahmebedingungen</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Mindestalter 18 Jahre</li>
            <li>Aktives AKOKY-Konto erforderlich</li>
            <li>Teilnahme kostenlos, ohne Kaufpflicht</li>
            <li>Laufzeit: 1. März bis 31. Dezember 2026</li>
            <li>Ein Gewinner, Benachrichtigung per E-Mail</li>
          </ul>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ConcoursClesGuideDe;
