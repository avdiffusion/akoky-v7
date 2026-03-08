import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const EvenementsGuideEs = () => (
  <>
    <MetaTags title="Eventos Libertinos en España 2026 | AKOKY" description="300+ eventos libertinos al mes: veladas exclusivas, fines de semana temáticos en España." canonical="https://akoky.com/es/eventos-libertinos-guia" lang="es" />
    <HreflangTags slug="eventos-libertinos-guia" />
    <ContentPageLayout lang="es" title="Eventos Libertinos en España 2026 | AKOKY" description="300+ eventos libertinos al mes: veladas exclusivas, fines de semana temáticos en España." canonical="https://akoky.com/es/eventos-libertinos-guia" heroTitle="Eventos Libertinos" heroSubtitle="300+ eventos libertinos por mes en España y Europa" breadcrumb={[{ label: "Eventos Libertinos" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default EvenementsGuideEs;
