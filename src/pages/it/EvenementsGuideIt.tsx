import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const EvenementsGuideIt = () => (
  <>
    <MetaTags title="Eventi Libertini in Italia 2026 | AKOKY" description="300+ eventi libertini al mese: serate esclusive, weekend tematici in Italia." canonical="https://akoky.com/it/eventi-libertini-guida" lang="it" />
    <HreflangTags slug="eventi-libertini-guida" />
    <ContentPageLayout lang="it" title="Eventi Libertini in Italia 2026 | AKOKY" description="300+ eventi libertini al mese: serate esclusive, weekend tematici in Italia." canonical="https://akoky.com/it/eventi-libertini-guida" heroTitle="Eventi Libertini" heroSubtitle="300+ eventi libertini al mese in Italia e in Europa" breadcrumb={[{ label: "Eventi Libertini" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default EvenementsGuideIt;
