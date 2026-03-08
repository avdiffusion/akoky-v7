import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Come funziona il Gioco delle Sei Chiavi?", answer: "Sei chiavi sono nascoste in diverse sezioni della piattaforma AKOKY. Trova tutte e sei per concorrere al gran premio." },
  { question: "Qual è il premio?", answer: "Una settimana completa al RIAD5 Cap d'Agde, del valore di 4.500€." },
  { question: "Posso partecipare dall'Italia?", answer: "Sì. Il concorso è aperto a tutti i membri AKOKY in Europa." },
  { question: "Fino a quando posso partecipare?", answer: "Consulta le date ufficiali sulla pagina del concorso." },
];

const ConcoursClesGuideIt = () => (
  <>
    <MetaTags title="Il Gioco delle Sei Chiavi AKOKY 2026 | Vinci una Settimana a Cap d'Agde" description="Trova 6 chiavi nascoste su AKOKY e vinci una settimana al RIAD5 Cap d'Agde (4.500€)." canonical="https://akoky.com/it/gioco-sei-chiavi" lang="it" />
    <HreflangTags slug="gioco-sei-chiavi" />
    <ContentPageLayout lang="it" title="Il Gioco delle Sei Chiavi AKOKY 2026" description="Trova 6 chiavi nascoste su AKOKY e vinci." canonical="https://akoky.com/it/gioco-sei-chiavi" heroTitle="Il Gioco delle Sei Chiavi" heroSubtitle="Esplora AKOKY, trova 6 chiavi e vinci una settimana al RIAD5 Cap d'Agde" breadcrumb={[{ label: "Concorso AKOKY", href: "/it/concorso-akoky-2026" }, { label: "Il Gioco delle Sei Chiavi" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Una Caccia al Tesoro Digitale</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il Gioco delle Sei Chiavi è l'evento gamificato stella di AKOKY nel 2026. Sei chiavi virtuali sono nascoste in diverse sezioni. La tua missione è esplorare AKOKY, scoprire ogni chiave e validare la tua partecipazione per vincere una settimana al RIAD5 di Cap d'Agde.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Gran Premio</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Cap d'Agde è la destinazione libertina più famosa al mondo. Il RIAD5 offre piscina privata, rooftop e accesso alle migliori feste. Il premio: 7 notti per due persone (4.500€).</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Partecipare</h2>
          <ol className="list-decimal list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Registrati su AKOKY</strong> — partecipazione gratuita</li>
            <li><strong>Esplora la piattaforma</strong> — <Link to="/it/clubbing" className="text-primary hover:underline">club</Link>, <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link>, <Link to="/it/giochi" className="text-primary hover:underline">giochi</Link></li>
            <li><strong>Trova le 6 chiavi</strong> — ogni chiave ha un codice unico</li>
            <li><strong>Valida i codici</strong> — inseriscili nella pagina di validazione</li>
            <li><strong>Attendi l'estrazione</strong></li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Consigli</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>Esplora ogni sezione senza eccezione</li>
            <li>Leggi gli articoli del blog con attenzione</li>
            <li>Prova tutte le funzionalità: <Link to="/it/live" className="text-primary hover:underline">live</Link>, giochi, chat</li>
          </ul>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Inizia la Caccia al Tesoro</h3>
            <p className="text-muted-foreground mb-4">Registrati gratuitamente e trova le 6 chiavi.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Partecipa Ora</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ConcoursClesGuideIt;
