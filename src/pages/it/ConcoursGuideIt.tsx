import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "I concorsi sono gratuiti?", answer: "Sì. La partecipazione ai concorsi AKOKY è totalmente gratuita per tutti i membri registrati." },
  { question: "Come vengo avvisato se vinco?", answer: "I vincitori sono notificati via email e attraverso la piattaforma AKOKY. I risultati sono anche pubblicati sui social ufficiali." },
  { question: "I premi sono reali?", answer: "Assolutamente. Tutti i premi sono reali e consegnati come descritto. Includono soggiorni, esperienze VIP e prodotti esclusivi." },
  { question: "Posso partecipare dall'Italia?", answer: "Sì. Tutti i concorsi AKOKY sono aperti ai membri di tutti i paesi europei, inclusa l'Italia." },
  { question: "Quanti concorsi ci sono all'anno?", answer: "AKOKY organizza diversi concorsi nel corso dell'anno, con premi stagionali ed eventi speciali." },
];

const ConcoursGuideIt = () => (
  <>
    <MetaTags title="Concorso AKOKY 2026 | Partecipa e Vinci Premi Esclusivi" description="Partecipa ai concorsi esclusivi AKOKY e vinci esperienze uniche: soggiorni premium, accesso VIP, prodotti esclusivi. Partecipazione gratuita." canonical="https://akoky.com/it/concorso-akoky-2026" lang="it" />
    <HreflangTags slug="concorso-akoky-2026" />
    <ContentPageLayout lang="it" title="Concorso AKOKY 2026 | Partecipa e Vinci Premi Esclusivi" description="Partecipa ai concorsi esclusivi AKOKY." canonical="https://akoky.com/it/concorso-akoky-2026" heroTitle="Concorso AKOKY 2026" heroSubtitle="Partecipa e vinci premi esclusivi riservati alla community AKOKY" breadcrumb={[{ label: "Concorso AKOKY 2026" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Concorsi Esclusivi AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organizza regolarmente concorsi esclusivi per la sua community. Nel 2026, i premi includono soggiorni premium a Cap d'Agde, esperienze VIP in club europei, abbonamenti premium e merchandising esclusivo. La partecipazione è sempre gratuita — basta essere un membro registrato.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Grande Concorso 2026: Il Gioco delle Sei Chiavi</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L'evento stella del 2026 è il <Link to="/it/gioco-sei-chiavi" className="text-primary hover:underline">Gioco delle Sei Chiavi</Link>: trova 6 chiavi nascoste sulla piattaforma AKOKY e vinci una settimana al RIAD5 Cap d'Agde, del valore di 4.500€. Una caccia al tesoro digitale che ti porta a esplorare tutte le funzionalità di AKOKY.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Partecipare</h2>
          <ol className="list-decimal list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>Registrati gratuitamente su AKOKY</li>
            <li>Consulta la pagina concorsi per vedere i concorsi attivi</li>
            <li>Segui le istruzioni specifiche di ogni concorso</li>
            <li>Attendi l'estrazione o la valutazione dei risultati</li>
            <li>I vincitori vengono contattati direttamente</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Premi Disponibili nel 2026</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Gran Premio:</strong> Una settimana al RIAD5 Cap d'Agde (4.500€)</li>
            <li><strong>Premi VIP:</strong> Abbonamenti premium AKOKY di 12 mesi</li>
            <li><strong>Esperienze:</strong> Ingressi VIP per eventi esclusivi in Europa</li>
            <li><strong>Merchandising:</strong> Prodotti esclusivi della collezione AKOKY Premium</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-4">Non perdere le opportunità! Registrati su AKOKY e attiva le notifiche per essere informato di ogni nuovo concorso. Consulta anche gli <Link to="/it/eventi" className="text-primary hover:underline">eventi AKOKY</Link> per esperienze dal vivo in Italia.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Partecipa Ora</h3>
            <p className="text-muted-foreground mb-4">Registrati gratuitamente e accedi a tutti i concorsi AKOKY.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Crea un Account Gratuito</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default ConcoursGuideIt;
