import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const EXPLORE_CARDS = [
  { href: "/es/clubbing", icon: "🏛️", title: "Clubes asociados", desc: "Descubre establecimientos seleccionados en España y Europa, con fichas detalladas, opiniones verificadas e información práctica.", cta: "Ver los clubes →" },
  { href: "/es/eventos", icon: "📅", title: "Eventos y veladas", desc: "Accede a eventos privados, noches temáticas, fines de semana y encuentros organizados por socios de confianza en toda España.", cta: "Descubrir los eventos →" },
  { href: "/es/empezar-libertinaje", icon: "🧭", title: "Cómo empezar", desc: "Guías, consejos y referencias para entender los códigos, las prácticas y los usos de los encuentros entre adultos modernos.", cta: "Acceder a las guías →" },
];

const UNIVERS_CARDS = [
  { href: "https://legal.akoky.com/confidentialite", icon: "🎭", title: "Confidencialidad y Datos", desc: "Tus datos personales están protegidos por protocolos de seguridad avanzados, alojados en Europa y nunca vendidos a terceros.", external: true },
  { href: "https://legal.akoky.com/securite", icon: "🛡️", title: "Seguridad y Discreción", desc: "Protección avanzada de datos y perfiles verificados para una experiencia serena y confidencial.", external: true },
  { href: "https://legal.akoky.com/charte", icon: "🤝", title: "Respeto y Amabilidad", desc: "Una comunidad fundada en el consentimiento, el respeto mutuo y una ética clara.", external: true },
];

const PRESSE_ITEMS = [
  { icon: "📰", title: "Comunicados oficiales", desc: "Comunicados de prensa, presentaciones del proyecto y visión editorial de Akoky." },
  { icon: "🎙️", title: "Medios y socios", desc: "Prensa web, blogs especializados, medios lifestyle y comunitarios para adultos." },
  { icon: "📊", title: "Análisis y comparativas", desc: "Estudios, clasificaciones y comparaciones de plataformas comunitarias y servicios de encuentros entre adultos." },
  { icon: "📚", title: "Recursos profesionales", desc: "Logotipos, material visual oficial y soportes de comunicación para medios y socios." },
  { icon: "🤝", title: "Colaboraciones y afiliaciones", desc: "Clubes asociados, organizadores de eventos privados y actores europeos del sector." },
  { icon: "🌍", title: "Alcance europeo", desc: "Presencia activa en España, Francia, Bélgica y desarrollo progresivo a nivel internacional." },
];

const CONFIANCE_CARDS = [
  { href: "/es/faq", icon: "❓", title: "FAQ de AKOKY", desc: "Todas las respuestas a las preguntas frecuentes sobre el funcionamiento, los perfiles, los eventos y el uso de AKOKY." },
  { href: "/es/lexico", icon: "📘", title: "Léxico y Códigos", desc: "Descubre los términos, prácticas y códigos de los encuentros entre adultos, explicados de forma sencilla y sin juicios." },
  { href: "/es/libertinaje", icon: "🔥", title: "Los Encuentros Hoy", desc: "Descubre qué abarcan las prácticas modernas, sus códigos y las diferentes maneras de explorarlas libremente." },
  { href: "/es/empezar-libertinaje", icon: "🧭", title: "Cómo Empezar", desc: "Guías y consejos para descubrir este universo a tu ritmo, solo/a o en pareja, en un marco respetuoso." },
];

const EVENT_CARDS = [
  { title: "Noches Exclusivas", desc: "Eventos privados en los lugares más prestigiosos de España.", location: "Barcelona", count: "80+", img: "/images/event/event1.webp", alt: "Noches libertinas exclusivas AKOKY Barcelona" },
  { title: "Fines de Semana Temáticos", desc: "Escapadas inolvidables con la comunidad por toda España.", location: "Ibiza", count: "60+", img: "/images/event/event2.webp", alt: "Fines de semana libertinos AKOKY Ibiza" },
  { title: "Encuentros Íntimos", desc: "Veladas más íntimas para conocerse mejor en un ambiente distendido.", location: "Madrid", count: "40+", img: "/images/event/event3.webp", alt: "Encuentros íntimos y veladas privadas AKOKY Madrid" },
];

const QUICK_ACCESS = [
  { href: "/es/clubbing", icon: "👥", title: "Clubes asociados", desc: "Descubre establecimientos seleccionados y lugares de encuentro en España." },
  { href: "/es/eventos", icon: "📅", title: "Eventos y veladas", desc: "Accede a eventos privados y encuentros organizados cerca de ti." },
  { href: "/es/vip", icon: "💎", title: "Ser VIP", desc: "Accede a privilegios exclusivos y a una experiencia premium." },
  { href: "/es/blog", icon: "📖", title: "Blog y consejos", desc: "Guías, análisis y actualidad sobre los encuentros entre adultos en España." },
];

const STATS = [
  { icon: "👥", value: "1,5M Miembros Activos", desc: "Perfiles verificados, parejas y solteros que comparten una visión respetuosa y asumida de los encuentros entre adultos." },
  { icon: "🏛️", value: "120 Clubes Asociados", desc: "Establecimientos seleccionados en toda Europa, con opiniones y valoraciones verificadas por la comunidad." },
  { icon: "📅", value: "300 Eventos / Mes", desc: "Veladas y encuentros exclusivos organizados por clubes y miembros de la comunidad." },
];

const WHY_CARDS = [
  { icon: "🔒", title: "Seguridad y Discreción", desc: "Verificación de identidad, moderación continua y respeto absoluto de tu vida privada. Tus datos nunca se comparten." },
  { icon: "💎", title: "Calidad Premium", desc: "Aplicación móvil iOS y Android, funcionalidades avanzadas y acceso a eventos exclusivos en toda España." },
  { icon: "🤝", title: "Comunidad Respetuosa", desc: "Código ético claro, consentimiento en el centro de los intercambios y acompañamiento de nuevos miembros." },
  { icon: "🌍", title: "Red Europea", desc: "Presencia activa en España, Francia, Bélgica, Alemania, Italia y Portugal para encuentros a escala europea." },
];

const FAQ_ITEMS = [
  { q: "¿Qué diferencia a AKOKY de otras plataformas de encuentros entre adultos?", a: "AKOKY reúne una comunidad de más de 1,5 millones de miembros, un directorio de clubes asociados verificados, más de 300 eventos organizados cada mes, un espacio de intercambio reservado a miembros y una aplicación móvil completa. La plataforma sitúa la ética y el consentimiento en el centro de su funcionamiento." },
  { q: "¿La inscripción en AKOKY es gratuita?", a: "Sí, la inscripción es completamente gratuita. Puedes crear tu perfil, explorar la plataforma, consultar los clubes asociados, leer las opiniones de los miembros y acceder a una selección de eventos sin coste. La suscripción VIP ofrece funcionalidades avanzadas y ventajas exclusivas." },
  { q: "¿AKOKY es adecuado para principiantes?", a: "Absolutamente. AKOKY acompaña a los nuevos miembros con una guía para empezar, un léxico explicativo, una FAQ detallada y numerosos recursos pedagógicos. La comunidad es amable y atenta al respeto de los límites de cada persona." },
  { q: "¿Cómo encontrar clubes asociados cerca de mí en España?", a: "AKOKY pone a disposición un directorio de clubes asociados con más de 120 establecimientos en España, Francia y Europa. Puedes filtrar por ciudad, tipo de lugar (club, sauna, establecimiento privado) y consultar opiniones verificadas. La app móvil permite la geolocalización." },
  { q: "¿Los eventos propuestos en AKOKY son seguros?", a: "Todos los eventos referenciados en AKOKY respetan un código ético estricto. El consentimiento explícito, la discreción, el respeto de los límites y una moderación activa forman parte de los compromisos fundamentales de la plataforma y sus socios." },
];

const COMPARATIF_LINKS = [
  { href: "/es/akoky-vs-wyylde", label: "vs Wyylde" },
  { href: "/es/mejor-sitio-libertino", label: "Mejor sitio libertino" },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AKOKY",
    url: "https://akoky.com",
    logo: "/images/logo-akoky.webp",
    description: "Plataforma comunitaria libertina premium en Europa",
    foundingDate: "2014",
    contactPoint: { "@type": "ContactPoint", contactType: "Customer Service", email: "contact@akoky.com", availableLanguage: ["fr", "en", "es", "de", "it", "pt"] },
    sameAs: ["https://www.facebook.com/akokyofficial", "https://www.instagram.com/akoky_official", "https://twitter.com/akoky_official"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AKOKY España",
    url: "https://akoky.com/es",
    inLanguage: "es",
    potentialAction: { "@type": "SearchAction", target: "https://akoky.com/search?q={search_term_string}", "query-input": "required name=search_term_string" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

const HomeEs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <MetaTags
        title="AKOKY España – Plataforma Libertina Premium | España y Europa"
        description="AKOKY: 1,5M de miembros, clubes libertinos premium, eventos exclusivos. La plataforma libertina de referencia en España y Europa. Inscripción gratuita."
        canonical="https://akoky.com/es"
        lang="es"
        ogImage="https://akoky.com/images/hero-es-desktop.webp"
      />
      <HreflangTags />
      <SchemaOrg schema={schemas} />

      <Header lang="es" />

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section
          className="relative min-h-[90vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden pt-[70px]"
          style={{
            backgroundImage: "url('/images/hero-es-desktop.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%)" }} />
          <div className="absolute left-0 right-0 bottom-0 h-[180px] z-[2] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(240 20% 4% / 0.4) 45%, hsl(240 20% 4% / 0.8) 75%, hsl(240 20% 4%) 100%)" }} />

          <div className="relative z-[3] max-w-[900px] px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span>🇪🇸</span><span>Comunidad Premium España</span>
            </div>
            <h1 className="text-gradient-gold text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider leading-tight mb-4">
              Encuentros adultos &amp; experiencias exclusivas en España
            </h1>
            <h2 className="text-lg md:text-xl font-normal text-white/95 mb-8 max-w-[800px] mx-auto">
              La comunidad premium para conocer personas abiertas de mente, descubrir clubes y participar en eventos para adultos en toda España — de Barcelona a Madrid, de Ibiza a Sevilla.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.akoky.com/register" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                UNIRSE A LA COMUNIDAD
              </a>
              <Link to="/es/clubbing" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                EXPLORAR LOS CLUBES
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SEO INTRO ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container max-w-[900px]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">La Plataforma Libertina de Referencia en España</h2>
              <p className="text-base md:text-lg leading-8 text-muted-foreground">
                AKOKY se impone como <strong className="text-foreground">la red social libertina premium</strong> con más de 1,5 millones de miembros activos.
                A diferencia de las plataformas generalistas, AKOKY ofrece una experiencia completa dedicada al{" "}
                <Link to="/es/libertinaje" className="text-primary hover:underline">libertinaje moderno</Link>:
                directorio de los <Link to="/es/clubbing" className="text-primary hover:underline">mejores clubes libertinos</Link> de Europa,{" "}
                <Link to="/es/eventos" className="text-primary hover:underline">eventos exclusivos</Link> mensuales,{" "}
                <Link to="/es/live" className="text-primary hover:underline">lives libertinos</Link> en directo y{" "}
                <Link to="/es/aplicacion" className="text-primary hover:underline">aplicación móvil</Link> con geolocalización.
              </p>
              <p className="text-base md:text-lg leading-8 text-muted-foreground mt-4">
                Tanto si eres <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">principiante en el libertinaje</Link>{" "}
                como miembro experimentado, AKOKY te acompaña con <Link to="/es/faq" className="text-primary hover:underline">recursos completos</Link>,
                un <Link to="/es/lexico" className="text-primary hover:underline">léxico libertino</Link> detallado y una{" "}
                <Link to="/es/vision" className="text-primary hover:underline">carta ética</Link> que sitúa el consentimiento en el centro de cada interacción.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ EXPLORAR EL UNIVERSO ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Explora el universo AKOKY</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Una plataforma comunitaria adulta completa para descubrir, conocer y vivir experiencias exclusivas, a tu ritmo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EXPLORE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="group bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl mb-5">{card.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  <span className="text-primary font-bold text-sm mt-3 inline-block">{card.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ LA APLICACIÓN AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">LA APLICACIÓN AKOKY</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Descarga <Link to="/es/aplicacion" className="text-primary">la aplicación AKOKY</Link>, disponible en iOS y Android.
                  Disfruta de una mensajería segura, geolocalización de{" "}
                  <Link to="/es/clubbing" className="text-primary">clubes asociados</Link>, notificaciones para{" "}
                  <Link to="/es/eventos" className="text-primary">eventos privados</Link> y un espacio de intercambio reservado a miembros.
                </p>
                <ul className="flex flex-col gap-6 mb-8">
                  {[
                    { icon: "💬", label: "Mensajería instantánea segura" },
                    { icon: "📍", label: "Geolocalización de clubes" },
                    { icon: "🔔", label: "Notificaciones en tiempo real" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                      <span className="font-semibold">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/es/aplicacion" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  DESCARGAR LA APP
                </Link>
              </div>
              <div className="text-center">
                <img loading="lazy" src="/images/tel.webp" alt="Aplicación AKOKY móvil" width="380" height="760" className="w-[380px] mx-auto rounded-3xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LIVE / INTERCAMBIOS CONTINUOS ═══════════ */}
        <section className="py-20" style={{ background: "linear-gradient(rgb(15, 23, 42), rgb(0, 0, 0))", color: "white" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">EN VIVO</div>
                    <img loading="lazy" src="/images/live-akoky.webp" alt="AKOKY Live España" width="600" height="400" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Noche Exclusiva Barcelona</h4>
                      <p className="text-xs text-muted-foreground">En directo desde el Club Barcelona</p>
                    </div>
                    <div className="text-green-400 font-bold">+420 👀</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full mb-4 font-semibold text-xs">ACCESO MIEMBROS CONTINUO</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Intercambios continuos entre miembros</h2>
                <p className="text-lg opacity-80 mb-8">
                  Un espacio accesible en todo momento para intercambiar libremente, a tu ritmo, dentro de una comunidad reservada a los miembros AKOKY.
                </p>
                <Link to="/es/live" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  Descubrir el espacio de intercambio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ NUESTRA VISIÓN ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block mb-4 font-bold text-primary tracking-widest text-sm">NUESTRA VISIÓN</span>
              <h2 className="text-3xl md:text-4xl font-black">AKOKY, UNA COMUNIDAD ADULTA EN TODA REGLA</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mt-6">
                AKOKY nació de una convicción sencilla: repensar los encuentros entre adultos a través de una plataforma moderna, segura, humana y respetuosa, libre de clichés y de las derivas del pasado.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🌱 Una evolución natural del libertinaje</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nacido de la experiencia AcoquinementVotre, AKOKY se inscribe en la continuidad de años de observación del mundo libertino en Francia, España, Bélgica y Europa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Donde muchas plataformas se han estancado, AKOKY propone un nuevo enfoque: más fluido, más moderno y centrado en la experiencia real de los miembros.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🔗 Una plataforma pensada para durar</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AKOKY no es un simple servicio de citas. Es una arquitectura completa que reúne intercambios entre miembros, eventos privados, contenidos editoriales y aplicaciones dedicadas, dentro de un mismo ecosistema.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cada funcionalidad está diseñada para evolucionar con la comunidad, sin depender de modas ni de algoritmos inestables.
                </p>
              </div>
            </div>
            <div className="text-center mt-16">
              <p className="text-xl font-semibold max-w-[900px] mx-auto">
                AKOKY es una visión a largo plazo del libertinaje:<br />
                <span className="text-primary">más responsable, más libre, más humano.</span>
              </p>
            </div>
            <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
              <Link to="/es/vision" className="px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                Descubrir la visión AKOKY
              </Link>
              <Link to="/es/libertinaje" className="px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                Comprender el libertinaje moderno
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ EL UNIVERSO AKOKY (Trust) ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black">EL UNIVERSO AKOKY</h2>
              <p className="text-muted-foreground mt-4">Una plataforma completa y segura para conocer, intercambiar y compartir dentro de una comunidad adulta.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {UNIVERS_CARDS.map((card) => (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-2xl p-8 card-hover-glow relative block">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PRENSA Y MEDIOS ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-primary font-bold tracking-widest mb-4 text-sm">PRENSA &amp; MEDIOS</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  AKOKY, UN ACTOR OBSERVADO DE LOS ENCUENTROS ADULTOS MODERNOS
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AKOKY despierta el interés de los medios, observadores digitales y analistas del sector por su enfoque innovador, seguro y decididamente moderno.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Plataforma comunitaria, eventos privados, contenidos editoriales y aplicaciones dedicadas: AKOKY desarrolla un ecosistema completo, regularmente analizado y difundido en prensa especializada y generalista.
                </p>
                <Link to="/es/prensa" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                  Ver las publicaciones y dossieres de prensa
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRESSE_ITEMS.map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LA CONFIANZA AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">LA CONFIANZA AKOKY</h2>
              <p className="text-muted-foreground">Comprender, aprender y explorar los encuentros entre adultos con total serenidad.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONFIANCE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ EVENTOS PRÓXIMOS ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4 font-semibold text-xs">🇪🇸 PRÓXIMOS EVENTOS</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">LO QUE PASA EN AKOKY ESPAÑA</h2>
              <p className="text-muted-foreground">Únete a eventos exclusivos y conoce personas excepcionales en España.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EVENT_CARDS.map((event, i) => (
                <Link key={i} to="/es/eventos" className="group bg-card border border-border rounded-2xl overflow-hidden card-hover-glow">
                  <div className="h-[200px] overflow-hidden">
                    <img loading="lazy" src={event.img} alt={event.alt} width="400" height="200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{event.desc}</p>
                    <div className="flex justify-between text-xs text-primary font-bold">
                      <span>📍 {event.location}</span>
                      <span>👥 {event.count}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CÓMO FUNCIONA ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">CÓMO FUNCIONA</h2>
              <p className="text-muted-foreground">Unirse a AKOKY es sencillo y rápido.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Inscripción", desc: <>Crea tu perfil gratis en 2 minutos. Añade tus preferencias, fotos y descubre <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">los primeros pasos</Link> en este universo.</> },
                { step: "2", title: "Exploración", desc: <>Navega por perfiles verificados, consulta nuestro <Link to="/es/clubbing" className="text-primary hover:underline">directorio de clubes</Link> y explora los <Link to="/es/eventos" className="text-primary hover:underline">300 eventos mensuales</Link>.</> },
                { step: "3", title: "Encuentro", desc: <>Reserva tus plazas para las <Link to="/es/eventos" className="text-primary hover:underline">veladas exclusivas</Link>, intercambia por mensajería y vive experiencias respetuosas del <Link to="/es/vision" className="text-primary hover:underline">consentimiento</Link>.</> },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full icon-box-primary flex items-center justify-center text-xl font-bold mx-auto mb-6 text-primary-foreground">{item.step}</div>
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ACCESO RÁPIDO ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">ACCESO RÁPIDO</h2>
              <p className="text-muted-foreground">Explora el universo AKOKY con un solo gesto</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {QUICK_ACCESS.map((item) => (
                <Link key={item.href} to={item.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ÚNETE A 1,5M ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">ÚNETE A 1,5M DE MIEMBROS</h2>
              <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                Una plataforma comunitaria adulta premium en Europa. Crea tu perfil, explora clubes asociados verificados y participa en eventos exclusivos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {STATS.map((stat) => (
                <div key={stat.value} className="bg-card border border-border rounded-2xl p-8 text-center card-hover-glow">
                  <div className="text-3xl mx-auto mb-6">{stat.icon}</div>
                  <h3 className="font-bold text-lg mb-4">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ POR QUÉ ELEGIR ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">¿POR QUÉ ELEGIR AKOKY?</h2>
              <p className="text-muted-foreground text-lg">La excelencia de un ecosistema comunitario adulto en Europa.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WHY_CARDS.map((card) => (
                <div key={card.title} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="text-3xl">{card.icon}</span> {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-7">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ÚLTIMOS ARTÍCULOS DEL BLOG ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">📖 Últimos Artículos del Blog</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Guías, consejos y actualidad para vivir el libertinaje con total confianza.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clubes Libertinos en Barcelona 2026 — Guía Completa",
                  desc: "Descubre los mejores clubes libertinos de Barcelona en 2026: ambiente, precios, dress code y consejos para una primera visita exitosa.",
                  image: "/images/hero-es-desktop.webp",
                  href: "/es/blog",
                  tag: "Guía",
                },
                {
                  title: "La Escena Libertina en Madrid — Clubes y Eventos 2026",
                  desc: "Explora la escena libertina madrileña: mejores clubes, noches temáticas y comunidad swinger en la capital de España.",
                  image: "/images/clubs-libertins-villes.webp",
                  href: "/es/blog",
                  tag: "Guía",
                },
                {
                  title: "Empezar en el Libertinaje — Consejos Prácticos",
                  desc: "Guía completa para principiantes: cómo preparar tu primera experiencia libertina y respetar los códigos.",
                  image: "/images/debuter-libertinage-cover.webp",
                  href: "/es/blog",
                  tag: "Principiantes",
                },
              ].map((article, i) => (
                <Link
                  key={i}
                  to={article.href}
                  className="group bg-card border border-border rounded-2xl overflow-hidden card-hover-glow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {article.tag}
                    </span>
                    <h3 className="font-bold text-lg mt-3 mb-2 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                      Leer el artículo →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/es/blog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-gradient-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                📚 Ver todos los artículos del blog
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-20">
          <div className="container max-w-[900px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Preguntas Frecuentes</h2>
              <p className="text-muted-foreground">Todo lo que necesitas saber sobre AKOKY</p>
            </div>
            <div className="flex flex-col gap-6">
              {FAQ_ITEMS.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 cursor-pointer card-hover-glow" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-base md:text-lg">{faq.q}</h3>
                    <span className={`text-primary transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                  </div>
                  {openFaq === i && <p className="text-muted-foreground mt-4 leading-7">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMPARATIVA ═══════════ */}
        <section className="py-12 text-center">
          <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
            ¿Comparas AKOKY con otras plataformas?{" "}
            <Link to="/es/akoky-vs-wyylde" className="text-primary font-semibold hover:underline">
              Descubre nuestra comparativa AKOKY vs Wyylde
            </Link>.
          </p>
          <div className="max-w-[720px] mx-auto bg-primary/5 border border-primary/20 rounded-2xl px-8 py-8">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Guía comparativa 2026</p>
            <h2 className="text-xl font-extrabold mb-3">¿Cuál es el mejor sitio libertino en España?</h2>
            <p className="text-sm text-muted-foreground leading-7 mb-6">
              Wyylde, NousLib, Gleese, JM&nbsp;Libertins, EntreCoquins, SexyLib — todos los sitios libertinos analizados y comparados en una sola guía: funcionalidades, precios, opiniones reales y perfiles falsos.
            </p>
            <Link to="/es/mejor-sitio-libertino" className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gradient-primary text-primary-foreground font-extrabold text-sm hover:opacity-85 transition-opacity">
              🏆 Ver la clasificación completa 2026
            </Link>
            <div className="flex flex-wrap gap-2 justify-center mt-5">
              {COMPARATIF_LINKS.map((c) => (
                <Link key={c.href} to={c.href} className="text-xs text-muted-foreground px-3 py-1.5 border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang="es" />
    </>
  );
};

export default HomeEs;
