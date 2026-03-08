import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Con quale frequenza viene aggiornata la sezione attualità?", answer: "La sezione attualità di AKOKY viene aggiornata ogni settimana con nuove tendenze, analisi e notizie del settore libertino." },
  { question: "Come contribuire con informazioni?", answer: "Accedi al tuo spazio membro AKOKY e utilizza il modulo di contribuzione editoriale. I contenuti vengono moderati prima della pubblicazione." },
  { question: "Le informazioni sono verificate?", answer: "Sì. La redazione AKOKY verifica ogni informazione prima della pubblicazione. Le fonti sono sempre indicate quando disponibili." },
  { question: "Posso ricevere le notizie via email?", answer: "Iscrivendoti su AKOKY e attivando le notifiche, riceverai settimanalmente le notizie principali della community." },
  { question: "AKOKY è disponibile anche come app mobile?", answer: "Sì, AKOKY è disponibile su iOS e Android con tutte le funzionalità della versione desktop, incluse le notifiche in tempo reale." },
  { question: "Quali sono le città più attive in Italia?", answer: "Milano, Roma, Torino, Bologna, Firenze e Napoli sono le città più attive, con una crescita costante della community in tutto il paese." },
];

const NEWS = [
  { img: "/images/ambiance-sauna-libertin.webp", tag: "Tendenza", title: "Il Wellness Libertino Conquista l'Italia", desc: "Sempre più club integrano spa, saune e jacuzzi. Il confine tra benessere e libertinismo si assottiglia. Nel 2026, il 65% dei nuovi locali include un'area wellness.", link: "/it/saune-libertine" },
  { img: "/images/soiree-club-libertin.webp", tag: "Apertura", title: "Nuovi Club nel Nord Italia", desc: "Milano, Torino e Bologna accolgono nuovi concept di club libertini con standard elevati, design contemporaneo e servizi premium.", link: "/it/club-libertini" },
  { img: "/images/evenement-libertin-europe.webp", tag: "Evento", title: "Festival Libertini Estate 2026", desc: "I grandi eventi dell'estate: Sardegna, Costiera Amalfitana, Lago di Garda. Pool party, serate in villa e weekend esclusivi.", link: "/it/eventi" },
  { img: "/images/application-akoky.webp", tag: "Tech", title: "AKOKY 3.0: Le Novità dell'Anno", desc: "Nuove funzionalità: geolocalizzazione avanzata, AI matching, chat vocale e interfaccia completamente rinnovata.", link: "/it/app" },
  { img: "/images/soiree-couple-libertin.webp", tag: "Cultura", title: "Il Libertinismo Italiano si Reinventa", desc: "Nuove generazioni, nuovi codici. Il libertinismo italiano evolve verso più inclusività, trasparenza e rispetto reciproco.", link: "/it/libertinismo" },
  { img: "/images/apero-libertin-akoky.webp", tag: "Community", title: "Gli Aperitivi AKOKY Sbarcano in Italia", desc: "Dopo il successo in Francia e Spagna, gli aperitivi AKOKY arrivano a Milano, Roma e Firenze. Incontri reali in un contesto rilassato.", link: "/it/eventi" },
];

const AttualitaLibertineIt = () => (
  <>
    <MetaTags title="Attualità Libertine 2026 | Tendenze e Notizie — AKOKY Italia" description="Segui le ultime tendenze del mondo libertino in Italia e in Europa: nuovi club, eventi di rilievo, evoluzioni del settore. Analisi indipendente di AKOKY." canonical="https://akoky.com/it/attualita-libertine" lang="it" ogImage="/images/es-actualidad-cover.webp" />
    <HreflangTags slug="attualita-libertine" />
    <ContentPageLayout lang="it" title="Attualità Libertine 2026 | AKOKY Italia" description="Ultime tendenze e notizie del mondo libertino in Italia." canonical="https://akoky.com/it/attualita-libertine" heroTitle="Attualità e Tendenze Libertine" heroSubtitle="La rassegna editoriale del mondo libertino in Italia: tendenze, analisi e notizie aggiornate ogni settimana dalla redazione AKOKY." heroImage="/images/es-actualidad-cover.webp" breadcrumb={[{ label: "Attualità Libertine" }]} faq={FAQ}>

      {/* ═══════════ CIFRE CHIAVE ═══════════ */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">Il Libertinismo Italiano nel 2026</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "180K+", label: "Membri AKOKY in Italia", icon: "👥" },
              { value: "+42%", label: "Crescita annua", icon: "📈" },
              { value: "85+", label: "Club e saune attivi", icon: "🏛️" },
              { value: "6", label: "Città principali", icon: "🇮🇹" },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-all group">
                <span className="text-3xl block mb-2">{s.icon}</span>
                <p className="text-3xl font-black text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ INTRO ═══════════ */}
      <section className="py-12 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Una Rassegna Editoriale al Servizio della Community</h2>
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>Il team editoriale di AKOKY segue continuamente la scena libertina in Italia e in Europa: aperture di nuove strutture, tendenze della community, evoluzioni normative e analisi del settore. Il nostro obiettivo è offrirvi <strong className="text-foreground">informazioni affidabili, verificate e aggiornate</strong>.</p>
            <p>Con oltre <strong className="text-foreground">180.000 membri in Italia</strong>, AKOKY è diventata la piattaforma di riferimento per chi vuole vivere il libertinismo con consapevolezza, sicurezza e piacere.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ NOTIZIE CON IMMAGINI ═══════════ */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">Notizie in Evidenza</h2>
          {/* Featured large card */}
          <Link to={NEWS[0].link} className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all mb-6">
            <div className="md:flex">
              <div className="md:w-1/2 aspect-[16/9] md:aspect-auto overflow-hidden">
                <img src={NEWS[0].img} alt={NEWS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider mb-3">{NEWS[0].tag}</span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">{NEWS[0].title}</h3>
                <p className="text-muted-foreground leading-relaxed">{NEWS[0].desc}</p>
                <span className="text-primary text-sm font-semibold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Leggi di più →</span>
              </div>
            </div>
          </Link>
          {/* Grid of smaller cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEWS.slice(1).map((n, i) => (
              <Link key={i} to={n.link} className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">{n.tag}</span>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{n.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TENDENZE 2026 ═══════════ */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Tendenze 2026 in Italia</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Le quattro macro-tendenze che stanno ridefinendo il panorama libertino italiano quest'anno.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "📈", title: "Qualità Premium", desc: "I nuovi club puntano su design, servizi completi e selezione all'ingresso. Il mercato si alza di livello, spingendo i locali storici a rinnovarsi.", pct: 85 },
              { icon: "🧖", title: "Benessere Olistico", desc: "Saune, hammam, jacuzzi e massaggi diventano parte integrante dell'esperienza. Il wellness libertino cresce del 40% in un anno.", pct: 72 },
              { icon: "💻", title: "Digitalizzazione Totale", desc: "Prenotazione online, profili verificati AKOKY, check-in digitale. I club più innovativi eliminano le code e garantiscono discrezione.", pct: 90 },
              { icon: "🏖️", title: "Esperienze Immersive", desc: "Serate in ville, yacht party, weekend in agriturismi. Il libertinismo si reinventa fuori dai club tradizionali.", pct: 65 },
            ].map((t) => (
              <div key={t.title} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{t.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{t.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{t.desc}</p>
                    {/* Progress bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${t.pct}%` }} />
                      </div>
                      <span className="text-xs font-bold text-primary">{t.pct}%</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1">Adozione stimata tra i club italiani</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MAPPA REGIONALE ═══════════ */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Le Tendenze per Regione</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Ogni regione italiana ha la sua identità libertina. Ecco cosa succede nelle zone più attive.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { region: "Lombardia", city: "Milano", emoji: "🏙️", trend: "Club d'élite, moda & design", growth: "+55%", href: "/it/club-libertini-milano" },
              { region: "Lazio", city: "Roma", emoji: "🏛️", trend: "Scene underground, cultura & storia", growth: "+38%", href: "/it/club-libertini-roma" },
              { region: "Piemonte", city: "Torino", emoji: "🏔️", trend: "Saune premium, discrezione", growth: "+30%", href: "/it/club-libertini-torino" },
              { region: "Emilia-Romagna", city: "Bologna", emoji: "🎓", trend: "Convivialità, gastronomia & club", growth: "+45%", href: "/it/club-libertini-bologna" },
              { region: "Toscana", city: "Firenze", emoji: "🎨", trend: "Ville nel Chianti, esperienze d'élite", growth: "+35%", href: "/it/club-libertini-firenze" },
              { region: "Campania", city: "Napoli", emoji: "🌋", trend: "Passione mediterranea, eventi estivi", growth: "+50%", href: "/it/club-libertini-napoli" },
            ].map((r) => (
              <Link key={r.region} to={r.href} className="group block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{r.emoji}</span>
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full">{r.growth}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{r.region}</h3>
                <p className="text-sm text-muted-foreground mt-1">{r.city} — {r.trend}</p>
                <span className="text-primary text-xs font-semibold mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Esplora →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERIA EVENTI ═══════════ */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Eventi in Evidenza</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">Ogni mese, la redazione seleziona gli <Link to="/it/eventi" className="text-primary hover:underline">eventi più attesi</Link> della scena libertina italiana.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/soirreeparis.webp", alt: "Serata libertina esclusiva" },
              { src: "/images/soiree-libertine-plage.webp", alt: "Serata in spiaggia" },
              { src: "/images/apero-libertin-akoky.webp", alt: "Aperitivo AKOKY" },
              { src: "/images/soiree-couple-libertin.webp", alt: "Serata di coppia" },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-border group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { src: "/images/apero-bruxelle.webp", alt: "Aperitivo libertino" },
              { src: "/images/evenement-libertin-espagne.webp", alt: "Evento europeo" },
              { src: "/images/soiree-belgique.webp", alt: "Serata internazionale" },
            ].map((img, i) => (
              <div key={i} className="aspect-[16/9] rounded-xl overflow-hidden border border-border group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">Cronologia del Libertinismo in Italia</h2>
          <div className="space-y-0 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            {[
              { year: "2018", text: "Prime comunità libertine online italiane su piattaforme internazionali." },
              { year: "2020", text: "Boom digitale: il 70% delle nuove iscrizioni avviene da mobile." },
              { year: "2022", text: "AKOKY sbarca in Italia con versione localizzata e contenuti dedicati." },
              { year: "2023", text: "Apertura di 12 nuovi club e saune nel Nord Italia." },
              { year: "2024", text: "Primi aperitivi AKOKY a Milano e Roma. Community +100K." },
              { year: "2025", text: "Espansione al Centro-Sud: Firenze, Napoli, Bologna entrano nella rete." },
              { year: "2026", text: "180K+ membri. L'Italia diventa il 3° mercato europeo di AKOKY." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 pb-8 relative">
                <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shrink-0 z-10">
                  <span className="text-xs font-black text-primary">{item.year}</span>
                </div>
                <p className="text-muted-foreground pt-3 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CONTRIBUIRE ═══════════ */}
      <section className="py-12 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Contribuisci all'Attualità</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Hai informazioni su una nuova struttura, un evento di rilievo o una tendenza emergente? <Link to="/it/contatto" className="text-primary hover:underline">Condividila con la community</Link> tramite il tuo spazio membro AKOKY. Ogni contributo viene verificato dalla redazione prima della pubblicazione.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "📝", title: "Segnala un Club", desc: "Nuova apertura o cambiamento? Facci sapere." },
              { icon: "📸", title: "Invia Foto", desc: "Immagini verificate per arricchire le schede." },
              { icon: "⭐", title: "Lascia una Recensione", desc: "Condividi la tua esperienza con la community." },
            ].map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/40 transition-all">
                <span className="text-3xl block mb-2">{c.icon}</span>
                <h3 className="font-bold text-foreground text-sm mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Rimani Aggiornato</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">Iscriviti gratuitamente su AKOKY e ricevi le ultime notizie, tendenze e inviti esclusivi della community libertina italiana.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-primary-foreground font-bold text-lg hover:scale-105 transition-all">Iscriviti Gratuitamente →</a>
            <Link to="/it/app" className="inline-block rounded-full bg-card border border-border px-8 py-4 text-foreground font-bold text-lg hover:border-primary transition-all">Scarica l'App →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ MAILLAGE ═══════════ */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Scopri Anche</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Il calendario degli eventi più attesi." },
              { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Annuario completo con schede verificate." },
              { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo", desc: "Evoluzione delle pratiche e della cultura." },
              { href: "/it/saune-libertine", icon: "🧖", title: "Saune Libertine", desc: "Wellness e piacere in tutta Italia." },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="group block rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg transition-all text-center">
                <span className="text-3xl mb-3 block">{l.icon}</span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">{l.title}</h3>
                <p className="text-muted-foreground text-xs">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AttualitaLibertineIt;
