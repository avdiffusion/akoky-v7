import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";


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
      description="Datenschutzrichtlinie von AKOKY: verwendete Cookie-Typen, Zwecke und Verwaltung. DSGVO-Konformität."
      canonical="https://akoky.com/de/datenschutz"
      heroTitle="Datenschutz und Cookies"
      heroSubtitle="Vollständige Transparenz über die Verwendung von Daten und Cookies auf AKOKY."
      breadcrumb={[{ label: "Datenschutz und Cookies" }]}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Was Sind Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Cookies sind kleine Textdateien, die auf deinem Gerät gespeichert werden, wenn du eine Website besuchst. Sie ermöglichen es der Website, deine Einstellungen zu merken, dein Surferlebnis zu verbessern und personalisierte Funktionen bereitzustellen.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Von Uns Verwendete Cookies</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Wesentliche Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Sie sind für das grundlegende Funktionieren der Website notwendig: Authentifizierung, Sitzungssicherheit und Funktionieren der Hauptfunktionen. Sie können nicht deaktiviert werden, ohne das Funktionieren der Website zu beeinträchtigen.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Leistungs-Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Sie ermöglichen es uns, die Nutzung der Website zu analysieren, um sie zu verbessern: meistbesuchte Seiten, Ladezeiten, aufgetretene Fehler. Alle gesammelten Informationen sind anonym und aggregiert.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Personalisierungs-Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Sie erlauben es, deine Einstellungen zu merken: Sprache, Anzeigeeinstellungen, Suchfilter. Sie verbessern dein Erlebnis bei jedem Besuch.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Deine Cookies Verwalten</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Du kannst deine Cookie-Einstellungen jederzeit über unser Cookie-Verwaltungspanel verwalten, das über die Fußzeile der Website zugänglich ist. Du kannst auch deinen Browser konfigurieren, um alle Cookies abzulehnen, obwohl dies das Funktionieren einiger Funktionen beeinträchtigen könnte.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">DSGVO-Konformität</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY hält sich strikt an die Datenschutz-Grundverordnung (DSGVO). Alle über Cookies gesammelten Informationen werden gemäß unserer Datenschutzrichtlinie verarbeitet. Für alle Fragen zu unserer Cookie-Richtlinie oder der Verarbeitung deiner personenbezogenen Daten kontaktiere unseren Datenschutzbeauftragten unter dpo@akoky.com.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default DatenschutzDe;
