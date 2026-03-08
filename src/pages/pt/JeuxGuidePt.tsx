import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const JeuxGuidePt = () => (
  <>
    <MetaTags title="Jogos Libertinos AKOKY | Animações para Noitadas" description="Jogos libertinos para noitadas inesquecíveis: cartas picantes, desafios, animações." canonical="https://akoky.com/pt/jogos-libertinos-guia" lang="pt" />
    <HreflangTags slug="jogos-libertinos-guia" />
    <ContentPageLayout lang="pt" title="Jogos Libertinos AKOKY | Animações para Noitadas" description="Jogos libertinos para noitadas inesquecíveis: cartas picantes, desafios, animações." canonical="https://akoky.com/pt/jogos-libertinos-guia" heroTitle="Jogos Libertinos" heroSubtitle="Anima as tuas noitadas com os nossos jogos e animações libertinas exclusivas" breadcrumb={[{ label: "Jogos Libertinos" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default JeuxGuidePt;
