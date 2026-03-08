import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const faqAkoky = [
  {
    question: "¿Qué es AKOKY y para qué sirve la plataforma?",
    answer: "AKOKY es una plataforma comunitaria adulta europea dedicada a los encuentros, clubs asociados y eventos privados. Se dirige a parejas, solteros y perfiles curiosos que desean evolucionar en un entorno estructurado, respetuoso y seguro."
  },
  {
    question: "¿En qué se diferencia AKOKY de otras plataformas similares?",
    answer: "A diferencia de otras plataformas, AKOKY combina una red social comunitaria, un directorio de clubes asociados verificados, eventos privados organizados, lives exclusivos y un enfoque ético centrado en el consentimiento y la calidad de los intercambios."
  },
  {
    question: "¿Cómo garantiza AKOKY la seguridad y discreción de los miembros?",
    answer: "Cada perfil es moderado manualmente, los datos están protegidos según las normas RGPD, y herramientas avanzadas permiten gestionar la visibilidad de los perfiles y las fotos. El servicio AKOKY Safe refuerza la protección de los miembros diariamente."
  },
  {
    question: "¿La inscripción en AKOKY es gratuita?",
    answer: "Sí. La inscripción es gratuita y permite descubrir la plataforma, los clubes asociados y los eventos. Una suscripción VIP opcional desbloquea funcionalidades avanzadas como la mensajería ilimitada y el acceso a eventos exclusivos."
  },
  {
    question: "¿Quién puede usar AKOKY?",
    answer: "AKOKY está abierto a parejas, mujeres solas, hombres solos (según condiciones), solteros y perfiles poliamorosos. Cada evento especifica claramente los perfiles aceptados."
  },
  {
    question: "¿AKOKY propone eventos adaptados a los principiantes?",
    answer: "Sí. AKOKY organiza eventos accesibles a principiantes, como aperitivos de descubrimiento, visitas guiadas a clubes y veladas pedagógicas. También hay una guía dedicada para entender los códigos."
  }
];

const jsonSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AKOKY",
  "url": "https://akoky.com",
  "logo": "https://akoky.com/images/logo-akoky.webp",
  "description": "Plataforma comunitaria libertina premium en Europa",
  "foundingDate": "2014",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contact@akoky.com",
    "availableLanguage": ["fr", "en", "es", "de", "it", "pt"]
  },
  "sameAs": [
    "https://www.facebook.com/akokyofficial",
    "https://www.instagram.com/akoky_official",
    "https://twitter.com/akoky_official"
  ]
};

const AkokyEs = () => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="AKOKY" />
        <meta name="twitter:site" content="@akoky_official" />
      </Helmet>
      <HreflangTags slug="akoky" />

      <ContentPageLayout
        lang="es"
        title="Nuestra Misión AKOKY – Comunidad adulta premium y eventos"
        description="Descubre los valores, la visión y los compromisos de la comunidad Akoky. Plataforma comunitaria adulta premium en Europa."
        canonical="https://akoky.com/es/akoky"
        heroTitle="Nuestra misión AKOKY"
        heroSubtitle="Descubre los valores, la visión y los compromisos de la comunidad Akoky"
        heroImage="/images/akoky.webp"
        breadcrumb={[{ label: "AKOKY" }]}
        faq={faqAkoky}
        schema={jsonSchema}
      >
        {/* Aplicación Móvil */}
        <section className="py-16 px-4 bg-card">
          <div className="container max-w-5xl mx-auto">
            <span className="text-primary font-bold tracking-wider text-sm mb-2 block">Nuestra Misión</span>
            <h2 className="text-3xl font-bold text-foreground mb-6">La Aplicación AKOKY: la experiencia comunitaria adulta en tu bolsillo</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Nacido de un proyecto comunitario iniciado en 2014 y estructurado en su forma actual desde 2020, AKOKY desarrolla una <Link to="/es/app" className="text-primary hover:underline">aplicación móvil premium</Link> disponible en iOS y Android.</p>
                  <p>Permite a más de <Link to="/es" className="text-primary hover:underline">1,5 millones de miembros</Link> descubrir <Link to="/es/clubbing" className="text-primary hover:underline">clubes asociados verificados</Link>, seguir <Link to="/es/eventos" className="text-primary hover:underline">eventos privados cada mes</Link> y acceder a un ecosistema pensado para los encuentros adultos modernos, basado en la discreción, el respeto y un enfoque ético del lifestyle.</p>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a href="https://akoky.com/es/app" className="px-6 py-3 bg-foreground text-background rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                    <span>📱</span> Descargar para iOS
                  </a>
                  <a href="https://akoky.com/es/app" className="px-6 py-3 border border-border text-foreground rounded-lg font-bold hover:bg-accent transition-colors flex items-center gap-2">
                    <span>🤖</span> Descargar para Android
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Compatible iOS 13+ | ChromeOS | Android TV</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
                <img src="/images/3tel.webp" alt="AKOKY App Screenshot" className="relative z-10 rounded-2xl shadow-2xl border border-border mx-auto max-w-sm" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Nuestras Cifras */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold text-primary tracking-widest mb-12 uppercase">Nuestras Cifras</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1.5M+", label: "Miembros Activos", href: "/es" },
                { value: "120+", label: "Clubes Verificados", href: "/es/clubbing" },
                { value: "300+", label: "Eventos/Mes", href: "/es/eventos" },
                { value: "20+", label: "Lives/Semana", href: "/es/live" },
              ].map((stat, i) => (
                <Link key={i} to={stat.href} className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary transition-colors">
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Léxico */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Léxico Libertino Completo: Domina el Vocabulario del Libertinaje Moderno</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Nuestro <Link to="/es/lexico" className="text-primary hover:underline">léxico libertino</Link> referencia más de 200 términos esenciales para entender el <Link to="/es/libertinaje" className="text-primary hover:underline">libertinaje moderno</Link>. Del <strong className="text-foreground">intercambio de parejas</strong> al <strong className="text-foreground">mélangisme</strong>, del <strong className="text-foreground">candaulismo</strong> al <strong className="text-foreground">trío</strong>, descubre las definiciones precisas de todas las prácticas libertinas. Ya seas <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">principiante</Link> o miembro confirmado, este diccionario te permitirá navegar con confianza en los <Link to="/es/clubbing" className="text-primary hover:underline">clubes libertinos</Link>, durante los <Link to="/es/eventos" className="text-primary hover:underline">eventos</Link> y en nuestra plataforma.</p>
              <p>AKOKY se distingue de <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong>, <strong className="text-foreground">Libertic</strong> y <strong className="text-foreground">SexyLib</strong> por su enfoque pedagógico único. Nuestra <Link to="/es/vision" className="text-primary hover:underline">carta ética</Link> sitúa el <strong className="text-foreground">consentimiento explícito</strong>, la <strong className="text-foreground">discreción absoluta</strong> y el <strong className="text-foreground">respeto de los límites</strong> en el centro de cada interacción.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/es/lexico" className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg">Explorar el Léxico Libertino Completo (200+ Términos) →</Link>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Los valores fundadores de AKOKY</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">AKOKY se basa en una visión clara de los encuentros adultos modernos: un marco estructurado, una ética asumida y reglas diseñadas para garantizar experiencias respetuosas, seguras y de calidad.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { num: "01", title: "Autenticidad de los perfiles y los intercambios", text: "AKOKY valora perfiles reales, transparentes y coherentes. La sinceridad prima sobre la puesta en escena, para favorecer encuentros adultos basados en la confianza y expectativas claramente expresadas." },
                { num: "02", title: "Seguridad, confidencialidad y protección de datos", text: "La plataforma integra herramientas de seguridad avanzadas, moderación humana activa y gestión rigurosa de los datos personales para garantizar la discreción y el bienestar de cada miembro." },
                { num: "03", title: "Respeto, consentimiento y límites claros", text: "El consentimiento explícito, el respeto de los límites y la tolerancia cero frente a comportamientos intrusivos o inapropiados constituyen la base de todas las interacciones en AKOKY." },
                { num: "04", title: "Elegancia y enfoque responsable del lifestyle adulto", text: "AKOKY defiende una visión refinada y responsable del lifestyle adulto, opuesta al voyeurismo, al contenido trash o a las plataformas oportunistas, privilegiando la calidad de las experiencias sobre la cantidad." },
              ].map((v, i) => (
                <div key={i} className="bg-card p-8 rounded-2xl border border-border">
                  <span className="text-4xl font-black text-muted/30 mb-4 block">{v.num}</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">{v.title}</h3>
                  <p className="text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg">En AKOKY, los encuentros adultos no son un pretexto. <strong className="text-foreground">Implican responsabilidad, respeto y madurez.</strong></p>
          </div>
        </section>

        {/* Juegos */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm mb-2 block">🎲 Juegos Akoky</span>
                <h2 className="text-3xl font-bold text-foreground mb-4">Juega en tu móvil… o en tu TV</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">Dado animado, retos atrevidos, inmersión total. Los juegos Akoky están diseñados para dar chispa a tus veladas en pareja o en grupo, tanto en móvil como en pantalla grande.</p>
                <Link to="/es/juegos" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">▶ Jugar ahora – Gratis</Link>
                <p className="text-xs text-muted-foreground mt-4">📺 Compatible TV · Chromecast · Smart TV</p>
              </div>
              <div>
                <img src="/images/app-tv.webp" alt="Juegos Akoky en televisión y pantalla grande" className="rounded-2xl shadow-2xl border border-border mx-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Misión completa */}
        <section className="py-16 px-4 bg-background">
          <div className="container max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Misión: Revolucionar el Libertinaje con Ética y Transparencia</h2>
            <p>Fundado en <strong className="text-foreground">2014</strong> por un equipo apasionado del <Link to="/es/libertinaje" className="text-primary hover:underline">lifestyle libertino</Link>, AKOKY se ha convertido en 4 años en una de las <strong className="text-foreground">plataformas comunitarias libertinas más activas de Europa</strong> con 1,5 millones de miembros activos. Nos posicionamos como la alternativa ética a <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong>, <strong className="text-foreground">Libertic</strong> y <strong className="text-foreground">SexyLib</strong>, situando el <Link to="/es/vision" className="text-primary hover:underline">consentimiento</Link> y la <strong className="text-foreground">transparencia</strong> en el centro de nuestro ADN.</p>
            <p>Nuestro ecosistema único combina una <strong className="text-foreground">red social libertina segura</strong>, un <Link to="/es/clubbing" className="text-primary hover:underline">directorio de 120 clubes verificados</Link> en España y toda Europa, <Link to="/es/eventos" className="text-primary hover:underline">300 eventos mensuales</Link> organizados por profesionales formados, <Link to="/es/live" className="text-primary hover:underline">20 lives libertinos semanales</Link> y una <Link to="/es/app" className="text-primary hover:underline">aplicación móvil de vanguardia</Link> con geolocalización en tiempo real.</p>
            <p>AKOKY no es solo un sitio de citas: es una <strong className="text-foreground">comunidad benevolente</strong> que acompaña a <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">los principiantes</Link> con un <Link to="/es/lexico" className="text-primary hover:underline">léxico completo</Link>, una <Link to="/es/faq" className="text-primary hover:underline">FAQ detallada</Link>, un <Link to="/es/blog" className="text-primary hover:underline">blog educativo</Link> y <Link to="/es/avis" className="text-primary hover:underline">testimonios auténticos</Link> (nota media 4,7/5). Nuestra misión: democratizar el libertinaje moderno rompiendo tabúes, educando sin juzgar, y creando un espacio donde parejas, solteros y curiosos puedan realizarse libremente con respeto mutuo.</p>
          </div>
        </section>

        {/* Espacio Prensa */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Espacio Prensa AKOKY – Dossier media y recursos oficiales</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Bienvenido al espacio prensa de AKOKY (akoky.com), la plataforma libertina de referencia en Europa. Aquí encontrarás todos nuestros comunicados de prensa, dossiers de medios, visuales oficiales y contactos para cualquier solicitud periodística.</p>
                <Link to="/es/prensa" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">Acceder al espacio prensa →</Link>
              </div>
              <div>
                <img src="/images/akoky-presse.webp" alt="AKOKY en los medios de comunicación" className="rounded-2xl shadow-xl border border-border" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">¿Listo para unirte a la comunidad AKOKY?</h2>
            <p className="text-muted-foreground mb-8">Inscripción gratuita en menos de 2 minutos. Accede a los clubes, eventos y a la comunidad libertina más activa de Europa.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://akoky.com/register" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity">Crear mi cuenta gratis</a>
              <Link to="/es/vip" className="px-8 py-4 border border-primary text-primary rounded-full font-bold text-lg hover:bg-primary/10 transition-colors">Descubrir VIP</Link>
            </div>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default AkokyEs;
