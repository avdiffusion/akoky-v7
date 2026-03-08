import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cómo participar en los eventos AKOKY?", answer: "Regístrate en AKOKY, navega por el calendario de eventos y reserva tu plaza directamente online. Algunos eventos requieren estatus VIP." },
  { question: "¿Los eventos son abiertos a principiantes?", answer: "Sí. Muchos eventos están específicamente diseñados para recibir a los nuevos miembros con calidez. Están claramente identificados en el calendario." },
  { question: "¿Se puede ir solo/a a un evento?", answer: "Sí. Solteros y parejas son bienvenidos. La composición de las veladas varía según el evento." },
  { question: "¿Cómo organizar un evento con AKOKY?", answer: "Los clubes asociados y organizadores pueden publicar sus eventos en nuestra plataforma. Contáctanos para más información." },
];

const EventosEs = () => (
  <>
    <MetaTags
      title="Eventos Libertinos en España 2026 | 300+ Veladas y Fines de Semana — AKOKY"
      description="Descubre 300+ eventos libertinos al mes: veladas exclusivas, fines de semana temáticos, encuentros privados en Madrid, Barcelona y toda España."
      canonical="https://akoky.com/es/eventos"
      lang="es"
    />
    <HreflangTags slug="eventos" />
    <ContentPageLayout
      lang="es"
      title="Eventos Libertinos en España 2026 | 300+ Veladas y Fines de Semana — AKOKY"
      description="Descubre 300+ eventos libertinos al mes: veladas exclusivas, fines de semana temáticos, encuentros privados en Madrid, Barcelona y toda España."
      canonical="https://akoky.com/es/eventos"
      heroTitle="Eventos Libertinos en España"
      heroSubtitle="300+ eventos al mes: veladas exclusivas, fines de semana temáticos, encuentros privados. Reserva tu plaza en AKOKY."
      heroImage="/images/es-eventos-cover.webp"
      breadcrumb={[{ label: "Eventos Libertinos en España" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Mayor Agenda de Eventos Libertinos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organiza y publica más de 300 eventos libertinos cada mes en toda Europa. En España, encontrarás veladas en club, apéros libertinos afterwork, fines de semana temáticos y encuentros privados en las principales ciudades.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipos de Eventos</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎭 Veladas en Club</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Las veladas en clubs libertinos son el formato más tradicional. Con ambiente festivo, música, barra y múltiples espacios temáticos, son perfectas para descubrir el mundo libertino o ampliar tu círculo social. AKOKY referencia las mejores veladas de los clubes asociados.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🥂 Apéros Libertinos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Los apéros libertinos son encuentros informales, generalmente en un bar privado o en casa particular, para conocer a otras parejas o solteros en un ambiente relajado. Sin presión, sin obligación. Son el formato ideal para los principiantes que quieren dar el primer paso.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🌊 Fines de Semana Temáticos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Escapadas de fin de semana en villas privadas, hoteles o destinos de playa como la Costa Brava o la Costa del Sol. Estos eventos combinan convivencia, actividades de día y veladas libertinas por la noche. Las plazas son limitadas, reserva con antelación.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Encuentros Privados</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Encuentros más íntimos organizados en casa particular, con un número reducido de participantes seleccionados. El acceso requiere verificación previa y a menudo invitación de un miembro de la comunidad.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventos para Principiantes</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organiza regularmente eventos especialmente diseñados para los recién llegados al libertinaje. Estos eventos, claramente identificados en el calendario, se caracterizan por un ambiente acogedor, sin presión y con la presencia de anfitriones experimentados.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Cómo Reservar?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos los eventos AKOKY se reservan online directamente en la plataforma. Crea tu cuenta gratuita, explora el calendario de eventos cerca de ti y reserva tu plaza con unos pocos clics.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default EventosEs;
