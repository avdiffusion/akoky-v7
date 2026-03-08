import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "¿En qué se diferencia AKOKY de otras plataformas?", answer: "AKOKY es la única plataforma con multiperfil (una cuenta, varios perfiles), chat tipo WhatsApp con grupos, testimonios verificados y live streaming integrado. Combina red social, directorio de clubes y agenda de eventos en una sola aplicación." },
  { question: "¿AKOKY está disponible como aplicación móvil?", answer: "Sí. AKOKY dispone de una PWA (Progressive Web App) optimizada para iOS y Android, con notificaciones push, geolocalización y acceso completo a todas las funcionalidades." },
  { question: "¿Quién puede usar AKOKY?", answer: "AKOKY está abierto a todos los adultos mayores de 18 años que respeten la carta ética de la plataforma, independientemente de su orientación sexual o situación sentimental." },
];

const AkokyEs = () => (
  <>
    <MetaTags
      title="AKOKY España | La Plataforma Libertina Premium Europea"
      description="Descubre AKOKY: la historia, la visión y las funcionalidades únicas de la plataforma libertina líder en Europa. Multiperfil, chat WhatsApp, verificación."
      canonical="https://akoky.com/es/akoky"
      lang="es"
    />
    <HreflangTags slug="akoky" />
    <ContentPageLayout
      lang="es"
      title="AKOKY España | La Plataforma Libertina Premium Europea"
      description="Descubre AKOKY: la historia, la visión y las funcionalidades únicas de la plataforma libertina líder en Europa. Multiperfil, chat WhatsApp, verificación."
      canonical="https://akoky.com/es/akoky"
      heroTitle="AKOKY: La Red Social Libertina Premium"
      heroSubtitle="Nacida en Francia, presente en toda Europa. Descubre la plataforma que reinventa el libertinaje moderno."
      breadcrumb={[{ label: "AKOKY: La Red Social Libertina Premium" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Qué es AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY es mucho más que una aplicación de citas para adultos. Es una red social completa, pensada específicamente para la comunidad libertina europea. Fundada a partir de la evolución de AcoquinementVotre, una plataforma pionera del libertinaje francés, AKOKY representa la siguiente generación de plataformas para adultos.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Nuestras Funcionalidades Exclusivas</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Chat tipo WhatsApp con grupos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Mensajería instantánea individual y en grupo, con notificaciones en tiempo real. Organiza veladas, coordina encuentros y mantén el contacto con tu comunidad como lo harías en WhatsApp, pero en un entorno seguro y privado.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👤 Multiperfil — Exclusiva Mundial</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La única plataforma del mundo que permite crear varios perfiles (pareja, solo hombre, sola mujer) en una sola cuenta, con cambio en un clic. Cada perfil tiene su propia galería, descripción y configuración de privacidad.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">✅ Testimonios Verificados</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Los miembros pueden dejar testimonios verificados sobre sus encuentros. Un sistema único que garantiza la autenticidad y ayuda a construir confianza dentro de la comunidad.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📡 Live Streaming + Replay</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Más de 20 lives por semana: ambiente de clubes en directo, veladas exclusivas, contenidos VIP. Disfruta de la experiencia desde casa o úsala para decidir qué eventos visitar.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🏛️ Directorio de Clubes Verificados</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">120+ clubes libertinos verificados en toda Europa, con fichas detalladas, fotos, horarios, precios y valoraciones auténticas de la comunidad AKOKY.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY SAFE</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Nuestro sistema de verificación de identidad garantiza que cada miembro es quien dice ser. Perfiles certificados, moderación humana 24h/7d, sistema de denuncia eficaz. La seguridad no es una opción, es una prioridad.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Nuestra Visión</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY cree que el libertinaje moderno merece una plataforma a su altura: elegante, segura, ética y tecnológicamente avanzada. Nuestra misión es ofrecer el ecosistema más completo para que parejas y solteros exploren este estilo de vida con total autenticidad.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AkokyEs;
