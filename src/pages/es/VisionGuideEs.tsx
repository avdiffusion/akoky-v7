import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const VisionGuideEs = () => (
  <>
    <MetaTags title="La Visión de AKOKY | Plataforma Libertina Moderna y Responsable" description="Descubre la visión de AKOKY: una plataforma libertina moderna, segura y responsable." canonical="https://akoky.com/es/vision-akoky" lang="es" />
    <HreflangTags slug="vision-akoky" />
    <ContentPageLayout lang="es" title="La Visión de AKOKY | Plataforma Libertina Moderna y Responsable" description="Descubre la visión de AKOKY: una plataforma libertina moderna, segura y responsable." canonical="https://akoky.com/es/vision-akoky" heroTitle="Nuestra Visión" heroSubtitle="AKOKY: construyendo la comunidad libertina más segura y auténtica de Europa" breadcrumb={[{ label: "Nuestra Visión" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VisionGuideEs;
