import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Il programma referral è gratuito?", answer: "Sì. La partecipazione al programma referral è completamente gratuita per tutti i membri AKOKY." },
  { question: "Quando vengono assegnati i vantaggi?", answer: "I vantaggi vengono assegnati automaticamente quando il nuovo membro attiva il suo account con il tuo link referral." },
  { question: "C&#39;è un limite di referral?", answer: "No. Puoi invitare quante persone vuoi. Più inviti, più vantaggi accumuli." },
];

const ReferralIt = () => (
  <>
    <MetaTags
      title="Programma Referral AKOKY | Invita Amici e Guadagna Vantaggi"
      description="Invita i tuoi amici su AKOKY e guadagna vantaggi esclusivi: accesso VIP, eventi gratuiti e molto altro. Il programma referral della community libertina."
      canonical="https://akoky.com/it/referral"
      lang="it"
    />
    <HreflangTags slug="referral" />
    <ContentPageLayout
      lang="it"
      title="Programma Referral AKOKY | Invita Amici e Guadagna Vantaggi"
      description="Invita i tuoi amici su AKOKY e guadagna vantaggi esclusivi: accesso VIP, eventi gratuiti e molto altro. Il programma referral della community libertina."
      canonical="https://akoky.com/it/referral"
      heroTitle="Programma Referral AKOKY"
      heroSubtitle="Invita i tuoi amici, guadagna vantaggi esclusivi e fai crescere la tua community."
      breadcrumb={[{ label: "Programma Referral AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Funziona il Programma Referral?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il programma referral AKOKY ti premia per far crescere la community. Ogni nuovo membro che si registra con il tuo link referral ti dà diritto a vantaggi esclusivi: giorni VIP gratuiti, accesso prioritario agli eventi e molto altro.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Tuoi Vantaggi</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Giorni VIP Gratuiti</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Per ogni amico che si registra con il tuo link e attiva il suo account, ricevi giorni di abbonamento VIP gratuiti. Più amici inviti, più a lungo godi dei vantaggi VIP.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Accesso Prioritario agli Eventi</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">I migliori referrer hanno accesso prioritario agli eventi più esclusivi di AKOKY: serate private in ville, weekend tematici ed esperienze VIP.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Badge Referrer</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">I membri che hanno portato nuovi membri alla community ricevono un badge speciale visibile sul loro profilo. Un riconoscimento del tuo contributo alla community.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Iniziare?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Accedi al tuo spazio membro AKOKY, vai alla sezione &#39;Referral&#39; e copia il tuo link personale. Condividilo con i tuoi amici, sui social network o ovunque tu voglia. Ogni registrazione con il tuo link viene conteggiata automaticamente.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ReferralIt;
