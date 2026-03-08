import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import ReviewsList from "@/components/reviews/ReviewsList";

const FAQ = [
  { question: "Le recensioni su AKOKY sono autentiche?", answer: "Sì. Tutte le recensioni sono collegate a profili verificati. Questo garantisce la loro autenticità e previene le manipolazioni." },
  { question: "Come lasciare una recensione?", answer: "Accedi al tuo account AKOKY, visita la scheda del club o evento e utilizza il modulo di valutazione. Le recensioni sono moderate prima della pubblicazione." },
];

const RecensioniIt = () => (
  <>
    <MetaTags
      title="AKOKY Recensioni | Valutazioni della Community Libertina"
      description="Leggi le recensioni della community AKOKY: esperienze reali, testimonianze verificate e valutazioni di club ed eventi."
      canonical="https://akoky.com/it/recensioni"
      lang="it"
    />
    <HreflangTags slug="recensioni" />
    <ContentPageLayout
      lang="it"
      title="AKOKY Recensioni | Valutazioni della Community Libertina"
      description="Leggi le recensioni della community AKOKY: esperienze reali, testimonianze verificate e valutazioni di club ed eventi."
      canonical="https://akoky.com/it/recensioni"
      heroTitle="Recensioni e Valutazioni AKOKY"
      heroSubtitle="Testimonianze reali e verificate della community libertina europea."
      breadcrumb={[{ label: "Recensioni e Valutazioni AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Perché Ci Fidiamo delle Recensioni</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Su AKOKY, le recensioni non sono anonime: sono collegate a profili verificati. Questo garantisce la loro autenticità e previene le manipolazioni. Quando leggi una recensione su AKOKY, sai che proviene da una persona reale che ha vissuto l&#39;esperienza.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Testimonianze dei Membri</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Coppie</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Scopri come coppie da tutta Italia hanno trovato in AKOKY lo spazio che cercavano per esplorare la loro vita intima in modo sicuro e autentico.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Single</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La community AKOKY è vibrante anche per i single. Uomini e donne che hanno trovato incontri autentici, amicizie durature e una community dove si sentono benvenuti.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Valutazioni dei Club</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Ogni club referenziato su AKOKY accumula valutazioni dei membri che lo hanno visitato. Una media di punteggio, commenti dettagliati sull&#39;atmosfera, la pulizia, il personale e il livello dei visitatori.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Valutazioni degli Eventi</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Dopo ogni evento AKOKY, i partecipanti possono lasciare le loro impressioni. Atmosfera, organizzazione, qualità dei partecipanti, rapporto qualità-prezzo: tutti i dettagli di cui hai bisogno per scegliere il tuo prossimo evento.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Condividi la Tua Esperienza</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Hai avuto un&#39;esperienza positiva in un club, un evento o con un membro della community? Condividi la tua testimonianza su AKOKY. La tua opinione aiuta tutta la community a prendere decisioni migliori.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default RecensioniIt;
