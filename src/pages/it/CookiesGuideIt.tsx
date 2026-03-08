import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Cosa sono i cookie?", answer: "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti un sito web. Permettono al sito di ricordare le tue preferenze e migliorare l'esperienza di navigazione." },
  { question: "Posso rifiutare i cookie?", answer: "Sì. Puoi configurare le tue preferenze sui cookie in qualsiasi momento. I cookie essenziali non possono essere disattivati perché sono necessari al funzionamento del sito." },
  { question: "I cookie compromettono la mia privacy?", answer: "I cookie di AKOKY rispettano il GDPR. I cookie analitici e di marketing sono opzionali e attivati solo con il tuo consenso esplicito." },
  { question: "Come modificare le mie preferenze sui cookie?", answer: "Puoi modificare le tue preferenze in qualsiasi momento tramite il banner dei cookie o nelle impostazioni del tuo profilo AKOKY." },
];

const CookiesGuideIt = () => (
  <>
    <MetaTags title="AKOKY Politica Cookie | Gestione e Privacy" description="Cookie AKOKY: essenziali, analitici, di marketing. Gestione delle tue preferenze e protezione della tua privacy conforme al GDPR." canonical="https://akoky.com/it/politica-cookie-guida" lang="it" />
    <HreflangTags slug="politica-cookie-guida" />
    <ContentPageLayout lang="it" title="AKOKY Politica Cookie | Gestione e Privacy" description="Cookie AKOKY: essenziali, analitici, di marketing." canonical="https://akoky.com/it/politica-cookie-guida" heroTitle="Politica dei Cookie" heroSubtitle="Totale trasparenza sull'utilizzo dei cookie su AKOKY" breadcrumb={[{ label: "Politica dei Cookie" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Nostra Politica sui Cookie</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY utilizza i cookie per garantire il funzionamento del sito, migliorare l'esperienza di navigazione e, con il tuo consenso, analizzare il traffico e personalizzare i contenuti. Questa pagina spiega i diversi tipi di cookie che utilizziamo e come puoi gestire le tue preferenze.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipi di Cookie Utilizzati</h2>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookie Essenziali</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Necessari al funzionamento del sito. Includono cookie di sessione, autenticazione e sicurezza. Non possono essere disattivati.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookie Analitici</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ci permettono di capire come i visitatori utilizzano il sito: pagine più visitate, durata della sessione, percorsi di navigazione. Questi dati sono anonimi. Attivati solo con il tuo consenso.</p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Cookie di Marketing</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Utilizzati per personalizzare annunci e contenuti presentati. Questi cookie sono totalmente opzionali e attivati solo con consenso esplicito.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Gestione delle Tue Preferenze</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Puoi modificare le tue preferenze sui cookie in qualsiasi momento. Al primo accesso a AKOKY, un banner presenta le opzioni disponibili. Successivamente, puoi accedere alle impostazioni dei cookie tramite le impostazioni del tuo profilo o il link disponibile nel footer di ogni pagina.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Conformità GDPR</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY rispetta integralmente il Regolamento Generale sulla Protezione dei Dati (GDPR). Il tuo consenso è raccolto prima dell'attivazione di qualsiasi cookie non essenziale. I dati raccolti sono trattati secondo la nostra politica sulla privacy e mai venduti a terzi.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Durata dei Cookie</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
            <li><strong>Cookie di sessione:</strong> Eliminati alla chiusura del browser</li>
            <li><strong>Cookie persistenti:</strong> Durata massima di 13 mesi conforme alla normativa europea</li>
            <li><strong>Cookie di consenso:</strong> Memorizzati per 6 mesi per ricordare le tue preferenze</li>
          </ul>
        </div>
      </section>
    </ContentPageLayout>
  </>
);
export default CookiesGuideIt;
