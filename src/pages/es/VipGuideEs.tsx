import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Qué es el estatus VIP Akoky?", answer: "Una suscripción premium con acceso a eventos privados, lives, perfiles múltiples certificados, visibilidad reforzada y soporte prioritario." },
  { question: "¿Puedo gestionar varios perfiles?", answer: "Sí. Un perfil pareja, mujer sola y hombre solo bajo una sola suscripción." },
  { question: "¿Puedo cancelar en cualquier momento?", answer: "Sí, sin costes de cancelación desde tu espacio personal." },
];

const VipGuideEs = () => (
  <>
    <MetaTags title="Estatus VIP Akoky 2026 – Ventajas Premium | AKOKY" description="Descubre el estatus VIP Akoky: funcionalidades exclusivas y acceso prioritario." canonical="https://akoky.com/es/vip-premium" lang="es" ogImage="/images/es-vip-cover.webp" />
    <HreflangTags slug="vip-premium" />
    <ContentPageLayout lang="es" title="Estatus VIP Akoky 2026" description="Ventajas premium y acceso prioritario." canonical="https://akoky.com/es/vip-premium" heroTitle="Estatus VIP Akoky" heroSubtitle="Accede a las funcionalidades premium y únete a la élite de la comunidad libertina." heroImage="/images/es-vip-cover.webp" breadcrumb={[{ label: "Estatus VIP" }]} faq={FAQ}>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">¿Por qué elegir la suscripción VIP?</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">La calidad de la experiencia depende directamente de la selectividad de la comunidad. Una suscripción premium como la de Akoky es una garantía de seguridad, autenticidad y exclusividad.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">El estatus VIP te ofrece acceso privilegiado a un círculo privado de miembros verificados. A diferencia de las plataformas abiertas, Akoky funciona como un club privado online.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Perfiles múltiples: una cuenta, varias identidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { title: "Una sola cuenta", desc: "Gestiona todas tus identidades con una única suscripción VIP." },
              { title: "Cambio en un clic", desc: "Cambia de perfil instantáneamente según tus deseos." },
              { title: "Cada perfil es único", desc: "Galería, mensajería y configuración separadas y seguras." },
            ].map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Ventajas exclusivas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🎭", title: "Eventos privados", desc: "Acceso exclusivo a veladas VIP en clubes asociados de toda España" },
              { icon: "📺", title: "Lives en directo", desc: "Contenido premium en streaming reservado a miembros VIP" },
              { icon: "🔒", title: "AKOKY Safe", desc: "Protocolo de seguridad avanzado para proteger tus datos" },
              { icon: "⭐", title: "Visibilidad reforzada", desc: "Tu perfil aparece en las primeras posiciones de búsqueda" },
              { icon: "💬", title: "Soporte prioritario", desc: "Equipo dedicado con respuesta en menos de 2h" },
              { icon: "🏢", title: "Descuentos en clubes", desc: "Tarifas reducidas en establecimientos asociados" },
            ].map((v, i) => (
              <div key={i} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                <span className="text-2xl">{v.icon}</span>
                <div><h3 className="font-semibold text-foreground">{v.title}</h3><p className="text-muted-foreground text-sm">{v.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://app.akoky.com/register" className="px-8 py-3 rounded-full font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">Activar mi VIP →</a>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5">Explorar más</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { to: "/es/clubes-libertinos", label: "Clubes" },
              { to: "/es/saunas-libertinos", label: "Saunas" },
              { to: "/es/eventos", label: "Eventos" },
              { to: "/es/live", label: "Lives" },
              { to: "/es/app", label: "App AKOKY" },
              { to: "/es/parrainage", label: "Afiliación" },
              { to: "/es/empezar-libertinaje", label: "Empezar" },
              { to: "/es/libertinaje", label: "El Libertinaje" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors text-center">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VipGuideEs;
