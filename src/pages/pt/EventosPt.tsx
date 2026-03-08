import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Como participar nos eventos AKOKY?", answer: "Regista-te no AKOKY, navega pelo calendário de eventos e reserva o teu lugar diretamente online. Alguns eventos requerem estatuto VIP." },
  { question: "Os eventos são abertos a principiantes?", answer: "Sim. Muitos eventos são especificamente concebidos para receber os novos membros com calor. São claramente identificados no calendário." },
  { question: "Pode-se ir sozinho/a a um evento?", answer: "Sim. Solteiros e casais são bem-vindos. A composição das noitadas varia segundo o evento." },
];

const EventosPt = () => (
  <>
    <MetaTags
      title="Eventos Libertinos em Portugal 2026 | 300+ Noitadas e Fins de Semana — AKOKY"
      description="Descobre 300+ eventos libertinos por mês: noitadas exclusivas, fins de semana temáticos, encontros privados em Lisboa, Porto e em todo Portugal."
      canonical="https://akoky.com/pt/eventos"
      lang="pt"
    />
    <HreflangTags slug="eventos" />
    <ContentPageLayout
      lang="pt"
      title="Eventos Libertinos em Portugal 2026 | 300+ Noitadas e Fins de Semana — AKOKY"
      description="Descobre 300+ eventos libertinos por mês: noitadas exclusivas, fins de semana temáticos, encontros privados em Lisboa, Porto e em todo Portugal."
      canonical="https://akoky.com/pt/eventos"
      heroTitle="Eventos Libertinos em Portugal"
      heroSubtitle="300+ eventos por mês: noitadas exclusivas, fins de semana temáticos, encontros privados. Reserva o teu lugar no AKOKY."
      breadcrumb={[{ label: "Eventos Libertinos em Portugal" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Maior Calendário de Eventos Libertinos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY organiza e publica mais de 300 eventos libertinos por mês em toda a Europa. Em Portugal encontrarás noitadas em clube, aperitivos libertinos afterwork, fins de semana temáticos e encontros privados nas principais cidades.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipos de Eventos</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎭 Noitadas em Clube</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">As noitadas em clubes libertinos são o formato mais tradicional. Com atmosfera festiva, música, bar e múltiplos espaços temáticos, são perfeitas para descobrir o mundo libertino ou ampliar o teu círculo social.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🥂 Aperitivos Libertinos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Os aperitivos libertinos são encontros informais, geralmente num bar privado ou em casa, para conhecer outros casais ou solteiros numa atmosfera descontraída. Sem pressão, sem obrigação — o formato ideal para principiantes.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🌊 Fins de Semana Temáticos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Escapadas de fim de semana em villas privadas, hotéis ou destinos de praia como o Algarve. Estes eventos combinam convivência, atividades diurnas e noitadas libertinas. Os lugares são limitados, reserva com antecedência.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Encontros Privados</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Encontros mais íntimos organizados em casa particular, com um número reduzido de participantes selecionados. O acesso requer verificação prévia e muitas vezes convite de um membro da comunidade.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventos para Principiantes</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY organiza regularmente eventos especificamente pensados para os recém-chegados ao libertinismo. Claramente identificados no calendário, caracterizam-se por uma atmosfera acolhedora, sem pressão.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Como Reservar?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos os eventos AKOKY são reservados online diretamente na plataforma. Cria a tua conta gratuita, explora o calendário de eventos perto de ti e reserva o teu lugar com poucos cliques.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default EventosPt;
