import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PresseGuidePt = () => (
  <>
    <MetaTags title="Sala de Imprensa AKOKY | Recursos para Jornalistas" description="Sala de imprensa oficial AKOKY: comunicados, press kit, contacto para jornalistas." canonical="https://akoky.com/pt/sala-de-imprensa" lang="pt" />
    <HreflangTags slug="sala-de-imprensa" />
    <ContentPageLayout lang="pt" title="Sala de Imprensa AKOKY | Recursos para Jornalistas" description="Sala de imprensa oficial AKOKY: comunicados, press kit, contacto para jornalistas." canonical="https://akoky.com/pt/sala-de-imprensa" heroTitle="Sala de Imprensa AKOKY" heroSubtitle="Recursos para jornalistas, bloggers e parceiros de mídia" breadcrumb={[{ label: "Sala de Imprensa AKOKY" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PresseGuidePt;
