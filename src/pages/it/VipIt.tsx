import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Quali sono i vantaggi dello stato VIP AKOKY?", answer: "Accesso a eventi esclusivi, multi-profilo certificato, album privati, live VIP, messaggistica prioritaria e badge di fiducia visibile alla community." },
  { question: "Cos&#39;è la funzionalità multi-profilo?", answer: "La funzionalità esclusiva AKOKY che ti permette di creare più profili (coppia, single uomo, single donna) su un unico account, con cambio in un solo clic." },
  { question: "Come ottenere la certificazione VIP?", answer: "La certificazione viene concessa dopo la verifica dell&#39;identità. Garantisce alla community che sei davvero la persona indicata nel tuo profilo." },
];

const VipIt = () => (
  <>
    <MetaTags
      title="AKOKY VIP | Abbonamento Premium — Accesso Esclusivo Community Libertina"
      description="Scopri l&#39;abbonamento VIP AKOKY: accesso esclusivo a eventi libertini privati, multi-profilo certificato e community premium sicura."
      canonical="https://akoky.com/it/vip"
      lang="it"
    />
    <HreflangTags slug="vip" />
    <ContentPageLayout
      lang="it"
      title="AKOKY VIP | Abbonamento Premium — Accesso Esclusivo Community Libertina"
      description="Scopri l&#39;abbonamento VIP AKOKY: accesso esclusivo a eventi libertini privati, multi-profilo certificato e community premium sicura."
      canonical="https://akoky.com/it/vip"
      heroTitle="Stato VIP AKOKY"
      heroSubtitle="Accedi a privilegi esclusivi e vivi l&#39;esperienza libertina al suo livello più alto."
      breadcrumb={[{ label: "Stato VIP AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Perché Diventare VIP su AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Lo stato VIP AKOKY è molto più di un abbonamento: è il tuo pass per un&#39;esperienza libertina di livello superiore. Più funzionalità, più esclusività, più fiducia dalla community.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Multi-Profilo: Un Solo Account, Più Identità</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Un Solo Account</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Con lo status VIP puoi creare fino a tre profili diversi (coppia, single uomo, single donna) sotto un unico account. Ogni profilo ha la propria galleria, descrizione e impostazioni di privacy.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Cambio con un Solo Clic</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Passa da un profilo all&#39;altro istantaneamente a seconda del contesto: usa il profilo coppia per gli eventi in club, il profilo singolo per gli aperitivi, senza bisogno di disconnetterti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Certificazione Obbligatoria</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Tutti i profili VIP sono certificati tramite verifica dell&#39;identità. Il badge di fiducia è visibile a tutta la community, aumentando significativamente la tua credibilità.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Vantaggi Esclusivi VIP</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Eventi Esclusivi</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">I membri VIP hanno accesso prioritario ed esclusivo agli eventi più selezionati di AKOKY: serate private in ville, weekend di lusso, incontri intimi con selezione degli invitati.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Album Privati</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Crea album fotografici privati con controllo totale degli accessi: decidi chi può vedere le tue foto e per quanto tempo. Condividi in modo sicuro e selettivo.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Live Esclusivi</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Accedi ai live più esclusivi della piattaforma: serate in club di lusso, contenuti VIP e trasmissioni private riservate alla community premium.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default VipIt;
