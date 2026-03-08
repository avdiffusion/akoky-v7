import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const VipGuideEs = () => (
  <>
    <MetaTags title="AKOKY VIP Premium | Acceso Exclusivo a la Comunidad Libertina" description="Desbloquea el acceso VIP AKOKY: eventos exclusivos, perfiles verificados, funciones avanzadas." canonical="https://akoky.com/es/vip-premium" lang="es" />
    <HreflangTags slug="vip-premium" />
    <ContentPageLayout lang="es" title="AKOKY VIP Premium | Acceso Exclusivo a la Comunidad Libertina" description="Desbloquea el acceso VIP AKOKY: eventos exclusivos, perfiles verificados, funciones avanzadas." canonical="https://akoky.com/es/vip-premium" heroTitle="AKOKY VIP" heroSubtitle="Desbloquea todas las funcionalidades premium de la plataforma AKOKY" breadcrumb={[{ label: "AKOKY VIP" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VipGuideEs;
