import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const JeuxGuideIt = () => (
  <>
    <MetaTags title="Giochi Libertini AKOKY | Animazioni per Serate" description="Giochi libertini per serate indimenticabili: carte piccanti, sfide, animazioni." canonical="https://akoky.com/it/giochi-libertini-guida" lang="it" />
    <HreflangTags slug="giochi-libertini-guida" />
    <ContentPageLayout lang="it" title="Giochi Libertini AKOKY | Animazioni per Serate" description="Giochi libertini per serate indimenticabili: carte piccanti, sfide, animazioni." canonical="https://akoky.com/it/giochi-libertini-guida" heroTitle="Giochi Libertini" heroSubtitle="Anima le tue serate con i nostri giochi e animazioni libertine esclusive" breadcrumb={[{ label: "Giochi Libertini" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default JeuxGuideIt;
