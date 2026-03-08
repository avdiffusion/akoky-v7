import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Bisogna essere in coppia per iniziare?", answer: "No. Single e coppie sono ugualmente i benvenuti. Le donne single hanno accesso privilegiato a molti club ed eventi." },
  { question: "Come gestire la gelosia?", answer: "La comunicazione è fondamentale. Parla dei tuoi limiti prima, durante e dopo ogni esperienza. La gelosia è normale e deve essere affrontata apertamente." },
  { question: "È obbligatorio partecipare in un club?", answer: "Assolutamente no. Nessuno è obbligato a fare nulla. Il diritto di rifiutare è assoluto e rispettato da tutti." },
  { question: "Come trovare club libertini vicino a me?", answer: "AKOKY offre un directory di 120+ club verificati in Italia e in Europa con schede dettagliate, foto e recensioni della community." },
  { question: "Posso scoprire il libertinismo senza andare in un club?", answer: "Assolutamente. Aperitivi libertini, eventi soft, discussioni online e live permettono di scoprire l'atmosfera senza pressione." },
  { question: "La gelosia è normale?", answer: "Sì, è molto frequente all'inizio. L'importante è parlarne apertamente con il partner e procedere progressivamente." },
];

const QUESTIONS = [
  { icon: "💭", title: "I Tuoi Desideri", desc: "Cosa ti attrae davvero? La fantasia di vedere il tuo partner? Conoscere gente nuova? Esplorare senza tabù?" },
  { icon: "🛡️", title: "I Tuoi Limiti", desc: "Quali pratiche sei disposto/a a esplorare? Con che tipo di persone? In quali contesti? Definiscili prima." },
  { icon: "✨", title: "Le Tue Aspettative", desc: "Cerchi piacere, novità, connessione umana, complicità rafforzata nella coppia?" },
  { icon: "💬", title: "Comunicazione", desc: "Se sei in coppia, avete affrontato il discorso apertamente? La trasparenza è fondamentale." },
  { icon: "⏳", title: "Il Tuo Ritmo", desc: "Il libertinismo non è una gara. Avanza senza pressione, al tuo passo." },
  { icon: "❤️", title: "Le Tue Emozioni", desc: "Sei pronto/a a gestire emozioni inattese come la gelosia o l'eccitazione?" },
];

const STEPS = [
  { step: "1", title: "Scoperta Online", desc: "Inizia esplorando online. Piattaforme come AKOKY permettono di leggere testimonianze, fare domande in anonimo e connettersi con la community senza pressione.", icon: "📱" },
  { step: "2", title: "Aperitivi Libertini", desc: "Eventi conviviali perfetti per una prima immersione. Atmosfera rilassata, nessun obbligo. Ideale per conoscere la community.", icon: "🥂" },
  { step: "3", title: "Eventi Soft", desc: "Appositamente pensati per i principianti, con atmosfera soft e accogliente. Chiaramente identificati nel calendario AKOKY.", icon: "🌸" },
  { step: "4", title: "Prima Visita in Club", desc: "Prenota in anticipo, arriva presto. Esplora gli spazi vestiti senza obbligo di partecipazione. Hai il diritto assoluto di dire no in qualsiasi momento.", icon: "🏛️" },
];

const SAFETY = [
  { icon: "🛡️", title: "Strumenti di Sicurezza", desc: "Spazi come safe.akoky.com esistono per informare e accompagnare." },
  { icon: "🚫", title: "Il Diritto di Dire No", desc: "In qualsiasi momento puoi rifiutare. Il tuo consenso è essenziale." },
  { icon: "👂", title: "Ascolta il Partner", desc: "Verifica regolarmente che il tuo partner stia bene e si senta a proprio agio." },
  { icon: "🚪", title: "Andarsene in Qualsiasi Momento", desc: "Nessun obbligo di restare se non ti senti a tuo agio." },
  { icon: "🏛️", title: "Luoghi Sicuri", desc: "Privilegia club riconosciuti ed eventi strutturati e verificati." },
  { icon: "🕶️", title: "Proteggi la Tua Identità", desc: "Usa uno pseudonimo, resta discreto sulla tua vita privata." },
];

const IniziareLibertinismoIt = () => (
  <>
    <MetaTags title="Iniziare nel Libertinismo 2026 | Guida Completa Coppie e Single — AKOKY" description="Guida completa per iniziare nel libertinismo: primi passi, consenso, scegliere il club, gestire la gelosia. Consigli pratici per coppie e single." canonical="https://akoky.com/it/iniziare-libertinismo" lang="it" ogImage="/images/debuter-libertinage-cover.webp" />
    <HreflangTags slug="iniziare-libertinismo" />
    <ContentPageLayout lang="it" title="Iniziare nel Libertinismo 2026 | Guida Completa" description="Guida completa per iniziare nel libertinismo." canonical="https://akoky.com/it/iniziare-libertinismo" heroTitle="Iniziare nel Libertinismo, al Tuo Ritmo" heroSubtitle="Una guida pratica e rispettosa per scoprire questo universo passo dopo passo, in coppia o da solo/a." heroImage="/images/debuter-libertinage-cover.webp" breadcrumb={[{ label: "Iniziare nel Libertinismo" }]} faq={FAQ}>

      {/* Quick links */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 font-display">Inizia la Tua Esplorazione</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">Il libertinismo non inizia con un club o un incontro, ma con la <strong className="text-foreground">comprensione, la riflessione e il rispetto dei propri limiti</strong>.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: "/it/libertinismo", icon: "📘", title: "Capire il libertinismo", desc: "Leggi la guida completa →" },
              { href: "/it/lessico-libertino", icon: "❓", title: "Lessico libertino", desc: "200+ termini spiegati →" },
              { href: "/it/club-libertini", icon: "🏛️", title: "Prima esperienza", desc: "Scegliere il club giusto →" },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
                <h3 className="text-foreground font-bold mb-1">{l.icon} {l.title}</h3>
                <p className="text-muted-foreground text-sm">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">Le Domande Essenziali da Porsi</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Avventurarsi nel libertinismo richiede riflessione e comunicazione. Prima di fare il primo passo, poniti queste domande chiave.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUESTIONS.map((q) => (
              <div key={q.title} className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{q.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{q.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-10 font-display">Le Prime Esperienze Possibili</h2>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-5 items-start group">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jealousy */}
      <section className="py-14 px-4 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-foreground mb-6 font-display">Gestire la Gelosia</h2>
          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">La gelosia è una reazione umana completamente <strong className="text-foreground">normale</strong>. Condividerla con il partner e parlarne prima, durante e dopo le esperienze permette di gestirla in modo sano.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Non reprimere queste emozioni: sono <strong className="text-foreground">informazioni preziose sui tuoi limiti reali</strong>. Molte coppie trovano che affrontare la gelosia insieme rafforzi la loro relazione.</p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4 font-display">Sicurezza, Consenso e Rispetto</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Le regole fondamentali per un'esperienza serena e rispettosa.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SAFETY.map((s) => (
              <div key={s.title} className="group p-5 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all">
                <span className="text-2xl block mb-2">{s.icon}</span>
                <h3 className="font-bold text-foreground mb-1 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginners events */}
      <section className="py-14 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-black text-foreground font-display">Gli Eventi per Principianti</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">AKOKY organizza regolarmente <Link to="/it/eventi" className="text-primary hover:underline font-semibold">eventi specifici per i nuovi arrivati</Link>. Atmosfera accogliente, senza pressione, con membri esperti disponibili a guidare i principianti. Il formato ideale per una prima esperienza serena.</p>
          <p className="text-muted-foreground text-lg leading-relaxed">I codici fondamentali del mondo libertino: <strong className="text-foreground">non insistere mai di fronte a un rifiuto</strong>, non toccare senza permesso esplicito, rispettare la privacy degli altri e mantenere la discrezione fuori dagli spazi libertini. Per approfondire, consulta il nostro <Link to="/it/lessico-libertino" className="text-primary hover:underline font-semibold">lessico libertino</Link>.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 font-display">Inizia la Tua Avventura</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Iscrizione gratuita, guide dedicate e una community accogliente che ti accompagna passo dopo passo.</p>
              <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all inline-block">Crea il Tuo Profilo Gratuito →</a>
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
              { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo Oggi", desc: "Definizione, pratiche e consenso." },
              { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Trova il club giusto per la tua prima visita." },
              { href: "/it/lessico-libertino", icon: "📘", title: "Lessico Libertino", desc: "200+ termini spiegati semplicemente." },
              { href: "/it/giochi", icon: "🎲", title: "Giochi Libertini", desc: "Rompere il ghiaccio con attività divertenti." },
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

export default IniziareLibertinismoIt;
