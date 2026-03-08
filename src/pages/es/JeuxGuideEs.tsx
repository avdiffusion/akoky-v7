import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const JeuxGuideEs = () => (
  <>
    <MetaTags title="Juegos Libertinos AKOKY | Animaciones para Veladas" description="Juegos libertinos para animar tus veladas: cartas picantes, desafíos, animaciones." canonical="https://akoky.com/es/juegos-libertinos-guia" lang="es" />
    <HreflangTags slug="juegos-libertinos-guia" />
    <ContentPageLayout lang="es" title="Juegos Libertinos AKOKY | Animaciones para Veladas" description="Juegos libertinos para animar tus veladas: cartas picantes, desafíos, animaciones." canonical="https://akoky.com/es/juegos-libertinos-guia" heroTitle="Juegos Libertinos" heroSubtitle="Anima tus veladas con nuestros juegos y animaciones libertinas exclusivas" breadcrumb={[{ label: "Juegos Libertinos" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default JeuxGuideEs;
