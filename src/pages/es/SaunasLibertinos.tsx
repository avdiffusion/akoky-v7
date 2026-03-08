import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Qué es exactamente un sauna libertino?", answer: "Un sauna libertino es un establecimiento que combina relax spa (hammam, jacuzzi, sauna) y encuentros sensuales entre adultos con consentimiento. El ambiente es acogedor y apacible, lejos de la agitación de los clubes tradicionales. Estos lugares privilegian el bienestar y el respeto mutuo." },
  { question: "¿Los saunas libertinos aceptan solteros?", answer: "Depende del establecimiento. Las mujeres solas son generalmente bienvenidas sin restricción. Para los hombres solos, cada sauna tiene su política: algunos los aceptan todos los días, otros solo en ciertos horarios o con cuotas. Verifica siempre la política de acceso en la ficha AKOKY antes de desplazarte." },
  { question: "¿Qué ropa llevar en un sauna libertino?", answer: "La mayoría de los saunas libertinos funcionan con un sistema sencillo: te proporcionan un albornoz y una toalla a la entrada. Puedes circular en albornoz, toalla, bañador o completamente desnudo/a según los espacios y tu nivel de comodidad. Algunos establecimientos imponen la desnudez en las zonas de hammam/sauna por razones de higiene. La regla general: haz lo que te haga sentir cómodo/a." },
  { question: "¿Cuánto cuesta la entrada a un sauna libertino?", answer: "Las tarifas varían según la ciudad y el nivel del establecimiento. En media, cuenta entre 30 y 60€ para una pareja, entre 20 y 40€ para una mujer sola, y entre 60 y 90€ para un hombre solo (cuando se acepta). Algunos proponen fórmulas de día o de noche. Los precios exactos se indican en cada ficha del directorio AKOKY." },
  { question: "¿Se puede solo disfrutar del spa sin participar en actividades libertinas?", answer: "Sí, absolutamente. El principio del consentimiento es fundamental en todo establecimiento libertino. Eres totalmente libre de simplemente disfrutar de las instalaciones spa (hammam, jacuzzi, sauna) sin participar en los juegos sensuales. Nadie puede obligarte a nada. Muchos visitantes vienen primero para observar y relajarse." },
  { question: "¿Los saunas libertinos son limpios y seguros?", answer: "Los establecimientos serios aplican normas estrictas de higiene: limpieza diaria, desinfección regular de los espacios, toallas limpias disponibles, preservativos y geles. Los saunas referenciados en AKOKY son valorados por los miembros, lo que permite identificar rápidamente los que mantienen estándares elevados. En caso de duda, consulta las opiniones de la comunidad antes de desplazarte." },
  { question: "¿Cuál es el mejor momento para ir a un sauna libertino?", answer: "Los saunas libertinos están generalmente abiertos de día y de noche. Las tardes entre semana son más tranquilas e ideales para una primera visita. Los viernes y sábados por la noche atraen más gente. Algunos establecimientos organizan veladas temáticas (solo parejas, máscaras, etc.) — consulta el calendario en la ficha AKOKY de cada establecimiento para conocer la programación." },
  { question: "¿Cómo se desarrolla la primera visita a un sauna libertino?", answer: "En recepción, te explican el funcionamiento, te dan un albornoz, una toalla y a veces una pulsera de color. Pasas después a los vestuarios para cambiarte. Luego, eres libre de circular entre los diferentes espacios: relax, spa, cabinas privadas. Tómate tu tiempo, observa, conversa. Todo va a tu ritmo, sin ninguna presión ni obligación de participar." },
  { question: "¿Se puede fotografiar en un sauna libertino?", answer: "No, está estrictamente prohibido. La discreción y el respeto de la vida privada son valores fundamentales. Los teléfonos están generalmente prohibidos o se ponen bajo sello a la entrada. Cualquier intento de fotografiar o filmar conlleva una expulsión inmediata y definitiva." },
  { question: "¿Dónde encontrar la lista completa de saunas libertinos en España?", answer: "El directorio más completo está disponible en AKOKY. Encontrarás todos los saunas y clubes libertinos de España, con fichas detalladas, fotos, opiniones verificadas, tarifas y calendario de eventos. El directorio es accesible gratuitamente en el sitio web y en la aplicación móvil." },
];

const EQUIPEMENTS = [
  {
    img: "/images/sauna-jacuzzi.webp",
    alt: "Jacuzzi en un sauna libertino español",
    title: "Piscina y Jacuzzi",
    text: "Piscinas climatizadas y espacios acuáticos para una relajación total"
  },
  {
    img: "/images/sauna-vestiaires.webp",
    alt: "Vestuarios elegantes de un sauna libertino",
    title: "Vestuarios y Duchas",
    text: "Espacios privativos y equipamientos modernos para tu comodidad"
  },
  {
    img: "/images/sauna-lounge.webp",
    alt: "Espacio relax lounge en un sauna libertino",
    title: "Salones Lounge",
    text: "Zonas de relajación íntimas, ideales para conocerse"
  },
  {
    img: "/images/sauna-cabines.webp",
    alt: "Cabinas privadas de un sauna libertino",
    title: "Cabinas Privadas",
    text: "Espacios íntimos para momentos con total discreción"
  },
  {
    img: "/images/sauna-hammam.webp",
    alt: "Hammam en un establecimiento libertino",
    title: "Hammam y Sauna",
    text: "Espacios de vapor y calor seco para una relajación profunda"
  },
];

const CIUDADES = [
  { to: "/es/clubes-libertinos", label: "Madrid" },
  { to: "/es/clubes-libertinos", label: "Barcelona" },
  { to: "/es/clubes-libertinos", label: "Valencia" },
  { to: "/es/clubes-libertinos", label: "Sevilla" },
  { to: "/es/clubes-libertinos", label: "Málaga" },
  { to: "/es/clubes-libertinos", label: "Ibiza" },
];

const RELATED = [
  { to: "/es/clubes-libertinos", label: "Clubes Libertinos" },
  { to: "/es/clubbing", label: "Guía Clubbing" },
  { to: "/es/eventos", label: "Eventos" },
  { to: "/es/empezar-libertinaje", label: "Empezar" },
  { to: "/es/app", label: "Aplicación AKOKY" },
  { to: "/es/libertinaje", label: "El Libertinaje" },
  { to: "/es/vip", label: "Estatus VIP" },
  { to: "/es/lexico", label: "Léxico Libertino" },
];

const SaunasLibertinos = () => (
  <>
    <MetaTags
      title="Saunas Libertinos España 2026 – Guía Completa y Directorio | AKOKY"
      description="Descubre los mejores saunas libertinos en España. Guía completa, espacios, equipamientos y consejos. AKOKY, referencia del libertinaje premium."
      canonical="https://akoky.com/es/saunas-libertinos"
      lang="es"
      ogImage="/images/es-saunas-cover.webp"
    />
    <HreflangTags slug="saunas-libertinos" />
    <ContentPageLayout
      lang="es"
      title="Saunas Libertinos en España"
      description="Guía y directorio de saunas libertinos en España"
      canonical="https://akoky.com/es/saunas-libertinos"
      heroTitle="Saunas Libertinos en España"
      heroSubtitle="Descubre el universo intimista de los saunas libertinos: guía completa, espacios típicos y directorio por región para encontrar el establecimiento ideal."
      heroImage="/images/es-saunas-cover.webp"
      breadcrumb={[{ label: "Saunas Libertinos" }]}
      faq={FAQ}
    >

      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-3">En España, los saunas libertinos atraen tanto a parejas principiantes como a habituales en busca de una experiencia más zen. Proponen generalmente espacios spa (hammam, jacuzzi, piscina climatizada), cabinas privadas, salones de relajación y a veces zonas de masaje. El objetivo: crear una atmósfera donde la sensualidad emerge naturalmente, sin presión ni agitación. Madrid, Barcelona, Valencia y la costa mediterránea cuentan con los mejores establecimientos del país.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/ambiance-sauna-libertin.webp" alt="Ambiente sauna libertino España" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">¿Qué es un sauna libertino?</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Un sauna libertino es un establecimiento que combina los códigos del spa tradicional con la libertad de los <Link to="/es/libertinaje" className="text-primary hover:underline">encuentros libertinos</Link>. Encontrarás equipamientos de relajación (sauna seco, hammam, jacuzzi, duchas sensoriales) asociados a espacios privados concebidos para la intimidad y los juegos sensuales.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">La acogida se realiza generalmente con total discreción. Te entregan una toalla, un albornoz y una pulsera (a veces de color diferente según tu estatus: pareja, mujer sola, hombre solo). Circulas libremente entre los diferentes espacios: algunos son colectivos y propicios a los intercambios, otros privados para más intimidad.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Los saunas libertinos atraen principalmente a parejas, a menudo de treinta a cincuenta años, en busca de una experiencia elegante y respetuosa. Las mujeres solas son generalmente bienvenidas. Los hombres solos son aceptados según los establecimientos y los horarios, con a veces cuotas para garantizar un equilibrio. Si eres nuevo en este mundo, consulta nuestra guía para <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">empezar en el libertinaje</Link>.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Espacios y equipamientos típicos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Cada sauna libertino es único, pero la mayoría proponen espacios similares pensados para combinar confort, higiene y sensualidad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPEMENTS.map((e, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.img} alt={e.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-foreground mb-1">{e.title}</h4>
                  <p className="text-muted-foreground text-sm">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sauna libertino o club libertino: ¿cuál es la diferencia?</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Los dos tipos de establecimientos comparten una misma filosofía libertina, pero ofrecen experiencias radicalmente diferentes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-3">🧖 Sauna Libertino</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Ambiente intimista y relajado</li>
                <li>• Sauna, jacuzzi, hammam en el centro</li>
                <li>• Más tranquilo, ideal para empezar</li>
                <li>• A menudo abierto de día</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-3">💃 Club Libertino</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Ambiente festivo y musical</li>
                <li>• Pista de baile, bar, veladas temáticas</li>
                <li>• Más animado, dress code exigido</li>
                <li>• Principalmente nocturno</li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Descubre nuestra guía completa del <Link to="/es/clubbing" className="text-primary hover:underline">clubbing libertino</Link> y nuestro <Link to="/es/clubes-libertinos" className="text-primary hover:underline">directorio de clubes libertinos en España</Link> para comparar los dos tipos de experiencia.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">¿Cómo elegir bien tu sauna libertino?</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">No todos los saunas son iguales. Aquí tienes los criterios esenciales a verificar antes de tu primera visita.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Un buen sauna libertino muestra una limpieza perfecta: espacios limpiados diariamente, toallas limpias proporcionadas, gel hidroalcohólico disponible. Consulta las opiniones de los miembros en <Link to="/es/avis" className="text-primary hover:underline">nuestra sección de opiniones</Link> para verificar este criterio crucial.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Prioriza los establecimientos referenciados en AKOKY con opiniones verificadas y una valoración alta. Lee los comentarios de experiencia para identificar los puntos fuertes y débiles de cada lugar. Descarga la <Link to="/es/app" className="text-primary hover:underline">aplicación AKOKY</Link> para encontrar saunas cerca de ti y consulta los próximos <Link to="/es/eventos" className="text-primary hover:underline">eventos libertinos</Link>.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">Descubrir los saunas libertinos en España</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/carte-saunas-france.webp" alt="Mapa saunas libertinos España" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {CIUDADES.map((l, i) => (
                <Link key={i} to={l.to} className="text-sm p-3 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
                  → {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {RELATED.map((l, i) => (
              <Link key={i} to={l.to} className="text-sm px-4 py-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default SaunasLibertinos;
