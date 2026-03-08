import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const ActualitesDe = () => (
  <>
    <MetaTags title="Libertine Neuigkeiten 2026 | AKOKY Deutschland" description="Neueste libertine Nachrichten: Club-Eröffnungen, exklusive Events, Trends." canonical="https://akoky.com/de/libertine-neuigkeiten" lang="de" />
    <HreflangTags slug="libertine-neuigkeiten" />
    <ContentPageLayout lang="de" title="Libertine Neuigkeiten 2026 | AKOKY Deutschland" description="Neueste libertine Nachrichten: Club-Eröffnungen, exklusive Events, Trends." canonical="https://akoky.com/de/libertine-neuigkeiten" heroTitle="Libertine Neuigkeiten" heroSubtitle="Die neuesten Nachrichten aus der libertinen Community in Deutschland und Europa" breadcrumb={[{ label: "Libertine Neuigkeiten" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Community-Nachrichten</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Die neuesten Nachrichten aus der libertinen Welt in Deutschland und Europa: Club-Eröffnungen, exklusive <Link to="/de/events" className="text-primary hover:underline">Events</Link>, Brancheninterviews. Entdecke die neuesten <Link to="/de/libertine-clubs" className="text-primary hover:underline">Clubs</Link> und <Link to="/de/saunas" className="text-primary hover:underline">Saunas</Link> in unserem Verzeichnis.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Herausragende Events des Monats</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY hebt jeden Monat die meisterwarteten Events hervor: Themenabende, Wochenenden in exklusiven Locations, private Soirées. Schau dir den <Link to="/de/events" className="text-primary hover:underline">Event-Kalender</Link> an.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Trends 2026</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "✨", title: "Qualitätssteigerung", desc: "Neue Einrichtungen setzen auf hochwertigere Dekoration und Services." },
              { icon: "🧖", title: "Libertines Wellness", desc: "Clubs integrieren Spa-Bereiche und Wellness-Erlebnisse." },
              { icon: "📱", title: "Digitalisierung", desc: "Online-Buchung und verifizierte Profile werden zum Standard." },
              { icon: "🎭", title: "Konzeptdiversifizierung", desc: "Neue Formate: Luxusvillen, Boutique-Hotels, Bootspartys." },
            ].map((t, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{t.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Nichts verpassen</h3>
            <p className="text-muted-foreground mb-4">Lade die <Link to="/de/app" className="text-primary hover:underline">AKOKY App</Link> herunter für Echtzeit-Benachrichtigungen zu Events und Neuigkeiten.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all inline-block">Kostenlos registrieren →</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/libertine-clubs", label: "Libertine Clubs" },
              { to: "/de/clubs", label: "Verzeichnis" },
              { to: "/de/saunas", label: "Saunas" },
              { to: "/de/events", label: "Events" },
              { to: "/de/libertine-aktuelles", label: "Aktuelles" },
              { to: "/de/clubbing", label: "Clubbing" },
              { to: "/de/vip", label: "VIP" },
              { to: "/de/app", label: "AKOKY App" },
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
export default ActualitesDe;
