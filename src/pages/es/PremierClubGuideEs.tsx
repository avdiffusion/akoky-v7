import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Es obligatorio participar en la primera visita?", answer: "No. Observar forma parte de la experiencia. Nadie te juzgará." },
  { question: "¿Cómo elegir tu primer club?", answer: "Infórmate sobre opiniones, dress code y tarifas. Consulta el directorio AKOKY." },
  { question: "¿Se puede ir solo/a?", answer: "Depende del club. Verifica la política de admisión." },
  { question: "¿Qué hacer si no te sientes cómodo/a?", answer: "Puedes irte en cualquier momento, sin justificación." },
];

const PremierClubGuideEs = () => (
  <>
    <MetaTags title="Tu Primer Club Libertino 2026 – Guía Completa | AKOKY" description="Guía completa para tu primer club libertino en España." canonical="https://akoky.com/es/primer-club-libertino" lang="es" ogImage="/images/premier-club-cover.webp" />
    <HreflangTags slug="primer-club-libertino" />
    <ContentPageLayout lang="es" title="Tu Primer Club Libertino 2026" description="Guía completa para tu primer club libertino." canonical="https://akoky.com/es/primer-club-libertino" heroTitle="Tu Primer Club Libertino" heroSubtitle="Todo lo que necesitas saber para vivir esta primera experiencia con confianza" heroImage="/images/premier-club-cover.webp" breadcrumb={[{ label: "Primer Club Libertino" }]} faq={FAQ}>
      <section className="py-8 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <Link to="/es/primer-club-libertino" className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary">1. Tu primer club</Link>
            <Link to="/es/primera-experiencia-libertina" className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">2. Tu primera experiencia</Link>
            <Link to="/es/preguntas-principiantes" className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">3. FAQ principiantes</Link>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Antes de ir: la preparación</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Si estás en pareja, la conversación previa es <strong className="text-foreground">indispensable</strong>. Estableced vuestros límites, definid una palabra de seguridad y hablad de vuestras expectativas.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">El dress code:</strong> vestimenta elegante y sexy. Mujeres: vestido de cóctel, lencería, tacones. Hombres: camisa, pantalón de vestir, zapatos cerrados.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Higiene impecable:</strong> ducha previa, perfume discreto, uñas cuidadas.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Las reglas de oro</h2>
          <ul className="space-y-3 text-muted-foreground">
            {["Llegad temprano para familiarizaros con el espacio", "Explorad juntos las diferentes salas", "Observad sin presión: la primera vez, observar es válido", "Respetad el consentimiento: un « no » siempre se respeta", "Comunicad con vuestra pareja durante toda la velada", "Disfrutad: el libertinaje es placer, complicidad y descubrimiento"].map((r, i) => (
              <li key={i} className="flex items-start gap-3"><span className="text-primary font-bold">{i + 1}.</span><span>{r}</span></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Después: el debriefing</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Hablar después es fundamental. Compartid lo que os gustó, lo que no, cómo os sentís. Este diálogo refuerza la confianza.</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="/es/clubes-libertinos" className="px-6 py-3 rounded-full font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">Ver clubes en España →</Link>
            <Link to="/es/como-empezar-libertinaje" className="px-6 py-3 rounded-full font-bold border border-primary/30 text-primary hover:bg-primary/5 transition-colors">Guía para empezar</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default PremierClubGuideEs;
