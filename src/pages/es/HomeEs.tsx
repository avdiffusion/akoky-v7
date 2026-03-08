import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "¿AKOKY es gratuito?", answer: "Sí, el registro es completamente gratuito. Las funciones básicas están disponibles para todos los miembros. Las funcionalidades premium (multiperfiles, eventos VIP, lives exclusivos) están disponibles con la suscripción VIP." },
  { question: "¿AKOKY está disponible en España?", answer: "Sí. AKOKY tiene una comunidad activa en toda España: Madrid, Barcelona, Valencia, Sevilla, Bilbao, Zaragoza y muchas más ciudades. También cubrimos Latinoamérica." },
  { question: "¿Cómo garantiza AKOKY la discreción?", answer: "Con cifrado de nivel bancario, verificación manual de perfiles, modo incógnito, desenfoque de fotos y geolocalización aproximada. Tu identidad y datos están protegidos." },
  { question: "¿Puedo unirme siendo soltero/a?", answer: "Por supuesto. AKOKY da la bienvenida tanto a parejas como a solteros. Las mujeres solteras tienen acceso privilegiado a muchos clubes y eventos." },
];

const HomeEs = () => (
  <>
    <MetaTags
      title="AKOKY España | La Comunidad Libertina Premium de Europa"
      description="Únete a AKOKY, la mayor comunidad libertina de Europa. 1,5 millones de miembros, 120+ clubes verificados, 300 eventos al mes. Registro gratuito."
      canonical="https://akoky.com/es/"
      lang="es"
    />
    <HreflangTags slug="" />
    <ContentPageLayout
      lang="es"
      title="AKOKY España | La Comunidad Libertina Premium de Europa"
      description="Únete a AKOKY, la mayor comunidad libertina de Europa. 1,5 millones de miembros, 120+ clubes verificados, 300 eventos al mes. Registro gratuito."
      canonical="https://akoky.com/es/"
      heroTitle="La Mayor Comunidad Libertina de Europa"
      heroSubtitle="1,5 millones de miembros, clubes verificados y eventos exclusivos en España y Europa. Empieza gratis."
      breadcrumb={[{ label: "La Mayor Comunidad Libertina de Europa" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Qué es AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY es la plataforma comunitaria libertina premium más grande de Europa. Con más de 1,5 millones de miembros activos, un directorio de 120+ clubes verificados y más de 300 eventos organizados cada mes, AKOKY ofrece un ecosistema completo para parejas y solteros que desean explorar el estilo de vida libertino de forma segura, discreta y auténtica.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">A diferencia de las aplicaciones de citas convencionales, AKOKY es una red social completa: chat tipo WhatsApp con grupos, multiperfiles exclusivos, testimonios verificados, streaming en directo y un directorio de clubes con reseñas de la comunidad.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Por qué elegir AKOKY?</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Seguridad y Discreción</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Verificación de identidad, moderación humana 24h/7d y opciones avanzadas de privacidad: desenfoque de fotos, modo incógnito, geolocalización aproximada. Tu vida privada, protegida.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💎 Calidad Premium</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Aplicación móvil iOS y Android, funcionalidades avanzadas y acceso a eventos exclusivos. AKOKY SAFE, nuestro sistema de verificación, garantiza autenticidad en cada perfil.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🤝 Comunidad Respetuosa</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Código ético claro, consentimiento en el centro de cada intercambio y acompañamiento para los nuevos miembros. Una comunidad donde el respeto no es opcional.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🌍 Red Europea</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Presencia activa en Francia, España, Bélgica, Alemania, Italia y Portugal. Eventos y encuentros a escala europea para una experiencia sin fronteras.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Clubes Libertinos en España</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY referencia los mejores clubes libertinos verificados en España: Madrid, Barcelona, Valencia, Sevilla, Bilbao y más de 40 ciudades. Cada ficha incluye fotos, horarios, precios y valoraciones verificadas de la comunidad.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventos Libertinos Exclusivos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Más de 300 eventos cada mes en toda Europa: veladas privadas, fines de semana temáticos, encuentros íntimos. Encuentra el evento perfecto para ti cerca de donde vives.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Únete a AKOKY España</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">El registro es gratuito y no requiere tarjeta bancaria. Crea tu perfil, descubre la comunidad y explora a tu ritmo. AKOKY está disponible en español, francés, alemán, italiano y portugués.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default HomeEs;
