import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const FAQ = [
  { question: "Como preparar-me para a primeira noitada num clube libertino?", answer: "Reserva com antecedência, informa-te sobre o dress code, chega cedo para explorares o espaço vestido e lembra-te: tens o direito absoluto de dizer não a qualquer momento." },
  { question: "O que acontece se o ambiente não me agradar?", answer: "Podes ir embora quando quiseres. Não há nenhuma obrigação de ficar nem de participar em nada. A liberdade é também a liberdade de sair." },
  { question: "Os clubes libertinos são seguros?", answer: "Os clubes referenciados no AKOKY foram verificados em termos de segurança e respeito das normas. Escolhe sempre estabelecimentos verificados com boas avaliações." },
  { question: "Posso ir sozinho/a a um clube libertino?", answer: "Depende do clube. Alguns aceitam singles, outros são exclusivamente para casais. Consulta a ficha de cada estabelecimento no AKOKY para conheceres a política de admissão." },
  { question: "Quanto custa a entrada num clube libertino em Portugal?", answer: "Os preços variam entre 20€ e 80€ por casal segundo o clube e o dia. As mulheres solteiras têm frequentemente entrada gratuita ou reduzida. Homens solteiros pagam geralmente mais." },
  { question: "Qual é a diferença entre um clube libertino e um sauna libertino?", answer: "O clube libertino privilegia o ambiente de festa (bar, música, pista de dança). O sauna libertino centra-se no bem-estar (jacuzzi, hammam, sauna) num ambiente mais relaxado e propício a encontros." },
];

const GUIDE_CARDS = [
  { title: "Diretório de Clubes", desc: "27 clubes e saunas verificados em Portugal", icon: "🏛️", to: "/pt/clubes-libertinos", color: "from-primary/20 to-primary/5" },
  { title: "Saunas Libertinos", desc: "Bem-estar e encontros em ambiente relaxado", icon: "♨️", to: "/pt/saunas-libertinos", color: "from-cyan-500/20 to-cyan-500/5" },
  { title: "Começar a Libertinagem", desc: "Guia completo para principiantes", icon: "🚀", to: "/pt/comecar-libertinagem", color: "from-emerald-500/20 to-emerald-500/5" },
  { title: "Eventos Libertinos", desc: "Próximas noitadas e festas em Portugal", icon: "🎭", to: "/pt/eventos", color: "from-purple-500/20 to-purple-500/5" },
  { title: "Avaliações Verificadas", desc: "Opiniões reais da comunidade AKOKY", icon: "⭐", to: "/pt/avaliacoes", color: "from-amber-500/20 to-amber-500/5" },
  { title: "Aplicação AKOKY", desc: "Descarrega a app para encontros seguros", icon: "📱", to: "/pt/app", color: "from-rose-500/20 to-rose-500/5" },
];

const CITY_LINKS = [
  "Lisboa", "Porto", "Albufeira", "Vilamoura", "Portimão", "Lagos", "Funchal",
  "Coimbra", "Aveiro", "Setúbal", "Braga", "Guimarães", "Viseu", "Ponta Delgada",
];

const RULES = [
  { icon: "🤝", title: "Consentimento", desc: "Nunca tocar sem permissão explícita. Aceitar o não sem discussão." },
  { icon: "📵", title: "Privacidade", desc: "Sem fotos nem vídeos sem consentimento. Discrição absoluta fora do clube." },
  { icon: "🧼", title: "Higiene", desc: "Cuidar da higiene pessoal. Usar os duches disponíveis." },
  { icon: "💬", title: "Comunicação", desc: "Falar com o/a parceiro/a antes, durante e depois. Definir limites claros." },
  { icon: "🛡️", title: "Proteção", desc: "Usar sempre preservativo. Os clubes sérios disponibilizam-nos gratuitamente." },
  { icon: "🍷", title: "Sobriedade", desc: "Beber com moderação. O álcool em excesso altera o discernimento." },
];

const DRESS_CODES = [
  { name: "Elegante", desc: "Fato para homens, vestido ou saia para mulheres. O clássico da maioria dos clubes.", icon: "👔" },
  { name: "Sexy / Lingerie", desc: "Lingerie, latex, couro, rede. Frequente nas noites temáticas.", icon: "🖤" },
  { name: "Temático", desc: "Máscaras, disfarces, cores impostas. Consulta a ficha do evento.", icon: "🎭" },
  { name: "Naturista", desc: "Permitido nalguns saunas e festas de verão. Nu ou toalha.", icon: "☀️" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Clubbing Libertino", item: "https://akoky.com/pt/clubbing" },
  ],
};

const ClubbingPt = () => (
  <>
    <MetaTags
      title="Clubbing Libertino em Portugal 2026 | Guia Completo — AKOKY"
      description="Guia completo do clubbing libertino em Portugal: diretório de clubes e saunas, regras, dress codes, preparação e os melhores estabelecimentos em Lisboa, Porto e Algarve."
      canonical="https://akoky.com/pt/clubbing"
      lang="pt"
    />
    <HreflangTags slug="clubbing" />
    <SchemaOrg schema={[breadcrumbSchema]} />
    <ContentPageLayout
      lang="pt"
      title="Clubbing Libertino em Portugal 2026 | Guia Completo — AKOKY"
      description="Guia completo do clubbing libertino em Portugal."
      canonical="https://akoky.com/pt/clubbing"
      heroTitle="Clubbing Libertino em Portugal"
      heroSubtitle="O teu guia completo para a cena libertina portuguesa: clubes verificados, saunas, regras, dress codes e preparação para uma experiência inesquecível."
      heroImage="/images/pt-clubbing-cover.webp"
      breadcrumb={[{ label: "Clubbing Libertino em Portugal" }]}
      faq={FAQ}
    >

      {/* ═══════════ NAVIGATION HUB ═══════════ */}
      <section className="py-12 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Explora o Universo Libertino Português</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Tudo o que precisas para viver o clubbing libertino em Portugal com confiança, segurança e prazer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDE_CARDS.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className={`group relative overflow-hidden border border-border rounded-2xl p-6 bg-gradient-to-br ${card.color} hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300`}
              >
                <span className="text-4xl block mb-3">{card.icon}</span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
                <span className="inline-flex items-center text-primary text-xs font-semibold mt-3 group-hover:gap-2 gap-1 transition-all">
                  Descobrir →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT IS CLUBBING ═══════════ */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O que é o Clubbing Libertino?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>O clubbing libertino é a frequentação de <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> para noitadas sociais e sensuais num contexto organizado e seguro. Ao contrário dos encontros privados, o clube oferece um espaço neutro, com regras claras e pessoal formado para garantir o bem-estar de todos os visitantes.</p>
            <p>Portugal tem uma das cenas libertinas mais ativas da Europa. <strong className="text-foreground">Lisboa</strong> e <strong className="text-foreground">Porto</strong> são os dois epicentros, com dezenas de clubes de todos os tamanhos e estilos. O fenómeno estende-se ao <strong className="text-foreground">Algarve</strong>, à <strong className="text-foreground">Madeira</strong> e até aos <strong className="text-foreground">Açores</strong>. Se és novo neste mundo, consulta o nosso guia para <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar na libertinagem</Link>.</p>
            <p>O AKOKY referencia <strong className="text-foreground">mais de 27 estabelecimentos verificados</strong> em Portugal, entre clubes de troca, <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link>, clubes privados e bares libertinos. Cada ficha inclui morada, horários, preços, fotos e <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações autênticas</Link> da comunidade.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ RULES OF GOLD ═══════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">As 6 Regras de Ouro</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">O respeito mútuo é o pilar do clubbing libertino. Estas regras são inegociáveis.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RULES.map((rule) => (
              <div key={rule.title} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors">
                <span className="text-3xl block mb-3">{rule.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-1">{rule.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PREPARATION ═══════════ */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Preparar-se para uma Noitada</h2>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">1</span>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Reservar com Antecedência</h3>
                <p className="text-muted-foreground leading-relaxed">A maioria dos clubes de qualidade requer reserva, especialmente ao fim de semana. Reserva através do AKOKY para as melhores condições. Consulta o <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">diretório</Link> para escolheres.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">2</span>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Informar-se sobre o Dress Code</h3>
                <p className="text-muted-foreground leading-relaxed">Cada clube tem o seu próprio código de vestuário. Consulta a ficha do estabelecimento no AKOKY antes de saíres de casa.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">3</span>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Comunicar com o/a Parceiro/a</h3>
                <p className="text-muted-foreground leading-relaxed">Definam os vossos limites, desejos e sinais antes de chegar. A comunicação é a chave de uma experiência positiva. Lê o nosso guia do <Link to="/pt/primeiro-encontro-libertino" className="text-primary hover:underline">primeiro encontro libertino</Link>.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">4</span>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Chegar Cedo e Explorar</h3>
                <p className="text-muted-foreground leading-relaxed">Começa pelos espaços vestidos (bar, salão) para te ambientares. Faz a visita guiada se o clube oferecer. Não tenhas pressa — o clubbing é antes de mais uma experiência social.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DRESS CODES ═══════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Dress Codes nos Clubes Portugueses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DRESS_CODES.map((dc) => (
              <div key={dc.name} className="border border-border rounded-xl p-5 bg-card text-center hover:border-primary/40 transition-colors">
                <span className="text-4xl block mb-3">{dc.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-2">{dc.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{dc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TYPES D'ÉTABLISSEMENTS ═══════════ */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Tipos de Estabelecimentos Libertinos</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-5">
              <h3 className="text-lg font-bold text-foreground mb-1">🏛️ Clube Libertino (Clube de Troca)</h3>
              <p className="text-muted-foreground leading-relaxed">O estabelecimento clássico com bar, pista de dança, dark room e espaços íntimos. O ambiente é festivo e social. Os preços variam entre 30€ e 70€ por casal.</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-5">
              <h3 className="text-lg font-bold text-foreground mb-1">♨️ Sauna Libertino</h3>
              <p className="text-muted-foreground leading-relaxed">Centra-se no bem-estar: jacuzzi, hammam, sauna finlandesa, cabinas privadas. O ambiente é mais relaxado e propício a encontros tranquilos. Descobre os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas em Portugal</Link>.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-5">
              <h3 className="text-lg font-bold text-foreground mb-1">🔑 Clube Privado</h3>
              <p className="text-muted-foreground leading-relaxed">Acesso por convite ou adesão anual. Clientela selecionada, capacidade limitada, serviço premium. O nível mais exclusivo do clubbing libertino.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-5">
              <h3 className="text-lg font-bold text-foreground mb-1">🍸 Bar Libertino</h3>
              <p className="text-muted-foreground leading-relaxed">Cocktails, música lounge e ambiente íntimo. Perfeito para principiantes ou para uma noitada mais suave. Espaços de encontros discretos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CITY EXPLORER ═══════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Explorar por Cidade</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">Descobre os clubes e saunas libertinos verificados nas principais cidades portuguesas.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {CITY_LINKS.map((city) => (
              <Link
                key={city}
                to={`/pt/clubes-libertinos`}
                className="px-5 py-2.5 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARATIFS ═══════════ */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">AKOKY vs. a Concorrência</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Porque é que o AKOKY é a melhor plataforma libertina em Portugal? Compara por ti mesmo.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/pt/akoky-vs-wyylde" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">AKOKY vs Wyylde</Link>
            <Link to="/pt/melhor-sitio-libertino" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">Melhor Site Libertino 2026</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ DEEP SEO TEXT ═══════════ */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Guia Completo do Clubbing Libertino em Portugal — AKOKY 2026</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              O clubbing libertino em Portugal vive um momento de crescimento sem precedentes. Com <strong className="text-foreground">mais de 27 estabelecimentos verificados</strong> no <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">diretório AKOKY</Link>, o país oferece uma diversidade impressionante de clubes de troca, <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link>, clubes privados e bares libertinos em todas as regiões.
            </p>
            <p>
              <strong className="text-foreground">Lisboa</strong> lidera com uma meia dúzia de clubes de referência, seguida pelo <strong className="text-foreground">Porto</strong> com a sua cena vibrante às margens do Douro. O <strong className="text-foreground">Algarve</strong> tornou-se o destino libertino de verão por excelência, com resorts e beach clubs dedicados em Albufeira, Vilamoura e Lagos. A <strong className="text-foreground">Madeira</strong> e os <strong className="text-foreground">Açores</strong> completam a oferta com propostas únicas e paisagens de cortar a respiração.
            </p>
            <p>
              O AKOKY distingue-se como a plataforma de referência para o clubbing libertino em Portugal graças à verificação rigorosa de cada estabelecimento, às <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações autênticas</Link> da comunidade e à <Link to="/pt/app" className="text-primary hover:underline">aplicação móvel</Link> que permite reservar, comunicar e participar nos <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link> diretamente. Descarrega a app, junta-te à comunidade e descobre a cena libertina portuguesa como nunca antes.
            </p>
            <p>
              Se és principiante, começa pela nossa <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">guia de iniciação</Link>, consulta o <Link to="/pt/lexico" className="text-primary hover:underline">léxico libertino</Link> para dominares os códigos, e lê as <Link to="/pt/perguntas-frequentes" className="text-primary hover:underline">perguntas frequentes</Link> dos membros. Depois, escolhe o teu primeiro clube no nosso <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">diretório</Link> e vive a experiência. A <Link to="/pt/visao" className="text-primary hover:underline">visão AKOKY</Link>: uma libertinagem respeitosa, segura e autêntica para todos.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto para Descobrir o Clubbing Libertino?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Junta-te a mais de 1,5 milhão de membros na maior comunidade libertina da Europa. Inscrição gratuita, discreta e verificada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.akoky.com/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Criar a Minha Conta Gratuita →
            </a>
            <Link
              to="/pt/clubes-libertinos"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors"
            >
              Explorar o Diretório
            </Link>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default ClubbingPt;
