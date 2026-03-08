import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const GuideGuideDe = () => (
  <>
    <MetaTags title="Libertinismus-Ratgeber Deutschland 2026 | AKOKY" description="Der Referenz-Ratgeber für Libertinismus in Deutschland: Clubs, Saunas, Praktiken." canonical="https://akoky.com/de/libertinismus-ratgeber" lang="de" />
    <HreflangTags slug="libertinismus-ratgeber" />
    <ContentPageLayout lang="de" title="Libertinismus-Ratgeber Deutschland 2026 | AKOKY" description="Der Referenz-Ratgeber für Libertinismus in Deutschland: Clubs, Saunas, Praktiken." canonical="https://akoky.com/de/libertinismus-ratgeber" heroTitle="Libertinismus-Ratgeber Deutschland" heroSubtitle="Alles verstehen und entdecken über die libertine Welt in Deutschland" breadcrumb={[{ label: "Libertinismus-Ratgeber Deutschland" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default GuideGuideDe;
