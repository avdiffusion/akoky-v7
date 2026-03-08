import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const DebuterGuideEs = () => (
  <>
    <MetaTags title="Cómo Empezar en el Libertinaje | Guía Completa — AKOKY" description="Primeros pasos en el libertinaje: elegir el club, gestionar las emociones, el consentimiento." canonical="https://akoky.com/es/como-empezar-libertinaje" lang="es" />
    <HreflangTags slug="como-empezar-libertinaje" />
    <ContentPageLayout lang="es" title="Cómo Empezar en el Libertinaje | Guía Completa — AKOKY" description="Primeros pasos en el libertinaje: elegir el club, gestionar las emociones, el consentimiento." canonical="https://akoky.com/es/como-empezar-libertinaje" heroTitle="Empezar en el Libertinaje" heroSubtitle="Todo lo que necesitas saber para tu primera experiencia libertina" breadcrumb={[{ label: "Empezar en el Libertinaje" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default DebuterGuideEs;
