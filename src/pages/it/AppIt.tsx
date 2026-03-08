import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";

const FAQ = [
  { question: "L'app AKOKY è gratuita?", answer: "Sì. Il download e l'uso di base sono gratuiti. Le funzionalità premium sono disponibili con l'abbonamento VIP." },
  { question: "È disponibile su iOS e Android?", answer: "Sì. AKOKY è una PWA compatibile con iOS e Android. Accedi da akoky.com e aggiungi l'icona alla schermata iniziale." },
  { question: "L'app rispetta la mia privacy?", answer: "Assolutamente. La geolocalizzazione è approssimativa, le foto possono essere sfocate automaticamente e la modalità incognito ti permette di navigare invisibile." },
  { question: "Devo creare un nuovo account?", answer: "No! L'app usa il tuo account AKOKY esistente. Accedi semplicemente con le tue credenziali abituali." },
  { question: "L'app è discreta?", answer: "Assolutamente. L'icona è sobria e pulita. Puoi mascherarla o disattivare le notifiche per la massima discrezione." },
  { question: "Funziona offline?", answer: "L'app richiede una connessione Internet per accedere ai contenuti. Alcune pagine visitate possono essere messe in cache per un accesso più rapido." },
];

const FEATURES = [
  { icon: "📍", title: "Geolocalizzazione", desc: "Trova membri, club ed eventi vicino a te. Posizione approssimativa per la tua privacy." },
  { icon: "💬", title: "Messaggistica WhatsApp-like", desc: "Chat individuale e di gruppo con conferme di lettura, messaggi vocali e media condivisi." },
  { icon: "🔔", title: "Notifiche Smart", desc: "Push personalizzate per nuove serate, club preferiti e promemoria di prenotazione." },
  { icon: "👤", title: "Multi-Profilo", desc: "Passa tra profili coppia e single con un tocco. Funzionalità VIP esclusiva." },
  { icon: "📡", title: "Live Streaming", desc: "Guarda i live ovunque. 20+ live a settimana con chat in tempo reale e replay." },
  { icon: "🔍", title: "Ricerca Avanzata", desc: "Filtri per località, età, interessi, status. Trova esattamente chi stai cercando." },
];

const SECURITY = [
  { icon: "🔐", title: "Dati Protetti", desc: "Informazioni crittografate e sicure. AKOKY rispetta rigorosamente il GDPR." },
  { icon: "👁️", title: "Accesso Discreto", desc: "App mascherabile, notifiche personalizzabili. Controllo totale sulla tua visibilità." },
  { icon: "🔕", title: "Notifiche Controllabili", desc: "Attiva o disattiva in qualsiasi momento. Solo le notifiche che ti interessano." },
  { icon: "🛡️", title: "Zero Vendita Dati", desc: "I tuoi dati ti appartengono. AKOKY non li condivide mai con terzi." },
];

const AppIt = () => (
  <>
    <MetaTags title="AKOKY App 2026 | Applicazione Libertina Premium iOS e Android" description="Scarica l'app AKOKY: geolocalizzazione club, messaggistica WhatsApp-like, notifiche eventi, multi-profilo e live streaming. L'app libertina più completa d'Europa." canonical="https://akoky.com/it/app" lang="it" ogImage="/images/app-cover.webp" />
    <HreflangTags slug="app" />
    <SchemaOrg schema={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "AKOKY", applicationCategory: "SocialNetworkingApplication", operatingSystem: "iOS, Android", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, url: "https://akoky.com/it/app" }} />
    <ContentPageLayout lang="it" title="AKOKY App 2026 | Applicazione Libertina Premium" description="Scarica l'app AKOKY." canonical="https://akoky.com/it/app" heroTitle="L'App Libertina Più Completa d'Europa" heroSubtitle="Geolocalizzazione, chat WhatsApp-like, notifiche eventi e multi-profilo. Tutto sul tuo smartphone." heroImage="/images/es-app-cover.webp" breadcrumb={[{ label: "App AKOKY" }]} faq={FAQ}>

      {/* Download CTA + Mockup */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 font-display">Installa l'App AKOKY</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">Accedi rapidamente ad AKOKY e vivi un'esperienza immersiva come un'app nativa. Installazione rapida, nessun account Apple o Google richiesto. Scopri i <Link to="/it/club-libertini" className="text-primary hover:underline">120+ club partner</Link> geolocalizzati e i loro <Link to="/it/eventi" className="text-primary hover:underline">eventi in tempo reale</Link>.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#install-iphone" className="flex items-center gap-4 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all text-left">
                <span className="text-4xl">📱</span>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Scarica su</div>
                  <div className="text-lg font-bold text-foreground">iPhone / iPad</div>
                </div>
              </a>
              <a href="#install-android" className="flex items-center gap-4 px-6 py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all text-left">
                <span className="text-4xl">🤖</span>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Scarica su</div>
                  <div className="text-lg font-bold text-foreground">Android</div>
                </div>
              </a>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg py-3 px-4 inline-block text-sm text-primary">
              ✅ Utenti iPhone / iPad: <strong>Installazione diretta da Safari</strong>
            </div>
          </div>

          {/* Mockup */}
          <div className="flex justify-center py-8">
            <div className="max-w-xs w-full">
              <img src="/images/application-akoky.webp" alt="Anteprima dell'app AKOKY su smartphone" className="w-full h-auto drop-shadow-2xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">Funzionalità Principali</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Scopri tutti i vantaggi di avere AKOKY direttamente sul tuo dispositivo.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{f.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
          <h2 className="text-3xl font-black text-foreground font-display">AKOKY Ovunque con Te</h2>
          <p>L'<strong className="text-foreground">app libertina AKOKY</strong> ti accompagna in tutti i tuoi momenti. A casa, in viaggio o durante un <Link to="/it/eventi" className="text-primary hover:underline">evento libertino</Link>, resta connesso alla community grazie alla nostra piattaforma mobile ottimizzata. Nuovo nel <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo</Link>? Consulta la nostra <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">guida per principianti</Link> direttamente dall'app.</p>
          <p>Compatibile su <strong className="text-foreground">mobile, tablet e computer</strong>, l'app si adatta al tuo stile di vita. Conversazioni private, ricerca profili, organizzazione eventi, live: tutto a portata di mano, in totale discrezione.</p>
          <p>Con AKOKY, benefici di un'esperienza premium pensata per i membri esigenti che cercano un'<strong className="text-foreground">app libertina sicura</strong>, fluida ed elegante. Scopri i <Link to="/it/vip" className="text-primary hover:underline">vantaggi del VIP</Link> per sbloccare tutte le funzionalità esclusive.</p>
        </div>
      </section>

      {/* Install iPhone */}
      <section id="install-iphone" className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">📱</span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Come Installare su iPhone / iPad</h2>
            <p className="text-muted-foreground text-lg">Installazione rapida e semplice da Safari. Nessun account Apple richiesto.</p>
          </div>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { step: 1, title: "Apri Akoky.com in Safari", desc: "Vai su akoky.com dal browser Safari sul tuo iPhone o iPad." },
              { step: 2, title: "Tocca il pulsante Condividi", desc: "Tocca l'icona di condivisione (⎙) in basso allo schermo di Safari." },
              { step: 3, title: "Seleziona \"Aggiungi alla schermata Home\"", desc: "Nel menu, scegli \"Aggiungi alla schermata Home\"." },
              { step: 4, title: "Conferma l'installazione", desc: "Valida toccando \"Aggiungi\". L'icona AKOKY appare sulla tua schermata." },
              { step: 5, title: "Fatto! 🎉", desc: "L'icona AKOKY è ora sulla tua schermata Home. Toccala per avviare l'app istantaneamente." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start group">
                <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 text-lg group-hover:scale-110 transition-transform">{item.step}</span>
                <div><h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3><p className="text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install Android */}
      <section id="install-android" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">🤖</span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Come Installare su Android</h2>
            <p className="text-muted-foreground text-lg">Installazione diretta dal browser Chrome o Firefox.</p>
          </div>
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { step: 1, title: "Visita Akoky.com dal browser", desc: "Apri akoky.com in Chrome, Firefox o il tuo browser preferito." },
              { step: 2, title: "Apri il menu del browser", desc: "Tocca i tre punti verticali (⋮) in alto a destra." },
              { step: 3, title: "Scegli \"Installa app\" o \"Aggiungi alla schermata\"", desc: "Seleziona l'opzione nel menu a tendina." },
              { step: 4, title: "Conferma l'installazione", desc: "L'icona AKOKY si aggiunge automaticamente alla tua schermata Home." },
              { step: 5, title: "Installazione completata! ✅", desc: "L'app AKOKY è ora accessibile come qualsiasi app nativa." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start group">
                <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 text-lg group-hover:scale-110 transition-transform">{item.step}</span>
                <div><h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3><p className="text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">App Desktop AKOKY</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">AKOKY è disponibile anche su computer. Esperienza ottimizzata su grande schermo.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "💻", title: "Windows, macOS & Linux", desc: "Funziona su tutti i sistemi operativi tramite il tuo browser." },
              { icon: "🖥️", title: "Comfort Visivo", desc: "Grande schermo, interfaccia spaziosa. Ideale per messaggistica e live." },
              { icon: "⚡", title: "Performance Massima", desc: "Multitasking, conversazioni multiple, eventi a schermo intero." },
            ].map((d) => (
              <div key={d.title} className="text-center p-5 rounded-2xl border border-border bg-card/50">
                <span className="text-4xl mb-3 block">{d.icon}</span>
                <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img src="/images/ordinateur-application-akoky.webp" alt="App AKOKY su computer" className="w-full max-w-3xl h-auto rounded-xl shadow-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Sicurezza & Riservatezza</h2>
          <p className="text-muted-foreground text-center mb-12">I tuoi dati sono protetti. La tua vita privata resta privata.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-border bg-card/50 text-center">
                <span className="text-4xl block mb-3">{s.icon}</span>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
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
              <h2 className="text-3xl font-black text-foreground mb-4 font-display">AKOKY ti Segue Ovunque 😉</h2>
              <p className="text-muted-foreground text-lg mb-8">Sul divano, in viaggio, in hotel, durante un evento… L'app si adatta a tutti i tuoi momenti di libertà.</p>
              <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all inline-block">Accedi all'App →</a>
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
              { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Tutte le funzionalità della piattaforma." },
              { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Sblocca tutte le funzionalità premium." },
              { href: "/it/live", icon: "📡", title: "Live Streaming", desc: "Guarda i live ovunque." },
              { href: "/it/eventi", icon: "📅", title: "Eventi", desc: "Ricevi notifiche per gli eventi vicini." },
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

export default AppIt;
