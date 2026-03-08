import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const FAQ = [
  { question: "É preciso estar em casal para começar?", answer: "Não. Solteiros e casais são igualmente bem-vindos. Mulheres solteiras têm acesso privilegiado a muitos clubes e eventos." },
  { question: "Como gerir o ciúme?", answer: "A comunicação é fundamental. Fala dos teus limites antes, durante e depois de cada experiência. O ciúme é normal e deve ser abordado abertamente." },
  { question: "É obrigatório participar num clube?", answer: "Absolutamente não. Ninguém é obrigado a fazer nada. O direito de recusar é absoluto e respeitado por todos." },
  { question: "Como encontrar clubes perto de mim?", answer: "O AKOKY referencia 27+ clubes e saunas verificados em Portugal com fichas detalhadas, fotos e avaliações." },
  { question: "E se a experiência correr mal?", answer: "Fala imediatamente com o teu parceiro. Saiam se necessário — não há obrigação de ficar. Depois, discutam calmamente o que aconteceu." },
  { question: "Como falar do libertinismo ao meu parceiro?", answer: "Escolhe um momento calmo e íntimo. Fala dos teus desejos sem pressão. Dá tempo para a pessoa processar. Partilha artigos ou guias como este." },
  { question: "A libertinagem pode prejudicar o casal?", answer: "Praticada com comunicação, respeito e limites claros, pode até fortalecer o casal. O essencial é que ambos estejam genuinamente de acordo." },
  { question: "Existem eventos para principiantes?", answer: "Sim. O AKOKY organiza regularmente eventos etiquetados 'Principiantes' com atmosfera acolhedora e sem pressão." },
  { question: "Devo beber álcool para descontrair?", answer: "Moderação total. O álcool altera o discernimento e o consentimento. Um copo para relaxar, nunca mais." },
  { question: "Posso ir a um clube só para observar?", answer: "Sim, absolutamente. O voyeurismo consentido faz parte da cultura libertina. Podes ir, beber um copo e simplesmente observar." },
];

const STEPS = [
  { num: "1", title: "Reflete Sobre os Teus Desejos", icon: "💭", desc: "O que te atrai verdadeiramente? A fantasia de ver? De ser visto/a? De conhecer pessoas novas? A liberdade sexual? Sê honesto/a contigo mesmo/a — é o alicerce de tudo." },
  { num: "2", title: "Comunica com o Teu Parceiro", icon: "💬", desc: "Escolhe um momento calmo. Partilha os teus desejos sem pressão. Ouve os do outro. Definam juntos os limites, os sinais de stop e as expectativas." },
  { num: "3", title: "Informa-te e Educa-te", icon: "📖", desc: "Lê guias como este, consulta o léxico libertino, vê testemunhos na comunidade AKOKY. Quanto mais souberes, mais confiante estarás." },
  { num: "4", title: "Começa Online", icon: "📱", desc: "Cria o teu perfil no AKOKY. Explora a comunidade, faz perguntas, conecta com casais e solteiros experientes que te podem orientar." },
  { num: "5", title: "Escolhe o Teu Primeiro Local", icon: "🏛️", desc: "Sauna para um ambiente calmo, clube para uma atmosfera festiva, aperitivo para algo informal. Consulta o diretório AKOKY para escolheres." },
  { num: "6", title: "Vive a Experiência", icon: "✨", desc: "Vai ao teu ritmo. Não te forces. Observa, socializa, e se quiseres mais — explora. Depois, conversa com o teu parceiro sobre o que viveram." },
];

const GOLDEN_RULES = [
  { icon: "🤝", title: "Consentimento Sempre", desc: "Nunca tocar sem permissão explícita. Um olhar ou sorriso não basta — pede sempre. E aceita o não com elegância." },
  { icon: "🗣️", title: "Comunicação Constante", desc: "Com o parceiro: antes, durante e depois. Definam um sinal de stop. Falem do que sentiram sem julgamento." },
  { icon: "📵", title: "Discrição Total", desc: "O que acontece no clube fica no clube. Sem fotos, sem nomes reais, sem partilhas nas redes. A privacidade é sagrada." },
  { icon: "🚫", title: "Direito de Recusar", desc: "Podes dizer não a qualquer momento, a qualquer prática, a qualquer pessoa. Este direito é absoluto e inegociável." },
  { icon: "🛡️", title: "Proteção Obrigatória", desc: "Usa sempre preservativo. Os clubes sérios disponibilizam-nos. Sem exceções, sem negociação." },
  { icon: "🍷", title: "Sobriedade", desc: "Um copo para relaxar, nunca mais. O álcool em excesso destrói o consentimento e a experiência." },
  { icon: "🧼", title: "Higiene Impecável", desc: "Duche antes e entre as interações. Cuida da tua aparência. É uma questão de respeito." },
  { icon: "❤️", title: "Respeito do Casal", desc: "O casal vem sempre em primeiro. Se um dos dois não está confortável, param-se imediatamente. Sem discussão." },
];

const PROFILES = [
  { icon: "💑", title: "Casais Curiosos", desc: "Começam geralmente por um aperitivo ou um sauna. Ambiente calmo, sem pressão, possibilidade de observar sem participar. O passo mais comum.", tips: ["Definam limites antes de sair", "Escolham um sauna para a 1ª vez", "Combinem um sinal de stop"] },
  { icon: "👩", title: "Mulheres Solteiras", desc: "Muito bem-vindas em todos os clubes e eventos. Acesso frequentemente gratuito ou reduzido. A comunidade libertina valoriza e protege as mulheres solo.", tips: ["Eventos 'Principiantes' são ideais", "A app AKOKY tem chat seguro", "Informa uma amiga antes"] },
  { icon: "👨", title: "Homens Solteiros", desc: "Acesso mais limitado mas possível em muitos eventos e clubes. O respeito e a apresentação são fundamentais. Dress code elegante obrigatório.", tips: ["Lê os requisitos de cada clube", "Dress code impecável", "Sê respeitoso e discreto"] },
];

const JEALOUSY_TIPS = [
  { step: "Antes", icon: "📋", desc: "Definam limites claros. Falem de cenários: 'E se vires o teu parceiro com outra pessoa?' Preparem-se emocionalmente juntos." },
  { step: "Durante", icon: "👁️", desc: "Mantenham contacto visual regular. Usem o sinal de stop se necessário. Podem sempre parar e ir conversar ao bar." },
  { step: "Depois", icon: "🛋️", desc: "Falem sobre o que sentiram — sem julgamento. O ciúme é informação, não fraqueza. Ajustem os limites para a próxima vez." },
];

const FIRST_VISIT = [
  { icon: "📅", title: "Reserva com antecedência", desc: "Consulta o diretório AKOKY, escolhe o estabelecimento e reserva online." },
  { icon: "👗", title: "Respeita o dress code", desc: "Consulta a ficha do clube para o código de vestuário exato." },
  { icon: "⏰", title: "Chega cedo", desc: "O ambiente é mais tranquilo ao início. Ideal para explorar o espaço." },
  { icon: "🍸", title: "Começa pelo bar", desc: "Bebe algo, observa, socializa. Não tenhas pressa de ir às zonas íntimas." },
  { icon: "🗺️", title: "Faz a visita guiada", desc: "Muitos clubes oferecem tour para principiantes. Aceita sempre." },
  { icon: "🚗", title: "Debriefing no regresso", desc: "No carro ou em casa, falem do que viveram. É o momento mais importante." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Começar na Libertinagem", item: "https://akoky.com/pt/comecar-libertinagem" },
  ],
};

const ComecarLibertinagePt = () => (
  <>
    <MetaTags
      title="Começar no Libertinismo em 2026 | Guia Completo — AKOKY"
      description="Guia completo para começar no libertinismo: 6 etapas, regras de ouro, gerir o ciúme, primeira visita a um clube. Conselhos para casais, mulheres e homens solteiros."
      canonical="https://akoky.com/pt/comecar-libertinagem"
      lang="pt"
    />
    <HreflangTags slug="comecar-libertinagem" />
    <SchemaOrg schema={[breadcrumbSchema]} />
    <ContentPageLayout
      lang="pt"
      title="Começar no Libertinismo — Guia AKOKY 2026"
      description="Guia completo para começar no libertinismo."
      canonical="https://akoky.com/pt/comecar-libertinagem"
      heroTitle="Começar no Libertinismo, ao Teu Ritmo"
      heroSubtitle="O guia mais completo para descobrir o libertinismo passo a passo: preparação, regras, primeira visita, gestão do ciúme. Para casais e solteiros."
      heroImage="/images/debuter-libertinage-cover.webp"
      breadcrumb={[{ label: "Começar na Libertinagem" }]}
      faq={FAQ}
    >

      {/* ═══════════ TABLE OF CONTENTS ═══════════ */}
      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="border border-border rounded-xl p-6 bg-card">
            <h2 className="text-lg font-bold text-foreground mb-4">📑 Índice do Guia</h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: "6 Etapas para Começar", anchor: "#etapas" },
                { label: "8 Regras de Ouro", anchor: "#regras" },
                { label: "Perfis: Casais, Mulheres, Homens", anchor: "#perfis" },
                { label: "Gerir o Ciúme", anchor: "#ciume" },
                { label: "Primeira Visita a um Clube", anchor: "#primeira-visita" },
                { label: "Onde Começar em Portugal", anchor: "#onde" },
              ].map((item) => (
                <a key={item.anchor} href={item.anchor} className="text-sm text-primary hover:underline flex items-center gap-2">
                  <span className="text-xs">→</span> {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ═══════════ INTRO ═══════════ */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Porquê Este Guia?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Aventurar-se no libertinismo é uma decisão pessoal que merece ser acompanhada por informação de qualidade. Este guia foi escrito pela equipa AKOKY com a contribuição de centenas de membros experientes da comunidade portuguesa.</p>
            <p>Quer sejas <strong className="text-foreground">casal curioso</strong>, <strong className="text-foreground">mulher solteira</strong> ou <strong className="text-foreground">homem solo</strong>, encontrarás aqui todas as respostas: como preparar-te, o que esperar, como escolher o primeiro <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clube</Link> ou <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">sauna</Link>, e como viver esta experiência de forma positiva e respeitosa.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ 6 STEPS ═══════════ */}
      <section id="etapas" className="py-14 px-4 bg-background scroll-mt-20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">6 Etapas para Começar</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Segue este percurso ao teu ritmo. Não há pressão nem cronograma.</p>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    <span className="text-primary mr-2">Etapa {s.num}.</span>{s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GOLDEN RULES ═══════════ */}
      <section id="regras" className="py-14 px-4 bg-card/30 scroll-mt-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">As 8 Regras de Ouro</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">O respeito mútuo é a base absoluta do libertinismo. Estas regras são inegociáveis.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GOLDEN_RULES.map((r) => (
              <div key={r.title} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors">
                <span className="text-3xl block mb-3">{r.icon}</span>
                <h3 className="text-sm font-bold text-foreground mb-1">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROFILES ═══════════ */}
      <section id="perfis" className="py-14 px-4 bg-background scroll-mt-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Conselhos por Perfil</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROFILES.map((p) => (
              <div key={p.title} className="border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-colors">
                <span className="text-4xl block mb-3">{p.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ JEALOUSY ═══════════ */}
      <section id="ciume" className="py-14 px-4 bg-card/30 scroll-mt-20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Gerir o Ciúme</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">O ciúme é natural e humano. Não é um inimigo — é uma bússola emocional que indica os teus limites reais.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {JEALOUSY_TIPS.map((j) => (
              <div key={j.step} className="border border-border rounded-xl p-6 bg-card text-center">
                <span className="text-4xl block mb-3">{j.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-1">{j.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-primary/30 rounded-xl p-5 bg-primary/5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">💡 Dica AKOKY:</strong> Muitos casais experientes recomendam definir uma "palavra-chave" ou sinal discreto que signifique "preciso de parar e falar contigo". Este sistema simples pode prevenir situações desconfortáveis.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FIRST VISIT ═══════════ */}
      <section id="primeira-visita" className="py-14 px-4 bg-background scroll-mt-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">A Tua Primeira Visita a um Clube</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">6 conselhos práticos para que a primeira noitada seja memorável (pelos bons motivos).</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FIRST_VISIT.map((fv) => (
              <div key={fv.title} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors">
                <span className="text-3xl block mb-3">{fv.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-1">{fv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{fv.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pt/primeiro-clube-libertino" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Ler o guia completo do primeiro clube libertino →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ WHERE TO START ═══════════ */}
      <section id="onde" className="py-14 px-4 bg-card/30 scroll-mt-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Onde Começar em Portugal?</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">O AKOKY referencia os melhores estabelecimentos verificados para principiantes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "♨️", title: "Saunas Libertinos", desc: "Ambiente calmo, sem dress code. Ideal para a primeira vez.", to: "/pt/saunas-libertinos" },
              { icon: "🏛️", title: "Clubes Libertinos", desc: "27+ estabelecimentos verificados em todo o Portugal.", to: "/pt/clubes-libertinos" },
              { icon: "🎭", title: "Eventos Principiantes", desc: "Noitadas especialmente pensadas para recém-chegados.", to: "/pt/eventos" },
              { icon: "🥂", title: "Aperitivos", desc: "Encontros informais e sem pressão para conhecer a comunidade.", to: "/pt/eventos" },
            ].map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group border border-border rounded-xl p-5 bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <span className="text-3xl block mb-3">{card.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                <span className="inline-flex items-center text-primary text-xs font-semibold mt-3 group-hover:gap-2 gap-1 transition-all">Descobrir →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NAVIGATION ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Continua a Tua Descoberta</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/pt/primeiro-encontro-libertino" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">💑 Primeiro Encontro</Link>
            <Link to="/pt/primeiro-clube-libertino" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🏛️ Primeiro Clube</Link>
            <Link to="/pt/lexico" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">📖 Léxico Libertino</Link>
            <Link to="/pt/libertinismo" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🌐 O Libertinismo</Link>
            <Link to="/pt/clubbing" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🎶 Clubbing PT</Link>
            <Link to="/pt/akoky-vs-wyylde" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">⚔️ AKOKY vs Wyylde</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ SEO TEXT ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Guia Completo para Começar no Libertinismo em Portugal — AKOKY 2026</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              O libertinismo em Portugal vive um momento de crescimento sem precedentes. Cada vez mais casais e solteiros descobrem esta prática através de plataformas como o AKOKY, que oferece um espaço seguro, verificado e respeitoso para a <Link to="/pt/clubbing" className="text-primary hover:underline">exploração do clubbing libertino</Link>.
            </p>
            <p>
              Com <strong className="text-foreground">27+ estabelecimentos verificados</strong> no <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">diretório português</Link>, desde <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas</Link> tranquilos em Lisboa a resorts de verão no Algarve, passando por clubes vibrantes no Porto e propostas únicas na Madeira e Açores, Portugal tem uma oferta completa para todos os perfis.
            </p>
            <p>
              O AKOKY diferencia-se pela verificação rigorosa de cada estabelecimento, pelas <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações autênticas</Link> da comunidade e por uma <Link to="/pt/app" className="text-primary hover:underline">aplicação móvel</Link> que permite descobrir, comunicar e reservar em total discrição. Descarrega a app, junta-te à comunidade e começa a tua aventura libertina com confiança.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto para Dar o Primeiro Passo?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Junta-te a mais de 1,5 milhão de membros na maior comunidade libertina da Europa. Inscrição gratuita, discreta e verificada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.akoky.com/register" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              Criar Conta Gratuita →
            </a>
            <Link to="/pt/clubes-libertinos" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
              Explorar os Clubes
            </Link>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default ComecarLibertinagePt;
