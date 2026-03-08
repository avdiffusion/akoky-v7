import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Wie kann ich AKOKY kontaktieren?", answer: "Sende eine Anfrage an presse@akoky.com mit deinem Medium, Thema und Deadline." },
  { question: "Gibt es ein Presse-Kit?", answer: "Ja. Logos, Bilder und Informationsmaterial stehen nach Anfrage zur Verfügung." },
];

const PresseGuideDe = () => (
  <>
    <MetaTags title="AKOKY Pressestelle | Ressourcen für Journalisten und Medien" description="Offizielle AKOKY-Pressestelle: Pressemitteilungen, Presse-Kit, Statistiken und Journalistenkontakt." canonical="https://akoky.com/de/pressestelle" lang="de" ogImage="/images/es-prensa-cover.webp" />
    <HreflangTags slug="pressestelle" />
    <ContentPageLayout lang="de" title="AKOKY Pressestelle" description="Ressourcen für Journalisten und Medien." canonical="https://akoky.com/de/pressestelle" heroTitle="AKOKY Pressestelle" heroSubtitle="Ressourcen für Journalisten, Blogger und Medienpartner — offizielle Informationen und Materialien." heroImage="/images/es-prensa-cover.webp" breadcrumb={[{ label: "Pressestelle" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Über AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY ist Europas führende libertine Plattform mit über 1,5 Millionen aktiven Mitgliedern. Gegründet als Evolution von AcoquinementVotre, bietet AKOKY ein vollständiges soziales Netzwerk: verifizierte Profile, WhatsApp-ähnlicher Chat, Live-Streaming, Club-Verzeichnis und Events.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Schlüsselzahlen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: "1,5M+", label: "Mitglieder" },
              { value: "120+", label: "Verifizierte Clubs" },
              { value: "300+", label: "Events/Monat" },
              { value: "6", label: "Sprachen" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-card/50 border border-border">
                <p className="text-2xl font-black text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Presseanfragen</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <h3 className="font-semibold text-foreground mb-1">📧 E-Mail</h3>
              <p className="text-muted-foreground">presse@akoky.com</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <h3 className="font-semibold text-foreground mb-1">📰 Pressemitteilungen</h3>
              <p className="text-muted-foreground">Offizielle Mitteilungen, Produkteinführungen und strategische Ankündigungen.</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <h3 className="font-semibold text-foreground mb-1">🎨 Presse-Kit</h3>
              <p className="text-muted-foreground">Offizielle Logos, Screenshots, Bilder und Markenmaterial auf Anfrage.</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <h3 className="font-semibold text-foreground mb-1">🎙️ Interviews</h3>
              <p className="text-muted-foreground">Gründer und Team stehen für Interviews zu Branchenthemen zur Verfügung.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Redaktionelle Richtlinien</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY steht für verantwortungsvollen Journalismus über den Libertinismus. Wir bitten Medien, die Privatsphäre unserer Mitglieder zu respektieren und das Thema mit der gebotenen Sensibilität zu behandeln.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PresseGuideDe;
