import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const ContactGuideDe = () => (
  <>
    <MetaTags title="AKOKY Kontakt | Support und Kundenservice" description="Kontaktiere das AKOKY-Team: technischer Support, kommerzielle Anfragen, Presse." canonical="https://akoky.com/de/kontakt-guide" lang="de" />
    <HreflangTags slug="kontakt-guide" />
    <ContentPageLayout lang="de" title="AKOKY Kontakt | Support und Kundenservice" description="Kontaktiere das AKOKY-Team: technischer Support, kommerzielle Anfragen, Presse." canonical="https://akoky.com/de/kontakt-guide" heroTitle="AKOKY kontaktieren" heroSubtitle="Unser Team ist hier um dir zu helfen" breadcrumb={[{ label: "AKOKY kontaktieren" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ContactGuideDe;
