import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "O que significa soft swap?", answer: "O soft swap indica práticas sem penetração com outros parceiros. Inclui carícias e jogos sensuais, mantendo uma certa exclusividade sexual dentro do casal." },
  { question: "O que é o mélangisme?", answer: "O mélangisme é uma prática onde várias pessoas ou casais partilham momentos íntimos no mesmo espaço sem necessariamente trocar de parceiros." },
  { question: "O que é uma private party?", answer: "Uma private party é uma noitada libertina organizada em local privado (apartamento, villa), ao contrário das noitadas em clubes. O acesso é por convite." },
];

const LexicoPt = () => (
  <>
    <MetaTags
      title="Léxico Libertino 2026 | 200+ Termos Definidos de A a Z — AKOKY"
      description="Dicionário libertino completo: troca de casais, mélangisme, candaulismo, triolismo e mais. 200+ definições para dominar o vocabulário libertino."
      canonical="https://akoky.com/pt/lexico-libertino"
      lang="pt"
    />
    <HreflangTags slug="lexico-libertino" />
    <ContentPageLayout
      lang="pt"
      title="Léxico Libertino 2026 | 200+ Termos Definidos de A a Z — AKOKY"
      description="Dicionário libertino completo: troca de casais, mélangisme, candaulismo, triolismo e mais. 200+ definições para dominar o vocabulário libertino."
      canonical="https://akoky.com/pt/lexico-libertino"
      heroTitle="Léxico Libertino"
      heroSubtitle="O dicionário completo da comunidade libertina: 200+ termos explicados de forma acessível."
      breadcrumb={[{ label: "Léxico Libertino" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Dicionário Libertino de Referência</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">No mundo libertino existe um vocabulário específico que pode parecer impenetrável para os recém-chegados. Este léxico foi desenvolvido para ajudar qualquer pessoa — principiantes ou experientes — a compreender e utilizar os termos usados na comunidade.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Termos Chave</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Troca de Casais / Swinging</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">A troca de casais é a forma mais conhecida do libertinismo. Dois casais trocam os seus parceiros para momentos íntimos, com base no consentimento mútuo de todas as quatro pessoas envolvidas.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Soft Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Práticas sem penetração com outros parceiros. Inclui trocas de carícias, jogos sensuais e momentos de cumplicidade na presença de outras pessoas, mantendo uma certa exclusividade sexual dentro do casal.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Full Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Troca completa com penetração entre os parceiros de pelo menos dois casais. Requer acordo claro e discussão prévia sobre os limites.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Candaulismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Uma prática em que um dos membros do casal sente prazer ao ver ou saber que o seu parceiro tem relações sexuais com outra pessoa. Ao contrário da troca de casais onde a reciprocidade é a norma, o candaulismo baseia-se num prazer assimétrico.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Triolismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Relação sexual entre três pessoas. Pode tratar-se de um casal que convida uma terceira pessoa, ou de três pessoas que interagem juntas sem hierarquia particular.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Voyeurismo / Exibicionismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O voyeurismo é o prazer de observar os outros durante momentos íntimos. O exibicionismo é o contrário: o prazer de ser observado durante momentos íntimos. Estas duas práticas são frequentemente complementares.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mélangisme</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Uma prática onde várias pessoas ou casais partilham momentos íntimos no mesmo espaço sem necessariamente trocar de parceiros. O foco está na experiência partilhada.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Os Princípios Fundamentais</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Independentemente do vocabulário utilizado, os mesmos princípios fundamentais se aplicam na comunidade libertina: consentimento livre e informado, respeito pelos limites, discrição e dignidade de todos os participantes.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LexicoPt;
