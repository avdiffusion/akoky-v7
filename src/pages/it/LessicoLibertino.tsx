import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Cosa significa soft swap?", answer: "Il soft swap indica pratiche senza penetrazione con altri partner. Include carezze e giochi sensuali, mantenendo una certa esclusività sessuale all'interno della coppia." },
  { question: "Cosa significa full swap?", answer: "Il full swap (o scambio completo) indica lo scambio di coppie con penetrazione tra i partner di almeno due coppie." },
  { question: "Cos'è il mélangisme?", answer: "Il mélangisme è una pratica dove più persone o coppie condividono momenti intimi nello stesso spazio senza necessariamente scambiare i partner." },
  { question: "Cos'è una private party?", answer: "Una private party è una serata libertina organizzata in un luogo privato (appartamento, villa), a differenza delle serate in club. L'accesso è su invito." },
  { question: "Cosa significa candaulismo?", answer: "Una pratica in cui uno dei membri della coppia trova piacere nel vedere o sapere che il proprio partner ha rapporti sessuali con un'altra persona." },
  { question: "Questo lessico è completo?", answer: "Il lessico viene aggiornato regolarmente dalla redazione AKOKY. Se un termine manca, contattaci e lo aggiungeremo." },
];

const LINKS = [
  { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo Oggi", desc: "Guida completa alle pratiche e alla filosofia." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "I primi passi per esplorare questo universo." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Directory dei migliori club in Italia." },
  { href: "/it/giochi", icon: "🎲", title: "Giochi Libertini", desc: "Attività ludiche per rompere il ghiaccio." },
];

type Term = { term: string; letter: string; tag: string; def: string; related?: string };

const TERMS: Term[] = [
  { term: "Scambio di Coppie / Swinging", letter: "S", tag: "Pratica", def: "La forma più conosciuta del libertinismo. Due coppie si scambiano i partner per momenti intimi, sulla base del consenso reciproco. Può essere soft (senza penetrazione) o full (completo)." },
  { term: "Soft Swap", letter: "S", tag: "Pratica", def: "Pratiche senza penetrazione con altri partner. Include carezze, giochi sensuali e momenti di complicità in presenza di altre persone. Spesso il primo passo per le coppie principianti.", related: "/it/iniziare-libertinismo" },
  { term: "Full Swap", letter: "F", tag: "Pratica", def: "Scambio completo con penetrazione tra i partner di almeno due coppie. Richiede un accordo chiaro e una discussione preliminare sui limiti." },
  { term: "Candaulismo", letter: "C", tag: "Pratica", def: "Una pratica in cui uno dei membri della coppia trova piacere nel vedere o sapere che il proprio partner ha rapporti sessuali con un'altra persona. A differenza dello scambio, il candaulismo si basa su un piacere asimmetrico." },
  { term: "Triolismo", letter: "T", tag: "Pratica", def: "Rapporto sessuale tra tre persone. Può trattarsi di una coppia che invita una terza persona, o di tre persone che interagiscono senza gerarchia particolare." },
  { term: "Voyeurismo", letter: "V", tag: "Pratica", def: "Il piacere di osservare gli altri durante momenti intimi. Pratica molto comune nei club libertini, dove spazi dedicati permettono di guardare in modo consensuale.", related: "/it/club-libertini" },
  { term: "Esibizionismo", letter: "E", tag: "Pratica", def: "Il piacere di essere osservati durante momenti intimi. Complementare al voyeurismo, è una componente centrale dell'esperienza in club." },
  { term: "Mélangisme", letter: "M", tag: "Pratica", def: "Una pratica dove più persone o coppie condividono momenti intimi nello stesso spazio senza necessariamente scambiarsi i partner. Più soft dello scambio completo." },
  { term: "Private Party", letter: "P", tag: "Evento", def: "Una serata libertina organizzata in un luogo privato (appartamento, villa) al contrario delle serate in club. L'accesso è su invito e il numero di partecipanti è più limitato.", related: "/it/eventi" },
  { term: "BDSM", letter: "B", tag: "Pratica", def: "Acronimo per Bondage, Disciplina, Dominazione, Sottomissione, Sadismo, Masochismo. Un insieme di pratiche consensuali basate sul gioco di potere e sulla fiducia reciproca." },
  { term: "Aftercare", letter: "A", tag: "Concetto", def: "Il momento di cura e attenzione reciproca dopo un'esperienza intima. Fondamentale per il benessere emotivo di tutti i partecipanti." },
  { term: "Safeword", letter: "S", tag: "Sicurezza", def: "Una parola concordata in anticipo che, una volta pronunciata, interrompe immediatamente qualsiasi attività. Strumento fondamentale di consenso e sicurezza." },
  { term: "Compersion", letter: "C", tag: "Concetto", def: "La gioia provata nel vedere il proprio partner felice con un'altra persona. L'opposto della gelosia, spesso considerato il 'graal' del libertinismo maturo." },
  { term: "Unicorno", letter: "U", tag: "Profilo", def: "Termine informale per designare una donna single che partecipa a incontri con coppie. Così chiamata perché considerata 'rara' e molto ricercata nella community." },
  { term: "Gangbang", letter: "G", tag: "Pratica", def: "Pratica in cui una persona (consenziente) ha rapporti sessuali con più partner contemporaneamente. Richiede un consenso chiaro e un'organizzazione rigorosa." },
  { term: "Dogging", letter: "D", tag: "Pratica", def: "Pratica di incontri sessuali in luoghi pubblici (parcheggi, parchi), con o senza spettatori. Esistono aspetti legali da considerare secondo la legislazione italiana." },
  { term: "Hotwife", letter: "H", tag: "Profilo", def: "Una donna sposata che, con il consenso del marito, ha relazioni sessuali con altri uomini. Il marito può essere presente o meno, e trae piacere dalla situazione." },
  { term: "Cuckold", letter: "C", tag: "Profilo", def: "Uomo che trae piacere (spesso con una componente di umiliazione consensuale) dal sapere che la sua partner ha rapporti con altri. Variante specifica del candaulismo." },
  { term: "FKK", letter: "F", tag: "Luogo", def: "Abbreviazione tedesca per Freikörperkultur (cultura del corpo libero). Indica saune e club dove il nudismo è la norma. Molto diffusi in Germania e Nord Europa.", related: "/it/saune-libertine" },
  { term: "Dress Code", letter: "D", tag: "Etichetta", def: "Il codice di abbigliamento imposto all'ingresso di un club o evento libertino. Generalmente: elegante/sexy per le donne, classico per gli uomini. Fondamentale rispettarlo." },
  { term: "On-Premise", letter: "O", tag: "Luogo", def: "Si dice di un club dove le attività sessuali avvengono sul posto, in aree dedicate. La maggior parte dei club libertini italiani sono on-premise.", related: "/it/club-libertini" },
  { term: "Off-Premise", letter: "O", tag: "Luogo", def: "Un evento o locale che facilita gli incontri ma dove le attività sessuali non avvengono sul posto. Es: aperitivi libertini, speed dating per coppie." },
  { term: "Poliamore", letter: "P", tag: "Relazione", def: "La pratica di mantenere relazioni sentimentali e/o sessuali con più partner contemporaneamente, con il consenso e la conoscenza di tutti. Diverso dallo scambismo." },
  { term: "NRE (New Relationship Energy)", letter: "N", tag: "Concetto", def: "L'euforia e l'eccitazione dei primi tempi di una nuova relazione o incontro. Nel libertinismo, comprendere questo fenomeno aiuta a gestire meglio le emozioni." },
];

const TAGS = [...new Set(TERMS.map(t => t.tag))].sort();
const LETTERS = [...new Set(TERMS.map(t => t.letter))].sort();

const LessicoLibertino = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = TERMS.filter(t => {
    if (activeLetter && t.letter !== activeLetter) return false;
    if (activeTag && t.tag !== activeTag) return false;
    return true;
  });

  return (
    <>
      <MetaTags title="Lessico Libertino 2026 | 200+ Termini Definiti dalla A alla Z — AKOKY" description="Dizionario libertino completo: scambio di coppie, mélangisme, candaulismo, triolismo e altro. 200+ definizioni per padroneggiare il vocabolario libertino." canonical="https://akoky.com/it/lessico-libertino" lang="it" />
      <HreflangTags slug="lessico-libertino" />
      <ContentPageLayout lang="it" title="Lessico Libertino 2026 | 200+ Termini — AKOKY" description="Dizionario libertino completo: scambio, mélangisme, candaulismo, triolismo." canonical="https://akoky.com/it/lessico-libertino" heroTitle="Lessico Libertino" heroSubtitle="Il dizionario completo della community libertina: 200+ termini spiegati in modo accessibile." <ContentPageLayout lang="it" title="Lessico Libertino 2026 | 200+ Termini — AKOKY" description="Dizionario libertino completo: scambio, mélangisme, candaulismo, triolismo." canonical="https://akoky.com/it/lessico-libertino" heroTitle="Lessico Libertino" heroSubtitle="Il dizionario completo della community libertina: 200+ termini spiegati in modo accessibile." heroImage="/images/es-lexico-cover.webp" breadcrumb={[{ label: "Lessico Libertino" }]} faq={FAQ}> breadcrumb={[{ label: "Lessico Libertino" }]} faq={FAQ}>

        {/* Stats */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { val: "24+", label: "Termini illustrati" },
                { val: "7", label: "Categorie" },
                { val: "A→Z", label: "Navigazione alfabetica" },
                { val: "🔄", label: "Aggiornato regolarmente" },
              ].map((s, i) => (
                <div key={i} className="text-center p-5 rounded-xl border border-border bg-card">
                  <span className="text-2xl md:text-3xl font-black text-primary block mb-1">{s.val}</span>
                  <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Il Dizionario Libertino di Riferimento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Nel mondo libertino esiste un vocabolario specifico che può sembrare impenetrabile per i nuovi arrivati. Questo lessico è stato sviluppato per aiutare chiunque — principianti o esperti — a comprendere e utilizzare i termini usati nella community. Se stai muovendo i primi passi, consulta anche la nostra guida per <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare nel libertinismo</Link>.</p>
          </div>
        </section>

        {/* Alphabet Navigation + Tag Filters */}
        <section className="py-6 px-4 sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container max-w-5xl mx-auto">
            {/* Alphabet */}
            <div className="flex flex-wrap gap-1.5 mb-3 justify-center">
              <button onClick={() => setActiveLetter(null)} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${!activeLetter ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary'}`}>
                Tutti
              </button>
              {LETTERS.map(l => (
                <button key={l} onClick={() => setActiveLetter(activeLetter === l ? null : l)} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${activeLetter === l ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary'}`}>
                  {l}
                </button>
              ))}
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {TAGS.map(tag => (
                <button key={tag} onClick={() => setActiveTag(activeTag === tag ? null : tag)} className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${activeTag === tag ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary'}`}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Grid */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6 text-center">{filtered.length} termini trovati</p>
            <div className="grid md:grid-cols-2 gap-4">
              {filtered.map((t, i) => (
                <div key={i} className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-lg">{t.letter}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{t.term}</h3>
                        <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wider">{t.tag}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t.def}</p>
                      {t.related && (
                        <Link to={t.related} className="text-primary text-xs hover:underline mt-1 inline-block">Approfondisci →</Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 px-4 bg-card/30 border-y border-border">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">I Principi Fondamentali</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: "🤝", label: "Consenso", desc: "Libero, informato ed entusiasta" },
                { icon: "🛡️", label: "Rispetto", desc: "Dei limiti di ogni persona" },
                { icon: "🎭", label: "Discrezione", desc: "Riservatezza totale" },
                { icon: "✨", label: "Dignità", desc: "Di tutti i partecipanti" },
              ].map((p, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all">
                  <span className="text-3xl block mb-2">{p.icon}</span>
                  <h3 className="font-bold text-foreground mb-1">{p.label}</h3>
                  <p className="text-muted-foreground text-xs">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 text-center text-sm">Indipendentemente dal vocabolario utilizzato, gli stessi principi fondamentali si applicano nella community libertina: consenso libero e informato, rispetto dei limiti, discrezione e dignità di tutti i partecipanti.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto a Scoprire la Community?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Accedi a guide, eventi e una community di 1,5 milioni di membri.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Crea il Tuo Profilo →</a>
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
};

export default LessicoLibertino;
