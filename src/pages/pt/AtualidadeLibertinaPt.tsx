import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Newspaper, TrendingUp, Building2, Sparkles, Globe, Wifi } from "lucide-react";

const FAQ = [
  { question: "Com que frequência é atualizada a secção de atualidade?", answer: "A secção de atualidade do AKOKY é atualizada todas as semanas com novas tendências, análises e notícias do setor libertino." },
  { question: "Como contribuir com informação?", answer: "Liga-te ao teu espaço de membro AKOKY e utiliza o formulário de contribuição editorial. Os conteúdos são moderados antes da publicação." },
  { question: "As informações são verificadas?", answer: "Sim. A equipa editorial do AKOKY verifica todas as informações antes da publicação. Trabalhamos com fontes fiáveis e contactamos diretamente os estabelecimentos." },
  { question: "Posso sugerir um tema para artigo?", answer: "Claro! Envia a tua sugestão através do formulário de contacto ou diretamente ao teu gestor de comunidade AKOKY." },
  { question: "As tendências são específicas para Portugal?", answer: "Sim. A nossa secção foca-se no mercado português com algumas análises da cena europeia para contextualização." },
];

const TRENDS_2026 = [
  { icon: Building2, title: "Melhoria da Qualidade dos Estabelecimentos", desc: "A tendência mais notável dos últimos dois anos é a melhoria geral do nível dos clubes libertinos em Portugal. Os novos estabelecimentos apostam em decorações mais cuidadas, serviços mais completos e políticas de admissão mais seletivas.", tag: "Infraestrutura" },
  { icon: Sparkles, title: "Bem-estar e Abordagem Holística", desc: "O wellness libertino está em ascensão. Cada vez mais clubes integram espaços de relaxamento (jacuzzi, sauna, massagens) e organizam noitadas temáticas que combinam bem-estar e sensualidade.", tag: "Wellness" },
  { icon: Wifi, title: "Digitalização da Experiência", desc: "A pré-reserva online, os perfis digitais verificados e a integração de plataformas como o AKOKY na experiência do clube tornaram-se padrão. Os clubes sem estas opções perdem terreno.", tag: "Tecnologia" },
  { icon: Globe, title: "Diversificação dos Conceitos", desc: "Para além do clube tradicional, surgem novos formatos: noitadas em villas de luxo, fins de semana em hotéis boutique, experiências em barcos ou casas de campo.", tag: "Inovação" },
  { icon: TrendingUp, title: "Crescimento dos Aperitivos Libertinos", desc: "Eventos mais informais e acessíveis, como aperitivos afterwork e brunches libertinos, atraem um público mais jovem e principiante que procura uma primeira aproximação sem pressão.", tag: "Eventos" },
  { icon: Newspaper, title: "Maior Cobertura Mediática", desc: "O libertinismo ganha visibilidade nos média mainstream portugueses, com reportagens mais nuançadas e menos sensacionalistas. Um sinal de maturidade social.", tag: "Média" },
];

const NEWS_ITEMS = [
  { date: "Fevereiro 2026", title: "Novo clube libertino premium abre em Lisboa", desc: "Um espaço de 600m² no centro histórico com rooftop, 4 dark rooms temáticas e restaurante gourmet. O mais ambicioso projeto libertino em Portugal." },
  { date: "Janeiro 2026", title: "AKOKY atinge 200.000 membros em Portugal", desc: "A comunidade portuguesa do AKOKY ultrapassou os 200.000 membros ativos, consolidando a sua posição como plataforma de referência no país." },
  { date: "Dezembro 2025", title: "Primeiro festival libertino do Algarve anunciado", desc: "Um weekend de 3 dias em resort privado com pool parties, noitadas temáticas e workshops. 300 lugares limitados." },
  { date: "Novembro 2025", title: "Estudo revela: 12% dos casais portugueses já experimentaram o libertinismo", desc: "Uma sondagem independente mostra que a prática é mais difundida do que se pensa, com maior incidência nas áreas metropolitanas de Lisboa e Porto." },
  { date: "Outubro 2025", title: "Porto: sauna libertino mais premiado da Europa reabre após renovação", desc: "Investimento de 500.000€ em novas instalações: piscina interior, hammam turco, cabinas temáticas e zona de massagens." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Atualidade Libertina", item: "https://akoky.com/pt/atualidade-libertina" },
  ],
};

const AtualidadeLibertinaPt = () => (
  <>
    <MetaTags
      title="Atualidade Libertina 2026 | Tendências e Notícias — AKOKY Portugal"
      description="Segue as últimas tendências do mundo libertino em Portugal e na Europa: novos clubes, eventos de destaque, evoluções do setor. Análise independente do AKOKY."
      canonical="https://akoky.com/pt/atualidade-libertina"
      lang="pt"
    />
    <HreflangTags slug="atualidade-libertina" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="Atualidade Libertina 2026 | Tendências e Notícias — AKOKY Portugal"
      description="Segue as últimas tendências do mundo libertino em Portugal e na Europa."
      canonical="https://akoky.com/pt/atualidade-libertina"
      heroTitle="Atualidade e Tendências Libertinas"
      heroSubtitle="A revista editorial do mundo libertino em Portugal: tendências, análises e notícias atualizadas."
      heroImage="/images/pt-atualidade-cover.webp"
      breadcrumb={[{ label: "Atualidade Libertina" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Intro */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Newspaper className="w-4 h-4" /> Revista Editorial
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Uma Revista ao Serviço da Comunidade</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A equipa editorial do AKOKY acompanha continuamente a cena libertina em Portugal e na Europa: abertura de novos estabelecimentos, tendências da comunidade, evoluções normativas e análises do setor. O nosso objetivo é oferecer-te informação fiável, independente e atualizada.
            </p>
          </div>

          {/* Latest News */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Últimas Notícias</h2>
          <div className="space-y-4 mb-16">
            {NEWS_ITEMS.map((n, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{n.date}</span>
                <h3 className="text-foreground font-bold text-lg mt-3 mb-2">{n.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* Trends */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Tendências 2026 em Portugal</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {TRENDS_2026.map((t, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <t.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/5 text-primary">{t.tag}</span>
                </div>
                <h3 className="text-foreground font-bold mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Contribute */}
          <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Contribui para a Atualidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tens informação sobre um novo estabelecimento, um evento de destaque ou uma tendência emergente? Partilha-a com a comunidade AKOKY. Os nossos editores verificam e publicam as contribuições mais relevantes.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { emoji: "📰", title: "Notícias de Clubes", desc: "Aberturas, renovações, novos conceitos" },
                { emoji: "🎭", title: "Eventos Especiais", desc: "Festivais, weekends, noitadas temáticas" },
                { emoji: "📊", title: "Dados e Estudos", desc: "Tendências, sondagens, estatísticas" },
              ].map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-card/60 border border-border text-center">
                  <span className="text-3xl block mb-2">{c.emoji}</span>
                  <h3 className="text-foreground font-bold text-sm mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Mantém-te Informado</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Acompanha a atualidade libertina em Portugal através do AKOKY: descobre novos <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes</Link>, fica a par dos próximos <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link>, e explora os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas</Link> mais bem avaliados. Se estás a <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar</Link>, a secção de atualidade é um excelente ponto de partida para compreender a cena.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Descarrega a <Link to="/pt/app" className="text-primary hover:underline">aplicação AKOKY</Link> para receber notificações das notícias mais relevantes e ativa as alertas dos <Link to="/pt/live" className="text-primary hover:underline">lives</Link> para acompanhar a cena em tempo real.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              Juntar-me à Comunidade AKOKY
            </a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AtualidadeLibertinaPt;
