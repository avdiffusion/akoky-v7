import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PremierClubGuidePt = () => (
  <>
    <MetaTags title="O Teu Primeiro Clube Libertino | Guia Completo para Principiantes" description="Tudo antes da tua primeira visita a um clube libertino: dress code, regras." canonical="https://akoky.com/pt/primeiro-clube-libertino" lang="pt" />
    <HreflangTags slug="primeiro-clube-libertino" />
    <ContentPageLayout lang="pt" title="O Teu Primeiro Clube Libertino | Guia Completo para Principiantes" description="Tudo antes da tua primeira visita a um clube libertino: dress code, regras." canonical="https://akoky.com/pt/primeiro-clube-libertino" heroTitle="O Teu Primeiro Clube Libertino" heroSubtitle="Guia completo para uma primeira visita bem-sucedida e tranquila" breadcrumb={[{ label: "O Teu Primeiro Clube Libertino" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierClubGuidePt;
