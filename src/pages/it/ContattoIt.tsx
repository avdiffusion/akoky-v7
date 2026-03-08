import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come contattare il supporto AKOKY?", answer: "Tramite il nostro modulo online, via email a support@akoky.com o dal tuo spazio membro. Il nostro team risponde entro 24 ore lavorative." },
  { question: "AKOKY offre supporto in italiano?", answer: "Sì. Il nostro supporto è disponibile in italiano, francese, spagnolo, tedesco e portoghese." },
  { question: "Come segnalare un profilo problematico?", answer: "Usa il pulsante &#39;Segnala&#39; disponibile su ogni profilo. Il nostro team di moderazione gestisce ogni segnalazione entro 2 ore." },
];

const ContattoIt = () => (
  <>
    <MetaTags
      title="AKOKY Italia | Contatto — Supporto e Assistenza Premium"
      description="Contatta AKOKY: supporto membri, richieste partner, stampa e affiliazione. Team disponibile 24h per accompagnarti."
      canonical="https://akoky.com/it/contatto"
      lang="it"
    />
    <HreflangTags slug="contatto" />
    <ContentPageLayout
      lang="it"
      title="AKOKY Italia | Contatto — Supporto e Assistenza Premium"
      description="Contatta AKOKY: supporto membri, richieste partner, stampa e affiliazione. Team disponibile 24h per accompagnarti."
      canonical="https://akoky.com/it/contatto"
      heroTitle="Contattare AKOKY"
      heroSubtitle="Il nostro team è disponibile 24h per aiutarti. Trova il canale di contatto adatto alla tua richiesta."
      breadcrumb={[{ label: "Contattare AKOKY" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Supporto per i Membri</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Hai una domanda sul tuo account, una funzionalità o un&#39;esperienza sulla piattaforma? Il nostro team di supporto risponde entro 24 ore lavorative. Accedi al modulo di contatto dal tuo spazio membro per una risposta più rapida.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Email di Supporto</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">support@akoky.com — Per tutte le domande relative al tuo account e alle funzionalità della piattaforma.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Orari</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Lunedì-venerdì: 9-20. Sabato e domenica: 10-18. Tempo di risposta abituale: meno di 24 ore lavorative.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Richieste di Partnership</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Gestisci un club libertino, organizzi eventi o rappresenti un media? Abbiamo proposte specifiche per ogni profilo.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Club Libertini</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Referenzia la tua struttura nel directory AKOKY e accedi alla nostra community di 1,5 milioni di membri. Contatta il nostro team partnership per le condizioni.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Organizzatori di Eventi</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Pubblica i tuoi eventi nel calendario AKOKY e beneficia della nostra visibilità. Scrivici a partenaires@akoky.com.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Media e Influencer</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Per richieste stampa, interviste o collaborazioni editoriali: presse@akoky.com. Il nostro team comunicazione risponde entro 48 ore lavorative.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Segnalare un Profilo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Se trovi un profilo o un contenuto che non rispetta la carta AKOKY, utilizza il pulsante &#39;Segnala&#39; disponibile su ogni profilo. Il nostro team di moderazione gestisce ogni segnalazione entro 2 ore.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ContattoIt;
