import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Was ist AKOKYs Mission?", answer: "Der europäischen libertinen Community eine Premium-, sichere und ethische Plattform zu bieten, die Einverständnis, Sicherheit und Authentizität ins Zentrum jeder Interaktion stellt." },
  { question: "Ist AKOKY DSGVO-konform?", answer: "Ja. AKOKY wird von Liberty-Interactive-Ltd betrieben und hält sich strikt an die DSGVO. Datenschutz hat absolute Priorität." },
  { question: "In welchen Ländern ist AKOKY verfügbar?", answer: "AKOKY ist in ganz Europa verfügbar: Frankreich, Spanien, Belgien, Schweiz, Luxemburg, Deutschland, Italien und Portugal." },
];

const VisionDe = () => (
  <>
    <MetaTags
      title="AKOKY | Unsere Vision — Die Evolution des Modernen Libertinismus"
      description="Entdecke AKOKYs Vision: eine moderne, sichere und verantwortungsvolle libertine Plattform. Von AcoquinementVotre zu AKOKY, die Geschichte einer Evolution."
      canonical="https://akoky.com/de/vision"
      lang="de"
    />
    <HreflangTags slug="vision" />
    <ContentPageLayout
      lang="de"
      title="AKOKY | Unsere Vision — Die Evolution des Modernen Libertinismus"
      description="Entdecke AKOKYs Vision: eine moderne, sichere und verantwortungsvolle libertine Plattform. Von AcoquinementVotre zu AKOKY, die Geschichte einer Evolution."
      canonical="https://akoky.com/de/vision"
      heroTitle="Unsere Vision"
      heroSubtitle="AKOKY wurde aus einer Überzeugung geboren: Moderner Libertinismus verdient eine Plattform auf seinem Niveau."
      breadcrumb={[{ label: "Unsere Vision" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die Entstehung einer Vision</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY ist die natürliche Evolution von AcoquinementVotre, einer Pionierplattform des französischen Libertinismus. Im Laufe der Jahre wurde klar, dass die libertine Community mehr als eine einfache Dating-Site verdiente: ein echtes soziales Netzwerk, ein vollständiges Ökosystem, das Treffen, Events, Clubs und Bildungsinhalte an einem Ort kombiniert.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Die AKOKY Vision</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Gelebte Freiheit</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY glaubt, dass jeder Erwachsene das Recht hat, seine Sexualität frei zu erkunden, ohne Urteile und ohne Scham. Unsere Plattform bietet einen Raum, in dem Freiheit gefeiert, nicht geduldet wird.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Klares Einverständnis</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Einverständnis ist bei AKOKY kein Detail: Es ist das Fundament von allem. Jede Funktion, jede Richtlinie, jede redaktionelle Entscheidung ist rund um das Prinzip des freien, informierten und enthusiastischen Einverständnisses aufgebaut.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Verstärkte Sicherheit</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Identitätsverifizierung, menschliche Moderation 24h/7d, Datenverschlüsselung und erweiterte Datenschutzoptionen machen AKOKY zur sichersten libertinen Plattform Europas.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Technologie im Dienst des Menschen</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Mehrfachprofil, WhatsApp-ähnlicher Chat, Live-Streaming und intelligente Geolokalisierung sind Werkzeuge für authentischere Begegnungen und eine besser vernetzte Community.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Eleganz und Diskretion</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY lehnt Vulgarität ab. Unsere Oberfläche, unsere Sprache und unsere redaktionellen Inhalte spiegeln eine elegante und respektvolle Sicht auf den Libertinismus wider. Sinnlichkeit muss nicht obszön sein.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VisionDe;
