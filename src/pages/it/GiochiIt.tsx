import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "I giochi AKOKY sono gratuiti?", answer: "Alcuni giochi sono accessibili gratuitamente a tutti i membri. Altri contenuti sono riservati ai membri VIP." },
  { question: "Sono adatti ai principianti?", answer: "Assolutamente. I giochi AKOKY sono pensati per essere accessibili e divertenti, qualunque sia il tuo livello di esperienza." },
  { question: "Posso personalizzare le regole dei giochi?", answer: "Sì! Ogni gioco AKOKY è personalizzabile: livello di audacia, temi, numero di giocatori. Tu decidi i confini." },
  { question: "I giochi rispettano il consenso?", answer: "Il consenso è il fondamento di ogni gioco AKOKY. Il diritto di passare è assoluto e senza necessità di giustificazione." },
  { question: "Dove trovo i giochi?", answer: "I giochi sono disponibili nell'app AKOKY e nello spazio membro, nella sezione dedicata 'Giochi & Animazioni'." },
];

const LINKS = [
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "I giochi perfetti per animare le serate." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida completa per i nuovi arrivati." },
  { href: "/it/lessico-libertino", icon: "📘", title: "Lessico Libertino", desc: "Comprendi tutti i termini della community." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Accedi a tutti i giochi e contenuti premium." },
];

const GAMES = [
  { icon: "🎯", name: "Roulette delle Penitenze", desc: "Roulette digitale con penitenze personalizzabili secondo il livello di audacia del gruppo.", level: "🟢 Principiante", players: "3-10", time: "15-30 min" },
  { icon: "🎲", name: "Dado del Desiderio", desc: "Dado speciale con azioni, zone del corpo e intensità. Un classico reinventato.", level: "🟡 Intermedio", players: "2-6", time: "10-20 min" },
  { icon: "❓", name: "Verità o Sfida", desc: "La versione adulta del classico gioco. Domande audaci e sfide sensuali.", level: "🟢 Principiante", players: "4-12", time: "20-45 min" },
  { icon: "💑", name: "Sfide di Coppia", desc: "Sfide pensate per coppie: comunicazione, fiducia, creatività e sensualità.", level: "🟢 Principiante", players: "2", time: "15-30 min" },
  { icon: "🃏", name: "Carte Piccanti", desc: "Mazzo di carte con scenari, fantasie e situazioni da esplorare in coppia o in gruppo.", level: "🟡 Intermedio", players: "2-8", time: "20-40 min" },
  { icon: "🎭", name: "Gioco di Ruolo", desc: "Scenari predefiniti per interpretare personaggi e vivere fantasie in totale sicurezza.", level: "🔴 Avanzato", players: "2-4", time: "30-60 min" },
  { icon: "🔥", name: "Scala dell'Audacia", desc: "10 livelli progressivi di sfide, dal flirt leggero all'esperienza intensa. Tu scegli il tuo ritmo.", level: "🟢→🔴 Tutti", players: "2-6", time: "30-60 min" },
  { icon: "💋", name: "Speed Meeting Libertino", desc: "Format veloce per conoscersi: 3 minuti di domande audaci prima di cambiare partner.", level: "🟢 Principiante", players: "6-20", time: "30-45 min" },
];

const GiochiIt = () => (
  <>
    <MetaTags title="Giochi Libertini AKOKY | Animazioni e Attività per Serate" description="Scopri i nostri giochi libertini: carte piccanti, sfide, animazioni interattive. Ludico, conviviale e rispettoso." canonical="https://akoky.com/it/giochi" lang="it" />
    <HreflangTags slug="giochi" />
    <ContentPageLayout lang="it" title="Giochi Libertini AKOKY | Animazioni e Attività" description="Giochi libertini per animare le tue serate." canonical="https://akoky.com/it/giochi" heroTitle="Giochi Libertini AKOKY" heroSubtitle="Anima le tue serate con i nostri giochi esclusivi: roulette, dado, verità o sfida e altro ancora." heroImage="/images/cover-jeux.webp" breadcrumb={[{ label: "Giochi Libertini" }]} faq={FAQ}>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "8+", label: "Giochi disponibili" },
              { val: "3", label: "Livelli di audacia" },
              { val: "2-20", label: "Giocatori" },
              { val: "100%", label: "Consenso garantito" },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-xl border border-border bg-card">
                <span className="text-2xl md:text-3xl font-black text-primary block mb-1">{s.val}</span>
                <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Perché Giocare a una Serata Libertina?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">I giochi sono un ottimo modo per rompere il ghiaccio, creare complicità ed esplorare i desideri in modo ludico e senza pressione. Perfetti per chi sta <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziando nel libertinismo</Link> ma anche per i più esperti.</p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">I Nostri Giochi</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {GAMES.map((g, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="absolute top-0 right-0 px-3 py-1 bg-muted rounded-bl-xl">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{g.level}</span>
                </div>
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{g.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{g.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{g.desc}</p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">👥 {g.players}</span>
                  <span className="flex items-center gap-1">⏱️ {g.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Regole Fondamentali dei Giochi AKOKY</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "✅", rule: "Consenso esplicito", detail: "Prima di ogni azione, il consenso di tutti i partecipanti è richiesto." },
              { icon: "🚫", rule: "Diritto di passare", detail: "Assoluto e senza necessità di spiegazioni. Nessuna pressione, mai." },
              { icon: "🤝", rule: "Rispetto dei limiti", detail: "Ogni partecipante definisce i propri confini. Sono inviolabili." },
              { icon: "😊", rule: "Piacere senza pressione", detail: "Giocare deve essere sempre una fonte di piacere, mai di disagio." },
            ].map((r, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                <span className="text-2xl shrink-0">{r.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{r.rule}</h3>
                  <p className="text-muted-foreground text-sm">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to play */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Dove Giocare?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "🏛️", title: "In Club", desc: "Anima le serate nei club libertini con giochi collettivi.", link: "/it/club-libertini" },
              { icon: "📅", title: "Agli Eventi", desc: "I giochi AKOKY sono integrati in molti eventi partner.", link: "/it/eventi" },
              { icon: "🏠", title: "A Casa", desc: "Perfetti per serate intime in coppia o con amici fidati.", link: "" },
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/40 transition-all">
                <span className="text-3xl block mb-3">{p.icon}</span>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{p.desc}</p>
                {p.link && <Link to={p.link} className="text-primary text-xs hover:underline">Scopri →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">L'Atmosfera dei Giochi AKOKY</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/cover-jeux.webp", alt: "Giochi libertini AKOKY" },
              { src: "/images/jeux-libertin.webp", alt: "Giochi per serate libertine" },
              { src: "/images/soiree-couple-libertin.webp", alt: "Serata di coppia libertina" },
              { src: "/images/apero-libertin.webp", alt: "Aperitivo libertino con giochi" },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Prova i Giochi AKOKY</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Accedi ai giochi della community e anima le tue serate.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Accedi ai Giochi →</a>
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

export default GiochiIt;
