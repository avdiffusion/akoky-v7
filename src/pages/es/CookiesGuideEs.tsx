import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const CookiesGuideEs = () => (
  <>
    <MetaTags title="Política de Cookies AKOKY | Gestión y Privacidad" description="Política de cookies AKOKY: esenciales, analíticos, de marketing. Tus opciones." canonical="https://akoky.com/es/politica-cookies" lang="es" />
    <HreflangTags slug="politica-cookies" />
    <ContentPageLayout lang="es" title="Política de Cookies AKOKY | Gestión y Privacidad" description="Política de cookies AKOKY: esenciales, analíticos, de marketing. Tus opciones." canonical="https://akoky.com/es/politica-cookies" heroTitle="Política de Cookies" heroSubtitle="Transparencia total sobre el uso de cookies en AKOKY" breadcrumb={[{ label: "Política de Cookies" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default CookiesGuideEs;
