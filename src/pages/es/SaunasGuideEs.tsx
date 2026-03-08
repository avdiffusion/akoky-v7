import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Qué es exactamente un sauna libertino?", answer: "Un sauna libertino es un establecimiento que combina relax spa (hammam, jacuzzi, sauna) y encuentros sensuales entre adultos consintientes. El ambiente es acogedor y relajante, lejos de la agitación de los clubes tradicionales." },
  { question: "¿Los saunas libertinos aceptan solteros?", answer: "Depende del establecimiento. Las mujeres solas son generalmente bienvenidas sin restricción. Los hombres solos pueden acceder a algunos saunas bajo condiciones: cuotas, horarios específicos. Verifica siempre la política en la ficha AKOKY." },
  { question: "¿Qué ropa llevar en un sauna libertino?", answer: "La mayoría proporcionan albornoz y toalla en la entrada. Puedes circular en albornoz, toalla, bañador o completamente desnudo según los espacios y tu nivel de comodidad." },
  { question: "¿Cuánto cuesta la entrada a un sauna libertino?", answer: "En promedio: 40-70€ para pareja, 25-50€ para mujer sola, 70-100€ para hombre solo (cuando aceptado). Los precios exactos están en cada ficha del directorio AKOKY." },
  { question: "¿Se puede solo disfrutar del spa sin participar?", answer: "Sí, absolutamente. Eres totalmente libre de disfrutar de las instalaciones (hammam, jacuzzi, sauna) sin participar en los juegos sensuales. Nadie puede obligarte a nada." },
  { question: "¿Los saunas libertinos son limpios y seguros?", answer: "Los establecimientos serios aplican normas estrictas de higiene: limpieza diaria, desinfección regular, puesta a disposición de toallas limpias, preservativos y geles. Consulta las opiniones en AKOKY." },
  { question: "¿Cuál es el mejor momento para ir?", answer: "Las tardes entre semana son más tranquilas e ideales para una primera visita. Los viernes y sábados por la noche atraen más gente. Algunos organizan veladas temáticas." },
  { question: "¿Cómo es la primera visita?", answer: "En recepción te explican el funcionamiento, te dan albornoz y toalla. Pasas a vestuarios para cambiarte. Luego eres libre de circular entre los espacios: relax, spa, cabinas privadas. Todo a tu ritmo." },
  { question: "¿Se puede fotografiar en un sauna libertino?", answer: "No, está estrictamente prohibido. La discreción y el respeto de la vida privada son valores fundamentales. Los teléfonos están generalmente prohibidos o sellados en la entrada." },
  { question: "¿Dónde encontrar la lista completa de saunas libertinos?", answer: "El directorio más completo está disponible en AKOKY, con fichas detalladas, fotos, opiniones verificadas, tarifas y calendario de eventos. Acceso gratuito en el sitio y la aplicación." },
];

const EQUIPEMENTS = [
  { img: "/images/sauna-jacuzzi.webp", alt: "Jacuzzi en un sauna libertino", title: "Piscina y Jacuzzi", text: "Piscinas climatizadas y espacios acuáticos para una relajación total" },
  { img: "/images/sauna-vestiaires.webp", alt: "Vestuarios elegantes de un sauna libertino", title: "Vestuarios y Duchas", text: "Espacios privativos y equipamientos modernos para tu confort" },
  { img: "/images/sauna-lounge.webp", alt: "Espacio relax lounge en un sauna libertino", title: "Salones Lounge", text: "Zonas de relajación acogedoras, ideales para conocerse" },
  { img: "/images/sauna-cabines.webp", alt: "Cabinas privadas de un sauna libertino", title: "Cabinas Privadas", text: "Espacios íntimos para momentos con total discreción" },
  { img: "/images/sauna-hammam.webp", alt: "Hammam en un establecimiento libertino", title: "Hammam y Sauna", text: "Espacios de vapor y calor seco para una relajación profunda" },
];

const SaunasGuideEs = () => (
  <>
    <MetaTags title="Saunas Libertinos 2026 | Guía Completa y Directorio — AKOKY España" description="Descubre los mejores saunas libertinos: qué esperar, cómo elegir, equipamientos, precios. Guía completa con directorio verificado AKOKY." canonical="https://akoky.com/es/saunas-libertinos-guia" lang="es" ogImage="/images/sauna-cover.webp" />
    <HreflangTags slug="saunas-libertinos-guia" />
    <ContentPageLayout lang="es" title="Saunas Libertinos 2026 | Guía Completa — AKOKY España" description="Descubre los mejores saunas libertinos: qué esperar, cómo elegir." canonical="https://akoky.com/es/saunas-libertinos-guia" heroTitle="Saunas Libertinos" heroSubtitle="Todo sobre los saunas libertinos: ambiente, precios, equipamientos, cómo elegir en 2026" heroImage="/images/sauna-cover-fr.webp" breadcrumb={[{ label: "Saunas Libertinos" }]} faq={FAQ}>

      {/* ¿Qué es? */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">¿Qué es un Sauna Libertino?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Un sauna libertino combina instalaciones de <strong className="text-foreground">bienestar</strong> (sauna seco, hammam, jacuzzi, piscina) con espacios íntimos para encuentros entre adultos consintientes. La atmósfera es generalmente más luminosa y relajada que en un club libertino, con un enfoque en la <strong className="text-foreground">relajación y el bienestar</strong> como puerta de entrada a la sensualidad.</p>
            <p>Estos establecimientos atraen a un público variado: parejas curiosas que buscan un primer contacto suave con el mundo libertino, libertinos experimentados que aprecian el confort spa, y personas solas (especialmente mujeres) que valoran el ambiente acogedor y seguro.</p>
          </div>
        </div>
      </section>

      {/* Sauna vs Club */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Sauna vs Club Libertino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="font-bold text-primary mb-3">🏛️ Sauna Libertino</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Ambiente relajado y luminoso</li>
                <li>• Llegada directa en albornoz</li>
                <li>• Desnudez habitual desde la entrada</li>
                <li>• Equipamientos spa completos</li>
                <li>• Público generalmente más experimentado</li>
                <li>• Abierto en horario diurno y nocturno</li>
              </ul>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="font-bold text-primary mb-3">🎭 Club Libertino</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Ambiente festivo y nocturno</li>
                <li>• Dress code obligatorio</li>
                <li>• Tenue elegante/sexy requerida</li>
                <li>• Pista de baile y bar</li>
                <li>• Público más variado en experiencia</li>
                <li>• Principalmente horario nocturno</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamientos */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Equipamientos Típicos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPEMENTS.map((eq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img src={eq.img} alt={eq.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1">{eq.title}</h3>
                  <p className="text-muted-foreground text-sm">{eq.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo elegir */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">¿Cómo Elegir tu Sauna?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>AKOKY referencia los mejores saunas libertinos verificados en España y Europa con fichas completas, fotos y reseñas auténticas de la comunidad. Aquí tienes los criterios esenciales:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                { icon: "📍", title: "Ubicación", desc: "Cercanía, accesibilidad, aparcamiento discreto" },
                { icon: "⭐", title: "Opiniones AKOKY", desc: "Reseñas verificadas de miembros reales" },
                { icon: "🧼", title: "Higiene", desc: "Limpieza, equipamientos, normas sanitarias" },
              ].map((c, i) => (
                <div key={i} className="p-4 bg-card border border-border rounded-xl text-center">
                  <span className="text-2xl mb-2 block">{c.icon}</span>
                  <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maillage */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Explorar más</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { to: "/es/clubes-libertinos", label: "Clubes Libertinos" },
              { to: "/es/clubbing", label: "Guía Clubbing" },
              { to: "/es/guia-libertinaje-completa", label: "Guía Libertinaje" },
              { to: "/es/como-empezar-libertinaje", label: "Empezar" },
              { to: "/es/eventos-libertinos", label: "Eventos" },
              { to: "/es/libertinaje", label: "El Libertinaje" },
              { to: "/es/app", label: "Aplicación AKOKY" },
              { to: "/es/avis", label: "Opiniones" },
            ].map((link, i) => (
              <Link key={i} to={link.to} className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors text-center text-sm font-medium text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);
export default SaunasGuideEs;
