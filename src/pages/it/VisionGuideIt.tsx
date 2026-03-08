import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const VisionGuideIt = () => (
  <>
    <MetaTags title="La Visione di AKOKY | Piattaforma Libertina Moderna e Responsabile" description="Scopri la visione di AKOKY: una piattaforma libertina moderna, sicura e responsabile." canonical="https://akoky.com/it/visione-akoky" lang="it" />
    <HreflangTags slug="visione-akoky" />
    <ContentPageLayout lang="it" title="La Visione di AKOKY | Piattaforma Libertina Moderna e Responsabile" description="Scopri la visione di AKOKY: una piattaforma libertina moderna, sicura e responsabile." canonical="https://akoky.com/it/visione-akoky" heroTitle="La Nostra Visione" heroSubtitle="AKOKY: costruire la community libertina più sicura e autentica d&#39;Europa" breadcrumb={[{ label: "La Nostra Visione" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VisionGuideIt;
