import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Como preparar a primeira experiência?", answer: "Começa por conversar abertamente com o parceiro, definir limites claros, escolher um ambiente confortável e avançar ao vosso ritmo. O AKOKY tem guias detalhados para cada etapa." },
  { question: "É normal sentir nervosismo?", answer: "Completamente normal. A maioria dos praticantes sentiu nervosismo na primeira vez. A chave é não forçar nada e lembrar que podem parar a qualquer momento." },
  { question: "Onde encontrar o primeiro casal para conhecer?", answer: "O AKOKY permite conhecer casais verificados na tua região. O chat tipo WhatsApp facilita as conversas preliminares antes de qualquer encontro presencial." },
  { question: "É obrigatório fazer tudo na primeira vez?", answer: "Absolutamente não. Muitas primeiras experiências resumem-se a um jantar, uma conversa e talvez um beijo. Cada casal define o seu ritmo." },
  { question: "Como garantir a segurança do encontro?", answer: "Marca o encontro num local público, informa alguém de confiança, verifica o perfil no AKOKY e confia no teu instinto. Se algo não te parecer certo, não hesites em cancelar." },
];

const PremierRdvGuidePt = () => (
  <>
    <MetaTags title="A Tua Primeira Experiência Libertina | Dicas e Preparação — AKOKY" description="Guia prático para a tua primeira experiência libertina: preparação, comunicação, segurança. Dicas para casais e solteiros em Portugal." canonical="https://akoky.com/pt/primeira-experiencia-libertina" lang="pt" />
    <HreflangTags slug="primeira-experiencia-libertina" />
    <ContentPageLayout lang="pt" title="A Tua Primeira Experiência Libertina | Dicas e Preparação — AKOKY" description="Guia prático para a tua primeira experiência libertina." canonical="https://akoky.com/pt/primeira-experiencia-libertina" heroTitle="A Tua Primeira Experiência Libertina" heroSubtitle="Dicas práticas para preparares e viveres o teu primeiro encontro libertino com serenidade" heroType="cover" heroImage="/images/pt-primeiro-encontro-cover.webp" breadcrumb={[{ label: "A Tua Primeira Experiência Libertina" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Preparação: A Chave do Sucesso</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">A primeira experiência libertina é um momento especial que merece preparação cuidadosa. Não se trata apenas de logística — é sobretudo uma preparação emocional e relacional. A comunicação com o teu parceiro é o fator mais determinante para o sucesso da experiência.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">A Conversa Antes do Encontro</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Antes de qualquer encontro, conversem sobre: o que querem experimentar, os limites absolutos, os sinais de comunicação durante o encontro, e o plano de saída caso alguém se sinta desconfortável. Definam uma palavra-chave que signifique "quero parar" e uma que signifique "estou bem".</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Os Diferentes Formatos de Primeira Experiência</h2>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">O Jantar de Descoberta</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">O formato mais comum e confortável para principiantes. Um jantar num restaurante agradável com outro casal encontrado no AKOKY. Sem pressão, sem expectativas — apenas uma conversa para ver se há afinidade. Muitas primeiras experiências começam e terminam aqui, e está perfeitamente bem.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">O Apéritif Libertino</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Os <Link to="/pt/eventos" className="text-primary hover:underline">apéritifs libertinos AKOKY</Link> são encontros ao final da tarde em bares selecionados. O ambiente é descontraído, com vários casais presentes. Perfeito para socializar sem compromisso e conhecer a comunidade em formato leve.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">A Primeira Visita ao Clube</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Para quem prefere mergulhar diretamente, a <Link to="/pt/primeiro-clube-libertino" className="text-primary hover:underline">primeira visita ao clube</Link> é uma experiência envolvente. Consulta o nosso guia dedicado para uma preparação completa.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Gerir as Emoções: Nervosismo, Excitação e Ciúme</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Sentir nervosismo antes da primeira experiência é completamente normal — até saudável. A adrenalina faz parte da descoberta. O ciúme pode surgir e deve ser abordado abertamente. Lembra-te: podem parar a qualquer momento, não há obrigação de ir até ao fim, e a experiência deve ser positiva para todos.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Segurança: As Regras Essenciais</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>Verifica o perfil do casal ou da pessoa no AKOKY — perfis certificados são mais seguros</li>
            <li>Primeiro encontro sempre num local público (restaurante, bar)</li>
            <li>Informa alguém de confiança do teu plano</li>
            <li>Confia no teu instinto — se algo não te parece certo, cancela sem culpa</li>
            <li>Proteção sempre — sem exceção</li>
            <li>Não divulgues dados pessoais (morada, local de trabalho) nas primeiras interações</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Após a Experiência</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">O pós-experiência é crucial. Reservem tempo para conversar sobre o que viveram. Celebrem o que correu bem, discutam o que ajustariam. Esta comunicação pós-experiência é o que distingue uma prática libertina saudável de uma experiência que pode causar desconforto a longo prazo.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Encontra Casais na Tua Região</h3>
            <p className="text-muted-foreground mb-4">Regista-te no AKOKY e descobre uma comunidade verificada e respeitosa.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Criar Conta Gratuita</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierRdvGuidePt;
