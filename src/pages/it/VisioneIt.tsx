import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Qual è la missione di AKOKY?", answer: "Offrire alla community libertina europea una piattaforma premium, sicura ed etica, che metta il consenso, la sicurezza e l&#39;autenticità al centro di ogni interazione." },
  { question: "AKOKY è conforme al GDPR?", answer: "Sì. AKOKY è gestita da Liberty-Interactive-Ltd e rispetta rigorosamente il GDPR. La protezione dei dati è una priorità assoluta." },
  { question: "In quali paesi è disponibile AKOKY?", answer: "AKOKY è disponibile in tutta Europa: Francia, Spagna, Belgio, Svizzera, Lussemburgo, Germania, Italia e Portogallo." },
];

const VisioneIt = () => (
  <>
    <MetaTags
      title="AKOKY | La Nostra Visione — L&#39;Evoluzione del Libertinismo Moderno"
      description="Scopri la visione di AKOKY: una piattaforma libertina moderna, sicura e responsabile. Da AcoquinementVotre ad AKOKY, la storia di un&#39;evoluzione."
      canonical="https://akoky.com/it/visione"
      lang="it"
    />
    <HreflangTags slug="visione" />
    <ContentPageLayout
      lang="it"
      title="AKOKY | La Nostra Visione — L&#39;Evoluzione del Libertinismo Moderno"
      description="Scopri la visione di AKOKY: una piattaforma libertina moderna, sicura e responsabile. Da AcoquinementVotre ad AKOKY, la storia di un&#39;evoluzione."
      canonical="https://akoky.com/it/visione"
      heroTitle="La Nostra Visione"
      heroSubtitle="AKOKY è nata da una convinzione: il libertinismo moderno merita una piattaforma all&#39;altezza."
      breadcrumb={[{ label: "La Nostra Visione" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Nascita di una Visione</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è l&#39;evoluzione naturale di AcoquinementVotre, una piattaforma pioniera del libertinismo francese. Nel corso degli anni è diventato chiaro che la community libertina meritava qualcosa di più di un semplice sito di incontri: un vero social network, un ecosistema completo che combinasse incontri, eventi, club e contenuti educativi in un unico luogo.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Visione AKOKY</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Libertà Vissuta</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY crede che ogni adulto abbia il diritto di esplorare la propria sessualità liberamente, senza giudizi e senza vergogna. La nostra piattaforma offre uno spazio dove la libertà è celebrata, non tollerata.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Consenso Chiaro</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il consenso non è un dettaglio in AKOKY: è il fondamento di tutto. Ogni funzionalità, ogni politica, ogni decisione editoriale è costruita attorno al principio del consenso libero, informato ed entusiasta.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Sicurezza Rafforzata</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La verifica dell&#39;identità, la moderazione umana 24h/7d, la crittografia dei dati e le opzioni avanzate di privacy rendono AKOKY la piattaforma libertina più sicura d&#39;Europa.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Tecnologia al Servizio dell&#39;Uomo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il multi-profilo, la chat tipo WhatsApp, il live streaming e la geolocalizzazione intelligente sono strumenti per incontri più autentici e una community più connessa.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Eleganza e Discrezione</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY rifiuta la volgarità. La nostra interfaccia, il nostro linguaggio e i nostri contenuti editoriali riflettono una visione elegante e rispettosa del libertinismo. La sensualità non ha bisogno di essere oscena.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VisioneIt;
