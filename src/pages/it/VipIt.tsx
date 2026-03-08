import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Quali sono i vantaggi dello stato VIP AKOKY?", answer: "Accesso a eventi esclusivi, multi-profilo certificato, album privati, live VIP, messaggistica prioritaria, badge di fiducia, sconti nei club partner e supporto prioritario." },
  { question: "Cos'è la funzionalità multi-profilo?", answer: "La funzionalità esclusiva AKOKY che ti permette di creare più profili (coppia, single uomo, single donna) su un unico account, con cambio in un solo clic. Ogni profilo ha la propria galleria e messaggistica." },
  { question: "Come ottenere la certificazione VIP?", answer: "La certificazione viene concessa dopo la verifica dell'identità. Garantisce alla community che sei davvero la persona indicata nel tuo profilo." },
  { question: "Posso annullare l'abbonamento in qualsiasi momento?", answer: "Sì, sei libero di annullare in qualsiasi momento dal tuo spazio personale. Nessun costo di cancellazione. Mantieni lo status VIP fino alla fine del periodo già pagato." },
  { question: "Quali metodi di pagamento sono accettati?", answer: "Carte bancarie (Visa, Mastercard, American Express) e portafogli elettronici sicuri. Pagamenti discreti: nessuna menzione esplicita sull'estratto conto." },
  { question: "L'abbonamento premium è conveniente?", answer: "Assolutamente. Oltre alle funzionalità digitali esclusive, il tuo status VIP ti dà sconti nei club libertini partner in tutta Europa. Per i membri attivi, l'abbonamento si ripaga rapidamente." },
  { question: "Qual è la differenza tra membro gratuito e VIP?", answer: "Un membro gratuito può creare un profilo basico. Solo il VIP accede a eventi esclusivi, album privati, live in diretta, multi-profilo, visibilità prioritaria e supporto dedicato." },
  { question: "Gli eventi VIP sono davvero riservati ai premium?", answer: "Sì, gli eventi fisici (serate private nei club partner) e digitali (live erotici, interviste) sono esclusivamente riservati ai membri con accesso VIP attivo." },
];

const FEATURES = [
  { icon: "🎭", title: "Eventi Esclusivi", desc: "Accesso prioritario a serate private in ville, weekend di lusso e incontri intimi selezionati. Prenotazione anticipata garantita." },
  { icon: "👤", title: "Multi-Profilo", desc: "Fino a 3 profili (coppia, uomo, donna) su un unico account. Cambio istantaneo con un solo clic. Prima mondiale AKOKY." },
  { icon: "📸", title: "Album Privati", desc: "Crea album fotografici privati con controllo totale degli accessi. Decidi tu chi può vedere i tuoi contenuti." },
  { icon: "📡", title: "Live Premium", desc: "Accesso ai live VIP dai club di lusso, trasmissioni private e replay illimitati. Contenuti esclusivi ogni settimana." },
  { icon: "💬", title: "Messaggistica Prioritaria", desc: "I tuoi messaggi sono evidenziati e visibili prioritariamente. Risposte più rapide e migliori opportunità di connessione." },
  { icon: "⭐", title: "Visibilità Potenziata", desc: "Il tuo profilo appare in priorità nei risultati di ricerca. Badge VIP visibile che aumenta la tua credibilità nella community." },
  { icon: "🏷️", title: "Sconti Club Partner", desc: "Tariffe preferenziali nei club libertini partner in tutta Europa. Il tuo status VIP ti apre le porte ovunque." },
  { icon: "🛡️", title: "Supporto Dedicato", desc: "Assistenza prioritaria 24h. Le tue richieste vengono trattate con la massima urgenza da un team dedicato." },
];

const PROFILES = [
  { icon: "💑", title: "Coppie Libertine", desc: "Incontrate altre coppie verificate, accedete agli eventi esclusivi e gestite i vostri profili individuali in totale discrezione. Ideale per esplorare in sicurezza." },
  { icon: "👩", title: "Donne Sole", desc: "Ambiente rispettoso e accogliente. Visibilità controllata, accesso ai live e eventi premium, filtri avanzati per gli interlocutori. Controllo totale della vostra esperienza." },
  { icon: "👨", title: "Uomini Soli", desc: "Il VIP vi distingue dai profili gratuiti con visibilità aumentata, eventi esclusivi e badge di certificazione riconosciuto dalla community." },
  { icon: "🌱", title: "Principianti", desc: "Cadre rassicurante: guide, community accogliente, eventi per novizi e supporto dedicato. Iniziate serenamente la vostra avventura." },
  { icon: "🏆", title: "Esperti", desc: "Frequentate già club e serate? Il VIP è il vostro passaporto digitale per eventi internazionali, connessioni premium e accesso ai contenuti più esclusivi." },
  { icon: "📡", title: "Amanti dei Live", desc: "Serate private, live erotici e contenuti in diretta: il VIP è indispensabile. Informazioni in anteprima e prenotazione prioritaria." },
];

const TESTIMONIALS = [
  { text: "Un vero cambiamento rispetto alle altre piattaforme. I profili sono verificati, gli eventi di qualità, e ci sentiamo finalmente in un ambiente sicuro. Il sistema multi-profilo è un vero plus per la nostra coppia.", author: "Marco & Giulia, Milano" },
  { text: "I membri sono seri e rispettosi. Ho partecipato a diversi eventi AKOKY e non sono mai stata delusa. La community è davvero premium.", author: "Sofia, Roma" },
];

const VipIt = () => (
  <>
    <MetaTags title="AKOKY VIP 2026 | Abbonamento Premium — Funzionalità Esclusive" description="Scopri lo stato VIP AKOKY: multi-profilo, eventi esclusivi, live premium, album privati. Unisciti all'élite della community libertina europea." canonical="https://akoky.com/it/vip" lang="it" ogImage="/images/vip-cover.webp" />
    <HreflangTags slug="vip" />
    <ContentPageLayout lang="it" title="AKOKY VIP 2026 | Abbonamento Premium" description="Scopri lo stato VIP AKOKY." canonical="https://akoky.com/it/vip" heroTitle="Stato VIP AKOKY" heroSubtitle="Accedi a privilegi esclusivi e vivi l'esperienza libertina al suo livello più alto." heroImage="/images/vip-cover.webp" breadcrumb={[{ label: "Stato VIP AKOKY" }]} faq={FAQ}>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "1.5M", label: "Membri attivi", icon: "👥" },
              { value: "120+", label: "Club partner", icon: "🏛️" },
              { value: "300+", label: "Eventi/mese", icon: "📅" },
              { value: "20+", label: "Live/settimana", icon: "📡" },
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

      {/* Why VIP */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 font-display">Perché Diventare VIP su AKOKY?</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Lo stato VIP AKOKY non è semplicemente un accesso a pagamento: è una <strong className="text-foreground">garanzia di sicurezza, autenticità ed esclusività</strong>. Vi distingue offrendovi un accesso privilegiato a un circolo privato di membri verificati, selezionati e coinvolti.</p>
            <p>A differenza delle piattaforme libertine aperte, dove i profili falsi e i comportamenti inappropriati sono frequenti, AKOKY ha scelto un <strong className="text-foreground">club privato online</strong>, dove ogni membro VIP beneficia di un ambiente sicuro e di qualità. Scoprite tutte le funzionalità su <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link>.</p>
          </div>
        </div>
      </section>

      {/* Multi-Profile */}
      <section className="py-14 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 text-center font-display">Multi-Profilo: Un Solo Account, Più Identità</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Funzionalità esclusiva VIP+ — Prima mondiale AKOKY</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "1️⃣", title: "Un Solo Account", desc: "Gestisci fino a tre profili diversi (coppia, single uomo, single donna) sotto un unico abbonamento. Ogni profilo ha la propria galleria e impostazioni." },
              { icon: "⚡", title: "Cambio Istantaneo", desc: "Passa da un profilo all'altro con un solo clic: profilo coppia per gli eventi in club, singolo per gli aperitivi. Senza disconnettersi." },
              { icon: "✅", title: "Certificazione Obbligatoria", desc: "Tutti i profili VIP sono certificati tramite verifica dell'identità. Badge di fiducia visibile a tutta la community." },
            ].map((f) => (
              <div key={f.title} className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{f.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">Vantaggi Esclusivi VIP</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Un ecosistema completo di funzionalità premium per un'esperienza libertina di livello superiore.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="group relative p-5 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{f.icon}</span>
                <h3 className="text-sm font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is VIP for */}
      <section className="py-16 px-4 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">A Chi Si Rivolge il VIP AKOKY?</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Un accesso VIP pensato per tutti i profili della community libertina.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILES.map((p) => (
              <div key={p.title} className="group p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                <span className="text-3xl block mb-3">{p.icon}</span>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-foreground text-center mb-10 font-display">Hanno Scelto il VIP</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-card/50 relative">
                <span className="text-4xl text-primary/20 absolute top-3 left-4">"</span>
                <p className="text-muted-foreground leading-relaxed mb-4 pt-6 italic">{t.text}</p>
                <p className="text-sm font-semibold text-primary">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-14 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-foreground text-center mb-10 font-display">Sicurezza e Riservatezza Garantite</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🔐", title: "Dati Protetti", desc: "Dati crittografati via AKOKY Safe. Conformità GDPR. Anonimato garantito." },
              { icon: "✅", title: "Verifica Manuale", desc: "Ogni profilo e foto verificati manualmente dal nostro team di moderazione." },
              { icon: "💳", title: "Pagamento Discreto", desc: "Transazioni cifrate. Nessuna menzione esplicita sull'estratto conto bancario." },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-border bg-card/50 text-center">
                <span className="text-3xl block mb-3">{s.icon}</span>
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
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 font-display">Diventa VIP Oggi</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Sblocca tutte le funzionalità premium e vivi l'esperienza AKOKY al suo livello più alto.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all">Attiva lo Status VIP →</a>
                <Link to="/it/referral" className="px-8 py-4 rounded-full border border-border bg-card/50 text-foreground font-bold text-lg hover:border-primary/40 hover:scale-105 transition-all">Ottieni giorni VIP gratis</Link>
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
              { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Tutte le funzionalità della piattaforma." },
              { href: "/it/live", icon: "📡", title: "Live Esclusivi", desc: "Streaming premium riservati ai VIP." },
              { href: "/it/eventi", icon: "📅", title: "Eventi Premium", desc: "Accesso prioritario alle serate esclusive." },
              { href: "/it/referral", icon: "🎁", title: "Programma Referral", desc: "Ottieni giorni VIP gratuiti." },
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

export default VipIt;
