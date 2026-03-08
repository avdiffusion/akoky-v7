import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cómo contactar con el soporte AKOKY?", answer: "A través de nuestro formulario online, por email a support@akoky.com o desde tu espacio de miembro. Nuestro equipo responde en menos de 24 horas laborables." },
  { question: "¿AKOKY ofrece soporte en español?", answer: "Sí. Nuestro soporte está disponible en español, francés, alemán, italiano y portugués." },
  { question: "¿Cómo denunciar un perfil problemático?", answer: "Usa el botón &#39;Denunciar&#39; disponible en cada perfil. Nuestro equipo de moderación trata cada denuncia en menos de 2 horas." },
];

const ContactoEs = () => (
  <>
    <HreflangTags slug="contacto" />
    <ContentPageLayout
      lang="es"
      title="AKOKY España | Contacto — Soporte y Asistencia Premium"
      description="Contacta con AKOKY: soporte para miembros, solicitudes de socios, prensa y afiliación. Equipo disponible 24h para acompañarte."
      canonical="https://akoky.com/es/contacto"
      heroTitle="Contactar con AKOKY"
      heroSubtitle="Nuestro equipo está disponible 24h para ayudarte. Encuentra el canal de contacto adecuado según tu solicitud."
      heroImage="/images/es-contacto-cover.webp"
      breadcrumb={[{ label: "Contactar con AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Soporte para Miembros</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">¿Tienes una pregunta sobre tu cuenta, una funcionalidad o una experiencia en la plataforma? Nuestro equipo de soporte responde en un máximo de 24 horas laborables. Accede al formulario de contacto desde tu espacio de miembro para una respuesta más rápida.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Email de Soporte</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">support@akoky.com — Para todas las preguntas relativas a tu cuenta y a las funcionalidades de la plataforma.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Horarios</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Lunes a viernes: 9h-20h. Sábado y domingo: 10h-18h. Tiempo de respuesta habitual: menos de 24 horas laborables.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Solicitudes de Socios</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">¿Gestionas un club libertino, organizas eventos o representas a un medio de comunicación? Tenemos propuestas específicas para cada perfil.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Clubs Libertinos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Referencia tu establecimiento en el directorio AKOKY y accede a nuestra comunidad de 1,5 millones de miembros. Contacta con nuestro equipo de partenariado para conocer las condiciones.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Organizadores de Eventos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Publica tus eventos en el calendario AKOKY y benefíciate de nuestra visibilidad para llenar tus veladas. Escríbenos a partenaires@akoky.com.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Medios e Influencers</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Para solicitudes de prensa, entrevistas o colaboraciones editoriales: presse@akoky.com. Nuestro equipo de comunicación responde en 48 horas laborables.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Denunciar un Perfil</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Si encuentras un perfil o contenido que no respeta la carta AKOKY, utiliza el botón &#39;Denunciar&#39; disponible en cada perfil y publicación. Nuestro equipo de moderación trata cada denuncia en menos de 2 horas.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Antes de contactarnos, consulta nuestra <Link to="/es/faq" className="text-primary hover:underline">FAQ</Link>. Descubre también los <Link to="/es/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link>, los <Link to="/es/eventos" className="text-primary hover:underline">eventos</Link>, la <Link to="/es/app" className="text-primary hover:underline">aplicación AKOKY</Link> y nuestra <Link to="/es/vision" className="text-primary hover:underline">visión</Link>.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ContactoEs;
