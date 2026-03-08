import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PremierRdvGuideIt = () => (
  <>
    <MetaTags title="La Tua Prima Esperienza Libertina | Consigli e Preparazione — AKOKY" description="Guida pratica per la tua prima esperienza libertina: preparazione, comunicazione." canonical="https://akoky.com/it/prima-esperienza-libertina" lang="it" />
    <HreflangTags slug="prima-esperienza-libertina" />
    <ContentPageLayout lang="it" title="La Tua Prima Esperienza Libertina | Consigli e Preparazione — AKOKY" description="Guida pratica per la tua prima esperienza libertina: preparazione, comunicazione." canonical="https://akoky.com/it/prima-esperienza-libertina" heroTitle="La Tua Prima Esperienza Libertina" heroSubtitle="Consigli pratici per prepararsi e vivere il primo appuntamento libertino con serenità" breadcrumb={[{ label: "La Tua Prima Esperienza Libertina" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierRdvGuideIt;
