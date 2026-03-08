import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "¿La app AKOKY es gratuita?", answer: "Sí. La descarga y el uso básico son gratuitos. Las funcionalidades premium están disponibles con la suscripción VIP." },
  { question: "¿Está disponible en iOS y Android?", answer: "Sí. AKOKY es una PWA compatible con iOS y Android. Accede desde tu navegador en akoky.com y añade el icono a tu pantalla de inicio." },
  { question: "¿La app respeta mi privacidad?", answer: "Absolutamente. La geolocalización es aproximada, las fotos pueden desenfocarse automáticamente y el modo incógnito te permite navegar sin que te vean." },
];

const AppEs = () => (
  <>
    <MetaTags
      title="AKOKY App | Aplicación Libertina Premium iOS y Android"
      description="Descarga la app AKOKY: geolocalización, mensajería instantánea, alertas de eventos y gestión de perfil. La app libertina más completa de Europa."
      canonical="https://akoky.com/es/app"
      lang="es"
    />
    <HreflangTags slug="app" />
    <ContentPageLayout
      lang="es"
      title="AKOKY App | Aplicación Libertina Premium iOS y Android"
      description="Descarga la app AKOKY: geolocalización, mensajería instantánea, alertas de eventos y gestión de perfil. La app libertina más completa de Europa."
      canonical="https://akoky.com/es/app"
      heroTitle="La Aplicación Libertina más Completa de Europa"
      heroSubtitle="Geolocalización, chat tipo WhatsApp, alertas de eventos y multiperfil. Todo en tu smartphone."
      breadcrumb={[{ label: "La Aplicación Libertina más Completa de Europa" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY App: Tu Comunidad en el Bolsillo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">La aplicación AKOKY está disponible como PWA (Progressive Web App) optimizada para iOS y Android. Sin necesidad de descarga desde una tienda de aplicaciones: accede directamente desde tu navegador y añade el icono a tu pantalla de inicio.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Funcionalidades Principales</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📍 Geolocalización</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Encuentra miembros, clubes y eventos cerca de tu ubicación en tiempo real. La geolocalización es aproximada para proteger tu privacidad: nunca revela tu posición exacta.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Mensajería Instantánea</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Chat individual y en grupo tipo WhatsApp, con acuse de recibo, envío de fotos y notas de voz. Coordina encuentros, organiza veladas y mantén el contacto con tu red de forma sencilla y segura.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔔 Alertas de Eventos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Recibe notificaciones push para los eventos que te interesan: nuevas veladas en tu ciudad, eventos de tus clubes favoritos y recordatorios de reservas. Nunca te pierdas una oportunidad.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👤 Gestión de Perfil y Multiperfiles</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Actualiza tu perfil, gestiona tu galería de fotos y cambia entre tus diferentes perfiles (pareja, solo, sola) con un solo toque. La funcionalidad multiperfil es exclusiva de AKOKY.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🛡️ AKOKY SAFE en la App</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Verifica tu identidad directamente desde la app para obtener el badge de confianza. Los perfiles verificados son claramente identificados en la comunidad.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Privacidad y Seguridad</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">La app AKOKY incorpora las mismas protecciones que la versión web: cifrado de extremo a extremo, modo incógnito, desenfoque de fotos y control total sobre tu visibilidad. Tu privacidad, bajo tu control.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AppEs;
