import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const FAQ = [
  { question: "O programa de referral é gratuito?", answer: "Sim. A participação é 100% gratuita para todos os membros AKOKY, sem compromisso." },
  { question: "Quando são atribuídas as vantagens?", answer: "As vantagens são creditadas automaticamente assim que o teu convidado ativa a sua conta com o teu link." },
  { question: "Existe um limite de convites?", answer: "Não. Podes convidar quantas pessoas quiseres. Quanto mais convidares, mais acumulas." },
  { question: "Os meus convidados também recebem vantagens?", answer: "Sim! Cada novo membro convidado recebe 7 dias VIP gratuitos de boas-vindas para explorar a plataforma." },
  { question: "Como acompanho os meus convites?", answer: "No teu painel de membro, a secção 'Referral' mostra em tempo real: convites enviados, inscrições validadas e vantagens acumuladas." },
  { question: "Posso partilhar o link nas redes sociais?", answer: "Sim. O teu link funciona em qualquer suporte: WhatsApp, Instagram, email, SMS ou qualquer outro canal." },
  { question: "10 referrals = 6 meses VIP+, é garantido?", answer: "Sim. A oferta é automática e garantida. Ao 10º referral validado, os 6 meses VIP+ são creditados instantaneamente." },
];

const TIERS = [
  { min: 1, reward: "7 dias VIP", icon: "🌟", color: "border-border" },
  { min: 3, reward: "1 mês VIP", icon: "⭐", color: "border-amber-500/40" },
  { min: 5, reward: "3 meses VIP + Badge", icon: "🏅", color: "border-amber-500/40" },
  { min: 10, reward: "6 meses VIP+ !", icon: "🏆", color: "border-primary" },
];

const REWARDS = [
  { icon: "👑", title: "Dias VIP Gratuitos", desc: "Cada convite validado dá-te dias de subscrição VIP. Acumula até 6 meses com 10 referrals." },
  { icon: "🎭", title: "Acesso Prioritário a Eventos", desc: "Os melhores referrers acedem primeiro aos eventos exclusivos: noitadas privadas, fins de semana temáticos." },
  { icon: "🏷️", title: "Badge de Embaixador", desc: "A partir de 5 referrals, recebes o badge 'Embaixador AKOKY' visível no teu perfil. Reconhecimento da comunidade." },
  { icon: "🎁", title: "Surpresas Exclusivas", desc: "Os top referrers recebem convites VIP para eventos especiais, merchandising AKOKY e ofertas surpresa." },
];

const STEPS = [
  { num: "1", icon: "🔗", title: "Copia o Teu Link", desc: "Acede ao teu espaço de membro, secção 'Referral', e copia o teu link pessoal único." },
  { num: "2", icon: "📤", title: "Partilha com Amigos", desc: "WhatsApp, Instagram, email, SMS — partilha onde quiseres. O link é discreto e não revela o conteúdo." },
  { num: "3", icon: "✅", title: "Amigo Regista-se", desc: "O teu amigo cria a conta com o teu link. Ele recebe 7 dias VIP de boas-vindas, tu ganhas recompensas." },
  { num: "4", icon: "🎉", title: "Recebes as Vantagens", desc: "Crédito automático e instantâneo. Acompanha tudo no teu painel de referral em tempo real." },
];

const TESTIMONIALS = [
  { name: "Ana & Pedro", city: "Lisboa", text: "Convidámos 3 casais amigos e já temos 3 meses VIP grátis. O programa é super simples e as vantagens são reais!", avatar: "💑" },
  { name: "Sofia", city: "Porto", text: "Como mulher solo, partilhei o link com amigas curiosas. 5 referrals e já tenho o badge de Embaixadora!", avatar: "👩" },
  { name: "Ricardo & Marta", city: "Algarve", text: "10 referrals em 2 meses. 6 meses VIP+ e acesso a eventos exclusivos. O melhor programa de fidelidade!", avatar: "🏖️" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Programa de Referral", item: "https://akoky.com/pt/referral" },
  ],
};

const ReferralPt = () => (
  <>
    <MetaTags
      title="Programa de Referral AKOKY 2026 | Convida e Ganha até 6 Meses VIP+"
      description="Convida amigos para o AKOKY e ganha até 6 meses VIP+, acesso prioritário a eventos e badge de Embaixador. Programa gratuito e sem limites."
      canonical="https://akoky.com/pt/referral"
      lang="pt"
    />
    <HreflangTags slug="referral" />
    <SchemaOrg schema={[breadcrumbSchema]} />
    <ContentPageLayout
      lang="pt"
      title="Programa de Referral AKOKY 2026"
      description="Convida e ganha até 6 meses VIP+."
      canonical="https://akoky.com/pt/referral"
      heroTitle="Convida Amigos, Ganha Recompensas"
      heroSubtitle="10 referrals = 6 meses VIP+ gratuitos. Partilha o teu link, faz crescer a comunidade e desbloqueia vantagens exclusivas."
      heroImage="/images/soiree-couple-libertin.webp"
      breadcrumb={[{ label: "Programa de Referral" }]}
      faq={FAQ}
    >

      {/* ═══════════ HIGHLIGHT OFFER ═══════════ */}
      <section className="py-10 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="border-2 border-primary rounded-2xl p-8 bg-primary/5 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            <span className="text-5xl block mb-4">🏆</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">10 Referrals = 6 Meses VIP+</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">Convida 10 amigos, ganha 6 meses de subscrição VIP+ gratuita. Sem compromisso, sem limite de tempo, sem condições ocultas.</p>
            <a
              href="https://app.akoky.com/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Começar a Convidar →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Como Funciona?</h2>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    <span className="text-primary mr-2">{s.num}.</span>{s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TIERS ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Níveis de Recompensa</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Quanto mais convidas, mais ganhas. Sem limite.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TIERS.map((tier) => (
              <div key={tier.min} className={`border-2 ${tier.color} rounded-xl p-5 bg-card text-center hover:shadow-lg transition-all`}>
                <span className="text-4xl block mb-3">{tier.icon}</span>
                <p className="text-3xl font-black text-primary mb-1">{tier.min}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">referral{tier.min > 1 ? "s" : ""}</p>
                <p className="text-sm font-bold text-foreground">{tier.reward}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ REWARDS DETAIL ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">As Tuas Vantagens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REWARDS.map((r) => (
              <div key={r.title} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-colors group">
                <span className="text-3xl block mb-3">{r.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">O Que Dizem os Nossos Embaixadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-border rounded-xl p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{t.avatar}</span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">📍 {t.city}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ YOUR FRIEND GETS TOO ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <div className="border border-primary/30 rounded-2xl p-8 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎁</span>
              <h2 className="text-2xl font-bold text-foreground">O Teu Amigo Também Ganha!</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">Cada pessoa que se regista com o teu link recebe automaticamente <strong className="text-foreground">7 dias VIP gratuitos</strong> para explorar a plataforma sem limites: mensagens ilimitadas, acesso ao diretório completo, fotos em alta resolução e eventos exclusivos.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {[
                { icon: "💬", label: "Mensagens ilimitadas" },
                { icon: "🏛️", label: "Diretório completo" },
                { icon: "📸", label: "Fotos HD" },
                { icon: "🎭", label: "Eventos exclusivos" },
              ].map((b) => (
                <div key={b.label} className="text-center p-3 bg-card/50 rounded-lg border border-border">
                  <span className="text-xl block mb-1">{b.icon}</span>
                  <p className="text-xs text-muted-foreground">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SHARING TIPS ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Dicas para Maximizar os Teus Referrals</h2>
          <div className="space-y-4">
            {[
              { icon: "📱", title: "WhatsApp & Telegram", desc: "Partilha o link diretamente nas conversas de grupo ou individuais. O formato mais eficaz." },
              { icon: "📸", title: "Stories Instagram", desc: "Usa uma mensagem discreta como 'Descobri algo incrível, link na bio' para despertar curiosidade." },
              { icon: "💌", title: "Email Pessoal", desc: "Escreve uma mensagem personalizada a amigos que sabes que podem estar interessados." },
              { icon: "🗣️", title: "Boca-a-boca", desc: "A forma mais autêntica. Fala da tua experiência positiva no AKOKY a casais de confiança." },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-4 items-start border border-border rounded-xl p-4 bg-card hover:border-primary/30 transition-colors">
                <span className="text-2xl shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NAVIGATION ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-foreground mb-6">Descobre Mais do AKOKY</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/pt/vip" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">👑 Subscrição VIP</Link>
            <Link to="/pt/clubes-libertinos" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🏛️ Clubes Libertinos</Link>
            <Link to="/pt/eventos" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🎭 Eventos</Link>
            <Link to="/pt/app" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">📱 Aplicação</Link>
            <Link to="/pt/comecar-libertinagem" className="px-5 py-2.5 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors">🚀 Começar</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ SEO TEXT ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Programa de Referral AKOKY em Portugal — 2026</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              O programa de referral do AKOKY é o mais generoso do universo libertino europeu. Com uma oferta clara — <strong className="text-foreground">10 referrals = 6 meses VIP+</strong> — e sem condições ocultas, é a forma mais simples de desfrutar da plataforma ao máximo enquanto fazes crescer a <Link to="/pt/clubbing" className="text-primary hover:underline">comunidade libertina portuguesa</Link>.
            </p>
            <p>
              Cada referral validado dá-te acesso a vantagens crescentes: dias VIP, badge de Embaixador, acesso prioritário aos <Link to="/pt/eventos" className="text-primary hover:underline">eventos exclusivos</Link> e surpresas reservadas aos top referrers. O teu convidado também beneficia de 7 dias VIP de boas-vindas para explorar os <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">27+ clubes e saunas verificados</Link> em Portugal.
            </p>
            <p>
              Descarrega a <Link to="/pt/app" className="text-primary hover:underline">aplicação AKOKY</Link>, partilha o teu link e começa a acumular recompensas. Junta-te aos milhares de embaixadores que já fazem a comunidade crescer de forma orgânica e autêntica.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto para Convidar?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Cria a tua conta gratuita, copia o teu link de referral e começa a acumular vantagens hoje.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.akoky.com/register" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              Criar Conta Gratuita →
            </a>
            <Link to="/pt/vip" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
              Descobrir o VIP
            </Link>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default ReferralPt;
