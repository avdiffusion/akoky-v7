import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "È obbligatorio fare qualcosa?", answer: "No. Il diritto di dire no è assoluto. Molte coppie osservano solo alla prima visita." },
  { question: "Bisogna essere in coppia?", answer: "No. Donne single molto benvenute. Uomini single sotto condizioni." },
  { question: "È pericoloso il libertinismo?", answer: "No, se praticato con consenso e comunicazione. La sicurezza è centrale." },
  { question: "Come trovare coppie?", answer: "AKOKY: 1,5M di membri in Europa. Crea il tuo profilo gratuito." },
  { question: "Quanto costa l&#39;ingresso?", answer: "Tra 20€ e 80€ a coppia. Donne single: spesso gratuito." },
  { question: "Che dress code portare?", answer: "Controlla la scheda del club su AKOKY. Generalmente elegante o sexy per gli uomini." },
];

const QuestionsGuideIt = () => (
  <>
    <MetaTags title="Domande Frequenti per Principianti nel Libertinismo — AKOKY" description="Le 50 domande più frequenti dei principianti: funzionamento, sicurezza, vocabolario." canonical="https://akoky.com/it/domande-principianti-guida" lang="it" />
    <HreflangTags slug="domande-principianti-guida" />
    <ContentPageLayout lang="it" title="Domande Frequenti per Principianti nel Libertinismo — AKOKY" description="Le 50 domande più frequenti dei principianti: funzionamento, sicurezza, vocabolario." canonical="https://akoky.com/it/domande-principianti-guida" heroTitle="Domande per Principianti" heroSubtitle="Le risposte alle domande che tutti si pongono scoprendo il libertinismo" breadcrumb={[{ label: "Domande per Principianti" }]}
      faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">

        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default QuestionsGuideIt;
