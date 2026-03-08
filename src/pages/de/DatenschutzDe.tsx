import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const DatenschutzDe = () => (
  <>
    <MetaTags
      title="Datenschutzrichtlinie | AKOKY Deutschland"
      description="Datenschutzrichtlinie von AKOKY: verwendete Cookie-Typen, Zwecke und Verwaltung. DSGVO-Konformität."
      canonical="https://akoky.com/de/datenschutz"
      lang="de"
    />
    <HreflangTags slug="datenschutz" />
    <ContentPageLayout
      lang="de"
      title="Datenschutzrichtlinie | AKOKY Deutschland"
      description="Datenschutzrichtlinie von AKOKY: Cookie-Typen, Zwecke und DSGVO-Konformität."
      canonical="https://akoky.com/de/datenschutz"
      heroTitle="Datenschutz und Cookies"
      heroSubtitle="Vollständige Transparenz über die Verwendung von Daten und Cookies auf AKOKY."
      breadcrumb={[{ label: "Datenschutz" }]}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Was Sind Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Cookies sind kleine Textdateien, die auf deinem Gerät gespeichert werden, wenn du eine Website besuchst. Sie ermöglichen es, Einstellungen zu merken und personalisierte Funktionen bereitzustellen.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Von Uns Verwendete Cookies</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: "🔒", title: "Wesentliche Cookies", desc: "Authentifizierung, Sitzungssicherheit und Hauptfunktionen. Können nicht deaktiviert werden." },
              { icon: "📊", title: "Leistungs-Cookies", desc: "Analyse der Nutzung: meistbesuchte Seiten, Ladezeiten, Fehler. Anonyme und aggregierte Daten." },
              { icon: "⚙️", title: "Personalisierungs-Cookies", desc: "Einstellungen merken: Sprache, Anzeigeeinstellungen, Suchfilter für ein besseres Erlebnis." },
            ].map((c, i) => (
              <div key={i} className="p-5 bg-card/50 rounded-xl border border-border">
                <span className="text-2xl mb-2 block">{c.icon}</span>
                <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Deine Cookies Verwalten</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Du kannst deine Cookie-Einstellungen jederzeit über das Cookie-Verwaltungspanel verwalten (Fußzeile). Mehr über unsere Sicherheitsphilosophie in unserer <Link to="/de/vision" className="text-primary hover:underline">Vision</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">DSGVO-Konformität</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY hält sich strikt an die Datenschutz-Grundverordnung (DSGVO). Für Fragen kontaktiere unseren Datenschutzbeauftragten unter dpo@akoky.com oder nutze unsere <Link to="/de/kontakt" className="text-primary hover:underline">Kontaktseite</Link>.</p>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: "/de/kontakt", label: "Kontakt" },
              { to: "/de/vision", label: "Vision" },
              { to: "/de/app", label: "AKOKY App" },
              { to: "/de/vip", label: "VIP" },
              { to: "/de", label: "Startseite" },
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

export default DatenschutzDe;
