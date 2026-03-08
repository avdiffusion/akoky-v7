import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PremierRdvGuidePt = () => (
  <>
    <MetaTags title="A Tua Primeira Experiência Libertina | Dicas e Preparação — AKOKY" description="Guia prático para a tua primeira experiência libertina: preparação, comunicação." canonical="https://akoky.com/pt/primeira-experiencia-libertina" lang="pt" />
    <HreflangTags slug="primeira-experiencia-libertina" />
    <ContentPageLayout lang="pt" title="A Tua Primeira Experiência Libertina | Dicas e Preparação — AKOKY" description="Guia prático para a tua primeira experiência libertina: preparação, comunicação." canonical="https://akoky.com/pt/primeira-experiencia-libertina" heroTitle="A Tua Primeira Experiência Libertina" heroSubtitle="Dicas práticas para preparares e viveres o teu primeiro encontro libertino com serenidade" breadcrumb={[{ label: "A Tua Primeira Experiência Libertina" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierRdvGuidePt;
