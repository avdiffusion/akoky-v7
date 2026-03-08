import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Wie kontaktiert man den AKOKY-Support?", answer: "Über unser Online-Formular, per E-Mail an support@akoky.com oder aus deinem Mitgliederbereich. Unser Team antwortet in unter 24 Arbeitsstunden." },
  { question: "Bietet AKOKY Support auf Deutsch an?", answer: "Ja. Unser Support ist auf Deutsch, Französisch, Spanisch, Italienisch und Portugiesisch verfügbar." },
  { question: "Wie meldet man ein problematisches Profil?", answer: "Nutze die &#39;Melden&#39;-Schaltfläche auf jedem Profil. Unser Moderationsteam bearbeitet jede Meldung innerhalb von 2 Stunden." },
];

const KontaktDe = () => (
  <>
    <MetaTags
      title="AKOKY Deutschland | Kontakt — Support und Premium-Assistance"
      description="Kontaktiere AKOKY: Mitglieder-Support, Partner-Anfragen, Presse und Affiliate. Team 24h verfügbar."
      canonical="https://akoky.com/de/kontakt"
      lang="de"
    />
    <HreflangTags slug="kontakt" />
    <ContentPageLayout
      lang="de"
      title="AKOKY Deutschland | Kontakt — Support und Premium-Assistance"
      description="Kontaktiere AKOKY: Mitglieder-Support, Partner-Anfragen, Presse und Affiliate. Team 24h verfügbar."
      canonical="https://akoky.com/de/kontakt"
      heroTitle="AKOKY Kontaktieren"
      heroSubtitle="Unser Team steht 24h zur Verfügung. Finde den richtigen Kontaktkanal für deine Anfrage."
      breadcrumb={[{ label: "AKOKY Kontaktieren" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Mitglieder-Support</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Hast du eine Frage zu deinem Konto, einer Funktion oder einem Erlebnis auf der Plattform? Unser Support-Team antwortet innerhalb von 24 Arbeitsstunden. Greife auf das Kontaktformular aus deinem Mitgliederbereich zu für eine schnellere Antwort.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Support-E-Mail</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">support@akoky.com — Für alle Fragen zu deinem Konto und den Plattformfunktionen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Öffnungszeiten</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Montag bis Freitag: 9-20 Uhr. Samstag und Sonntag: 10-18 Uhr. Übliche Antwortzeit: unter 24 Arbeitsstunden.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Partner-Anfragen</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Führst du einen libertinen Club, organisierst Events oder vertrittst ein Medienunternehmen? Wir haben spezifische Angebote für jedes Profil.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Libertine Clubs</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Füge deine Einrichtung im AKOKY-Verzeichnis hinzu und greife auf unsere Community von 1,5 Millionen Mitgliedern zu. Kontaktiere unser Partnerschaftsteam für die Konditionen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Event-Organisatoren</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Veröffentliche deine Events im AKOKY-Kalender und nutze unsere Sichtbarkeit. Schreibe uns an partenaires@akoky.com.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Medien und Influencer</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Für Presseanfragen, Interviews oder redaktionelle Kooperationen: presse@akoky.com. Unser Kommunikationsteam antwortet innerhalb von 48 Arbeitsstunden.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Ein Profil Melden</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Wenn du ein Profil oder einen Inhalt findest, der die AKOKY-Charta nicht respektiert, nutze die &#39;Melden&#39;-Schaltfläche auf jedem Profil und jeder Veröffentlichung. Unser Moderationsteam bearbeitet jede Meldung innerhalb von 2 Stunden.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default KontaktDe;
