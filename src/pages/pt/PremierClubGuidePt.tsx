import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "É preciso reservar para o primeiro clube?", answer: "Para a primeira visita, a reserva é altamente recomendável. Alguns clubes só aceitam com reserva prévia. Consulta a ficha do clube no AKOKY." },
  { question: "Qual é o dress code habitual?", answer: "Elegância e sensualidade. Para mulheres: vestido de cocktail ou lingerie sofisticada. Para homens: calças de tecido e camisa. Evita jeans e sapatilhas." },
  { question: "Quanto custa a entrada?", answer: "Os preços variam entre 20€ e 80€ por casal. Mulheres solteiras têm frequentemente entrada gratuita ou reduzida. Consulta os preços atualizados no AKOKY." },
  { question: "Posso ir sem participar?", answer: "Absolutamente. Muitos principiantes passam as primeiras visitas apenas a observar e socializar. Não há qualquer obrigação de participação." },
  { question: "E se me sentir desconfortável?", answer: "Podes sair a qualquer momento. Os clubes sérios têm pessoal atento que garante o conforto de todos. O teu bem-estar é a prioridade." },
  { question: "Fotografias são permitidas?", answer: "Não. É estritamente proibido fotografar ou filmar em qualquer clube libertino. A discrição é uma regra fundamental." },
];

const PremierClubGuidePt = () => (
  <>
    <MetaTags title="O Teu Primeiro Clube Libertino | Guia Completo — AKOKY" description="Tudo para a tua primeira visita a um clube libertino: dress code, etiqueta, reserva, preços. Guia completo para principiantes em Portugal." canonical="https://akoky.com/pt/primeiro-clube-libertino" lang="pt" />
    <HreflangTags slug="primeiro-clube-libertino" />
    <ContentPageLayout lang="pt" title="O Teu Primeiro Clube Libertino | Guia Completo para Principiantes" description="Tudo para a tua primeira visita a um clube libertino." canonical="https://akoky.com/pt/primeiro-clube-libertino" heroTitle="O Teu Primeiro Clube Libertino" heroSubtitle="Guia completo para uma primeira visita bem-sucedida e tranquila" heroType="cover" heroImage="/images/pt-primeiro-clube-cover.webp" breadcrumb={[{ label: "O Teu Primeiro Clube Libertino" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Antes da Visita: Preparação Essencial</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">A preparação é a chave para uma primeira experiência positiva. Começa por conversar abertamente com o teu parceiro sobre expectativas, limites e sinais de comunicação. Definam uma palavra-chave para indicar que querem parar ou sair. Consulta as avaliações e a ficha detalhada do clube no <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">diretório AKOKY</Link>.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Escolher o Clube Certo para Principiantes</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Nem todos os clubes são iguais para uma primeira vez. Procura clubes que organizam noitadas especiais para principiantes — o ambiente é mais acolhedor e o pessoal está preparado para receber novatos. Em Lisboa, vários clubes oferecem "noitadas descoberta" com anfitriões dedicados a guiar os novos visitantes.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Dress Code: O Que Vestir</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O dress code é levado a sério nos clubes libertinos. Para as mulheres: vestido de cocktail, lingerie sofisticada, saltos altos ou looks ousados são sempre bem-vindos. Para os homens: calças de tecido escuro, camisa, sapatos elegantes. Evita jeans, sapatilhas, t-shirts e roupa casual. Alguns clubes oferecem opção de mudança de roupa à chegada.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">A Chegada ao Clube: Passo a Passo</h2>
          <ol className="list-decimal list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>Chegada e registo na receção — apresenta a confirmação de reserva</li>
            <li>Pagamento da entrada e depósito de pertences nos vestiários seguros</li>
            <li>Tour guiado dos espaços — muitos clubes oferecem este serviço para novatos</li>
            <li>Primeiro drink no bar — momento de relaxamento e socialização</li>
            <li>Exploração dos espaços ao vosso ritmo — sem qualquer pressão</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">As Regras de Ouro</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>O consentimento é absoluto — perguntar antes de tocar, respeitar qualquer recusa</li>
            <li>Sem fotografias nem telemóveis nos espaços de intimidade</li>
            <li>Usar proteção — sempre disponível nos clubes sérios</li>
            <li>Respeitar a discrição — o que acontece no clube fica no clube</li>
            <li>Não insistir — se alguém declina, sorrir e seguir em frente</li>
            <li>Moderar o álcool — manter o discernimento é essencial</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Após a Visita: O Debriefing em Casal</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O momento após a visita é tão importante quanto a experiência em si. Conversa com o teu parceiro sobre o que sentiram: o que gostaram, o que os surpreendeu, o que não repetiriam. Esta reflexão conjunta é a base de uma prática libertina saudável e construtiva. Lê mais dicas no guia <Link to="/pt/comecar-libertinismo-guia" className="text-primary hover:underline">Começar no Libertinismo</Link>.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Encontra o Clube Perfeito</h3>
            <p className="text-muted-foreground mb-4">Consulta o diretório AKOKY com avaliações verificadas e fichas detalhadas.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Explorar Clubes</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierClubGuidePt;
