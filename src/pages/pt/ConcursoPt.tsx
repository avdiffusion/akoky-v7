import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FAQ = [
  { question: "Como participar nos concursos Akoky?", answer: "Para participar, deves ser membro registado no Akoky. Cada concurso tem as suas próprias regras de participação detalhadas na sua página dedicada. A maioria é gratuita e aberta a todos os membros ativos." },
  { question: "Os concursos do Akoky são realmente gratuitos?", answer: "Sim, todos os concursos organizados pelo Akoky são 100% gratuitos. Não é necessária qualquer compra ou pagamento para participar." },
  { question: "Posso usar o programa de referência para os concursos?", answer: "Alguns concursos incluem bonificações ligadas ao programa de referência Akoky: participações múltiplas, pontos bónus, acesso prioritário. Consulta o regulamento de cada concurso." },
  { question: "Quais são os prémios a ganhar?", answer: "Os prémios variam: estadias em clubes libertinos premium, subscrições VIP Akoky, convites para eventos privados, packs oferta e experiências únicas em Portugal e na Europa." },
  { question: "Como são designados os vencedores?", answer: "Segundo as modalidades de cada concurso: sorteio, desempenho (o primeiro a completar uma tarefa), voto da comunidade ou júri Akoky." },
  { question: "Posso participar em vários concursos simultaneamente?", answer: "Sim, podes participar em tantos concursos Akoky quanto desejares." },
  { question: "Os meus dados pessoais estão protegidos?", answer: "Sim. O Akoky cumpre rigorosamente o RGPD e nunca partilha os teus dados com terceiros." },
];

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://akoky.com/pt" },
    { "@type": "ListItem", "position": 2, "name": "Concursos", "item": "https://akoky.com/pt/concurso" },
  ],
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Concursos AKOKY – Ganha Experiências Libertinas Exclusivas",
  "description": "Participa gratuitamente nos concursos Akoky e ganha estadias nos melhores clubes libertinos da Europa, subscrições VIP e experiências únicas.",
  "url": "https://akoky.com/pt/concurso",
  "inLanguage": "pt",
  "isPartOf": { "@type": "WebSite", "name": "AKOKY", "url": "https://akoky.com" },
};

const ConcursoPt = () => (
  <>
    <Helmet>
      <html lang="pt" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:site_name" content="AKOKY" />
      <meta name="twitter:site" content="@akoky_official" />
    </Helmet>
    <HreflangTags slug="concurso" />

    <ContentPageLayout
      lang="pt"
      title="Concursos AKOKY – Ganha Experiências Libertinas Exclusivas"
      description="Participa gratuitamente nos concursos Akoky e ganha estadias nos melhores clubes libertinos de Portugal e da Europa, subscrições VIP e experiências únicas."
      canonical="https://akoky.com/pt/concurso"
      heroTitle="Concursos AKOKY"
      heroSubtitle="Participa gratuitamente e ganha estadias, subscrições VIP e experiências libertinas exclusivas em Portugal e em toda a Europa."
      heroImage="/images/pt-concurso-cover.webp"
      breadcrumb={[{ label: "Concursos" }]}
      faq={FAQ}
      schema={[PAGE_SCHEMA, BREADCRUMB_SCHEMA]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto space-y-20">

          {/* ─── CONCURSOS ATUAIS ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🔥</span>
              <h2 className="text-3xl font-black text-foreground font-display">Concursos atuais</h2>
            </div>

            <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 text-center">
              <span className="text-6xl block mb-6">🏆</span>
              <h3 className="text-2xl font-bold text-foreground mb-4">Em breve, concursos exclusivos para Portugal!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                A equipa AKOKY está a preparar concursos excecionais para a comunidade libertina portuguesa. Estadias nos melhores clubes de <strong className="text-foreground">Lisboa</strong>, <strong className="text-foreground">Porto</strong>, <strong className="text-foreground">Algarve</strong> e mais cidades portuguesas, subscrições VIP e experiências únicas — fiquem atentos!
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Entretanto, cria a tua conta gratuita para seres o primeiro a participar quando forem lançados.
              </p>
              <a href="https://app.akoky.com/register" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
                Criar a minha conta grátis
              </a>
            </div>
          </div>

          {/* ─── PROGRAMA DE REFERÊNCIA ─── */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">👑</span>
                  <span className="text-primary text-sm font-bold uppercase tracking-wide">Programa de Referência</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 font-display">
                  Convida. Ganha. Desfruta.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Convida <strong className="text-foreground">10 membros</strong> para o Akoky e recebe <strong className="text-primary">6 meses de subscrição VIP+</strong> de oferta. Acesso ao live streaming, mensagens prioritárias, insígnia VIP+ e acesso a eventos exclusivos.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["✓ Sem compromisso", "✓ Sem subscrição obrigatória", "✓ Recompensa automática"].map((t, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-3 bg-card border border-primary/30 rounded-full px-6 py-3 mb-6">
                  <span className="text-lg font-black text-primary">10 Referências = 6 MESES VIP+</span>
                </div>
                <div className="block">
                  <Link to="/pt/referral" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">
                    Descobrir o programa →
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: "📢", label: "Fala do Akoky" },
                  { icon: "📝", label: "Inscrevem-se" },
                  { icon: "🎁", label: "Tu ganhas" },
                ].map((s, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4 w-24">
                    <span className="text-2xl block mb-1">{s.icon}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── PRÓXIMOS CONCURSOS (TEASERS) ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">⏳</span>
              <h2 className="text-3xl font-black text-foreground font-display">Próximos concursos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📸", title: "Concurso Foto de Casal", date: "finais de 2026 – início 2027", lot: "Fim de semana num clube premium", desc: "Partilha a tua melhor foto de casal libertino e ganha um fim de semana premium exclusivo." },
                { icon: "✍️", title: "Melhor Testemunho Libertino", date: "2027", lot: "3 subscrições Premium 1 ano", desc: "Conta a tua experiência libertina mais memorável e ganha." },
                { icon: "🌴", title: "Challenge Referência Verão", date: "Verão 2027", lot: "5 estadias em clubes europeus", desc: "Os melhores embaixadores ganham um fim de semana de sonho!" },
              ].map((c, i) => (
                <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border opacity-60">
                  <p className="text-muted-foreground/60 text-xs mb-2">{c.date}</p>
                  <span className="text-3xl block mb-3">{c.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{c.desc}</p>
                  <p className="text-muted-foreground text-sm"><strong>Prémio:</strong> {c.lot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CONCURSOS PASSADOS ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">✅</span>
              <h2 className="text-3xl font-black text-foreground font-display">Concursos passados</h2>
            </div>
            <div className="bg-card/50 border border-border rounded-2xl p-8 text-center">
              <p className="text-muted-foreground">Ainda não há concursos finalizados para Portugal. Os primeiros concursos AKOKY estão em preparação!</p>
            </div>
          </div>

          {/* ─── SEO TEXT ─── */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">Concursos AKOKY Portugal – Ganha experiências libertinas únicas</h2>
            <p>
              O AKOKY organiza regularmente <strong className="text-foreground">concursos gratuitos</strong> exclusivos para a sua comunidade libertina em Portugal e em toda a Europa. Com mais de <Link to="/pt" className="text-primary hover:underline">1,5 milhões de membros ativos</Link>, a plataforma oferece prémios excecionais: estadias nos <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">melhores clubes libertinos</Link> de Lisboa, Porto, Algarve e outras cidades, <Link to="/pt/vip" className="text-primary hover:underline">subscrições VIP premium</Link>, convites para <Link to="/pt/eventos" className="text-primary hover:underline">eventos privados exclusivos</Link> e experiências inesquecíveis.
            </p>
            <p>
              Ao contrário de <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong> ou <strong className="text-foreground">Libertic</strong>, o AKOKY aposta na qualidade e na transparência dos seus concursos. Cada concurso dispõe de um regulamento oficial, prémios verificados e um processo de seleção justo. Não é necessária qualquer compra nem subscrição para participar — basta criar uma <Link to="/pt/akoky" className="text-primary hover:underline">conta gratuita no AKOKY</Link>.
            </p>
            <p>
              Os concursos AKOKY cobrem todos os aspetos da experiência libertina: descoberta de <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link>, descoberta de <Link to="/pt/clubbing" className="text-primary hover:underline">clubes associados</Link>, utilização da nossa <Link to="/pt/app" className="text-primary hover:underline">aplicação móvel</Link>, participação em <Link to="/pt/live" className="text-primary hover:underline">lives exclusivos</Link> e envolvimento com a comunidade. Os membros mais ativos e os melhores embaixadores do <Link to="/pt/referral" className="text-primary hover:underline">programa de referência</Link> obtêm acesso prioritário aos próximos concursos.
            </p>
            <p>
              És novo no <Link to="/pt/libertinismo" className="text-primary hover:underline">libertinismo</Link>? Consulta o nosso <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico libertino</Link> e o nosso guia para <Link to="/pt/comecar-libertinismo" className="text-primary hover:underline">começar com o pé direito</Link>. Lê as <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações verificadas dos nossos membros</Link> (nota média 4,7/5) e junta-te à comunidade libertina mais ativa da Europa.
            </p>
          </div>

          <div className="text-center">
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Criar a minha conta grátis</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ConcursoPt;
