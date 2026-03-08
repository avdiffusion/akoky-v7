import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Os concursos são gratuitos?", answer: "Sim. A participação nos concursos AKOKY é totalmente gratuita para todos os membros registados." },
  { question: "Como sou notificado se ganhar?", answer: "Os vencedores são notificados por email e através da plataforma AKOKY. Os resultados são também publicados nas redes sociais oficiais." },
  { question: "Os prémios são reais?", answer: "Absolutamente. Todos os prémios são reais e entregues conforme descrito. Incluem estadias, experiências VIP e produtos exclusivos." },
  { question: "Posso participar a partir de Portugal?", answer: "Sim. Todos os concursos AKOKY são abertos a membros de todos os países europeus, incluindo Portugal." },
  { question: "Quantos concursos há por ano?", answer: "O AKOKY organiza vários concursos ao longo do ano, com prémios sazonais e eventos especiais. Consulta regularmente o calendário." },
];

const ConcoursGuidePt = () => (
  <>
    <MetaTags title="Concurso AKOKY 2026 | Participa e Ganha Prémios Exclusivos" description="Participa nos concursos exclusivos AKOKY e ganha experiências únicas: estadias premium, acesso VIP, produtos exclusivos. Participação gratuita." canonical="https://akoky.com/pt/concurso-akoky-2026" lang="pt" />
    <HreflangTags slug="concurso-akoky-2026" />
    <ContentPageLayout lang="pt" title="Concurso AKOKY 2026 | Participa e Ganha Prémios Exclusivos" description="Participa nos concursos exclusivos AKOKY." canonical="https://akoky.com/pt/concurso-akoky-2026" heroTitle="Concurso AKOKY 2026" heroSubtitle="Participa e ganha prémios exclusivos reservados à comunidade AKOKY" heroType="cover" heroImage="/images/concours/six-cles.webp" breadcrumb={[{ label: "Concurso AKOKY 2026" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Concursos Exclusivos AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY organiza regularmente concursos exclusivos para a sua comunidade. Em 2026, os prémios incluem estadias premium em Cap d'Agde, experiências VIP em clubes europeus, subscrições premium e produtos de merchandising exclusivo. A participação é sempre gratuita — basta ser membro registado.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Grande Concurso 2026: O Jogo das Seis Chaves</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O evento estrela de 2026 é o <Link to="/pt/jogo-seis-chaves" className="text-primary hover:underline">Jogo das Seis Chaves</Link>: encontra 6 chaves escondidas na plataforma AKOKY e ganha uma semana no RIAD5 Cap d'Agde, avaliada em 4.500€. Uma caça ao tesouro digital que te leva a explorar todas as funcionalidades do AKOKY.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Como Participar</h2>
          <ol className="list-decimal list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>Regista-te gratuitamente no AKOKY</li>
            <li>Consulta a página de concursos para ver os concursos ativos</li>
            <li>Segue as instruções específicas de cada concurso</li>
            <li>Aguarda o sorteio ou a avaliação dos resultados</li>
            <li>Os vencedores são contactados diretamente</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Prémios Disponíveis em 2026</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Grande Prémio:</strong> Uma semana no RIAD5 Cap d'Agde (4.500€)</li>
            <li><strong>Prémios VIP:</strong> Subscrições premium AKOKY de 12 meses</li>
            <li><strong>Experiências:</strong> Entradas VIP para eventos exclusivos na Europa</li>
            <li><strong>Merchandising:</strong> Produtos exclusivos da coleção AKOKY Premium</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-4">Não percas as oportunidades! Regista-te no AKOKY e ativa as notificações para ser informado de cada novo concurso. Consulta também os <Link to="/pt/eventos" className="text-primary hover:underline">eventos AKOKY</Link> para experiências presenciais em Portugal.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Participa Agora</h3>
            <p className="text-muted-foreground mb-4">Regista-te gratuitamente e acede a todos os concursos AKOKY.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Criar Conta Gratuita</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ConcoursGuidePt;
