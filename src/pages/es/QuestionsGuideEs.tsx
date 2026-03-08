import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "¿Es obligatorio hacer algo?", answer: "No. El derecho a decir no es absoluto. Muchas parejas solo observan en su primera visita." },
  { question: "¿Hace falta estar en pareja?", answer: "No. Mujeres solteras muy bienvenidas. Hombres solos bajo condiciones." },
  { question: "¿Es peligroso el libertinaje?", answer: "No, si se practica con consentimiento y comunicación. La seguridad es central." },
  { question: "¿Cómo encontrar parejas?", answer: "AKOKY: 1,5M de miembros en Europa. Crea tu perfil gratuito." },
  { question: "¿Cuánto cuesta la entrada?", answer: "Entre 20€ y 80€ por pareja. Mujeres solas: frecuentemente gratuito." },
  { question: "¿Qué dress code llevar?", answer: "Consulta la ficha del club en AKOKY. Generalmente elegante o sexy para los hombres." },
];

const QuestionsGuideEs = () => (
  <>
    <MetaTags title="Preguntas Frecuentes para Principiantes en el Libertinaje" description="Las 50 preguntas más frecuentes de principiantes: funcionamiento, seguridad, vocabulario." canonical="https://akoky.com/es/preguntas-principiantes" lang="es" />
    <HreflangTags slug="preguntas-principiantes" />
    <ContentPageLayout lang="es" title="Preguntas Frecuentes para Principiantes en el Libertinaje" description="Las 50 preguntas más frecuentes de principiantes: funcionamiento, seguridad, vocabulario." canonical="https://akoky.com/es/preguntas-principiantes" heroTitle="Preguntas para Principiantes" heroSubtitle="Las respuestas a las preguntas que todos se hacen al descubrir el libertinaje" breadcrumb={[{ label: "Preguntas para Principiantes" }]}
      faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default QuestionsGuideEs;
