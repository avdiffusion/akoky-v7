import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const ContactGuidePt = () => (
  <>
    <MetaTags title="Contacto AKOKY | Suporte e Atendimento ao Cliente" description="Contacta a equipa AKOKY: suporte técnico, consultas comerciais, imprensa." canonical="https://akoky.com/pt/contacto-guia" lang="pt" />
    <HreflangTags slug="contacto-guia" />
    <ContentPageLayout lang="pt" title="Contacto AKOKY | Suporte e Atendimento ao Cliente" description="Contacta a equipa AKOKY: suporte técnico, consultas comerciais, imprensa." canonical="https://akoky.com/pt/contacto-guia" heroTitle="Contactar AKOKY" heroSubtitle="A nossa equipa está aqui para te ajudar" breadcrumb={[{ label: "Contactar AKOKY" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ContactGuidePt;
