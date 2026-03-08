import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Se puede empezar solo/a?", answer: "¡Sí! Las parejas son mayoría, pero los solteros también tienen su lugar." },
  { question: "Mi pareja duda. ¿Debo forzar?", answer: "Jamás. Solo funciona si ambos están motivados." },
  { question: "¿Se puede solo charlar?", answer: "¡Por supuesto! Muchos principiantes pasan sus primeras veladas conversando." },
  { question: "¿Cómo definir mis límites?", answer: "Lista tus límites absolutos (hard limits) y zonas de curiosidad (soft limits)." },
  { question: "¿Se puede cambiar de opinión?", answer: "Sí, en cualquier momento. El consentimiento no es un contrato." },
  { question: "¿Es normal tener muchos límites?", answer: "Sí, ¡incluso recomendable! Mejor empezar con muchos e ir flexibilizando." },
  { question: "¿Cómo saber si un club es serio?", answer: "Comprueba limpieza, personal profesional y reglas de consentimiento. Consulta AKOKY." },
  { question: "¿Es normal sentirse raro/a después?", answer: "Sí. Se llama « drop libertino ». Habla de ello con tu pareja." },
  { question: "¿Cuánto cuesta una velada?", answer: "Entre 30€ y 80€ por pareja. Mujeres solas: a menudo gratis." },
  { question: "¿Hay veladas para principiantes?", answer: "Sí. Muchos clubes organizan « noches descubrimiento »." },
  { question: "¿Es legal en España?", answer: "Sí. Perfectamente legal entre adultos consentidores." },
  { question: "¿Se puede cambiar de opinión una vez allí?", answer: "Tu derecho absoluto en cualquier momento." },
];

const QuestionsGuideEs = () => (
  <>
    <MetaTags title="Preguntas de Principiantes sobre el Libertinaje | AKOKY" description="Las preguntas más frecuentes de principiantes, con respuestas completas y benevolentes." canonical="https://akoky.com/es/preguntas-principiantes" lang="es" ogImage="/images/questions-debutants-cover.webp" />
    <HreflangTags slug="preguntas-principiantes" />
    <ContentPageLayout lang="es" title="Preguntas Frecuentes de Principiantes" description="Las preguntas más frecuentes sobre el libertinaje." canonical="https://akoky.com/es/preguntas-principiantes" heroTitle="Preguntas de Principiantes" heroSubtitle="Todas las respuestas a tus dudas, explicadas sin juicio." <ContentPageLayout lang="es" title="Preguntas Frecuentes de Principiantes" description="Las preguntas más frecuentes sobre el libertinaje." canonical="https://akoky.com/es/preguntas-principiantes" heroTitle="Preguntas de Principiantes" heroSubtitle="Todas las respuestas a tus dudas, explicadas sin juicio." heroImage="/images/es-preguntas-cover.webp" breadcrumb={[{ label: "Preguntas Principiantes" }]} faq={FAQ}>
      <section className="py-8 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <Link to="/es/primer-club-libertino" className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">1. Tu primer club</Link>
            <Link to="/es/primera-experiencia-libertina" className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">2. Tu primera experiencia</Link>
            <Link to="/es/preguntas-principiantes" className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary">3. FAQ principiantes</Link>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Todo lo que siempre quisiste preguntar</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">En el <Link to="/es/libertinaje" className="text-primary hover:underline">libertinaje</Link>, no hay preguntas tontas. Aquí respondemos con honestidad y benevolencia.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Si no encuentras tu respuesta, explora nuestros <Link to="/es/como-empezar-libertinaje" className="text-primary hover:underline">recursos para principiantes</Link>.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Recursos complementarios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { to: "/es/como-empezar-libertinaje", label: "Cómo empezar" },
              { to: "/es/primer-club-libertino", label: "Tu primer club" },
              { to: "/es/clubes-libertinos", label: "Clubes en España" },
              { to: "/es/saunas-libertinos", label: "Saunas" },
              { to: "/es/lexico", label: "Léxico libertino" },
              { to: "/es/eventos", label: "Eventos" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="px-4 py-3 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors text-center">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default QuestionsGuideEs;
