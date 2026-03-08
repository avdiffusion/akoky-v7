import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Cosa significa soft swap?", answer: "Il soft swap indica pratiche senza penetrazione con altri partner. Include carezze e giochi sensuali, mantenendo una certa esclusività sessuale all'interno della coppia." },
  { question: "Cosa significa full swap?", answer: "Il full swap (o scambio completo) indica lo scambio di coppie con penetrazione tra i partner di almeno due coppie." },
  { question: "Cos'è il mélangisme?", answer: "Il mélangisme è una pratica dove più persone o coppie condividono momenti intimi nello stesso spazio senza necessariamente scambiare i partner." },
  { question: "Cos'è una private party?", answer: "Una private party è una serata libertina organizzata in un luogo privato (appartamento, villa), a differenza delle serate in club. L'accesso è su invito." },
];

const LINKS = [
  { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo Oggi", desc: "Guida completa alle pratiche e alla filosofia." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "I primi passi per esplorare questo universo." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Directory dei migliori club in Italia." },
  { href: "/it/giochi", icon: "🎲", title: "Giochi Libertini", desc: "Attività ludiche per rompere il ghiaccio." },
];

const LessicoLibertino = () => (
  <>
    <MetaTags title="Lessico Libertino 2026 | 200+ Termini Definiti dalla A alla Z — AKOKY" description="Dizionario libertino completo: scambio di coppie, mélangisme, candaulismo, triolismo e altro. 200+ definizioni per padroneggiare il vocabolario libertino." canonical="https://akoky.com/it/lessico-libertino" lang="it" />
    <HreflangTags slug="lessico-libertino" />
    <ContentPageLayout lang="it" title="Lessico Libertino 2026 | 200+ Termini — AKOKY" description="Dizionario libertino completo: scambio, mélangisme, candaulismo, triolismo." canonical="https://akoky.com/it/lessico-libertino" heroTitle="Lessico Libertino" heroSubtitle="Il dizionario completo della community libertina: 200+ termini spiegati in modo accessibile." breadcrumb={[{ label: "Lessico Libertino" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Dizionario Libertino di Riferimento</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Nel mondo libertino esiste un vocabolario specifico che può sembrare impenetrabile per i nuovi arrivati. Questo lessico è stato sviluppato per aiutare chiunque — principianti o esperti — a comprendere e utilizzare i termini usati nella community. Se stai muovendo i primi passi, consulta anche la nostra guida per <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare nel libertinismo</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Termini Chiave</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Scambio di Coppie / Swinging</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Lo scambio di coppie è la forma più conosciuta del <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo</Link>. Due coppie si scambiano i partner per momenti intimi, sulla base del consenso reciproco.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Soft Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Pratiche senza penetrazione con altri partner. Include carezze, giochi sensuali e momenti di complicità in presenza di altre persone. Spesso il primo passo per le coppie principianti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Full Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Scambio completo con penetrazione tra i partner di almeno due coppie. Richiede un accordo chiaro e una discussione preliminare sui limiti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Candaulismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Una pratica in cui uno dei membri della coppia trova piacere nel vedere o sapere che il proprio partner ha rapporti sessuali con un'altra persona. A differenza dello scambio, il candaulismo si basa su un piacere asimmetrico.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Triolismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Rapporto sessuale tra tre persone. Può trattarsi di una coppia che invita una terza persona, o di tre persone che interagiscono senza gerarchia particolare.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Voyeurismo / Esibizionismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il voyeurismo è il piacere di osservare gli altri durante momenti intimi. L'esibizionismo è il contrario: il piacere di essere osservati. Queste pratiche sono comuni nei <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link>.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Private Party</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Una serata libertina organizzata in un luogo privato (appartamento, villa) al contrario delle serate in club. L'accesso è su invito e il numero di partecipanti è più limitato.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Mélangisme</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Una pratica dove più persone o coppie condividono momenti intimi nello stesso spazio senza necessariamente scambiarsi i partner.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Principi Fondamentali</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Indipendentemente dal vocabolario utilizzato, gli stessi principi fondamentali si applicano nella community libertina: consenso libero e informato, rispetto dei limiti, discrezione e dignità di tutti i partecipanti.</p>
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

export default LessicoLibertino;
