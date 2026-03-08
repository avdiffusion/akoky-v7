import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Gamepad2, Dice5, Target, Heart, Users, Sparkles, Tv, Shield } from "lucide-react";

const FAQ = [
  { question: "Os jogos AKOKY são gratuitos?", answer: "Alguns jogos são acessíveis gratuitamente a todos os membros. Outros conteúdos estão reservados aos membros VIP." },
  { question: "São adequados para principiantes?", answer: "Absolutamente. Os jogos AKOKY são pensados para ser acessíveis e divertidos, qualquer que seja o teu nível de experiência." },
  { question: "Posso jogar na TV?", answer: "Sim! Todos os jogos AKOKY são compatíveis com Chromecast, Smart TV e Android TV para uma experiência em grande ecrã." },
  { question: "Os jogos são respeitosos?", answer: "Todos os jogos integram o princípio do consentimento: direito absoluto de passar, limites respeitados, e nenhuma pressão." },
  { question: "Posso criar os meus próprios desafios?", answer: "Sim! O modo personalizado permite criar desafios adaptados ao teu grupo, nível de conforto e desejos." },
  { question: "Quantos jogadores são necessários?", answer: "Os jogos funcionam a partir de 2 jogadores. Alguns são otimizados para 4-8 jogadores em grupo." },
];

const GAMES = [
  { icon: Target, title: "Roleta das Penitências", desc: "Uma roleta digital com penitências personalizáveis segundo o nível de audácia do grupo. Do mais suave ao mais ousado, cada participante escolhe o seu nível de conforto.", players: "2-8", difficulty: "Ajustável", badge: "Hit" },
  { icon: Dice5, title: "Dado do Desejo AKOKY", desc: "Um dado especial com diferentes faces: ações, zonas do corpo, intensidades. Lança o dado e descobre o que o destino te reserva. Um clássico reinventado.", players: "2-4", difficulty: "Médio", badge: null },
  { icon: Sparkles, title: "Verdade ou Desafio Libertino", desc: "A versão adulta do clássico jogo. Perguntas ousadas e desafios sensuais elaborados com cuidado para criar momentos de cumplicidade e descoberta.", players: "3-8", difficulty: "Ajustável", badge: "Clássico" },
  { icon: Heart, title: "Desafios de Casal", desc: "Desafios especialmente concebidos para casais que querem explorar juntos: comunicação, confiança, criatividade e sensualidade. Uma viagem de descoberta mútua.", players: "2", difficulty: "Progressivo", badge: "Romântico" },
  { icon: Users, title: "Ice Breaker Party", desc: "O jogo perfeito para quebrar o gelo em noitadas libertinas. Perguntas divertidas, mini-desafios e dinâmicas de grupo para conhecer os outros convidados.", players: "4-12", difficulty: "Fácil", badge: "Novo" },
  { icon: Gamepad2, title: "Strip Quiz Libertino", desc: "Quiz de cultura libertina com penitências progressivas. Testa os teus conhecimentos sobre o vocabulário, as práticas e os códigos da comunidade.", players: "2-6", difficulty: "Difícil", badge: null },
];

const RULES = [
  { emoji: "✅", title: "Consentimento antes de tudo", desc: "Cada participante concorda livremente em jogar e pode parar a qualquer momento." },
  { emoji: "🚫", title: "Direito de passar", desc: "Qualquer jogador pode passar sem explicação. Sem pressão, sem insistência." },
  { emoji: "🤝", title: "Respeito dos limites", desc: "Os limites de cada pessoa são sagrados. O jogo termina para quem quiser, quando quiser." },
  { emoji: "💬", title: "Comunicação aberta", desc: "Antes de jogar, discutam os limites e as expectativas do grupo." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Jogos Libertinos", item: "https://akoky.com/pt/jogos" },
  ],
};

const JogosPt = () => (
  <>
    <MetaTags
      title="Jogos Libertinos AKOKY | Animações e Atividades para Noitadas"
      description="Descobre os nossos jogos libertinos para animar as tuas noitadas: roleta, dado, verdade ou desafio. Lúdico, convivial e respeitoso."
      canonical="https://akoky.com/pt/jogos"
      lang="pt"
      ogImage="/images/cover-jeux.webp"
    />
    <HreflangTags slug="jogos" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="Jogos Libertinos AKOKY | Animações e Atividades para Noitadas"
      description="Descobre os nossos jogos libertinos para animar as tuas noitadas."
      canonical="https://akoky.com/pt/jogos"
      heroTitle="Jogos Libertinos AKOKY"
      heroSubtitle="Anima as tuas noitadas com os nossos jogos exclusivos: roleta, dado, verdade ou desafio e mais."
      heroImage="/images/cover-jeux.webp"
      breadcrumb={[{ label: "Jogos Libertinos" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Why */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Gamepad2 className="w-4 h-4" /> AKOKY Games
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Por que Jogar numa Noitada Libertina?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Os jogos são uma excelente forma de quebrar o gelo, criar cumplicidade e explorar desejos de forma lúdica e sem pressão. No AKOKY Space encontrarás uma seleção de jogos pensados especificamente para a comunidade libertina, sempre com o consentimento e o respeito como valores fundamentais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quer estejas a organizar uma noitada íntima a dois, um encontro com outro casal ou uma festa em grupo, temos o jogo perfeito para cada ocasião.
            </p>
          </div>

          {/* Games Grid */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Os Nossos Jogos</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {GAMES.map((g, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all relative">
                {g.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{g.badge}</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <g.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{g.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{g.desc}</p>
                <div className="flex gap-4 text-xs">
                  <span className="text-muted-foreground">👥 {g.players} jogadores</span>
                  <span className="text-muted-foreground">📊 {g.difficulty}</span>
                </div>
              </div>
            ))}
          </div>

          {/* TV Section */}
          <div className="bg-card/40 border border-border rounded-2xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
                  <Tv className="w-4 h-4" /> Grande Ecrã
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Joga na TV</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todos os jogos AKOKY são compatíveis com Chromecast, Smart TV e Android TV. Projeta o jogo no grande ecrã enquanto cada jogador usa o telemóvel como comando.
                </p>
                <p className="text-muted-foreground text-sm">📺 Chromecast · Smart TV · Android TV · ChromeOS</p>
              </div>
              <div className="flex items-center justify-center p-6">
                <img src="/images/app-tv.webp" alt="Jogos AKOKY na televisão" className="rounded-xl max-h-72 w-auto" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Regras Fundamentais</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {RULES.map((r, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{r.emoji}</span>
                  <div>
                    <h3 className="text-foreground font-bold mb-1">{r.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Jogos para Cada Ocasião</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os jogos AKOKY são o complemento perfeito para as tuas noitadas nos <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> ou em casa. Combina-os com os <Link to="/pt/eventos" className="text-primary hover:underline">eventos AKOKY</Link> ou usa-os para preparar o teu <Link to="/pt/primeiro-encontro-libertino" className="text-primary hover:underline">primeiro encontro libertino</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se estás a <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar no libertinismo</Link>, os jogos são uma excelente porta de entrada: lúdicos, sem pressão e perfeitamente adaptados a principiantes. Descarrega a <Link to="/pt/app" className="text-primary hover:underline">app AKOKY</Link> para jogares onde quiseres.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://akoky.com/jeux.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              <Gamepad2 className="w-5 h-5" /> Jogar Agora — Grátis
            </a>
            <p className="text-muted-foreground text-sm mt-4">Sem download · Funciona no browser · Compatível TV</p>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default JogosPt;
