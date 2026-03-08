import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PremierRdvGuideEs = () => (
  <>
    <MetaTags title="Tu Primera Experiencia Libertina | Consejos y Preparación — AKOKY" description="Guía práctica para tu primera experiencia libertina: preparación, expectativas, comunicación." canonical="https://akoky.com/es/primera-experiencia-libertina" lang="es" />
    <HreflangTags slug="primera-experiencia-libertina" />
    <ContentPageLayout lang="es" title="Tu Primera Experiencia Libertina | Consejos y Preparación — AKOKY" description="Guía práctica para tu primera experiencia libertina: preparación, expectativas, comunicación." canonical="https://akoky.com/es/primera-experiencia-libertina" heroTitle="Tu Primera Experiencia Libertina" heroSubtitle="Consejos prácticos para prepararse y vivir tu primera cita libertina con serenidad" breadcrumb={[{ label: "Tu Primera Experiencia Libertina" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierRdvGuideEs;
