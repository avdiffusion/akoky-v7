import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "¿Cuáles son las ventajas del estatus VIP AKOKY?", answer: "Acceso a eventos exclusivos, multiperfiles certificados, álbumes privados, lives VIP, mensajería prioritaria y badge de confianza visible por la comunidad." },
  { question: "¿Qué es la funcionalidad multiperfil?", answer: "La funcionalidad exclusiva AKOKY que te permite crear varios perfiles (pareja, solo hombre, sola mujer) en una sola cuenta, con cambio en un solo clic." },
  { question: "¿Cómo obtener la certificación VIP?", answer: "La certificación se otorga tras la verificación de identidad. Garantiza a la comunidad que eres realmente la persona indicada en tu perfil." },
  { question: "¿Cuánto cuesta la suscripción VIP?", answer: "Los precios están disponibles en la página de suscripción de AKOKY. Hay varios planes: mensual, trimestral y anual con descuento." },
];

const VipEs = () => (
  <>
    <MetaTags
      title="AKOKY VIP | Suscripción Premium — Acceso Exclusivo Comunidad Libertina"
      description="Descubre la suscripción VIP AKOKY: acceso exclusivo a eventos libertinos privados, multiperfiles certificados y comunidad premium segura."
      canonical="https://akoky.com/es/vip"
      lang="es"
    />
    <HreflangTags slug="vip" />
    <ContentPageLayout
      lang="es"
      title="AKOKY VIP | Suscripción Premium — Acceso Exclusivo Comunidad Libertina"
      description="Descubre la suscripción VIP AKOKY: acceso exclusivo a eventos libertinos privados, multiperfiles certificados y comunidad premium segura."
      canonical="https://akoky.com/es/vip"
      heroTitle="Estatus VIP AKOKY"
      heroSubtitle="Accede a privilegios exclusivos y vive la experiencia libertina en su nivel más alto."
      heroImage="/images/es-vip-cover.webp"
      breadcrumb={[{ label: "Estatus VIP AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Por Qué Hacerse VIP en AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">El estatus VIP AKOKY es mucho más que una suscripción: es tu pasaporte a una experiencia libertina de nivel superior. Más funcionalidades, más exclusividad, más confianza de la comunidad.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Multiperfiles: Una Sola Cuenta, Varias Identidades</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Una Sola Cuenta</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Con el estatus VIP, puedes crear hasta tres perfiles diferentes (pareja, solo hombre, sola mujer) bajo una única cuenta. Cada perfil tiene su propia galería, descripción y configuración de privacidad.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cambio en un Solo Clic</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Cambia de perfil instantáneamente según el contexto: usa tu perfil de pareja para los eventos en club, tu perfil individual para los apéros, sin necesidad de cerrar sesión ni gestionar múltiples cuentas.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Certificación Obligatoria</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos los perfiles VIP están certificados mediante verificación de identidad. El badge de confianza es visible por toda la comunidad, aumentando significativamente tu credibilidad y las posibilidades de encuentro.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Ventajas Exclusivas VIP</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Eventos Exclusivos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Los miembros VIP tienen acceso prioritario y en exclusiva a los eventos más selectos de AKOKY: veladas privadas en villas, fines de semana de lujo, encuentros íntimos con selección de invitados.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Álbumes Privados</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Crea álbumes de fotos privados con control total de acceso: decide quién puede ver tus fotos y durante cuánto tiempo. Comparte de forma segura y selectiva.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lives Exclusivos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Accede a los lives más exclusivos de la plataforma: veladas en clubes de lujo, contenidos VIP y emisiones privadas reservadas a la comunidad premium.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mensajería Prioritaria</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Tus mensajes llegan destacados en las bandejas de entrada. Más respuestas, más conexiones, más encuentros reales.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Cómo Suscribirse?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">La suscripción VIP se activa directamente desde tu cuenta AKOKY. Varios planes están disponibles: mensual, trimestral y anual. El pago es seguro y discreto en tu extracto bancario.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VipEs;
