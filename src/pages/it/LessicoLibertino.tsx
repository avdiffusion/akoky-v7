import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Cosa significa soft swap?", answer: "Il soft swap indica pratiche senza penetrazione con altri partner. Include carezze e giochi sensuali, mantenendo una certa esclusivit&#224; sessuale all&#39;interno della coppia." },
  { question: "Cosa significa full swap?", answer: "Il full swap (o scambio completo) indica lo scambio di coppie con penetrazione tra i partner di almeno due coppie." },
  { question: "Cos&#39;&#232; il m&#233;langisme?", answer: "Il m&#233;langisme &#232; una pratica dove pi&#249; persone o coppie condividono momenti intimi nello stesso spazio senza necessariamente scambiare i partner." },
  { question: "Cos&#39;&#232; una private party?", answer: "Una private party &#232; una serata libertina organizzata in un luogo privato (appartamento, villa), a differenza delle serate in club. L&#39;accesso &#232; su invito." },
];

const LessicoLibertino = () => (
  <>
    <MetaTags
      title="Lessico Libertino 2026 | 200+ Termini Definiti dalla A alla Z — AKOKY"
      description="Dizionario libertino completo: scambio di coppie, m&#233;langisme, candaulismo, triolismo e altro. 200+ definizioni per padroneggiare il vocabolario libertino."
      canonical="https://akoky.com/it/lessico-libertino"
      lang="it"
    />
    <HreflangTags slug="lessico-libertino" />
    <ContentPageLayout
      lang="it"
      title="Lessico Libertino 2026 | 200+ Termini Definiti dalla A alla Z — AKOKY"
      description="Dizionario libertino completo: scambio di coppie, m&#233;langisme, candaulismo, triolismo e altro."
      canonical="https://akoky.com/it/lessico-libertino"
      heroTitle="Lessico Libertino"
      heroSubtitle="Il dizionario completo della community libertina: 200+ termini spiegati in modo accessibile."
      breadcrumb={[{ label: "Lessico Libertino" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Dizionario Libertino di Riferimento</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Nel mondo libertino esiste un vocabolario specifico che pu&#242; sembrare impenetrabile per i nuovi arrivati. Questo lessico &#232; stato sviluppato per aiutare chiunque — principianti o esperti — a comprendere e utilizzare i termini usati nella community.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Termini Chiave</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Scambio di Coppie / Swinging</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Lo scambio di coppie &#232; la forma pi&#249; conosciuta del libertinismo. Due coppie si scambiano i partner per momenti intimi, sulla base del consenso reciproco di tutte e quattro le persone coinvolte.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Soft Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Pratiche senza penetrazione con altri partner. Include carezze, giochi sensuali e momenti di complicit&#224; in presenza di altre persone, mantenendo una certa esclusivit&#224; sessuale all&#39;interno della coppia. Spesso il primo passo per le coppie principianti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Full Swap</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Scambio completo con penetrazione tra i partner di almeno due coppie. Richiede un accordo chiaro e una discussione preliminare sui limiti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Candaulismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Una pratica in cui uno dei membri della coppia trova piacere nel vedere o sapere che il proprio partner ha rapporti sessuali con un&#39;altra persona. A differenza dello scambio di coppie dove la reciprocit&#224; &#232; la norma, il candaulismo si basa su un piacere asimmetrico.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Triolismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Rapporto sessuale tra tre persone. Pu&#242; trattarsi di una coppia che invita una terza persona, o di tre persone che interagiscono insieme senza gerarchia particolare.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Voyeurismo / Esibizionismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il voyeurismo &#232; il piacere di osservare gli altri durante momenti intimi. L&#39;esibizionismo &#232; il contrario: il piacere di essere osservati durante momenti intimi. Queste due pratiche sono spesso complementari.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Private Party</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Una serata libertina organizzata in un luogo privato (appartamento, villa) al contrario delle serate in club. L&#39;accesso &#232; su invito e il numero di partecipanti &#232; pi&#249; limitato.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">M&#233;langisme</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Una pratica dove pi&#249; persone o coppie condividono momenti intimi nello stesso spazio senza necessariamente scambiarsi i partner. Il focus &#232; sull&#39;esperienza condivisa.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Principi Fondamentali</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Indipendentemente dal vocabolario utilizzato, gli stessi principi fondamentali si applicano nella community libertina: consenso libero e informato, rispetto dei limiti, discrezione e dignit&#224; di tutti i partecipanti.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LessicoLibertino;
