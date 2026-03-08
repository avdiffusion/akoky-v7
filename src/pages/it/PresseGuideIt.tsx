import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PresseGuideIt = () => (
  <>
    <MetaTags title="Sala Stampa AKOKY | Risorse per Giornalisti" description="Sala stampa ufficiale AKOKY: comunicati, press kit, contatto per giornalisti." canonical="https://akoky.com/it/sala-stampa" lang="it" />
    <HreflangTags slug="sala-stampa" />
    <ContentPageLayout lang="it" title="Sala Stampa AKOKY | Risorse per Giornalisti" description="Sala stampa ufficiale AKOKY: comunicati, press kit, contatto per giornalisti." canonical="https://akoky.com/it/sala-stampa" heroTitle="Sala Stampa AKOKY" heroSubtitle="Risorse per giornalisti, blogger e partner mediaici" breadcrumb={[{ label: "Sala Stampa AKOKY" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PresseGuideIt;
