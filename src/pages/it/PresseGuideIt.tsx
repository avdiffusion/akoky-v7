import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Come ottenere il press kit AKOKY?", answer: "Il press kit completo è disponibile su richiesta a press@akoky.com." },
  { question: "AKOKY accetta richieste di intervista?", answer: "Sì. Contatta press@akoky.com." },
  { question: "AKOKY è presente in Italia?", answer: "Sì. AKOKY ha una community attiva in Italia ed è disponibile in italiano." },
];

const PresseGuideIt = () => (
  <>
    <MetaTags title="Sala Stampa AKOKY | Risorse per Giornalisti" description="Sala stampa ufficiale AKOKY: comunicati, press kit, contatto per giornalisti." canonical="https://akoky.com/it/sala-stampa" lang="it" />
    <HreflangTags slug="sala-stampa" />
    <ContentPageLayout lang="it" title="Sala Stampa AKOKY | Risorse per Giornalisti" description="Sala stampa ufficiale AKOKY." canonical="https://akoky.com/it/sala-stampa" heroTitle="Sala Stampa AKOKY" heroSubtitle="Risorse per giornalisti, blogger e partner media" breadcrumb={[{ label: "Sala Stampa AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY in Numeri</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>1,5 milioni</strong> di membri registrati in tutta Europa</li>
            <li><strong>500+</strong> club e saune libertine verificati</li>
            <li><strong>300+</strong> eventi al mese</li>
            <li><strong>8 paesi</strong> europei coperti</li>
            <li><strong>6 lingue</strong> disponibili</li>
            <li><strong>Prima piattaforma</strong> mondiale con multi-profilo</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Su AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è la piattaforma leader del libertinismo in Europa. Combina social network, directory di club, calendario eventi e strumenti di comunicazione avanzati.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Innovazioni Tecnologiche</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Multi-profilo:</strong> Prima piattaforma mondiale a permettere più profili su un unico account</li>
            <li><strong>Chat tipo WhatsApp:</strong> Messaggi con gruppi e funzionalità avanzate</li>
            <li><strong>Live streaming:</strong> Trasmissioni in diretta sicure e moderate</li>
            <li><strong>Testimonianze verificate:</strong> Valutazioni legate a profili reali</li>
            <li><strong>Modalità incognito:</strong> Navigazione invisibile</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Contatto Stampa</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Per interviste e press kit: <strong>press@akoky.com</strong>. Per partnership: <strong>partnerships@akoky.com</strong>. Vedi anche la pagina <Link to="/it/contatto" className="text-primary hover:underline">contatto</Link>.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PresseGuideIt;
