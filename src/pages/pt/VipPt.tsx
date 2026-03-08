import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Crown, Users, ShieldCheck, Camera, Zap, Star, Heart, Lock, Gift, Trophy, Sparkles, Eye } from "lucide-react";

const FAQ = [
  { question: "Quais são as vantagens do estatuto VIP AKOKY?", answer: "Acesso a eventos exclusivos, multi-perfil certificado, álbuns privados, lives VIP, mensagens prioritárias e badge de confiança visível pela comunidade." },
  { question: "O que é a funcionalidade multi-perfil?", answer: "A funcionalidade exclusiva AKOKY que te permite criar vários perfis (casal, solteiro homem, solteira mulher) numa única conta, com mudança em um único clique." },
  { question: "Como obter a certificação VIP?", answer: "A certificação é concedida após verificação de identidade. Garante à comunidade que és realmente a pessoa indicada no teu perfil." },
  { question: "Quanto custa o estatuto VIP?", answer: "O estatuto VIP é acessível através de subscrição mensal ou anual. Os preços variam consoante a duração escolhida, com descontos significativos para compromissos anuais." },
  { question: "Posso cancelar a minha subscrição VIP?", answer: "Sim, a subscrição pode ser cancelada a qualquer momento. Manténs os benefícios até ao final do período pago." },
  { question: "Os meus dados estão protegidos com o VIP?", answer: "Absolutamente. A certificação implica uma verificação segura, mas os teus dados pessoais nunca são partilhados com outros membros. Apenas o badge de confiança é visível." },
  { question: "Os membros VIP têm mais visibilidade?", answer: "Sim, os perfis VIP aparecem em destaque nos resultados de pesquisa e recebem um badge dourado que aumenta a confiança e as interações." },
  { question: "Posso oferecer o estatuto VIP a alguém?", answer: "Sim! A funcionalidade de oferta VIP permite comprar uma subscrição para outra pessoa. Ideal como presente para um parceiro ou amigo." },
];

const PRIVILEGES = [
  { icon: Crown, title: "Eventos Exclusivos", desc: "Acesso prioritário e exclusivo aos eventos mais seletos: noitadas privadas em villas, fins de semana de luxo, encontros íntimos com seleção de convidados." },
  { icon: Users, title: "Multi-Perfil", desc: "Até 3 perfis diferentes (casal, solteiro, solteira) numa única conta com mudança instantânea num clique." },
  { icon: ShieldCheck, title: "Certificação Verificada", desc: "Badge de confiança dourado visível para toda a comunidade após verificação de identidade segura." },
  { icon: Camera, title: "Álbuns Privados", desc: "Cria álbuns fotográficos com controlo total: decide quem vê, por quanto tempo, e revoga acessos a qualquer momento." },
  { icon: Zap, title: "Mensagens Prioritárias", desc: "As tuas mensagens aparecem em destaque na caixa de entrada dos outros membros. Taxa de resposta 3x superior." },
  { icon: Star, title: "Lives Exclusivos", desc: "Acede a transmissões privadas de clubes de luxo, conteúdos VIP e noitadas em direto reservadas à comunidade premium." },
  { icon: Eye, title: "Visibilidade Premium", desc: "O teu perfil aparece em destaque nos resultados de pesquisa e na secção 'Membros em Destaque'." },
  { icon: Gift, title: "Oferta VIP", desc: "Oferece o estatuto VIP a um parceiro, amigo ou membro da comunidade. O presente perfeito para libertinos." },
];

const TIERS = [
  { name: "Gratuito", price: "0€", features: ["1 perfil", "Mensagens limitadas", "Eventos públicos", "Pesquisa básica"], highlighted: false },
  { name: "VIP", price: "14,99€/mês", features: ["3 perfis", "Mensagens ilimitadas", "Eventos exclusivos", "Álbuns privados", "Badge verificado", "Lives VIP"], highlighted: true },
  { name: "VIP Anual", price: "9,99€/mês", features: ["Tudo do VIP", "2 meses grátis", "Acesso antecipado", "Suporte prioritário", "Oferta VIP incluída"], highlighted: false },
];

const TESTIMONIALS = [
  { text: "O multi-perfil mudou completamente a nossa experiência. Podemos usar o perfil casal para os clubes e o individual para os aperitivos, sem complicações.", author: "Casal de Lisboa", badge: "VIP há 8 meses" },
  { text: "A certificação aumentou drasticamente as nossas interações. As pessoas confiam mais num perfil verificado.", author: "Miguel, Porto", badge: "VIP há 1 ano" },
  { text: "Os eventos exclusivos VIP são de outro nível. A seleção dos convidados garante sempre uma experiência de qualidade.", author: "Casal do Algarve", badge: "VIP há 6 meses" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Estatuto VIP", item: "https://akoky.com/pt/vip" },
  ],
};

const VipPt = () => (
  <>
    <MetaTags
      title="AKOKY VIP | Subscrição Premium — Acesso Exclusivo Comunidade Libertina"
      description="Descobre a subscrição VIP AKOKY: acesso exclusivo a eventos libertinos privados, multi-perfil certificado, álbuns privados e comunidade premium segura."
      canonical="https://akoky.com/pt/vip"
      lang="pt"
    />
    <HreflangTags slug="vip" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="AKOKY VIP | Subscrição Premium — Acesso Exclusivo Comunidade Libertina"
      description="Descobre a subscrição VIP AKOKY: acesso exclusivo a eventos libertinos privados, multi-perfil certificado, álbuns privados e comunidade premium segura."
      canonical="https://akoky.com/pt/vip"
      heroTitle="Estatuto VIP AKOKY"
      heroSubtitle="Acede a privilégios exclusivos e vive a experiência libertina ao seu mais alto nível."
      breadcrumb={[{ label: "Estatuto VIP AKOKY" }]}
      faq={FAQ}
    >
      {/* Intro */}
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" /> Premium Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Porque Tornar-se VIP no AKOKY?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              O estatuto VIP AKOKY é muito mais do que uma subscrição: é o teu passe para uma experiência libertina de nível superior. Mais funcionalidades, mais exclusividade, mais confiança da comunidade. Junta-te aos milhares de membros que já escolheram a experiência premium.
            </p>
          </div>

          {/* Privileges Grid */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">8 Privilégios Exclusivos VIP</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PRIVILEGES.map((p, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Multi-Profile Deep Dive */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Multi-Perfil: Uma Só Conta, Várias Identidades</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "👤", title: "Perfil Individual", desc: "Ideal para aperitivos libertinos, encontros informais e exploração individual. Mantém a tua privacidade quando necessário." },
                { icon: "💑", title: "Perfil Casal", desc: "Perfeito para eventos em clube, noitadas temáticas e encontros com outros casais. Mostra a vossa cumplicidade." },
                { icon: "🔄", title: "Mudança Instantânea", desc: "Alterna entre perfis com um único clique. Sem logout, sem complicações. Cada perfil tem a sua galeria e configurações próprias." },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3 className="text-foreground font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">Certificação obrigatória:</strong> Todos os perfis VIP são certificados através de verificação de identidade. O badge de confiança dourado é visível para toda a comunidade, aumentando significativamente a tua credibilidade e as tuas interações.
              </p>
            </div>
          </div>

          {/* Pricing Tiers */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Escolhe o Teu Plano</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {TIERS.map((tier, i) => (
              <div key={i} className={`relative p-8 rounded-2xl border transition-all ${tier.highlighted ? "bg-primary/5 border-primary shadow-lg shadow-primary/10 scale-105" : "bg-card/40 border-border"}`}>
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Mais Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs">✓</span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">O Que Dizem os Membros VIP</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card/60 border border-border">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-semibold text-sm">{t.author}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{t.badge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Security & Trust */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Segurança e Confiança Premium</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Lock, title: "Dados Protegidos", desc: "A verificação de identidade é feita de forma segura e encriptada. Os teus dados pessoais nunca são partilhados com outros membros." },
                { icon: ShieldCheck, title: "Badge de Confiança", desc: "O badge dourado VIP é sinónimo de autenticidade. Os membros verificados recebem até 3x mais interações." },
                { icon: Heart, title: "Comunidade Selecionada", desc: "O acesso VIP garante uma comunidade de qualidade com membros comprometidos e respeitosos." },
                { icon: Trophy, title: "Suporte Prioritário", desc: "Assistência dedicada 7/7 para qualquer questão. Os membros VIP são tratados com prioridade absoluta." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Text */}
          <div className="prose prose-sm max-w-none mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">O Estatuto VIP AKOKY em Portugal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O AKOKY é a plataforma libertina de referência em Portugal, com uma comunidade ativa em <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> de Lisboa, Porto, Algarve e por todo o país. O estatuto VIP foi concebido para os membros que procuram uma experiência premium, com funcionalidades avançadas que transformam completamente a forma como vivem o libertinismo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com o multi-perfil certificado, nunca mais precisas de gerir várias contas. Usa o perfil casal para os <Link to="/pt/eventos" className="text-primary hover:underline">eventos libertinos</Link>, o individual para os aperitivos e muda com um simples toque. A certificação VIP assegura que todos os perfis são autênticos, criando um ecossistema de confiança único.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link> e clubes parceiros do AKOKY reconhecem o badge VIP, oferecendo vantagens adicionais como acesso prioritário, descontos exclusivos e convites para eventos privados. Se estás a <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar no libertinismo</Link>, o VIP é o atalho para uma integração rápida e segura na comunidade.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/pt/app" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              <Crown className="w-5 h-5" />
              Tornar-me VIP Agora
            </Link>
            <p className="text-muted-foreground text-sm mt-4">Cancela a qualquer momento · Sem compromisso</p>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VipPt;
