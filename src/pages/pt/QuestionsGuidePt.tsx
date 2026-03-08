import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { HelpCircle, Heart, Shield, Users, MapPin, Sparkles, MessageCircle } from "lucide-react";

/* ═══════════ FAQ ═══════════ */
const FAQ = [
  { question: "É obrigatório fazer alguma coisa num clube libertino?", answer: "Não. O direito de recusar é absoluto. Muitos casais passam as primeiras visitas apenas a observar e socializar. Não há qualquer pressão para participar." },
  { question: "É preciso estar em casal para praticar o libertinismo?", answer: "Não. Solteiros e casais são igualmente bem-vindos. As mulheres solteiras têm acesso privilegiado a muitos clubes e eventos." },
  { question: "O libertinismo é perigoso?", answer: "Não, desde que praticado com comunicação, consentimento e em locais verificados. Os clubes referenciados no AKOKY cumprem normas rigorosas de segurança." },
  { question: "Como encontrar casais ou solteiros perto de mim?", answer: "O AKOKY tem 1,5M de membros na Europa. Cria o teu perfil gratuito e utiliza a geolocalização para encontrar pessoas na tua região." },
  { question: "Quanto custa a entrada num clube libertino em Portugal?", answer: "Entre 20€ e 80€ por casal. Mulheres solteiras: frequentemente gratuito ou preço reduzido. Consulta as fichas no AKOKY." },
  { question: "Que dress code levar ao clube?", answer: "Geralmente elegante: vestido de cocktail ou lingerie para mulheres, calças de tecido e camisa para homens. Consulta a ficha do clube no AKOKY." },
  { question: "Como gerir o ciúme ao começar?", answer: "O ciúme é uma emoção normal. A chave é a comunicação: definam limites claros antes, durante e depois. Muitos casais reforçam a relação através desta abertura." },
  { question: "Os meus dados estão seguros no AKOKY?", answer: "Sim. Encriptação de nível bancário, conformidade RGPD, servidores na Europa. Os teus dados nunca são vendidos a terceiros." },
  { question: "Posso ir a um clube só para observar?", answer: "Sim, absolutamente. O voyeurismo consentido faz parte da cultura libertina. Podes ir, beber um copo e simplesmente observar." },
  { question: "O que é um safe word?", answer: "Uma palavra-código acordada entre os participantes que, quando pronunciada, interrompe imediatamente toda a atividade. Essencial para o consentimento." },
];

/* ═══════════ CATEGORIES ═══════════ */
const CATEGORIES = [
  {
    icon: Heart,
    title: "Relações e Casal",
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    questions: [
      { q: "O libertinismo pode fortalecer o casal?", a: "Sim. Muitos casais relatam maior comunicação, confiança e cumplicidade. A chave é a honestidade mútua e o respeito pelos limites de cada um." },
      { q: "Como falar de libertinismo ao meu parceiro?", a: "Escolhe um momento calmo e íntimo. Fala dos teus desejos sem pressão. Dá tempo para a pessoa processar. Partilha guias como os do AKOKY." },
      { q: "E se um dos dois quiser parar?", a: "Qualquer pessoa pode parar a qualquer momento, sem justificação. O respeito pela vontade do outro é absoluto. Parem, conversem e retomem só quando ambos estiverem de acordo." },
      { q: "Podemos definir limites diferentes?", a: "Sim. Cada pessoa do casal pode ter limites diferentes. O importante é que sejam comunicados e respeitados. A regra mais restritiva prevalece sempre." },
    ],
  },
  {
    icon: Shield,
    title: "Segurança e Consentimento",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    questions: [
      { q: "O consentimento é realmente respeitado nos clubes?", a: "Sim. Os clubes referenciados no AKOKY têm regras estritas. O consentimento é a base de tudo. Qualquer comportamento inadequado é imediatamente sancionado." },
      { q: "E se encontrar alguém conhecido?", a: "Acontece raramente, mas se acontecer: a discrição é mútua. Essa pessoa está lá pelo mesmo motivo que tu. O que acontece no clube fica no clube." },
      { q: "É seguro usar o AKOKY?", a: "Sim. Perfis verificados, moderação humana 24/7, modo incógnito, geolocalização aproximada e encriptação de nível bancário." },
      { q: "Como denunciar um comportamento inadequado?", a: "Usa o botão 'Denunciar' disponível em cada perfil. A equipa de moderação trata cada denúncia em menos de 2 horas." },
    ],
  },
  {
    icon: MapPin,
    title: "Clubes e Saunas",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    questions: [
      { q: "Qual é a diferença entre clube e sauna libertino?", a: "O clube privilegia a festa (bar, música, pista de dança). O sauna centra-se no bem-estar (jacuzzi, hammam) num ambiente mais relaxado." },
      { q: "Posso visitar o espaço antes de participar?", a: "Muitos clubes oferecem tours guiados na chegada. Alguns têm noitadas 'descoberta' pensadas para principiantes." },
      { q: "Há clubes libertinos em todo Portugal?", a: "Os clubes concentram-se em Lisboa, Porto e Algarve. O AKOKY referencia 27+ estabelecimentos verificados em todo o país." },
      { q: "Os saunas são mais adequados para principiantes?", a: "Muitos principiantes preferem os saunas pela atmosfera relaxada e ausência de dress code complexo. O contacto é mais natural." },
    ],
  },
  {
    icon: Sparkles,
    title: "Práticas e Vocabulário",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    questions: [
      { q: "O que significa soft swap?", a: "Práticas sem penetração com outros parceiros: carícias, beijos, jogos sensuais. Frequentemente o primeiro passo para principiantes." },
      { q: "O que é o mélangisme?", a: "Prática onde vários casais partilham o mesmo espaço para momentos íntimos, cada um com o seu parceiro. A excitação vem da proximidade." },
      { q: "O que é uma dark room?", a: "Espaço com pouca ou nenhuma iluminação nos clubes, concebido para encontros desinibidos num ambiente seguro e consentido." },
      { q: "Preciso de conhecer todo o vocabulário antes de ir?", a: "Não. O essencial é compreender o consentimento e os limites. Consulta o léxico AKOKY para te familiarizares progressivamente." },
    ],
  },
  {
    icon: Users,
    title: "Eventos e Comunidade",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    questions: [
      { q: "Como participar num evento AKOKY?", a: "Regista-te no AKOKY, navega pelo calendário de eventos e reserva o teu lugar online. Alguns eventos requerem estatuto VIP." },
      { q: "Os eventos são abertos a principiantes?", a: "Sim. Muitos eventos são especificamente concebidos para acolher novos membros, com atmosfera acolhedora e sem pressão." },
      { q: "Posso ir sozinho/a a um evento?", a: "Sim. Solteiros e casais são bem-vindos. A composição varia segundo o evento — consulta os detalhes na ficha." },
      { q: "Existe algum evento perto de mim?", a: "O AKOKY agrega 300+ eventos por mês em toda a Europa. Usa o filtro por região para encontrar eventos na tua zona." },
    ],
  },
  {
    icon: MessageCircle,
    title: "AKOKY e Plataforma",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    questions: [
      { q: "O registo no AKOKY é gratuito?", a: "Sim. O registo é 100% gratuito e dá acesso às funcionalidades de base. O estatuto VIP desbloqueia funcionalidades premium." },
      { q: "Que funcionalidades tem a app AKOKY?", a: "Geolocalização, chat tipo WhatsApp, multi-perfil, notificações de eventos, jogos libertinos, live streaming e modo incógnito." },
      { q: "O que é o multi-perfil?", a: "Funcionalidade exclusiva AKOKY: cria vários perfis (casal, solteiro/a) numa única conta, com mudança instantânea." },
      { q: "Como funciona o programa de referral?", a: "Convida amigos com o teu link pessoal. Cada inscrição validada dá-te dias VIP gratuitos. 10 referrals = 6 meses VIP+." },
    ],
  },
];

/* ═══════════ QUICK STATS ═══════════ */
const STATS = [
  { num: "50+", label: "Perguntas respondidas", icon: "❓" },
  { num: "6", label: "Categorias temáticas", icon: "📂" },
  { num: "100%", label: "Respostas verificadas", icon: "✅" },
  { num: "0€", label: "Acesso gratuito", icon: "🆓" },
];

/* ═══════════ SCHEMA ═══════════ */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Perguntas para Principiantes", item: "https://akoky.com/pt/perguntas-principiantes-guia" },
  ],
};

const QuestionsGuidePt = () => (
  <>
    <MetaTags
      title="Perguntas Frequentes Libertinismo 2026 | 50+ Respostas — AKOKY"
      description="As 50+ perguntas mais frequentes dos principiantes no libertinismo: funcionamento dos clubes, segurança, vocabulário, práticas, eventos. Respostas verificadas."
      canonical="https://akoky.com/pt/perguntas-principiantes-guia"
      lang="pt"
    />
    <HreflangTags slug="perguntas-principiantes-guia" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="Perguntas Frequentes Libertinismo 2026 | 50+ Respostas — AKOKY"
      description="As 50+ perguntas mais frequentes dos principiantes no libertinismo."
      canonical="https://akoky.com/pt/perguntas-principiantes-guia"
      heroTitle="Perguntas para Principiantes"
      heroSubtitle="As respostas a todas as perguntas que fazes ao descobrir o libertinismo. 50+ questões, 6 categorias, 0 tabus."
      heroImage="/images/questions-debutants-cover.webp"
      breadcrumb={[{ label: "Perguntas para Principiantes" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Intro */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <HelpCircle className="w-4 h-4" /> FAQ Completa
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Todas as Respostas Num Só Lugar</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tens perguntas sobre o libertinismo? É normal — toda a gente tem ao início. Esta página reúne as 50+ perguntas mais frequentes dos principiantes, organizadas por tema, com respostas verificadas pela equipa editorial do AKOKY. Sem tabus, sem julgamentos.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {STATS.map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-card/60 border border-border">
                <span className="text-3xl block mb-2">{s.icon}</span>
                <span className="text-3xl font-black text-primary block">{s.num}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Categories */}
          {CATEGORIES.map((cat, ci) => (
            <div key={ci} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg ${cat.bg} border flex items-center justify-center`}>
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">{cat.title}</h2>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-muted text-muted-foreground">{cat.questions.length} perguntas</span>
              </div>
              <div className="space-y-3">
                {cat.questions.map((item, qi) => (
                  <details key={qi} className="group rounded-xl bg-card/60 border border-border hover:border-primary/30 transition-all overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-5">
                      <span className="text-foreground font-semibold text-sm pr-4">{item.q}</span>
                      <span className="text-primary text-xl group-open:rotate-45 transition-transform font-bold shrink-0">+</span>
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Resources */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Recursos para Ir Mais Longe</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { emoji: "🧭", title: "Começar no Libertinismo", desc: "Guia completo passo a passo", to: "/pt/comecar-libertinagem" },
                { emoji: "🏛️", title: "Primeiro Clube", desc: "Preparação para a primeira visita", to: "/pt/primeiro-encontro-libertino" },
                { emoji: "📖", title: "Léxico Libertino", desc: "200+ termos explicados", to: "/pt/lexico-libertino" },
              ].map((r, i) => (
                <Link key={i} to={r.to} className="block p-5 rounded-xl bg-card/60 border border-border hover:border-primary/30 transition-all text-center group">
                  <span className="text-3xl block mb-2">{r.emoji}</span>
                  <h3 className="text-foreground font-bold text-sm mb-1 group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-muted-foreground text-xs">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* SEO block */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A Tua Primeira Porta de Entrada</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta FAQ foi pensada para quem está a descobrir o libertinismo em Portugal. Encontra respostas sobre os <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link>, os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas</Link>, os <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link> e as práticas mais comuns. Se preferires um guia mais estruturado, consulta o <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">guia para principiantes</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Descarrega a <Link to="/pt/app" className="text-primary hover:underline">aplicação AKOKY</Link> para explorar a comunidade, consulta as <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações verificadas</Link> e descobre a <Link to="/pt/visao" className="text-primary hover:underline">visão</Link> que guia a plataforma.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              Juntar-me à Comunidade AKOKY
            </a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default QuestionsGuidePt;
