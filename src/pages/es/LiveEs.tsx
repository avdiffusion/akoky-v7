import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cómo acceder a los lives AKOKY?", answer: "Los lives son accesibles para los miembros inscritos. Algunos contenidos están reservados a los miembros VIP. Crea tu cuenta gratuitamente en AKOKY." },
  { question: "¿Los lives son seguros?", answer: "Sí. Todos los participantes están verificados, la moderación es humana 24h/7d y el acceso está estrictamente controlado para miembros mayores de 18 años." },
  { question: "¿Puedo emitir mi propio live?", answer: "Sí, los miembros verificados pueden emitir. Toda emisión está sujeta a la carta AKOKY y a una verificación previa." },
];

const LiveEs = () => (
  <>
    <HreflangTags slug="live" />
    <ContentPageLayout
      lang="es"
      title="Lives Libertinos Exclusivos | Streaming Premium AKOKY España"
      description="Descubre 20+ lives libertinos por semana: ambiente de clubs en directo, veladas exclusivas, contenidos VIP. Streaming seguro y discreto."
      canonical="https://akoky.com/es/live"
      heroTitle="Lives AKOKY — Vídeos y Encuentros en Directo"
      heroSubtitle="20+ lives por semana: clubs en directo, veladas exclusivas, contenidos VIP. Seguro y discreto."
      heroImage="/images/es-live-cover.webp"
      breadcrumb={[{ label: "Lives AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Bienvenido a la Experiencia AKOKY Live</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY Live es la plataforma de streaming libertino más completa de Europa. Con más de 20 lives por semana, accederás a una experiencia inmersiva del mundo libertino desde la comodidad de tu hogar.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">El Marco AKOKY Live</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Experiencia Inmersiva</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Vive la atmósfera de los mejores clubes libertinos de Europa en directo. Cada live es una ventana a un mundo que pocos tienen la oportunidad de descubrir. Observa, aprende y decide si quieres vivir la experiencia en persona.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Moderación Humana</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos los lives son supervisados en tiempo real por nuestro equipo de moderación. Cualquier contenido que no respete la carta AKOKY es eliminado inmediatamente. La seguridad y el respeto son prioritarios.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Respeto y Consentimiento</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos los participantes en los lives han dado su consentimiento explícito para ser filmados y difundidos. Ninguna imagen se publica sin autorización previa y firmada.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Acceso Controlado</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">El acceso a los lives está estrictamente reservado a los miembros mayores de 18 años. Los contenidos VIP requieren una suscripción activa.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipos de Lives</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lives de Parejas</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Las parejas verificadas comparten momentos de su vida íntima en directo. Interactúa en el chat, haz preguntas y crea conexiones reales con personas de tu comunidad.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lives Solo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Hombres y mujeres solteros que comparten sus experiencias e interactúan con la comunidad. El formato más popular para los principiantes que quieren explorar antes de tomar la decisión de vivir experiencias en persona.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lives desde Clubs</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Algunos de nuestros <Link to="/es/clubes-libertinos" className="text-primary hover:underline">clubs socios</Link> difunden veladas en directo exclusivamente para la comunidad AKOKY. Explora también los <Link to="/es/eventos" className="text-primary hover:underline">eventos libertinos</Link>, descubre los <Link to="/es/juegos" className="text-primary hover:underline">juegos AKOKY</Link> y accede a contenidos exclusivos con el <Link to="/es/vip" className="text-primary hover:underline">estatus VIP</Link>. Descarga la <Link to="/es/app" className="text-primary hover:underline">app AKOKY</Link> para no perderte ningún live.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LiveEs;
