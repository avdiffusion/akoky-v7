import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Os jogos AKOKY são gratuitos?", answer: "Alguns jogos são acessíveis gratuitamente a todos os membros. Outros conteúdos estão reservados aos membros VIP." },
  { question: "São adequados para principiantes?", answer: "Absolutamente. Os jogos AKOKY são pensados para ser acessíveis e divertidos, qualquer que seja o teu nível de experiência." },
];

const JogosPt = () => (
  <>
    <MetaTags
      title="Jogos Libertinos AKOKY | Animações e Atividades para Noitadas"
      description="Descobre os nossos jogos libertinos para animar as tuas noitadas: cartas picantes, desafios, animações interativas. Lúdico, convivial e respeitoso."
      canonical="https://akoky.com/pt/jogos"
      lang="pt"
    />
    <HreflangTags slug="jogos" />
    <ContentPageLayout
      lang="pt"
      title="Jogos Libertinos AKOKY | Animações e Atividades para Noitadas"
      description="Descobre os nossos jogos libertinos para animar as tuas noitadas: cartas picantes, desafios, animações interativas. Lúdico, convivial e respeitoso."
      canonical="https://akoky.com/pt/jogos"
      heroTitle="Jogos Libertinos AKOKY"
      heroSubtitle="Anima as tuas noitadas com os nossos jogos exclusivos: roleta, dado, verdade ou desafio e mais."
      breadcrumb={[{ label: "Jogos Libertinos AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Por que Jogar numa Noitada Libertina?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Os jogos são uma excelente forma de quebrar o gelo, criar cumplicidade e explorar desejos de forma lúdica e sem pressão. No AKOKY Space encontrarás uma seleção de jogos pensados especificamente para a comunidade libertina, sempre com o consentimento e o respeito como valores fundamentais.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Os Nossos Jogos</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎯 Roleta das Penitências Libertinas</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Uma roleta digital com penitências personalizáveis segundo o nível de audácia do grupo. Do mais suave ao mais ousado, cada participante escolhe o seu nível de conforto.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎲 Dado do Desejo AKOKY</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Um dado especial com diferentes faces: ações, zonas do corpo, intensidades. Lança o dado e descobre o que o destino te reserva. Um clássico reinventado com o toque AKOKY.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">❓ Verdade ou Desafio Libertino</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">A versão adulta do clássico jogo. Perguntas ousadas e desafios sensuais elaborados com cuidado para criar momentos de cumplicidade e descoberta.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💑 Desafios de Casal</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Desafios especialmente concebidos para casais que querem explorar juntos: comunicação, confiança, criatividade e sensualidade. Uma viagem de descoberta mútua com estrutura lúdica.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Regras Fundamentais dos Jogos AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Todos os jogos AKOKY se baseiam nos mesmos princípios: consentimento explícito antes de cada ação, direito absoluto de passar sem explicações, respeito dos limites de cada participante. Jogar deve ser sempre uma fonte de prazer, nunca de pressão.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default JogosPt;
