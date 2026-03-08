import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import ReviewsList from "@/components/reviews/ReviewsList";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://akoky.com/es" },
    { "@type": "ListItem", "position": 2, "name": "Opiniones", "item": "https://akoky.com/es/avis" },
  ],
};

const PAGE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Opiniones AKOKY – Testimonios Verificados de Miembros",
    "description": "Lee las opiniones auténticas y verificadas de los miembros de AKOKY. Testimonios reales sobre la experiencia, eventos, clubs asociados y suscripción premium.",
    "url": "https://akoky.com/es/avis",
    "inLanguage": "es",
    "isPartOf": { "@type": "WebSite", "name": "AKOKY", "url": "https://akoky.com" },
  },
  BREADCRUMB_SCHEMA,
];

const FAQ = [
  { question: "¿Las opiniones en AKOKY son auténticas y verificadas?", answer: "Sí, el 100% de nuestras opiniones son auténticas y verificadas. Cada testimonio proviene de un miembro activo de nuestra comunidad y es revisado por nuestro equipo de moderación antes de su publicación. A diferencia de otras plataformas, nunca publicamos opiniones falsas ni testimonios patrocinados." },
  { question: "¿Cuál es la nota media de AKOKY?", answer: "AKOKY obtiene una nota media de 4,7/5 basada en más de 60 opiniones verificadas de miembros. Esta puntuación refleja la satisfacción global de nuestra comunidad respecto a la calidad de la plataforma, la seguridad de los eventos y el respeto del consentimiento." },
  { question: "¿Cómo puedo dejar una opinión en AKOKY?", answer: "Si eres miembro activo de AKOKY, puedes compartir tu testimonio contactando a nuestro equipo a través de la página de contacto. Valoramos las opiniones detalladas que aborden tu experiencia real: ambiente en los eventos, calidad de los encuentros, facilidad de uso de la aplicación y respeto de las normas de consentimiento." },
  { question: "¿Puedo ganar una suscripción dejando una opinión?", answer: "¡Sí! Los testimonios auténticos y detallados pueden hacerte ganar hasta 12 meses de suscripción premium AKOKY. Recompensamos a los miembros que se toman el tiempo de compartir su experiencia de forma constructiva y honesta." },
  { question: "¿AKOKY está mejor valorado que Wyylde o NousLibertins?", answer: "Con una nota de 4,7/5, AKOKY se posiciona como una de las plataformas libertinas mejor valoradas de Europa. Nuestro enfoque premium, centrado en la calidad más que en la cantidad, nos diferencia de competidores como Wyylde, NousLibertins, Libertic o SexyLib." },
];

const AvisEs = () => (
  <>
    <Helmet>
      <html lang="es" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="AKOKY" />
      <meta name="twitter:site" content="@akoky_official" />
    </Helmet>
    <HreflangTags slug="avis" />

    <ContentPageLayout
      lang="es"
      title="Opiniones AKOKY – Testimonios Verificados de la Comunidad Libertina"
      description="Lee las opiniones auténticas y verificadas de los miembros de AKOKY. Testimonios reales sobre la experiencia, eventos, clubs asociados y suscripción premium."
      canonical="https://akoky.com/es/avis"
      heroTitle="Opiniones y Valoraciones AKOKY – Testimonios Verificados"
      heroSubtitle="Descubre más de 60 testimonios auténticos de la comunidad AKOKY, la red social libertina líder en Europa"
      heroImage="/images/jeux-cover.webp"
      breadcrumb={[{ label: "Opiniones" }]}
      faq={FAQ}
      schema={PAGE_SCHEMA}
    >
      {/* Intro SEO */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">¿Por Qué Importan las Opiniones AKOKY?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>En el mundo de las <Link to="/es/libertinaje" className="text-primary hover:underline">plataformas libertinas</Link>, la transparencia y la autenticidad son esenciales. A diferencia de los sitios de citas estándar o competidores como Wyylde y NousLibertins, AKOKY apuesta por la calidad de la comunidad antes que la cantidad. Cada opinión publicada en esta página proviene de un miembro verificado que ha participado realmente en nuestros <Link to="/es/eventos" className="text-primary hover:underline">eventos libertinos</Link> o utilizado nuestros servicios premium.</p>
            <p>Nuestros testimonios cubren todos los aspectos de la experiencia AKOKY: el ambiente en los <Link to="/es/clubbing" className="text-primary hover:underline">clubs libertinos asociados</Link>, la calidad de nuestra <Link to="/es/app" className="text-primary hover:underline">aplicación móvil</Link>, el respeto del consentimiento en los eventos, la moderación de la comunidad y las ventajas de la <Link to="/es/vip" className="text-primary hover:underline">membresía VIP</Link>. Estas opiniones reales ayudan a los nuevos miembros a entender nuestra filosofía y unirse a una comunidad libertina ética y acogedora.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <span className="text-4xl mb-4 block">⭐</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">★★★★★</span>
              <span className="text-5xl font-black text-primary block">4.7</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Nota media</span>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">🧾</span>
              <span className="text-5xl font-black text-primary block">60+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">opiniones verificadas</span>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">✅</span>
              <span className="text-5xl font-black text-primary block">100%</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Opiniones auténticas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews from CSV */}
      <ReviewsList lang="es" />

      {/* CTA */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Comparte tu Experiencia AKOKY y Gana Hasta 12 Meses VIP</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            ¿Eres miembro de nuestra comunidad libertina? Tu testimonio es valioso y podría hacerte ganar hasta <strong className="text-foreground">12 meses de suscripción premium</strong>. Comparte tu experiencia auténtica sobre nuestros <Link to="/es/eventos" className="text-primary hover:underline">eventos libertinos</Link>, nuestra <Link to="/es/app" className="text-primary hover:underline">aplicación</Link> o los <Link to="/es/clubbing" className="text-primary hover:underline">locales asociados</Link>, y ayuda a la comunidad AKOKY a crecer con respeto y autenticidad.
          </p>
          <a href="https://akoky.com/es/contacto" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
            👉 Quiero compartir mi opinión
          </a>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AvisEs;
