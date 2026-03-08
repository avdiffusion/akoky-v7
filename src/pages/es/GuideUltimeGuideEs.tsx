import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿El libertinaje es legal en España?", answer: "Sí. El libertinaje entre adultos consintientes es perfectamente legal. Los clubes libertinos son establecimientos declarados y regulados por la ley." },
  { question: "¿Cuál es la diferencia entre libertinaje e intercambismo?", answer: "El libertinaje es un término global que engloba varias prácticas. El intercambismo se refiere más específicamente al intercambio de parejas entre parejas." },
  { question: "¿Es obligatorio ir a un club?", answer: "No. El libertinaje puede vivirse a través de encuentros privados, fiestas selectivas o eventos organizados." },
  { question: "¿Existen clubes libertinos por toda España?", answer: "Sí. España cuenta con cientos de clubes, repartidos por todo el territorio, especialmente en Barcelona, Madrid, Valencia, Sevilla e Ibiza." },
  { question: "¿El libertinaje está reservado a las parejas?", answer: "No. Las parejas son mayoritarias, pero las mujeres solas son muy bien acogidas y los hombres solos aceptados bajo condiciones." },
  { question: "¿Se puede ir solo para observar?", answer: "Sí. Muchos libertinos vienen para observar, descubrir el ambiente o vivir una experiencia soft." },
  { question: "¿El consentimiento es realmente respetado?", answer: "Absolutamente. El consentimiento es la regla número uno. Un no siempre se respeta, sin discusión." },
  { question: "¿Hay reglas estrictas en los clubes?", answer: "Sí. Higiene, respeto, discreción y seguridad se aplican estrictamente en los establecimientos serios." },
  { question: "¿Se puede cambiar de opinión en cualquier momento?", answer: "Sí. Puedes rechazar, parar o irte en cualquier momento, sin presión." },
  { question: "¿Cómo elegir tu primer club libertino?", answer: "Privilegia un club reconocido, limpio y que ofrezca veladas adaptadas a principiantes. Consulta las opiniones en AKOKY." },
  { question: "¿Existen veladas especiales para principiantes?", answer: "Sí. Muchos clubes organizan veladas de descubrimiento con un ambiente más suave." },
  { question: "¿El libertinaje puede fortalecer una pareja?", answer: "Sí, si se basa en la comunicación. Mal preparado, también puede fragilizar una pareja." },
  { question: "¿Los teléfonos están autorizados?", answer: "Su uso está muy regulado. La discreción y el anonimato son esenciales." },
  { question: "¿Hay riesgos sanitarios?", answer: "Como en toda actividad sexual, se imponen precauciones. El preservativo es obligatorio en los clubes serios." },
];

const TOC = [
  { label: "¿Qué es el libertinaje?", anchor: "#definicion" },
  { label: "Historia del libertinaje en España", anchor: "#historia" },
  { label: "Los diferentes tipos de libertinaje", anchor: "#tipos" },
  { label: "Cómo empezar en el libertinaje", anchor: "#empezar" },
  { label: "Las reglas de oro del libertinaje", anchor: "#reglas" },
  { label: "Los clubes libertinos en España", anchor: "#clubes" },
];

const GuideUltimeGuideEs = () => (
  <>
    <MetaTags title="Guía Definitiva del Libertinaje en España 2026 – 500+ Clubes | AKOKY" description="La guía de referencia del libertinaje en España: 500+ clubes verificados, consejos expertos, códigos esenciales, empezar con serenidad. Todo saber sobre el libertinaje español." canonical="https://akoky.com/es/guia-definitiva-libertinaje" lang="es" ogImage="/images/app-cover.webp" />
    <HreflangTags slug="guia-definitiva-libertinaje" />
    <ContentPageLayout lang="es" title="Guía Definitiva del Libertinaje en España 2026 – 500+ Clubes | AKOKY" description="La guía de referencia del libertinaje en España: 500+ clubes verificados, consejos expertos." canonical="https://akoky.com/es/guia-definitiva-libertinaje" heroTitle="Guía Definitiva del Libertinaje en España" heroSubtitle="El recurso definitivo: 500+ clubes verificados, consejos expertos, códigos esenciales" heroImage="/images/es-guia-definitiva-cover.webp" breadcrumb={[{ label: "Guía Definitiva del Libertinaje" }]} faq={FAQ}>

      {/* Tabla de contenidos */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">📚 Tabla de contenidos completa</h2>
          <p className="text-muted-foreground mb-6">Navega fácilmente por esta guía de más de 8000 palabras</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">🎯 Los Fundamentos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#definicion" className="hover:text-primary">1. ¿Qué es el libertinaje?</a></li>
                <li><a href="#historia" className="hover:text-primary">2. Historia del libertinaje en España</a></li>
                <li><a href="#tipos" className="hover:text-primary">3. Los diferentes tipos de libertinaje</a></li>
                <li><a href="#empezar" className="hover:text-primary">4. Cómo empezar en el libertinaje</a></li>
                <li><a href="#reglas" className="hover:text-primary">5. Las reglas de oro del libertinaje</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">🏛️ Lugares y Eventos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#clubes" className="hover:text-primary">6. Los clubes libertinos en España</a></li>
                <li><Link to="/es/guia-libertinaje-completa" className="hover:text-primary">7. Cómo elegir tu club</Link></li>
                <li><Link to="/es/saunas-libertinos" className="hover:text-primary">8. Los saunas libertinos</Link></li>
                <li><Link to="/es/eventos-libertinos" className="hover:text-primary">9. Fiestas privadas y eventos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">💡 Consejos Prácticos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/es/primer-club-libertino" className="hover:text-primary">10. Tu primera vez en un club</Link></li>
                <li><Link to="/es/lexico-libertino-guia" className="hover:text-primary">11. Léxico libertino completo</Link></li>
                <li><Link to="/es/preguntas-principiantes" className="hover:text-primary">12. FAQ completa</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Definición */}
      <section id="definicion" className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">¿Qué es el libertinaje?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>El libertinaje designa un enfoque de la sexualidad basado en la <strong className="text-foreground">libertad consentida</strong> entre adultos. Lejos de la imagen de "debauche" que algunos asocian injustamente a esta práctica, el libertinaje moderno reposa sobre valores sólidos: respeto mutuo, comunicación transparente, consentimiento explícito y búsqueda compartida de placer.</p>
            <p>En España, el libertinaje ha conocido un auge particular gracias a la apertura cultural del país. Ciudades como <strong className="text-foreground">Barcelona, Madrid, Valencia, Sevilla e Ibiza</strong> albergan algunos de los clubes libertinos más prestigiosos de Europa, atrayendo a una comunidad internacional creciente.</p>
            <p>El término engloba una multitud de prácticas: desde el simple voyeurismo consentido hasta el intercambio completo entre parejas, pasando por el triolismo, el candaulismo o las veladas temáticas. Cada persona define sus propios límites y evoluciona a su ritmo, sin juicio ni presión.</p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Historia del libertinaje en España</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>España posee una historia rica y compleja con la sexualidad. Tras décadas de conservadurismo franquista, la <strong className="text-foreground">Transición democrática</strong> de los años 1970-80 liberó una energía cultural y social sin precedentes. La "Movida madrileña" simbolizó esta explosión de libertad que transformó profundamente las mentalidades españolas.</p>
            <p>Los primeros clubes libertinos modernos aparecieron en Barcelona y Madrid en los años 1990, influenciados por el modelo francés pero adaptados a la sensibilidad mediterránea. La Costa del Sol y las Islas Baleares, especialmente Ibiza, se convirtieron rápidamente en destinos libertinos de renombre internacional.</p>
            <p>Hoy, España cuenta con una red densa de establecimientos de calidad, desde clubes urbanos sofisticados hasta resorts costeros exclusivos. La comunidad libertina española se distingue por su carácter festivo, su apertura de espíritu y su sentido de la acogida.</p>
          </div>
        </div>
      </section>

      {/* Tipos */}
      <section id="tipos" className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Los diferentes tipos de libertinaje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Intercambismo (Swinging)", desc: "El intercambio de parejas es la forma más clásica. Dos parejas se encuentran y intercambian compañeros de forma consentida. Puede ser soft (caricias) o completo (hard)." },
              { title: "Candaulismo", desc: "Un miembro de la pareja disfruta viendo a su compañero/a con otra persona. El placer viene de la observación y de compartir la intimidad." },
              { title: "Triolismo", desc: "Experiencia a tres personas, generalmente una pareja y un/una invitado/a. Puede ser una experiencia puntual o regular." },
              { title: "Voyeurismo & Exhibicionismo", desc: "El placer de mirar o ser mirado. Muchos clubes ofrecen espacios dedicados a estas prácticas sin contacto directo." },
              { title: "Veladas temáticas", desc: "Fiestas con temas específicos: lencería, máscaras, BDSM light, pool party... Cada velada crea una atmósfera única." },
              { title: "Libertinaje digital", desc: "Plataformas como AKOKY permiten conectar, chatear y organizar encuentros de forma segura antes de pasar al encuentro físico." },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo empezar */}
      <section id="empezar" className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Cómo empezar en el libertinaje</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Dar el paso no se improvisa. Aquí tienes los <strong className="text-foreground">5 pasos esenciales</strong> para una primera experiencia exitosa:</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 my-6">
              {["Comunicar en pareja", "Informarse en AKOKY", "Elegir el lugar adecuado", "Definir vuestros límites", "Ir sin presión"].map((step, i) => (
                <div key={i} className="p-3 bg-card border border-border rounded-xl text-center">
                  <span className="text-2xl font-black text-primary">{i + 1}</span>
                  <p className="text-sm font-medium text-foreground mt-1">{step}</p>
                </div>
              ))}
            </div>
            <p>La comunicación es la piedra angular. Antes de cruzar la puerta de un club, asegúrate de que ambos están en la misma página. Consultad nuestras guías <Link to="/es/como-empezar-libertinaje" className="text-primary hover:underline">para principiantes</Link> y <Link to="/es/primer-club-libertino" className="text-primary hover:underline">primer club libertino</Link> para preparar vuestra primera salida.</p>
          </div>
        </div>
      </section>

      {/* Reglas de oro */}
      <section id="reglas" className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Las reglas de oro del libertinaje</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>El libertinaje no es un mundo sin reglas. Al contrario, funciona gracias a un <strong className="text-foreground">código ético estricto</strong> que garantiza la seguridad y el bienestar de todos:</p>
            <ul className="space-y-3 ml-4">
              <li>• <strong>Consentimiento explícito</strong>: nada sin un SÍ claro de todas las partes implicadas</li>
              <li>• <strong>Respeto del No</strong>: un rechazo siempre se acepta sin insistencia</li>
              <li>• <strong>Discreción absoluta</strong>: lo que pasa en el club se queda en el club</li>
              <li>• <strong>Higiene irreprochable</strong>: ducharse, usar protección, respetar las normas del lugar</li>
              <li>• <strong>Protección obligatoria</strong>: el preservativo es obligatorio para toda penetración</li>
              <li>• <strong>Comunicación constante</strong>: hablar con su pareja antes, durante y después</li>
              <li>• <strong>Sin alcohol excesivo</strong>: mantener el discernimiento en todo momento</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clubes en España */}
      <section id="clubes" className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Los clubes libertinos en España</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>España alberga algunos de los <strong className="text-foreground">clubes libertinos más prestigiosos de Europa</strong>. De Barcelona a Madrid, de Valencia a Sevilla, pasando por la mítica Ibiza, cada ciudad ofrece una experiencia única. AKOKY referencia más de 500 establecimientos verificados con fichas detalladas, fotos y opiniones auténticas de la comunidad.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
              {["Barcelona", "Madrid", "Valencia", "Sevilla", "Ibiza", "Costa del Sol"].map((city, i) => (
                <div key={i} className="p-4 bg-card border border-border rounded-xl text-center font-medium text-foreground hover:border-primary transition-colors">
                  📍 {city}
                </div>
              ))}
            </div>
            <p>Descubre todo el directorio en nuestra sección <Link to="/es/clubbing" className="text-primary hover:underline">Clubbing España</Link> y encuentra el establecimiento perfecto para tu primera experiencia o tus próximas aventuras.</p>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);
export default GuideUltimeGuideEs;
