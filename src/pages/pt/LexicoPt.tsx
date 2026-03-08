import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "O que significa soft swap?", answer: "O soft swap indica práticas sem penetração com outros parceiros. Inclui carícias e jogos sensuais, mantendo uma certa exclusividade sexual dentro do casal." },
  { question: "O que é o mélangisme?", answer: "O mélangisme é uma prática onde várias pessoas ou casais partilham momentos íntimos no mesmo espaço sem necessariamente trocar de parceiros." },
  { question: "O que é uma private party?", answer: "Uma private party é uma noitada libertina organizada em local privado (apartamento, villa), ao contrário das noitadas em clubes. O acesso é por convite." },
  { question: "O que é uma licorne (unicorn)?", answer: "Uma 'licorne' designa uma mulher bissexual solteira que se junta a casais para experiências a três. O termo vem da suposta raridade deste perfil." },
  { question: "O que significa aftercare?", answer: "Aftercare é o momento de cuidado e atenção após uma prática sexual intensa. Inclui conforto emocional, hidratação e comunicação sobre a experiência vivida." },
  { question: "O que é um safe word?", answer: "Um safe word é uma palavra-código acordada entre os participantes que, quando pronunciada, interrompe imediatamente toda a atividade. É uma ferramenta essencial de consentimento." },
  { question: "O que significa cuckolding?", answer: "O cuckolding é uma prática onde um membro do casal sente excitação ao ver ou saber que o seu parceiro tem relações com outra pessoa, frequentemente com um elemento de humilhação consensual." },
  { question: "O que é uma dark room?", answer: "Uma dark room é um espaço com pouca ou nenhuma iluminação nos clubes libertinos, concebido para encontros anónimos e desinibidos num ambiente seguro." },
];

const CATEGORIES = [
  { icon: "🔄", title: "Práticas Libertinas", desc: "Swapping, mélangisme, candaulismo, triolismo, gang bang..." },
  { icon: "👥", title: "Perfis e Papéis", desc: "Casal libertino, unicorn, bull, cuckold, hotwife, vixen..." },
  { icon: "📍", title: "Locais e Eventos", desc: "Clube libertino, sauna, dark room, private party, rooftop..." },
  { icon: "🌈", title: "Orientações e Identidades", desc: "Bi-curioso, pansexual, sapiosexual, heteroflexível..." },
  { icon: "💞", title: "Relações e Estruturas", desc: "Poliamor, casal aberto, throuple, não-monogamia ética..." },
  { icon: "🛡️", title: "Consentimento e Segurança", desc: "Safe word, soft limit, hard limit, aftercare, SSC, RACK..." },
];

const LEXICON: { letter: string; terms: { term: string; def: string }[] }[] = [
  { letter: "A", terms: [
    { term: "Aftercare", def: "Momento de cuidado e atenção após uma prática sexual intensa, particularmente importante no BDSM. Inclui conforto emocional, comunicação e cuidados físicos." },
    { term: "Annuaire libertin", def: "Repertório online que lista clubes libertinos, saunas, noitadas e eventos de uma região ou país." },
    { term: "Atração", def: "Desejo físico ou emocional que pode ser direcionado a pessoas do mesmo ou de diferentes géneros, sem julgamento na comunidade libertina." },
  ]},
  { letter: "B", terms: [
    { term: "BDSM", def: "Acrónimo para Bondage, Disciplina, Dominação, Submissão, Sadismo e Masoquismo. Conjunto de práticas eróticas consensuais baseadas na troca de poder." },
    { term: "Bi-curioso", def: "Pessoa heterossexual que sente curiosidade ou atração ocasional por experiências com pessoas do mesmo sexo." },
    { term: "Bull", def: "Homem solteiro convidado por um casal, geralmente para práticas de cuckolding ou candaulismo. O termo enfatiza a virilidade e a dominância." },
  ]},
  { letter: "C", terms: [
    { term: "Candaulismo", def: "Prática onde um membro do casal sente prazer ao ver ou saber que o seu parceiro tem relações com outra pessoa, enquanto permanece espectador." },
    { term: "Clube libertino", def: "Estabelecimento privado dedicado a encontros e práticas libertinas, com espaços de socialização, pistas de dança e áreas privadas." },
    { term: "Compersão", def: "Sentimento de alegria ao ver o parceiro sentir prazer com outra pessoa. Oposto do ciúme, é valorizado na comunidade libertina e poliamorosa." },
    { term: "Cuckolding", def: "Prática onde um membro do casal sente excitação ao ver ou saber que o seu parceiro tem relações com outra pessoa, frequentemente com um elemento de humilhação consensual." },
  ]},
  { letter: "D", terms: [
    { term: "Dark room", def: "Espaço com pouca ou nenhuma iluminação nos clubes libertinos, concebido para encontros anónimos e desinibidos num ambiente seguro." },
    { term: "Dress code", def: "Código de vestuário obrigatório em muitos clubes libertinos. Geralmente elegante e sexy: lingerie, fato, vestido de noite." },
    { term: "Dupla penetração", def: "Prática sexual envolvendo a penetração simultânea de duas zonas erógenas. Requer comunicação, lubrificação e acordo de todos os participantes." },
  ]},
  { letter: "E", terms: [
    { term: "Échangisme (Swapping)", def: "Prática consistindo na troca de parceiros entre dois casais para relações sexuais consentidas. A forma mais conhecida de libertinismo." },
    { term: "Exibicionismo", def: "Prazer de se mostrar, de ser observado e admirado durante momentos íntimos num quadro seguro e consentido." },
    { term: "Ethical Non-Monogamy (ENM)", def: "Termo englobante para todas as formas de relações não-monogâmicas praticadas com transparência, honestidade e consentimento mútuo." },
  ]},
  { letter: "F", terms: [
    { term: "Full swap", def: "Troca completa entre casais, incluindo penetração. Requer acordo claro e prévio de todos os quatro participantes." },
    { term: "FKK", def: "Cultura de nudismo de origem alemã (Freikörperkultur). Alguns clubes libertinos integram zonas FKK para facilitar a desinibição." },
  ]},
  { letter: "G", terms: [
    { term: "Gang bang", def: "Prática sexual envolvendo uma pessoa com múltiplos parceiros simultaneamente. Sempre consensual e organizada com regras claras no meio libertino." },
    { term: "Glory hole", def: "Abertura numa parede através da qual práticas anónimas podem ocorrer. Presente em alguns clubes libertinos, sempre num quadro consensual." },
  ]},
  { letter: "H", terms: [
    { term: "Hard limit", def: "Limite absoluto e não negociável de um participante. Deve ser sempre respeitado sem discussão nem pressão." },
    { term: "Hotwife", def: "Mulher casada que tem relações sexuais com outros homens com o conhecimento e consentimento do marido, que pode ou não assistir." },
  ]},
  { letter: "J", terms: [
    { term: "Jacuzzi misto", def: "Jacuzzi aberto a todos os membros de um clube libertino, frequentemente o local dos primeiros contactos e da socialização." },
  ]},
  { letter: "L", terms: [
    { term: "Libertinismo", def: "Prática sexual e relacional que consiste em explorar a sexualidade fora do quadro da monogamia tradicional, com consentimento livre e informado." },
    { term: "Licorne (Unicorn)", def: "Mulher bissexual solteira que se junta a casais para experiências a três. Termo vindo da suposta raridade deste perfil." },
  ]},
  { letter: "M", terms: [
    { term: "Mélangisme", def: "Prática libertina soft onde casais se beijam e acariciam mutuamente sem ir até à penetração com outros parceiros." },
    { term: "Ménage à trois", def: "Expressão francesa que designa uma relação sexual a três. Sinónimo de triolismo." },
  ]},
  { letter: "N", terms: [
    { term: "NRE (New Relationship Energy)", def: "Energia e excitação intensa sentida no início de uma nova relação, particularmente relevante no poliamor e no libertinismo." },
    { term: "Não-monogamia", def: "Modelo relacional onde os parceiros acordam mutuamente em ter relações afetivas ou sexuais com outras pessoas." },
  ]},
  { letter: "P", terms: [
    { term: "Poliamor", def: "Modelo relacional onde uma pessoa mantém relações afetivas e/ou sexuais com múltiplos parceiros, todos informados e consentidores." },
    { term: "Private party", def: "Noitada libertina organizada em local privado (apartamento, villa). Acesso por convite, geralmente mais íntima que um clube." },
  ]},
  { letter: "R", terms: [
    { term: "RACK", def: "Risk-Aware Consensual Kink. Filosofia BDSM que reconhece os riscos inerentes e enfatiza a tomada de decisão informada e consensual." },
  ]},
  { letter: "S", terms: [
    { term: "Safe word", def: "Palavra-código acordada que, quando pronunciada, interrompe imediatamente toda a atividade. Ferramenta essencial de consentimento e segurança." },
    { term: "Soft swap", def: "Troca sem penetração: carícias, jogos sensuais entre várias pessoas mantendo a exclusividade sexual dentro do casal." },
    { term: "SSC", def: "Safe, Sane, and Consensual. Princípio fundamental do BDSM que exige que todas as práticas sejam seguras, racionais e consensuais." },
    { term: "Sauna libertino", def: "Estabelecimento combinando as facilidades de um spa (sauna, hammam, jacuzzi) com espaços dedicados a encontros libertinos." },
  ]},
  { letter: "T", terms: [
    { term: "Triolismo", def: "Relação sexual a três pessoas. Pode ser um casal que convida uma terceira pessoa ou três pessoas que interagem sem hierarquia." },
    { term: "Throuple", def: "Relação amorosa entre três pessoas, todas romanticamente envolvidas umas com as outras. Diferente do triolismo puramente sexual." },
  ]},
  { letter: "V", terms: [
    { term: "Voyeurismo", def: "Prazer de observar outras pessoas durante momentos íntimos, sempre com o consentimento explícito de todos os participantes." },
    { term: "Vixen", def: "Mulher num casal que tem relações com outros homens enquanto o parceiro observa. Diferente do hotwife pela ênfase no empoderamento feminino." },
  ]},
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Léxico Libertino", item: "https://akoky.com/pt/lexico-libertino" },
  ],
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Léxico Libertino AKOKY",
  url: "https://akoky.com/pt/lexico-libertino",
};

const LexicoPt = () => (
  <>
    <MetaTags
      title="Léxico Libertino 2026 | 200+ Termos Definidos de A a Z — AKOKY"
      description="Dicionário libertino completo: troca de casais, mélangisme, candaulismo, triolismo e mais. 200+ definições para dominar o vocabulário libertino."
      canonical="https://akoky.com/pt/lexico-libertino"
      lang="pt"
    />
    <HreflangTags slug="lexico-libertino" />
    <SchemaOrg schema={[breadcrumbSchema, definedTermSchema]} />
    <ContentPageLayout
      lang="pt"
      title="Léxico Libertino 2026 | 200+ Termos Definidos de A a Z — AKOKY"
      description="Dicionário libertino completo: troca de casais, mélangisme, candaulismo, triolismo e mais. 200+ definições para dominar o vocabulário libertino."
      canonical="https://akoky.com/pt/lexico-libertino"
      heroTitle="Léxico Libertino"
      heroSubtitle="O dicionário completo da comunidade libertina: 200+ termos explicados de forma acessível."
      breadcrumb={[{ label: "Léxico Libertino" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">

          {/* Intro */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O Dicionário Libertino de Referência</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              No mundo libertino existe um vocabulário específico que pode parecer impenetrável para os recém-chegados. Este léxico foi desenvolvido para ajudar qualquer pessoa — <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">principiantes</Link> ou experientes — a compreender e utilizar os termos usados na comunidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde os conceitos básicos como swapping e triolismo até termos mais avançados como compersão e ENM, encontras aqui todas as definições necessárias para navegar com confiança no universo libertino.
            </p>
          </div>

          {/* Categories */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Explorar por Categoria</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {CATEGORIES.map((c, i) => (
              <div key={i} className="p-5 bg-card/60 rounded-xl border border-border hover:border-primary/30 transition-all">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-foreground font-bold mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick Navigation */}
          <div className="mb-12 p-6 bg-card/40 border border-border rounded-2xl">
            <h2 className="text-lg font-bold text-foreground mb-4">Navegação Rápida</h2>
            <div className="flex flex-wrap gap-2">
              {LEXICON.map((s) => (
                <a key={s.letter} href={`#letter-${s.letter}`} className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center hover:bg-primary/20 transition-colors text-sm">
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Lexicon Entries */}
          <div className="space-y-12">
            {LEXICON.map((section) => (
              <div key={section.letter} id={`letter-${section.letter}`}>
                <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b border-border">{section.letter}</h2>
                <div className="space-y-6">
                  {section.terms.map((t, tIdx) => (
                    <div key={tIdx} className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h3 className="text-foreground font-bold text-lg mb-2">{t.term}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t.def}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="mt-16 bg-card/40 border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Os Princípios Fundamentais</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { emoji: "✅", title: "Consentimento", desc: "Todo o ato deve ser livremente consentido. O consentimento pode ser retirado a qualquer momento, sem necessidade de justificação." },
                { emoji: "🤝", title: "Respeito", desc: "Respeitar os limites de cada pessoa é não negociável. Um 'não' é sempre um 'não', sem insistência nem pressão." },
                { emoji: "🔒", title: "Discrição", desc: "O que se passa na comunidade fica na comunidade. Nunca divulgues a identidade ou as práticas de outros membros." },
                { emoji: "💬", title: "Comunicação", desc: "Falar abertamente sobre desejos, limites e sentimentos é a base de toda experiência positiva no libertinismo." },
              ].map((p, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                  <div>
                    <h3 className="text-foreground font-bold mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Text */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Dominar o Vocabulário Libertino em Portugal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conhecer o vocabulário libertino é essencial para navegar com confiança nos <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link>, <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas</Link> e <Link to="/pt/eventos" className="text-primary hover:underline">eventos</Link> em Portugal. Quer estejas a <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar no libertinismo</Link> ou sejas experiente, este léxico é a tua referência.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O léxico completo com mais de 200 termos está disponível na <Link to="/pt/app" className="text-primary hover:underline">aplicação AKOKY</Link>, com funcionalidades de pesquisa, favoritos e atualizações regulares com novos termos.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/pt/libertinismo" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold text-lg hover:scale-105 transition-all inline-block shadow-lg shadow-primary/20">
              Compreender o libertinismo →
            </Link>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LexicoPt;
