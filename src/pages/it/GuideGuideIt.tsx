import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const GuideGuideIt = () => (
  <>
    <MetaTags title="Guida Completa al Libertinismo in Italia 2026 | AKOKY" description="La guida di riferimento al libertinismo in Italia: club, saune, pratiche." canonical="https://akoky.com/it/guida-libertinismo-completa" lang="it" />
    <HreflangTags slug="guida-libertinismo-completa" />
    <ContentPageLayout lang="it" title="Guida Completa al Libertinismo in Italia 2026 | AKOKY" description="La guida di riferimento al libertinismo in Italia: club, saune, pratiche." canonical="https://akoky.com/it/guida-libertinismo-completa" heroTitle="Guida al Libertinismo in Italia" heroSubtitle="Tutto comprendere e scoprire il mondo libertino in Italia con serenità" breadcrumb={[{ label: "Guida al Libertinismo in Italia" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default GuideGuideIt;
