import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const VisionGuideDe = () => (
  <>
    <MetaTags title="AKOKY Vision | Moderne und Verantwortungsvolle Libertine Plattform" description="Entdecke die Vision von AKOKY: eine moderne, sichere und verantwortungsvolle Plattform." canonical="https://akoky.com/de/vision" lang="de" />
    <HreflangTags slug="vision" />
    <ContentPageLayout lang="de" title="AKOKY Vision | Moderne Libertine Plattform" description="Entdecke die Vision von AKOKY." canonical="https://akoky.com/de/vision" heroTitle="Unsere Vision" heroSubtitle="AKOKY: die sicherste und authentischste libertine Community Europas aufbauen" breadcrumb={[{ label: "Unsere Vision" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Seite wird vorbereitet</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Inhalte demnächst verfügbar.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VisionGuideDe;
