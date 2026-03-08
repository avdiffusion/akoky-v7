import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PremierClubGuideDe = () => (
  <>
    <MetaTags title="Dein Erster Libertiner Club | Vollständiger Leitfaden für Anfänger" description="Alles vor deinem ersten libertinen Club-Besuch: Dresscode, Regeln." canonical="https://akoky.com/de/erster-libertiner-club" lang="de" />
    <HreflangTags slug="erster-libertiner-club" />
    <ContentPageLayout lang="de" title="Dein Erster Libertiner Club | Vollständiger Leitfaden für Anfänger" description="Alles vor deinem ersten libertinen Club-Besuch: Dresscode, Regeln." canonical="https://akoky.com/de/erster-libertiner-club" heroTitle="Dein Erster Libertiner Club" heroSubtitle="Vollständiger Leitfaden für einen gelungenen ersten Besuch" breadcrumb={[{ label: "Dein Erster Libertiner Club" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierClubGuideDe;
