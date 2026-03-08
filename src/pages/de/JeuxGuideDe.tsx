import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const JeuxGuideDe = () => (
  <>
    <MetaTags title="Libertine Spiele AKOKY | Animationen für Abende" description="Libertine Spiele für unvergessliche Abende: pikante Karten, Herausforderungen." canonical="https://akoky.com/de/libertine-spiele-guide" lang="de" />
    <HreflangTags slug="libertine-spiele-guide" />
    <ContentPageLayout lang="de" title="Libertine Spiele AKOKY | Animationen für Abende" description="Libertine Spiele für unvergessliche Abende: pikante Karten, Herausforderungen." canonical="https://akoky.com/de/libertine-spiele-guide" heroTitle="Libertine Spiele" heroSubtitle="Belebe deine Abende mit unseren exklusiven libertinen Spielen und Animationen" breadcrumb={[{ label: "Libertine Spiele" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default JeuxGuideDe;
