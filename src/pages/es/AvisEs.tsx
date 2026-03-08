import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import ReviewsList from "@/components/reviews/ReviewsList";

const FAQ = [
  { question: "¿Las opiniones en AKOKY son auténticas?", answer: "Sí. Todas las opiniones están vinculadas a perfiles verificados. Esto garantiza su autenticidad y evita las manipulaciones." },
  { question: "¿Cómo dejar una opinión?", answer: "Conéctate a tu cuenta AKOKY, visita la ficha del club o evento y usa el formulario de valoración. Las opiniones son moderadas antes de su publicación." },
  { question: "¿Puedo responder a una opinión?", answer: "Sí. Los miembros pueden responder a las opiniones y los clubs socios pueden responder a las valoraciones de sus establecimientos." },
];

const AvisEs = () => (
  <>
    <MetaTags
      title="Opiniones AKOKY | Valoraciones de la Comunidad Libertina"
      description="Lee las opiniones y valoraciones de la comunidad AKOKY: experiencias reales, testimonios verificados y evaluaciones de clubs y eventos."
      canonical="https://akoky.com/es/avis"
      lang="es"
    />
    <HreflangTags slug="avis" />
    <ContentPageLayout
      lang="es"
      title="Opiniones AKOKY | Valoraciones de la Comunidad Libertina"
      description="Lee las opiniones y valoraciones de la comunidad AKOKY: experiencias reales, testimonios verificados y evaluaciones de clubs y eventos."
      canonical="https://akoky.com/es/avis"
      heroTitle="Opiniones y Valoraciones AKOKY"
      heroSubtitle="Testimonios reales y verificados de la comunidad libertina europea."
      breadcrumb={[{ label: "Opiniones y Valoraciones AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Por Qué Confiamos en las Opiniones?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">En AKOKY, las opiniones no son anónimas: están vinculadas a perfiles verificados. Esto garantiza su autenticidad y evita las manipulaciones. Cuando lees una valoración en AKOKY, sabes que proviene de una persona real que ha vivido la experiencia.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Testimonios de Miembros</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Parejas</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Descubre cómo parejas de toda España han encontrado en AKOKY el espacio que buscaban para explorar su vida íntima de forma segura y auténtica. Sus testimonios son la mejor prueba de lo que la plataforma puede aportar.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Solteros</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La comunidad AKOKY es también vibrante para los solteros. Hombres y mujeres que han encontrado encuentros auténticos, amistades duraderas y una comunidad donde se sienten bienvenidos.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Valoraciones de Clubs</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Cada club referenciado en AKOKY acumula valoraciones de los miembros que lo han visitado. Una media de puntuación, comentarios detallados sobre el ambiente, la limpieza, el personal y el nivel de los visitantes. La información más fiable antes de elegir tu club.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Valoraciones de Eventos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Después de cada evento AKOKY, los participantes pueden dejar sus impresiones. Ambiente, organización, calidad de los asistentes, relación calidad-precio: todos los detalles que necesitas para elegir tu próximo evento.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Comparte tu Experiencia</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">¿Has tenido una experiencia positiva en un club, un evento o con un miembro de la comunidad? Comparte tu testimonio en AKOKY. Tu opinión ayuda a toda la comunidad a tomar mejores decisiones y a que los mejores establecimientos sean reconocidos.</p>
        </div>
      </section>
      <ReviewsList lang="es" />
    </ContentPageLayout>
  </>
);

export default AvisEs;
