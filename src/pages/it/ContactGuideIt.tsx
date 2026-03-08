import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const ContactGuideIt = () => (
  <>
    <MetaTags title="Contatto AKOKY | Supporto e Assistenza Clienti" description="Contatta il team AKOKY: supporto tecnico, richieste commerciali, stampa." canonical="https://akoky.com/it/contatto-guida" lang="it" />
    <HreflangTags slug="contatto-guida" />
    <ContentPageLayout lang="it" title="Contatto AKOKY | Supporto e Assistenza Clienti" description="Contatta il team AKOKY: supporto tecnico, richieste commerciali, stampa." canonical="https://akoky.com/it/contatto-guida" heroTitle="Contattare AKOKY" heroSubtitle="Il nostro team è qui per aiutarti" breadcrumb={[{ label: "Contattare AKOKY" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ContactGuideIt;
