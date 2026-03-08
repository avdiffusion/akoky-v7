import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Qual è la missione di AKOKY?", answer: "Offrire alla community libertina europea una piattaforma premium, sicura ed etica che metta il consenso, la sicurezza e l'autenticità al centro di ogni interazione." },
  { question: "Chi c'è dietro AKOKY?", answer: "AKOKY è gestito da Liberty-Interactive-Ltd, un'azienda europea dedicata allo sviluppo di piattaforme social sicure ed etiche per adulti." },
  { question: "AKOKY è conforme al GDPR?", answer: "Sì. AKOKY rispetta rigorosamente il GDPR e tutte le normative europee di protezione dei dati. La privacy è una priorità assoluta." },
  { question: "In quanti paesi è disponibile?", answer: "AKOKY è disponibile in tutta Europa: Francia, Spagna, Italia, Portogallo, Belgio, Svizzera, Lussemburgo, Germania." },
];

const VisionGuideIt = () => (
  <>
    <MetaTags title="La Visione di AKOKY | Piattaforma Libertina Moderna e Responsabile" description="Scopri la visione di AKOKY: una piattaforma libertina moderna, sicura e responsabile. Da AcoquinementVotre ad AKOKY, la storia di un'evoluzione." canonical="https://akoky.com/it/visione-akoky" lang="it" />
    <HreflangTags slug="visione-akoky" />
    <ContentPageLayout lang="it" title="La Visione di AKOKY | Piattaforma Libertina Moderna e Responsabile" description="Scopri la visione di AKOKY." canonical="https://akoky.com/it/visione-akoky" heroTitle="La Nostra Visione" heroSubtitle="AKOKY: costruire la community libertina più sicura e autentica d'Europa" breadcrumb={[{ label: "La Nostra Visione" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Da AcoquinementVotre ad AKOKY: Un'Evoluzione Naturale</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY nasce dalla convinzione che la community libertina europea meritasse una piattaforma all'altezza. Fondato inizialmente come AcoquinementVotre in Francia, il progetto si è evoluto per diventare AKOKY — una piattaforma internazionale, moderna e sicura che serve 1,5 milioni di membri in tutta Europa.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Questa evoluzione non è stata solo un cambio di nome: è stata una trasformazione completa della visione, della tecnologia e dell'ambizione. AKOKY nel 2026 è una piattaforma di nuova generazione che reinventa ogni aspetto dell'esperienza libertina online.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I 4 Pilastri della Nostra Visione</h2>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Sicurezza Assoluta</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Crittografia di livello bancario, verifica manuale dei profili, moderazione umana 24h/7g, modalità incognito e geolocalizzazione approssimativa. La sicurezza dei nostri membri è la nostra ossessione numero uno.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Innovazione Tecnologica</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il multi-profilo (prima mondiale), la chat tipo WhatsApp con gruppi, le testimonianze verificate e il <Link to="/it/live" className="text-primary hover:underline">live streaming</Link> avanzato sono innovazioni esclusive di AKOKY. Continuiamo a sviluppare funzionalità che nessun'altra piattaforma offre.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Etica e Consenso</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il consenso è la pietra angolare di tutto ciò che facciamo. La nostra carta etica è chiara, le nostre regole sono rigorose e la nostra moderazione è attiva. Promuoviamo un libertinismo rispettoso, responsabile e inclusivo.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Community Europea</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è una piattaforma veramente europea, disponibile in 6 lingue e presente in 8 paesi. Con <Link to="/it/clubbing" className="text-primary hover:underline">120+ club verificati</Link> e <Link to="/it/eventi" className="text-primary hover:underline">300+ eventi mensili</Link>, siamo il più grande ecosistema libertino del continente.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Nostra Visione per l'Italia</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L'Italia è un mercato in piena espansione per il libertinismo moderno. La passione italiana, la tradizione di convivialità e la ricchezza culturale fanno dell'Italia un terreno naturale per la community libertina europea. AKOKY investe attivamente nello sviluppo della community italiana con eventi locali, partnership con club e contenuti in italiano.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Fai Parte della Nostra Visione</h3>
            <p className="text-muted-foreground mb-4">Unisciti alla community libertina più innovativa d'Europa.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Crea un Account Gratuito</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default VisionGuideIt;
