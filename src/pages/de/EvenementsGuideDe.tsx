import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const EvenementsGuideDe = () => (
  <>
    <MetaTags title="Libertine Veranstaltungen Deutschland 2026 | AKOKY" description="300+ libertine Events pro Monat: exklusive Abende, Themen-Wochenenden in Deutschland." canonical="https://akoky.com/de/libertine-veranstaltungen" lang="de" />
    <HreflangTags slug="libertine-veranstaltungen" />
    <ContentPageLayout lang="de" title="Libertine Veranstaltungen Deutschland 2026 | AKOKY" description="300+ libertine Events pro Monat: exklusive Abende, Themen-Wochenenden in Deutschland." canonical="https://akoky.com/de/libertine-veranstaltungen" heroTitle="Libertine Veranstaltungen" heroSubtitle="300+ libertine Events pro Monat in Deutschland und Europa" breadcrumb={[{ label: "Libertine Veranstaltungen" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default EvenementsGuideDe;
