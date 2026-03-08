import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Ist AKOKY kostenlos?", answer: "Ja, die Registrierung ist völlig kostenlos. Grundfunktionen stehen allen Mitgliedern zur Verfügung. Premium-Funktionen (Mehrfachprofile, VIP-Events, exklusive Lives) sind mit einem VIP-Abonnement verfügbar." },
  { question: "Ist AKOKY in Deutschland verfügbar?", answer: "Ja. AKOKY hat eine aktive Community in ganz Deutschland: Berlin, Hamburg, München, Köln, Frankfurt, Düsseldorf und viele weitere Städte." },
  { question: "Wie gewährleistet AKOKY Diskretion?", answer: "Durch Verschlüsselung auf Bankniveau, manuelle Profilverifizierung, Inkognito-Modus, Foto-Unschärfe und ungefähre Geolokalisierung. Deine Identität und Daten sind geschützt." },
  { question: "Kann ich allein beitreten?", answer: "Natürlich. AKOKY heißt sowohl Paare als auch Singles willkommen. Alleinreisende Frauen haben in vielen Clubs und Events bevorzugten Zugang." },
];

const HomeDe = () => (
  <>
    <MetaTags
      title="AKOKY Deutschland | Die Premium-Libertine Community Europas"
      description="Tritt AKOKY bei, der größten libertinen Community Europas. 1,5 Millionen Mitglieder, 120+ verifizierte Clubs, 300 Events pro Monat. Kostenlose Registrierung."
      canonical="https://akoky.com/de/"
      lang="de"
    />
    <HreflangTags slug="" />
    <ContentPageLayout
      lang="de"
      title="AKOKY Deutschland | Die Premium-Libertine Community Europas"
      description="Tritt AKOKY bei, der größten libertinen Community Europas. 1,5 Millionen Mitglieder, 120+ verifizierte Clubs, 300 Events pro Monat. Kostenlose Registrierung."
      canonical="https://akoky.com/de/"
      heroTitle="Die größte libertine Community Europas"
      heroSubtitle="1,5 Millionen Mitglieder, verifizierte Clubs und exklusive Events in Deutschland und Europa. Jetzt kostenlos starten."
      breadcrumb={[{ label: "Die größte libertine Community Europas" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Was ist AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY ist Europas größte Premium-Plattform für die libertine Community. Mit über 1,5 Millionen aktiven Mitgliedern, einem Verzeichnis von 120+ verifizierten Clubs und über 300 organisierten Events pro Monat bietet AKOKY ein vollständiges Ökosystem für Paare und Singles, die den liberti­nen Lebensstil sicher, diskret und authentisch erleben möchten.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Anders als herkömmliche Dating-Apps ist AKOKY ein vollständiges soziales Netzwerk: WhatsApp-ähnlicher Chat mit Gruppen, exklusive Mehrfachprofile, verifizierte Erfahrungsberichte, Live-Streaming und ein Club-Verzeichnis mit Community-Bewertungen.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Warum AKOKY wählen?</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Sicherheit und Diskretion</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Identitätsverifizierung, menschliche Moderation 24h/7d und erweiterte Datenschutzoptionen: Foto-Unschärfe, Inkognito-Modus, ungefähre Geolokalisierung. Deine Privatsphäre, geschützt.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💎 Premium-Qualität</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">iOS- und Android-App, erweiterte Funktionen und Zugang zu exklusiven Events. AKOKY SAFE, unser Verifikationssystem, garantiert Authentizität bei jedem Profil.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🤝 Respektvolle Community</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Klarer Verhaltenskodex, Einverständnis im Mittelpunkt jedes Austauschs und Begleitung für neue Mitglieder. Eine Community, in der Respekt selbstverständlich ist.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🌍 Europäisches Netzwerk</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Aktive Präsenz in Deutschland, Frankreich, Belgien, Spanien, Italien und Portugal. Events und Treffen auf europäischer Ebene für ein grenzenloses Erlebnis.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Libertine Clubs in Deutschland</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY listet die besten verifizierten libertinen Clubs in Deutschland: Berlin, Hamburg, München, Köln, Frankfurt und über 30 weitere Städte. Jeder Eintrag enthält Fotos, Öffnungszeiten, Preise und verifizierte Community-Bewertungen.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Jetzt AKOKY Deutschland beitreten</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Die Registrierung ist kostenlos und erfordert keine Kreditkarte. Erstelle dein Profil, entdecke die Community und erkunde in deinem eigenen Tempo. AKOKY ist auf Deutsch, Französisch, Spanisch, Italienisch und Portugiesisch verfügbar.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default HomeDe;
