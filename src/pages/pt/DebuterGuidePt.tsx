import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const DebuterGuidePt = () => (
  <>
    <MetaTags title="Começar no Libertinismo | Guia Completo — AKOKY" description="Primeiros passos no libertinismo: escolher o clube, gerir as emoções, o consentimento." canonical="https://akoky.com/pt/comecar-libertinismo-guia" lang="pt" />
    <HreflangTags slug="comecar-libertinismo-guia" />
    <ContentPageLayout lang="pt" title="Começar no Libertinismo | Guia Completo — AKOKY" description="Primeiros passos no libertinismo: escolher o clube, gerir as emoções, o consentimento." canonical="https://akoky.com/pt/comecar-libertinismo-guia" heroTitle="Começar no Libertinismo" heroSubtitle="Tudo o que precisas de saber para a tua primeira experiência libertina" breadcrumb={[{ label: "Começar no Libertinismo" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default DebuterGuidePt;
