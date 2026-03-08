import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Ist die AKOKY-App kostenlos?", answer: "Ja. Download und Grundnutzung sind kostenlos. Premium-Funktionen sind mit VIP-Abonnement verfügbar." },
  { question: "Ist sie auf iOS und Android verfügbar?", answer: "Ja. AKOKY ist eine PWA, kompatibel mit iOS und Android. Zugang über deinen Browser auf akoky.com und Symbol zum Startbildschirm hinzufügen." },
  { question: "Respektiert die App meine Privatsphäre?", answer: "Absolut. Geolokalisierung ist ungefähr, Fotos können automatisch unscharf gemacht werden und der Inkognito-Modus ermöglicht es dir, unsichtbar zu navigieren." },
];

const AppDe = () => (
  <>
    <MetaTags
      title="AKOKY App | Libertine Premium-App iOS und Android Deutschland"
      description="Lade die AKOKY-App herunter: Geolokalisierung, Sofortnachrichten, Event-Benachrichtigungen und Profilverwaltung. Die vollständigste libertine App Europas."
      canonical="https://akoky.com/de/app"
      lang="de"
    />
    <HreflangTags slug="app" />
    <ContentPageLayout
      lang="de"
      title="AKOKY App | Libertine Premium-App iOS und Android Deutschland"
      description="Lade die AKOKY-App herunter: Geolokalisierung, Sofortnachrichten, Event-Benachrichtigungen und Profilverwaltung. Die vollständigste libertine App Europas."
      canonical="https://akoky.com/de/app"
      heroTitle="Die Vollständigste Libertine App Europas"
      heroSubtitle="Geolokalisierung, WhatsApp-ähnlicher Chat, Event-Benachrichtigungen und Mehrfachprofile. Alles auf deinem Smartphone."
      breadcrumb={[{ label: "Die Vollständigste Libertine App Europas" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY App: Deine Community in der Tasche</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Die AKOKY-App ist als PWA (Progressive Web App) verfügbar, optimiert für iOS und Android. Kein Download aus einem App-Store nötig: Zugang direkt über den Browser und das Symbol zum Startbildschirm hinzufügen.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Hauptfunktionen</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📍 Geolokalisierung</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Finde Mitglieder, Clubs und Events in Echtzeit in deiner Nähe. Die Geolokalisierung ist ungefähr, um deine Privatsphäre zu schützen: Deine genaue Position wird nie preisgegeben.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Sofortnachrichten</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Einzel- und Gruppenchat wie WhatsApp, mit Lesebestätigung, Fotosendung und Sprachnachrichten. Koordiniere Treffen, organisiere Abende und halte mit deinem Netzwerk einfach und sicher Kontakt.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔔 Event-Benachrichtigungen</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Erhalte Push-Benachrichtigungen für Events, die dich interessieren: neue Abende in deiner Stadt, Events deiner Lieblingsclubs und Buchungserinnerungen. Verpasse nie eine Gelegenheit.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👤 Profil- und Mehrfachprofilverwaltung</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Aktualisiere dein Profil, verwalte deine Fotogalerie und wechsle mit einem Tippen zwischen deinen verschiedenen Profilen (Paar, Single Mann, Single Frau). Die Mehrfachprofil-Funktion ist exklusiv bei AKOKY.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Datenschutz und Sicherheit</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Die AKOKY-App beinhaltet dieselben Schutzmaßnahmen wie die Web-Version: Ende-zu-Ende-Verschlüsselung, Inkognito-Modus, Foto-Unschärfe und volle Kontrolle über deine Sichtbarkeit. Deine Privatsphäre unter deiner Kontrolle.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AppDe;
