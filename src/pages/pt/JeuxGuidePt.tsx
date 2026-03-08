import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Os jogos AKOKY são gratuitos?", answer: "Alguns jogos são acessíveis gratuitamente a todos os membros. Os conteúdos premium estão reservados aos membros VIP." },
  { question: "São adequados para principiantes?", answer: "Absolutamente. Os jogos AKOKY são concebidos para ser acessíveis e divertidos, qualquer que seja o teu nível de experiência." },
  { question: "Posso usar os jogos em casal em casa?", answer: "Sim. Os jogos são pensados tanto para noitadas em clubes como para momentos íntimos a dois em casa. Perfeitos para quebrar a rotina." },
  { question: "Existem jogos em português?", answer: "Sim. Todos os jogos AKOKY estão disponíveis em português, assim como em francês, espanhol, alemão e italiano." },
  { question: "Como aceder aos jogos VIP?", answer: "Subscreve ao estatuto VIP AKOKY para desbloquear todos os jogos premium, incluindo os desafios exclusivos e as edições limitadas." },
];

const JeuxGuidePt = () => (
  <>
    <MetaTags title="Jogos Libertinos AKOKY | Animações para Noitadas" description="Jogos libertinos para noitadas inesquecíveis: cartas picantes, desafios sensuais, roleta do destino. Disponíveis em português no AKOKY." canonical="https://akoky.com/pt/jogos-libertinos-guia" lang="pt" />
    <HreflangTags slug="jogos-libertinos-guia" />
    <ContentPageLayout lang="pt" title="Jogos Libertinos AKOKY | Animações para Noitadas" description="Jogos libertinos para noitadas inesquecíveis." canonical="https://akoky.com/pt/jogos-libertinos-guia" heroTitle="Jogos Libertinos" heroSubtitle="Anima as tuas noitadas com os nossos jogos e animações libertinas exclusivas" heroType="cover" heroImage="/images/pt-jogos-cover.webp" breadcrumb={[{ label: "Jogos Libertinos" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Jogos Libertinos: A Nova Forma de Animar as Tuas Noitadas</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Os jogos libertinos do AKOKY foram concebidos por especialistas em animação de eventos para quebrar o gelo, criar cumplicidade entre os participantes e transformar cada noitada numa experiência memorável. Seja em <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link>, em casa ou nos <Link to="/pt/eventos" className="text-primary hover:underline">eventos AKOKY</Link>, os nossos jogos adaptam-se a todos os contextos.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Os Nossos Jogos Mais Populares</h2>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">🎲 Dado do Destino</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Lança o dado virtual e descobre o teu desafio. Cada face propõe uma ação diferente: uma carícia, um beijo, um striptease ou uma confissão. Perfeito para quebrar o gelo entre casais que acabaram de se conhecer.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">🃏 Cartas Picantes</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Um baralho de 52 cartas com desafios progressivos — do suave ao ousado. Cada carta indica uma ação, um participante e um nível de intensidade. Ideal para uma noitada que evolui ao ritmo dos participantes.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">🎡 Roleta da Sensualidade</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Gira a roleta e deixa o acaso decidir o próximo momento. Categorias: confissão, desafio, fantasia ou verdade. Um clássico reinventado para o universo libertino.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">💬 Verdade ou Desafio Libertino</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">A versão adulta do jogo clássico, com perguntas e desafios pensados para a comunidade libertina. Três níveis de intensidade para se adaptar ao grupo.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Como Usar os Jogos em Diferentes Contextos</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Em casa, a dois:</strong> Perfeito para reacender a chama e explorar novas fantasias de forma lúdica</li>
            <li><strong>Em casa, com outro casal:</strong> Quebra o gelo e cria uma atmosfera descontraída e cúmplice</li>
            <li><strong>Num clube libertino:</strong> Os animadores dos clubes AKOKY utilizam os nossos jogos nas noitadas temáticas</li>
            <li><strong>Nos eventos AKOKY:</strong> Jogos integrados no programa dos <Link to="/pt/eventos" className="text-primary hover:underline">300+ eventos mensais</Link></li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Jogos VIP: Conteúdo Premium Exclusivo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Os membros <Link to="/pt/vip" className="text-primary hover:underline">VIP AKOKY</Link> têm acesso a jogos exclusivos: edições limitadas sazonais, desafios temáticos especiais e funcionalidades avançadas como a personalização das regras. Uma experiência de jogo elevada para os membros mais exigentes.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Experimenta os Jogos AKOKY</h3>
            <p className="text-muted-foreground mb-4">Regista-te gratuitamente e acede aos jogos disponíveis para todos os membros.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Jogar Agora</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default JeuxGuidePt;
