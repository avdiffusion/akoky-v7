import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Bisogna essere in coppia per iniziare?", answer: "No. Single e coppie sono ugualmente i benvenuti. Le donne single hanno accesso privilegiato a molti club ed eventi." },
  { question: "Come gestire la gelosia?", answer: "La comunicazione è fondamentale. Parla dei tuoi limiti prima, durante e dopo ogni esperienza. La gelosia è normale e deve essere affrontata apertamente con il tuo partner." },
  { question: "È obbligatorio partecipare in un club?", answer: "Assolutamente no. La regola fondamentale è che nessuno è obbligato a fare nulla. Il diritto di rifiutare è assoluto e rispettato da tutti." },
  { question: "Come trovare club libertini vicino a me?", answer: "AKOKY offre un directory di 120+ club verificati in Italia e in Europa con schede dettagliate, foto e recensioni della community." },
];

const LINKS = [
  { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo Oggi", desc: "Definizione, pratiche e consenso nel 2026." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Trova il club giusto per la tua prima visita." },
  { href: "/it/lessico-libertino", icon: "📘", title: "Lessico Libertino", desc: "200+ termini spiegati in modo semplice." },
  { href: "/it/giochi", icon: "🎲", title: "Giochi Libertini", desc: "Rompere il ghiaccio con attività divertenti." },
];

const IniziareLibertinismoIt = () => (
  <>
    <MetaTags title="Iniziare nel Libertinismo | Guida Completa Coppie e Single — AKOKY" description="Guida completa per iniziare nel libertinismo: primi passi, consenso, scegliere il club, gestire la gelosia. Consigli per coppie e single." canonical="https://akoky.com/it/iniziare-libertinismo" lang="it" />
    <HreflangTags slug="iniziare-libertinismo" />
    <ContentPageLayout lang="it" title="Iniziare nel Libertinismo | Guida Completa Coppie e Single — AKOKY" description="Guida completa per iniziare nel libertinismo." canonical="https://akoky.com/it/iniziare-libertinismo" heroTitle="Iniziare nel Libertinismo, al Tuo Ritmo" heroSubtitle="Una guida pratica e rispettosa per scoprire questo universo passo dopo passo, in coppia o da solo/a." breadcrumb={[{ label: "Iniziare nel Libertinismo" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Prima di Iniziare: Le Domande Essenziali</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Avventurarsi nel libertinismo richiede riflessione e comunicazione. Prima di fare il primo passo, è fondamentale che tu e il tuo partner vi poniate alcune domande chiave: perché vogliamo esplorare questo? Quali sono i nostri limiti? Cosa speriamo di ottenere da questa esperienza?</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">I Tuoi Desideri</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Identificare cosa ti attrae davvero del <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo</Link> è il primo passo. È la fantasia di vedere il tuo partner con un'altra persona? La possibilità di conoscere gente nuova? La libertà di esplorare la tua sessualità senza tabù?</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">I Tuoi Limiti</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Definire i tuoi limiti prima di qualsiasi esperienza è cruciale. Quali pratiche sei disposto/a a esplorare e quali no? Con che tipo di persone? In quali contesti? Discutere questi limiti apertamente con il tuo partner previene incomprensioni e protegge la relazione.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Primi Passi Pratici</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📱 Scoprire Online Prima</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La maggior parte delle persone inizia esplorando online. Piattaforme come <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link> permettono di leggere testimonianze, fare domande in forma anonima e connettersi con la community senza pressioni.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🏛️ La Prima Visita a un Club</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Per la tua prima visita a un <Link to="/it/club-libertini" className="text-primary hover:underline">club libertino</Link>, prenota in anticipo. Arriva presto quando l'atmosfera è più tranquilla. Esplora prima gli spazi vestiti senza obbligo di partecipazione. Ricorda: hai il diritto assoluto di dire no in qualsiasi momento.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🤝 I Codici Fondamentali</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Nel mondo libertino esistono regole non scritte che ogni principiante deve conoscere: non insistere mai di fronte a un rifiuto, non toccare senza permesso esplicito, rispettare la privacy degli altri e mantenere la discrezione fuori dagli spazi libertini. Per approfondire, consulta il nostro <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Gestire la Gelosia</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">La gelosia è una reazione umana completamente normale. Condividerla con il partner e parlarne prima, durante e dopo le esperienze permette di gestirla in modo sano. Non reprimere queste emozioni: sono informazioni preziose sui tuoi limiti reali.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Gli Eventi per Principianti</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organizza regolarmente <Link to="/it/eventi" className="text-primary hover:underline">eventi specifici per i nuovi arrivati</Link>. Atmosfera accogliente, senza pressione, con membri esperti disponibili a guidare i principianti. Il formato ideale per una prima esperienza serena.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Inizia la Tua Avventura</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita, guide dedicate e una community accogliente che ti accompagna passo dopo passo.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Crea il Tuo Profilo Gratuito →</a>
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

export default IniziareLibertinismoIt;
