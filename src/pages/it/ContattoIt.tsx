import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come contattare il supporto AKOKY?", answer: "Tramite il nostro modulo online, via email a support@akoky.com o dal tuo spazio membro. Il nostro team risponde entro 24 ore lavorative." },
  { question: "AKOKY offre supporto in italiano?", answer: "Sì. Il nostro supporto è disponibile in italiano, francese, spagnolo, tedesco e portoghese." },
  { question: "Come segnalare un profilo problematico?", answer: "Usa il pulsante 'Segnala' disponibile su ogni profilo. Il nostro team di moderazione gestisce ogni segnalazione entro 2 ore." },
  { question: "Qual è il tempo medio di risposta?", answer: "Meno di 24 ore lavorative per il supporto standard. I membri VIP beneficiano di supporto prioritario con risposta entro 4 ore." },
  { question: "Posso chiamare il supporto?", answer: "Il supporto è disponibile via email e dal tuo spazio membro. Il supporto telefonico è riservato ai membri VIP e ai partner." },
];

const LINKS = [
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Tutte le funzionalità della piattaforma." },
  { href: "/it/visione", icon: "🔭", title: "La Nostra Visione", desc: "I valori dietro AKOKY." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Supporto prioritario per i membri VIP." },
  { href: "/it/referral", icon: "🎁", title: "Programma Referral", desc: "Invita amici e guadagna vantaggi." },
];

const CHANNELS = [
  { icon: "📧", title: "Email di Supporto", email: "support@akoky.com", desc: "Per tutte le domande relative al tuo account e alla piattaforma.", time: "< 24h" },
  { icon: "🏛️", title: "Club & Partnership", email: "partenaires@akoky.com", desc: "Per i gestori di club, organizzatori di eventi e partner commerciali.", time: "< 48h" },
  { icon: "📰", title: "Stampa & Media", email: "presse@akoky.com", desc: "Per richieste stampa, interviste e collaborazioni editoriali.", time: "< 48h" },
  { icon: "🛡️", title: "Segnalazione Urgente", email: "moderation@akoky.com", desc: "Per segnalare un profilo problematico o un comportamento inappropriato.", time: "< 2h" },
];

const ContattoIt = () => (
  <>
    <MetaTags title="AKOKY Italia | Contatto — Supporto e Assistenza Premium" description="Contatta AKOKY: supporto membri, richieste partner, stampa e affiliazione. Team disponibile 24h." canonical="https://akoky.com/it/contatto" lang="it" />
    <HreflangTags slug="contatto" />
    <ContentPageLayout lang="it" title="AKOKY Italia | Contatto" description="Contatta AKOKY." canonical="https://akoky.com/it/contatto" heroTitle="Contattare AKOKY" heroSubtitle="Il nostro team è disponibile 24h per aiutarti. Trova il canale di contatto adatto alla tua richiesta." heroImage="/images/es-contacto-cover.webp" breadcrumb={[{ label: "Contattare AKOKY" }]} faq={FAQ}>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "< 24h", label: "Tempo di risposta" },
              { val: "6", label: "Lingue supportate" },
              { val: "7/7", label: "Disponibilità" },
              { val: "98%", label: "Soddisfazione supporto" },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-xl border border-border bg-card">
                <span className="text-2xl md:text-3xl font-black text-primary block mb-1">{s.val}</span>
                <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">I Nostri Canali di Contatto</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {CHANNELS.map((c, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{c.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{c.desc}</p>
                    <div className="flex items-center justify-between">
                      <a href={`mailto:${c.email}`} className="text-primary text-sm font-semibold hover:underline">{c.email}</a>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">⏱️ {c.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-12 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Orari di Apertura</h2>
          <div className="max-w-md mx-auto rounded-2xl border border-border bg-card overflow-hidden">
            {[
              { day: "Lunedì — Venerdì", hours: "09:00 — 20:00", active: true },
              { day: "Sabato — Domenica", hours: "10:00 — 18:00", active: true },
              { day: "Moderazione", hours: "24/7 — 365 giorni", active: true },
            ].map((h, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b last:border-b-0 border-border">
                <span className="text-foreground font-medium text-sm">{h.day}</span>
                <span className={`text-sm font-semibold ${h.active ? 'text-primary' : 'text-muted-foreground'}`}>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership details */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Richieste di Partnership</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Gestisci un <Link to="/it/club-libertini" className="text-primary hover:underline">club libertino</Link>, organizzi <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> o rappresenti un media? Abbiamo proposte specifiche per ogni profilo.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "🏛️", title: "Club Libertini", desc: "Referenzia la tua struttura nel directory AKOKY e accedi alla nostra community di 1,5 milioni di membri." },
              { icon: "📅", title: "Organizzatori Eventi", desc: "Pubblica i tuoi eventi nel calendario AKOKY e aumenta la tua visibilità." },
              { icon: "🎙️", title: "Media & Influencer", desc: "Per richieste stampa, interviste o collaborazioni editoriali." },
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/40 transition-all">
                <span className="text-3xl block mb-3">{p.icon}</span>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0">🚨</span>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Segnalare un Profilo o Comportamento</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">Se trovi un profilo o contenuto che non rispetta la carta AKOKY, utilizza il pulsante 'Segnala' disponibile su ogni profilo. Il nostro team gestisce ogni segnalazione entro 2 ore.</p>
                <p className="text-muted-foreground text-sm">Per segnalazioni urgenti: <a href="mailto:moderation@akoky.com" className="text-primary font-semibold hover:underline">moderation@akoky.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage */}
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

export default ContattoIt;
