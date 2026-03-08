import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Quali sono i vantaggi dello stato VIP AKOKY?", answer: "Accesso a eventi esclusivi, multi-profilo certificato, album privati, live VIP, messaggistica prioritaria e badge di fiducia visibile alla community." },
  { question: "Cos'è la funzionalità multi-profilo?", answer: "La funzionalità esclusiva AKOKY che ti permette di creare più profili (coppia, single uomo, single donna) su un unico account, con cambio in un solo clic." },
  { question: "Come ottenere la certificazione VIP?", answer: "La certificazione viene concessa dopo la verifica dell'identità. Garantisce alla community che sei davvero la persona indicata nel tuo profilo." },
];

const LINKS = [
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Tutte le funzionalità della piattaforma." },
  { href: "/it/live", icon: "📡", title: "Live Esclusivi", desc: "Streaming premium riservati ai VIP." },
  { href: "/it/eventi", icon: "📅", title: "Eventi Premium", desc: "Accesso prioritario alle serate esclusive." },
  { href: "/it/referral", icon: "🎁", title: "Programma Referral", desc: "Ottieni giorni VIP gratuiti." },
];

const VipIt = () => (
  <>
    <MetaTags title="AKOKY VIP | Abbonamento Premium — Accesso Esclusivo Community Libertina" description="Scopri l'abbonamento VIP AKOKY: accesso esclusivo a eventi libertini privati, multi-profilo certificato e community premium sicura." canonical="https://akoky.com/it/vip" lang="it" />
    <HreflangTags slug="vip" />
    <ContentPageLayout lang="it" title="AKOKY VIP | Abbonamento Premium" description="Scopri l'abbonamento VIP AKOKY." canonical="https://akoky.com/it/vip" heroTitle="Stato VIP AKOKY" heroSubtitle="Accedi a privilegi esclusivi e vivi l'esperienza libertina al suo livello più alto." breadcrumb={[{ label: "Stato VIP AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Perché Diventare VIP su AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Lo stato VIP AKOKY è molto più di un abbonamento: è il tuo pass per un'esperienza libertina di livello superiore. Più funzionalità, più esclusività, più fiducia dalla community.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Multi-Profilo: Un Solo Account, Più Identità</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Un Solo Account</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Con lo status VIP puoi creare fino a tre profili diversi (coppia, single uomo, single donna) sotto un unico account. Ogni profilo ha la propria galleria, descrizione e impostazioni di privacy.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cambio con un Solo Clic</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Passa da un profilo all'altro istantaneamente: usa il profilo coppia per gli <Link to="/it/eventi" className="text-primary hover:underline">eventi in club</Link>, il profilo singolo per gli aperitivi, senza bisogno di disconnetterti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Certificazione Obbligatoria</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Tutti i profili VIP sono certificati tramite verifica dell'identità. Il badge di fiducia è visibile a tutta la community, aumentando significativamente la tua credibilità.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Vantaggi Esclusivi VIP</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">🎭</span>
              <h3 className="font-bold text-foreground mb-2">Eventi Esclusivi</h3>
              <p className="text-muted-foreground text-sm">Accesso prioritario a serate private in ville, weekend di lusso e incontri intimi selezionati.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">📸</span>
              <h3 className="font-bold text-foreground mb-2">Album Privati</h3>
              <p className="text-muted-foreground text-sm">Crea album fotografici privati con controllo totale degli accessi.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">📡</span>
              <h3 className="font-bold text-foreground mb-2">Live Esclusivi</h3>
              <p className="text-muted-foreground text-sm">Accesso ai <Link to="/it/live" className="text-primary hover:underline">live premium</Link> dai club di lusso e replay illimitati.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">💬</span>
              <h3 className="font-bold text-foreground mb-2">Messaggistica Prioritaria</h3>
              <p className="text-muted-foreground text-sm">I tuoi messaggi sono evidenziati e visibili prioritariamente dai destinatari.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Ottenere lo Status VIP?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Puoi attivare il tuo status VIP dal tuo spazio membro <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link>. Il processo include la verifica dell'identità e l'attivazione dell'abbonamento premium. Puoi anche ottenere giorni VIP gratuiti tramite il <Link to="/it/referral" className="text-primary hover:underline">programma referral</Link>.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Diventa VIP Oggi</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Sblocca tutte le funzionalità premium e vivi l'esperienza AKOKY al suo livello più alto.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Attiva lo Status VIP →</a>
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

export default VipIt;
