import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const chipClass =
  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300";

const cardClass =
  "bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group";

const glowCardClass =
  "relative overflow-hidden bg-card border border-border rounded-2xl p-8 hover:border-primary/60 transition-all duration-500 group before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500";

const cities = [
  { label: "Milano", emoji: "🏙️", desc: "Capitale del glamour libertino", href: "/it/club-libertini-milano" },
  { label: "Roma", emoji: "🏛️", desc: "Club esclusivi nella Città Eterna", href: "/it/club-libertini-roma" },
  { label: "Torino", emoji: "👑", desc: "Eleganza sabauda e serate raffinate", href: "/it/club-libertini-torino" },
  { label: "Bologna", emoji: "🍝", desc: "Convivialità e cene-club emiliane", href: "/it/club-libertini-bologna" },
  { label: "Firenze", emoji: "🎨", desc: "Atmosfere rinascimentali sensuali", href: "/it/club-libertini-firenze" },
  { label: "Napoli", emoji: "🌋", desc: "Passione e panorami mozzafiato", href: "/it/club-libertini-napoli" },
  { label: "Venezia", emoji: "🎭", desc: "Balli in maschera e palazzi", href: "/it/club-libertini" },
  { label: "Verona", emoji: "💕", desc: "Club romantici nella città dell'amore", href: "/it/club-libertini" },
  { label: "Palermo", emoji: "🌺", desc: "Nuova frontiera libertina siciliana", href: "/it/club-libertini" },
  { label: "Catania", emoji: "🔥", desc: "Vita notturna ai piedi dell'Etna", href: "/it/club-libertini" },
  { label: "Rimini", emoji: "🏖️", desc: "Beach party sulla Riviera", href: "/it/club-libertini" },
  { label: "Genova", emoji: "⚓", desc: "Atmosfera portuale unica", href: "/it/club-libertini" },
];

const regions = [
  { label: "Lombardia", count: "8+ club" },
  { label: "Lazio", count: "6+ club" },
  { label: "Piemonte", count: "4+ club" },
  { label: "Emilia-Romagna", count: "5+ club" },
  { label: "Toscana", count: "4+ club" },
  { label: "Veneto", count: "5+ club" },
  { label: "Campania", count: "3+ club" },
  { label: "Sicilia", count: "4+ club" },
  { label: "Sardegna", count: "3+ club" },
  { label: "Puglia", count: "3+ club" },
  { label: "Liguria", count: "2+ club" },
  { label: "Friuli Venezia Giulia", count: "2+ club" },
];

const guides = [
  { title: "Come Iniziare", desc: "La guida definitiva per coppie e single principianti.", href: "/it/iniziare-libertinismo", emoji: "🌱" },
  { title: "Lessico Libertino", desc: "Tutti i termini e codici del mondo libertino spiegati.", href: "/it/lessico-libertino", emoji: "🔤" },
  { title: "Libertinismo", desc: "Storia, filosofia e cultura del libertinismo.", href: "/it/libertinismo", emoji: "💋" },
  { title: "Giochi Libertini", desc: "Giochi per ravvivare le vostre serate di coppia.", href: "/it/giochi", emoji: "🎮" },
  { title: "AKOKY VIP", desc: "Accesso prioritario ed esclusività totale.", href: "/it/vip", emoji: "👑" },
  { title: "Blog Libertino", desc: "Guide, consigli e articoli sulla scena italiana.", href: "/it/blog", emoji: "📝" },
];

const comparatifs = [
  { label: "Miglior Sito Libertino", href: "/it/miglior-sito-libertino" },
  { label: "AKOKY vs Wyylde", href: "/it/akoky-vs-wyylde" },
];

const ClubbingIt = () => {
  return (
    <>
      <MetaTags
        title="Clubbing Libertino in Italia 2026 — Guida Definitiva Club e Saune | AKOKY"
        description="Guida completa al clubbing libertino in Italia 2026: Milano, Roma, Torino, Bologna, Napoli, Firenze. Club, saune, eventi, dress code e consigli per la prima serata."
        canonical="https://akoky.com/it/clubbing"
        lang="it"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="clubbing" />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Clubbing Libertino in Italia 2026 — Guida Definitiva",
        description: "Guida completa al clubbing libertino in Italia e Europa.",
        url: "https://akoky.com/it/clubbing",
        inLanguage: "it",
      }} />

      <ContentPageLayout
        lang="it"
        title="Clubbing Libertino in Italia 2026 — Guida Definitiva | AKOKY"
        description="La guida di riferimento per scoprire e vivere il clubbing libertino in Italia."
        canonical="https://akoky.com/it/clubbing"
        heroTitle="Clubbing Libertino in Italia"
        heroSubtitle="La guida di riferimento per scoprire, comprendere e scegliere il vostro club libertino ideale in Italia e in Europa"
        heroImage="/images/club.webp"
        breadcrumb={[{ label: "Clubbing" }]}
        faq={[
          { question: "Come scegliere il primo club libertino in Italia?", answer: "Consultate la nostra guida per principianti e le recensioni verificate su AKOKY. Privilegiate un club con buona reputazione, clientela rispettosa e serate adatte ai novizi." },
          { question: "Qual è la differenza tra un club libertino e una sauna?", answer: "I club puntano sull'atmosfera festiva (bar, danza, aree private), mentre le saune privilegiano il benessere (hammam, spa) in un'atmosfera più rilassata." },
          { question: "Le donne single sono accettate nei club?", answer: "Sì, le donne single sono generalmente benvenute nella maggior parte dei club libertini senza restrizioni particolari." },
          { question: "Come verifica AKOKY i club?", answer: "Il nostro team visita e valuta ogni struttura referenziata. Prendiamo in considerazione igiene, rispetto delle regole, qualità dell'accoglienza e feedback dei membri." },
          { question: "Bisogna prenotare per andare in un club?", answer: "Le prenotazioni sono spesso consigliate, soprattutto per le serate speciali del weekend. Consultate le schede dei club su AKOKY per le modalità." },
          { question: "Quanto costa l'ingresso in media?", answer: "I prezzi variano tra 20€ e 80€ a coppia. Le donne single spesso hanno ingresso gratuito o ridotto. Serate speciali possono avere tariffe maggiorate." },
        ]}
      >
        {/* ═══════════ HERO STATS ═══════════ */}
        <section className="py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container max-w-6xl mx-auto relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "30+", label: "Club in Italia", icon: "🇮🇹" },
                { value: "120+", label: "Club in Europa", icon: "🌍" },
                { value: "300+", label: "Eventi/mese", icon: "🎉" },
                { value: "1.5M", label: "Membri AKOKY", icon: "👥" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 text-center hover:border-primary/40 transition-all duration-300 animate-fade-in">
                  <span className="text-2xl block mb-2">{stat.icon}</span>
                  <p className="text-3xl md:text-4xl font-black text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ANNUARIO CTA ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className={glowCardClass}>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🗺️</div>
                <h2 className="text-3xl font-bold text-foreground mb-4 font-display">Annuario Completo dei Club Italiani</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  Accedi all'annuario interattivo AKOKY: filtra per città, regione, tipo di struttura. Schede dettagliate con foto, orari, prezzi e recensioni verificate della community.
                </p>
                <Link
                  to="/it/club-libertini"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  Esplora l'Annuario →
                </Link>
                <div className="flex gap-4 mt-8">
                  {[
                    { flag: "🇮🇹", label: "Italia" },
                    { flag: "🇪🇺", label: "Europa" },
                    { flag: "📍", label: "Tutte le regioni" },
                    { flag: "⭐", label: "Verificati" },
                  ].map((item) => (
                    <div key={item.label} className="bg-background/50 rounded-xl px-4 py-3 text-center">
                      <div className="text-2xl">{item.flag}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CITTÀ ITALIANE ═══════════ */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-6xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">Club Libertini per Città</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Le migliori destinazioni libertine in Italia — clicca su una città per scoprire i club</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((c, i) => (
                <Link
                  key={c.label}
                  to={c.href}
                  className="relative overflow-hidden bg-card border border-border rounded-2xl p-5 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-1"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-3xl block mb-2">{c.emoji}</span>
                  <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors duration-300">{c.label}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{c.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ REGIONI ═══════════ */}
        <section className="py-16 px-4 border-t border-border/50">
          <div className="container max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground font-display">Regioni Libertine d'Italia</h2>
              <p className="text-muted-foreground mt-2">Esplora club e saune per regione</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {regions.map((r) => (
                <Link
                  key={r.label}
                  to="/it/club-libertini"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary hover:shadow-md transition-all duration-300"
                >
                  <span>{r.label}</span>
                  <span className="text-xs text-muted-foreground bg-background px-2 py-0.5 rounded-full">{r.count}</span>
                </Link>
              ))}
            </div>
            <div className="text-center pt-2">
              <Link to="/it/club-libertini" className="text-primary hover:underline text-sm font-medium">
                Vedi l'annuario completo →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SAUNE ═══════════ */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl border border-border relative group">
                <img
                  src="/images/sauna-cover.webp"
                  alt="Sauna libertina in Italia"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-primary/90 text-primary-foreground px-3 py-1 rounded-full font-semibold">♨️ Benessere & Sensualità</span>
                </div>
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl font-bold text-foreground font-display">Saune Libertine in Italia</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le saune libertine offrono un'esperienza unica che unisce <strong className="text-foreground">benessere e sensualità</strong>. Hammam, jacuzzi, cabine private e aree relax in un'atmosfera intima e rispettosa. Dall'ispirazione delle antiche terme romane alle strutture più moderne.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Scoprite la nostra guida con le migliori saune d'Italia, i prezzi, i codici e i consigli per una prima visita perfetta.
                </p>
                <Link
                  to="/it/saune-libertine"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-primary/50 text-primary font-semibold hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                >
                  Guida alle saune libertine →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ COMPRENDERE L'UNIVERSO ═══════════ */}
        <section className="py-20 px-4 border-t border-border/50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
          <div className="container max-w-4xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display text-center mb-12">Comprendere l'Universo Libertino</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: "🏛️", title: "Club Libertini", desc: "Atmosfera festiva con bar, danza e aree private. Serate a tema per ogni gusto.", link: "/it/club-libertini", cta: "Esplora i club →" },
                { icon: "♨️", title: "Saune Libertine", desc: "Benessere e relax con hammam, spa e spazi sensuali. Atmosfera intima e discreta.", link: "/it/saune-libertine", cta: "Esplora le saune →" },
                { icon: "🏰", title: "Ville Private", desc: "Residenze e ville che ospitano eventi esclusivi su invito. Il top del lusso libertino.", link: "/it/eventi", cta: "Vedi gli eventi →" },
              ].map((type) => (
                <Link key={type.title} to={type.link} className={glowCardClass + " text-center"}>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{type.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{type.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{type.desc}</p>
                    <span className="text-primary text-sm font-semibold">{type.cta}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Cos'è il Libertinismo Moderno?</h3>
                <p>
                  Il libertinismo contemporaneo in Italia indica una pratica sessuale liberamente consensuale tra adulti, fondata sullo scambio, la scoperta e il piacere condiviso. Si basa su valori forti: <strong className="text-foreground">rispetto reciproco, consenso esplicito, discrezione e cortesia</strong>. L'Italia, con la sua tradizione di sensualità e convivialità, offre un contesto naturalmente propizio.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Le Regole d'Oro del Clubbing</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Non toccare mai senza permesso esplicito",
                    "Accettare il no senza discutere né insistere",
                    "Rispettare la privacy — nessuna foto",
                    "Mantenere la discrezione fuori dal club",
                    "Curare l'igiene personale scrupolosamente",
                    "Rispettare le strutture e il personale",
                  ].map((rule) => (
                    <div key={rule} className="flex items-start gap-3 bg-card/50 border border-border/50 rounded-xl p-3">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span className="text-sm">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Prepararsi per la Prima Serata</h3>
                <p>
                  <strong className="text-foreground">Prenotate in anticipo</strong> — la maggior parte dei club richiede prenotazione. Informatevi sul <strong className="text-foreground">dress code</strong>: elegante, sexy o tematico. All'arrivo: accoglienza, guardaroba, tour degli spazi. Iniziate dagli spazi vestiti per ambientarvi. E ricordate: avete il <strong className="text-foreground">diritto assoluto di dire no</strong> in qualsiasi momento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ EVENTI ═══════════ */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold text-foreground font-display">Eventi e Serate in Italia</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dalle serate a tema ai weekend libertini, dalle feste in villa alle beach party estive: il calendario completo degli eventi in Italia e in Europa su AKOKY.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    { emoji: "🎭", text: "Balli in Maschera e White Party" },
                    { emoji: "🌙", text: "Notti a tema nei migliori club" },
                    { emoji: "🏖️", text: "Beach party estivi in Sardegna e Rimini" },
                    { emoji: "🏰", text: "Feste in villa in Toscana e Puglia" },
                    { emoji: "✈️", text: "Viaggi organizzati e crociere libertine" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 group/item hover:text-foreground transition-colors">
                      <span className="text-lg">{item.emoji}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/it/eventi"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-primary/50 text-primary font-semibold hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                >
                  Consulta il calendario →
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border relative group">
                <img
                  src="/images/soiree-club-libertin.webp"
                  alt="Serata in un club libertino in Italia"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-primary/90 text-primary-foreground px-3 py-1 rounded-full font-semibold">📅 300+ eventi/mese</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ GUIDE ═══════════ */}
        <section className="py-16 px-4 border-t border-border/50">
          <div className="container max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground font-display">Guide per Ben Iniziare</h2>
              <p className="text-muted-foreground mt-2">Tutto quello che serve sapere prima di lanciarsi</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.map((g, i) => (
                <Link
                  key={g.title}
                  to={g.href}
                  className="relative overflow-hidden bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-3xl relative z-10">{g.emoji}</span>
                  <h3 className="text-foreground font-bold mt-3 group-hover:text-primary transition-colors relative z-10">{g.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 relative z-10">{g.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMPARATIVI ═══════════ */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground font-display">Confronti Piattaforme Libertine</h2>
              <p className="text-muted-foreground mt-2">Trova la piattaforma giusta per te</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {comparatifs.map((c) => (
                <Link key={c.label} to={c.href} className={chipClass}>
                  {c.label} <span aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMMUNITY AKOKY ═══════════ */}
        <section className="py-16 px-4 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl border border-border relative group">
                <img
                  src="/images/application-akoky.webp"
                  alt="Applicazione AKOKY"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl font-bold text-foreground font-display">Unisciti alla Community AKOKY</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AKOKY è molto più di un annuario. È una community di coppie e single libertini che condividono esperienze, recensioni verificate e raccomandazioni.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    { emoji: "⭐", text: "Recensioni verificate", href: "/it/recensioni" },
                    { emoji: "🎮", text: "Giochi libertini", href: "/it/giochi" },
                    { emoji: "👑", text: "Spazio VIP esclusivo", href: "/it/vip" },
                    { emoji: "📱", text: "App mobile disponibile", href: "/it/app" },
                    { emoji: "📺", text: "Live streaming", href: "/it/live" },
                  ].map((item) => (
                    <li key={item.text}>
                      <Link to={item.href} className="flex items-center gap-3 hover:text-primary transition-colors">
                        <span className="text-lg">{item.emoji}</span>
                        <span className="text-primary hover:underline font-medium">{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/it/akoky"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    Scopri AKOKY →
                  </Link>
                  <Link
                    to="/it/visione"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:border-primary/50 transition-all duration-300"
                  >
                    La nostra visione →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ BOTTOM LINKS ═══════════ */}
        <section className="py-16 px-4 bg-card/30 border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { href: "/it/attualita-libertina", emoji: "📰", title: "Attualità Libertina", desc: "Le ultime notizie dal mondo libertino" },
                { href: "/it/stampa", emoji: "🗞️", title: "Stampa e Media", desc: "AKOKY nei media italiani e europei" },
                { href: "/it/referral", emoji: "🎁", title: "Programma Referral", desc: "Invita amici e ottieni vantaggi" },
                { href: "/it/contatto", emoji: "💬", title: "Contatto", desc: "Una domanda? Parliamone" },
              ].map((item) => (
                <Link key={item.href} to={item.href} className={cardClass + " text-center"}>
                  <span className="text-3xl block mb-2">{item.emoji}</span>
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA FINAL ═══════════ */}
        <section className="py-20 px-4 relative overflow-hidden border-t border-border/50">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/5 to-primary/8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="container max-w-4xl mx-auto text-center relative">
            <div className="text-5xl mb-6">🇮🇹</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">Vivi il Clubbing Libertino in Italia</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Iscriviti gratuitamente su AKOKY e accedi all'annuario completo dei club, agli eventi e alla community libertina più grande d'Europa.
            </p>
            <a
              href="https://app.akoky.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-10 py-4 text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Inizia Ora — È Gratuito →
            </a>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default ClubbingIt;
