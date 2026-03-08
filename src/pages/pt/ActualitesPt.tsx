import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const ActualitesPt = () => (
  <>
    <MetaTags title="Atualidade Libertina 2026 | AKOKY Portugal" description="Últimas notícias libertinas: aberturas de clubes, eventos exclusivos, tendências." canonical="https://akoky.com/pt/atualidade-libertina-guia" lang="pt" />
    <HreflangTags slug="atualidade-libertina-guia" />
    <ContentPageLayout lang="pt" title="Atualidade Libertina 2026 | AKOKY Portugal" description="Últimas notícias libertinas: aberturas de clubes, eventos exclusivos, tendências." canonical="https://akoky.com/pt/atualidade-libertina-guia" heroTitle="Atualidade Libertina" heroSubtitle="As últimas notícias da comunidade libertina em Portugal e na Europa" breadcrumb={[{ label: "Atualidade Libertina" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Notícias da Comunidade</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">As últimas notícias do mundo libertino em Portugal e na Europa: aberturas de clubes, eventos exclusivos, entrevistas.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventos em Destaque do Mês</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY destaca cada mês os eventos mais esperados: soirées temáticas, fins de semana em Cap d&#39;Agde, festas privadas exclusivas.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tendências 2026</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Melhoria dos estabelecimentos, digitalização, wellness libertino, diversificação dos formatos de eventos.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ActualitesPt;
