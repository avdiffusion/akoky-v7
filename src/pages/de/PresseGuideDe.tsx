import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const PresseGuideDe = () => (
  <>
    <MetaTags title="AKOKY Pressestelle | Ressourcen für Journalisten" description="Offizielle AKOKY-Pressestelle: Pressemitteilungen, Presse-Kit, Journalistenkontakt." canonical="https://akoky.com/de/pressestelle" lang="de" />
    <HreflangTags slug="pressestelle" />
    <ContentPageLayout lang="de" title="AKOKY Pressestelle | Ressourcen für Journalisten" description="Offizielle AKOKY-Pressestelle: Pressemitteilungen, Presse-Kit, Journalistenkontakt." canonical="https://akoky.com/de/pressestelle" heroTitle="AKOKY Pressestelle" heroSubtitle="Ressourcen für Journalisten, Blogger und Medienpartner" breadcrumb={[{ label: "AKOKY Pressestelle" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PresseGuideDe;
