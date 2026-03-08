import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Como participar nos eventos AKOKY?", answer: "Regista-te no AKOKY, navega pelo calendário de eventos e reserva o teu lugar diretamente online. Alguns eventos requerem estatuto VIP." },
  { question: "Os eventos são abertos a principiantes?", answer: "Sim. Muitos eventos são especificamente concebidos para acolher novos membros. São claramente identificados no calendário." },
  { question: "Pode-se ir sozinho a um evento?", answer: "Sim. Solteiros e casais são bem-vindos. A composição varia segundo o evento — consulta os detalhes na ficha." },
  { question: "Existem eventos em Portugal?", answer: "Sim. O AKOKY organiza e promove eventos em Lisboa, Porto, Algarve e outras regiões portuguesas, além de eventos em toda a Europa." },
  { question: "Qual é o dress code dos eventos?", answer: "O dress code varia por evento. As noitadas temáticas exigem vestuário específico (lingerie, máscara, etc.). Consulta sempre a ficha do evento." },
  { question: "Os eventos VIP valem o preço?", answer: "Os eventos VIP oferecem experiências exclusivas: locais premium, catering, anfitriões dedicados. São os eventos mais bem avaliados da comunidade." },
];

const EvenementsGuidePt = () => (
  <>
    <MetaTags title="Eventos Libertinos em Portugal 2026 | Calendário AKOKY" description="300+ eventos libertinos por mês: noitadas exclusivas, fins de semana temáticos, encontros privados em Lisboa, Porto e em toda a Europa." canonical="https://akoky.com/pt/eventos-libertinos-guia" lang="pt" />
    <HreflangTags slug="eventos-libertinos-guia" />
    <ContentPageLayout lang="pt" title="Eventos Libertinos em Portugal 2026 | Calendário AKOKY" description="300+ eventos libertinos por mês em Portugal e na Europa." canonical="https://akoky.com/pt/eventos-libertinos-guia" heroTitle="Eventos Libertinos" heroSubtitle="300+ eventos libertinos por mês em Portugal e na Europa" heroType="cover" heroImage="/images/pt-eventos-cover.webp" breadcrumb={[{ label: "Eventos Libertinos" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Maior Calendário de Eventos Libertinos da Europa</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY agrega mais de 300 eventos libertinos por mês em toda a Europa: noitadas em clubes, fins de semana temáticos, cruzeiros, festas privadas e encontros exclusivos. Em Portugal, a cena é particularmente ativa em Lisboa, Porto e no Algarve durante o verão, com eventos que atraem casais de toda a Península Ibérica.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipos de Eventos Disponíveis</h2>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Noitadas em Clubes</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">As noitadas em <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> são o formato mais clássico: DJ, bar, espaços de intimidade e uma atmosfera festiva. Em Portugal, as noitadas de sexta e sábado são as mais concorridas, com temas rotativos (lingerie, masquerade, fetiche).</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Fins de Semana Temáticos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Escapadelas de 2-3 dias em locais premium: quintas no Douro, resorts no Algarve, villas privadas. Incluem atividades diurnas (spa, piscina, degustações) e noitadas libertinas exclusivas.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Apéritifs Libertinos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Encontros ao final da tarde em bares selecionados, perfeitos para conhecer outros casais num ambiente descontraído. Sem pressão, sem obrigação — apenas convivialidade e descoberta mútua.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Eventos VIP Exclusivos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Reservados aos membros <Link to="/pt/vip" className="text-primary hover:underline">VIP AKOKY</Link>: festas em iates, noitadas em palacetes, experiências gastronómicas libertinas. O nível mais elevado da experiência libertina europeia.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventos em Portugal: Destinos de Destaque</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Lisboa:</strong> Capital com a cena mais ativa — clubes no Bairro Alto, eventos no Cais do Sodré, festas privadas em Cascais</li>
            <li><strong>Porto:</strong> Ambiente mais intimista com clubes elegantes e eventos regulares no centro histórico</li>
            <li><strong>Algarve:</strong> Destino de verão por excelência — pool parties, beach events e noitadas em resorts</li>
            <li><strong>Douro:</strong> Fins de semana premium em quintas vinícolas com degustações e noitadas exclusivas</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Como Reservar e Participar</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">No AKOKY, cada evento tem uma ficha detalhada: data, local, dress code, tipo de público aceite, preço e avaliações de edições anteriores. A reserva é feita diretamente na plataforma com confirmação instantânea. Para os eventos mais populares, recomendamos reservar com antecedência — alguns esgotam em poucas horas.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Descobre os Próximos Eventos</h3>
            <p className="text-muted-foreground mb-4">Consulta o calendário AKOKY e reserva o teu lugar nos melhores eventos libertinos.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Ver Calendário</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default EvenementsGuidePt;
