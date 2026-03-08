import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const ContactGuideEs = () => (
  <>
    <MetaTags title="Contacto AKOKY | Soporte y Atención al Cliente" description="Contacta con el equipo AKOKY: soporte técnico, consultas comerciales, prensa." canonical="https://akoky.com/es/contacto" lang="es" />
    <HreflangTags slug="contacto" />
    <ContentPageLayout lang="es" title="Contacto AKOKY | Soporte y Atención al Cliente" description="Contacta con el equipo AKOKY: soporte técnico, consultas comerciales, prensa." canonical="https://akoky.com/es/contacto" heroTitle="Contactar AKOKY" heroSubtitle="Nuestro equipo está aquí para ayudarte" breadcrumb={[{ label: "Contactar AKOKY" }]}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Página en construcción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contenido disponible próximamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ContactGuideEs;
