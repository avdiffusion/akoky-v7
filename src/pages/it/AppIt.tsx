import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "L'app AKOKY è gratuita?", answer: "Sì. Il download e l'uso di base sono gratuiti. Le funzionalità premium sono disponibili con l'abbonamento VIP." },
  { question: "È disponibile su iOS e Android?", answer: "Sì. AKOKY è una PWA compatibile con iOS e Android. Accedi da akoky.com e aggiungi l'icona alla schermata iniziale." },
  { question: "L'app rispetta la mia privacy?", answer: "Assolutamente. La geolocalizzazione è approssimativa, le foto possono essere sfocate automaticamente e la modalità incognito ti permette di navigare invisibile." },
];

const LINKS = [
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Tutte le funzionalità della piattaforma." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Sblocca tutte le funzionalità premium." },
  { href: "/it/live", icon: "📡", title: "Live Streaming", desc: "Guarda i live ovunque." },
  { href: "/it/eventi", icon: "📅", title: "Eventi", desc: "Ricevi notifiche per gli eventi vicini." },
];

const AppIt = () => (
  <>
    <MetaTags title="AKOKY App | Applicazione Libertina Premium iOS e Android Italia" description="Scarica l'app AKOKY: geolocalizzazione, messaggistica istantanea, notifiche eventi e gestione profilo. L'app libertina più completa d'Europa." canonical="https://akoky.com/it/app" lang="it" />
    <HreflangTags slug="app" />
    <ContentPageLayout lang="it" title="AKOKY App | Applicazione Libertina Premium" description="Scarica l'app AKOKY." canonical="https://akoky.com/it/app" heroTitle="L'App Libertina Più Completa d'Europa" heroSubtitle="Geolocalizzazione, chat tipo WhatsApp, notifiche eventi e multi-profilo. Tutto sul tuo smartphone." breadcrumb={[{ label: "App AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY App: La Tua Community in Tasca</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L'applicazione <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link> è disponibile come PWA ottimizzata per iOS e Android. Nessun download dall'app store necessario: accedi direttamente dal browser e aggiungi l'icona alla schermata iniziale.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Funzionalità Principali</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">📍</span>
              <h3 className="font-bold text-foreground mb-2">Geolocalizzazione</h3>
              <p className="text-muted-foreground text-sm">Trova membri, <Link to="/it/club-libertini" className="text-primary hover:underline">club</Link> ed <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> vicino a te. Posizione approssimativa per la tua privacy.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">💬</span>
              <h3 className="font-bold text-foreground mb-2">Messaggistica Istantanea</h3>
              <p className="text-muted-foreground text-sm">Chat individuale e di gruppo tipo WhatsApp con conferme di lettura e messaggi vocali.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">🔔</span>
              <h3 className="font-bold text-foreground mb-2">Notifiche Eventi</h3>
              <p className="text-muted-foreground text-sm">Notifiche push per nuove serate, club preferiti e promemoria di prenotazione.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">👤</span>
              <h3 className="font-bold text-foreground mb-2">Multi-Profilo</h3>
              <p className="text-muted-foreground text-sm">Passa tra profili coppia e single con un tocco. Funzionalità <Link to="/it/vip" className="text-primary hover:underline">VIP</Link> esclusiva.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Privacy e Sicurezza</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L'app AKOKY incorpora le stesse protezioni della versione web: crittografia end-to-end, modalità incognito, sfocatura delle foto e controllo totale sulla tua visibilità.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Live Streaming Mobile</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Guarda i <Link to="/it/live" className="text-primary hover:underline">live AKOKY</Link> ovunque ti trovi. Oltre 20 live a settimana accessibili direttamente dall'app, con chat in tempo reale e replay disponibili.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Scarica l'App AKOKY</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Gratuita su iOS e Android. Aggiungi l'icona alla tua schermata iniziale e accedi alla community in un tocco.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Accedi all'App →</a>
        </div>
      </section>

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

export default AppIt;
