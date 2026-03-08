import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const EvenementsGuidePt = () => (
  <>
    <MetaTags title="Eventos Libertinos em Portugal 2026 | AKOKY" description="300+ eventos libertinos por mês: noitadas exclusivas, fins de semana temáticos em Portugal." canonical="https://akoky.com/pt/eventos-libertinos-guia" lang="pt" />
    <HreflangTags slug="eventos-libertinos-guia" />
    <ContentPageLayout lang="pt" title="Eventos Libertinos em Portugal 2026 | AKOKY" description="300+ eventos libertinos por mês: noitadas exclusivas, fins de semana temáticos em Portugal." canonical="https://akoky.com/pt/eventos-libertinos-guia" heroTitle="Eventos Libertinos" heroSubtitle="300+ eventos libertinos por mês em Portugal e na Europa" breadcrumb={[{ label: "Eventos Libertinos" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default EvenementsGuidePt;
