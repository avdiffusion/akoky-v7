import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const ActualitesEs = () => (
  <>
    <MetaTags title="Actualidad Libertina 2026 | AKOKY España" description="Últimas noticias libertinas: aperturas de clubs, eventos exclusivos, tendencias." canonical="https://akoky.com/es/actualidad-libertina" lang="es" />
    <HreflangTags slug="actualidad-libertina" />
    <ContentPageLayout lang="es" title="Actualidad Libertina 2026 | AKOKY España" description="Últimas noticias libertinas: aperturas de clubs, eventos exclusivos, tendencias." canonical="https://akoky.com/es/actualidad-libertina" heroTitle="Actualidad Libertina" heroSubtitle="Las últimas noticias de la comunidad libertina en España y Europa" breadcrumb={[{ label: "Actualidad Libertina" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Noticias de la Comunidad</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Las últimas noticias del mundo libertino en España y Europa: aperturas de clubs, eventos exclusivos, entrevistas con actores del sector.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventos Destacados del Mes</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY destaca cada mes los eventos más esperados: veladas temáticas, fines de semana en el Cap d&#39;Agde, soirées privadas exclusivas.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tendencias 2026</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Mejora de los establecimientos, digitalización, wellness libertino, diversificación de los formatos de eventos.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ActualitesEs;
