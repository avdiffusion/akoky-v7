import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Los juegos AKOKY son gratuitos?", answer: "Algunos juegos son accesibles gratuitamente para todos los miembros. Otros contenidos están reservados a los miembros VIP." },
  { question: "¿Son adecuados para principiantes?", answer: "Absolutamente. Los juegos AKOKY están diseñados para ser accesibles y divertidos, independientemente de tu experiencia. Siempre hay opciones para todos los niveles." },
  { question: "¿Se puede jugar solo o en pareja?", answer: "La mayoría de los juegos están pensados para parejas o grupos, pero algunos están adaptados también a solteros." },
];

const JuegosEs = () => (
  <>
    <MetaTags
      title="Juegos Libertinos AKOKY | Animaciones y Actividades para Veladas"
      description="Descubre nuestros juegos libertinos para animar tus veladas: cartas picantes, desafíos, animaciones interactivas. Lúdico, convivial y respetuoso."
      canonical="https://akoky.com/es/juegos"
      lang="es"
    />
    <HreflangTags slug="juegos" />
    <ContentPageLayout
      lang="es"
      title="Juegos Libertinos AKOKY | Animaciones y Actividades para Veladas"
      description="Descubre nuestros juegos libertinos para animar tus veladas: cartas picantes, desafíos, animaciones interactivas. Lúdico, convivial y respetuoso."
      canonical="https://akoky.com/es/juegos"
      heroTitle="Juegos Libertinos AKOKY"
      heroSubtitle="Anima tus veladas con nuestros juegos exclusivos: ruleta, dados, verdad o reto y más."
      heroImage="/images/es-juegos-cover.webp"
      breadcrumb={[{ label: "Juegos Libertinos AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">¿Por Qué Jugar en una Velada Libertina?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Los juegos son una excelente manera de romper el hielo, crear complicidad y explorar deseos de forma lúdica y sin presión. En AKOKY Space, encontrarás una selección de juegos diseñados específicamente para la comunidad libertina, siempre con el consentimiento y el respeto como valores fundamentales.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Nuestros Juegos</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎯 Ruleta de Penitencias Libertinas</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Una ruleta digital con penitencias personalizables según el nivel de audacia del grupo. Desde lo más suave hasta lo más atrevido, cada participante elige su nivel de confort. El juego se adapta a todos los grupos.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎲 Dado del Deseo AKOKY</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Un dado especial con diferentes caras: acciones, zonas del cuerpo, intensidades. Lanza el dado y descubre qué te depara el destino. Un clásico reinventado con un toque AKOKY.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">❓ Verdad o Reto Libertino</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La versión adulta del clásico juego de mesa. Preguntas atrevidas y retos sensuales cuidadosamente elaborados para crear momentos de complicidad y descubrimiento. Disponible en varios niveles de intensidad.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💑 Desafíos de Pareja</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Desafíos diseñados específicamente para parejas que quieren explorar juntos: comunicación, confianza, creatividad y sensualidad. Un viaje de descubrimiento mutuo con estructura lúdica.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🃏 Cartas Twist Sensuales</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Un mazo de cartas con situaciones, acciones y escenarios. Cada carta es una invitación a explorar algo nuevo. El juego se adapta a dos personas o a grupos más grandes.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🧠 Quiz Libertino Interactivo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Pon a prueba tus conocimientos sobre el mundo libertino: vocabulario, historia, prácticas, códigos. Divertido, educativo y perfecto para romper el hielo al inicio de una velada.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Reglas Fundamentales de los Juegos AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos los juegos AKOKY se basan en los mismos principios: consentimiento explícito antes de cada acción, derecho absoluto a pasar sin explicaciones, respeto de los límites de cada participante. Descubre también nuestros <Link to="/es/eventos" className="text-primary hover:underline">eventos libertinos</Link>, el <Link to="/es/clubbing" className="text-primary hover:underline">clubbing libertino</Link> en España, los <Link to="/es/live" className="text-primary hover:underline">lives en directo</Link> y accede a funcionalidades exclusivas con el <Link to="/es/vip" className="text-primary hover:underline">estatus VIP AKOKY</Link>.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default JuegosEs;
