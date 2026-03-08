import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Smartphone, MapPin, MessageCircle, Bell, Camera, Shield, Users, Zap, Star, Download } from "lucide-react";

const FAQ = [
  { question: "A app AKOKY é gratuita?", answer: "Sim. O download e o uso básico são gratuitos. As funcionalidades premium estão disponíveis com a subscrição VIP." },
  { question: "Está disponível em iOS e Android?", answer: "Sim. O AKOKY é uma PWA compatível com iOS e Android. Acede em akoky.com e adiciona o ícone ao ecrã inicial." },
  { question: "A app respeita a minha privacidade?", answer: "Absolutamente. A geolocalização é aproximada, as fotos podem ser desfocadas automaticamente e o modo incógnito permite-te navegar de forma invisível." },
  { question: "O que é uma PWA?", answer: "Uma Progressive Web App funciona como uma app nativa mas sem necessidade de passar pela App Store ou Play Store. Acedes pelo browser, adicionas ao ecrã inicial e pronto." },
  { question: "Posso receber notificações push?", answer: "Sim. Ativa as notificações para receber alertas de mensagens, novos eventos na tua zona e matches com perfis compatíveis." },
  { question: "A app funciona offline?", answer: "Parcialmente. Podes consultar perfis já carregados e mensagens recentes. As funcionalidades de chat e eventos requerem ligação." },
  { question: "Como funciona a geolocalização?", answer: "A tua posição é aproximada num raio de 5-10km para proteger a tua privacidade. Nunca revelamos a tua localização exata." },
  { question: "Posso usar a app na Smart TV?", answer: "Sim. A PWA AKOKY é compatível com ChromeOS e Android TV para uma experiência em grande ecrã, especialmente para lives e jogos." },
];

const FEATURES = [
  { icon: MapPin, title: "Geolocalização Inteligente", desc: "Encontra membros, clubes e eventos perto de ti em tempo real. Posição aproximada (raio 5-10km) para proteger a tua privacidade.", badge: "Exclusivo" },
  { icon: MessageCircle, title: "Chat Tipo WhatsApp", desc: "Mensagens individuais e em grupo com confirmações de leitura, envio de fotos, mensagens de voz e GIFs. Coordena encontros facilmente.", badge: "Exclusivo" },
  { icon: Bell, title: "Notificações Push", desc: "Alertas personalizáveis: novas mensagens, eventos na tua zona, matches compatíveis, lives a começar e lembretes de reserva.", badge: null },
  { icon: Users, title: "Multi-Perfil", desc: "Até 3 perfis numa conta (casal, solteiro, solteira) com mudança num clique. Cada perfil com galeria e configurações próprias.", badge: "1ª Mundial" },
  { icon: Camera, title: "Galeria Privada", desc: "Álbuns privados com controlo total: decide quem vê, por quanto tempo, desfoca fotos automaticamente e revoga acessos.", badge: null },
  { icon: Shield, title: "Modo Incógnito", desc: "Navega de forma invisível. Ninguém sabe que estás online. Ideal para explorar discretamente antes de interagir.", badge: "VIP" },
  { icon: Zap, title: "Live Streaming", desc: "20+ lives por semana diretamente na app: clubes em direto, conteúdos exclusivos e transmissões privadas VIP.", badge: null },
  { icon: Star, title: "AKOKY Safe", desc: "Verificação de identidade integrada, moderação humana 24/7 e encriptação AES-256 de nível bancário.", badge: null },
];

const STEPS = [
  { num: "1", title: "Acede a akoky.com", desc: "Abre o browser no teu smartphone (Safari para iOS, Chrome para Android) e vai a akoky.com." },
  { num: "2", title: "Cria a tua conta", desc: "Registo gratuito em 30 segundos: email, password e escolha do tipo de perfil." },
  { num: "3", title: "Adiciona ao ecrã inicial", desc: "iOS: toca em 'Partilhar' → 'Adicionar ao ecrã inicial'. Android: toca em '⋮' → 'Adicionar ao ecrã inicial'." },
  { num: "4", title: "Ativa as notificações", desc: "Aceita as notificações push para nunca perderes uma mensagem, evento ou live." },
];

const COMPARISONS = [
  { feature: "Chat com grupos", akoky: true, others: false },
  { feature: "Multi-perfil", akoky: true, others: false },
  { feature: "Geolocalização aproximada", akoky: true, others: false },
  { feature: "Live streaming integrado", akoky: true, others: false },
  { feature: "Modo incógnito", akoky: true, others: false },
  { feature: "Verificação de identidade", akoky: true, others: true },
  { feature: "Notificações push", akoky: true, others: true },
  { feature: "Compatível Smart TV", akoky: true, others: false },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Aplicação", item: "https://akoky.com/pt/app" },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AKOKY",
  operatingSystem: "iOS, Android, ChromeOS",
  applicationCategory: "SocialNetworkingApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", ratingCount: "1250" },
};

const AppPt = () => (
  <>
    <MetaTags
      title="AKOKY App | Aplicação Libertina Premium iOS e Android Portugal"
      description="Descarrega a app AKOKY: geolocalização, mensagens instantâneas, notificações de eventos e gestão de perfil. A app libertina mais completa da Europa."
      canonical="https://akoky.com/pt/app"
      lang="pt"
      ogImage="/images/application-akoky.webp"
    />
    <HreflangTags slug="app" />
    <SchemaOrg schema={[breadcrumbSchema, appSchema]} />
    <ContentPageLayout
      lang="pt"
      title="AKOKY App | Aplicação Libertina Premium iOS e Android Portugal"
      description="Descarrega a app AKOKY: geolocalização, mensagens instantâneas, notificações de eventos e gestão de perfil."
      canonical="https://akoky.com/pt/app"
      heroTitle="A App Libertina Mais Completa da Europa"
      heroSubtitle="Geolocalização, chat tipo WhatsApp, notificações de eventos e multi-perfil. Tudo no teu smartphone."
      heroImage="/images/pt-app-cover.webp"
      breadcrumb={[{ label: "Aplicação AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Hero visual */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <Smartphone className="w-4 h-4" /> PWA Otimizada
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">AKOKY App: A Tua Comunidade no Bolso</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A aplicação AKOKY está disponível como PWA (Progressive Web App) otimizada para iOS e Android. Sem necessidade de download de uma loja de apps: acede diretamente pelo browser e adiciona o ícone ao ecrã inicial. Mais de <Link to="/pt" className="text-primary hover:underline">1,5 milhão de membros</Link> já a utilizam diariamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://akoky.com/application.html" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold hover:scale-105 transition-all inline-flex items-center gap-2">
                  <Download className="w-4 h-4" /> iOS / Android
                </a>
                <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary/10 transition-all">
                  Criar conta grátis
                </a>
              </div>
              <p className="text-muted-foreground text-xs mt-3">Compatível iOS 13+ | Android 8+ | ChromeOS | Android TV</p>
            </div>
            <div className="flex justify-center">
              <img src="/images/application-akoky.webp" alt="Aplicação AKOKY no smartphone" className="rounded-2xl max-h-96 w-auto shadow-2xl" loading="lazy" />
            </div>
          </div>

          {/* Features Grid */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">8 Funcionalidades Que Mudam Tudo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {FEATURES.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5 relative">
                {f.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{f.badge}</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Installation Steps */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Instalar em 4 Passos</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s, i) => (
                <div key={i} className="text-center">
                  <span className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">{s.num}</span>
                  <h3 className="text-foreground font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">AKOKY vs. Outras Apps Libertinas</h2>
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-foreground font-bold py-3 px-4">Funcionalidade</th>
                  <th className="text-center text-primary font-bold py-3 px-4">AKOKY</th>
                  <th className="text-center text-muted-foreground font-bold py-3 px-4">Outras</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((c, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="text-muted-foreground py-3 px-4 text-sm">{c.feature}</td>
                    <td className="text-center py-3 px-4">{c.akoky ? <span className="text-green-400">✅</span> : <span className="text-red-400">❌</span>}</td>
                    <td className="text-center py-3 px-4">{c.others ? <span className="text-green-400">✅</span> : <span className="text-red-400">❌</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Screenshots */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">A App em Ação</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src="/images/3tel.webp" alt="AKOKY app interface mobile" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src="/images/app-tv.webp" alt="AKOKY app na Smart TV" className="w-full h-auto" loading="lazy" />
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Privacidade e Segurança</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Encriptação End-to-End", desc: "Todas as mensagens e dados são encriptados com norma bancária AES-256. Nem a equipa AKOKY pode ler as tuas mensagens." },
                { title: "Modo Incógnito", desc: "Navega de forma invisível: ninguém sabe que estás online. Ativa ou desativa com um toque." },
                { title: "Desfoque Automático", desc: "As tuas fotos são automaticamente desfocadas. Só ficam visíveis após aceitação mútua entre os dois membros." },
                { title: "Geolocalização Aproximada", desc: "A tua posição exata nunca é revelada. Utilizamos um raio de 5-10km para proteger o teu endereço." },
              ].map((p, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">🔒</span>
                  </span>
                  <div>
                    <h3 className="text-foreground font-bold mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO text */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A App Libertina de Referência em Portugal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O AKOKY é a aplicação libertina mais utilizada em Portugal, com funcionalidades pensadas para a comunidade local: <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">diretório de clubes</Link> de Lisboa a Faro, <Link to="/pt/eventos" className="text-primary hover:underline">agenda de eventos</Link> em todo o país, <Link to="/pt/live" className="text-primary hover:underline">lives exclusivos</Link> e uma comunidade verificada.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quer estejas a <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar no libertinismo</Link> ou sejas membro experiente, a app oferece tudo o que precisas: desde o <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico libertino</Link> para dominar o vocabulário até os <Link to="/pt/jogos" className="text-primary hover:underline">jogos AKOKY</Link> para animar as tuas noitadas. O estatuto <Link to="/pt/vip" className="text-primary hover:underline">VIP</Link> desbloqueia funcionalidades avançadas.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              <Smartphone className="w-5 h-5" /> Descarregar Agora — Grátis
            </a>
            <p className="text-muted-foreground text-sm mt-4">Sem loja de apps · Instalação em 30 segundos · 100% gratuito</p>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AppPt;
