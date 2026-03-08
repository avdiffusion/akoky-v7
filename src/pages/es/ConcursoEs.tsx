import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";
import MetaTags from "@/components/seo/MetaTags";

const FAQ = [
  { question: "¿Cómo participar en los concursos Akoky?", answer: "Para participar, debes ser miembro registrado en Akoky. Cada concurso tiene sus propias reglas de participación detalladas en su página dedicada. La mayoría son gratuitos y abiertos a todos los miembros activos." },
  { question: "¿Los concursos de Akoky son realmente gratuitos?", answer: "Sí, todos los concursos organizados por Akoky son 100% gratuitos. No se requiere ninguna compra ni pago para participar." },
  { question: "¿Puedo usar mi programa de recomendación para los concursos?", answer: "Algunos concursos incluyen bonificaciones ligadas al programa de recomendación Akoky: participaciones múltiples, puntos bonus, acceso prioritario. Consulta el reglamento de cada concurso." },
  { question: "¿Cuáles son los premios a ganar?", answer: "Los premios varían: estancias en clubes libertinos premium, suscripciones VIP Akoky, invitaciones a eventos privados, packs regalo y experiencias únicas en España y Europa." },
  { question: "¿Cómo se designan los ganadores?", answer: "Según las modalidades de cada concurso: sorteo, rendimiento (el primero en completar una tarea), voto de la comunidad o jurado Akoky." },
  { question: "¿Puedo participar en varios concursos simultáneamente?", answer: "Sí, puedes participar en tantos concursos Akoky como desees." },
  { question: "¿Mis datos personales están protegidos?", answer: "Sí. Akoky cumple estrictamente con el RGPD y nunca comparte tus datos con terceros." },
];

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://akoky.com/es" },
    { "@type": "ListItem", "position": 2, "name": "Concursos", "item": "https://akoky.com/es/concurso" },
  ],
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Concursos AKOKY – Gana Experiencias Libertinas Exclusivas",
  "description": "Participa gratuitamente en los concursos Akoky y gana estancias en los mejores clubes libertinos de Europa, suscripciones VIP y experiencias únicas.",
  "url": "https://akoky.com/es/concurso",
  "inLanguage": "es",
  "isPartOf": { "@type": "WebSite", "name": "AKOKY", "url": "https://akoky.com" },
};

const ConcursoEs = () => (
  <>
    <Helmet>
      <html lang="es" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="AKOKY" />
      <meta name="twitter:site" content="@akoky_official" />
    </Helmet>
    <HreflangTags slug="concurso" />

    <ContentPageLayout
      lang="es"
      title="Concursos AKOKY – Gana Experiencias Libertinas Exclusivas"
      description="Participa gratuitamente en los concursos Akoky y gana estancias en los mejores clubes libertinos de España y Europa, suscripciones VIP y experiencias únicas."
      canonical="https://akoky.com/es/concurso"
      heroTitle="Concursos AKOKY"
      heroSubtitle="Participa gratuitamente y gana estancias, suscripciones VIP y experiencias libertinas exclusivas en España y toda Europa."
      heroImage="/images/concours/six-cles.webp"
      breadcrumb={[{ label: "Concursos" }]}
      faq={FAQ}
      schema={[PAGE_SCHEMA, BREADCRUMB_SCHEMA]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto space-y-20">

          {/* ─── PRÓXIMOS CONCURSOS ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🔥</span>
              <h2 className="text-3xl font-black text-foreground font-display">Concursos actuales</h2>
            </div>

            <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 text-center">
              <span className="text-6xl block mb-6">🏆</span>
              <h3 className="text-2xl font-bold text-foreground mb-4">¡Muy pronto concursos exclusivos para España!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                El equipo AKOKY está preparando concursos excepcionales para la comunidad libertina española. Estancias en los mejores clubes de <strong className="text-foreground">Madrid</strong>, <strong className="text-foreground">Barcelona</strong>, <strong className="text-foreground">Ibiza</strong> y más ciudades españolas, suscripciones VIP y experiencias únicas — ¡estad atentos!
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Mientras tanto, crea tu cuenta gratuita para ser el primero en participar cuando se lancen.
              </p>
              <a href="https://app.akoky.com/register" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
                Crear mi cuenta gratis
              </a>
            </div>
          </div>

          {/* ─── PROGRAMA DE RECOMENDACIÓN ─── */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">👑</span>
                  <span className="text-primary text-sm font-bold uppercase tracking-wide">Programa de Recomendación</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 font-display">
                  Invita. Gana. Disfruta.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Invita a <strong className="text-foreground">10 miembros</strong> a Akoky y recibe <strong className="text-primary">6 meses de suscripción VIP+</strong> de regalo. Acceso al live streaming, mensajería prioritaria, insignia VIP+ y acceso a eventos exclusivos.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["✓ Sin compromiso", "✓ Sin suscripción requerida", "✓ Recompensa automática"].map((t, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-3 bg-card border border-primary/30 rounded-full px-6 py-3 mb-6">
                  <span className="text-lg font-black text-primary">10 Recomendaciones = 6 MESES VIP+</span>
                </div>
                <div className="block">
                  <Link to="/es/parrainage" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">
                    Descubrir el programa →
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: "📢", label: "Habla de Akoky" },
                  { icon: "📝", label: "Se inscriben" },
                  { icon: "🎁", label: "Tú ganas" },
                ].map((s, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4 w-24">
                    <span className="text-2xl block mb-1">{s.icon}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── PRÓXIMOS CONCURSOS (TEASERS) ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">⏳</span>
              <h2 className="text-3xl font-black text-foreground font-display">Próximos concursos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📸", title: "Concurso Foto de Pareja", date: "finales 2026 – inicio 2027", lot: "Fin de semana en un club premium", desc: "Comparte tu mejor foto de pareja libertina y gana un fin de semana premium exclusivo." },
                { icon: "✍️", title: "Mejor Testimonio Libertino", date: "2027", lot: "3 suscripciones Premium 1 año", desc: "Cuenta tu experiencia libertina más memorable y gana." },
                { icon: "🌴", title: "Challenge Recomendación Verano", date: "Verano 2027", lot: "5 estancias en clubes europeos", desc: "¡Los mejores embajadores ganan un fin de semana de ensueño!" },
              ].map((c, i) => (
                <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border opacity-60">
                  <p className="text-muted-foreground/60 text-xs mb-2">{c.date}</p>
                  <span className="text-3xl block mb-3">{c.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{c.desc}</p>
                  <p className="text-muted-foreground text-sm"><strong>Premio:</strong> {c.lot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CONCURSOS PASADOS ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">✅</span>
              <h2 className="text-3xl font-black text-foreground font-display">Concursos pasados</h2>
            </div>
            <div className="bg-card/50 border border-border rounded-2xl p-8 text-center">
              <p className="text-muted-foreground">Todavía no hay concursos finalizados para España. ¡Los primeros concursos AKOKY están en preparación!</p>
            </div>
          </div>

          {/* ─── SEO TEXT ─── */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">Concursos AKOKY España – Gana experiencias libertinas únicas</h2>
            <p>
              AKOKY organiza regularmente <strong className="text-foreground">concursos gratuitos</strong> exclusivos para su comunidad libertina en España y toda Europa. Con más de <Link to="/es" className="text-primary hover:underline">1,5 millones de miembros activos</Link>, la plataforma ofrece premios excepcionales: estancias en los <Link to="/es/clubes-libertinos" className="text-primary hover:underline">mejores clubes libertinos</Link> de Madrid, Barcelona, Ibiza y otras ciudades, <Link to="/es/vip" className="text-primary hover:underline">suscripciones VIP premium</Link>, invitaciones a <Link to="/es/eventos" className="text-primary hover:underline">eventos privados exclusivos</Link> y experiencias inolvidables.
            </p>
            <p>
              A diferencia de <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong> o <strong className="text-foreground">Libertic</strong>, AKOKY apuesta por la calidad y la transparencia de sus concursos. Cada concurso dispone de un reglamento oficial, premios verificados y un proceso de selección justo. No se requiere ninguna compra ni suscripción para participar — basta con crear una <Link to="/es/akoky" className="text-primary hover:underline">cuenta gratuita en AKOKY</Link>.
            </p>
            <p>
              Los concursos AKOKY cubren todos los aspectos de la experiencia libertina: descubrimiento de <Link to="/es/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link>, descubrimiento de <Link to="/es/clubbing" className="text-primary hover:underline">clubes asociados</Link>, uso de nuestra <Link to="/es/app" className="text-primary hover:underline">aplicación móvil</Link>, participación en <Link to="/es/live" className="text-primary hover:underline">lives exclusivos</Link> y compromiso con la comunidad. Los miembros más activos y los mejores embajadores del <Link to="/es/parrainage" className="text-primary hover:underline">programa de recomendación</Link> obtienen acceso prioritario a los próximos concursos.
            </p>
            <p>
              ¿Eres nuevo en el <Link to="/es/libertinaje" className="text-primary hover:underline">libertinaje</Link>? Consulta nuestro <Link to="/es/lexico" className="text-primary hover:underline">léxico libertino</Link> y nuestra guía para <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">empezar con buen pie</Link>. Lee las <Link to="/es/avis" className="text-primary hover:underline">opiniones verificadas de nuestros miembros</Link> (nota media 4,7/5) y únete a la comunidad libertina más activa de Europa.
            </p>
          </div>

          <div className="text-center">
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Crear mi cuenta gratis</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ConcursoEs;
