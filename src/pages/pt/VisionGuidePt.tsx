import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const VisionGuidePt = () => (
  <>
    <MetaTags title="A Visão do AKOKY | Plataforma Libertina Moderna e Responsável" description="Descobre a visão do AKOKY: uma plataforma libertina moderna, segura e responsável." canonical="https://akoky.com/pt/visao-akoky" lang="pt" />
    <HreflangTags slug="visao-akoky" />
    <ContentPageLayout lang="pt" title="A Visão do AKOKY | Plataforma Libertina Moderna e Responsável" description="Descobre a visão do AKOKY: uma plataforma libertina moderna, segura e responsável." canonical="https://akoky.com/pt/visao-akoky" heroTitle="A Nossa Visão" heroSubtitle="AKOKY: construir a comunidade libertina mais segura e autêntica da Europa" breadcrumb={[{ label: "A Nossa Visão" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VisionGuidePt;
