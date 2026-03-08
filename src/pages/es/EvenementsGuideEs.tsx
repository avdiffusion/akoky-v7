import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cómo participar en mi primer evento AKOKY?", answer: "Crea tu perfil gratuito en Akoky.com, explora los eventos disponibles en tu región, lee atentamente las descripciones y reserva en línea. Los principiantes siempre son bienvenidos." },
  { question: "¿Los eventos son solo para parejas?", answer: "No. AKOKY organiza eventos para todos los perfiles: parejas, mujeres solas, hombres solos (según cuotas). Cada ficha precisa los perfiles aceptados." },
  { question: "¿Cuál es la tarifa media de un evento?", answer: "Los precios varían: 20-40€ para veladas en club, 15-25€ para aperitivos libertinos, 80-150€ para fiestas privadas temáticas, 200-500€ para fines de semana exclusivos." },
  { question: "¿Cómo cancelar una reserva?", answer: "La cancelación es gratuita hasta 48h antes del evento. Puedes cancelar desde tu espacio miembro en el sitio web o la aplicación móvil." },
  { question: "¿Los eventos AKOKY respetan el consentimiento?", answer: "Absolutamente. El consentimiento está en el centro de nuestra carta ética. Personal formado, sistema de safe words, espacios de retiro disponibles." },
  { question: "¿Dónde se celebran los eventos?", answer: "En los clubes libertinos más reputados y establecimientos seleccionados de España y Europa. Las direcciones exactas se comunican solo a los participantes inscritos." },
  { question: "¿Cuál es la frecuencia de los eventos?", answer: "AKOKY organiza más de 300 eventos al mes en toda Europa: veladas en club varias veces por semana, aperitivos regulares, eventos temáticos mensuales y fines de semana exclusivos." },
  { question: "¿Hay dress code para los eventos?", answer: "Sí, cada evento tiene requisitos vestimentarios específicos detallados en su descripción: elegante para veladas en club, sexy-chic para aperitivos, código específico para eventos temáticos." },
  { question: "¿Se puede ir solo a un evento AKOKY?", answer: "Sí, según las cuotas establecidas. Las mujeres solas son generalmente aceptadas sin restricción. Los hombres solos pasan por una selección previa." },
  { question: "¿Cómo garantizan la discreción?", answer: "Verificación de identidad, validación manual de fotos, prohibición de cámaras, personal formado en el respeto del anonimato, uso de pseudónimos fomentado." },
];

const EVENT_CARDS = [
  { img: "/images/soirreeparis.webp", alt: "Velada libertina AKOKY en club", title: "Veladas en Club", text: "Las veladas más exclusivas en los clubes más prestigiosos de España. Cada evento es una experiencia única en un ambiente refinado y sensual." },
  { img: "/images/apero-libertin.webp", alt: "Aperitivo libertino AKOKY", title: "Aperitivos Libertinos Afterwork", text: "La ocasión perfecta para descubrir la comunidad en un ambiente relajado. Estos eventos afterwork permiten conocer gente antes de las veladas más íntimas." },
  { img: "/images/evenement-libertin-europe.webp", alt: "Fin de semana libertino AKOKY", title: "Fines de Semana Exclusivos", text: "Inmersión total en el arte de vivir libertino. Estos eventos de excepción reúnen a los miembros en marcos suntuosos para momentos inolvidables." },
  { img: "/images/barcelone.webp", alt: "Velada libertina AKOKY Barcelona", title: "Veladas Barcelona Exclusivas", text: "Barcelona acoge los eventos AKOKY más creativos y vanguardistas. La capital catalana ofrece un marco excepcional donde se mezclan arte, cultura y sensualidad." },
  { img: "/images/soiree-libertine-plage.webp", alt: "Evento libertino AKOKY playa", title: "Eventos en la Playa", text: "Las veladas libertinas en la costa española celebran la belleza del Mediterráneo. Aperitivos al atardecer, fiestas en playas privatizadas y experiencias únicas." },
];

const BENEFITS = [
  { icon: "✨", title: "Ambiente Premium", text: "Cada evento se organiza en lugares de excepción. Ambiente refinado y experiencia memorable garantizada." },
  { icon: "🛡️", title: "Seguridad y Respeto", text: "Protocolos estrictos de respeto y consentimiento. Equipo atento que vela por el bienestar de todos." },
  { icon: "🎭", title: "Libertad Asumida", text: "Un espacio donde cada uno puede explorar sus deseos con serenidad. Autenticidad y respeto de las elecciones de cada uno." },
  { icon: "🌍", title: "Comunidad Internacional", text: "La mayor comunidad libertina de Europa. Miembros de España, Francia, Portugal y más allá, unidos por el espíritu de apertura." },
];

const EvenementsGuideEs = () => (
  <>
    <MetaTags title="Eventos Libertinos en España 2026 | AKOKY" description="300+ eventos libertinos al mes: veladas exclusivas, fines de semana temáticos, aperitivos libertinos en España y Europa con AKOKY." canonical="https://akoky.com/es/eventos-libertinos-guia" lang="es" ogImage="/images/events-akoky-cover.webp" />
    <HreflangTags slug="eventos-libertinos-guia" />
    <ContentPageLayout lang="es" title="Eventos Libertinos en España 2026 | AKOKY" description="300+ eventos libertinos al mes en España y Europa." canonical="https://akoky.com/es/eventos-libertinos-guia" heroTitle="Eventos Libertinos" heroSubtitle="300+ eventos libertinos por mes en España y Europa — Veladas exclusivas, fines de semana temáticos, aperitivos afterwork" heroImage="/images/es-eventos-cover.webp" breadcrumb={[{ label: "Eventos Libertinos" }]} faq={FAQ}> lang="es" title="Eventos Libertinos en España 2026 | AKOKY" description="300+ eventos libertinos al mes en España y Europa." canonical="https://akoky.com/es/eventos-libertinos-guia" heroTitle="Eventos Libertinos" heroSubtitle="300+ eventos libertinos por mes en España y Europa — Veladas exclusivas, fines de semana temáticos, aperitivos afterwork" <ContentPageLayout lang="es" title="Eventos Libertinos en España 2026 | AKOKY" description="300+ eventos libertinos al mes en España y Europa." canonical="https://akoky.com/es/eventos-libertinos-guia" heroTitle="Eventos Libertinos" heroSubtitle="300+ eventos libertinos por mes en España y Europa — Veladas exclusivas, fines de semana temáticos, aperitivos afterwork" heroImage="/images/es-eventos-cover.webp" breadcrumb={[{ label: "Eventos Libertinos" }]} faq={FAQ}>

      {/* Cards eventos */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Nuestros Eventos en España y Europa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_CARDS.map((card, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img src={card.img} alt={card.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">¿Por qué elegir los eventos AKOKY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="font-bold text-foreground">{b.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inscripción */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para tu próximo evento?</h2>
          <p className="text-muted-foreground mb-6">Inscríbete gratuitamente en AKOKY y accede al calendario completo de eventos libertinos en España y Europa.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg hover:scale-105 transition-all">Crear mi cuenta gratis</a>
            <Link to="/es/clubbing" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all">Ver los clubes</Link>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);
export default EvenementsGuideEs;
