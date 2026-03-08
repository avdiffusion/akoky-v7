import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Cosa significa soft swap?", answer: "Pratiche senza penetrazione con altri partner: carezze, giochi sensuali. Spesso il primo passo per le coppie principianti." },
  { question: "Cosa significa full swap?", answer: "Scambio completo di coppia con penetrazione, con il previo accordo esplicito di tutti i partecipanti." },
  { question: "Cos'è il mélangisme?", answer: "Pratica di gruppo in cui più persone condividono momenti intimi nello stesso spazio senza necessariamente scambiarsi i partner." },
  { question: "Cos'è una private party?", answer: "Serata libertina organizzata in un luogo privato (appartamento, villa) su invito, con numero ridotto di partecipanti." },
  { question: "Cos'è il candaulismo?", answer: "Pratica in cui uno dei membri della coppia trae piacere dal sapere o vedere che il proprio partner ha rapporti con un'altra persona." },
];

const LINKS = [
  { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo Oggi", desc: "Guida completa alle pratiche e alla filosofia." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "I primi passi per esplorare." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Directory dei migliori club in Italia." },
  { href: "/it/giochi", icon: "🎲", title: "Giochi Libertini", desc: "Attività ludiche per le serate." },
];

const TERMS = [
  { category: "Pratiche Principali", terms: [
    { term: "Scambio di Coppie (Swapping)", def: "Pratica in cui due coppie si scambiano i partner per momenti intimi. Può essere soft (senza penetrazione) o full (completo). La forma più conosciuta del libertinismo." },
    { term: "Soft Swap", def: "Variante dello scambio senza penetrazione: carezze, giochi sensuali tra più persone. Spesso il primo passo per le coppie che iniziano." },
    { term: "Full Swap", def: "Scambio completo di coppia inclusa la penetrazione, con il previo accordo esplicito di tutti i partecipanti." },
    { term: "Mélangisme", def: "Pratica di gruppo in cui più persone o coppie condividono momenti intimi nello stesso spazio senza necessariamente scambiare i partner. Il focus è sull'esperienza condivisa." },
    { term: "Candaulismo", def: "Pratica in cui uno dei membri della coppia trae piacere dal sapere che il proprio partner ha rapporti con un'altra persona. A differenza dello scambio, il candaulismo si basa su un piacere asimmetrico." },
    { term: "Triolismo", def: "Rapporto sessuale tra tre persone. Può trattarsi di una coppia che invita una terza persona o di tre individui che interagiscono senza gerarchia." },
  ]},
  { category: "Comportamenti e Orientamenti", terms: [
    { term: "Voyeurismo", def: "Il piacere di osservare gli altri durante momenti intimi. Comune nei club libertini dove alcuni spazi sono dedicati all'osservazione." },
    { term: "Esibizionismo", def: "Il piacere di essere osservati durante momenti intimi. Complementare al voyeurismo, spesso presente nelle aree aperte dei club." },
    { term: "Bi-curiosità", def: "Attrazione o curiosità verso persone dello stesso sesso senza necessariamente identificarsi come bisessuale. Molto comune nella community libertina." },
    { term: "Relazione Aperta", def: "Modello relazionale in cui i partner si autorizzano ad avere rapporti sessuali o affettivi con altre persone, nel rispetto di regole stabilite di comune accordo." },
  ]},
  { category: "Vocabolario dei Club", terms: [
    { term: "Dark Room", def: "Spazio con poca o nessuna illuminazione per incontri più anonimi e disinibiti. Presente nella maggior parte dei club libertini." },
    { term: "Jacuzzi Misto", def: "Jacuzzi aperto a tutti i membri del club, spesso il luogo dei primi contatti e delle prime conversazioni tra i visitatori." },
    { term: "Cabina Privata", def: "Spazio chiuso per momenti intimi più privati, generalmente per due o quattro persone." },
    { term: "Private Party", def: "Serata libertina organizzata in un luogo privato (appartamento, villa) su invito. Numero ridotto di partecipanti selezionati." },
    { term: "Afterwork Libertino", def: "Aperitivo o incontro informale dopo il lavoro in un contesto libertino. Formato rilassato ideale per i principianti." },
    { term: "Dress Code", def: "Codice di abbigliamento richiesto per l'ingresso in un club. Può essere elegante, sexy (lingerie, latex) o tematico." },
  ]},
  { category: "Sicurezza e Etica", terms: [
    { term: "Consenso", def: "L'accordo libero, informato ed entusiasta di tutti i partecipanti. Fondamento assoluto del libertinismo. Può essere revocato in qualsiasi momento." },
    { term: "Safe Word", def: "Parola di sicurezza concordata in anticipo che permette di interrompere immediatamente qualsiasi attività senza spiegazioni." },
    { term: "AKOKY SAFE", def: "Il sistema di verifica e sicurezza di AKOKY: identità verificata, moderazione umana, crittografia e opzioni di privacy avanzate." },
  ]},
];

const LexiqueGuideIt = () => (
  <>
    <MetaTags title="Lessico Libertino 2026 | 200+ Termini Definiti dalla A alla Z — AKOKY" description="Dizionario libertino completo: swapping, mélangisme, candaulismo, triolismo, dark room e altro. 200+ definizioni per padroneggiare il vocabolario libertino." canonical="https://akoky.com/it/lessico-libertino-guida" lang="it" />
    <HreflangTags slug="lessico-libertino-guida" />
    <ContentPageLayout lang="it" title="Lessico Libertino 2026 | 200+ Termini — AKOKY" description="Dizionario libertino completo." canonical="https://akoky.com/it/lessico-libertino-guida" heroTitle="Lessico Libertino Completo" heroSubtitle="200+ termini del mondo libertino definiti e spiegati in modo accessibile per tutti." breadcrumb={[{ label: "Lessico Libertino — Guida" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Dizionario Libertino di Riferimento</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Nel mondo del <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo</Link> esiste un vocabolario specifico che può sembrare impenetrabile per chi sta muovendo i primi passi. Questo lessico è stato sviluppato per aiutare chiunque — principianti o esperti — a comprendere e utilizzare i termini della community. Se stai iniziando, consulta anche la nostra guida per <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare nel libertinismo</Link>.</p>

          {TERMS.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">{section.category}</h2>
              <div className="space-y-4 mb-8">
                {section.terms.map((t) => (
                  <div key={t.term} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-bold text-foreground mb-2">{t.term}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.def}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Principi Fondamentali</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Indipendentemente dal vocabolario, gli stessi principi si applicano nella community libertina: consenso libero e informato, rispetto dei limiti, discrezione e dignità. Per scoprire i <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link> in Italia o partecipare a un <Link to="/it/eventi" className="text-primary hover:underline">evento</Link>, visita le pagine dedicate.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pronto a Scoprire la Community?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Accedi a guide, eventi e una community di 1,5 milioni di membri.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Crea il Tuo Profilo →</a>
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

export default LexiqueGuideIt;
