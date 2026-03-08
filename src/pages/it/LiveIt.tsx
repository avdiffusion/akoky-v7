import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come accedere ai live AKOKY?", answer: "I live sono accessibili ai membri iscritti. Alcuni contenuti sono riservati ai membri VIP. Crea il tuo account gratuitamente su AKOKY." },
  { question: "I live sono sicuri?", answer: "Sì. Tutti i partecipanti sono verificati, la moderazione è umana 24h/7d e l'accesso è strettamente riservato ai membri maggiorenni." },
  { question: "Posso trasmettere il mio live?", answer: "Sì, i membri verificati possono trasmettere. Ogni trasmissione è soggetta alla carta AKOKY e a una verifica preliminare." },
  { question: "I live sono disponibili in replay?", answer: "Sì, i membri VIP possono rivedere i replay illimitati di tutti i live passati. I membri standard accedono ai live in diretta." },
  { question: "Posso interagire durante un live?", answer: "Sì, ogni live ha una chat in tempo reale dove puoi interagire con il diffusore e gli altri spettatori nel rispetto della carta AKOKY." },
];

const PILLARS = [
  { icon: "🎥", title: "Esperienza Immersiva", desc: "Video HD, audio cristallino, interfaccia elegante. Ogni live è pensato per immergerti in un'atmosfera sensuale e raffinata, degna di un club privato." },
  { icon: "👁️", title: "Moderazione Umana", desc: "Un team dedicato supervisiona ogni live in tempo reale. Qualsiasi comportamento inappropriato viene immediatamente sanzionato. La tua sicurezza è la priorità assoluta." },
  { icon: "🤝", title: "Rispetto & Consenso", desc: "Nessun diffusore è costretto, nessuno spettatore può esigere. Il consenso libero e entusiasta è la regola d'oro di ogni interazione su AKOKY Live." },
  { icon: "🔒", title: "Accesso Controllato", desc: "AKOKY Live è riservato ai membri verificati della community. Ogni iscrizione è validata manualmente per garantire un ambiente sano e sicuro." },
];

const LIVE_TYPES = [
  { icon: "💑", title: "Live di Coppie", desc: "Coppie verificate condividono momenti della loro intimità in diretta. Voyeurismo raffinato e momenti complici in un contesto consapevole." },
  { icon: "👤", title: "Live Solo", desc: "Performance individuali sensuali e artistiche. L'espressione personale al servizio dell'erotismo elegante." },
  { icon: "👥", title: "Live Comunitari", desc: "Più partecipanti per esperienze collettive immersive. L'energia del gruppo nel rispetto assoluto." },
  { icon: "🎭", title: "Live Evento", desc: "Serate tematiche, eventi speciali, celebrazioni esclusive. Momenti unici trasmessi in diretta dai club partner." },
  { icon: "🔐", title: "Live Privati VIP", desc: "Accesso ultra-ristretto per i membri VIP. Intimità totale con i tuoi diffusori preferiti e replay illimitati." },
];

const LiveIt = () => (
  <>
    <MetaTags title="Live Libertini AKOKY 2026 | Streaming Premium Sicuro e Discreto" description="Scopri 20+ live libertini a settimana: atmosfera di club in diretta, serate esclusive, contenuti VIP. Streaming sicuro, moderato e discreto." canonical="https://akoky.com/it/live" lang="it" ogImage="/images/es-live-cover.webp" />
    <HreflangTags slug="live" />
    <ContentPageLayout lang="it" title="Live Libertini AKOKY 2026 | Streaming Premium" description="20+ live libertini a settimana." canonical="https://akoky.com/it/live" heroTitle="AKOKY Live — Video e Incontri in Diretta" heroSubtitle="20+ live a settimana: club in diretta, serate esclusive, contenuti VIP. Sicuro, moderato e discreto." heroImage="/images/es-live-cover.webp" breadcrumb={[{ label: "Live AKOKY" }]} faq={FAQ}>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "20+", label: "Live/settimana", icon: "📡" },
              { value: "HD", label: "Qualità video", icon: "🎥" },
              { value: "24/7", label: "Moderazione umana", icon: "🛡️" },
              { value: "100%", label: "Consenso verificato", icon: "✅" },
            ].map((s) => (
              <div key={s.label} className="group relative p-5 rounded-2xl border border-border bg-card/60 backdrop-blur text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <span className="text-2xl block mb-1">{s.icon}</span>
                <p className="text-2xl md:text-3xl font-black text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-foreground font-display">Benvenuto nell'Esperienza AKOKY Live</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">AKOKY Live non è l'ennesima piattaforma di streaming adulto. È un <strong className="text-foreground">club privato digitale</strong> dove l'esperienza libertina in diretta incontra l'eleganza, la sicurezza e il rispetto reciproco. Ogni live è un momento di condivisione autentico, lontano dai codici volgari delle piattaforme generaliste.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">A differenza dei siti non moderati, AKOKY Live instaura un ambiente controllato e benevolo. Ogni diffusore è verificato, ogni live è supervisionato, e ogni spettatore rispetta una carta di buona condotta rigorosa. Il <strong className="text-foreground">consenso non è un'opzione</strong>: è il fondamento di ogni interazione.</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">Il Framework AKOKY Live</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Quattro pilastri per un'esperienza libertina premium e sicura.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{p.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Types */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">I Diversi Tipi di Live</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Ogni esperienza è unica, ogni formato risponde a desideri diversi.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIVE_TYPES.map((l) => (
              <div key={l.title} className="group p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                <span className="text-3xl block mb-3">{l.icon}</span>
                <h3 className="font-bold text-foreground mb-2">{l.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who can access */}
      <section className="py-14 px-4 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-black text-foreground font-display">Chi Può Accedere a AKOKY Live?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">AKOKY Live è aperto a tutti i membri della community, ma l'accesso ai contenuti varia secondo il livello di verifica. I membri standard accedono ai live pubblici, i <Link to="/it/vip" className="text-primary hover:underline font-semibold">VIP</Link> ai contenuti esclusivi, live privati e replay illimitati.</p>
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <p className="text-foreground font-semibold mb-2">🎭 Lo spirito AKOKY</p>
            <p className="text-muted-foreground">Nessun obbligo, nessuna pressione. Sei libero di guardare, interagire o semplicemente osservare. Ogni esperienza rispetta i tuoi limiti e i tuoi desideri. AKOKY Live è uno spazio di libertà e consenso reciproco.</p>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-foreground text-center mb-10 font-display">L'Atmosfera AKOKY Live</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { img: "/images/soiree-club-libertin.webp", label: "Live da club libertino" },
              { img: "/images/soiree-couple-libertin.webp", label: "Live di coppia" },
              { img: "/images/ambiance-sauna-libertin.webp", label: "Atmosfera sauna live" },
              { img: "/images/apero-libertin-akoky.webp", label: "Live aperitivo AKOKY" },
            ].map((g) => (
              <div key={g.label} className="aspect-square overflow-hidden rounded-xl relative group">
                <img src={g.img} alt={g.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-white text-xs font-medium">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 font-display">Pronto a Vivere l'Esperienza?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Unisciti a migliaia di libertini che hanno scelto AKOKY Live per vivere la loro sensualità in sicurezza ed eleganza.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all">Guarda i Live →</a>
                <Link to="/it/vip" className="px-8 py-4 rounded-full border border-border bg-card/50 text-foreground font-bold text-lg hover:border-primary/40 hover:scale-105 transition-all">Diventa VIP</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Scopri Anche</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Accedi ai live esclusivi e ai replay." },
              { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Scopri gli eventi dal vivo in Italia." },
              { href: "/it/app", icon: "📱", title: "App AKOKY", desc: "Guarda i live ovunque dal tuo smartphone." },
              { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Tutte le funzionalità della piattaforma." },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="group block rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg transition-all">
                <span className="text-3xl mb-2 block">{l.icon}</span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">{l.title}</h3>
                <p className="text-xs text-muted-foreground">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LiveIt;
