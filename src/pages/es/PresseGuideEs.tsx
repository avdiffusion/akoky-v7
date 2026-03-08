import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PresseGuideEs = () => (
  <>
    <MetaTags title="Sala de Prensa AKOKY | Recursos para Periodistas" description="Sala de prensa oficial AKOKY: comunicados, press kit, contacto para periodistas." canonical="https://akoky.com/es/sala-de-prensa" lang="es" />
    <HreflangTags slug="sala-de-prensa" />
    <ContentPageLayout lang="es" title="Sala de Prensa AKOKY | Recursos para Periodistas" description="Sala de prensa oficial AKOKY: comunicados, press kit, contacto para periodistas." canonical="https://akoky.com/es/sala-de-prensa" heroTitle="Sala de Prensa AKOKY" heroSubtitle="Recursos para periodistas, bloggers y colaboradores mediáticos" breadcrumb={[{ label: "Sala de Prensa AKOKY" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PresseGuideEs;
