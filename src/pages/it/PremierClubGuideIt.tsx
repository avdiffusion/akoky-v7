import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";

const FAQ = [
  { question: "Bisogna prenotare per il primo club?", answer: "Per la prima visita, la prenotazione è altamente consigliata. Consulta la scheda del club su AKOKY." },
  { question: "Qual è il dress code abituale?", answer: "Eleganza e sensualità. Abito da cocktail o lingerie per le donne, pantaloni eleganti e camicia per gli uomini." },
  { question: "Quanto costa l'ingresso?", answer: "Tra 20€ e 80€ per coppia. Le donne single hanno spesso ingresso gratuito o ridotto." },
  { question: "Posso andare senza partecipare?", answer: "Assolutamente. Molti principianti trascorrono le prime visite solo ad osservare e socializzare." },
  { question: "Le fotografie sono permesse?", answer: "No. È rigorosamente vietato fotografare o filmare in qualsiasi club libertino." },
];

const PremierClubGuideIt = () => (
  <>
    <MetaTags title="Il Tuo Primo Club Libertino | Guida Completa — AKOKY" description="Tutto per la tua prima visita a un club libertino: dress code, etichetta, prenotazione, prezzi. Guida per principianti in Italia." canonical="https://akoky.com/it/primo-club-libertino" lang="it" />
    <HreflangTags slug="primo-club-libertino" />
    <ContentPageLayout lang="it" title="Il Tuo Primo Club Libertino | Guida Completa" description="Tutto per la tua prima visita a un club libertino." canonical="https://akoky.com/it/primo-club-libertino" heroTitle="Il Tuo Primo Club Libertino" heroSubtitle="Guida completa per una prima visita riuscita e serena" breadcrumb={[{ label: "Il Tuo Primo Club Libertino" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Prima della Visita: Preparazione Essenziale</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Parla apertamente con il tuo partner di aspettative, limiti e segnali di comunicazione. Consulta le recensioni nel <Link to="/it/clubbing" className="text-primary hover:underline">directory AKOKY</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Dress Code: Cosa Indossare</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Per le donne: abito da cocktail, lingerie sofisticata, tacchi. Per gli uomini: pantaloni scuri eleganti, camicia, scarpe eleganti. Evita jeans, sneakers e abbigliamento casual.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">L'Arrivo al Club: Passo dopo Passo</h2>
          <ol className="list-decimal list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>Arrivo e registrazione alla reception</li>
            <li>Pagamento dell'ingresso e deposito degli effetti personali</li>
            <li>Tour guidato degli spazi</li>
            <li>Primo drink al bar — momento di relax</li>
            <li>Esplorazione degli spazi al vostro ritmo</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Le Regole d'Oro</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li>Il consenso è assoluto — chiedere prima di toccare</li>
            <li>Niente fotografie né telefoni negli spazi di intimità</li>
            <li>Usare protezione — sempre</li>
            <li>Rispettare la discrezione</li>
            <li>Non insistere — se qualcuno declina, andare avanti</li>
            <li>Moderare l'alcol</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Dopo la Visita</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Parla con il tuo partner di ciò che avete provato. Leggi più consigli nella guida <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">Iniziare nel Libertinismo</Link>.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Trova il Club Perfetto</h3>
            <p className="text-muted-foreground mb-4">Consulta il directory AKOKY con recensioni verificate.</p>
            <a href="https://app.akoky.com/register" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Esplora i Club</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default PremierClubGuideIt;
