import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cómo contactar al soporte?", answer: "Por email a support@akoky.com o desde tu espacio de miembro. Respuesta en menos de 24h." },
  { question: "¿Soporte en varios idiomas?", answer: "Sí: español, francés, alemán, italiano y portugués." },
  { question: "¿Cómo reportar un perfil?", answer: "Usa el botón « Reportar » en cada perfil. Tratamiento en menos de 2h." },
];

const ContactGuideEs = () => (
  <>
    <MetaTags title="Contacto AKOKY | Soporte y Asistencia" description="Contacta con Akoky: soporte, colaboraciones, prensa y afiliación." canonical="https://akoky.com/es/contacto-akoky" lang="es" />
    <HreflangTags slug="contacto-akoky" />
    <ContentPageLayout lang="es" title="Contacto AKOKY" description="Soporte y asistencia AKOKY." canonical="https://akoky.com/es/contacto-akoky" heroTitle="Contacto" heroSubtitle="¿Una pregunta? Nuestro equipo está a tu disposición" heroImage="/images/es-contacto-cover.webp" breadcrumb={[{ label: "Contacto" }]} faq={FAQ}>
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Contactar con Akoky</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">El equipo de Akoky está a tu disposición. Ya seas miembro buscando soporte técnico, periodista, club libertino interesado en una colaboración o profesional del sector, estamos aquí para acompañarte.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📧", title: "Email", info: "contact@akoky.com", sub: "Respuesta en 24-72h" },
              { icon: "📞", title: "Teléfono", info: "00 00 00 00 00", sub: "Lun-Vie 9h-18h" },
              { icon: "📍", title: "Dirección", info: "París, Francia", sub: "Sede social" },
              { icon: "🕐", title: "Horarios", info: "9h00 - 18h00", sub: "De lunes a viernes" },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border text-center">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="font-bold text-foreground text-sm mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm font-medium">{c.info}</p>
                <p className="text-muted-foreground/60 text-xs mt-1">{c.sub}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">Departamentos</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "🛡️", title: "Soporte Miembros", email: "support@akoky.com", desc: "Asistencia técnica, gestión de cuenta" },
                { icon: "🤝", title: "Colaboraciones", email: "partenariats@akoky.com", desc: "Afiliación, colaboraciones con clubes" },
                { icon: "📰", title: "Prensa", email: "presse@akoky.com", desc: "Solicitudes de prensa, entrevistas" },
                { icon: "💼", title: "Comercial", email: "commercial@akoky.com", desc: "Publicidad, patrocinios" },
              ].map((d, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded-2xl">
                  <div className="flex items-center gap-3 mb-3"><span className="text-2xl">{d.icon}</span><h3 className="font-bold text-foreground">{d.title}</h3></div>
                  <p className="text-muted-foreground text-sm mb-2">{d.desc}</p>
                  <a href={`mailto:${d.email}`} className="text-primary text-sm font-medium hover:underline">{d.email}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Explora AKOKY</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { to: "/es/clubes-libertinos", label: "Clubes" },
                { to: "/es/eventos", label: "Eventos" },
                { to: "/es/saunas-libertinos", label: "Saunas" },
                { to: "/es/app", label: "App" },
                { to: "/es/vip", label: "VIP" },
                { to: "/es/sala-de-prensa", label: "Prensa" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ContactGuideEs;
