import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Como funciona o Jogo das Seis Chaves?", answer: "Seis chaves estão escondidas em diferentes secções da plataforma AKOKY. Encontra todas as seis para validar a tua participação e concorrer ao grande prémio." },
  { question: "Onde estão escondidas as chaves?", answer: "As chaves estão espalhadas por toda a plataforma: perfis, eventos, clubes, artigos do blog, jogos. Explorar o AKOKY é a chave para as encontrar." },
  { question: "Qual é o prémio?", answer: "O grande prémio é uma semana completa no RIAD5 Cap d'Agde, avaliada em 4.500€. Inclui alojamento e acesso a eventos exclusivos." },
  { question: "Posso participar de Portugal?", answer: "Sim. O concurso é aberto a todos os membros AKOKY na Europa. O prémio inclui a estadia mas não o transporte." },
  { question: "Até quando posso participar?", answer: "Consulta as datas oficiais na página do concurso. O período de participação é limitado — não deixes para o último dia!" },
];

const ConcoursClesGuidePt = () => (
  <>
    <MetaTags title="O Jogo das Seis Chaves AKOKY 2026 | Ganha uma Semana em Cap d'Agde" description="Encontra 6 chaves escondidas no AKOKY e ganha uma semana no RIAD5 Cap d'Agde (4.500€). Caça ao tesouro digital na maior plataforma libertina." canonical="https://akoky.com/pt/jogo-seis-chaves" lang="pt" />
    <HreflangTags slug="jogo-seis-chaves" />
    <ContentPageLayout lang="pt" title="O Jogo das Seis Chaves AKOKY 2026 | Ganha uma Semana em Cap d'Agde" description="Encontra 6 chaves escondidas no AKOKY e ganha uma semana no RIAD5 Cap d'Agde." canonical="https://akoky.com/pt/jogo-seis-chaves" heroTitle="O Jogo das Seis Chaves" heroSubtitle="Explora o AKOKY, encontra 6 chaves e ganha uma semana no RIAD5 Cap d'Agde" heroType="cover" heroImage="/images/concours/six-cles.webp" breadcrumb={[{ label: "Concurso AKOKY", href: "/pt/concurso-akoky-2026" }, { label: "O Jogo das Seis Chaves" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Uma Caça ao Tesouro Digital no AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O Jogo das Seis Chaves é o evento gamificado estrela do AKOKY em 2026. O conceito é simples mas envolvente: seis chaves virtuais estão escondidas em diferentes secções da plataforma. A tua missão é explorar o AKOKY, descobrir cada chave e validar a tua participação para concorrer ao grande prémio — uma semana completa no lendário RIAD5 de Cap d'Agde.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Grande Prémio: Uma Semana no RIAD5 Cap d'Agde</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Cap d'Agde é o destino libertino mais famoso do mundo. O RIAD5 é um dos alojamentos mais exclusivos do Village Naturiste, com piscina privada, rooftop e acesso direto às melhores festas da temporada. O prémio inclui 7 noites de alojamento para duas pessoas, avaliado em 4.500€.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Como Participar: Passo a Passo</h2>
          <ol className="list-decimal list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Regista-te no AKOKY</strong> — a participação é gratuita</li>
            <li><strong>Explora a plataforma</strong> — navega pelos <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes</Link>, <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link>, <Link to="/pt/jogos" className="text-primary hover:underline">jogos</Link> e conteúdos</li>
            <li><strong>Encontra as 6 chaves</strong> — cada chave tem um código único</li>
            <li><strong>Valida os códigos</strong> — introduz os 6 códigos na página de validação</li>
            <li><strong>Aguarda o sorteio</strong> — entre todos os participantes que encontraram as 6 chaves</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Dicas para Encontrar as Chaves</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>Explora cada secção da plataforma sem exceção</li>
            <li>Lê os artigos do blog com atenção — uma chave pode estar escondida num texto</li>
            <li>Consulta os perfis de clubes e as fichas de eventos</li>
            <li>Experimenta todas as funcionalidades: <Link to="/pt/live" className="text-primary hover:underline">lives</Link>, jogos, chat</li>
            <li>Partilha dicas com a comunidade — a entre-ajuda é valorizada!</li>
          </ul>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Começa a Caça ao Tesouro</h3>
            <p className="text-muted-foreground mb-4">Regista-te gratuitamente e começa a explorar o AKOKY para encontrar as 6 chaves.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Participar Agora</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ConcoursClesGuidePt;
