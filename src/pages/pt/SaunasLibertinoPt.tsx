import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

/* ═══════════ SAUNAS DATA ═══════════ */
interface SaunaPT {
  id: string;
  name: string;
  city: string;
  region: string;
  description: string;
  facilities: string[];
  schedule: string;
  price: string;
  rating: number;
  highlight?: boolean;
}

const SAUNAS: SaunaPT[] = [
  { id: "sp-001", name: "Sauna Paraíso Lisboa", city: "Lisboa", region: "Grande Lisboa", description: "Sauna libertino misto no coração de Lisboa com jacuzzi, hammam, cabinas privadas e zona de relax. Ambiente acolhedor, ideal para casais.", facilities: ["Jacuzzi", "Hammam", "Cabinas", "Bar"], schedule: "Seg-Dom 12:00-00:00", price: "30€/casal", rating: 4.3 },
  { id: "sp-002", name: "Sauna Termal Porto", city: "Porto", region: "Grande Porto", description: "O maior sauna libertino do Norte com piscina interior, jacuzzi XXL, hammam, sauna finlandesa e cabinas privadas com duche.", facilities: ["Piscina", "Jacuzzi XXL", "Sauna finlandesa", "Hammam"], schedule: "Seg-Dom 11:00-01:00", price: "35€/casal", rating: 4.5, highlight: true },
  { id: "sp-003", name: "Sauna Oceano Algarve", city: "Portimão", region: "Algarve", description: "Vista oceânica panorâmica em Portimão. Jacuzzi panorâmico, sauna finlandesa, hammam e zona de massagens profissionais.", facilities: ["Vista mar", "Jacuzzi", "Massagens", "Hammam"], schedule: "Ter-Dom 12:00-23:00", price: "35€/casal", rating: 4.4 },
  { id: "sp-004", name: "Sauna Termas Aveiro", city: "Aveiro", region: "Centro", description: "Instalações termais completas em Aveiro: circuito de águas, sauna, hammam e zona relax com jardim interior.", facilities: ["Circuito águas", "Sauna", "Jardim", "Hammam"], schedule: "Ter-Dom 12:00-22:00", price: "25€/casal", rating: 4.2 },
  { id: "sp-005", name: "Sauna Costa Azul", city: "Almada", region: "Península de Setúbal", description: "Sauna resort na Costa da Caparica com jacuzzi exterior, piscina climatizada e vistas para o mar. Muito frequentado no verão.", facilities: ["Jacuzzi exterior", "Piscina", "Vista mar", "Terraço"], schedule: "Ter-Dom 11:00-23:00", price: "30€/casal", rating: 4.3 },
  { id: "sp-006", name: "Sauna Atlântico Funchal", city: "Funchal", region: "Madeira", description: "Ambiente tropical no Funchal com jardim exótico, jacuzzi exterior, sauna e cabinas privadas inspiradas na flora madeirense.", facilities: ["Jardim tropical", "Jacuzzi", "Sauna", "Cabinas temáticas"], schedule: "Ter-Dom 11:00-23:00", price: "30€/casal", rating: 4.4, highlight: true },
];

const FACILITIES = [
  { icon: "♨️", name: "Sauna Finlandesa", desc: "Calor seco entre 80°C e 100°C. Relaxa os músculos, elimina toxinas e prepara o corpo para os encontros." },
  { icon: "🌫️", name: "Hammam / Banho Turco", desc: "Vapor húmido a 40-50°C. Hidrata a pele, descontrai e cria uma atmosfera sensual e envolvente." },
  { icon: "🛁", name: "Jacuzzi", desc: "Água quente com hidromassagem. O espaço mais social do sauna — ideal para primeiro contacto." },
  { icon: "🏊", name: "Piscina Climatizada", desc: "Disponível nos saunas de maior dimensão. Permite refrescar entre sessões de calor." },
  { icon: "🛏️", name: "Cabinas Privadas", desc: "Espaços íntimos com cama, duche e por vezes decoração temática. Reserváveis ou por ordem de chegada." },
  { icon: "💆", name: "Zona de Massagens", desc: "Massagens profissionais ou entre visitantes. Disponível nos estabelecimentos premium." },
];

const COMPARISON = [
  { feature: "Atmosfera", sauna: "Calma e relaxada", club: "Festiva e energética" },
  { feature: "Horário", sauna: "Dia e noite", club: "Apenas noturno" },
  { feature: "Dress code", sauna: "Toalha / nu", club: "Elegante ou sexy" },
  { feature: "Música", sauna: "Ambiente suave", club: "DJ / alto volume" },
  { feature: "Instalações", sauna: "Jacuzzi, hammam, sauna", club: "Bar, pista de dança" },
  { feature: "Preço médio", sauna: "25-35€/casal", club: "40-70€/casal" },
  { feature: "Ideal para", sauna: "Relaxar e conhecer", club: "Festejar e dançar" },
];

const TIPS = [
  { icon: "🧼", title: "Duche obrigatório", desc: "Toma sempre duche antes de usares qualquer instalação. É a regra nº1 da etiqueta em saunas." },
  { icon: "🧴", title: "Traz toalha extra", desc: "Uma para sentar, outra para secar. Alguns saunas fornecem, mas é melhor trazeres as tuas." },
  { icon: "💧", title: "Hidrata-te", desc: "Bebe muita água entre as sessões de calor. O bar do sauna tem sempre água disponível." },
  { icon: "⏰", title: "Chega cedo", desc: "Os saunas estão menos cheios ao início da tarde. Ideal para uma primeira visita tranquila." },
  { icon: "🤫", title: "Respeita o silêncio", desc: "A atmosfera é calma. Fala em voz baixa, respeita quem está a relaxar." },
  { icon: "🤝", title: "Consentimento sempre", desc: "Tal como nos clubes: nunca tocar sem permissão. Um olhar ou sorriso não é consentimento." },
];

const FAQ = [
  { question: "Qual é a diferença entre um sauna libertino e um clube libertino?", answer: "O sauna centra-se no bem-estar (jacuzzi, hammam, sauna) com atmosfera calma. O clube é mais festivo com música, bar e pista de dança." },
  { question: "Posso ir sozinho/a a um sauna libertino?", answer: "Sim. Os saunas são geralmente acessíveis para solteiros. Mulheres sozinhas e casais têm acesso privilegiado." },
  { question: "Preciso de reservar?", answer: "Recomendamos reservar ao fim de semana e para noites especiais. Durante a semana, a maioria aceita sem reserva." },
  { question: "O que devo levar?", answer: "Toalhas (1-2), chinelos, produtos de higiene e eventualmente um cadeado para o cacifo. Preservativos são geralmente fornecidos." },
  { question: "Quanto tempo dura uma visita?", answer: "Em média 2 a 4 horas. Alguns saunas permitem estadias mais longas com tarifa diurna completa." },
  { question: "Os saunas são higiénicos?", answer: "Os saunas referenciados no AKOKY cumprem normas rigorosas de higiene. Limpeza contínua, produtos disponíveis e fiscalização regular." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Saunas Libertinos", item: "https://akoky.com/pt/saunas-libertinos" },
  ],
};

const SaunasLibertinoPt = () => (
  <>
    <MetaTags
      title="Saunas Libertinos em Portugal 2026 | Guia & Diretório — AKOKY"
      description="Descobre os melhores saunas libertinos em Portugal: Lisboa, Porto, Algarve, Funchal. Fichas detalhadas, instalações, preços e avaliações verificadas."
      canonical="https://akoky.com/pt/saunas-libertinos"
      lang="pt"
    />
    <HreflangTags slug="saunas-libertinos" />
    <SchemaOrg schema={[breadcrumbSchema]} />
    <ContentPageLayout
      lang="pt"
      title="Saunas Libertinos em Portugal 2026 — AKOKY"
      description="Guia completo dos saunas libertinos em Portugal."
      canonical="https://akoky.com/pt/saunas-libertinos"
      heroTitle="Saunas Libertinos em Portugal"
      heroSubtitle="Bem-estar e encontros: descobre os melhores saunas libertinos verificados em Lisboa, Porto, Algarve e Funchal. Guia completo com fichas, preços e avaliações."
      heroImage="/images/sauna-cover.webp"
      breadcrumb={[{ label: "Saunas Libertinos" }]}
      faq={FAQ}
    >

      {/* ═══════════ STATS ═══════════ */}
      <section className="py-8 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-3xl font-black text-primary">{SAUNAS.length}</p>
              <p className="text-sm text-muted-foreground">Saunas verificados</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-3xl font-black text-primary">6</p>
              <p className="text-sm text-muted-foreground">Regiões cobertas</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-3xl font-black text-primary">4.4</p>
              <p className="text-sm text-muted-foreground">⭐ Nota média</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-3xl font-black text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Visitados & validados</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT IS ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O que é um Sauna Libertino?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Um sauna libertino combina instalações de <strong className="text-foreground">bem-estar</strong> (sauna finlandesa, jacuzzi, hammam) com espaços orientados para <strong className="text-foreground">encontros sensuais</strong> entre adultos. Ao contrário dos <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes libertinos</Link> com atmosfera festiva, o sauna oferece um ritmo mais calmo, ideal para quem prefere relaxar antes de socializar.</p>
            <p>A visita começa tipicamente pelas instalações de bem-estar — o calor e a água facilitam o contacto natural entre visitantes. Depois, quem desejar pode explorar as cabinas privadas e os espaços íntimos. Não há pressão: podes perfeitamente vir apenas para o bem-estar. Se és principiante, consulta o nosso guia para <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">começar na libertinagem</Link>.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ FACILITIES ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Instalações Típicas</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">O que podes esperar encontrar num sauna libertino de qualidade em Portugal.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FACILITIES.map((f) => (
              <div key={f.name} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors group">
                <span className="text-3xl block mb-3">{f.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{f.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SAUNAS DIRECTORY ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Saunas Libertinos Verificados em Portugal</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Cada sauna foi visitado e validado pela equipa AKOKY.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAUNAS.map((s) => (
              <article
                key={s.id}
                className={`border rounded-xl p-5 transition-all duration-200 hover:shadow-lg ${
                  s.highlight
                    ? "border-primary/40 bg-primary/5 hover:shadow-primary/10"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-primary/5"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{s.name}</h3>
                    <p className="text-xs text-muted-foreground">📍 {s.city}, {s.region}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-0.5 text-amber-400 text-sm">{"★".repeat(Math.round(s.rating))}</div>
                    <p className="text-[10px] text-muted-foreground">{s.rating}/5</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {s.facilities.map((f) => (
                    <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">{f}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>🕐 {s.schedule}</span>
                  <span className="font-bold text-foreground">{s.price}</span>
                </div>
                {s.highlight && (
                  <span className="inline-flex items-center text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full mt-3">⭐ RECOMENDADO</span>
                )}
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pt/clubes-libertinos" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Ver todos os estabelecimentos no diretório completo →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Sauna vs. Clube: Qual Escolher?</h2>
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/30 p-3 text-xs font-bold text-foreground uppercase tracking-wider">
              <span>Critério</span>
              <span className="text-center">♨️ Sauna</span>
              <span className="text-center">🏛️ Clube</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 p-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-card/50"}`}>
                <span className="font-semibold text-foreground">{row.feature}</span>
                <span className="text-center text-muted-foreground">{row.sauna}</span>
                <span className="text-center text-muted-foreground">{row.club}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TIPS ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">6 Dicas para a Tua Primeira Visita</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Segue estas dicas para uma experiência confortável e respeitosa.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIPS.map((t) => (
              <div key={t.title} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors">
                <span className="text-3xl block mb-3">{t.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BEGINNERS BLOCK ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="border border-primary/30 rounded-2xl p-8 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌟</span>
              <h2 className="text-2xl font-bold text-foreground">Principiante? O Sauna é o Formato Ideal</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">O sauna libertino é frequentemente recomendado como primeiro passo no mundo libertino. O ambiente calmo, a ausência de dress code complexo e o ritmo natural das instalações de bem-estar permitem uma descoberta sem pressão. Muitos casais começam pelo sauna antes de experimentar os <Link to="/pt/clubbing" className="text-primary hover:underline">clubes libertinos</Link>.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link to="/pt/comecar-libertinagem" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                📖 Guia para Principiantes
              </Link>
              <Link to="/pt/primeiro-encontro-libertino" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                💑 Primeiro Encontro Libertino
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SEO TEXT ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Guia dos Saunas Libertinos em Portugal — AKOKY 2026</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              O AKOKY referencia <strong className="text-foreground">{SAUNAS.length} saunas libertinos verificados</strong> em Portugal, de <strong className="text-foreground">Lisboa</strong> ao <strong className="text-foreground">Funchal</strong>, passando pelo <strong className="text-foreground">Porto</strong>, <strong className="text-foreground">Algarve</strong> e <strong className="text-foreground">Aveiro</strong>. Cada ficha foi validada pela nossa equipa após visita presencial e enriquecida com as <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações autênticas</Link> da comunidade.
            </p>
            <p>
              Portugal oferece uma diversidade notável de saunas libertinos: desde os saunas urbanos de Lisboa e Porto, com instalações modernas e clientela cosmopolita, até aos saunas resort do Algarve com vistas oceânicas e ambiente de férias. A Madeira completa a oferta com propostas tropicais únicas no jardim exótico do Funchal.
            </p>
            <p>
              Consulta também o <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">diretório completo de estabelecimentos</Link>, os próximos <Link to="/pt/eventos" className="text-primary hover:underline">eventos libertinos</Link> e descarrega a <Link to="/pt/app" className="text-primary hover:underline">aplicação AKOKY</Link> para reservares a tua próxima visita. Membros <Link to="/pt/vip" className="text-primary hover:underline">VIP</Link> têm acesso a descontos exclusivos e noites especiais nos saunas parceiros.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto para Relaxar?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Junta-te à maior comunidade libertina da Europa. Inscrição gratuita, discreta e verificada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.akoky.com/register" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              Criar Conta Gratuita →
            </a>
            <Link to="/pt/clubes-libertinos" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
              Explorar o Diretório
            </Link>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default SaunasLibertinoPt;
