import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const FAQ = [
  { question: "Como preparar o primeiro encontro libertino?", answer: "Comunicar abertamente com o parceiro sobre desejos e limites, escolher um local verificado no AKOKY, definir um dress code e combinar um sinal de stop." },
  { question: "Onde ter o primeiro encontro libertino?", answer: "Um aperitivo libertino ou um sauna são os formatos mais recomendados para principiantes. Ambiente calmo, sem pressão, possibilidade de observar." },
  { question: "É preciso fazer alguma coisa no primeiro encontro?", answer: "Absolutamente não. Podes ir apenas para observar, socializar e beber um copo. Não há nenhuma obrigação de participar." },
  { question: "Como lidar com o nervosismo?", answer: "É completamente normal estar nervoso. Cheguem cedo, explorem o espaço juntos, falem um com o outro. O nervosismo desaparece rapidamente no ambiente acolhedor." },
  { question: "O que vestir para o primeiro encontro?", answer: "Depende do formato: elegante para clubes, casual chic para aperitivos, toalha para saunas. Consulta a ficha do local no AKOKY." },
  { question: "Podemos ir embora a qualquer momento?", answer: "Sim, a qualquer momento, sem justificação. A liberdade de sair é tão importante como a liberdade de ficar." },
  { question: "E se encontrarmos alguém conhecido?", answer: "Acontece raramente, mas se acontecer: a discrição é mútua. Essa pessoa está lá pelo mesmo motivo que tu." },
  { question: "Devo beber álcool para relaxar?", answer: "Um copo para descontrair, nunca mais. O álcool em excesso destrói o consentimento e a experiência." },
];

const FORMATS = [
  { icon: "🥂", title: "Aperitivo Libertino", desc: "Encontro informal num bar privado. Cocktails, conversa, sem pressão. O formato mais suave para uma primeira vez.", difficulty: "Ideal principiantes", color: "border-emerald-500/40 bg-emerald-500/5" },
  { icon: "♨️", title: "Sauna Libertino", desc: "Ambiente relaxado com jacuzzi e hammam. Contacto natural facilitado pelo bem-estar. Sem dress code complexo.", difficulty: "Muito acessível", color: "border-cyan-500/40 bg-cyan-500/5" },
  { icon: "🎭", title: "Noitada em Clube", desc: "Formato clássico com bar, música e múltiplos espaços. Mais estimulante mas também mais intenso para uma primeira vez.", difficulty: "Intermédio", color: "border-amber-500/40 bg-amber-500/5" },
  { icon: "🔒", title: "Encontro Privado", desc: "Em casa particular com poucos participantes selecionados. Mais íntimo, mais intenso. Recomendado após algumas experiências.", difficulty: "Avançado", color: "border-rose-500/40 bg-rose-500/5" },
];

const BEFORE = [
  { icon: "💬", title: "Comunicar com o Parceiro", desc: "Falem abertamente sobre desejos, limites e medos. Definam o que é aceitável e o que não é. Esta conversa é obrigatória." },
  { icon: "📋", title: "Definir Limites Claros", desc: "Até onde podem ir? Beijos com terceiros? Trocas? Soft swap? Full swap? Cada cenário deve ser discutido antecipadamente." },
  { icon: "🛑", title: "Combinar um Sinal de Stop", desc: "Uma palavra ou gesto discreto que signifique 'preciso de parar e falar contigo'. Sistema simples mas essencial." },
  { icon: "🔍", title: "Escolher o Local Certo", desc: "Consulta o diretório AKOKY, lê as avaliações, escolhe um formato adequado ao vosso nível de conforto." },
  { icon: "👗", title: "Preparar o Vestuário", desc: "Verifica o dress code na ficha do estabelecimento. Elegante para clubes, casual para aperitivos, toalha para saunas." },
  { icon: "🧼", title: "Higiene Impecável", desc: "Duche, perfume discreto, roupa limpa. A higiene é a primeira impressão e um sinal de respeito." },
];

const DURING = [
  { phase: "Chegada", icon: "🚪", tips: ["Chegem cedo quando o ambiente está mais calmo", "Façam o check-in juntos, explorem o espaço", "Tomem um copo no bar para relaxar"] },
  { phase: "Observação", icon: "👁️", tips: ["Observem sem pressão de participar", "Falem entre vocês sobre o que sentem", "Não tenham medo de ficar no bar toda a noite"] },
  { phase: "Socialização", icon: "🗣️", tips: ["Conversem com outros casais se quiserem", "Sejam naturais e respeitosos", "Não forcem nenhuma interação"] },
  { phase: "Exploração", icon: "✨", tips: ["Só se ambos estiverem genuinamente confortáveis", "Comecem devagar, ao vosso ritmo", "Usem o sinal de stop se necessário"] },
];

const AFTER = [
  { icon: "🛋️", title: "Conversar Imediatamente", desc: "No carro ou em casa, falem sobre o que viveram. Sem julgamento, sem filtros. Este debriefing é o momento mais importante." },
  { icon: "❤️", title: "Reconectar em Casal", desc: "Passem tempo íntimo juntos após a experiência. Reafirmem a vossa ligação. Muitos casais reportam mais proximidade depois." },
  { icon: "📝", title: "Ajustar os Limites", desc: "À luz da experiência, revisitem os limites. O que funcionou? O que não? O que gostariam de fazer diferente?" },
  { icon: "⏳", title: "Dar Tempo", desc: "Não planeiem a próxima experiência imediatamente. Deixem assentar as emoções. Voltem quando ambos estiverem prontos." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Começar", item: "https://akoky.com/pt/comecar-libertinagem" },
    { "@type": "ListItem", position: 3, name: "Primeiro Encontro", item: "https://akoky.com/pt/primeiro-encontro-libertino" },
  ],
};

const PrimeiroEncontroLibertinoPt = () => (
  <>
    <MetaTags
      title="Primeiro Encontro Libertino 2026 | Guia Completo — AKOKY"
      description="Guia completo para o teu primeiro encontro libertino: preparação, formatos, o que esperar, como agir antes, durante e depois. Conselhos para casais e solteiros."
      canonical="https://akoky.com/pt/primeiro-encontro-libertino"
      lang="pt"
    />
    <HreflangTags slug="primeiro-encontro-libertino" />
    <SchemaOrg schema={[breadcrumbSchema]} />
    <ContentPageLayout
      lang="pt"
      title="Primeiro Encontro Libertino — Guia AKOKY 2026"
      description="Guia completo para o teu primeiro encontro libertino."
      canonical="https://akoky.com/pt/primeiro-encontro-libertino"
      heroTitle="O Teu Primeiro Encontro Libertino"
      heroSubtitle="Guia prático e completo para preparar, viver e aproveitar o teu primeiro encontro libertino com confiança e respeito."
      heroImage="/images/pt-primeiro-encontro-cover.webp"
      breadcrumb={[{ label: "Começar", href: "/pt/comecar-libertinagem" }, { label: "Primeiro Encontro Libertino" }]}
      faq={FAQ}
    >

      {/* ═══════════ INTRO ═══════════ */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O Primeiro Passo Mais Importante</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>O primeiro encontro libertino é um momento único que marca o início de uma nova dimensão na tua vida íntima. Não importa se és <strong className="text-foreground">casal curioso</strong>, <strong className="text-foreground">mulher solteira</strong> ou <strong className="text-foreground">homem solo</strong> — a preparação é a chave para uma experiência positiva.</p>
            <p>Este guia foi escrito pela equipa AKOKY com base nos testemunhos de centenas de membros portugueses que partilharam as suas experiências. Se ainda não leste, começa pelo nosso guia geral para <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar na libertinagem</Link>.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ FORMATS ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Qual Formato Escolher?</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Do mais suave ao mais intenso — escolhe o formato adequado ao teu nível de conforto.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FORMATS.map((f) => (
              <div key={f.title} className={`border-2 ${f.color} rounded-xl p-6 transition-all hover:shadow-lg`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{f.icon}</span>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{f.difficulty}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pt/clubes-libertinos" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Consultar o diretório de estabelecimentos →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ BEFORE ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Antes do Encontro</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">A preparação representa 80% do sucesso. Não saltes nenhum passo.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BEFORE.map((b) => (
              <div key={b.title} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors">
                <span className="text-3xl block mb-3">{b.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ DURING ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Durante o Encontro — As 4 Fases</h2>
          <div className="space-y-6">
            {DURING.map((d, i) => (
              <div key={d.phase} className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-2xl">{d.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    <span className="text-primary mr-2">Fase {i + 1}.</span>{d.phase}
                  </h3>
                  <ul className="space-y-1.5">
                    {d.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5 shrink-0">→</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ AFTER ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Depois do Encontro</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">O que fazes depois é tão importante como o que fazes durante.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AFTER.map((a) => (
              <div key={a.title} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-colors">
                <span className="text-3xl block mb-3">{a.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMMON MISTAKES ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">5 Erros a Evitar</h2>
          <div className="space-y-4">
            {[
              { icon: "🚫", title: "Não comunicar antes", desc: "Ir sem ter falado de limites é a receita para uma experiência negativa. A conversa é obrigatória." },
              { icon: "🍺", title: "Beber demais", desc: "O álcool desinibe mas também destrói o discernimento e o consentimento. Moderação absoluta." },
              { icon: "⏩", title: "Ir demasiado depressa", desc: "Não querer fazer tudo na primeira noite. Observar, socializar e guardar o resto para depois." },
              { icon: "🤐", title: "Ignorar os sentimentos", desc: "Se sentires desconforto, fala imediatamente. Reprimir emoções gera ressentimento a longo prazo." },
              { icon: "📱", title: "Fotografar sem permissão", desc: "A privacidade é sagrada. Telemóveis devem ficar no cacifo. Nunca filmar ou fotografar sem consentimento." },
            ].map((err) => (
              <div key={err.title} className="flex gap-4 items-start border border-border rounded-xl p-4 bg-card">
                <span className="text-2xl shrink-0">{err.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">{err.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{err.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NAVIGATION ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-foreground mb-6">Continua a Tua Descoberta</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/pt/comecar-libertinagem" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🚀 Guia para Começar</Link>
            <Link to="/pt/primeiro-clube-libertino" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🏛️ Primeiro Clube</Link>
            <Link to="/pt/clubes-libertinos" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">📍 Diretório Clubes</Link>
            <Link to="/pt/saunas-libertinos" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">♨️ Saunas</Link>
            <Link to="/pt/lexico" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">📖 Léxico</Link>
            <Link to="/pt/eventos" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🎭 Eventos</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ SEO TEXT ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">O Teu Primeiro Encontro Libertino em Portugal — Guia AKOKY 2026</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              O primeiro encontro libertino é um dos momentos mais marcantes da descoberta deste universo. Em Portugal, a cena libertina está em pleno crescimento, com <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">27+ estabelecimentos verificados</Link> no diretório AKOKY — de <strong className="text-foreground">Lisboa</strong> ao <strong className="text-foreground">Porto</strong>, passando pelo <strong className="text-foreground">Algarve</strong> e a <strong className="text-foreground">Madeira</strong>.
            </p>
            <p>
              Para os principiantes, recomendamos começar por um <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">sauna libertino</Link> (ambiente calmo, sem dress code) ou um aperitivo dos <Link to="/pt/eventos" className="text-primary hover:underline">eventos AKOKY</Link> (formato informal e social). A <Link to="/pt/app" className="text-primary hover:underline">aplicação AKOKY</Link> permite explorar a comunidade, comunicar de forma segura e reservar diretamente.
            </p>
            <p>
              A <Link to="/pt/visao" className="text-primary hover:underline">visão AKOKY</Link> é clara: uma libertinagem respeitosa, segura e autêntica. Lê as <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações</Link> da comunidade, consulta o <Link to="/pt/lexico" className="text-primary hover:underline">léxico libertino</Link> e dá o primeiro passo com confiança.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto para o Primeiro Encontro?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Junta-te à maior comunidade libertina da Europa. Inscrição gratuita, discreta e verificada.</p>
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

export default PrimeiroEncontroLibertinoPt;
