import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { Link } from "react-router-dom";
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";

/* ═══════════ FAQ ═══════════ */
const FAQ = [
  { question: "Quantos termos estão definidos?", answer: "O léxico AKOKY contém mais de 60 termos organizados por categoria, cobrindo todas as práticas, perfis, locais e conceitos do universo libertino." },
  { question: "O léxico é atualizado?", answer: "Sim. A equipa editorial do AKOKY atualiza o léxico regularmente com novos termos e evolução do vocabulário libertino." },
  { question: "Preciso de conhecer todos os termos antes de ir a um clube?", answer: "Não. O essencial é compreender o consentimento e os limites. O vocabulário vem naturalmente com a experiência." },
  { question: "Os termos são universais?", answer: "A maioria dos termos é usada internacionalmente, com variações regionais. Este léxico foca-se no vocabulário usado em Portugal e na Europa." },
  { question: "Posso sugerir um termo?", answer: "Sim! Envia a tua sugestão através do formulário de contacto AKOKY. A equipa editorial avalia e integra os termos mais relevantes." },
];

/* ═══════════ CATEGORIES ═══════════ */
const CATEGORIES = [
  {
    title: "🔄 Práticas Libertinas",
    color: "border-rose-500/30 bg-rose-500/5",
    terms: [
      { term: "Soft Swap", def: "Práticas sem penetração com outros parceiros: carícias, beijos e jogos sensuais. Frequentemente o primeiro passo para casais principiantes." },
      { term: "Full Swap", def: "Troca completa de parceiros, incluindo penetração, com o acordo prévio de todos os participantes." },
      { term: "Mélangisme", def: "Prática onde vários casais partilham momentos íntimos no mesmo espaço, sem necessariamente trocar de parceiros. A excitação vem da proximidade." },
      { term: "Candaulismo", def: "Prática em que um dos membros do casal sente prazer ao ver ou saber que o seu parceiro tem relações com outra pessoa." },
      { term: "Triolismo", def: "Relação sexual entre três pessoas. Pode ser um casal que convida uma terceira pessoa ou três pessoas sem hierarquia." },
      { term: "Gang Bang", def: "Prática envolvendo uma pessoa que interage sexualmente com vários parceiros em simultâneo, com consentimento de todos." },
      { term: "Cuckolding", def: "Prática onde um membro do casal sente excitação ao ver ou saber que o parceiro tem relações com outra pessoa, frequentemente com um elemento de humilhação consensual." },
      { term: "Hotwifing", def: "A mulher do casal tem relações com terceiros com o conhecimento e consentimento entusiástico do parceiro, sem o elemento de humilhação do cuckolding." },
    ],
  },
  {
    title: "👥 Perfis e Papéis",
    color: "border-purple-500/30 bg-purple-500/5",
    terms: [
      { term: "Licorne (Unicorn)", def: "Mulher bissexual solteira que se junta a casais para experiências a três. O termo vem da suposta raridade deste perfil." },
      { term: "Bull", def: "Homem solteiro que se junta a casais, geralmente por convite. O papel enfatiza a masculinidade e a performance." },
      { term: "Vixen", def: "A mulher num casal de hotwifing — uma parceira confiante que explora a sua sexualidade com o apoio do companheiro." },
      { term: "Cuckold", def: "O parceiro que observa ou sabe que o seu companheiro/a tem relações com terceiros, derivando prazer dessa dinâmica." },
      { term: "Hotwife", def: "Mulher comprometida que, com o consentimento do parceiro, explora relações com outros homens." },
      { term: "Voyeur", def: "Pessoa que sente prazer ao observar outras pessoas em situações íntimas, sempre com consentimento." },
      { term: "Exibicionista", def: "Pessoa que sente prazer ao ser observada durante atos íntimos, sempre em contextos consentidos." },
    ],
  },
  {
    title: "📍 Locais e Formatos",
    color: "border-amber-500/30 bg-amber-500/5",
    terms: [
      { term: "Dark Room", def: "Espaço com pouca ou nenhuma iluminação nos clubes libertinos, concebido para encontros anónimos e desinibidos." },
      { term: "Cabina Privada", def: "Espaço fechado para duas ou quatro pessoas, com porta que fecha por dentro. Garante intimidade total." },
      { term: "Jacuzzi Misto", def: "Jacuzzi aberto a todos os membros do clube ou sauna, frequentemente o local dos primeiros contactos." },
      { term: "Private Party", def: "Noitada libertina organizada em local privado (apartamento, villa), ao contrário das noitadas em clubes. Acesso por convite." },
      { term: "Apéritif Libertin", def: "Encontro informal num bar ou restaurante privado. Cocktails, conversa, sem pressão. Formato ideal para principiantes." },
      { term: "Sauna Libertina", def: "Estabelecimento que combina instalações de bem-estar (jacuzzi, hammam, sauna) com espaços íntimos para encontros." },
    ],
  },
  {
    title: "🛡️ Consentimento e Segurança",
    color: "border-emerald-500/30 bg-emerald-500/5",
    terms: [
      { term: "Safe Word", def: "Palavra-código acordada entre os participantes que, quando pronunciada, interrompe imediatamente toda a atividade." },
      { term: "Aftercare", def: "Momento de cuidado e atenção após uma prática intensa. Inclui conforto emocional, hidratação e comunicação." },
      { term: "Soft Limit", def: "Limite flexível que pode ser explorado com comunicação e confiança mútua. Pode evoluir com a experiência." },
      { term: "Hard Limit", def: "Limite absoluto e inegociável. Deve ser sempre respeitado sem qualquer tentativa de persuasão." },
      { term: "SSC", def: "Safe, Sane, Consensual — princípio fundamental que exige que qualquer prática seja segura, sã e consentida." },
      { term: "RACK", def: "Risk-Aware Consensual Kink — variante do SSC que reconhece que todas as práticas têm riscos e enfatiza o consentimento informado." },
    ],
  },
  {
    title: "💞 Relações e Estruturas",
    color: "border-cyan-500/30 bg-cyan-500/5",
    terms: [
      { term: "Poliamor", def: "Modelo relacional onde se mantêm relações afetivas com múltiplas pessoas, com o conhecimento e consentimento de todos." },
      { term: "Casal Aberto", def: "Casal que se autoriza mutuamente a ter relações com outras pessoas, com regras definidas em conjunto." },
      { term: "Throuple", def: "Relação comprometida entre três pessoas, onde todos os membros são parceiros entre si." },
      { term: "Não-Monogamia Ética", def: "Termo abrangente para todas as formas de relação não-monogâmica praticadas com consentimento e transparência." },
      { term: "Compersão", def: "Sentimento de alegria ao ver o parceiro feliz com outra pessoa. O oposto do ciúme — frequente em comunidades poliamorosas." },
      { term: "NRE (New Relationship Energy)", def: "A euforia e excitação do início de uma nova relação. Comum em dinâmicas poliamorosas." },
    ],
  },
  {
    title: "🌈 Orientações e Identidades",
    color: "border-pink-500/30 bg-pink-500/5",
    terms: [
      { term: "Bi-curioso/a", def: "Pessoa que sente curiosidade ou atração pelo mesmo sexo sem se identificar completamente como bissexual." },
      { term: "Pansexual", def: "Atração por pessoas independentemente do género ou identidade sexual." },
      { term: "Heteroflexível", def: "Predominantemente heterossexual mas aberto/a a experiências com o mesmo sexo em contextos específicos." },
      { term: "Sapiosexual", def: "Atração baseada primariamente na inteligência e no intelecto da outra pessoa." },
      { term: "Demissexual", def: "Pessoa que só sente atração sexual após estabelecer uma conexão emocional significativa." },
    ],
  },
];

/* ═══════════ SCHEMA ═══════════ */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AKOKY Portugal", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Léxico Libertino", item: "https://akoky.com/pt/lexico-libertino-guia" },
  ],
};

const LexiqueGuidePt = () => {
  const [search, setSearch] = useState("");
  const lowerSearch = search.toLowerCase();

  const totalTerms = CATEGORIES.reduce((acc, cat) => acc + cat.terms.length, 0);

  return (
    <>
      <MetaTags
        title="Léxico Libertino 2026 | 60+ Termos Definidos — AKOKY Portugal"
        description="Dicionário libertino completo: swapping, mélangisme, candaulismo, safe word, aftercare e 60+ termos explicados. O vocabulário essencial do libertinismo."
        canonical="https://akoky.com/pt/lexico-libertino-guia"
        lang="pt"
      />
      <HreflangTags slug="lexico-libertino-guia" />
      <SchemaOrg schema={breadcrumbSchema} />
      <ContentPageLayout
        lang="pt"
        title="Léxico Libertino 2026 | 60+ Termos Definidos — AKOKY Portugal"
        description="Dicionário libertino completo: 60+ termos explicados."
        canonical="https://akoky.com/pt/lexico-libertino-guia"
        heroTitle="Léxico Libertino"
        heroSubtitle={`${totalTerms}+ termos do mundo libertino definidos e explicados em 6 categorias temáticas.`}
        heroImage="/images/pt-lexico-cover.webp"
        breadcrumb={[{ label: "Léxico Libertino" }]}
        faq={FAQ}
      >
        <section className="py-12 md:py-20 px-4">
          <div className="container max-w-5xl mx-auto">

            {/* Intro */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <BookOpen className="w-4 h-4" /> Dicionário Libertino
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Domina o Vocabulário Libertino</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                O mundo libertino tem o seu próprio vocabulário. Conhecer estes termos é essencial para comunicar com confiança, compreender os códigos dos <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes</Link> e integrar-te naturalmente na comunidade. Este léxico cobre {totalTerms}+ termos organizados por tema.
              </p>
            </div>

            {/* Search */}
            <div className="relative mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Pesquisar um termo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card/60 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-16">
              <div className="text-center p-5 rounded-2xl bg-card/60 border border-border">
                <span className="text-3xl font-black text-primary block">{totalTerms}+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Termos definidos</span>
              </div>
              <div className="text-center p-5 rounded-2xl bg-card/60 border border-border">
                <span className="text-3xl font-black text-primary block">{CATEGORIES.length}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Categorias</span>
              </div>
              <div className="text-center p-5 rounded-2xl bg-card/60 border border-border">
                <span className="text-3xl font-black text-primary block">PT</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Em português</span>
              </div>
            </div>

            {/* Categories */}
            {CATEGORIES.map((cat, ci) => {
              const filteredTerms = search
                ? cat.terms.filter(t => t.term.toLowerCase().includes(lowerSearch) || t.def.toLowerCase().includes(lowerSearch))
                : cat.terms;

              if (search && filteredTerms.length === 0) return null;

              return (
                <div key={ci} className="mb-12">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    {cat.title}
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-muted text-muted-foreground">{filteredTerms.length}</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {filteredTerms.map((t, ti) => (
                      <div key={ti} className={`p-5 rounded-xl border ${cat.color} hover:border-primary/40 transition-all`}>
                        <h3 className="text-foreground font-bold mb-2">{t.term}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{t.def}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* No results */}
            {search && CATEGORIES.every(cat => cat.terms.every(t => !t.term.toLowerCase().includes(lowerSearch) && !t.def.toLowerCase().includes(lowerSearch))) && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nenhum termo encontrado para "{search}". Tenta outra pesquisa.</p>
              </div>
            )}

            {/* SEO */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Aprende ao Teu Ritmo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este léxico é um recurso vivo que acompanha a tua descoberta do libertinismo. Consulta também o <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">guia para principiantes</Link>, as <Link to="/pt/perguntas-principiantes-guia" className="text-primary hover:underline">perguntas frequentes</Link> e o <Link to="/pt/lexico-libertino" className="text-primary hover:underline">léxico completo com definições A-Z</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Descobre os <Link to="/pt/eventos" className="text-primary hover:underline">eventos AKOKY</Link>, explore os <Link to="/pt/jogos" className="text-primary hover:underline">jogos libertinos</Link> e descarrega a <Link to="/pt/app" className="text-primary hover:underline">aplicação</Link> para aceder à comunidade.
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
};

export default LexiqueGuidePt;
