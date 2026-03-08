import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const GuideGuideEs = () => (
  <>
    <MetaTags title="Guía Completa del Libertinaje en España 2026 | AKOKY" description="La guía de referencia del libertinaje en España: clubs, saunas, prácticas, consejos." canonical="https://akoky.com/es/guia-libertinaje-completa" lang="es" />
    <HreflangTags slug="guia-libertinaje-completa" />
    <ContentPageLayout lang="es" title="Guía Completa del Libertinaje en España 2026 | AKOKY" description="La guía de referencia del libertinaje en España: clubs, saunas, prácticas, consejos." canonical="https://akoky.com/es/guia-libertinaje-completa" heroTitle="Guía del Libertinaje en España" heroSubtitle="Todo comprender y descubrir el mundo libertino en España con serenidad" breadcrumb={[{ label: "Guía del Libertinaje en España" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default GuideGuideEs;
