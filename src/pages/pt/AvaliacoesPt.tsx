import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "As avaliações no AKOKY são autênticas?", answer: "Sim. Todas as avaliações estão ligadas a perfis verificados. Isto garante a sua autenticidade e previne manipulações." },
  { question: "Como deixar uma avaliação?", answer: "Acede à tua conta AKOKY, visita a ficha do clube ou evento e utiliza o formulário de avaliação. As avaliações são moderadas antes da publicação." },
];

const AvaliacoesPt = () => (
  <>
    <MetaTags
      title="AKOKY Avaliações | Avaliações da Comunidade Libertina"
      description="Lê as avaliações da comunidade AKOKY: experiências reais, testemunhos verificados e avaliações de clubes e eventos."
      canonical="https://akoky.com/pt/avaliacoes"
      lang="pt"
    />
    <HreflangTags slug="avaliacoes" />
    <ContentPageLayout
      lang="pt"
      title="AKOKY Avaliações | Avaliações da Comunidade Libertina"
      description="Lê as avaliações da comunidade AKOKY: experiências reais, testemunhos verificados e avaliações de clubes e eventos."
      canonical="https://akoky.com/pt/avaliacoes"
      heroTitle="Avaliações e Testemunhos AKOKY"
      heroSubtitle="Testemunhos reais e verificados da comunidade libertina europeia."
      breadcrumb={[{ label: "Avaliações e Testemunhos AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Por que Confiamos nas Avaliações</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">No AKOKY, as avaliações não são anónimas: estão ligadas a perfis verificados. Isto garante a sua autenticidade e previne manipulações. Quando lês uma avaliação no AKOKY, sabes que vem de uma pessoa real que viveu a experiência.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Testemunhos dos Membros</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Casais</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Descobre como casais de todo Portugal encontraram no AKOKY o espaço que procuravam para explorar a sua vida íntima de forma segura e autêntica.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Solteiros</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">A comunidade AKOKY é também vibrante para os solteiros. Homens e mulheres que encontraram encontros autênticos, amizades duradouras e uma comunidade onde se sentem bem-vindos.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Avaliações de Clubes</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Cada clube referenciado no AKOKY acumula avaliações dos membros que o visitaram. Uma média de pontuação, comentários detalhados sobre a atmosfera, a limpeza, o pessoal e o nível dos visitantes.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Avaliações de Eventos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Após cada evento AKOKY, os participantes podem deixar as suas impressões. Atmosfera, organização, qualidade dos participantes, relação qualidade-preço: todos os detalhes de que precisas para escolher o teu próximo evento.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Partilha a Tua Experiência</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Tiveste uma experiência positiva num clube, evento ou com um membro da comunidade? Partilha o teu testemunho no AKOKY. A tua opinião ajuda toda a comunidade a tomar melhores decisões.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AvaliacoesPt;
