import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PremierClubGuideIt = () => (
  <>
    <MetaTags title="Il Tuo Primo Club Libertino | Guida Completa per Principianti" description="Tutto prima della tua prima visita a un club libertino: dress code, regole." canonical="https://akoky.com/it/primo-club-libertino" lang="it" />
    <HreflangTags slug="primo-club-libertino" />
    <ContentPageLayout lang="it" title="Il Tuo Primo Club Libertino | Guida Completa per Principianti" description="Tutto prima della tua prima visita a un club libertino: dress code, regole." canonical="https://akoky.com/it/primo-club-libertino" heroTitle="Il Tuo Primo Club Libertino" heroSubtitle="Guida completa per una prima visita riuscita e serena" breadcrumb={[{ label: "Il Tuo Primo Club Libertino" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierClubGuideIt;
