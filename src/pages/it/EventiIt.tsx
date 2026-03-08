import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Come partecipare al mio primo evento AKOKY?", answer: "Crea il tuo profilo gratuito su Akoky.com, esplora gli eventi imminenti nella tua regione, leggi attentamente le descrizioni e i requisiti, e prenota online. I principianti sono sempre benvenuti! Ti consigliamo di iniziare con un aperitivo libertino per familiarizzare con la community in un'atmosfera rilassata. Consulta la nostra guida completa per iniziare nel libertinismo." },
  { question: "Gli eventi sono riservati alle coppie?", answer: "No, AKOKY organizza eventi per tutti i profili: coppie (etero, omo, bi), donne single, uomini single (secondo quote per mantenere l'equilibrio), e gruppi di amici. Ogni scheda evento precisa chiaramente i profili accettati. Le donne sole sono generalmente benvenute senza restrizioni, mentre gli uomini soli passano attraverso una selezione per garantire la qualità dell'esperienza per tutti." },
  { question: "Qual è la tariffa media di un evento?", answer: "Le tariffe variano secondo il tipo di evento: 20-40€ per serate in club, 15-25€ per aperitivi libertini, 80-150€ per serate private tematiche, e 200-500€ per weekend esclusivi in villa o resort. I membri VIP beneficiano di sconti fino al 30% su tutti gli eventi." },
  { question: "Come cancellare una prenotazione?", answer: "La cancellazione è gratuita fino a 48h prima dell'inizio dell'evento. Puoi cancellare direttamente dal tuo spazio membro sul sito web o tramite l'app mobile Akoky. Oltre le 48h, possono applicarsi spese di cancellazione secondo la politica specifica dell'organizzatore." },
  { question: "Gli eventi AKOKY rispettano il consenso?", answer: "Assolutamente. Il consenso è il pilastro della nostra carta etica. Tutti i nostri eventi seguono protocolli rigorosi: personale formato specificamente nel rispetto dei limiti, sistema di safe words riconosciuto, spazi di ritiro disponibili, presenza di un team di moderazione attento. Ogni comportamento inappropriato comporta un'esclusione immediata e definitiva dalla piattaforma." },
  { question: "Dove si svolgono gli eventi Akoky?", answer: "I nostri eventi si svolgono nei club libertini più rinomati e negli stabilimenti accuratamente selezionati d'Italia e d'Europa. Per garantire la discrezione di tutti, gli indirizzi esatti vengono comunicati solo ai partecipanti iscritti e verificati, generalmente 48h prima dell'evento." },
  { question: "Con quale frequenza si organizzano eventi Akoky?", answer: "Akoky organizza oltre 300 eventi al mese in tutta Europa, incluse serate in club più volte a settimana nelle grandi città, aperitivi libertini regolari, eventi tematici mensili e weekend esclusivi. Il nostro calendario viene aggiornato costantemente." },
  { question: "C'è un dress code per gli eventi?", answer: "Sì, ogni evento ha esigenze di abbigliamento specifiche indicate nella sua descrizione. In generale: abito elegante per le serate in club (completo/abito da cocktail), sexy-chic per gli aperitivi, codice specifico per eventi tematici (lingerie, latex, mascherata, ecc.). Il rispetto del dress code è obbligatorio." },
  { question: "Si può andare da soli/e a un evento Akoky?", answer: "Sì, i single sono benvenuti secondo le quote stabilite per ogni evento. Le donne sole sono generalmente accettate senza restrizioni e spesso beneficiano di tariffe preferenziali. Gli uomini soli possono partecipare a certi eventi specifici con una selezione preventiva." },
  { question: "Come garantite la discrezione dei partecipanti?", answer: "La discrezione è la nostra priorità assoluta. Le nostre misure includono: verifica dell'identità rigorosa alla registrazione, validazione manuale di tutte le foto del profilo, divieto formale di scattare foto o video durante gli eventi, uso di pseudonimi raccomandato e politica di riservatezza rafforzata." },
];

const IT_CARDS = [
  {
    img: "/images/soirreeparis.webp",
    alt: "Serata libertina Akoky in club a Milano",
    title: "Serate Libertine nei Club di Milano",
    text: "Milano ospita gli eventi libertini Akoky più sofisticati e all'avanguardia. La capitale della moda, celebre per la sua apertura mentale, offre un contesto eccezionale per le nostre serate libertine dove si fondono design, cultura e sensualità. Ogni serata a Milano è un'esperienza unica nei migliori club della città.",
  },
  {
    img: "/images/apero-libertin.webp",
    alt: "Aperitivo libertino Akoky a Roma",
    title: "Aperitivi Libertini a Roma",
    text: "Gli aperitivi libertini Akoky a Roma sono l'occasione perfetta per scoprire la community in un'atmosfera rilassata. Questi eventi nei migliori locali privati della Capitale permettono di conoscersi prima di partecipare alle serate libertine più intime. L'atmosfera romana aggiunge un fascino unico.",
  },
  {
    img: "/images/evenement-libertin-europe.webp",
    alt: "Weekend libertino Akoky in villa privata in Italia",
    title: "Weekend Libertini Esclusivi",
    text: "I weekend libertini Akoky in ville privatizzate della Costiera Amalfitana, della Sardegna o della Toscana offrono un'immersione totale nell'arte di vivere libertino. Questi eventi d'eccezione riuniscono i membri in cornici suntuose per momenti indimenticabili lontano dalla routine.",
  },
];

const ROMA_CARDS = [
  {
    img: "/images/apero-bruxelle.webp",
    alt: "Serata libertina Akoky in club a Roma",
    title: "Serate Club Roma",
    text: "Roma, Città Eterna e capitale della passione, ospita le nostre serate libertine più suggestive. I club partner di Akoky a Roma propongono spazi eleganti in dimore storiche dove la tradizione romana si fonde con l'innovazione Akoky. Dall'Appia al Testaccio, ogni quartiere offre un'esperienza diversa.",
  },
  {
    img: "/images/soiree-couple-libertin.webp",
    alt: "Aperitivo libertino Akoky a Roma",
    title: "Aperitivi Libertini Internazionali",
    text: "Gli aperitivi libertini Akoky a Roma riuniscono una community multicultural e aperta. Questi eventi sono l'occasione per incontrare membri venuti da tutta Europa, nello spirito di apertura che caratterizza la scena libertina romana e il suo fascino mediterraneo.",
  },
];

const COSTA_CARDS = [
  {
    img: "/images/soiree-libertine-plage.webp",
    alt: "Serata libertina Akoky in Costiera Amalfitana",
    title: "Eventi Fronte Mare",
    text: "Le serate libertine Akoky sulla costa italiana celebrano la bellezza del Mediterraneo. Dagli incontri al tramonto alle serate in spiagge privatizzate, dalla Costiera Amalfitana alla Sardegna, questi eventi offrono un'esperienza unica dove natura e libertinismo si incontrano.",
  },
  {
    img: "/images/evenement-libertin-espagne.webp",
    alt: "Evento libertino Akoky in Sardegna",
    title: "Sardegna & Isole Italiane",
    text: "La Sardegna, la Sicilia e le isole italiane ospitano eventi Akoky unici. Ville private con vista mare, pool party esclusive e serate sotto le stelle. Gli eventi nelle isole sono tra i più richiesti del calendario Akoky, combinando lusso naturale e libertà totale.",
  },
];

const BENEFITS = [
  { icon: "✨", title: "Atmosfera Premium", text: "Ogni evento libertino Akoky si svolge in luoghi d'eccezione. Le nostre serate si celebrano nei club più rinomati e negli spazi più eleganti d'Italia. L'atmosfera raffinata dei nostri eventi garantisce un'esperienza memorabile ad ogni partecipazione." },
  { icon: "🛡️", title: "Sicurezza e Rispetto", text: "La sicurezza dei nostri membri è la nostra priorità assoluta. I nostri eventi libertini applicano protocolli rigorosi di rispetto e consenso. Ogni serata Akoky è supervisionata da un team attento che veglia sul benessere di tutti i partecipanti." },
  { icon: "🎭", title: "Libertà Autentica", text: "Le serate libertine Akoky celebrano la libertà di essere sé stessi. I nostri eventi offrono uno spazio dove ogni persona può esplorare i propri desideri con totale serenità. La filosofia Akoky promuove l'autenticità e il rispetto delle scelte di ciascuno." },
  { icon: "🌍", title: "Community Internazionale", text: "Unirsi agli eventi libertini Akoky significa integrarsi nella più grande community libertina d'Europa. Le nostre serate riuniscono membri da Italia, Francia, Spagna, Germania e oltre. Lo spirito comunitario crea legami autentici e duraturi." },
];

const GALLERY = [
  { img: "/images/apero-libertin.webp", label: "Incontro libertino Akoky a Milano" },
  { img: "/images/soiree-libertine-plage.webp", label: "Serata libertina Akoky costa italiana" },
  { img: "/images/cap-agde-libertin.webp", label: "Evento libertino Akoky Sardegna" },
  { img: "/images/soiree-couple-libertin.webp", label: "Serata libertina coppie Italia" },
  { img: "/images/apero-libertin-akoky.webp", label: "Incontro libertino Akoky a Roma" },
  { img: "/images/jeux-libertin.webp", label: "Giochi libertini esclusivi Akoky" },
  { img: "/images/soiree-club-libertin.webp", label: "Serata Akoky in club libertino Italia" },
  { img: "/images/evenement-libertin-espagne.webp", label: "Evento libertino Akoky in Italia" },
  { img: "/images/evenement-libertin-europe.webp", label: "Evento libertino Akoky in Europa" },
  { img: "/images/soirreeparis.webp", label: "Evento libertino Akoky a Milano" },
];

const CTA_LINKS = [
  { to: "/it/libertinismo", label: "Libertinismo" },
  { to: "/it/club-libertini", label: "Club Libertini" },
  { to: "/it/clubbing", label: "Guida Clubbing" },
  { to: "/it/saune-libertine", label: "Saune Libertine" },
  { to: "/it/vip", label: "Status VIP" },
  { to: "/it/live", label: "Live Akoky" },
  { to: "/it/iniziare-libertinismo", label: "Iniziare nel Libertinismo" },
  { to: "/it/app", label: "App Mobile" },
];

const EventiIt = () => (
  <>
    <MetaTags
      title="Eventi Libertini AKOKY 2026 – Serate e Aperitivi Libertini in Italia"
      description="Serate libertine, aperitivi e weekend esclusivi con AKOKY. Unisciti alla community libertina premium in Italia: Milano, Roma, Torino, Firenze e molto altro."
      canonical="https://akoky.com/it/eventi"
      lang="it"
      ogImage="/images/es-eventos-cover.webp"
    />
    <HreflangTags slug="eventi" />
    <ContentPageLayout
      lang="it"
      title="Eventi Libertini AKOKY Italia"
      description="Serate, aperitivi e weekend libertini in Italia"
      canonical="https://akoky.com/it/eventi"
      heroTitle="Eventi Libertini Akoky – Serate e Incontri Libertini in Italia"
      heroSubtitle="Vivi l'esperienza libertina premium: serate in club, aperitivi esclusivi e incontri autentici in tutta Italia"
      heroImage="/images/es-eventos-cover.webp"
      breadcrumb={[{ label: "Eventi libertini" }]}
      faq={FAQ}
    >

      {/* Serate libertine Akoky in Italia */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Serate Libertine Akoky in Italia</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Gli eventi libertini Akoky in Italia incarnano l'eccellenza del lifestyle libertino. Da Milano a Roma, passando per Torino, Firenze, Bologna e Napoli, le nostre serate libertine in club offrono un'esperienza unica dove eleganza e libertà si incontrano. Ogni evento libertino è pensato per creare momenti indimenticabili in un'atmosfera raffinata e benevola.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {IT_CARDS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed mb-3">I nostri aperitivi libertini in Italia sono diventati appuntamenti imperdibili per la community libertina italiana. Queste serate Akoky si distinguono per la loro atmosfera calda e la selezione rigorosa dei luoghi. Che tu sia un habitué delle <Link to="/it/clubbing" className="text-primary hover:underline">serate libertine</Link> o curioso di scoprire questo mondo, gli eventi Akoky in Italia ti accolgono in un contesto sicuro e rispettoso.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">I <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link> partner di Akoky in Italia propongono spazi privatizzati per i nostri eventi esclusivi. Dalle serate tematiche agli aperitivi libertini, ogni evento libertino è una celebrazione del lifestyle con totale discrezione. Milano e Roma, capitali europee della vita libertina, ospitano regolarmente le nostre serate libertine più ambite, attirando membri da tutta Europa.</p>
            <p className="text-muted-foreground leading-relaxed mb-3">L'esperienza degli eventi libertini Akoky in Italia va oltre la semplice serata. È una community vibrante che si riunisce per condividere momenti autentici, nel rispetto dei valori che fanno la reputazione di Akoky: eleganza, benevolenza e libertà autentica.</p>
          </div>
        </div>
      </section>

      {/* Eventi libertini Akoky a Roma */}
      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-3xl mb-3">🏛️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Eventi Libertini Akoky a Roma</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Roma è un territorio d'eccellenza per gli eventi libertini Akoky. La Città Eterna e i suoi club prestigiosi ospitano serate libertine che irradiano in tutta Europa. Lo spirito libertino romano, riconosciuto per la sua passione e convivialità, si fonde perfettamente con la filosofia Akoky.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {ROMA_CARDS.map((c, i) => (
              <div key={i} className="bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed">Le serate libertine Akoky a Roma attirano una community internazionale e raffinata. I club libertini romani, tra i più suggestivi d'Europa, offrono un contesto ideale per i nostri eventi esclusivi. Ogni aperitivo libertino a Roma è una celebrazione della diversità culturale e della libertà di essere sé stessi, con il fascino unico della Città Eterna.</p>
            <p className="text-muted-foreground leading-relaxed">Gli eventi Akoky a Roma si distinguono per la loro atmosfera unica e la qualità dell'organizzazione. Dalle serate intime ai grandi eventi internazionali, Roma è diventata una destinazione privilegiata per gli amanti del lifestyle libertino in cerca di autenticità, storia ed eleganza.</p>
          </div>
        </div>
      </section>

      {/* Serate libertine Akoky sulla Costa e le Isole */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-3xl mb-3">🏖️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Serate Libertine Akoky sulla Costa e le Isole Italiane</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              La costa italiana apporta una dimensione solare e festosa agli eventi libertini Akoky. Dalla Costiera Amalfitana alla Sardegna, dalla Sicilia alla Puglia, le nostre serate libertine costiere coniugano il calore mediterraneo con l'eleganza che contraddistingue il marchio Akoky. Ogni evento sulla costa è un invito alla celebrazione della vita e dei piaceri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {COSTA_CARDS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed">Gli eventi libertini Akoky sulla costa italiana attirano una community europea in cerca di sole e libertà. Milano, con il suo spirito all'avanguardia, e la Costiera con il suo fascino senza tempo, ospitano serate libertine che spingono i limiti della creatività. Gli aperitivi libertini sulle terrazze vista mare offrono un'esperienza unica che combina lifestyle libertino e arte di vivere mediterranea.</p>
            <p className="text-muted-foreground leading-relaxed">L'estate italiana vede fiorire eventi Akoky d'eccezione lungo le coste. Dalle serate fronte mare ai weekend in ville private, l'Italia diventa il terreno di gioco privilegiato della community libertina Akoky. Se sei alle prime armi, consulta la nostra guida per <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare nel libertinismo</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Perché Partecipare agli Eventi Libertini Akoky</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md hover:border-primary/40 transition-all">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galleria */}
      <section className="py-14 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">L'Universo degli Eventi Libertini Akoky</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {GALLERY.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl relative group">
                <img src={g.img} alt={g.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-white text-xs font-medium">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esplora */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">Esplora i nostri eventi e risorse</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CTA_LINKS.map((l, i) => (
              <Link key={i} to={l.to} className="p-3 bg-background border border-border rounded-lg text-center text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </ContentPageLayout>
  </>
);

export default EventiIt;
