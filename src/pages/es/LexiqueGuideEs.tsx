import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Por qué aprender el vocabulario libertino?", answer: "Dominar el léxico te permite comunicar con confianza en los clubes, eventos y plataformas, y comprender exactamente lo que se propone." },
  { question: "¿Cuántos términos contiene el léxico AKOKY?", answer: "Más de 200 términos definidos y explicados, desde los más comunes hasta los más especializados." },
  { question: "¿El vocabulario es el mismo en todos los países?", answer: "La mayoría de los términos son universales, pero algunos pueden variar según las culturas. AKOKY ofrece definiciones adaptadas al contexto español." },
];

const LexiqueGuideEs = () => (
  <>
    <MetaTags title="Léxico Libertino 2026 | 200+ Términos Definidos — AKOKY" description="Diccionario libertino completo: swapping, mélangisme, candaulismo. Domina el vocabulario." canonical="https://akoky.com/es/lexico-libertino-guia" lang="es" />
    <HreflangTags slug="lexico-libertino-guia" />
    <ContentPageLayout lang="es" title="Léxico Libertino 2026 | 200+ Términos Definidos — AKOKY" description="Diccionario libertino completo: swapping, mélangisme, candaulismo. Domina el vocabulario." canonical="https://akoky.com/es/lexico-libertino-guia" heroTitle="Léxico Libertino" heroSubtitle="200+ términos del mundo libertino definidos y explicados" heroImage="/images/es-lexico-cover.webp" breadcrumb={[{ label: "Léxico Libertino" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Los Términos Esenciales del Libertinaje</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Antes de descubrir un <Link to="/es/clubes-libertinos" className="text-primary hover:underline">club libertino</Link> o de asistir a un <Link to="/es/eventos" className="text-primary hover:underline">evento</Link>, dominar el vocabulario es esencial para comunicar con confianza y entender las propuestas.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Intercambio de parejas (Swapping)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Práctica en la que dos parejas intercambian sus compañeros. Puede ser soft (sin penetración) o full (completo).</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mélangisme</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Práctica en grupo donde varias personas o parejas comparten momentos íntimos en el mismo espacio sin necesariamente intercambiar sus parejas.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Candaulismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Práctica en la que uno de los miembros de la pareja disfruta sabiendo que su compañero tiene relaciones con otra persona.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Soft swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Variante del intercambio sin penetración: caricias, juegos sensuales entre varias personas manteniendo la exclusividad sexual dentro de la pareja.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Full swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Intercambio completo de parejas, incluyendo la penetración, con el acuerdo previo de todos los participantes.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Voyeurismo / Exhibicionismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Obtener placer observando o siendo observado en actividades íntimas. Muy frecuente en los <Link to="/es/clubbing" className="text-primary hover:underline">clubs libertinos</Link> donde los espacios abiertos permiten ambas prácticas.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Vocabulario de los Clubs</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cuarto oscuro</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Espacio con poca o ninguna iluminación destinado a encuentros anónimos y sin inhibiciones.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Jacuzzi mixto</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Jacuzzi abierto a todos los miembros del club, a menudo el lugar de los primeros contactos. Descubre los mejores <Link to="/es/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link> de España.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cabaña privada</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Espacio cerrado para dos o cuatro personas, que permite vivir un momento íntimo de forma más privada dentro del club.</p>
        </div>
      </section>
      <section className="py-10 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5">Explorar más</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { to: "/es/libertinaje", label: "El Libertinaje" },
              { to: "/es/empezar-libertinaje", label: "Empezar" },
              { to: "/es/clubes-libertinos", label: "Clubes en España" },
              { to: "/es/saunas-libertinos", label: "Saunas" },
              { to: "/es/eventos", label: "Eventos" },
              { to: "/es/juegos", label: "Juegos" },
              { to: "/es/app", label: "App AKOKY" },
              { to: "/es/vip", label: "VIP" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors text-center">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default LexiqueGuideEs;
