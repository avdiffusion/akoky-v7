import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { Heart, Shield, Users, MessageCircle, BookOpen, Sparkles } from "lucide-react";

const FAQ = [
  { question: "O que é o libertinismo?", answer: "O libertinismo é uma prática sexual e relacional que consiste em explorar a sexualidade fora da monogamia tradicional, sempre com o consentimento livre e informado de todos os participantes." },
  { question: "O libertinismo é perigoso?", answer: "Não, desde que as práticas sejam consensuais, discutidas abertamente e vividas com respeito mútuo. A segurança e o consentimento estão no centro de toda a prática saudável." },
  { question: "É preciso estar em casal para praticar o libertinismo?", answer: "Não. Casais e solteiros são bem-vindos. As mulheres solteiras têm geralmente acesso privilegiado a clubes e eventos libertinos." },
  { question: "Como começar no libertinismo?", answer: "Falando abertamente com o teu parceiro, definindo os teus limites e descobrindo progressivamente através de plataformas como o AKOKY, que oferece guias e uma comunidade acolhedora." },
  { question: "O libertinismo pode fortalecer um casal?", answer: "Sim, muitos casais relatam que o libertinismo reforçou a comunicação, a confiança e a cumplicidade dentro da relação, desde que praticado com respeito mútuo." },
  { question: "Que regras existem no libertinismo?", answer: "As regras são definidas por cada casal ou participante: limites claros, safe words, comunicação constante e respeito absoluto pelo 'não' de qualquer pessoa." },
  { question: "Onde praticar o libertinismo em Portugal?", answer: "Em clubes libertinos, saunas, noitadas privadas e através de plataformas online como o AKOKY que conectam membros verificados da comunidade." },
  { question: "Qual a diferença entre libertinismo e poliamor?", answer: "O libertinismo foca-se geralmente nas experiências sexuais partilhadas, enquanto o poliamor envolve relações afetivas múltiplas. Muitas pessoas combinam ambos." },
  { question: "As crianças podem descobrir que os pais são libertinos?", answer: "A discrição é um pilar do libertinismo. A maioria dos libertinos mantém esta faceta da sua vida completamente separada da vida familiar e social." },
  { question: "Existem limites de idade no libertinismo?", answer: "Todos os participantes devem ser maiores de idade. Fora isso, o libertinismo é praticado por adultos de todas as faixas etárias, dos 20 aos 70+." },
];

const PRACTICES = [
  { title: "Práticas Soft", emoji: "🌸", desc: "As práticas soft excluem a penetração com outros parceiros. Incluem trocas de carícias, jogos sensuais e momentos de cumplicidade na presença de outras pessoas, mantendo uma certa exclusividade sexual dentro do casal. É frequentemente o primeiro passo para casais principiantes.", level: "Principiante" },
  { title: "Troca de Casais (Swapping)", emoji: "🔄", desc: "A forma mais conhecida do libertinismo. Dois casais trocam os seus parceiros para momentos íntimos. Pode ser soft (sem penetração) ou full (completa). Requer um alto nível de confiança e acordo mútuo entre as quatro pessoas.", level: "Intermédio" },
  { title: "Candaulismo", emoji: "👁️", desc: "Um dos membros do casal sente prazer ao ver ou saber que o seu parceiro tem relações com outra pessoa. Baseia-se num prazer assimétrico: um observa, o outro é observado. Uma dinâmica única que valoriza a confiança.", level: "Intermédio" },
  { title: "Triolismo", emoji: "👥", desc: "Relação sexual entre três pessoas. Pode tratar-se de um casal que convida uma terceira pessoa, ou de três pessoas que interagem juntas sem hierarquia particular. Permite explorar novas dinâmicas sexuais.", level: "Intermédio" },
  { title: "Mélangisme", emoji: "🎭", desc: "Prática onde várias pessoas ou casais partilham momentos íntimos no mesmo espaço sem necessariamente trocar de parceiros. O foco está na experiência partilhada e na energia coletiva.", level: "Principiante" },
  { title: "Relações Abertas", emoji: "💫", desc: "Modelo relacional onde os parceiros se autorizam mutuamente a ter relações com outras pessoas. As regras variam de casal para casal, mas o princípio fundamental é sempre a transparência.", level: "Avançado" },
];

const PILLARS = [
  { icon: Heart, title: "Consentimento", desc: "Sem consentimento livre, informado e entusiasta, não pode haver prática saudável. O consentimento não é estático: é perfeitamente legítimo mudar de opinião a qualquer momento." },
  { icon: MessageCircle, title: "Comunicação", desc: "A base de toda exploração bem-sucedida. Falar abertamente sobre desejos, limites, medos e sentimentos antes, durante e depois de cada experiência." },
  { icon: Shield, title: "Respeito", desc: "Respeitar os limites de cada pessoa sem insistência. Um 'não' é sempre um 'não'. A pressão é incompatível com o libertinismo ético." },
  { icon: Users, title: "Confiança", desc: "Confiar no parceiro e nos outros participantes é essencial. A confiança constrói-se progressivamente e nunca deve ser dada como garantida." },
];

const TIMELINE = [
  { era: "Séc. XVII-XVIII", title: "Origens Filosóficas", desc: "O termo 'libertino' designava uma pessoa emancipada das regras morais ou religiosas. Pensadores como o Marquês de Sade exploraram os limites da liberdade sexual e social." },
  { era: "Séc. XIX", title: "Discretização", desc: "Com a era vitoriana, o libertinismo tornou-se mais discreto e clandestino, praticado em círculos fechados da alta sociedade." },
  { era: "Anos 1960-70", title: "Revolução Sexual", desc: "A revolução sexual abriu portas para a normalização de práticas alternativas. Os primeiros clubes libertinos modernos surgiram na Europa e nos Estados Unidos." },
  { era: "Anos 2000", title: "Era Digital", desc: "A internet transformou o libertinismo com plataformas de encontros dedicadas, fóruns e comunidades online que facilitaram as conexões." },
  { era: "2020+", title: "Libertinismo Moderno", desc: "Uma nova geração abraça o libertinismo com ênfase no consentimento, na inclusividade e no bem-estar. Plataformas como o AKOKY combinam tecnologia com ética." },
];

const MYTHS = [
  { myth: "O libertinismo destrói casais", truth: "Estudos mostram que casais libertinos comunicam mais e reportam níveis de satisfação iguais ou superiores aos casais monogâmicos." },
  { myth: "Só pessoas insatisfeitas são libertinas", truth: "A maioria dos libertinos está satisfeita com a sua relação e vê o libertinismo como uma forma de enriquecimento, não de substituição." },
  { myth: "É apenas sobre sexo", truth: "O libertinismo envolve socialização, novas amizades, exploração pessoal e crescimento em casal. O aspeto sexual é uma parte, não o todo." },
  { myth: "Não existem regras", truth: "Pelo contrário, o libertinismo ético baseia-se em regras claras, comunicação constante e respeito absoluto pelos limites de cada pessoa." },
  { myth: "É perigoso para a saúde", truth: "Libertinos conscientes praticam sexo seguro, fazem testes regulares e comunicam abertamente sobre saúde sexual." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Libertinismo", item: "https://akoky.com/pt/libertinismo" },
  ],
};

const LibertinismoPt = () => (
  <>
    <MetaTags
      title="Libertinismo Moderno 2026 | Guia Completo, Práticas e Ética — AKOKY"
      description="Descobre o libertinismo hoje: definição, práticas (soft, hard, troca), consentimento e evolução. Guia completo para casais e solteiros."
      canonical="https://akoky.com/pt/libertinismo"
      lang="pt"
    />
    <HreflangTags slug="libertinismo" />
    <SchemaOrg schema={breadcrumbSchema} />
    <ContentPageLayout
      lang="pt"
      title="Libertinismo Moderno 2026 | Guia Completo, Práticas e Ética — AKOKY"
      description="Descobre o libertinismo hoje: definição, práticas (soft, hard, troca), consentimento e evolução. Guia completo para casais e solteiros."
      canonical="https://akoky.com/pt/libertinismo"
      heroTitle="O Libertinismo Moderno: Definição, Práticas e Consentimento"
      heroSubtitle="Descobre este universo em 2026: práticas respeitosas, evolução cultural e chaves para uma exploração consciente."
      breadcrumb={[{ label: "O Libertinismo Moderno" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Table of Contents */}
          <nav className="mb-16 p-6 bg-card/40 border border-border rounded-2xl">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Índice do Guia
            </h2>
            <ol className="grid md:grid-cols-2 gap-2">
              {["O que é o Libertinismo?", "História e Evolução", "As Diferentes Práticas", "Os 4 Pilares Fundamentais", "Mitos vs. Realidade", "A Quem se Destina?", "Começar no Libertinismo", "O Libertinismo em Portugal"].map((item, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm py-1">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1: Definition */}
          <div id="section-0" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O que é o Libertinismo?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              O libertinismo é uma prática sexual e relacional que consiste em explorar a sexualidade fora do quadro da monogamia tradicional. Longe dos clichés mediáticos, o libertinismo moderno é antes de tudo uma abordagem livre, consensual e consciente, baseada no diálogo, no respeito e na confiança mútua.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Historicamente, o termo 'libertino' designava uma pessoa emancipada das regras morais ou religiosas do seu tempo. Hoje, esta filosofia designa uma prática onde a exploração ocorre sempre com o consentimento de todos os participantes, num quadro de respeito mútuo.
            </p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">Em resumo:</strong> O libertinismo é uma escolha consciente de adultos livres que procuram explorar a sua sexualidade e relações de forma aberta, ética e respeitosa.
              </p>
            </div>
          </div>

          {/* Section 2: History */}
          <div id="section-1" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">História e Evolução do Libertinismo</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              <div className="space-y-8">
                {TIMELINE.map((t, i) => (
                  <div key={i} className="md:pl-12 relative">
                    <div className="hidden md:block absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary" />
                    <div className="p-5 rounded-xl bg-card/40 border border-border">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{t.era}</span>
                      <h3 className="text-foreground font-bold mt-3 mb-2">{t.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Practices */}
          <div id="section-2" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">As Diferentes Formas de Prática</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {PRACTICES.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{p.emoji}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      p.level === "Principiante" ? "bg-green-500/10 text-green-400" :
                      p.level === "Intermédio" ? "bg-yellow-500/10 text-yellow-400" :
                      "bg-red-500/10 text-red-400"
                    }`}>{p.level}</span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Pillars */}
          <div id="section-3" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Os 4 Pilares Fundamentais</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {PILLARS.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card/40 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Myths */}
          <div id="section-4" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Mitos vs. Realidade</h2>
            <div className="space-y-4">
              {MYTHS.map((m, i) => (
                <div key={i} className="p-5 rounded-xl border border-border bg-card/30">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">❌ MITO</span>
                    <p className="text-foreground font-semibold">{m.myth}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold text-sm flex-shrink-0 mt-0.5">✅ VERDADE</span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.truth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Who is it for */}
          <div id="section-5" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">A Quem se Destina o Libertinismo?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O libertinismo é acessível a todos, independentemente da idade, orientação sexual ou situação sentimental. Casais estabelecidos, solteiros e pessoas de todas as orientações encontram o seu lugar nesta comunidade diversificada e acolhedora.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { emoji: "💑", title: "Casais", desc: "Casais que procuram reacender a chama, explorar novos horizontes ou simplesmente partilhar experiências que reforçam a cumplicidade." },
                { emoji: "👩", title: "Mulheres Solteiras", desc: "Frequentemente conhecidas como 'unicórnios', são muito procuradas e têm acesso privilegiado à maioria dos clubes e eventos." },
                { emoji: "👨", title: "Homens Solteiros", desc: "Embora o acesso seja mais restrito, homens respeitosos e educados encontram o seu lugar na comunidade, especialmente através de plataformas como o AKOKY." },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-card/40 border border-border">
                  <span className="text-4xl block mb-4">{item.emoji}</span>
                  <h3 className="text-foreground font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Getting Started */}
          <div id="section-6" className="mb-16 bg-card/40 border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-primary" /> Começar no Libertinismo
            </h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Comunicar abertamente", desc: "Se estás em casal, fala com o teu parceiro sobre os teus desejos e curiosidades. A comunicação honesta é o primeiro e mais importante passo." },
                { step: "2", title: "Definir limites", desc: "Estabelece limites claros com o parceiro: o que é aceitável, o que não é, e define um safe word para situações desconfortáveis." },
                { step: "3", title: "Informar-se", desc: "Lê guias, consulta o léxico libertino e familiariza-te com os códigos e práticas da comunidade antes de qualquer experiência." },
                { step: "4", title: "Começar devagar", desc: "Uma noitada num clube sem obrigação, um aperitivo libertino ou uma conversa online são excelentes primeiros passos sem pressão." },
                { step: "5", title: "Avaliar e comunicar", desc: "Após cada experiência, fala sobre o que sentiste. O debriefing é essencial para ajustar limites e fortalecer a confiança." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">{s.step}</span>
                  <div>
                    <h3 className="text-foreground font-bold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline font-semibold">
                Ler o guia completo para principiantes →
              </Link>
            </div>
          </div>

          {/* Section 8: Portugal */}
          <div id="section-7" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O Libertinismo em Portugal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O libertinismo em Portugal tem crescido significativamente nos últimos anos, com uma comunidade cada vez mais ativa e diversificada. Os <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> em Lisboa, Porto e Algarve oferecem experiências de qualidade, enquanto os <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link> proporcionam uma entrada mais suave ao universo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Os <Link to="/pt/eventos" className="text-primary hover:underline">eventos libertinos</Link> em Portugal variam desde aperitivos informais a noitadas temáticas em locais exclusivos. O AKOKY conecta a comunidade portuguesa com ferramentas modernas, verificação de perfis e guias completos em português.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Consulta o nosso <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico libertino</Link> para dominar o vocabulário e o <Link to="/pt/primeiro-encontro-libertino" className="text-primary hover:underline">guia do primeiro encontro</Link> para uma preparação completa.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/pt/app" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
              Juntar-me à Comunidade AKOKY
            </Link>
            <p className="text-muted-foreground text-sm mt-4">Inscrição gratuita · Comunidade verificada · 100% seguro</p>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LibertinismoPt;
