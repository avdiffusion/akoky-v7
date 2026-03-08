import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Cos'è il libertinismo?", answer: "Il libertinismo è una pratica sessuale e relazionale che consiste nell'esplorare la sessualità al di fuori della coppia monogama tradizionale, sempre con il consenso libero e informato di tutti i partecipanti." },
  { question: "Il libertinismo è pericoloso?", answer: "No, a patto che le pratiche siano consensuali, discusse apertamente e vissute con rispetto reciproco. Strutture come AKOKY garantiscono un ambiente sicuro." },
  { question: "Bisogna essere in coppia per praticare il libertinismo?", answer: "No. Coppie e single sono i benvenuti. Le donne single hanno generalmente un accesso privilegiato ai club e agli eventi libertini." },
  { question: "Come iniziare nel libertinismo?", answer: "Parlando apertamente con il tuo partner, definendo i tuoi limiti e scoprendo progressivamente attraverso piattaforme come AKOKY." },
  { question: "Il libertinismo è legale?", answer: "Sì. In Italia e in Europa, tutte le pratiche tra adulti consenzienti sono legali. I club libertini operano nel pieno rispetto della legge." },
];

const PRACTICES = [
  { title: "Pratiche Soft", desc: "Esperienze che escludono la penetrazione con altri partner. Scambi di carezze, giochi sensuali e complicità in presenza di altre persone. Spesso il primo passo per le coppie principianti.", icon: "🌸" },
  { title: "Lo Scambio di Coppie", desc: "Due coppie scambiano i loro partner per momenti intimi. Si basa su un accordo reciproco tra le quattro persone coinvolte. La forma più conosciuta del libertinismo.", icon: "🔄" },
  { title: "Il Candaulismo", desc: "Uno dei membri della coppia prova piacere nel vedere o sapere che il proprio partner ha rapporti con un'altra persona. Piacere asimmetrico e voyeuristico.", icon: "👁️" },
  { title: "Il Triolismo", desc: "Rapporto sessuale tra tre persone. Può trattarsi di una coppia che invita una terza persona, o di tre persone che interagiscono senza gerarchia particolare.", icon: "🔺" },
  { title: "Le Relazioni Aperte", desc: "I partner si autorizzano reciprocamente ad avere rapporti con altre persone. Le regole variano, ma il principio fondamentale è la trasparenza totale.", icon: "🌍" },
];

const AUDIENCE = [
  { icon: "💑", title: "Coppie Stabili", desc: "La maggioranza dei praticanti, alla ricerca di nuove esperienze e complicità rafforzata." },
  { icon: "👥", title: "Single", desc: "Uomini e donne hanno il loro posto in questo mondo, con accessi variabili secondo le strutture." },
  { icon: "🌈", title: "Tutte le Orientazioni", desc: "Eterosessuale, bisessuale, omosessuale o pansessuale: la diversità è una ricchezza." },
];

const LibertinismoIt = () => (
  <>
    <MetaTags title="Libertinismo Moderno 2026 | Guida Completa, Pratiche ed Etica — AKOKY" description="Scopri il libertinismo oggi: definizione, pratiche (soft, hard, scambio), consenso ed evoluzione culturale. Guida completa per coppie e single." canonical="https://akoky.com/it/libertinismo" lang="it" ogImage="/images/libertinage-cover.webp" />
    <HreflangTags slug="libertinismo" />
    <ContentPageLayout lang="it" title="Libertinismo Moderno 2026 | Guida Completa" description="Scopri il libertinismo oggi." canonical="https://akoky.com/it/libertinismo" heroTitle="Il Libertinismo Moderno: Definizione, Pratiche e Consenso" heroSubtitle="Scopri questo universo nel 2026: pratiche rispettose, evoluzione culturale e chiavi per un'esplorazione consapevole." heroImage="/images/libertinage-cover.webp" breadcrumb={[{ label: "Il Libertinismo Moderno" }]} faq={FAQ}>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "1.5M", label: "Membri attivi" },
              { value: "120+", label: "Club verificati" },
              { value: "300", label: "Eventi/mese" },
            ].map((s) => (
              <div key={s.label} className="group p-4 rounded-2xl border border-border bg-card/60 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <p className="text-3xl md:text-4xl font-black text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-foreground font-display">Cos'è il Libertinismo Oggi?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Questo stile di vita è spesso circondato da fantasie, idee preconcette e rappresentazioni parziali. Lontano dai cliché, il <strong className="text-foreground">libertinismo moderno</strong> è prima di tutto un approccio libero, consensuale e consapevole, basato sul dialogo, il rispetto e la fiducia reciproca.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">Storicamente, il termine "libertino" designava una persona emancipata dalle regole morali o religiose del suo tempo. Oggi questa filosofia designa una <strong className="text-foreground">pratica sessuale e relazionale</strong> dove l'esplorazione avviene sempre con il consenso di tutti i partecipanti.</p>
        </div>
      </section>

      {/* Practices */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">Le Diverse Forme di Pratica</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Ogni pratica risponde a desideri diversi. Scopri il <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico completo</Link> per approfondire.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICES.map((p) => (
              <div key={p.title} className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{p.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consent */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 font-display">Il Consenso: Fondamento di Tutto</h2>
          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">Il consenso è la <strong className="text-foreground">base di ogni esplorazione</strong>. Senza consenso libero, informato ed entusiasta, non può esserci pratica sana.</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { emoji: "🚫", text: "Il silenzio NON è consenso" },
                { emoji: "⏸️", text: "L'esitazione NON è consenso" },
                { emoji: "✅", text: "Solo un SÌ chiaro e entusiasta è consenso" },
              ].map((c) => (
                <div key={c.text} className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border">
                  <span className="text-xl shrink-0">{c.emoji}</span>
                  <p className="text-sm text-foreground font-medium">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 px-4 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-10 font-display">A Chi Si Rivolge?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {AUDIENCE.map((a) => (
              <div key={a.title} className="group p-6 rounded-2xl border border-border bg-card/50 text-center hover:border-primary/30 hover:shadow-lg transition-all">
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{a.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-black text-foreground font-display">Dove Vivere il Libertinismo in Italia?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">L'Italia offre una scena libertina ricca e diversificata: <Link to="/it/club-libertini" className="text-primary hover:underline font-semibold">club libertini</Link> a Milano, Roma, Torino e Bologna, <Link to="/it/saune-libertine" className="text-primary hover:underline font-semibold">saune libertine</Link> in tutta la penisola e <Link to="/it/eventi" className="text-primary hover:underline font-semibold">eventi esclusivi</Link> ogni mese.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 font-display">Esplora il Libertinismo con AKOKY</h2>
              <p className="text-muted-foreground text-lg mb-8">Iscrizione gratuita. 1,5 milioni di membri, 120+ club verificati, 300+ eventi al mese.</p>
              <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all inline-block">Iscriviti Gratuitamente →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Risorse per Approfondire</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida pratica per i primi passi." },
              { href: "/it/lessico-libertino", icon: "📘", title: "Lessico Libertino", desc: "200+ termini dalla A alla Z." },
              { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Directory dei club verificati." },
              { href: "/it/attualita-libertine", icon: "📰", title: "Attualità", desc: "Tendenze e notizie 2026." },
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

export default LibertinismoIt;
