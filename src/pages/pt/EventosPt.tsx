import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

/* ═══════════ UPCOMING EVENTS ═══════════ */
interface EventoPT {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  city: string;
  venue: string;
  type: string;
  description: string;
  tags: string[];
  capacity: string;
  price: string;
  highlight?: boolean;
}

const EVENTOS: EventoPT[] = [
  { id: "evt-001", title: "Noite das Máscaras — Lisboa", date: "22 Mar 2026", day: "22", month: "MAR", city: "Lisboa", venue: "Oops! Lisboa", type: "Noitada em Clube", description: "A noite mais aguardada de Lisboa: dress code de máscaras venezianas, champanhe na chegada, DJ set internacional e 3 dark rooms temáticas.", tags: ["Casais", "Singles F", "Máscaras"], capacity: "120 pessoas", price: "50€/casal", highlight: true },
  { id: "evt-002", title: "Sunset Libertino — Algarve", date: "28 Mar 2026", day: "28", month: "MAR", city: "Albufeira", venue: "Algarve Swing Resort", type: "Fim de Semana", description: "Fim de semana exclusivo na costa algarvia: pool party ao pôr do sol, jantar gourmet, noitada de sábado com DJs e brunch de despedida no domingo.", tags: ["Casais", "Piscina", "Gourmet"], capacity: "60 pessoas", price: "180€/casal (2 noites)", highlight: true },
  { id: "evt-003", title: "Aperitivo Afterwork — Porto", date: "4 Abr 2026", day: "04", month: "ABR", city: "Porto", venue: "Desejo Lounge Porto", type: "Aperitivo", description: "Encontro descontraído após o trabalho no coração do Porto. Cocktails artesanais, ambiente lounge e possibilidade de continuar a noite no Porto Swing Club.", tags: ["Casais", "Singles", "Afterwork"], capacity: "40 pessoas", price: "15€/pessoa" },
  { id: "evt-004", title: "Noite Sensual — Porto", date: "11 Abr 2026", day: "11", month: "ABR", city: "Porto", venue: "Porto Swing Club", type: "Noitada em Clube", description: "A noite de referência do Porto: lingerie obrigatória após a meia-noite, música sensual, bar premium com vinhos do Douro e vista panorâmica sobre o rio.", tags: ["Casais", "Lingerie", "Premium"], capacity: "100 pessoas", price: "40€/casal" },
  { id: "evt-005", title: "Weekend Tropical — Funchal", date: "18-19 Abr 2026", day: "18", month: "ABR", city: "Funchal", venue: "Funchal Paradise Club", type: "Fim de Semana", description: "Escapada à Madeira: festa tropical com decoração exótica, piscina aquecida, cocktails de frutas tropicais e noites quentes sob as estrelas.", tags: ["Casais", "Tropical", "Piscina"], capacity: "50 pessoas", price: "150€/casal (2 noites)" },
  { id: "evt-006", title: "Noite Elegante — Lisboa", date: "25 Abr 2026", day: "25", month: "ABR", city: "Lisboa", venue: "Le Boudoir Lisboa", type: "Noitada em Clube", description: "Noite de gala no clube mais exclusivo de Lisboa. Dress code rigoroso (fato escuro / vestido longo), serviço de champanhe, música clássica e jazz.", tags: ["Casais", "Exclusivo", "Gala"], capacity: "60 pessoas", price: "70€/casal", highlight: true },
  { id: "evt-007", title: "Pool Party Primavera — Vilamoura", date: "2 Mai 2026", day: "02", month: "MAI", city: "Vilamoura", venue: "Paradise Beach Club", type: "Festa ao Ar Livre", description: "A primeira pool party da temporada no Algarve: piscina aquecida, DJ, bar ao ar livre, zona chill-out e transição para noite libertina.", tags: ["Casais", "Pool party", "Música"], capacity: "80 pessoas", price: "35€/casal" },
  { id: "evt-008", title: "Jantar & Swing — Coimbra", date: "9 Mai 2026", day: "09", month: "MAI", city: "Coimbra", venue: "Coimbra Swing", type: "Jantar Libertino", description: "Jantar de 5 pratos com vinhos do Dão, seguido de uma noitada temática no clube. Ambiente íntimo e gastronómico para casais.", tags: ["Casais", "Gastronómico", "Vinho"], capacity: "30 pessoas", price: "90€/casal (jantar + entrada)" },
  { id: "evt-009", title: "Sauna Night — Lisboa", date: "16 Mai 2026", day: "16", month: "MAI", city: "Lisboa", venue: "Sauna Paraíso Lisboa", type: "Noite de Sauna", description: "Noite especial no sauna com circuito de águas privativo, hammam, massagens disponíveis e ambiente zen. Casais e mulheres singles.", tags: ["Casais", "Singles F", "Wellness"], capacity: "40 pessoas", price: "45€/casal" },
  { id: "evt-010", title: "Noite dos Açores — Ponta Delgada", date: "23 Mai 2026", day: "23", month: "MAI", city: "Ponta Delgada", venue: "Azores Swing", type: "Noitada em Clube", description: "Noitada exclusiva no único clube libertino dos Açores: piscina termal vulcânica, bar com licores locais e ambiente intimista.", tags: ["Casais", "Termal", "Exclusivo"], capacity: "30 pessoas", price: "35€/casal" },
];

const EVENT_TYPES = [
  { icon: "🎭", name: "Noitadas em Clube", count: "120+/mês", desc: "O formato clássico: música, bar, dark rooms e ambiente festivo nos melhores clubes de Portugal." },
  { icon: "🥂", name: "Aperitivos Libertinos", count: "40+/mês", desc: "Encontros informais após o trabalho para conhecer a comunidade sem pressão. Ideal para principiantes." },
  { icon: "🌊", name: "Fins de Semana Temáticos", count: "15+/mês", desc: "Escapadas de 2-3 dias em villas, hotéis ou resorts no Algarve, Madeira ou Douro." },
  { icon: "🍽️", name: "Jantares Libertinos", count: "20+/mês", desc: "Gastronomia portuguesa e vinhos de autor num ambiente seleto antes da noitada." },
  { icon: "♨️", name: "Noites de Sauna", count: "30+/mês", desc: "Bem-estar e encontros num ambiente relaxado: jacuzzi, hammam, massagens." },
  { icon: "🔒", name: "Encontros Privados", count: "50+/mês", desc: "Encontros íntimos em casa particular com convite ou seleção prévia." },
];

const CITIES = [
  { name: "Lisboa", events: "80+", emoji: "🏙️" },
  { name: "Porto", events: "45+", emoji: "🍷" },
  { name: "Algarve", events: "35+", emoji: "🏖️" },
  { name: "Funchal", events: "15+", emoji: "🌺" },
  { name: "Coimbra", events: "10+", emoji: "📚" },
  { name: "Setúbal", events: "10+", emoji: "⛵" },
  { name: "Braga", events: "8+", emoji: "⛪" },
  { name: "Açores", events: "5+", emoji: "🌋" },
];

const FAQ = [
  { question: "Como participar nos eventos AKOKY?", answer: "Regista-te no AKOKY, navega pelo calendário de eventos e reserva o teu lugar diretamente online. Alguns eventos requerem estatuto VIP." },
  { question: "Os eventos são abertos a principiantes?", answer: "Sim. Muitos eventos são especificamente concebidos para receber os novos membros. São claramente identificados no calendário com a etiqueta 'Principiantes'." },
  { question: "Posso ir sozinho/a a um evento?", answer: "Sim. Solteiros e casais são bem-vindos na maioria dos eventos. A composição das noitadas varia — consulta as tags de cada evento." },
  { question: "Posso cancelar a minha reserva?", answer: "Sim, até 48h antes do evento para reembolso total. Após esse prazo, o lugar pode ser transferido para outro membro." },
  { question: "Os eventos VIP incluem o quê?", answer: "Os eventos VIP incluem recepção prioritária, champanhe, acesso a zonas exclusivas e por vezes jantar. Requerem adesão VIP ativa." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://akoky.com/pt" },
    { "@type": "ListItem", position: 2, name: "Eventos Libertinos", item: "https://akoky.com/pt/eventos" },
  ],
};

const eventsSchema = EVENTOS.slice(0, 5).map((e) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: e.title,
  startDate: "2026-03-22",
  location: { "@type": "Place", name: e.venue, address: { "@type": "PostalAddress", addressLocality: e.city, addressCountry: "PT" } },
  description: e.description,
  organizer: { "@type": "Organization", name: "AKOKY", url: "https://akoky.com" },
}));

const EventosPt = () => (
  <>
    <MetaTags
      title="Eventos Libertinos em Portugal 2026 | 300+ Noitadas — AKOKY"
      description="Descobre 300+ eventos libertinos por mês em Portugal: noitadas em clube, aperitivos, fins de semana temáticos, jantares e festas em Lisboa, Porto, Algarve e Funchal."
      canonical="https://akoky.com/pt/eventos"
      lang="pt"
    />
    <HreflangTags slug="eventos" />
    <SchemaOrg schema={[breadcrumbSchema, ...eventsSchema]} />
    <ContentPageLayout
      lang="pt"
      title="Eventos Libertinos em Portugal 2026 — AKOKY"
      description="300+ eventos libertinos por mês em Portugal."
      canonical="https://akoky.com/pt/eventos"
      heroTitle="Eventos Libertinos em Portugal"
      heroSubtitle="300+ eventos por mês em todo o país: noitadas exclusivas, aperitivos, fins de semana no Algarve, jantares & swing. Reserva o teu lugar."
      heroImage="/images/pt-eventos-cover.webp"
      breadcrumb={[{ label: "Eventos Libertinos" }]}
      faq={FAQ}
    >

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="py-8 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-3xl font-black text-primary">300+</p>
              <p className="text-sm text-muted-foreground">Eventos / mês</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-3xl font-black text-primary">8</p>
              <p className="text-sm text-muted-foreground">Regiões cobertas</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-3xl font-black text-primary">6</p>
              <p className="text-sm text-muted-foreground">Tipos de evento</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-3xl font-black text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Verificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ EVENT TYPES ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">6 Tipos de Eventos</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">De noitadas festivas a encontros íntimos, há um formato para cada desejo.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENT_TYPES.map((et) => (
              <div key={et.name} className="border border-border rounded-xl p-5 bg-card hover:border-primary/40 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{et.icon}</span>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{et.count}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{et.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{et.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ UPCOMING EVENTS ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Próximos Eventos em Destaque</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Reserva agora os eventos mais concorridos em Portugal.</p>
          <div className="space-y-4">
            {EVENTOS.map((evt) => (
              <article
                key={evt.id}
                className={`border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg ${
                  evt.highlight
                    ? "border-primary/40 bg-primary/5 hover:shadow-primary/10"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-primary/5"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Date block */}
                  <div className={`shrink-0 flex md:flex-col items-center justify-center gap-1 px-6 py-4 md:py-6 md:w-24 text-center ${
                    evt.highlight ? "bg-primary/10" : "bg-muted/30"
                  }`}>
                    <span className="text-3xl md:text-4xl font-black text-primary leading-none">{evt.day}</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{evt.month}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-4 md:p-5">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">{evt.title}</h3>
                      {evt.highlight && (
                        <span className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">⭐ DESTAQUE</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{evt.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span>📍 {evt.city} — {evt.venue}</span>
                      <span>🏷️ {evt.type}</span>
                      <span>👥 {evt.capacity}</span>
                      <span className="font-bold text-foreground">{evt.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {evt.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="shrink-0 flex items-center px-5 py-4 md:py-0">
                    <a
                      href="https://app.akoky.com/register"
                      className="inline-flex items-center justify-center gap-1 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      Reservar →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://app.akoky.com/register"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Ver todos os 300+ eventos no AKOKY →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ CITIES ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Eventos por Cidade</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CITIES.map((c) => (
              <div key={c.name} className="border border-border rounded-xl p-4 bg-card text-center hover:border-primary/40 transition-colors group">
                <span className="text-3xl block mb-2">{c.emoji}</span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1"><span className="font-bold text-primary">{c.events}</span> eventos/mês</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Como Funciona?</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Cria a Tua Conta Gratuita", desc: "Registo em 30 segundos na plataforma AKOKY. Perfil verificado, foto validada e acesso ao calendário completo." },
              { step: "2", title: "Explora o Calendário", desc: "Filtra por cidade, tipo de evento, data ou público (casais, singles). Cada evento tem uma ficha detalhada com fotos e avaliações." },
              { step: "3", title: "Reserva o Teu Lugar", desc: "Pagamento seguro online. Confirmação instantânea por email e na app. Cancelamento gratuito até 48h antes." },
              { step: "4", title: "Vive a Experiência", desc: "Apresenta o teu código QR na entrada. Desfruta da noitada em total segurança e discrição." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">{s.step}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BEGINNERS ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <div className="border border-primary/30 rounded-2xl p-8 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌟</span>
              <h2 className="text-2xl font-bold text-foreground">Primeira Vez? Eventos para Principiantes</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">O AKOKY organiza regularmente eventos especificamente pensados para os recém-chegados ao libertinismo. Caracterizam-se por uma atmosfera acolhedora, apresentações moderadas e um ambiente sem pressão. Identificados no calendário com a etiqueta <span className="text-primary font-semibold">"Principiantes"</span>.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link to="/pt/comecar-libertinagem" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                📖 Guia para Principiantes
              </Link>
              <Link to="/pt/primeiro-clube-libertino" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                🏛️ Primeiro Clube Libertino
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SEO TEXT ═══════════ */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Agenda Libertina em Portugal — Guia AKOKY 2026</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              O AKOKY é a <strong className="text-foreground">plataforma nº1 para eventos libertinos em Portugal</strong>, com mais de 300 eventos publicados mensalmente em todo o país. De noitadas nos melhores <Link to="/pt/clubes-libertinos" className="text-primary hover:underline">clubes de Lisboa e Porto</Link> a fins de semana exclusivos no <strong className="text-foreground">Algarve</strong>, passando por aperitivos afterwork e jantares gourmet, a oferta é vasta e diversificada.
            </p>
            <p>
              Cada evento é verificado pela equipa AKOKY: local, organizador, política de admissão e medidas de segurança são validados antes da publicação. As <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações da comunidade</Link> complementam as fichas com feedback autêntico dos participantes anteriores.
            </p>
            <p>
              Descarrega a <Link to="/pt/app" className="text-primary hover:underline">aplicação AKOKY</Link> para receberes notificações de novos eventos perto de ti, reservares com um toque e acederes ao calendário completo onde quer que estejas. Junta-te aos membros <Link to="/pt/vip" className="text-primary hover:underline">VIP</Link> para acesso prioritário e eventos exclusivos reservados à comunidade premium.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-14 px-4 bg-card/30">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto para o Próximo Evento?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Junta-te a mais de 1,5 milhão de membros. Inscrição gratuita, discreta e verificada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.akoky.com/register" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              Criar Conta Gratuita →
            </a>
            <Link to="/pt/clubes-libertinos" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
              Explorar os Clubes
            </Link>
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default EventosPt;
