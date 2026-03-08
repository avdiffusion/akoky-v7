import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cómo participar en mi primer evento AKOKY?", answer: "Crea tu perfil gratuito en Akoky.com, explora los eventos próximos en tu región, lee atentamente las descripciones y requisitos, y reserva online. ¡Los principiantes son siempre bienvenidos! Te recomendamos empezar por un afterwork libertino para familiarizarte con la comunidad en un ambiente relajado. Consulta nuestra guía completa para empezar en el libertinaje." },
  { question: "¿Los eventos están reservados a parejas?", answer: "No, AKOKY organiza eventos para todos los perfiles: parejas (hetero, homo, bi), mujeres solteras, hombres solteros (según cuotas para mantener el equilibrio), y grupos de amigos. Cada ficha de evento precisa claramente los perfiles aceptados. Las mujeres solas son generalmente bienvenidas sin restricción, mientras que los hombres solos pasan por una selección para garantizar la calidad de la experiencia para todos." },
  { question: "¿Cuál es la tarifa media de un evento?", answer: "Las tarifas varían según el tipo de evento: 20-40€ para veladas en club, 15-25€ para afterworks libertinos, 80-150€ para veladas privadas temáticas, y 200-500€ para fines de semana exclusivos en villa o resort. Los miembros VIP se benefician de descuentos de hasta el 30% en todos los eventos. Consulta cada ficha de evento para conocer los precios detallados y las posibles promociones en curso." },
  { question: "¿Cómo cancelar una reserva?", answer: "La cancelación es gratuita hasta 48h antes del inicio del evento. Puedes cancelar directamente desde tu espacio de miembro en el sitio web o a través de la aplicación móvil Akoky. Más allá de 48h, pueden aplicarse gastos de cancelación según la política específica del organizador (generalmente el 50% del importe). En caso de fuerza mayor (enfermedad, urgencia), contacta con nuestro servicio de atención al cliente que estudiará tu situación." },
  { question: "¿Los eventos AKOKY respetan el consentimiento?", answer: "Absolutamente. El consentimiento es el pilar de nuestra carta ética. Todos nuestros eventos siguen protocolos estrictos: personal formado específicamente en el respeto de los límites, sistema de safe words reconocido, espacios de retiro disponibles, presencia de un equipo de moderación atento. Todo comportamiento inapropiado, presión o falta de respeto al consentimiento conlleva una exclusión inmediata y definitiva de la plataforma Akoky." },
  { question: "¿Dónde se celebran los eventos Akoky?", answer: "Nuestros eventos tienen lugar en los clubes libertinos más reputados y establecimientos cuidadosamente seleccionados de España y Europa. Para garantizar la discreción de todos, las direcciones exactas se comunican únicamente a los participantes inscritos y validados, generalmente 48h antes del evento. Todos nuestros lugares asociados cumplen estándares elevados de higiene, seguridad y confidencialidad." },
  { question: "¿Con qué frecuencia se organizan eventos Akoky?", answer: "Akoky organiza más de 300 eventos al mes en toda Europa. Esto incluye: veladas en club varias veces por semana en las grandes ciudades, afterworks libertinos regulares (2-3 veces por semana en las metrópolis), eventos temáticos mensuales y fines de semana exclusivos. Nuestro calendario se actualiza constantemente para ofrecerte el máximo de opciones y flexibilidad." },
  { question: "¿Hay dress code para los eventos?", answer: "Sí, cada evento tiene exigencias de vestimenta específicas indicadas en su descripción. En general: traje elegante para las veladas en club (traje/vestido de cóctel), traje sexy-chic para los afterworks (business casual con un toque sensual), código específico para eventos temáticos (lencería, látex, mascarada, etc.). El respeto del dress code es obligatorio y se verifica en la entrada." },
  { question: "¿Se puede ir solo/a a un evento Akoky?", answer: "Sí, los solteros son bienvenidos según las cuotas establecidas para cada evento. Las mujeres solas son generalmente aceptadas sin restricción y a menudo se benefician de tarifas preferenciales. Los hombres solos pueden participar en ciertos eventos específicos con una selección previa basada en su perfil, fotos validadas y referencias comunitarias, para mantener un equilibrio armonioso y una experiencia agradable para todos." },
  { question: "¿Cómo garantizáis la discreción de los participantes?", answer: "La discreción es nuestra prioridad absoluta. Nuestras medidas incluyen: verificación de identidad estricta al registrarse, validación manual de todas las fotos de perfil, prohibición formal de tomar fotos o vídeos durante los eventos (smartphones recogidos o sellados a la entrada según los lugares), personal formado en el respeto del anonimato, uso de pseudónimos recomendado, y política de confidencialidad reforzada con sanciones severas en caso de violación." },
];

const ES_CARDS = [
  {
    img: "/images/barcelone.webp",
    alt: "Velada libertina Akoky en club de Barcelona",
    title: "Veladas Libertinas en Clubs de Barcelona",
    text: "Barcelona acoge los eventos libertinos Akoky más creativos y vanguardistas. La capital catalana, conocida por su apertura de miras, ofrece un marco excepcional para nuestras veladas libertinas donde se mezclan arte, cultura y sensualidad. Cada velada en Barcelona es una experiencia única en uno de los epicentros del libertinaje europeo."
  },
  {
    img: "/images/soirreeparis.webp",
    alt: "Apéro libertino Akoky afterwork en Madrid",
    title: "Apéros Libertinos Afterwork en Madrid",
    text: "Los apéros libertinos Akoky en Madrid son la ocasión perfecta para descubrir la comunidad en un ambiente relajado. Estos eventos afterwork en las mejores terrazas y locales privados de la capital permiten conocerse antes de participar en las veladas libertinas más íntimas."
  },
  {
    img: "/images/evenement-libertin-europe.webp",
    alt: "Fin de semana libertino Akoky en villa privada",
    title: "Fines de Semana Libertinos Exclusivos",
    text: "Los fines de semana libertinos Akoky en villas privatizadas de la Costa Brava, Ibiza o la Costa del Sol ofrecen una inmersión total en el arte de vivir libertino. Estos eventos de excepción reúnen a los miembros en marcos suntuosos para momentos inolvidables lejos de la rutina."
  },
];

const MADRID_CARDS = [
  {
    img: "/images/apero-libertin.webp",
    alt: "Velada libertina Akoky en club de Madrid",
    title: "Veladas Club Madrid",
    text: "Madrid, capital de la vida nocturna europea, acoge nuestras veladas libertinas más cosmopolitas. Los clubes socios de Akoky en Madrid proponen espacios elegantes donde se fusionan la tradición libertina española con la innovación Akoky."
  },
  {
    img: "/images/apero-bruxelle.webp",
    alt: "Apéro libertino Akoky en Madrid",
    title: "Apéros Libertinos Internacionales",
    text: "Los apéros libertinos Akoky en Madrid reúnen una comunidad multicultural y abierta. Estos eventos son la ocasión de conocer miembros venidos de toda Europa, en el espíritu de apertura que caracteriza la escena libertina madrileña."
  },
];

const COSTA_CARDS = [
  {
    img: "/images/soiree-libertine-plage.webp",
    alt: "Velada libertina Akoky en la Costa del Sol",
    title: "Eventos Bord de Mar",
    text: "Las veladas libertinas Akoky en la costa española celebran la belleza del Mediterráneo. De los apéros al atardecer a las veladas en playas privatizadas, estos eventos ofrecen una experiencia única donde naturaleza y libertinaje se encuentran."
  },
  {
    img: "/images/evenement-libertin-espagne.webp",
    alt: "Evento libertino Akoky en Ibiza",
    title: "Ibiza & Islas Baleares",
    text: "Ibiza, meca de la libertad y la fiesta, acoge eventos Akoky únicos en el mundo. Villas privadas con vistas al mar, pool parties exclusivas y veladas under the stars. Los eventos en las Baleares son los más demandados del calendario Akoky."
  },
];

const BENEFITS = [
  { icon: "✨", title: "Ambiente Premium", text: "Cada evento libertino Akoky se organiza en lugares de excepción. Nuestras veladas libertinas se celebran en los clubes más reputados y los espacios más elegantes de España. El ambiente refinado de nuestros eventos garantiza una experiencia memorable en cada participación." },
  { icon: "🛡️", title: "Seguridad y Respeto", text: "La seguridad de nuestros miembros es nuestra prioridad absoluta. Nuestros eventos libertinos aplican protocolos estrictos de respeto y consentimiento. Cada velada Akoky está supervisada por un equipo atento que vela por el bienestar de todos los participantes." },
  { icon: "🎭", title: "Libertad Asumida", text: "Las veladas libertinas Akoky celebran la libertad de ser uno mismo. Nuestros eventos ofrecen un espacio donde cada persona puede explorar sus deseos con total serenidad. La filosofía Akoky fomenta la autenticidad y el respeto de las elecciones de cada uno en una atmósfera benevolente." },
  { icon: "🌍", title: "Comunidad Internacional", text: "Unirse a los eventos libertinos Akoky es integrarse en la mayor comunidad libertina de Europa. Nuestras veladas reúnen miembros de España, Francia, Alemania, Italia y más allá. El espíritu comunitario que reina en nuestros apéros libertinos y veladas exclusivas crea vínculos auténticos y duraderos." },
];

const GALLERY = [
  { img: "/images/apero-libertin.webp", label: "Encuentro libertino Akoky en Madrid" },
  { img: "/images/soiree-libertine-plage.webp", label: "Velada libertina Akoky playa" },
  { img: "/images/cap-agde-libertin.webp", label: "Evento libertino Akoky Costa Brava" },
  { img: "/images/soiree-couple-libertin.webp", label: "Velada libertina parejas España" },
  { img: "/images/apero-libertin-akoky.webp", label: "Encuentro libertino Akoky en Barcelona" },
  { img: "/images/jeux-libertin.webp", label: "Juegos libertinos exclusivos Akoky" },
  { img: "/images/soiree-club-libertin.webp", label: "Velada Akoky en club libertino España" },
  { img: "/images/evenement-libertin-espagne.webp", label: "Evento libertino Akoky en España" },
  { img: "/images/evenement-libertin-europe.webp", label: "Evento libertino Akoky en Europa" },
  { img: "/images/barcelone.webp", label: "Evento libertino Akoky en Barcelona" },
];

const CTA_LINKS = [
  { to: "/es/libertinaje", label: "Libertinaje" },
  { to: "/es/clubes-libertinos", label: "Clubes Libertinos" },
  { to: "/es/clubbing", label: "Guía Clubbing" },
  { to: "/es/saunas-libertinos", label: "Saunas Libertinos" },
  { to: "/es/vip", label: "Estatus VIP" },
  { to: "/es/live", label: "Lives Akoky" },
  { to: "/es/empezar-libertinaje", label: "Empezar en el Libertinaje" },
  { to: "/es/app", label: "Aplicación Móvil" },
];

const EventosEs = () => (
  <>
    <MetaTags
      title="Eventos Libertinos AKOKY 2026 – Veladas y Apéros Libertinos España"
      description="Veladas libertinas, apéros afterwork y fines de semana exclusivos con AKOKY. Únete a la comunidad libertina premium en España: Madrid, Barcelona, Ibiza y más."
      canonical="https://akoky.com/es/eventos"
      lang="es"
      ogImage="/images/es-eventos-cover.webp"
    />
    <HreflangTags slug="eventos" />
    <ContentPageLayout
      lang="es"
      title="Eventos Libertinos AKOKY España"
      description="Veladas, apéros y fines de semana libertinos en España"
      canonical="https://akoky.com/es/eventos"
      heroTitle="Eventos Libertinos Akoky – Veladas y Apéros Libertinos en España"
      heroSubtitle="Vive la experiencia libertina premium: veladas en club, apéros exclusivos y encuentros auténticos en toda España"
      heroImage="/images/es-eventos-cover.webp"
      breadcrumb={[{ label: "Eventos libertinos" }]}
      faq={FAQ}
    >

      {/* Veladas libertinas Akoky en España */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Veladas Libertinas Akoky en España</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Los eventos libertinos Akoky en España encarnan la excelencia del lifestyle libertino. De Madrid a Barcelona, pasando por Valencia, Sevilla e Ibiza, nuestras veladas libertinas en club ofrecen una experiencia única donde elegancia y libertad se encuentran. Cada evento libertino está pensado para crear momentos inolvidables en una atmósfera refinada y benevolente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {ES_CARDS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed mb-3">Nuestros apéros libertinos en España se han convertido en citas imprescindibles para la comunidad libertina hispanohablante. Estas veladas Akoky se distinguen por su ambiente cálido y su selección rigurosa de los lugares. Ya seas habitual de las <Link to="/es/clubbing" className="text-primary hover:underline">veladas libertinas</Link> o curioso por descubrir este mundo, los eventos Akoky en España te acogen en un marco seguro y respetuoso.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">Los <Link to="/es/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> socios de Akoky en España proponen espacios privatizados para nuestros eventos exclusivos. De las veladas temáticas a los apéros afterwork libertinos, cada evento libertino es una celebración del lifestyle con total discreción. Barcelona y Madrid, capitales europeas de la vida libertina, acogen regularmente nuestras veladas libertinas más codiciadas, atrayendo miembros de toda Europa.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">La experiencia de los eventos libertinos Akoky en España va más allá de la simple velada. Es una comunidad vibrante que se reúne para compartir momentos auténticos, con el respeto de los valores que hacen la reputación de Akoky: elegancia, benevolencia y libertad asumida.</p>
          </div>
        </div>
      </section>

      {/* Eventos libertinos Akoky en Madrid */}
      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-3xl mb-3">🏛️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Eventos Libertinos Akoky en Madrid</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Madrid es un territorio de excelencia para los eventos libertinos Akoky. La capital española y sus grandes clubes acogen veladas libertinas que irradian en toda Europa. El espíritu libertino madrileño, reconocido por su apertura y su convivialidad, se fusiona perfectamente con la filosofía Akoky.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {MADRID_CARDS.map((c, i) => (
              <div key={i} className="bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed">Las veladas libertinas Akoky en Madrid atraen una comunidad internacional y refinada. Los clubes libertinos madrileños, entre los más reputados de Europa, ofrecen un marco ideal para nuestros eventos exclusivos. Cada apéro libertino en Madrid es una celebración de la diversidad cultural y la libertad de ser uno mismo.</p>
            <p className="text-muted-foreground leading-relaxed">Los eventos Akoky en Madrid se distinguen por su atmósfera cálida y su calidad de organización. De las veladas íntimas a los grandes eventos internacionales, Madrid se ha convertido en un destino privilegiado para los amantes del lifestyle libertino en busca de autenticidad y elegancia.</p>
          </div>
        </div>
      </section>

      {/* Veladas libertinas Akoky en la Costa y las Islas */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-3xl mb-3">🏖️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Veladas Libertinas Akoky en la Costa e Ibiza</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              La costa española aporta una dimensión solar y festiva a los eventos libertinos Akoky. De la Costa del Sol a la Costa Brava, pasando por Ibiza y las Baleares, nuestras veladas libertinas costeras conjugan el calor mediterráneo con la elegancia que hace la firma Akoky. Cada evento en la costa es una invitación a la celebración de la vida y los placeres.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {COSTA_CARDS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed">Los eventos libertinos Akoky en la costa española atraen una comunidad europea en busca de sol y libertad. Barcelona, con su espíritu vanguardista, acoge veladas libertinas que empujan los límites de la creatividad. Los apéros libertinos en las terrazas barcelonesas ofrecen una experiencia única que combina lifestyle libertino y arte de vivir mediterráneo.</p>
            <p className="text-muted-foreground leading-relaxed">El verano español ve florecer eventos Akoky de excepción a lo largo de las costas. De las veladas frente al mar a los fines de semana en villas privadas, España se convierte en el terreno de juego privilegiado de la comunidad libertina Akoky. Si eres nuevo, consulta nuestra guía para <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">empezar en el libertinaje</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Por Qué Participar en los Eventos Libertinos Akoky</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md hover:border-primary/40 transition-all">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">El Universo de los Eventos Libertinos Akoky</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {GALLERY.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl relative group">
                <img src={g.img} alt={g.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-white text-xs font-medium">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explorar */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">Explorar nuestros eventos y recursos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CTA_LINKS.map((l, i) => (
              <Link key={i} to={l.to} className="p-3 bg-background border border-border rounded-lg text-center text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default EventosEs;
