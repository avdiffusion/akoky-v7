import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const CookiesGuidePt = () => (
  <>
    <MetaTags title="AKOKY Política de Cookies | Gestão e Privacidade" description="Cookies AKOKY: essenciais, analíticos, de marketing. As tuas escolhas." canonical="https://akoky.com/pt/politica-cookies-guia" lang="pt" />
    <HreflangTags slug="politica-cookies-guia" />
    <ContentPageLayout lang="pt" title="AKOKY Política de Cookies | Gestão e Privacidade" description="Cookies AKOKY: essenciais, analíticos, de marketing. As tuas escolhas." canonical="https://akoky.com/pt/politica-cookies-guia" heroTitle="Política de Cookies" heroSubtitle="Transparência total sobre a utilização de cookies no AKOKY" breadcrumb={[{ label: "Política de Cookies" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default CookiesGuidePt;
