import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿El libertinaje es lo mismo que el intercambio de parejas?", answer: "El intercambio de parejas es una práctica específica. El libertinaje abarca mucho más: tríos, mélangisme, candaulismo, voyeurismo, exhibicionismo." },
  { question: "¿Se puede practicar siendo soltero/a?", answer: "¡Por supuesto! Los clubes acogen a mujeres solas y algunos aceptan hombres solos según cuotas." },
  { question: "¿Cómo garantizar el consentimiento?", answer: "El consentimiento debe ser explícito, entusiasta y revocable en cualquier momento." },
  { question: "¿Puede reforzar una pareja?", answer: "Para muchas parejas, esta exploración refuerza la complicidad y la comunicación, pero requiere una relación sólida." },
  { question: "¿Cuál es la diferencia entre AKOKY y otras plataformas?", answer: "AKOKY ofrece un ecosistema completo: red social, directorio verificado, eventos, lives y app móvil." },
];

const LibertinageGuideEs = () => (
  <>
    <MetaTags title="El Libertinaje Moderno: Guía Completa 2026 | AKOKY" description="¿Qué es el libertinaje? Guía completa sobre las prácticas, valores y formas del libertinaje moderno." canonical="https://akoky.com/es/libertinaje-guia" lang="es" ogImage="/images/libertinage-cover.webp" />
    <HreflangTags slug="libertinaje-guia" />
    <ContentPageLayout lang="es" title="El Libertinaje Moderno: Guía Completa 2026" description="Guía completa sobre el libertinaje moderno." canonical="https://akoky.com/es/libertinaje-guia" heroTitle="El Libertinaje Moderno: Definición, Prácticas y Ética" heroSubtitle="Todo sobre el libertinaje hoy: definiciones, prácticas, consentimiento y vida en pareja." heroImage="/images/libertinage-cover.webp" breadcrumb={[{ label: "El Libertinaje" }]} faq={FAQ}>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">¿Qué es el libertinaje hoy en día?</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Este modo de vida está a menudo rodeado de fantasías e ideas preconcebidas. Lejos de los clichés, este enfoque moderno es ante todo una decisión libre, consentida y asumida, basada en el diálogo, el respeto mutuo y la confianza.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Históricamente, el término «libertino» designaba a una persona emancipada de las reglas morales de su época. Hoy designa una práctica sexual y relacional que consiste en explorar la sexualidad fuera del marco de la pareja monógama tradicional.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Lo que caracteriza este universo moderno es su diversidad. No existe una única manera de explorar estas prácticas.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Las diferentes formas de prácticas</h2>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Mélangisme:</strong> experiencias que excluyen la penetración con otros compañeros. Caricias, juegos sensuales y complicidad.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Intercambio de parejas:</strong> dos parejas intercambian sus compañeros para momentos íntimos, con acuerdo mutuo.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Candaulismo:</strong> placer al ver a tu pareja con otras personas, permaneciendo como espectador/a.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Tríos:</strong> experiencia sexual que involucra a tres personas, como fantasía compartida o práctica regular.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">Consentimiento y pareja</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">El consentimiento es la piedra angular de toda exploración. Debe ser libre, informado y entusiasta. Es un proceso dinámico, que puede ser revocado en cualquier momento.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Para una pareja, embarcarse en estas prácticas requiere una relación sólida basada en la confianza y la honestidad.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">El libertinaje en la era digital</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Internet ha transformado el libertinaje. Plataformas como AKOKY permiten descubrir este universo desde casa, intercambiar con miembros experimentados y encontrar <Link to="/es/eventos" className="text-primary hover:underline">eventos</Link> adaptados.</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="/es/empezar-libertinaje" className="px-6 py-3 rounded-full font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">Cómo empezar →</Link>
            <Link to="/es/clubes-libertinos" className="px-6 py-3 rounded-full font-bold border border-primary/30 text-primary hover:bg-primary/5 transition-colors">Clubes en España</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LibertinageGuideEs;
