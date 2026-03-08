import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cómo participar en el concurso de las seis llaves AKOKY?", answer: "Debes encontrar las 6 llaves escondidas en akoky.com (5 llaves de marzo a julio 2026) y app.akoky.com (1 llave de agosto a diciembre 2026). Anota los códigos asociados a cada llave y envíalos con tu pseudónimo y email." },
  { question: "¿Cuál es el premio del concurso AKOKY?", answer: "El ganador recibe una semana completa (7 días / 6 noches) en el RIAD5 - Cap d'Agde, estancia premium valorada en 4.500€, válida hasta el 31 de diciembre de 2027." },
  { question: "¿Cuándo empieza el concurso de las seis llaves?", answer: "El concurso comienza oficialmente el 1 de marzo de 2026 con la publicación de la primera llave en akoky.com." },
  { question: "¿Se necesita una cuenta AKOKY para participar?", answer: "Una cuenta AKOKY es obligatoria para acceder a la 6ª llave en app.akoky.com. Las 5 primeras son accesibles a todos." },
  { question: "¿Cómo están escondidas las llaves?", answer: "Cada llave está oculta en una página específica y se revela mediante una interacción del usuario (hover, clic, scroll, etc.). Una vez revelada, muestra un código numérico único." },
  { question: "¿Cuántos ganadores hay?", answer: "Hay un único ganador. El primer participante que envíe los 6 códigos correctos gana la estancia en el RIAD5." },
  { question: "¿El premio es intercambiable?", answer: "No. El premio es único, no intercambiable, no monetizable y no transferible. Debe utilizarse antes del 31 de diciembre de 2027." },
  { question: "¿Dónde está la 6ª llave?", answer: "La 6ª y última llave está disponible exclusivamente en app.akoky.com, para usuarios conectados, de agosto a diciembre de 2026." },
  { question: "¿Se puede participar desde el extranjero?", answer: "Sí, el concurso está abierto a todos los participantes mayores de edad. Sin embargo, el ganador deberá desplazarse al RIAD5 - Cap d'Agde (Francia). Los gastos de transporte no están incluidos." },
  { question: "¿Cómo validar mi participación?", answer: "Una vez encontradas las 6 llaves, introduce la combinación en el orden exacto en la página del cofre. Si se abre, tu participación será verificada manualmente por nuestro equipo." },
];

const TIMELINE = [
  { month: "Marzo 2026", key: "Llave n°1", emoji: "🔑", desc: "La caza comienza. La primera llave está oculta en una página pública de akoky.com. Puede esconderse en un texto, una sección secundaria o un detalle que muchos pasarán por alto.", status: "Por descubrir" },
  { month: "Abril 2026", key: "Llave n°2", emoji: "🔑", desc: "Segunda llave. La presión sube. Siempre en akoky.com. Nada se señala, nada se anuncia. Los que exploran superficialmente se lo perderán.", status: "Por descubrir" },
  { month: "Mayo 2026", key: "Llave n°3", emoji: "🔑", desc: "A mitad de camino, solo los más metódicos siguen en pie. Páginas de clubes, regiones, FAQ, contenidos informativos… Cada página puede esconder una cifra decisiva.", status: "Por descubrir" },
  { month: "Junio 2026", key: "Llave n°4", emoji: "🔑", desc: "Última llave en el sitio público. Después de esta, no habrá margen de error. Registra todo akoky.com. Absolutamente todo.", status: "Por descubrir" },
  { month: "Julio 2026", key: "Llave n°5", emoji: "🔑", desc: "El juego cambia. Esta llave solo es accesible en app.akoky.com, tras iniciar sesión. Estás cerca. Muy cerca.", status: "App requerida" },
  { month: "Agosto – Diciembre 2026", key: "Llave n°6", emoji: "🔑", desc: "Llave final exclusiva. Solo en app.akoky.com, para usuarios conectados. ⚠️ Aparece discretamente cada noche, de lunes a domingo, entre las 18:00 y las 00:00. Sin señal. El primero que la encuentre y abra el cofre gana inmediatamente el gran premio.", status: "Ventana crítica · Solo App" },
];

const RULES = [
  { icon: "📅", title: "Duración del concurso", content: "Del 1 de marzo de 2026 hasta que se declare un ganador válido o, como máximo, el 31 de diciembre de 2026." },
  { icon: "👤", title: "Condiciones de participación", list: ["Ser mayor de edad (18 años mínimo)", "Poseer una cuenta AKOKY (requerida para la 6ª llave)", "Proporcionar un pseudónimo AKOKY y un email válido", "Encontrar las 6 llaves y anotar sus códigos exactos"] },
  { icon: "🏆", title: "Atribución del premio", content: "Un solo ganador. El primer participante que envíe los 6 códigos correctos con toda la información requerida gana el premio." },
  { icon: "🎁", title: "Naturaleza del premio", list: ["1 semana (7 días / 6 noches) en el RIAD5 - Cap d'Agde", "Valor estimado: 4.500€", "Validez: hasta el 31 de diciembre de 2027", "Premio único, no intercambiable, no monetizable", "Los gastos de transporte no están incluidos"] },
  { icon: "⚠️", title: "Fraude y descalificación", content: "AKOKY se reserva el derecho de descalificar cualquier intento de fraude, manipulación, uso de bots o comportamiento contrario al espíritu del concurso." },
  { icon: "📧", title: "Contacto", content: "Para cualquier pregunta: contact@akoky.com" },
  { icon: "🔒", title: "Datos personales", content: "Los datos recopilados se utilizan únicamente en el marco de este concurso y conforme a nuestra política de privacidad." },
  { icon: "📜", title: "Aceptación del reglamento", content: "La participación implica la aceptación plena del presente reglamento. AKOKY se reserva el derecho de modificarlo en caso de fuerza mayor." },
];

const ConcoursClesGuideEs = () => (
  <>
    <MetaTags title="El Juego de las Seis Llaves AKOKY 2026 | Gana una Semana en Cap d'Agde" description="Encuentra las 6 llaves escondidas en AKOKY para ganar una semana en el RIAD5 Cap d'Agde (4.500€). Concurso gratuito, 1 ganador." canonical="https://akoky.com/es/juego-seis-llaves" lang="es" />
    <HreflangTags slug="juego-seis-llaves" />
    <ContentPageLayout lang="es" title="El Juego de las Seis Llaves AKOKY 2026 | Gana una Semana en Cap d'Agde" description="Encuentra las 6 llaves escondidas en AKOKY para ganar una semana en el RIAD5 Cap d'Agde (4.500€)." canonical="https://akoky.com/es/juego-seis-llaves" heroTitle="El Juego de las Seis Llaves" heroSubtitle="Explora AKOKY, encuentra las 6 llaves y gana una semana en el RIAD5 Cap d'Agde — valor 4.500€" heroImage="/images/concours/six-cles.webp" breadcrumb={[{ label: "Concursos", href: "/es/concurso-akoky-2026" }, { label: "El Juego de las Seis Llaves" }]} faq={FAQ} schema={{ "@context": "https://schema.org", "@type": "Event", name: "El Juego de las Seis Llaves AKOKY 2026", url: "https://akoky.com/es/juego-seis-llaves", startDate: "2026-03-01", endDate: "2026-12-31", location: { "@type": "VirtualLocation", url: "https://akoky.com" }, organizer: { "@type": "Organization", name: "AKOKY", url: "https://akoky.com" }, offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" } }}>

      {/* Badge + Premio */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 text-sm font-semibold text-primary mb-8">
            <span className="text-lg">🎮</span>
            <span>Concurso Comunitario 2026</span>
          </div>
          <div className="inline-flex items-center gap-4 bg-primary/10 border-2 border-primary rounded-2xl px-8 py-5 mb-8">
            <span className="text-5xl drop-shadow-lg">🏆</span>
            <span className="text-4xl font-black text-primary">+ 4 500 €</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Una semana completa en el <strong className="text-foreground">RIAD5 – Cap d'Agde</strong>, estancia premium de lujo para el primer cazador que encuentre las 6 llaves.</p>
        </div>
      </section>

      {/* Cronología */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">📅 Cronología de las Llaves</h2>
          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                <span className="text-3xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-foreground">{item.key}</h3>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{item.status}</span>
                  </div>
                  <p className="text-xs text-primary font-semibold mb-1">{item.month}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reglamento */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">📜 Reglamento Oficial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RULES.map((rule, i) => (
              <div key={i} className="p-5 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{rule.icon}</span>
                  <h3 className="font-bold text-foreground">{rule.title}</h3>
                </div>
                {rule.content && <p className="text-muted-foreground text-sm leading-relaxed">{rule.content}</p>}
                {rule.list && (
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {rule.list.map((item, j) => <li key={j}>• {item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para la caza? 🗝️</h2>
          <p className="text-muted-foreground mb-6">Comienza a explorar AKOKY ahora. Las llaves están escondidas… ¿las encontrarás?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg hover:scale-105 transition-all">Crear mi cuenta gratis</a>
            <Link to="/es/concurso-akoky-2026" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all">Todos los concursos</Link>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);
export default ConcoursClesGuideEs;
