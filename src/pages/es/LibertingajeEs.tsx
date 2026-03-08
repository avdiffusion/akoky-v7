import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Qué es el libertinaje?", answer: "El libertinaje es una práctica sexual y relacional que consiste en explorar la sexualidad fuera del marco monógamo tradicional, siempre con el consentimiento libre e informado de todos los implicados." },
  { question: "¿Es peligroso el libertinaje?", answer: "No, siempre que las prácticas sean consensuadas, discutidas abiertamente y vividas con respeto mutuo. La seguridad y el consentimiento son el núcleo de toda práctica sana." },
  { question: "¿Hay que estar en pareja para practicar el libertinaje?", answer: "No. Parejas y solteros son bienvenidos. Las mujeres solteras tienen generalmente un acceso privilegiado a los clubes y eventos libertinos." },
  { question: "¿Cómo empezar en el libertinaje?", answer: "Hablando abiertamente con tu pareja, definiendo vuestros límites y descubriendo progresivamente a través de plataformas como AKOKY, que ofrece guías y una comunidad acogedora." },
];

const LibertingajeEs = () => (
  <>
    <MetaTags
      title="Libertinaje Moderno 2026 | Guía Completa, Prácticas y Ética — AKOKY"
      description="Descubre el libertinaje hoy: definición, prácticas (soft, hard, intercambio), consentimiento y evolución. Guía completa para parejas y solteros."
      canonical="https://akoky.com/es/libertinaje"
      lang="es"
    />
    <HreflangTags slug="libertinaje" />
    <ContentPageLayout
      lang="es"
      title="Libertinaje Moderno 2026 | Guía Completa, Prácticas y Ética — AKOKY"
      description="Descubre el libertinaje hoy: definición, prácticas (soft, hard, intercambio), consentimiento y evolución. Guía completa para parejas y solteros."
      canonical="https://akoky.com/es/libertinaje"
      heroTitle="El Libertinaje Moderno: Definición, Prácticas y Consentimiento"
      heroSubtitle="Descubre este universo en 2026: prácticas respetuosas, evolución cultural y claves para una exploración consciente."
      heroImage="/images/es-libertinaje-cover.webp"
      breadcrumb={[{ label: "El Libertinaje Moderno: Definición, Prácticas y Consentimiento" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Qué es el libertinaje?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">El libertinaje es una práctica sexual y relacional que consiste en explorar la sexualidad fuera del marco exclusivo de la pareja monógama tradicional. Lejos de los clichés mediáticos, el libertinaje moderno es ante todo un enfoque libre, consensuado y consciente, basado en el diálogo, el respeto y la confianza mutua.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Históricamente, el término &#39;libertino&#39; designaba a una persona liberada de las reglas morales o religiosas de su época. Hoy, esta filosofía designa una práctica sexual y relacional donde la exploración se realiza siempre con el consentimiento de todos los implicados.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Las Diferentes Formas de Práctica</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Prácticas Soft</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Las prácticas soft excluyen la penetración con otras parejas. Incluyen intercambios de caricias, juegos sensuales y momentos de complicidad en presencia de otras personas, conservando cierta exclusividad sexual dentro de la pareja. Es a menudo el primer paso para las parejas principiantes.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">El Intercambio de Parejas (Swinging)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">El intercambio de parejas es probablemente la forma más conocida. Consiste en que dos parejas intercambien sus compañeros para momentos íntimos. Esta práctica se basa en un acuerdo mutuo entre las cuatro personas implicadas y requiere un alto nivel de confianza dentro de cada pareja.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">El Candaulismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">El candaulismo es una práctica en la que uno de los miembros de la pareja disfruta viendo o sabiendo que su compañero/a tiene relaciones sexuales con otra persona. A diferencia del intercambio, el candaulismo se basa en un placer asimétrico: uno mira, el otro es observado.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">El Triolismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">El triolismo designa una relación sexual entre tres personas. Puede tratarse de una pareja que invita a una tercera persona, o de tres personas que interactúan juntas sin jerarquía particular. Esta práctica permite explorar nuevas dinámicas sexuales con el acuerdo explícito de todos.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Las Relaciones Abiertas</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Las relaciones abiertas son un modelo relacional en el que los compañeros se autorizan mutuamente a tener relaciones sexuales o afectivas con otras personas. Las reglas varían de una pareja a otra, pero el principio fundamental es siempre la transparencia y el respeto de las reglas establecidas en común.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">El Consentimiento: Piedra Angular</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">El consentimiento es la base de toda exploración en este ámbito. Sin consentimiento libre, informado y entusiasta, no puede haber práctica sana. El consentimiento no es estático: lo que era aceptable ayer puede no serlo hoy, y es perfectamente legítimo cambiar de opinión en cualquier momento.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">El Libertinaje en la Era Digital</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Internet ha transformado profundamente la manera en que las personas descubren y practican el libertinaje. Plataformas como AKOKY ofrecen un espacio accesible y menos intimidante que los <Link to="/es/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link>, permitiendo a parejas y solteros informarse, intercambiar y conectar de forma segura. Descubre también nuestros <Link to="/es/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link> para un ambiente más relajado.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿A Quién Va Dirigido?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">El libertinaje es accesible a todos, independientemente de la edad, la orientación sexual o el estado sentimental. Si estás empezando, consulta nuestra guía para <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">empezar en el libertinaje</Link>. Explora nuestro <Link to="/es/lexico" className="text-primary hover:underline">léxico libertino</Link> para dominar el vocabulario, consulta los próximos <Link to="/es/eventos" className="text-primary hover:underline">eventos</Link> y descubre el <Link to="/es/clubbing" className="text-primary hover:underline">clubbing libertino</Link> en España.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LibertingajeEs;
