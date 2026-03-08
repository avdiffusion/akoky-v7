import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "In cosa si differenzia AKOKY dalle altre piattaforme?", answer: "AKOKY è l&#39;unica piattaforma con multi-profilo, chat tipo WhatsApp con gruppi, testimonianze verificate e live streaming integrato." },
  { question: "AKOKY è disponibile come app mobile?", answer: "Sì. AKOKY ha una PWA ottimizzata per iOS e Android con notifiche push, geolocalizzazione e accesso completo a tutte le funzionalità." },
  { question: "Chi può usare AKOKY?", answer: "AKOKY è aperto a tutti gli adulti over 18 che rispettano la carta etica della piattaforma, indipendentemente dall&#39;orientamento sessuale o dalla situazione sentimentale." },
];

const AkokyIt = () => (
  <>
    <MetaTags
      title="AKOKY Italia | La Piattaforma Libertina Premium Europea"
      description="Scopri AKOKY: storia, visione e funzionalità uniche della piattaforma libertina leader in Europa. Multi-profilo, chat, verifica."
      canonical="https://akoky.com/it/akoky"
      lang="it"
    />
    <HreflangTags slug="akoky" />
    <ContentPageLayout
      lang="it"
      title="AKOKY Italia | La Piattaforma Libertina Premium Europea"
      description="Scopri AKOKY: storia, visione e funzionalità uniche della piattaforma libertina leader in Europa. Multi-profilo, chat, verifica."
      canonical="https://akoky.com/it/akoky"
      heroTitle="AKOKY: Il Social Network Libertino Premium"
      heroSubtitle="Nata in Francia, presente in tutta Europa. La piattaforma che reinventa il libertinismo moderno."
      breadcrumb={[{ label: "AKOKY: Il Social Network Libertino Premium" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cos&#39;è AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è molto più di un&#39;app di incontri per adulti. È un social network completo, pensato specificamente per la community libertina europea. Nata dall&#39;evoluzione di AcoquinementVotre, una piattaforma pioniera del libertinismo francese, AKOKY rappresenta la prossima generazione di piattaforme per adulti.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Le Nostre Funzionalità Esclusive</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Chat tipo WhatsApp con Gruppi</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Messaggistica istantanea individuale e di gruppo con notifiche in tempo reale. Organizza serate, coordina incontri e rimani in contatto con la tua community come faresti su WhatsApp, ma in un ambiente sicuro e privato.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👤 Multi-Profilo — Prima Mondiale</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">L&#39;unica piattaforma al mondo che permette di creare più profili (coppia, single uomo, single donna) su un unico account, con cambio in un clic. Ogni profilo ha la propria galleria, descrizione e impostazioni di privacy.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">✅ Testimonianze Verificate</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">I membri possono lasciare testimonianze verificate sui loro incontri. Un sistema unico che garantisce autenticità e aiuta a costruire fiducia all&#39;interno della community.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📡 Live Streaming + Replay</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Oltre 20 live a settimana: atmosfera di club in diretta, serate esclusive, contenuti VIP. Goditi l&#39;esperienza da casa o usala per decidere quali eventi visitare.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY SAFE</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il nostro sistema di verifica dell&#39;identità garantisce che ogni membro sia davvero chi dice di essere. Profili certificati, moderazione umana 24h/7d, sistema di segnalazione efficace. La sicurezza non è un&#39;opzione, è una priorità.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AkokyIt;
