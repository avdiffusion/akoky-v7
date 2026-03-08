import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Link } from "react-router-dom";
import HreflangTags from "@/components/seo/HreflangTags";
import { Helmet } from "react-helmet-async";

const FAQ = [
  { question: "Cos'è AKOKY e a cosa serve la piattaforma?", answer: "AKOKY è una piattaforma comunitaria adulta europea dedicata agli incontri, ai club partner e agli eventi privati. Si rivolge a coppie, single e profili curiosi che desiderano evolversi in un contesto strutturato, rispettoso e sicuro." },
  { question: "In cosa si differenzia AKOKY dalle altre piattaforme?", answer: "A differenza di altre piattaforme, AKOKY combina un social network, un annuario di club partner verificati, eventi privati organizzati, live esclusivi e un approccio etico centrato sul consenso e sulla qualità degli scambi." },
  { question: "Come garantisce AKOKY la sicurezza e la discrezione dei membri?", answer: "Ogni profilo è moderato manualmente, i dati sono protetti secondo le norme GDPR, e strumenti avanzati permettono di gestire la visibilità dei profili e delle foto. Il servizio AKOKY Safe rafforza la protezione dei membri quotidianamente." },
  { question: "L'iscrizione su AKOKY è gratuita?", answer: "Sì. L'iscrizione è gratuita e permette di scoprire la piattaforma, i club partner e gli eventi. Un abbonamento VIP opzionale sblocca funzionalità avanzate come la messaggistica illimitata e l'accesso a eventi esclusivi." },
  { question: "Chi può usare AKOKY?", answer: "AKOKY è aperto a coppie, donne single, uomini single (a condizioni), single e profili poliamorosi. Ogni evento specifica chiaramente i profili accettati." },
  { question: "AKOKY propone eventi adatti ai principianti?", answer: "Sì. AKOKY organizza eventi accessibili ai principianti, come aperitivi di scoperta, visite guidate ai club e serate pedagogiche. Una guida dedicata è disponibile per comprendere i codici." },
];

const jsonSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AKOKY",
  "url": "https://akoky.com",
  "logo": "https://akoky.com/images/logo-akoky.webp",
  "description": "Piattaforma comunitaria libertina premium in Europa",
  "foundingDate": "2014",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contact@akoky.com",
    "availableLanguage": ["fr", "en", "es", "de", "it", "pt"],
  },
  "sameAs": [
    "https://www.facebook.com/akokyofficial",
    "https://www.instagram.com/akoky_official",
    "https://twitter.com/akoky_official",
  ],
};

const AkokyIt = () => {
  return (
    <>
      <Helmet>
        <html lang="it" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="AKOKY" />
        <meta name="twitter:site" content="@akoky_official" />
      </Helmet>
      <HreflangTags slug="akoky" />

      <ContentPageLayout
        lang="it"
        title="AKOKY Italia | La Piattaforma Libertina Premium Europea"
        description="Scopri AKOKY: storia, visione e funzionalità uniche della piattaforma libertina leader in Europa con 1,5 milioni di membri. Multi-profilo, chat, verifica, eventi."
        canonical="https://akoky.com/it/akoky"
        heroTitle="La Nostra Missione AKOKY"
        heroSubtitle="Scopri i valori, la visione e gli impegni della community AKOKY — la piattaforma comunitaria adulta premium in Europa"
        heroImage="/images/akoky.webp"
        breadcrumb={[{ label: "AKOKY Italia" }]}
        faq={FAQ}
        schema={jsonSchema}
      >
        {/* Applicazione Mobile */}
        <section className="py-16 px-4 bg-card">
          <div className="container max-w-5xl mx-auto">
            <span className="text-primary font-bold tracking-wider text-sm mb-2 block">La Nostra Missione</span>
            <h2 className="text-3xl font-bold text-foreground mb-6">L'Applicazione AKOKY: l'esperienza comunitaria adulta nella tua tasca</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Nato da un progetto comunitario avviato nel 2014 e strutturato nella sua forma attuale dal 2020, AKOKY sviluppa un'<Link to="/it/app" className="text-primary hover:underline">applicazione mobile premium</Link> disponibile su iOS e Android.</p>
                  <p>Permette a oltre <Link to="/it" className="text-primary hover:underline">1,5 milioni di membri</Link> di scoprire <Link to="/it/club-libertini" className="text-primary hover:underline">club partner verificati</Link>, seguire <Link to="/it/eventi" className="text-primary hover:underline">eventi privati ogni mese</Link> e accedere a un ecosistema pensato per gli incontri adulti moderni, fondato sulla discrezione, il rispetto e un approccio etico al lifestyle.</p>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a href="https://akoky.com/application" className="px-6 py-3 bg-foreground text-background rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                    <span>📱</span> Scarica per iOS
                  </a>
                  <a href="https://akoky.com/application" className="px-6 py-3 border border-border text-foreground rounded-lg font-bold hover:bg-accent transition-colors flex items-center gap-2">
                    <span>🤖</span> Scarica per Android
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Compatibile iOS 13+ | ChromeOS | Android TV</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
                <img src="/images/3tel.webp" alt="Screenshot dell'app AKOKY su smartphone" className="relative z-10 rounded-2xl shadow-2xl border border-border mx-auto max-w-sm" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* I Nostri Numeri */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold text-primary tracking-widest mb-12 uppercase">I Nostri Numeri</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1.5M+", label: "Membri Attivi", href: "/it" },
                { value: "120+", label: "Club Libertini Verificati", href: "/it/club-libertini" },
                { value: "300+", label: "Eventi Libertini/Mese", href: "/it/eventi" },
                { value: "20+", label: "Live Libertini/Settimana", href: "/it/live" },
              ].map((stat, i) => (
                <Link key={i} to={stat.href} className="p-6 bg-card/50 rounded-xl border border-border hover:border-primary transition-colors">
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lessico */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Lessico Libertino Completo: Padroneggia il Vocabolario del Libertinismo Moderno</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Il nostro <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link> referenzia oltre 200 termini essenziali per comprendere il <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo moderno</Link>. Dallo <strong className="text-foreground">scambio di coppie</strong> al <strong className="text-foreground">mélangisme</strong>, dal <strong className="text-foreground">candaulismo</strong> al <strong className="text-foreground">triolismo</strong>, scopri le definizioni precise di tutte le pratiche libertine. Che tu sia <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">principiante</Link> o membro esperto, questo dizionario libertino ti permetterà di navigare con sicurezza nei <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link>, durante gli <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> e sulla nostra piattaforma.</p>
              <p>AKOKY si distingue da <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong>, <strong className="text-foreground">Libertic</strong> e <strong className="text-foreground">SexyLib</strong> per il suo approccio pedagogico unico. La nostra <Link to="/it/visione" className="text-primary hover:underline">carta etica</Link> pone il <strong className="text-foreground">consenso esplicito</strong>, la <strong className="text-foreground">discrezione assoluta</strong> e il <strong className="text-foreground">rispetto dei limiti</strong> al centro di ogni interazione. Più di un semplice sito d'incontri libertino, AKOKY è una community educativa dove ogni membro può crescere in totale sicurezza.</p>
              <p>Esplora il nostro lessico per comprendere i codici delle <strong className="text-foreground">serate libertine</strong>, le pratiche del <strong className="text-foreground">soft swap</strong> e del <strong className="text-foreground">full swap</strong>, le sfumature tra <strong className="text-foreground">esibizionismo</strong> e <strong className="text-foreground">voyeurismo</strong>, o ancora le regole del <strong className="text-foreground">gang bang</strong> rispettoso. Che sia in <Link to="/it/saune-libertine" className="text-primary hover:underline">sauna libertina</Link> o in club, ogni termine è spiegato con semplicità, senza giudizio, con esempi concreti tratti dalle testimonianze della nostra <Link to="/it/recensioni" className="text-primary hover:underline">community di 1,5M di membri</Link>.</p>
              <p><strong className="text-foreground">Perché questo lessico è unico:</strong> A differenza delle altre piattaforme, AKOKY arricchisce continuamente il suo lessico grazie ai feedback della community. Le nostre definizioni integrano le evoluzioni del <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo moderno</Link>, le nuove pratiche (come il <strong className="text-foreground">throuple</strong> o il <strong className="text-foreground">poliamore etico</strong>), e i codici specifici di ogni regione (Italia, Francia, Spagna). Scarica la nostra <Link to="/it/app" className="text-primary hover:underline">applicazione</Link> per accedere al lessico offline durante le tue serate in <Link to="/it/club-libertini" className="text-primary hover:underline">club</Link>.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/it/lessico-libertino" className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg">Esplora il Lessico Libertino Completo (200+ Termini) →</Link>
              <a href="https://www.youtube.com/@akoky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-foreground text-lg">🎥 Scopri il canale YouTube di AKOKY</a>
            </div>
          </div>
        </section>

        {/* Valori */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">I Valori Fondatori di AKOKY</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">AKOKY si basa su una visione chiara degli incontri adulti moderni: un contesto strutturato, un'etica convinta e regole pensate per garantire esperienze rispettose, sicure e di qualità.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { num: "01", title: "Autenticità dei profili e degli scambi", text: "AKOKY valorizza profili reali, trasparenti e coerenti. La sincerità prevale sulla messa in scena, per favorire incontri adulti basati sulla fiducia e su aspettative chiaramente espresse." },
                { num: "02", title: "Sicurezza, riservatezza e protezione dei dati", text: "La piattaforma integra strumenti di sicurezza avanzati, una moderazione umana attiva e una gestione rigorosa dei dati personali per garantire la discrezione e il benessere di ogni membro." },
                { num: "03", title: "Rispetto, consenso e limiti chiari", text: "Il consenso esplicito, il rispetto dei limiti e la tolleranza zero verso comportamenti intrusivi o inappropriati costituiscono la base di tutte le interazioni su AKOKY." },
                { num: "04", title: "Eleganza e approccio responsabile al lifestyle adulto", text: "AKOKY difende una visione raffinata e responsabile del lifestyle adulto, all'opposto del voyeurismo, dei contenuti volgari o delle piattaforme opportuniste, privilegiando la qualità delle esperienze alla quantità." },
              ].map((v, i) => (
                <div key={i} className="bg-card p-8 rounded-2xl border border-border">
                  <span className="text-4xl font-black text-muted/30 mb-4 block">{v.num}</span>
                  <h3 className="text-xl font-bold text-foreground mb-4">{v.title}</h3>
                  <p className="text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg">Su AKOKY, gli incontri adulti non sono un pretesto. <strong className="text-foreground">Implicano responsabilità, rispetto e maturità.</strong></p>
          </div>
        </section>

        {/* Giochi */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm mb-2 block">🎲 Giochi Akoky</span>
                <h2 className="text-3xl font-bold text-foreground mb-4">Gioca sul telefono… o sulla tua TV</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">Dado animato, sfide piccanti, immersione totale. I giochi Akoky sono pensati per ravvivare le tue serate a due o in gruppo, su mobile come su grande schermo.</p>
                <Link to="/it/giochi" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">▶ Gioca ora – Gratis</Link>
                <p className="text-xs text-muted-foreground mt-4">📺 Compatibile TV · Chromecast · Smart TV</p>
              </div>
              <div>
                <img src="/images/app-tv.webp" alt="Giochi Akoky su televisione e grande schermo" className="rounded-2xl shadow-2xl border border-border mx-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Missione Completa — SEO dense con contesto italiano */}
        <section className="py-16 px-4 bg-background">
          <div className="container max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground mb-4">La Nostra Missione: Rivoluzionare il Libertinismo con Etica e Trasparenza</h2>
            <p>Fondato nel <strong className="text-foreground">2014</strong> da un team di appassionati del <Link to="/it/libertinismo" className="text-primary hover:underline">lifestyle libertino</Link>, AKOKY è diventato in pochi anni una delle <strong className="text-foreground">piattaforme comunitarie libertine più attive in Europa</strong> con 1,5 milioni di membri attivi. Ci posizioniamo come l'alternativa etica a <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong>, <strong className="text-foreground">Libertic</strong> e <strong className="text-foreground">SexyLib</strong>, ponendo il <Link to="/it/visione" className="text-primary hover:underline">consenso</Link> e la <strong className="text-foreground">trasparenza</strong> al centro del nostro DNA.</p>
            <p>Il nostro ecosistema unico combina un <strong className="text-foreground">social network libertino sicuro</strong>, un <Link to="/it/club-libertini" className="text-primary hover:underline">annuario di 120 club verificati</Link> (Italia, Francia, Spagna, Belgio), <Link to="/it/eventi" className="text-primary hover:underline">300 eventi mensili</Link> organizzati da professionisti formati, <Link to="/it/live" className="text-primary hover:underline">20 live libertini settimanali</Link> e un'<Link to="/it/app" className="text-primary hover:underline">applicazione mobile all'avanguardia</Link> con geolocalizzazione in tempo reale. Ogni funzionalità è pensata per facilitare gli <strong className="text-foreground">incontri libertini autentici</strong> garantendo <strong className="text-foreground">discrezione</strong> e <strong className="text-foreground">sicurezza</strong>.</p>
            <p>AKOKY non è un semplice sito d'incontri: è una <strong className="text-foreground">community accogliente</strong> che accompagna <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">i principianti</Link> con un <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico completo</Link>, una FAQ dettagliata, un <Link to="/it/blog" className="text-primary hover:underline">blog educativo</Link> e <Link to="/it/recensioni" className="text-primary hover:underline">testimonianze autentiche</Link> (voto medio 4,7/5). La nostra missione: democratizzare il libertinismo moderno rompendo i tabù, educando senza giudicare e creando uno spazio dove coppie, single e curiosi possano crescere liberamente nel rispetto reciproco.</p>
            <p>In <strong className="text-foreground">Italia</strong>, AKOKY è presente con club partner verificati a <strong className="text-foreground">Milano</strong>, <strong className="text-foreground">Roma</strong>, <strong className="text-foreground">Torino</strong>, <strong className="text-foreground">Bologna</strong>, <strong className="text-foreground">Napoli</strong>, <strong className="text-foreground">Firenze</strong> e sulla <strong className="text-foreground">Costa Amalfitana</strong>. La scena libertina italiana è una delle più vibranti d'Europa e AKOKY ne è il punto di riferimento digitale, con eventi esclusivi, serate tematiche e una community in costante crescita.</p>
          </div>
        </section>

        {/* Sala Stampa */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Sala Stampa AKOKY — Dossier media e risorse ufficiali</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Benvenuti nella sala stampa di AKOKY (akoky.com), la piattaforma libertina di riferimento in Europa. Qui troverete tutti i nostri comunicati stampa, dossier media, immagini ufficiali e contatti per qualsiasi richiesta giornalistica.</p>
                <p className="text-muted-foreground leading-relaxed mb-4">La nostra missione? Offrire uno spazio sicuro, moderno e autentico per coppie e single che desiderano esplorare il lifestyle libertino con eleganza e rispetto.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">Vuoi parlare di AKOKY nei tuoi media? Contatta il nostro team stampa per interviste, immagini HD o qualsiasi informazione aggiuntiva.</p>
                <Link to="/it/sala-stampa" className="text-primary font-bold hover:underline">Accedi al dossier stampa →</Link>
              </div>
              <div>
                <img src="/images/akoky-presse.webp" alt="Kit stampa AKOKY" className="rounded-2xl shadow-xl border border-border" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Sicurezza AKOKY Safe */}
        <section className="py-16 px-4 bg-background">
          <div className="container max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🛡️</span>
              <h2 className="text-3xl font-bold text-foreground">Sicurezza Massima e Discrezione Garantita: La Differenza AKOKY</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Di fronte ai problemi di <strong className="text-foreground">profili falsi</strong> e <strong className="text-foreground">fughe di dati</strong> riscontrati su altre piattaforme libertine, AKOKY ha sviluppato <strong className="text-foreground">AKOKY Safe</strong>, il nostro sistema di sicurezza proprietario a triplo livello. Ogni profilo è <strong className="text-foreground">verificato manualmente</strong> dal nostro team (foto + documento d'identità opzionale per il badge certificato), tutti i dati personali sono <strong className="text-foreground">crittografati end-to-end</strong> (standard bancario AES-256) e la nostra infrastruttura è <strong className="text-foreground">conforme al GDPR</strong> con hosting in Europa.</p>
              <p>A differenza di altri siti libertini, AKOKY offre una <strong className="text-foreground">modalità incognito</strong> nell'<Link to="/it/app" className="text-primary hover:underline">applicazione</Link>, la possibilità di sfocare le foto (visibili solo dopo accettazione reciproca) e un sistema di <strong className="text-foreground">geolocalizzazione approssimativa</strong> (raggio di 5-10 km) per proteggere il tuo indirizzo esatto. Le tue <Link to="/it/eventi" className="text-primary hover:underline">prenotazioni di eventi</Link> e visite ai <Link to="/it/club-libertini" className="text-primary hover:underline">club</Link> restano strettamente confidenziali: nessuna informazione viene condivisa senza il tuo consenso esplicito.</p>
              <p>Il nostro team di <strong className="text-foreground">moderazione 24/7</strong> (umani, non bot) rimuove immediatamente qualsiasi contenuto inappropriato, molestia o mancanza di rispetto verso il <Link to="/it/visione" className="text-primary hover:underline">consenso</Link>. Risultato: AKOKY registra un tasso di soddisfazione di <strong className="text-foreground">4,7/5</strong> sulla sicurezza secondo le nostre <Link to="/it/recensioni" className="text-primary hover:underline">60+ testimonianze verificate</Link>. La discrezione fa parte del nostro DNA dal 2020.</p>
            </div>
            <div className="mt-6">
              <a href="https://safe.akoky.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">🛡️ Scopri AKOKY Safe →</a>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-16 px-4 bg-card">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Pronto a unirti alla community?</h2>
            <p className="text-muted-foreground mb-8">Iscriviti gratuitamente e scopri un universo di possibilità</p>
            <a href="https://app.akoky.com/register" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity">Crea il mio account gratuito</a>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default AkokyIt;
