import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "É preciso estar em casal para começar?", answer: "Não. Solteiros e casais são igualmente bem-vindos. As mulheres solteiras têm acesso privilegiado a muitos clubes e eventos." },
  { question: "Como gerir o ciúme?", answer: "A comunicação é fundamental. Fala dos teus limites antes, durante e depois de cada experiência. O ciúme é normal e deve ser abordado abertamente com o teu parceiro." },
  { question: "É obrigatório participar num clube?", answer: "Absolutamente não. A regra fundamental é que ninguém é obrigado a fazer nada. O direito de recusar é absoluto e respeitado por todos." },
  { question: "Como encontrar clubes libertinos perto de mim?", answer: "O AKOKY oferece um diretório de 120+ clubes verificados em Portugal e na Europa com fichas detalhadas, fotos e avaliações da comunidade." },
];

const ComecarLibertinagePt = () => (
  <>
    <MetaTags
      title="Começar no Libertinismo | Guia Completo Casais e Solteiros — AKOKY"
      description="Guia completo para começar no libertinismo: primeiros passos, consentimento, escolher o clube, gerir o ciúme. Conselhos para casais e solteiros."
      canonical="https://akoky.com/pt/comecar-libertinagem"
      lang="pt"
    />
    <HreflangTags slug="comecar-libertinagem" />
    <ContentPageLayout
      lang="pt"
      title="Começar no Libertinismo | Guia Completo Casais e Solteiros — AKOKY"
      description="Guia completo para começar no libertinismo: primeiros passos, consentimento, escolher o clube, gerir o ciúme. Conselhos para casais e solteiros."
      canonical="https://akoky.com/pt/comecar-libertinagem"
      heroTitle="Começar no Libertinismo, ao Teu Ritmo"
      heroSubtitle="Um guia prático e respeitoso para descobrir este universo passo a passo, em casal ou sozinho/a."
      breadcrumb={[{ label: "Começar no Libertinismo, ao Teu Ritmo" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Antes de Começar: As Perguntas Essenciais</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Aventurar-se no libertinismo requer reflexão e comunicação. Antes de dar o primeiro passo, é fundamental que tu e o teu parceiro se façam algumas perguntas chave: porque queremos explorar isto? Quais são os nossos limites? O que esperamos obter desta experiência?</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Os Teus Desejos</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Identificar o que te atrai verdadeiramente no libertinismo é o primeiro passo. É a fantasia de ver o teu parceiro com outra pessoa? A possibilidade de conhecer pessoas novas? A liberdade de explorar a tua sexualidade sem tabus? Ser honesto/a contigo mesmo/a é essencial.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Os Teus Limites</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Definir os teus limites antes de qualquer experiência é crucial. Que práticas estás disposto/a a explorar e quais não? Com que tipo de pessoas? Em que contextos? Discutir estes limites abertamente com o teu parceiro previne mal-entendidos e protege a relação.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Os Primeiros Passos Práticos</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📱 Descobrir Online Primeiro</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">A maioria das pessoas que se iniciam no libertinismo começa por explorar online antes de viver experiências físicas. Plataformas como o AKOKY permitem ler testemunhos, fazer perguntas de forma anónima e conectar com a comunidade sem pressão.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🏛️ A Primeira Visita a um Clube</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Para a tua primeira visita a um clube libertino, reserva com antecedência. Chega cedo quando o ambiente é mais tranquilo. Explora primeiro os espaços vestidos (bar, salão) sem obrigação de participar. Lembra-te: tens o direito absoluto de dizer não a qualquer momento.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🤝 Os Códigos Fundamentais</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">No mundo libertino existem regras não escritas que todo o principiante deve conhecer: nunca insistir face a uma recusa, não tocar sem permissão explícita, respeitar a privacidade dos outros (sem fotos sem consentimento) e manter discrição fora dos espaços libertinos.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Gerir o Ciúme</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O ciúme é uma reação humana completamente normal. Partilhá-lo com o parceiro e falar sobre ele antes, durante e depois das experiências permite geri-lo de forma saudável. Não reprimas estas emoções: são informações valiosas sobre os teus limites reais.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Encontrar a Tua Comunidade com o AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY oferece um espaço seguro para os principiantes: guias dedicados, eventos especificamente pensados para os recém-chegados e uma comunidade acolhedora que se lembra de ter sido também ela principiante.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ComecarLibertinagePt;
