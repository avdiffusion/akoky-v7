import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PremierClubGuideEs = () => (
  <>
    <MetaTags title="Tu Primer Club Libertino | Guía Completa para Principiantes" description="Todo lo que debes saber antes de tu primera visita a un club libertino: dress code, reglas." canonical="https://akoky.com/es/primer-club-libertino" lang="es" />
    <HreflangTags slug="primer-club-libertino" />
    <ContentPageLayout lang="es" title="Tu Primer Club Libertino | Guía Completa para Principiantes" description="Todo lo que debes saber antes de tu primera visita a un club libertino: dress code, reglas." canonical="https://akoky.com/es/primer-club-libertino" heroTitle="Tu Primer Club Libertino" heroSubtitle="Guía completa para una primera visita exitosa y tranquila" breadcrumb={[{ label: "Tu Primer Club Libertino" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierClubGuideEs;
