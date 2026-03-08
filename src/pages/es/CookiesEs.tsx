import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";


const CookiesEs = () => (
  <>
    <HreflangTags slug="cookies" />
    <ContentPageLayout
      lang="es"
      title="Política de Cookies | AKOKY España"
      description="Política de cookies de AKOKY: tipos de cookies utilizadas, finalidades y cómo gestionarlas. Cumplimiento RGPD."
      canonical="https://akoky.com/es/cookies"
      heroTitle="Política de Cookies"
      heroSubtitle="Transparencia total sobre el uso de cookies en AKOKY."
      breadcrumb={[{ label: "Política de Cookies" }]}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Qué son las Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde tus preferencias, mejore tu experiencia de navegación y proporcione funcionalidades personalizadas.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cookies que Utilizamos</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cookies Esenciales</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Son necesarias para el funcionamiento básico del sitio: autenticación, seguridad de la sesión y funcionamiento de las funcionalidades principales. No pueden desactivarse sin afectar al funcionamiento del sitio.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cookies de Rendimiento</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Nos permiten analizar el uso del sitio para mejorarlo: páginas más visitadas, tiempo de carga, errores encontrados. Toda la información recogida es anónima y agregada.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cookies de Personalización</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Permiten recordar tus preferencias: idioma, configuración de visualización, filtros de búsqueda. Mejoran tu experiencia en cada visita.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Gestionar tus Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Puedes gestionar tus preferencias de cookies en cualquier momento a través de nuestro panel de gestión de cookies, accesible desde el pie de página del sitio. También puedes configurar tu navegador para rechazar todas las cookies, aunque esto podría afectar al funcionamiento de algunas funcionalidades.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cumplimiento RGPD</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY cumple estrictamente con el Reglamento General de Protección de Datos (RGPD) y con la normativa española de protección de datos. Toda la información recogida a través de cookies se trata de acuerdo con nuestra política de privacidad.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Contacto</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Para cualquier pregunta sobre nuestra política de cookies o el tratamiento de tus datos personales, contacta con nuestro DPO (Delegado de Protección de Datos) en dpo@akoky.com.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default CookiesEs;
