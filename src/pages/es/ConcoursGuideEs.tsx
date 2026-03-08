import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "¿Cómo participar en los concursos AKOKY?", answer: "Debes ser miembro inscrito en AKOKY. Cada concurso tiene sus propias reglas de participación detalladas en su página dedicada. La mayoría son gratuitos y abiertos a todos los miembros activos." },
  { question: "¿Los concursos AKOKY son realmente gratuitos?", answer: "Sí, todos los concursos organizados por AKOKY son 100% gratuitos. No se requiere ninguna compra ni pago para participar." },
  { question: "¿Puedo usar mi apadrinamiento para los concursos?", answer: "Algunos concursos incluyen bonos vinculados al programa de apadrinamiento AKOKY: participaciones múltiples, puntos bonus, acceso prioritario." },
  { question: "¿Cuáles son los premios?", answer: "Los premios varían: estancias en clubes libertinos premium, suscripciones VIP AKOKY, invitaciones a eventos privados, cofres regalo y experiencias únicas." },
  { question: "¿Cómo se designan los ganadores?", answer: "Según las modalidades de cada concurso: sorteo, rendimiento, voto comunitario o jurado AKOKY." },
  { question: "¿Se pueden participar en varios concursos a la vez?", answer: "Sí, puedes participar en tantos concursos AKOKY como desees simultáneamente." },
  { question: "¿Mis datos personales están protegidos?", answer: "Sí. AKOKY respeta estrictamente el RGPD y nunca comparte tus datos con terceros." },
];

const ConcoursGuideEs = () => (
  <>
    <MetaTags title="Concursos AKOKY 2026 – Gana Experiencias Libertinas Exclusivas" description="Participa gratuitamente en los concursos AKOKY y gana estancias en los mejores clubes libertinos de Europa, suscripciones VIP y experiencias únicas." canonical="https://akoky.com/es/concurso-akoky-2026" lang="es" />
    <HreflangTags slug="concurso-akoky-2026" />
    <ContentPageLayout lang="es" title="Concursos AKOKY 2026 – Gana Experiencias Libertinas Exclusivas" description="Participa gratuitamente en los concursos AKOKY y gana experiencias únicas." canonical="https://akoky.com/es/concurso-akoky-2026" heroTitle="Concursos AKOKY" heroSubtitle="Participa gratuitamente y gana estancias, suscripciones VIP y experiencias libertinas exclusivas." heroImage="/images/concours/six-cles.webp" breadcrumb={[{ label: "Concursos" }]} faq={FAQ}>

      {/* Concurso en curso */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto space-y-20">

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🔥</span>
              <h2 className="text-3xl font-black text-foreground font-display">Concurso en curso</h2>
            </div>

            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/40 bg-card group hover:border-primary transition-all">
              <div className="relative aspect-[21/9] overflow-hidden">
                <img src="/images/concours/six-cles.webp" alt="El Juego de las Seis Llaves AKOKY 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">🔥 EN CURSO</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-primary/80 text-sm font-semibold block mb-2">🎮 Concurso Comunitario 2026</span>
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-3">🗝️ El Juego de las Seis Llaves</h3>
                  <p className="text-gray-300 text-sm md:text-base max-w-2xl">Explora AKOKY, encuentra las <strong className="text-white">6 llaves escondidas</strong> y gana una semana en el <strong className="text-primary">RIAD5 Cap d'Agde</strong></p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-3 bg-primary/10 border border-primary rounded-xl px-5 py-3">
                    <span className="text-3xl">🏆</span>
                    <div>
                      <p className="text-xs text-muted-foreground">Gran Premio</p>
                      <p className="text-xl font-black text-primary">+ 4 500 €</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>🗓️</span><span>1 de marzo → 31 de diciembre 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>👤</span><span>Abierto a todos los miembros</span>
                  </div>
                </div>
                <Link to="/es/juego-seis-llaves" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-black text-lg hover:scale-105 transition-all">Descubrir el concurso →</Link>
              </div>
            </div>
          </div>

          {/* Premios AKOKY */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">🎁 Los Premios AKOKY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🏨", title: "Estancias Premium", desc: "Estancias en clubes libertinos de lujo y resorts exclusivos en Francia y España." },
                { icon: "⭐", title: "Suscripciones VIP", desc: "Acceso ilimitado a todas las funcionalidades premium de AKOKY durante 12 meses." },
                { icon: "🎭", title: "Experiencias Únicas", desc: "Invitaciones a eventos privados exclusivos, veladas temáticas y fines de semana inolvidables." },
              ].map((prize, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded-xl text-center">
                  <span className="text-4xl mb-3 block">{prize.icon}</span>
                  <h3 className="font-bold text-foreground mb-2">{prize.title}</h3>
                  <p className="text-muted-foreground text-sm">{prize.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cómo participar */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">📋 ¿Cómo participar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Crea tu cuenta", desc: "Regístrate gratuitamente en AKOKY en menos de 2 minutos." },
                { step: "2", title: "Elige tu concurso", desc: "Explora los concursos disponibles y lee las reglas." },
                { step: "3", title: "Participa", desc: "Sigue las instrucciones específicas de cada concurso." },
                { step: "4", title: "¡Gana!", desc: "Consulta los resultados y recoge tu premio." },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-card border border-border rounded-xl text-center">
                  <span className="text-2xl font-black text-primary">{item.step}</span>
                  <h3 className="font-bold text-foreground mt-2 mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </ContentPageLayout>
  </>
);
export default ConcoursGuideEs;
