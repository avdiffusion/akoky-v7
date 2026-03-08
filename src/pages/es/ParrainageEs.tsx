import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿El programa de afiliación es gratuito?", answer: "Sí. La participación en el programa de afiliación es completamente gratuita para todos los miembros AKOKY." },
  { question: "¿Cuándo se atribuyen las ventajas?", answer: "Las ventajas se atribuyen automáticamente cuando el nuevo miembro activa su cuenta con tu enlace de afiliación." },
  { question: "¿Hay un límite de afiliaciones?", answer: "No. Puedes invitar a tantas personas como quieras. Cuanto más invites, más ventajas acumulas." },
];

const ParrainageEs = () => (
  <>
    <HreflangTags slug="parrainage" />
    <ContentPageLayout
      lang="es"
      title="Programa de Afiliación AKOKY | Invita y Gana Ventajas"
      description="Invita a tus amigos a AKOKY y gana ventajas exclusivas: acceso VIP, eventos gratuitos y más. El programa de afiliación de la comunidad libertina."
      canonical="https://akoky.com/es/parrainage"
      heroTitle="Programa de Afiliación AKOKY"
      heroSubtitle="Invita a tus amigos, gana ventajas exclusivas y haz crecer tu comunidad."
      heroImage="/images/es-parrainage-cover.webp"
      breadcrumb={[{ label: "Afiliación" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Cómo Funciona el Programa de Afiliación?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">El programa de afiliación AKOKY te recompensa por hacer crecer la comunidad. Cada nuevo miembro que se registra con tu enlace de afiliación te da derecho a ventajas exclusivas: días VIP gratuitos, acceso prioritario a eventos y mucho más.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tus Ventajas</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Días VIP Gratuitos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Por cada amigo que se registra con tu enlace y activa su cuenta, recibes días de suscripción VIP gratuitos. Cuantos más amigos invites, más tiempo disfrutas de las ventajas VIP.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Acceso Prioritario a Eventos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Los mejores afiliadores tienen acceso prioritario a los eventos más exclusivos de AKOKY: veladas privadas, fines de semana temáticos y experiencias VIP reservadas a la élite de la comunidad.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Badge de Afiliador</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Los miembros que han aportado nuevos miembros a la comunidad reciben un badge especial visible en su perfil. Una forma de reconocer tu contribución a la comunidad.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Cómo Empezar?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Accede a tu espacio de miembro AKOKY, ve a la sección &#39;Afiliación&#39; y copia tu enlace personal. Compártelo con tus amigos, en redes sociales o donde quieras. Cada registro con tu enlace se contabiliza automáticamente.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Condiciones</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">El programa de afiliación es gratuito y abierto a todos los miembros AKOKY. Descubre también el <Link to="/es/vip" className="text-primary hover:underline">estatus VIP</Link>, los <Link to="/es/eventos" className="text-primary hover:underline">eventos exclusivos</Link>, los <Link to="/es/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> y la <Link to="/es/app" className="text-primary hover:underline">aplicación AKOKY</Link>.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ParrainageEs;
