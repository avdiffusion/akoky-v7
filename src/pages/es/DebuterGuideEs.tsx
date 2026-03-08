import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Por dónde empezar cuando eres principiante?", answer: "Empieza por informarte: lee guías, comprende las reglas del entorno y conversa con personas bienintencionadas. En AKOKY, puedes consultar opiniones, participar en eventos suaves o simplemente observar antes de lanzarte." },
  { question: "¿Cómo abordar el tema del libertinaje con tu pareja?", answer: "Elige un momento tranquilo, sin presión. Expresa tus deseos con honestidad y escucha los de tu pareja. El libertinaje se basa ante todo en la comunicación y el respeto mutuo." },
  { question: "¿Cuáles son las reglas fundamentales del entorno libertino?", answer: "El consentimiento explícito es la regla número uno. El respeto del « no », la higiene, la discreción y la comunicación son esenciales." },
  { question: "¿Es normal sentir celos al principio?", answer: "Sí, es frecuente al inicio. Lo importante es hablarlo abiertamente con tu pareja, definir límites claros y avanzar progresivamente." },
  { question: "¿Se puede descubrir el libertinaje sin ir a un club?", answer: "¡Por supuesto! Existen afterworks libertinos, eventos suaves, conversaciones online y lives que permiten descubrir el ambiente sin presión." },
];

const DebuterGuideEs = () => (
  <>
    <MetaTags title="Empezar en el Libertinaje 2026 – Guía Completa | AKOKY" description="Guía completa para empezar en el libertinaje: primeros pasos, consejos, definiciones y recursos. AKOKY acompaña a los principiantes." canonical="https://akoky.com/es/como-empezar-libertinaje" lang="es" ogImage="/images/debuter-libertinage-cover.webp" />
    <HreflangTags slug="como-empezar-libertinaje" />
    <ContentPageLayout lang="es" title="Empezar en el Libertinaje 2026 – Guía Completa" description="Guía completa para empezar en el libertinaje." canonical="https://akoky.com/es/como-empezar-libertinaje" heroTitle="Guía para Empezar en el Libertinaje" heroSubtitle="Todo lo que necesitas saber para iniciarte en el libertinaje con serenidad." heroImage="/images/debuter-libertinage-cover.webp" breadcrumb={[{ label: "Empezar en el Libertinaje" }]} faq={FAQ}>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Empezar en el libertinaje, a tu ritmo</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">El libertinaje no comienza en un club ni en un encuentro, sino por la comprensión, la reflexión y el respeto de tus propios límites.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Antes de cualquier experiencia, es esencial comprender las reglas, las prácticas y los códigos del <Link to="/es/libertinaje" className="text-primary hover:underline">libertinaje moderno</Link>.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Empezar con total serenidad</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">¿Te estás haciendo preguntas sobre el libertinaje? Es normal. Ya sea una primera vez, una simple curiosidad o un deseo que crece, todo empieza siempre por preguntas.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Aquí no se trata de moral ni de reglas prefabricadas. No estamos aquí para decirte qué hacer, sino para acompañarte y orientarte.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">El libertinaje comienza mucho antes de una velada o un club. Comienza por el diálogo, consigo mismo primero, y luego con tu pareja, si la hay.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">La comunicación como base de todo</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Si estás en pareja, la conversación previa es <strong className="text-foreground">indispensable</strong>. Habla de tus fantasías, de tus miedos, de lo que te atrae y de lo que no quieres hacer. Estableced juntos límites claros y una palabra de seguridad.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Recuerda: el consentimiento es la regla de oro. Un « no » siempre se respeta, sin insistencia ni juicio.</p>
        </div>
      </section>
      <section className="py-10 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5">Recursos para empezar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { to: "/es/guia-definitiva-libertinaje", label: "Guía Definitiva" },
              { to: "/es/preguntas-principiantes", label: "Preguntas Principiantes" },
              { to: "/es/primer-club-libertino", label: "Primer Club" },
              { to: "/es/primera-experiencia-libertina", label: "Primera Experiencia" },
              { to: "/es/clubes-libertinos", label: "Clubes en España" },
              { to: "/es/saunas-libertinos", label: "Saunas Libertinos" },
              { to: "/es/lexico", label: "Léxico Libertino" },
              { to: "/es/eventos", label: "Eventos" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors text-center">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default DebuterGuideEs;
