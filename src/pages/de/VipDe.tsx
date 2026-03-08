import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Was sind die Vorteile des AKOKY VIP-Status?", answer: "Zugang zu exklusiven Events, zertifizierte Mehrfachprofile, private Alben, VIP-Lives, Prioritäts-Messaging und Community-sichtbares Vertrauens-Badge." },
  { question: "Was ist die Mehrfachprofil-Funktion?", answer: "Die exklusive AKOKY-Funktion, die es ermöglicht, mehrere Profile (Paar, Single Mann, Single Frau) in einem einzigen Konto mit einem Klick zu erstellen." },
  { question: "Wie erhält man die VIP-Zertifizierung?", answer: "Die Zertifizierung wird nach Identitätsverifizierung vergeben. Sie garantiert der Community, dass du wirklich die im Profil angegebene Person bist." },
  { question: "Was kostet das VIP-Abonnement?", answer: "Preise sind auf der AKOKY-Abonnementseite verfügbar. Es gibt monatliche, vierteljährliche und jährliche Pläne." },
];

const VipDe = () => (
  <>
    <MetaTags
      title="AKOKY VIP | Premium-Abonnement — Exklusiver Zugang zur Libertinen Community"
      description="Entdecke das AKOKY VIP-Abonnement: exklusiver Zugang zu privaten Events, zertifizierte Mehrfachprofile und sichere Premium-Community."
      canonical="https://akoky.com/de/vip"
      lang="de"
    />
    <HreflangTags slug="vip" />
    <ContentPageLayout
      lang="de"
      title="AKOKY VIP | Premium-Abonnement — Exklusiver Zugang zur Libertinen Community"
      description="Entdecke das AKOKY VIP-Abonnement: exklusiver Zugang zu privaten Events, zertifizierte Mehrfachprofile und sichere Premium-Community."
      canonical="https://akoky.com/de/vip"
      heroTitle="AKOKY VIP-Status"
      heroSubtitle="Greife auf exklusive Privilegien zu und erlebe das libertine Erlebnis auf höchstem Niveau."
      heroImage="/images/es-vip-cover.webp"
      breadcrumb={[{ label: "AKOKY VIP-Status" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Warum VIP bei AKOKY werden?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Der AKOKY VIP-Status ist weit mehr als ein Abonnement: Er ist dein Pass zu einem überlegenen libertinen Erlebnis. Mehr Funktionen, mehr Exklusivität, mehr Vertrauen der Community.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Mehrfachprofile: Ein Konto, Mehrere Identitäten</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Ein einziges Konto</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Mit VIP-Status kannst du bis zu drei verschiedene Profile (Paar, Single Mann, Single Frau) unter einem einzigen Konto erstellen. Jedes Profil hat seine eigene Galerie, Beschreibung und Datenschutzeinstellungen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Wechsel mit einem Klick</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Wechsle sofort zwischen Profilen je nach Kontext: Nutze dein Paarprofil für Club-Events, dein Einzelprofil für Aperitifs, ohne dich ab- und anmelden zu müssen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Pflichtverifizierung</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Alle VIP-Profile sind durch Identitätsverifizierung zertifiziert. Das Vertrauens-Badge ist für die gesamte Community sichtbar und erhöht deine Glaubwürdigkeit erheblich.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Exklusive VIP-Vorteile</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Exklusive Events</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">VIP-Mitglieder haben prioritären und exklusiven Zugang zu AKOKYs ausgewähltesten Events: private Villen-Abende, Luxus-Wochenenden, intime Treffen mit Gästeauswahl.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Private Alben</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Erstelle private Fotoalben mit vollständiger Zugriffskontrolle: Entscheide, wer deine Fotos sehen kann und wie lange. Teile sicher und selektiv.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Exklusive Lives</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Greife auf die exklusivsten Lives der Plattform zu: Luxusclub-Abende, VIP-Inhalte und private Übertragungen, die der Premium-Community vorbehalten sind.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VipDe;
