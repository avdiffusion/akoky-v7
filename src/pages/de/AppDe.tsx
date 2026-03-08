import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

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
      description="Lade die AKOKY-App herunter: Geolokalisierung, Sofortnachrichten, Event-Benachrichtigungen und Profilverwaltung."
      canonical="https://akoky.com/de/app"
      heroTitle="Die Vollständigste Libertine App Europas"
      heroSubtitle="Geolokalisierung, WhatsApp-ähnlicher Chat, Event-Benachrichtigungen und Mehrfachprofile. Alles auf deinem Smartphone."
      heroImage="/images/es-app-cover.webp"
      breadcrumb={[{ label: "AKOKY App" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY App: Deine Community in der Tasche</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Die AKOKY-App ist als PWA (Progressive Web App) verfügbar, optimiert für iOS und Android. Kein Download aus einem App-Store nötig: Zugang direkt über den Browser und das Symbol zum Startbildschirm hinzufügen. Entdecke <Link to="/de/libertine-clubs" className="text-primary hover:underline">libertine Clubs</Link>, <Link to="/de/events" className="text-primary hover:underline">Events</Link> und die gesamte Community mobil.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Hauptfunktionen</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "📍", title: "Geolokalisierung", desc: "Finde Mitglieder, Clubs und Events in Echtzeit in deiner Nähe. Ungefähre Position schützt deine Privatsphäre." },
              { icon: "💬", title: "Sofortnachrichten", desc: "Einzel- und Gruppenchat wie WhatsApp, mit Lesebestätigung, Fotosendung und Sprachnachrichten." },
              { icon: "🔔", title: "Event-Benachrichtigungen", desc: "Push-Benachrichtigungen für Events: neue Abende, Buchungserinnerungen und Club-Programmänderungen." },
              { icon: "👤", title: "Mehrfachprofilverwaltung", desc: "Wechsle mit einem Tippen zwischen Profilen (Paar, Single Mann, Single Frau). Exklusiv bei AKOKY." },
            ].map((f, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{f.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Datenschutz und Sicherheit</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Die AKOKY-App beinhaltet dieselben Schutzmaßnahmen wie die Web-Version: Ende-zu-Ende-Verschlüsselung, Inkognito-Modus, Foto-Unschärfe und volle Kontrolle über deine Sichtbarkeit. Mehr über unsere <Link to="/de/vision" className="text-primary hover:underline">Vision von Sicherheit</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Noch Mehr mit VIP</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Mit dem <Link to="/de/vip" className="text-primary hover:underline">VIP-Status</Link> schaltest du erweiterte Funktionen frei: private Alben, Prioritäts-Messaging, exklusive <Link to="/de/live" className="text-primary hover:underline">Lives</Link> und mehr.</p>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Jetzt herunterladen</h3>
            <p className="text-muted-foreground mb-4">Kostenlos und in unter 30 Sekunden installiert. Keine App-Store-Downloads nötig.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Weiter entdecken</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/vip", label: "VIP" },
              { to: "/de/live", label: "Lives" },
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/events", label: "Events" },
              { to: "/de/bewertungen", label: "Bewertungen" },
              { to: "/de/spiele", label: "Spiele" },
              { to: "/de/akoky-vs-wyylde", label: "AKOKY vs Wyylde" },
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

export default AppDe;
