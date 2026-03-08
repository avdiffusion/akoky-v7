import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Questa guida è adatta ai principianti?", answer: "Sì. Copre dai concetti di base ai temi avanzati." },
  { question: "La guida è aggiornata regolarmente?", answer: "Sì. Il team editoriale aggiorna la guida con le ultime tendenze." },
  { question: "La guida riguarda solo l'Italia?", answer: "Si concentra sull'Italia ma include informazioni su tutta Europa." },
  { question: "Esistono guide più specifiche?", answer: "Sì. Abbiamo guide su primo club, prima esperienza, saune, giochi, eventi." },
];

const GuideGuideIt = () => (
  <>
    <MetaTags title="Guida Completa al Libertinismo in Italia 2026 | AKOKY" description="La guida di riferimento del libertinismo in Italia: club, saune, pratiche, etichetta, sicurezza." canonical="https://akoky.com/it/guida-libertinismo-completa" lang="it" />
    <HreflangTags slug="guida-libertinismo-completa" />
    <ContentPageLayout lang="it" title="Guida Completa al Libertinismo in Italia 2026 | AKOKY" description="La guida di riferimento del libertinismo in Italia." canonical="https://akoky.com/it/guida-libertinismo-completa" heroTitle="Guida al Libertinismo in Italia" heroSubtitle="Tutto comprendere e scoprire il mondo libertino in Italia con serenità" breadcrumb={[{ label: "Guida al Libertinismo in Italia" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Guida di Riferimento</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Questa guida completa è la risorsa definitiva per chi vuole scoprire o approfondire il libertinismo in Italia. Elaborata dal team editoriale di AKOKY con il contributo della community italiana.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Indice della Guida</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><Link to="/it/libertinismo" className="text-primary hover:underline">Il Libertinismo Moderno</Link> — definizione, storia e evoluzione</li>
            <li><Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">Iniziare nel Libertinismo</Link> — primi passi pratici</li>
            <li><Link to="/it/primo-club-libertino" className="text-primary hover:underline">Il Primo Club Libertino</Link> — preparazione completa</li>
            <li><Link to="/it/prima-esperienza-libertina" className="text-primary hover:underline">La Prima Esperienza</Link> — gestire emozioni e aspettative</li>
            <li><Link to="/it/clubbing" className="text-primary hover:underline">Club Libertini in Italia</Link> — directory verificato</li>
            <li><Link to="/it/saune-libertine" className="text-primary hover:underline">Saune Libertine</Link> — guida wellness libertino</li>
            <li><Link to="/it/lessico-libertino" className="text-primary hover:underline">Lessico Libertino</Link> — 60+ termini spiegati</li>
            <li><Link to="/it/eventi" className="text-primary hover:underline">Eventi Libertini</Link> — calendario e tipi di eventi</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Panorama Libertino in Italia 2026</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Milano è l'epicentro con club sofisticati. Roma offre una scena elegante e discreta. La Toscana e la Costiera Amalfitana sono destinazioni estive per eccellenza.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Valori del Libertinismo Etico</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il libertinismo etico si basa su quattro pilastri: consenso libero e revocabile, comunicazione trasparente, rispetto reciproco e sicurezza. AKOKY promuove attivamente questi valori.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Unisciti alla Community AKOKY</h3>
            <p className="text-muted-foreground mb-4">La piattaforma di riferimento per il libertinismo in Italia e in Europa.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Crea un Account Gratuito</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default GuideGuideIt;
