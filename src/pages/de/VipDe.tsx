import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

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
          <p className="text-muted-foreground leading-relaxed mb-4">Der AKOKY VIP-Status ist weit mehr als ein Abonnement: Er ist dein Pass zu einem überlegenen libertinen Erlebnis. Mehr Funktionen, mehr Exklusivität, mehr Vertrauen der Community. Entdecke auch unsere <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> für den mobilen Zugang zu allen VIP-Funktionen.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Mehrfachprofile: Ein Konto, Mehrere Identitäten</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: "👤", title: "Ein einziges Konto", desc: "Bis zu drei verschiedene Profile (Paar, Single Mann, Single Frau) unter einem einzigen Konto erstellen." },
              { icon: "🔄", title: "Wechsel mit einem Klick", desc: "Sofort zwischen Profilen wechseln je nach Kontext: Paarprofil für Clubs, Einzelprofil für Aperitifs." },
              { icon: "✅", title: "Pflichtverifizierung", desc: "Alle VIP-Profile sind durch Identitätsverifizierung zertifiziert. Das Vertrauens-Badge ist Community-sichtbar." },
            ].map((f, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{f.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Exklusive VIP-Vorteile</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "🎉", title: "Exklusive Events", desc: "Prioritärer Zugang zu AKOKYs ausgewähltesten Events: private Villen-Abende, Luxus-Wochenenden, intime Treffen." },
              { icon: "📸", title: "Private Alben", desc: "Private Fotoalben mit vollständiger Zugriffskontrolle: Entscheide, wer deine Fotos sehen kann." },
              { icon: "📺", title: "Exklusive Lives", desc: "Zugang zu den exklusivsten Lives der Plattform: Luxusclub-Abende, VIP-Inhalte und private Übertragungen." },
              { icon: "💬", title: "Prioritäts-Messaging", desc: "Deine Nachrichten werden hervorgehoben angezeigt. VIP-Mitglieder erhalten mehr Antworten." },
            ].map((f, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{f.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Werde jetzt VIP</h3>
            <p className="text-muted-foreground mb-4">Entdecke die besten <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertinen Clubs</Link>, exklusive <Link to="/de/events" className="text-primary hover:underline">Events</Link> und <Link to="/de/live" className="text-primary hover:underline">Lives</Link> mit VIP-Status.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">VIP werden →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/app", label: "AKOKY App" },
              { to: "/de/live", label: "Lives" },
              { to: "/de/events", label: "Events" },
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/bewertungen", label: "Bewertungen" },
              { to: "/de/empfehlung", label: "Empfehlung" },
              { to: "/de/vision", label: "Vision" },
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

export default VipDe;
