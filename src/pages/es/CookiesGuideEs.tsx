import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const CookiesGuideEs = () => (
  <>
    <MetaTags title="Política de Cookies AKOKY | Gestión y Privacidad" description="Política de cookies AKOKY: cookies esenciales, analíticos, de marketing. Tus opciones, tus datos, tu privacidad." canonical="https://akoky.com/es/politica-cookies" lang="es" />
    <HreflangTags slug="politica-cookies" />
    <ContentPageLayout lang="es" title="Política de Cookies AKOKY | Gestión y Privacidad" description="Política de cookies AKOKY: esenciales, analíticos, de marketing. Tus opciones." canonical="https://akoky.com/es/politica-cookies" heroTitle="Política de Cookies" heroSubtitle="Transparencia total sobre el uso de cookies en AKOKY" heroImage="/images/logo-akoky.webp" breadcrumb={[{ label: "Política de Cookies" }]}>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">

          {/* ¿Qué es una cookie? */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">🍪 ¿Qué es una cookie?</h2>
            <p className="text-muted-foreground leading-relaxed">Una cookie es un pequeño archivo de texto almacenado en tu dispositivo (ordenador, smartphone, tablet) cuando visitas un sitio web. Las cookies permiten al sitio recordar tus acciones y preferencias (como el idioma, la conexión u otros parámetros) durante un período determinado, para que no tengas que volver a introducirlos en tus próximas visitas.</p>
          </div>

          {/* Tipos de cookies */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">📋 Tipos de cookies utilizados en AKOKY</h2>
            <div className="space-y-8">

              <div className="p-6 bg-card/50 rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">🔒 Cookies esenciales (obligatorias)</h3>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">Siempre activas</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">Estas cookies son necesarias para el funcionamiento del sitio y no pueden desactivarse. Se establecen generalmente en respuesta a acciones que tú realizas, como configurar tus preferencias de privacidad, iniciar sesión o rellenar formularios.</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li><strong>akoky_session</strong> – Mantiene tu sesión activa</li>
                  <li><strong>akoky_cookie_consent</strong> – Almacena tus preferencias de cookies</li>
                  <li><strong>akoky_csrf</strong> – Protección contra ataques CSRF</li>
                </ul>
              </div>

              <div className="p-6 bg-card/50 rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">📊 Cookies analíticos</h3>
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-bold">Opcional</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">Estas cookies nos permiten contar las visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares.</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li><strong>_ga</strong> – Google Analytics (2 años)</li>
                  <li><strong>_gid</strong> – Google Analytics (24 horas)</li>
                  <li><strong>akoky_analytics</strong> – Analytics AKOKY (1 año)</li>
                </ul>
              </div>

              <div className="p-6 bg-card/50 rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">🎯 Cookies de marketing</h3>
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-bold">Opcional</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">Estas cookies pueden ser establecidas por nuestros socios publicitarios a través de nuestro sitio. Pueden utilizarse para crear un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios.</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li><strong>_fbp</strong> – Facebook Pixel (3 meses)</li>
                  <li><strong>akoky_ads</strong> – Publicidad AKOKY (6 meses)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gestión de preferencias */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">⚙️ Gestión de tus preferencias</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Puedes modificar tus preferencias de cookies en cualquier momento haciendo clic en el botón de abajo. También puedes configurar tu navegador para bloquear o eliminar las cookies.</p>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold hover:scale-105 transition-all">Gestionar mis preferencias de cookies</button>
          </div>

          {/* Configuración por navegador */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">🌐 Configuración por navegador</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                { name: "Mozilla Firefox", url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" },
                { name: "Safari", url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
                { name: "Microsoft Edge", url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
              ].map((browser, i) => (
                <a key={i} href={browser.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors text-center">
                  <span className="font-medium text-foreground">{browser.name}</span>
                  <p className="text-xs text-muted-foreground mt-1">Configurar cookies →</p>
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">📧 Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">Para cualquier pregunta sobre nuestra política de cookies, puedes contactarnos en <a href="mailto:contact@akoky.com" className="text-primary hover:underline">contact@akoky.com</a>.</p>
            <p className="text-muted-foreground text-sm mt-4">Última actualización: Marzo 2026</p>
          </div>

        </div>
      </section>

    </ContentPageLayout>
  </>
);
export default CookiesGuideEs;
