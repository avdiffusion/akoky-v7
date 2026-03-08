import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Eye, Shield, Heart, Sparkles, Users, Globe, Zap, Award } from "lucide-react";

const FAQ = [
  { question: "Qual é a missão do AKOKY?", answer: "Oferecer à comunidade libertina europeia uma plataforma premium, segura e ética, que coloque o consentimento, a segurança e a autenticidade no centro de cada interação." },
  { question: "O AKOKY é conforme ao RGPD?", answer: "Sim. O AKOKY é operado pela Liberty-Interactive-Ltd e respeita rigorosamente o RGPD. A proteção de dados é uma prioridade absoluta." },
  { question: "Em que países está disponível o AKOKY?", answer: "O AKOKY está disponível em toda a Europa: França, Espanha, Bélgica, Suíça, Luxemburgo, Alemanha, Itália e Portugal." },
  { question: "O que diferencia o AKOKY das outras plataformas?", answer: "Multi-perfil (primeira mundial), chat tipo WhatsApp com grupos, testemunhos verificados, live streaming, diretório de clubes e moderação humana 24/7." },
  { question: "O AKOKY aceita todos os perfis?", answer: "O AKOKY acolhe casais, mulheres solteiras, homens solteiros e pessoas de todas as orientações. Cada evento e espaço pode ter as suas próprias regras de admissão." },
  { question: "Qual é a história do AKOKY?", answer: "O AKOKY nasceu em 2014 como AcoquinementVotre, evoluindo para a sua forma atual em 2020. Hoje conta com 1,5 milhão de membros ativos na Europa." },
];

const TIMELINE = [
  { year: "2014", title: "Nascimento", desc: "Criação do AcoquinementVotre por uma equipa apaixonada pelo lifestyle libertino. As primeiras funcionalidades de encontros veem a luz do dia." },
  { year: "2017", title: "Crescimento", desc: "50.000 membros ativos. Desenvolvimento do primeiro diretório de clubes verificados e sistema de avaliações." },
  { year: "2020", title: "Transformação", desc: "O AcoquinementVotre torna-se AKOKY. Nova identidade, nova arquitetura técnica, novas ambições europeias." },
  { year: "2022", title: "Inovação", desc: "Lançamento do multi-perfil (primeira mundial), do chat tipo WhatsApp com grupos e do live streaming integrado." },
  { year: "2024", title: "Expansão", desc: "1 milhão de membros. Expansão para Espanha, Alemanha, Itália e Portugal. 120+ clubes parceiros verificados." },
  { year: "2026", title: "Referência", desc: "1,5 milhão de membros ativos. A plataforma libertina mais completa da Europa com 300+ eventos mensais e 20+ lives semanais." },
];

const PILLARS = [
  { icon: Eye, title: "Liberdade Assumida", desc: "Cada adulto tem o direito de explorar a sua sexualidade livremente, sem julgamentos e sem vergonha. O AKOKY oferece um espaço onde a liberdade é celebrada." },
  { icon: Heart, title: "Consentimento Claro", desc: "O consentimento não é um detalhe: é o fundamento. Cada funcionalidade, cada política é construída em torno do consentimento livre, informado e entusiasta." },
  { icon: Shield, title: "Segurança Reforçada", desc: "Verificação de identidade, moderação humana 24/7, encriptação AES-256 e opções de privacidade avançadas. A plataforma mais segura da Europa." },
  { icon: Zap, title: "Tecnologia ao Serviço", desc: "Multi-perfil, chat WhatsApp, live streaming e geolocalização inteligente são ferramentas para encontros mais autênticos." },
  { icon: Award, title: "Elegância e Discrição", desc: "O AKOKY rejeita a vulgaridade. Interface, vocabulário e conteúdos refletem uma visão elegante e respeitosa do libertinismo." },
  { icon: Globe, title: "Vocação Europeia", desc: "Disponível em 6 línguas e presente em 8 países, o AKOKY conecta a comunidade libertina além das fronteiras." },
];

const TEAM_VALUES = [
  { emoji: "🎯", title: "Orientação ao Membro", desc: "Cada decisão é tomada com o bem-estar dos membros como prioridade absoluta." },
  { emoji: "🔬", title: "Inovação Constante", desc: "Investimento contínuo em funcionalidades que nenhuma outra plataforma oferece." },
  { emoji: "🤝", title: "Parcerias de Qualidade", desc: "Apenas clubes e organizadores que partilham os nossos valores são parceiros AKOKY." },
  { emoji: "📚", title: "Educação e Pedagogia", desc: "Guias, léxico e conteúdos para que cada membro possa explorar com confiança." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "A Nossa Visão", item: "https://akoky.com/pt/visao" },
  ],
};

const VisaoPt = () => (
  <>
    <MetaTags
      title="AKOKY | A Nossa Visão — A Evolução do Libertinismo Moderno"
      description="Descobre a visão do AKOKY: uma plataforma libertina moderna, segura e responsável. De AcoquinementVotre ao AKOKY, a história de uma evolução."
      canonical="https://akoky.com/pt/visao"
      lang="pt"
      ogImage="/images/vision-cover.webp"
    />
    <HreflangTags slug="visao" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="AKOKY | A Nossa Visão — A Evolução do Libertinismo Moderno"
      description="Descobre a visão do AKOKY: uma plataforma libertina moderna, segura e responsável."
      canonical="https://akoky.com/pt/visao"
      heroTitle="A Nossa Visão"
      heroSubtitle="O AKOKY nasceu de uma convicção: o libertinismo moderno merece uma plataforma à sua altura."
      heroImage="/images/vision-cover.webp"
      breadcrumb={[{ label: "A Nossa Visão" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Origin */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O Nascimento de uma Visão</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              O AKOKY é a evolução natural do AcoquinementVotre, uma plataforma pioneira do libertinismo francês. Ao longo dos anos tornou-se claro que a comunidade libertina merecia mais do que um simples site de encontros: uma verdadeira rede social, um ecossistema completo que combinasse encontros, <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link>, <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes</Link> e conteúdos educativos num único lugar.
            </p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">De AcoquinementVotre a AKOKY:</strong> mais do que uma mudança de nome, uma reinvenção completa da experiência libertina digital.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">A Nossa História</h2>
          <div className="relative mb-16">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-6">
              {TIMELINE.map((t, i) => (
                <div key={i} className="md:pl-12 relative">
                  <div className="hidden md:block absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary" />
                  <div className="p-5 rounded-xl bg-card/40 border border-border">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{t.year}</span>
                    <h3 className="text-foreground font-bold mt-3 mb-2">{t.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Pillars */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Os 6 Pilares da Visão AKOKY</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {PILLARS.map((p, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Os Valores da Equipa</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {TEAM_VALUES.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">{v.emoji}</span>
                  <div>
                    <h3 className="text-foreground font-bold mb-1">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "1.5M+", label: "Membros ativos" },
              { value: "120+", label: "Clubes verificados" },
              { value: "300+", label: "Eventos/mês" },
              { value: "8", label: "Países" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-card/60 border border-border">
                <span className="text-3xl font-bold text-primary block mb-2">{s.value}</span>
                <span className="text-muted-foreground text-sm">{s.label}</span>
              </div>
            ))}
          </div>

          {/* SEO */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A Visão AKOKY para Portugal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O mercado libertino português está em plena expansão. O AKOKY ambiciona ser a plataforma de referência em Portugal, conectando os membros com os melhores <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes</Link> de Lisboa a Faro, os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas</Link> mais acolhedores e os <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link> mais exclusivos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com a <Link to="/pt/app" className="text-primary hover:underline">aplicação</Link> em português, conteúdos educativos como o <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">guia para principiantes</Link> e o <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico libertino</Link>, e uma comunidade <Link to="/pt/vip" className="text-primary hover:underline">VIP</Link> em crescimento, o AKOKY oferece a experiência libertina mais completa disponível em Portugal.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              <Sparkles className="w-5 h-5" /> Juntar-me à Visão AKOKY
            </a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VisaoPt;
