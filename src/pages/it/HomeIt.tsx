import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import LatestBlogSection from "@/components/blog/LatestBlogSection";

const EXPLORE_CARDS = [
  { href: "/it/clubbing", icon: "🏛️", title: "Club partner", desc: "Scopri locali selezionati in Italia e in Europa, con schede dettagliate, recensioni verificate e informazioni pratiche.", cta: "Scopri i club →" },
  { href: "/it/eventi", icon: "📅", title: "Eventi e serate", desc: "Accedi a eventi privati, serate a tema, weekend ed incontri organizzati da partner di fiducia in tutta Italia.", cta: "Scopri gli eventi →" },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come iniziare", desc: "Guide, consigli e riferimenti per capire i codici, le pratiche e le consuetudini degli incontri tra adulti moderni.", cta: "Accedi alle guide →" },
];

const UNIVERS_CARDS = [
  { href: "https://legal.akoky.com/confidentialite", icon: "🎭", title: "Riservatezza e Dati", desc: "I tuoi dati personali sono protetti da protocolli di sicurezza avanzati, ospitati in Europa e mai venduti a terzi.", external: true },
  { href: "https://legal.akoky.com/securite", icon: "🛡️", title: "Sicurezza e Discrezione", desc: "Protezione avanzata dei dati e profili verificati per un'esperienza serena e riservata.", external: true },
  { href: "https://legal.akoky.com/charte", icon: "🤝", title: "Rispetto e Benevolenza", desc: "Una community fondata sul consenso, il rispetto reciproco e un'etica chiara.", external: true },
];

const PRESSE_ITEMS = [
  { icon: "📰", title: "Comunicati ufficiali", desc: "Comunicati stampa, presentazioni del progetto e visione editoriale di AKOKY." },
  { icon: "🎙️", title: "Media e partner", desc: "Stampa web, blog specializzati, media lifestyle e comunitari per adulti." },
  { icon: "📊", title: "Analisi e confronti", desc: "Studi, classifiche e comparazioni di piattaforme comunitarie e servizi di incontri tra adulti." },
  { icon: "📚", title: "Risorse professionali", desc: "Loghi, materiali visivi ufficiali e supporti di comunicazione per media e partner." },
  { icon: "🤝", title: "Collaborazioni e affiliazioni", desc: "Club partner, organizzatori di eventi privati e attori europei del settore." },
  { icon: "🌍", title: "Portata europea", desc: "Presenza attiva in Italia, Francia, Spagna, Belgio e sviluppo progressivo a livello internazionale." },
];

const CONFIANCE_CARDS = [
  { href: "/it/faq", icon: "❓", title: "FAQ AKOKY", desc: "Tutte le risposte alle domande frequenti sul funzionamento, i profili, gli eventi e l'utilizzo di AKOKY." },
  { href: "/it/lessico-libertino", icon: "📘", title: "Lessico e Codici", desc: "Scopri i termini, le pratiche e i codici degli incontri tra adulti, spiegati in modo semplice e senza giudizi." },
  { href: "/it/libertinismo", icon: "🔥", title: "Gli Incontri Oggi", desc: "Scopri cosa comprendono le pratiche moderne, i loro codici e i diversi modi per esplorarle liberamente." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guide e consigli per scoprire questo universo al tuo ritmo, da solo/a o in coppia, in un contesto rispettoso." },
];

const EVENT_CARDS = [
  { title: "Serate Esclusive", desc: "Eventi privati nei luoghi più prestigiosi d'Italia.", location: "Roma", count: "80+", img: "/images/event/event1.webp", alt: "Serate libertine esclusive AKOKY Roma" },
  { title: "Weekend Tematici", desc: "Fughe indimenticabili con la community in tutta Italia.", location: "Costiera Amalfitana", count: "60+", img: "/images/event/event2.webp", alt: "Weekend libertini AKOKY Costiera Amalfitana" },
  { title: "Incontri Intimi", desc: "Serate più intime per conoscersi meglio in un'atmosfera rilassata.", location: "Milano", count: "40+", img: "/images/event/event3.webp", alt: "Incontri intimi e serate private AKOKY Milano" },
];

const QUICK_ACCESS = [
  { href: "/it/clubbing", icon: "👥", title: "Club partner", desc: "Scopri locali selezionati e luoghi di incontro in Italia." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e serate", desc: "Accedi a eventi privati e incontri organizzati vicino a te." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Accedi a privilegi esclusivi e a un'esperienza premium." },
  { href: "/it/blog", icon: "📖", title: "Blog e consigli", desc: "Guide, analisi e attualità sugli incontri tra adulti in Italia." },
];

const STATS = [
  { icon: "👥", value: "1,5M Membri Attivi", desc: "Profili verificati, coppie e single che condividono una visione rispettosa e consapevole degli incontri tra adulti." },
  { icon: "🏛️", value: "120 Club Partner", desc: "Locali selezionati in tutta Europa, con recensioni e valutazioni verificate dalla community." },
  { icon: "📅", value: "300 Eventi / Mese", desc: "Serate e incontri esclusivi organizzati da club e membri della community." },
];

const WHY_CARDS = [
  { icon: "🔒", title: "Sicurezza e Discrezione", desc: "Verifica dell'identità, moderazione continua e rispetto assoluto della tua vita privata. I tuoi dati non vengono mai condivisi." },
  { icon: "💎", title: "Qualità Premium", desc: "App mobile iOS e Android, funzionalità avanzate e accesso a eventi esclusivi in tutta Italia." },
  { icon: "🤝", title: "Community Rispettosa", desc: "Codice etico chiaro, consenso al centro degli scambi e accompagnamento dei nuovi membri." },
  { icon: "🌍", title: "Rete Europea", desc: "Presenza attiva in Italia, Francia, Spagna, Belgio, Germania e Portogallo per incontri su scala europea." },
];

const FAQ_ITEMS = [
  { q: "Cosa distingue AKOKY dalle altre piattaforme di incontri tra adulti?", a: "AKOKY riunisce una community di oltre 1,5 milioni di membri, un directory di club partner verificati, più di 300 eventi organizzati ogni mese, uno spazio di scambio riservato ai membri e un'app mobile completa. La piattaforma pone l'etica e il consenso al centro del suo funzionamento." },
  { q: "L'iscrizione su AKOKY è gratuita?", a: "Sì, l'iscrizione è completamente gratuita. Puoi creare il tuo profilo, esplorare la piattaforma, consultare i club partner, leggere le recensioni dei membri e accedere a una selezione di eventi senza costi. L'abbonamento VIP offre funzionalità avanzate e vantaggi esclusivi." },
  { q: "AKOKY è adatto ai principianti?", a: "Assolutamente. AKOKY accompagna i nuovi membri con una guida per iniziare, un lessico esplicativo, una FAQ dettagliata e numerose risorse didattiche. La community è accogliente e attenta al rispetto dei limiti di ciascuno." },
  { q: "Come trovare club partner vicino a me in Italia?", a: "AKOKY mette a disposizione un directory di club partner con oltre 120 locali in Italia, Francia e in Europa. Puoi filtrare per città, tipo di locale (club, sauna, locale privato) e consultare recensioni verificate. L'app mobile consente la geolocalizzazione." },
  { q: "Gli eventi proposti su AKOKY sono sicuri?", a: "Tutti gli eventi referenziati su AKOKY rispettano un codice etico rigoroso. Il consenso esplicito, la discrezione, il rispetto dei limiti e una moderazione attiva fanno parte degli impegni fondamentali della piattaforma e dei suoi partner." },
];

const COMPARATIF_LINKS = [
  { href: "/it/akoky-vs-wyylde", label: "vs Wyylde" },
  { href: "/it/miglior-sito-libertino", label: "Miglior sito libertino" },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AKOKY",
    url: "https://akoky.com",
    logo: "/images/logo-akoky.webp",
    description: "Piattaforma comunitaria libertina premium in Europa",
    foundingDate: "2014",
    contactPoint: { "@type": "ContactPoint", contactType: "Customer Service", email: "contact@akoky.com", availableLanguage: ["fr", "en", "es", "de", "it", "pt"] },
    sameAs: ["https://www.facebook.com/akokyofficial", "https://www.instagram.com/akoky_official", "https://twitter.com/akoky_official"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AKOKY Italia",
    url: "https://akoky.com/it",
    inLanguage: "it",
    potentialAction: { "@type": "SearchAction", target: "https://akoky.com/search?q={search_term_string}", "query-input": "required name=search_term_string" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

const HomeIt = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <MetaTags
        title="AKOKY Italia – Piattaforma Libertina Premium | Italia ed Europa"
        description="AKOKY: 1,5M di membri, club libertini premium, eventi esclusivi. La piattaforma libertina di riferimento in Italia e in Europa. Iscrizione gratuita."
        canonical="https://akoky.com/it"
        lang="it"
        ogImage="https://akoky.com/images/hero-it-desktop.webp"
      />
      <HreflangTags />
      <SchemaOrg schema={schemas} />

      <Header lang="it" />

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative min-h-[90vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden pt-[70px]">
          <div 
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: "url('/images/hero-it-desktop.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%)" }} />
          <div className="absolute left-0 right-0 bottom-0 h-[180px] z-[2] pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, hsl(240 20% 4% / 0.4) 45%, hsl(240 20% 4% / 0.8) 75%, hsl(240 20% 4%) 100%)" }} />

          <div className="relative z-[3] max-w-[900px] px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span>🇮🇹</span><span>Community Premium Italia</span>
            </div>
            <h1 className="text-gradient-gold text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider leading-tight mb-4">
              Incontri tra adulti &amp; esperienze esclusive in Italia
            </h1>
            <h2 className="text-lg md:text-xl font-normal text-white/95 mb-8 max-w-[800px] mx-auto">
              La community premium per incontrare persone di mentalità aperta, scoprire club e partecipare a eventi per adulti in tutta Italia — da Roma a Milano, dalla Costiera Amalfitana alla Toscana.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.akoky.com/register" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                UNISCITI ALLA COMMUNITY
              </a>
              <Link to="/it/clubbing" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                ESPLORA I CLUB
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SEO INTRO ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container max-w-[900px]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">La Piattaforma Libertina di Riferimento in Italia</h2>
              <p className="text-base md:text-lg leading-8 text-muted-foreground">
                AKOKY si afferma come <strong className="text-foreground">il social network libertino premium</strong> con oltre 1,5 milioni di membri attivi.
                A differenza delle piattaforme generaliste, AKOKY offre un'esperienza completa dedicata al{" "}
                <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo moderno</Link>:
                directory dei <Link to="/it/clubbing" className="text-primary hover:underline">migliori club libertini</Link> d'Europa,{" "}
                <Link to="/it/eventi" className="text-primary hover:underline">eventi esclusivi</Link> mensili,{" "}
                <Link to="/it/live" className="text-primary hover:underline">live libertini</Link> in diretta e{" "}
                <Link to="/it/app" className="text-primary hover:underline">app mobile</Link> con geolocalizzazione.
              </p>
              <p className="text-base md:text-lg leading-8 text-muted-foreground mt-4">
                Che tu sia <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">principiante nel libertinismo</Link>{" "}
                o membro esperto, AKOKY ti accompagna con <Link to="/it/faq" className="text-primary hover:underline">risorse complete</Link>,
                un <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link> dettagliato e una{" "}
                <Link to="/it/visione" className="text-primary hover:underline">carta etica</Link> che pone il consenso al centro di ogni interazione.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ ESPLORARE L'UNIVERSO ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Esplora l'universo AKOKY</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Una piattaforma comunitaria per adulti completa per scoprire, incontrare e vivere esperienze esclusive, al tuo ritmo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EXPLORE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="group bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl mb-5">{card.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  <span className="text-primary font-bold text-sm mt-3 inline-block">{card.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ L'APP AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">L'APP AKOKY</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Scarica <Link to="/it/app" className="text-primary">l'app AKOKY</Link>, disponibile su iOS e Android.
                  Approfitta di una messaggistica sicura, della geolocalizzazione dei{" "}
                  <Link to="/it/clubbing" className="text-primary">club partner</Link>, delle notifiche per gli{" "}
                  <Link to="/it/eventi" className="text-primary">eventi privati</Link> e di uno spazio di scambio riservato ai membri.
                </p>
                <ul className="flex flex-col gap-6 mb-8">
                  {[
                    { icon: "💬", label: "Messaggistica istantanea sicura" },
                    { icon: "📍", label: "Geolocalizzazione dei club" },
                    { icon: "🔔", label: "Notifiche in tempo reale" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full icon-box-primary flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                      <span className="font-semibold">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/it/app" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  SCARICA L'APP
                </Link>
              </div>
              <div className="text-center">
                <img loading="lazy" src="/images/tel.webp" alt="App AKOKY mobile Italia" width="380" height="760" className="w-[380px] mx-auto rounded-3xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LIVE / SCAMBI CONTINUI ═══════════ */}
        <section className="py-20" style={{ background: "linear-gradient(rgb(15, 23, 42), rgb(0, 0, 0))", color: "white" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-pulse">IN DIRETTA</div>
                    <img loading="lazy" src="/images/live-akoky.webp" alt="AKOKY Live Italia" width="600" height="400" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Serata Esclusiva Roma</h4>
                      <p className="text-xs text-muted-foreground">In diretta dal Club Roma</p>
                    </div>
                    <div className="text-green-400 font-bold">+420 👀</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full mb-4 font-semibold text-xs">ACCESSO MEMBRI CONTINUO</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Scambi continui tra membri</h2>
                <p className="text-lg opacity-80 mb-8">
                  Uno spazio accessibile in ogni momento per scambiare liberamente, al tuo ritmo, all'interno di una community riservata ai membri AKOKY.
                </p>
                <Link to="/it/live" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/30">
                  Scopri lo spazio di scambio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LA NOSTRA VISIONE ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block mb-4 font-bold text-primary tracking-widest text-sm">LA NOSTRA VISIONE</span>
              <h2 className="text-3xl md:text-4xl font-black">AKOKY, UNA COMMUNITY ADULTA A TUTTI GLI EFFETTI</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mt-6">
                AKOKY nasce da una convinzione semplice: ripensare gli incontri tra adulti attraverso una piattaforma moderna, sicura, umana e rispettosa, libera da cliché e dalle derive del passato.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🌱 Un'evoluzione naturale del libertinismo</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nato dall'esperienza AcoquinementVotre, AKOKY si inserisce nella continuità di anni di osservazione del mondo libertino in Italia, Francia, Spagna e in Europa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dove molte piattaforme si sono fermate, AKOKY propone un nuovo approccio: più fluido, più moderno e centrato sull'esperienza reale dei membri.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-4">🔗 Una piattaforma pensata per durare</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AKOKY non è un semplice servizio di incontri. È un'architettura completa che riunisce scambi tra membri, eventi privati, contenuti editoriali e app dedicate, all'interno di un unico ecosistema.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ogni funzionalità è progettata per evolversi con la community, senza dipendere da mode o algoritmi instabili.
                </p>
              </div>
            </div>
            <div className="text-center mt-16">
              <p className="text-xl font-semibold max-w-[900px] mx-auto">
                AKOKY è una visione a lungo termine del libertinismo:<br />
                <span className="text-primary">più responsabile, più libero, più umano.</span>
              </p>
            </div>
            <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
              <Link to="/it/visione" className="px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                Scopri la visione AKOKY
              </Link>
              <Link to="/it/libertinismo" className="px-8 py-4 rounded-full font-bold bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:-translate-y-0.5 transition-all">
                Capire il libertinismo moderno
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ L'UNIVERSO AKOKY (Trust) ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black">L'UNIVERSO AKOKY</h2>
              <p className="text-muted-foreground mt-4">Una piattaforma completa e sicura per incontrare, scambiare e condividere all'interno di una community adulta.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {UNIVERS_CARDS.map((card) => (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-2xl p-8 card-hover-glow relative block">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ STAMPA E MEDIA ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-primary font-bold tracking-widest mb-4 text-sm">STAMPA &amp; MEDIA</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  AKOKY, UN ATTORE OSSERVATO DEGLI INCONTRI ADULTI MODERNI
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AKOKY suscita l'interesse dei media, degli osservatori digitali e degli analisti del settore per il suo approccio innovativo, sicuro e decisamente moderno.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Piattaforma comunitaria, eventi privati, contenuti editoriali e app dedicate: AKOKY sviluppa un ecosistema completo, regolarmente analizzato e diffuso nella stampa specializzata e generalista.
                </p>
                <Link to="/it/stampa" className="inline-block px-8 py-4 rounded-full font-bold btn-gradient-primary text-primary-foreground hover:-translate-y-0.5 transition-all">
                  Vedi le pubblicazioni e i dossier stampa
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRESSE_ITEMS.map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ LA FIDUCIA AKOKY ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">LA FIDUCIA AKOKY</h2>
              <p className="text-muted-foreground">Capire, imparare ed esplorare gli incontri tra adulti in tutta serenità.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONFIANCE_CARDS.map((card) => (
                <Link key={card.href} to={card.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow relative">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PROSSIMI EVENTI ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4 font-semibold text-xs">🇮🇹 PROSSIMI EVENTI</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">COSA SUCCEDE SU AKOKY ITALIA</h2>
              <p className="text-muted-foreground">Unisciti a eventi esclusivi e incontra persone eccezionali in Italia.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EVENT_CARDS.map((event, i) => (
                <Link key={i} to="/it/eventi" className="group bg-card border border-border rounded-2xl overflow-hidden card-hover-glow">
                  <div className="h-[200px] overflow-hidden">
                    <img loading="lazy" src={event.img} alt={event.alt} width="400" height="200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{event.desc}</p>
                    <div className="flex justify-between text-xs text-primary font-bold">
                      <span>📍 {event.location}</span>
                      <span>👥 {event.count}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COME FUNZIONA ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">COME FUNZIONA</h2>
              <p className="text-muted-foreground">Unirsi ad AKOKY è semplice e veloce.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Iscrizione", desc: <>Crea il tuo profilo gratuitamente in 2 minuti. Aggiungi le tue preferenze, foto e scopri <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">i primi passi</Link> in questo universo.</> },
                { step: "2", title: "Esplorazione", desc: <>Naviga tra i profili verificati, consulta il nostro <Link to="/it/clubbing" className="text-primary hover:underline">directory dei club</Link> e esplora i <Link to="/it/eventi" className="text-primary hover:underline">300 eventi mensili</Link>.</> },
                { step: "3", title: "Incontro", desc: <>Prenota i tuoi posti per le <Link to="/it/eventi" className="text-primary hover:underline">serate esclusive</Link>, scambia messaggi e vivi esperienze nel rispetto del <Link to="/it/visione" className="text-primary hover:underline">consenso</Link>.</> },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full icon-box-primary flex items-center justify-center text-xl font-bold mx-auto mb-6 text-primary-foreground">{item.step}</div>
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ACCESSO RAPIDO ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">ACCESSO RAPIDO</h2>
              <p className="text-muted-foreground">Esplora l'universo AKOKY con un solo gesto</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {QUICK_ACCESS.map((item) => (
                <Link key={item.href} to={item.href} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ UNISCITI A 1,5M ═══════════ */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">UNISCITI A 1,5M DI MEMBRI</h2>
              <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                Una piattaforma comunitaria per adulti premium in Europa. Crea il tuo profilo, esplora club partner verificati e partecipa a eventi esclusivi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {STATS.map((stat) => (
                <div key={stat.value} className="bg-card border border-border rounded-2xl p-8 text-center card-hover-glow">
                  <div className="text-3xl mx-auto mb-6">{stat.icon}</div>
                  <h3 className="font-bold text-lg mb-4">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PERCHÉ SCEGLIERE ═══════════ */}
        <section className="py-20 bg-mid">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">PERCHÉ SCEGLIERE AKOKY?</h2>
              <p className="text-muted-foreground text-lg">L'eccellenza di un ecosistema comunitario per adulti in Europa.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WHY_CARDS.map((card) => (
                <div key={card.title} className="bg-card border border-border rounded-2xl p-8 card-hover-glow">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-3">
                    <span className="text-3xl">{card.icon}</span> {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-7">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LatestBlogSection lang="it" />

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-20">
          <div className="container max-w-[900px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Domande Frequenti</h2>
              <p className="text-muted-foreground">Tutto ciò che devi sapere su AKOKY</p>
            </div>
            <div className="flex flex-col gap-6">
              {FAQ_ITEMS.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 cursor-pointer card-hover-glow" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-base md:text-lg">{faq.q}</h3>
                    <span className={`text-primary transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                  </div>
                  {openFaq === i && <p className="text-muted-foreground mt-4 leading-7">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COMPARATIVA ═══════════ */}
        <section className="py-12 text-center">
          <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
            Stai confrontando AKOKY con altre piattaforme?{" "}
            <Link to="/it/akoky-vs-wyylde" className="text-primary font-semibold hover:underline">
              Scopri la nostra comparativa AKOKY vs Wyylde
            </Link>.
          </p>
          <div className="max-w-[720px] mx-auto bg-primary/5 border border-primary/20 rounded-2xl px-8 py-8">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Guida comparativa 2026</p>
            <h2 className="text-xl font-extrabold mb-3">Qual è il miglior sito libertino in Italia?</h2>
            <p className="text-sm text-muted-foreground leading-7 mb-6">
              Wyylde, NousLib, Gleese, JM&nbsp;Libertins, EntreCoquins, SexyLib — tutti i siti libertini analizzati e confrontati in un'unica guida: funzionalità, prezzi, recensioni reali e profili falsi.
            </p>
            <Link to="/it/miglior-sito-libertino" className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-gradient-primary text-primary-foreground font-extrabold text-sm hover:opacity-85 transition-opacity">
              🏆 Vedi la classifica completa 2026
            </Link>
            <div className="flex flex-wrap gap-2 justify-center mt-5">
              {COMPARATIF_LINKS.map((c) => (
                <Link key={c.href} to={c.href} className="text-xs text-muted-foreground px-3 py-1.5 border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang="it" />
    </>
  );
};

export default HomeIt;
