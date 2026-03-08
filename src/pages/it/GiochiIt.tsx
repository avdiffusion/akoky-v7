import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "I giochi AKOKY sono gratuiti?", answer: "Alcuni giochi sono accessibili gratuitamente a tutti i membri. Altri contenuti sono riservati ai membri VIP." },
  { question: "Sono adatti ai principianti?", answer: "Assolutamente. I giochi AKOKY sono pensati per essere accessibili e divertenti, qualunque sia il tuo livello di esperienza." },
];

const GiochiIt = () => (
  <>
    <MetaTags
      title="Giochi Libertini AKOKY | Animazioni e Attività per Serate"
      description="Scopri i nostri giochi libertini per animare le tue serate: carte piccanti, sfide, animazioni interattive. Ludico, conviviale e rispettoso."
      canonical="https://akoky.com/it/giochi"
      lang="it"
    />
    <HreflangTags slug="giochi" />
    <ContentPageLayout
      lang="it"
      title="Giochi Libertini AKOKY | Animazioni e Attività per Serate"
      description="Scopri i nostri giochi libertini per animare le tue serate: carte piccanti, sfide, animazioni interattive. Ludico, conviviale e rispettoso."
      canonical="https://akoky.com/it/giochi"
      heroTitle="Giochi Libertini AKOKY"
      heroSubtitle="Anima le tue serate con i nostri giochi esclusivi: roulette, dado, verità o sfida e altro ancora."
      breadcrumb={[{ label: "Giochi Libertini AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Perché Giocare a una Serata Libertina?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">I giochi sono un ottimo modo per rompere il ghiaccio, creare complicità ed esplorare i desideri in modo ludico e senza pressione. In AKOKY Space troverai una selezione di giochi pensati specificamente per la community libertina, sempre con il consenso e il rispetto come valori fondamentali.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Nostri Giochi</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎯 Roulette delle Penitenze Libertine</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Una roulette digitale con penitenze personalizzabili secondo il livello di audacia del gruppo. Dal più soft al più audace, ogni partecipante sceglie il proprio livello di comfort.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎲 Dado del Desiderio AKOKY</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Un dado speciale con diverse facce: azioni, zone del corpo, intensità. Lancia il dado e scopri cosa ti riserva il destino. Un classico reinventato con il tocco AKOKY.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">❓ Verità o Sfida Libertina</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La versione adulta del classico gioco. Domande audaci e sfide sensuali elaborati con cura per creare momenti di complicità e scoperta.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💑 Sfide di Coppia</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Sfide pensate specificamente per coppie che vogliono esplorare insieme: comunicazione, fiducia, creatività e sensualità. Un viaggio di scoperta reciproca con struttura ludica.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Regole Fondamentali dei Giochi AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Tutti i giochi AKOKY si basano sugli stessi principi: consenso esplicito prima di ogni azione, diritto assoluto di passare senza spiegazioni, rispetto dei limiti di ogni partecipante. Giocare deve essere sempre una fonte di piacere, mai di pressione.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default GiochiIt;
