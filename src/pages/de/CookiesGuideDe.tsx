import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const CookiesGuideDe = () => (
  <>
    <MetaTags title="AKOKY Cookie-Richtlinie | Verwaltung und Datenschutz" description="Cookie-Verwaltung AKOKY: wesentliche, analytische, Marketing-Cookies. Deine Optionen." canonical="https://akoky.com/de/datenschutz" lang="de" />
    <HreflangTags slug="datenschutz" />
    <ContentPageLayout lang="de" title="AKOKY Cookie-Richtlinie" description="Cookie-Verwaltung AKOKY." canonical="https://akoky.com/de/datenschutz" heroTitle="Cookie-Richtlinie" heroSubtitle="Vollständige Transparenz über die Cookie-Nutzung auf AKOKY" breadcrumb={[{ label: "Cookie-Richtlinie" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Seite wird vorbereitet</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Inhalte demnächst verfügbar.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default CookiesGuideDe;
