import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "In cosa si differenzia AKOKY dalle altre piattaforme?", answer: "AKOKY è l'unica piattaforma con multi-profilo, chat tipo WhatsApp con gruppi, testimonianze verificate e live streaming integrato." },
  { question: "AKOKY è disponibile come app mobile?", answer: "Sì. AKOKY ha una PWA ottimizzata per iOS e Android con notifiche push, geolocalizzazione e accesso completo a tutte le funzionalità." },
  { question: "Chi può usare AKOKY?", answer: "AKOKY è aperto a tutti gli adulti over 18 che rispettano la carta etica della piattaforma, indipendentemente dall'orientamento sessuale o dalla situazione sentimentale." },
  { question: "AKOKY è sicuro?", answer: "Assolutamente. AKOKY SAFE garantisce verifica dell'identità, moderazione umana 24h/7d, crittografia dei dati e opzioni avanzate di privacy." },
];

const LINKS = [
  { href: "/it/app", icon: "📱", title: "App AKOKY", desc: "Scarica l'app e porta la community in tasca." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Accedi a funzionalità esclusive e privilegi premium." },
  { href: "/it/visione", icon: "🌍", title: "La Nostra Visione", desc: "Scopri i valori e la filosofia dietro AKOKY." },
  { href: "/it/akoky-vs-wyylde", icon: "⚔️", title: "AKOKY vs Wyylde", desc: "Confronto dettagliato tra le due piattaforme leader." },
];

const AkokyIt = () => (
  <>
    <MetaTags
      title="AKOKY Italia | La Piattaforma Libertina Premium Europea"
      description="Scopri AKOKY: storia, visione e funzionalità uniche della piattaforma libertina leader in Europa. Multi-profilo, chat, verifica."
      canonical="https://akoky.com/it/akoky"
      lang="it"
    />
    <HreflangTags slug="akoky" />
    <ContentPageLayout
      lang="it"
      title="AKOKY Italia | La Piattaforma Libertina Premium Europea"
      description="Scopri AKOKY: storia, visione e funzionalità uniche della piattaforma libertina leader in Europa. Multi-profilo, chat, verifica."
      canonical="https://akoky.com/it/akoky"
      heroTitle="AKOKY: Il Social Network Libertino Premium"
      heroSubtitle="Nata in Francia, presente in tutta Europa. La piattaforma che reinventa il libertinismo moderno."
      breadcrumb={[{ label: "AKOKY: Il Social Network Libertino Premium" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cos'è AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è molto più di un'app di incontri per adulti. È un social network completo, pensato specificamente per la community libertina europea. Nata dall'evoluzione di AcoquinementVotre, una piattaforma pioniera del libertinismo francese, AKOKY rappresenta la prossima generazione di piattaforme per adulti.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Con oltre 1,5 milioni di membri attivi in tutta Europa, AKOKY è diventata il punto di riferimento per coppie e single che cercano un'esperienza libertina sicura, elegante e moderna. La piattaforma è disponibile in italiano, francese, spagnolo, tedesco e portoghese.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Le Nostre Funzionalità Esclusive</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Chat tipo WhatsApp con Gruppi</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Messaggistica istantanea individuale e di gruppo con notifiche in tempo reale. Organizza serate, coordina incontri e rimani in contatto con la tua community come faresti su WhatsApp, ma in un ambiente sicuro e privato.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👤 Multi-Profilo — Prima Mondiale</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">L'unica piattaforma al mondo che permette di creare più profili (coppia, single uomo, single donna) su un unico account, con cambio in un clic. Ogni profilo ha la propria galleria, descrizione e impostazioni di privacy.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">✅ Testimonianze Verificate</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">I membri possono lasciare testimonianze verificate sui loro incontri. Un sistema unico che garantisce autenticità e aiuta a costruire fiducia all'interno della community.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📡 Live Streaming + Replay</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Oltre 20 live a settimana: atmosfera di club in diretta, serate esclusive, contenuti VIP. Goditi l'esperienza da casa o usala per decidere quali eventi visitare.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📅 Calendario Eventi Integrato</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Più di 300 eventi al mese in tutta Europa: serate in club, aperitivi libertini, weekend tematici e incontri privati. Prenota il tuo posto direttamente dalla piattaforma con pochi clic.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY SAFE</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il nostro sistema di verifica dell'identità garantisce che ogni membro sia davvero chi dice di essere. Profili certificati, moderazione umana 24h/7d, sistema di segnalazione efficace. La sicurezza non è un'opzione, è una priorità.</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Verifica dell'identità obbligatoria per i profili VIP</li>
            <li>Crittografia end-to-end delle conversazioni</li>
            <li>Moderazione umana attiva 24 ore su 24</li>
            <li>Opzioni avanzate di privacy: modalità incognito, sfocatura foto</li>
            <li>Dati ospitati in Europa, conformità GDPR totale</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY in Italia</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">La scena libertina italiana è una delle più dinamiche d'Europa, con club prestigiosi a Milano, Roma, Torino, Bologna e Napoli. AKOKY copre l'intero territorio con un directory di club verificati, un calendario eventi locale e una community italiana in costante crescita.</p>
        </div>
      </section>

      {/* CTA Iscrizione */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Unisciti ad AKOKY Oggi</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Crea il tuo profilo in 2 minuti e accedi a una community di 1,5 milioni di membri in Europa.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
            Crea il Tuo Account Gratuito →
          </a>
        </div>
      </section>

      {/* Maillage Interne */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Scopri Anche</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LINKS.map((l) => (
              <Link key={l.href} to={l.href} className="group block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <span className="text-3xl mb-3 block">{l.icon}</span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{l.title}</h3>
                <p className="text-muted-foreground text-sm">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AkokyIt;
