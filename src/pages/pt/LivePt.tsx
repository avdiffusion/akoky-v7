import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Video, Users, Building2, Shield, Star, Tv, Eye, Sparkles } from "lucide-react";

const FAQ = [
  { question: "Como aceder aos lives AKOKY?", answer: "Os lives são acessíveis aos membros registados. Alguns conteúdos estão reservados aos membros VIP. Cria a tua conta gratuitamente no AKOKY." },
  { question: "Os lives são seguros?", answer: "Sim. Todos os participantes são verificados, a moderação é humana 24h/7d e o acesso é estritamente reservado a membros maiores de 18 anos." },
  { question: "Posso transmitir o meu próprio live?", answer: "Sim, os membros verificados podem transmitir. Cada transmissão está sujeita à carta AKOKY e a uma verificação preliminar." },
  { question: "Os lives ficam guardados?", answer: "Alguns lives estão disponíveis em replay para membros VIP. Os transmissores controlam se o seu live fica disponível após a transmissão." },
  { question: "Posso interagir durante um live?", answer: "Sim! O chat em direto permite interagir com os transmissores e outros espetadores. Os membros VIP têm mensagens destacadas." },
  { question: "Os lives são anónimos?", answer: "Sim, os espetadores podem assistir em modo incógnito sem que o seu nome apareça no chat ou na lista de participantes." },
  { question: "Quantos lives existem por semana?", answer: "Mais de 20 lives por semana: lives de casais, lives solo, lives de clubes e lives temáticos especiais." },
];

const LIVE_TYPES = [
  { icon: Users, title: "Lives de Casais", desc: "Casais verificados partilham momentos da sua vida íntima em direto. Interage no chat, faz perguntas e cria ligações reais com pessoas da tua comunidade.", viewers: "50-200", frequency: "8-10/semana" },
  { icon: Star, title: "Lives Solo", desc: "Homens e mulheres solteiros partilham as suas experiências e interagem com a comunidade. O formato mais popular para principiantes que querem explorar.", viewers: "30-100", frequency: "5-8/semana" },
  { icon: Building2, title: "Lives dos Clubes", desc: "Clubes parceiros transmitem noitadas em direto exclusivamente para a comunidade AKOKY. Uma imersão total na atmosfera das melhores noitadas libertinas da Europa.", viewers: "200-500", frequency: "2-3/semana" },
  { icon: Sparkles, title: "Lives Temáticos", desc: "Noitadas especiais com temas: Halloween, Carnaval, Noite Branca, Masquerade. Produções de qualidade com ambientes únicos.", viewers: "300+", frequency: "1-2/mês" },
];

const FEATURES = [
  { emoji: "💬", title: "Chat em Direto", desc: "Conversa em tempo real com transmissores e espetadores. Reações, emojis e mensagens destacadas para VIP." },
  { emoji: "🔒", title: "Modo Incógnito", desc: "Assiste sem que o teu nome apareça. Total discrição para quem quer observar sem interagir." },
  { emoji: "📹", title: "HD Streaming", desc: "Qualidade HD em todas as transmissões. Adaptação automática à velocidade da tua ligação." },
  { emoji: "⏪", title: "Replay VIP", desc: "Revê os melhores lives a qualquer momento. Biblioteca de replays exclusiva para membros VIP." },
  { emoji: "🔔", title: "Alertas Personalizados", desc: "Recebe notificações quando os teus transmissores favoritos estão em direto." },
  { emoji: "📺", title: "Compatível TV", desc: "Projeta os lives na tua Smart TV via Chromecast ou Android TV para uma experiência imersiva." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Lives Libertinos", item: "https://akoky.com/pt/live" },
  ],
};

const LivePt = () => (
  <>
    <MetaTags
      title="Lives Libertinos Exclusivos | Streaming Premium AKOKY Portugal"
      description="Descobre 20+ lives libertinos por semana: atmosfera de clubes em direto, noitadas exclusivas, conteúdos VIP. Streaming seguro e discreto."
      canonical="https://akoky.com/pt/live"
      lang="pt"
      ogImage="/images/live-akoky.webp"
    />
    <HreflangTags slug="live" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="Lives Libertinos Exclusivos | Streaming Premium AKOKY Portugal"
      description="Descobre 20+ lives libertinos por semana: atmosfera de clubes em direto, noitadas exclusivas."
      canonical="https://akoky.com/pt/live"
      heroTitle="Lives AKOKY — Vídeos e Encontros em Direto"
      heroSubtitle="20+ lives por semana: clubes em direto, noitadas exclusivas, conteúdos VIP. Seguro e discreto."
      heroImage="/images/pt-live-cover.webp"
      breadcrumb={[{ label: "Lives AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Intro */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Video className="w-4 h-4" /> Streaming Premium
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Bem-vindo à Experiência AKOKY Live</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O AKOKY Live é a plataforma de streaming libertino mais completa da Europa. Com mais de 20 lives por semana, terás acesso a uma experiência imersiva do mundo libertino a partir do conforto de casa. Cada transmissão é moderada, segura e feita com o consentimento explícito de todos os participantes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "20+", label: "Lives/semana" },
              { value: "500+", label: "Espetadores/live" },
              { value: "HD", label: "Qualidade streaming" },
              { value: "24/7", label: "Moderação humana" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-card/60 border border-border">
                <span className="text-3xl font-bold text-primary block mb-2">{s.value}</span>
                <span className="text-muted-foreground text-sm">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Live Types */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Tipos de Lives</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {LIVE_TYPES.map((t, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.desc}</p>
                <div className="flex gap-4 text-xs">
                  <span className="text-muted-foreground">👁️ {t.viewers} espetadores</span>
                  <span className="text-muted-foreground">📅 {t.frequency}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Funcionalidades de Streaming</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FEATURES.map((f, i) => (
              <div key={i} className="p-5 rounded-xl bg-card/40 border border-border">
                <span className="text-2xl block mb-3">{f.emoji}</span>
                <h3 className="text-foreground font-bold mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Safety */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Segurança e Consentimento</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Eye, title: "Consentimento Explícito", desc: "Todos os participantes deram o seu consentimento para ser filmados e transmitidos. Nenhuma imagem é publicada sem autorização." },
                { icon: Shield, title: "Moderação em Tempo Real", desc: "Cada live é supervisionado pela equipa de moderação. Conteúdo inapropriado é removido imediatamente." },
                { icon: Users, title: "Acesso Verificado", desc: "Apenas membros maiores de 18 anos com conta verificada podem aceder aos lives." },
                { icon: Star, title: "Controlo do Transmissor", desc: "O transmissor pode bloquear utilizadores, limitar o chat e terminar a transmissão a qualquer momento." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A Experiência Live em Portugal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os lives AKOKY são uma forma única de descobrir a cena libertina antes de visitar os <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes</Link> ou os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas</Link> pessoalmente. Se estás a <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar</Link>, os lives são uma excelente introdução ao ambiente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Descarrega a <Link to="/pt/app" className="text-primary hover:underline">app AKOKY</Link> para receber notificações dos lives e combina com os <Link to="/pt/jogos" className="text-primary hover:underline">jogos</Link> para uma noitada completa. Os membros <Link to="/pt/vip" className="text-primary hover:underline">VIP</Link> acedem a lives exclusivos e replays.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              <Video className="w-5 h-5" /> Aceder aos Lives — Grátis
            </a>
            <p className="text-muted-foreground text-sm mt-4">Inscrição gratuita · 20+ lives/semana · Moderação humana 24/7</p>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LivePt;
