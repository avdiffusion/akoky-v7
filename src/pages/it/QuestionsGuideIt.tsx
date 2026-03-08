import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "È obbligatorio fare qualcosa in un club libertino?", answer: "No. Il diritto di dire no è assoluto. Molte coppie osservano solo alla prima visita. Nessuno può obbligarti a nulla." },
  { question: "Bisogna essere in coppia per praticare il libertinismo?", answer: "No. Donne single sono molto benvenute ovunque. Uomini single sono accettati sotto condizioni in molti club ed eventi." },
  { question: "Il libertinismo è pericoloso?", answer: "No, se praticato con consenso e comunicazione. La sicurezza è al centro di ogni pratica sana. I club su AKOKY sono verificati." },
  { question: "Come trovare coppie e single vicino a me?", answer: "AKOKY riunisce 1,5 milioni di membri in Europa. Crea il tuo profilo gratuito e usa la geolocalizzazione per trovare persone vicine." },
  { question: "Quanto costa l'ingresso in un club?", answer: "Tra 20€ e 80€ a coppia a seconda del club e del giorno. Donne single: spesso gratuito o ridotto." },
  { question: "Che dress code portare?", answer: "Controlla la scheda del club su AKOKY. Generalmente elegante per gli uomini, sexy o lingerie per le donne." },
  { question: "Come gestire la gelosia nel libertinismo?", answer: "La comunicazione è fondamentale. Parla dei tuoi limiti prima, durante e dopo ogni esperienza. La gelosia è normale e deve essere affrontata." },
  { question: "Gli eventi AKOKY sono sicuri?", answer: "Tutti gli eventi rispettano un codice etico rigoroso: consenso esplicito, discrezione, moderazione attiva e rispetto dei limiti." },
];

const LINKS = [
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida pratica passo dopo passo." },
  { href: "/it/lessico-libertino", icon: "📘", title: "Lessico Libertino", desc: "200+ termini spiegati in modo semplice." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Trova il club giusto per te." },
  { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo Oggi", desc: "Definizione, pratiche e consenso." },
];

const QuestionsGuideIt = () => (
  <>
    <MetaTags title="Domande Frequenti per Principianti nel Libertinismo — AKOKY Italia" description="Le 50 domande più frequenti dei principianti sul libertinismo: funzionamento dei club, sicurezza, vocabolario, prezzi e consigli pratici." canonical="https://akoky.com/it/domande-principianti-guida" lang="it" />
    <HreflangTags slug="domande-principianti-guida" />
    <ContentPageLayout lang="it" title="Domande Frequenti per Principianti — AKOKY" description="Tutte le risposte per i principianti del libertinismo." canonical="https://akoky.com/it/domande-principianti-guida" heroTitle="Domande Frequenti per Principianti" heroSubtitle="Le risposte complete e senza tabù alle domande che tutti si pongono scoprendo il libertinismo." breadcrumb={[{ label: "Domande per Principianti" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Le Domande che Tutti Si Pongono</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Stai pensando di avvicinarti al <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo</Link> ma hai mille domande? È perfettamente normale. Qui troverai risposte oneste e senza giudizi alle domande più frequenti dei principianti.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Primi Passi</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Come iniziare?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il primo passo è la comunicazione con il tuo partner (se sei in coppia). Parlate apertamente dei vostri desideri e limiti. Poi, esplorate online tramite piattaforme come <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link>: leggi testimonianze, consulta il <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico</Link> e familiarizza con i codici. Consulta la nostra guida completa per <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare nel libertinismo</Link>.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Dove andare per la prima volta?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Per una prima esperienza, consigliamo un <Link to="/it/club-libertini" className="text-primary hover:underline">club libertino</Link> verificato o una <Link to="/it/saune-libertine" className="text-primary hover:underline">sauna libertina</Link> (atmosfera più rilassata). Prenota in anticipo, arriva presto e prenditi il tempo di esplorare gli spazi vestiti prima di decidere cosa fare.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Bisogna essere belli o giovani?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Assolutamente no. Il libertinismo è aperto a tutti, indipendentemente dall'età, dalla corporatura o dall'aspetto fisico. Ciò che conta è il rispetto, la simpatia e l'igiene.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Sicurezza e Rispetto</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Come funziona il consenso?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il consenso è la base di tutto. Deve essere esplicito, informato e revocabile in qualsiasi momento. Non toccare mai qualcuno senza il suo permesso esplicito. Un "no" è sempre definitivo e non richiede spiegazioni.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Come proteggersi?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">I preservativi sono obbligatori nella maggior parte dei club e fortemente consigliati in ogni contesto. I club verificati su AKOKY ne forniscono gratuitamente. La protezione è una responsabilità condivisa.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">La discrezione è garantita?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Sì. La discrezione è un valore fondamentale della community. Le foto sono vietate senza consenso esplicito. Su AKOKY, le opzioni di privacy avanzate proteggono la tua identità.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Vita di Coppia</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Il libertinismo rafforza o distrugge la coppia?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Dipende dalla qualità della comunicazione. Per le coppie che comunicano bene, il libertinismo può rafforzare la complicità e il desiderio reciproco. Per le coppie con problemi preesistenti, può peggiorare la situazione. Parlatene prima.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Come gestire le emozioni dopo una serata?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il "debriefing" dopo ogni esperienza è essenziale. Parlate di cosa vi è piaciuto e di cosa non vi è piaciuto. Siate onesti sulle vostre emozioni. Questo dialogo è ciò che distingue un'esperienza positiva da un problema.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Aspetti Pratici</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Quanto costa frequentare club ed eventi?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">I prezzi variano: 20-80€ per coppia nei club, 15-40€ per persona nelle saune. Le donne single hanno spesso l'ingresso gratuito. Gli <Link to="/it/eventi" className="text-primary hover:underline">eventi AKOKY</Link> hanno prezzi variabili a seconda del formato.</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cosa portare?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Per un club: abbigliamento elegante o sexy, preservativi. Per una sauna: asciugamano, ciabatte. In generale: igiene impeccabile e un atteggiamento rispettoso.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Hai Altre Domande?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscriviti gratuitamente su AKOKY e chiedi alla community. 1,5 milioni di membri pronti ad aiutarti.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Unisciti alla Community →</a>
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

export default QuestionsGuideIt;
