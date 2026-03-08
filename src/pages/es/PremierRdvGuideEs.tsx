import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const PremierRdvGuideEs = () => (
  <>
    <MetaTags title="Tu Primera Experiencia Libertina – Guía | AKOKY" description="Guía práctica para tu primera experiencia libertina: preparación, consejos y comunicación." canonical="https://akoky.com/es/primera-experiencia-libertina" lang="es" ogImage="/images/premier-rendez-vous-libertin-cover.webp" />
    <HreflangTags slug="primera-experiencia-libertina" />
    <ContentPageLayout lang="es" title="Tu Primera Experiencia Libertina" description="Guía práctica para tu primera experiencia." canonical="https://akoky.com/es/primera-experiencia-libertina" heroTitle="Tu Primera Experiencia Libertina" heroSubtitle="Guía práctica para preparar y vivir tu primera experiencia con confianza." heroImage="/images/es-primera-experiencia-cover.webp" breadcrumb={[{ label: "Primera Experiencia Libertina" }]} faq={[]}>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">📋 Antes del encuentro</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Si estás en pareja, esta conversación es <strong className="text-foreground">innegociable</strong>.</p>
          <ul className="mt-4 space-y-2">
            {["¿Cuáles son vuestras expectativas?", "¿Hasta dónde estáis dispuestos a llegar?", "¿Hay prácticas que queréis evitar?", "¿Cómo gestionaréis la incomodidad?", "¿Tenéis una palabra de seguridad?"].map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary">✅</span><span>{q}</span></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">📍 La elección del lugar</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Un bar o restaurante en un barrio animado es ideal para conocerse sin presión. Si va bien, podéis continuar en un <Link to="/es/clubes-libertinos" className="text-primary hover:underline">club libertino</Link> o una <Link to="/es/saunas-libertinos" className="text-primary hover:underline">sauna libertina</Link>.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">🤝 Durante el encuentro</h2>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Sé auténtico/a.</strong> La autenticidad es lo más atractivo. No intentes aparentar.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Escucha activamente.</strong> Presta atención a las señales verbales y no verbales.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Modera el alcohol.</strong> Un par de copas relajan, pero el exceso dificulta el consentimiento.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-5">💬 Después</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Hablar después es tan importante como la preparación. Compartid impresiones y sentimientos. Cada experiencia enseña algo.</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="/es/primer-club-libertino" className="px-6 py-3 rounded-full font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">Guía del primer club →</Link>
            <Link to="/es/preguntas-principiantes" className="px-6 py-3 rounded-full font-bold border border-primary/30 text-primary hover:bg-primary/5 transition-colors">FAQ principiantes</Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default PremierRdvGuideEs;
