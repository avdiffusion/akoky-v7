import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const CookiesGuideIt = () => (
  <>
    <MetaTags title="AKOKY Politica Cookie | Gestione e Privacy" description="Cookie AKOKY: essenziali, analitici, di marketing. Le tue scelte." canonical="https://akoky.com/it/politica-cookie-guida" lang="it" />
    <HreflangTags slug="politica-cookie-guida" />
    <ContentPageLayout lang="it" title="AKOKY Politica Cookie | Gestione e Privacy" description="Cookie AKOKY: essenziali, analitici, di marketing. Le tue scelte." canonical="https://akoky.com/it/politica-cookie-guida" heroTitle="Politica dei Cookie" heroSubtitle="Totale trasparenza sull&#39;utilizzo dei cookie su AKOKY" breadcrumb={[{ label: "Politica dei Cookie" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default CookiesGuideIt;
