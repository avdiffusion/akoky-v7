import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import LatestBlogSection from "@/components/blog/LatestBlogSection";

const EXPLORE_CARDS = [
  { href: "/pt/clubbing", icon: "🏛️", title: "Clubes parceiros", desc: "Descobre estabelecimentos selecionados em Portugal e na Europa, com fichas detalhadas, avaliações verificadas e informações práticas.", cta: "Ver os clubes →" },
  { href: "/pt/eventos", icon: "📅", title: "Eventos e festas", desc: "Acede a eventos privados, noites temáticas, fins de semana e encontros organizados por parceiros de confiança em todo Portugal.", cta: "Descobrir os eventos →" },
  { href: "/pt/comecar-libertinismo", icon: "🧭", title: "Como começar", desc: "Guias, conselhos e referências para entender os códigos, as práticas e os costumes dos encontros entre adultos modernos.", cta: "Aceder aos guias →" },
];

const UNIVERS_CARDS = [
  { href: "https://legal.akoky.com/confidentialite", icon: "🎭", title: "Confidencialidade e Dados", desc: "Os teus dados pessoais estão protegidos por protocolos de segurança avançados, alojados na Europa e nunca vendidos a terceiros.", external: true },
  { href: "https://legal.akoky.com/securite", icon: "🛡️", title: "Segurança e Discrição", desc: "Proteção avançada de dados e perfis verificados para uma experiência serena e confidencial.", external: true },
  { href: "https://legal.akoky.com/charte", icon: "🤝", title: "Respeito e Amabilidade", desc: "Uma comunidade fundada no consentimento, no respeito mútuo e numa ética clara.", external: true },
];

const PRESSE_ITEMS = [
  { icon: "📰", title: "Comunicados oficiais", desc: "Comunicados de imprensa, apresentações do projeto e visão editorial do Akoky." },
  { icon: "🎙️", title: "Média e parceiros", desc: "Imprensa web, blogs especializados, média lifestyle e comunitários para adultos." },
  { icon: "📊", title: "Análises e comparativos", desc: "Estudos, classificações e comparações de plataformas comunitárias e serviços de encontros entre adultos." },
  { icon: "📚", title: "Recursos profissionais", desc: "Logótipos, material visual oficial e suportes de comunicação para média e parceiros." },
  { icon: "🤝", title: "Colaborações e afiliações", desc: "Clubes associados, organizadores de eventos privados e atores europeus do setor." },
  { icon: "🌍", title: "Alcance europeu", desc: "Presença ativa em Portugal, França, Espanha, Bélgica e desenvolvimento progressivo a nível internacional." },
];

const CONFIANCE_CARDS = [
  { href: "/pt/perguntas-principiantes-guia", icon: "❓", title: "FAQ do AKOKY", desc: "Todas as respostas às perguntas frequentes sobre o funcionamento, os perfis, os eventos e a utilização do AKOKY." },
  { href: "/pt/lexico-libertino", icon: "📘", title: "Léxico e Códigos", desc: "Descobre os termos, práticas e códigos dos encontros entre adultos, explicados de forma simples e sem julgamentos." },
  { href: "/pt/libertinismo", icon: "🔥", title: "Os Encontros Hoje", desc: "Descobre o que abrangem as práticas modernas, os seus códigos e as diferentes maneiras de as explorar livremente." },
  { href: "/pt/comecar-libertinismo", icon: "🧭", title: "Como Começar", desc: "Guias e conselhos para descobrir este universo ao teu ritmo, sozinho/a ou em casal, num enquadramento respeitoso." },
];

const EVENT_CARDS = [
  { title: "Noites Exclusivas", desc: "Eventos privados nos locais mais prestigiados de Portugal.", location: "Lisboa", count: "80+", img: "/images/event/event1.webp", alt: "Noites libertinas exclusivas AKOKY Lisboa" },
  { title: "Fins de Semana Temáticos", desc: "Escapadelas inesquecíveis com a comunidade por todo Portugal.", location: "Algarve", count: "60+", img: "/images/event/event2.webp", alt: "Fins de semana libertinos AKOKY Algarve" },
  { title: "Encontros Íntimos", desc: "Noites mais íntimas para conhecer melhor as pessoas num ambiente descontraído.", location: "Porto", count: "40+", img: "/images/event/event3.webp", alt: "Encontros íntimos e noites privadas AKOKY Porto" },
];

const QUICK_ACCESS = [
  { href: "/pt/clubbing", icon: "👥", title: "Clubes parceiros", desc: "Descobre estabelecimentos selecionados e locais de encontro em Portugal." },
  { href: "/pt/eventos", icon: "📅", title: "Eventos e festas", desc: "Acede a eventos privados e encontros organizados perto de ti." },
  { href: "/pt/vip", icon: "💎", title: "Ser VIP", desc: "Acede a privilégios exclusivos e a uma experiência premium." },
  { href: "/pt/blog", icon: "📖", title: "Blog e conselhos", desc: "Guias, análises e atualidade sobre os encontros entre adultos em Portugal." },
];

const STATS = [
  { icon: "👥", value: "1,5M Membros Ativos", desc: "Perfis verificados, casais e solteiros que partilham uma visão respeitosa e assumida dos encontros entre adultos." },
  { icon: "🏛️", value: "120 Clubes Parceiros", desc: "Estabelecimentos selecionados em toda a Europa, com avaliações e classificações verificadas pela comunidade." },
  { icon: "📅", value: "300 Eventos / Mês", desc: "Festas e encontros exclusivos organizados por clubes e membros da comunidade." },
];

const WHY_CARDS = [
  { icon: "🔒", title: "Segurança e Discrição", desc: "Verificação de identidade, moderação contínua e respeito absoluto pela tua vida privada. Os teus dados nunca são partilhados." },
  { icon: "💎", title: "Qualidade Premium", desc: "Aplicação móvel iOS e Android, funcionalidades avançadas e acesso a eventos exclusivos em todo Portugal." },
  { icon: "🤝", title: "Comunidade Respeitosa", desc: "Código ético claro, consentimento no centro das trocas e acompanhamento dos novos membros." },
  { icon: "🌍", title: "Rede Europeia", desc: "Presença ativa em Portugal, França, Espanha, Bélgica, Alemanha e Itália para encontros à escala europeia." },
];

const FAQ_ITEMS = [
  { q: "O que diferencia o AKOKY de outras plataformas de encontros entre adultos?", a: "O AKOKY reúne uma comunidade de mais de 1,5 milhões de membros, um diretório de clubes parceiros verificados, mais de 300 eventos organizados todos os meses, um espaço de troca reservado a membros e uma aplicação móvel completa. A plataforma coloca a ética e o consentimento no centro do seu funcionamento." },
  { q: "A inscrição no AKOKY é gratuita?", a: "Sim, a inscrição é completamente gratuita. Podes criar o teu perfil, explorar a plataforma, consultar os clubes parceiros, ler as avaliações dos membros e aceder a uma seleção de eventos sem custos. A subscrição VIP oferece funcionalidades avançadas e vantagens exclusivas." },
  { q: "O AKOKY é adequado para principiantes?", a: "Absolutamente. O AKOKY acompanha os novos membros com um guia para começar, um léxico explicativo, uma FAQ detalhada e numerosos recursos pedagógicos. A comunidade é amável e atenta ao respeito dos limites de cada pessoa." },
  { q: "Como encontrar clubes parceiros perto de mim em Portugal?", a: "O AKOKY disponibiliza um diretório de clubes parceiros com mais de 120 estabelecimentos em Portugal, França e Europa. Podes filtrar por cidade, tipo de local (clube, sauna, estabelecimento privado) e consultar avaliações verificadas. A app móvel permite a geolocalização." },
  { q: "Os eventos propostos no AKOKY são seguros?", a: "Todos os eventos referenciados no AKOKY respeitam um código ético rigoroso. O consentimento explícito, a discrição, o respeito dos limites e uma moderação ativa fazem parte dos compromissos fundamentais da plataforma e dos seus parceiros." },
];

const COMPARATIF_LINKS = [
  { href: "/pt/akoky-vs-wyylde", label: "vs Wyylde" },
  { href: "/pt/melhor-sitio-libertino", label: "Melhor site libertino" },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AKOKY",
    url: "https://akoky.com",
    logo: "/images/logo-akoky.webp",
    description: "Plataforma comunitária libertina premium na Europa",
    foundingDate: "2014",
    contactPoint: { "@type": "ContactPoint", contactType: "Customer Service", email: "contact@akoky.com", availableLanguage: ["fr", "en", "es", "de", "it", "pt"] },
    sameAs: ["https://www.facebook.com/akokyofficial", "https://www.instagram.com/akoky_official", "https://twitter.com/akoky_official"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AKOKY Portugal",
    url: "https://akoky.com/pt",
    inLanguage: "pt",
    potentialAction: { "@type": "SearchAction", target: "https://akoky.com/search?q={search_term_string}", "query-input": "required name=search_term_string" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

const HomePt = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <MetaTags
        title="AKOKY Portugal – Plataforma Libertina Premium | Portugal e Europa"
        description="AKOKY: 1,5M de membros, clubes libertinos premium, eventos exclusivos. A plataforma libertina de referência em Portugal e na Europa. Inscrição gratuita."
        canonical="https://akoky.com/pt"
        lang="pt"
        ogImage="https://akoky.com/images/hero-pt-desktop.webp"
      />
      <HreflangTags />
      <SchemaOrg schema={schemas} />

      <Header lang="pt" />

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section
          className="relative min-h-[90vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden pt-[70px]"
          style={{
            backgroundImage: "url('/images/hero-pt-desktop.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%)" }} />
          <div className="absolute left-0 right-0 bottom-0 h-[180px] z-[2] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(240 20% 4% / 0.4) 45%, hsl(240 20% 4% / 0.8) 75%, hsl(240 20% 4%) 100%)" }} />

          <div className="relative z-[3] max-w-[900px] px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span>🇵🇹</span><span>Comunidade Premium Portugal</span>
            </div>
            <h1 className="text-gradient-gold text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider leading-tight mb-4">
              Encontros adultos &amp; experiências exclusivas em Portugal
            </h1>
            <h2 className="text-lg md:text-xl font-normal text-white/95 mb-8 max-w-[800px] mx-auto">
              A comunidade premium para conhecer pessoas de mente aberta, descobrir clubes e participar em eventos para adultos em todo Portugal — de Lisboa ao Porto, do Algarve a Coimbra.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.akoky.com/register" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                JUNTAR-ME À COMUNIDADE
              </a>
              <Link to="/pt/clubbing" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                EXPLORAR OS CLUBES
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SEO INTRO ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container max-w-[900px]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">A Plataforma Libertina de Referência em Portugal</h2>
              <p className="text-base md:text-lg leading-8 text-muted-foreground">
                O AKOKY impõe-se como <strong className="text-foreground">a rede social libertina premium</strong> com mais de 1,5 milhões de membros ativos.
                Ao contrário das plataformas generalistas, o AKOKY oferece uma experiência completa dedicada ao{" "}
                <Link to="/pt/libertinismo" className="text-primary hover:underline">libertinismo moderno</Link>:
                diretório dos <Link to="/pt/clubbing" className="text-primary hover:underline">melhores clubes libertinos</Link> da Europa,{" "}
                <Link to="/pt/eventos" className="text-primary hover:underline">eventos exclusivos</Link> mensais,{" "}
                <Link to="/pt/live" className="text-primary hover:underline">lives libertinos</Link> em direto e{" "}
                <Link to="/pt/app" className="text-primary hover:underline">aplicação móvel</Link> com geolocalização.
              </p>
              <p className="text-base md:text-lg leading-8 text-muted-foreground mt-4">
                Quer sejas <Link to="/pt/comecar-libertinismo" className="text-primary hover:underline">principiante no libertinismo</Link>{" "}
                ou membro experiente, o AKOKY acompanha-te com <Link to="/pt/perguntas-principiantes-guia" className="text-primary hover:underline">recursos completos</Link>,
                um <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico libertino</Link> detalhado e uma{" "}
                <Link to="/pt/visao-akoky-guia" className="text-primary hover:underline">carta ética</Link> que coloca o consentimento no centro de cada interação.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ EXPLORAR O UNIVERSO ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Explora o universo AKOKY</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Uma plataforma comunitária adulta completa para descobrir, conhecer e viver experiências exclusivas, ao teu ritmo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EXPLORE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="group bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl mb-5">{card.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  <span className="text-primary font-bold text-sm mt-3 inline-block">{card.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ A APLICAÇÃO AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">A APLICAÇÃO AKOKY</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Descarrega <Link to="/pt/app" className="text-primary">a aplicação AKOKY</Link>, disponível em iOS e Android.
                  Desfruta de uma mensagem segura, geolocalização de{" "}
                  <Link to="/pt/clubbing" className="text-primary">clubes parceiros</Link>, notificações para{" "}
                  <Link to="/pt/eventos" className="text-primary">eventos privados</Link> e um espaço de troca reservado a membros.
                </p>
                <ul className="flex flex-col gap-6 mb-8">
                  {[
                    { icon: "💬", label: "Mensagens instantâneas seguras" },
                    { icon: "📍", label: "Geolocalização de clubes" },
                    { icon: "🔔", label: "Notificações em tempo real" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                      <span className="font-semibold">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/pt/app" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  DESCARREGAR A APP
                </Link>
              </div>
              <div className="text-center">
                <img loading="lazy" src="/images/tel.webp" alt="Aplicação AKOKY móvel Portugal" width="380" height="760" className="w-[380px] mx-auto rounded-3xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LIVE / TROCAS CONTÍNUAS ═══════════ */}
        <section className="py-20" style={{ background: "linear-gradient(rgb(15, 23, 42), rgb(0, 0, 0))", color: "white" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">EM DIRETO</div>
                    <img loading="lazy" src="/images/live-akoky.webp" alt="AKOKY Live Portugal" width="600" height="400" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Noite Exclusiva Lisboa</h4>
                      <p className="text-xs text-muted-foreground">Em direto desde o Bairro Alto</p>
                    </div>
                    <div className="text-green-400 font-bold">+420 👀</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full mb-4 font-semibold text-xs">ACESSO MEMBROS CONTÍNUO</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Trocas contínuas entre membros</h2>
                <p className="text-lg opacity-80 mb-8">
                  Um espaço acessível a qualquer momento para trocar livremente, ao teu ritmo, dentro de uma comunidade reservada aos membros AKOKY.
                </p>
                <Link to="/pt/live" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  Descobrir o espaço de troca
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ A NOSSA VISÃO ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block mb-4 font-bold text-primary tracking-widest text-sm">A NOSSA VISÃO</span>
              <h2 className="text-3xl md:text-4xl font-black">AKOKY, UMA COMUNIDADE ADULTA POR INTEIRO</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mt-6">
                O AKOKY nasceu de uma convicção simples: repensar os encontros entre adultos através de uma plataforma moderna, segura, humana e respeitosa, livre de clichés e das derivas do passado.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🌱 Uma evolução natural do libertinismo</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nascido da experiência AcoquinementVotre, o AKOKY inscreve-se na continuidade de anos de observação do mundo libertino em Portugal, França, Espanha, Bélgica e Europa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Onde muitas plataformas estagnaram, o AKOKY propõe uma nova abordagem: mais fluida, mais moderna e centrada na experiência real dos membros.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🔗 Uma plataforma pensada para durar</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O AKOKY não é um simples serviço de encontros. É uma arquitetura completa que reúne trocas entre membros, eventos privados, conteúdos editoriais e aplicações dedicadas, dentro de um mesmo ecossistema.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cada funcionalidade é concebida para evoluir com a comunidade, sem depender de modas nem de algoritmos instáveis.
                </p>
              </div>
            </div>
            <div className="text-center mt-16">
              <p className="text-xl font-semibold max-w-[900px] mx-auto">
                O AKOKY é uma visão de longo prazo do libertinismo:<br />
                <span className="text-primary">mais responsável, mais livre, mais humano.</span>
              </p>
            </div>
            <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
              <Link to="/pt/visao-akoky-guia" className="px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                Descobrir a visão AKOKY
              </Link>
              <Link to="/pt/libertinismo" className="px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                Compreender o libertinismo moderno
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ O UNIVERSO AKOKY (Trust) ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black">O UNIVERSO AKOKY</h2>
              <p className="text-muted-foreground mt-4">Uma plataforma completa e segura para conhecer, trocar e partilhar dentro de uma comunidade adulta.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {UNIVERS_CARDS.map((card) => (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-2xl p-8 card-hover-glow relative block">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ IMPRENSA E MÉDIA ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-primary font-bold tracking-widest mb-4 text-sm">IMPRENSA &amp; MÉDIA</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  AKOKY, UM ATOR OBSERVADO DOS ENCONTROS ADULTOS MODERNOS
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O AKOKY desperta o interesse dos média, observadores digitais e analistas do setor pela sua abordagem inovadora, segura e decididamente moderna.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Plataforma comunitária, eventos privados, conteúdos editoriais e aplicações dedicadas: o AKOKY desenvolve um ecossistema completo, regularmente analisado e difundido em imprensa especializada e generalista.
                </p>
                <Link to="/pt/sala-de-imprensa" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                  Ver as publicações e dossiers de imprensa
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRESSE_ITEMS.map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ A CONFIANÇA AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">A CONFIANÇA AKOKY</h2>
              <p className="text-muted-foreground">Compreender, aprender e explorar os encontros entre adultos com toda a serenidade.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONFIANCE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PRÓXIMOS EVENTOS ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4 font-semibold text-xs">🇵🇹 PRÓXIMOS EVENTOS</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">O QUE ACONTECE NO AKOKY PORTUGAL</h2>
              <p className="text-muted-foreground">Junta-te a eventos exclusivos e conhece pessoas excecionais em Portugal.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EVENT_CARDS.map((event, i) => (
                <Link key={i} to="/pt/eventos" className="group bg-card border border-border rounded-2xl overflow-hidden card-hover-glow">
                  <div className="h-[200px] overflow-hidden">
                    <img loading="lazy" src={event.img} alt={event.alt} width="400" height="200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{event.desc}</p>
                    <div className="flex justify-between text-xs text-primary font-bold">
                      <span>📍 {event.location}</span>
                      <span>👥 {event.count}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMO FUNCIONA ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">COMO FUNCIONA</h2>
              <p className="text-muted-foreground">Juntar-se ao AKOKY é simples e rápido.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Inscrição", desc: <>Cria o teu perfil grátis em 2 minutos. Adiciona as tuas preferências, fotos e descobre <Link to="/pt/comecar-libertinismo" className="text-primary hover:underline">os primeiros passos</Link> neste universo.</> },
                { step: "2", title: "Exploração", desc: <>Navega pelos perfis verificados, consulta o nosso <Link to="/pt/clubbing" className="text-primary hover:underline">diretório de clubes</Link> e explora os <Link to="/pt/eventos" className="text-primary hover:underline">300 eventos mensais</Link>.</> },
                { step: "3", title: "Encontro", desc: <>Reserva os teus lugares para as <Link to="/pt/eventos" className="text-primary hover:underline">festas exclusivas</Link>, troca por mensagens e vive experiências respeitosas do <Link to="/pt/visao-akoky-guia" className="text-primary hover:underline">consentimento</Link>.</> },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full icon-box-primary flex items-center justify-center text-xl font-bold mx-auto mb-6 text-primary-foreground">{item.step}</div>
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ACESSO RÁPIDO ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">ACESSO RÁPIDO</h2>
              <p className="text-muted-foreground">Explora o universo AKOKY com um só gesto</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {QUICK_ACCESS.map((item) => (
                <Link key={item.href} to={item.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ JUNTA-TE A 1,5M ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">JUNTA-TE A 1,5M DE MEMBROS</h2>
              <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                Uma plataforma comunitária adulta premium na Europa. Cria o teu perfil, explora clubes parceiros verificados e participa em eventos exclusivos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {STATS.map((stat) => (
                <div key={stat.value} className="bg-card border border-border rounded-2xl p-8 text-center card-hover-glow">
                  <div className="text-3xl mx-auto mb-6">{stat.icon}</div>
                  <h3 className="font-bold text-lg mb-4">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PORQUÊ ESCOLHER ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">PORQUÊ ESCOLHER O AKOKY?</h2>
              <p className="text-muted-foreground text-lg">A excelência de um ecossistema comunitário adulto na Europa.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WHY_CARDS.map((card) => (
                <div key={card.title} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="text-3xl">{card.icon}</span> {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-7">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LatestBlogSection lang="pt" />

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-20">
          <div className="container max-w-[900px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes</h2>
              <p className="text-muted-foreground">Tudo o que precisas de saber sobre o AKOKY</p>
            </div>
            <div className="flex flex-col gap-6">
              {FAQ_ITEMS.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 cursor-pointer card-hover-glow" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-base md:text-lg">{faq.q}</h3>
                    <span className={`text-primary transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                  </div>
                  {openFaq === i && <p className="text-muted-foreground mt-4 leading-7">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMPARATIVO ═══════════ */}
        <section className="py-12 text-center">
          <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
            Comparas o AKOKY com outras plataformas?{" "}
            <Link to="/pt/akoky-vs-wyylde" className="text-primary font-semibold hover:underline">
              Descobre o nosso comparativo AKOKY vs Wyylde
            </Link>.
          </p>
          <div className="max-w-[720px] mx-auto bg-primary/5 border border-primary/20 rounded-2xl px-8 py-8">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Guia comparativo 2026</p>
            <h2 className="text-xl font-extrabold mb-3">Qual é o melhor site libertino em Portugal?</h2>
            <p className="text-sm text-muted-foreground leading-7 mb-6">
              Wyylde, NousLib, Gleese, JM&nbsp;Libertins, EntreCoquins, SexyLib — todos os sites libertinos analisados e comparados num único guia: funcionalidades, preços, avaliações reais e perfis falsos.
            </p>
            <Link to="/pt/melhor-sitio-libertino" className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gradient-primary text-primary-foreground font-extrabold text-sm hover:opacity-85 transition-opacity">
              🏆 Ver a classificação completa 2026
            </Link>
            <div className="flex flex-wrap gap-2 justify-center mt-5">
              {COMPARATIF_LINKS.map((c) => (
                <Link key={c.href} to={c.href} className="text-xs text-muted-foreground px-3 py-1.5 border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang="pt" />
    </>
  );
};

export default HomePt;
