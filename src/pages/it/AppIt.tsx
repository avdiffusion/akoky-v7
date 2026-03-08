import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "L&#39;app AKOKY è gratuita?", answer: "Sì. Il download e l&#39;uso di base sono gratuiti. Le funzionalità premium sono disponibili con l&#39;abbonamento VIP." },
  { question: "È disponibile su iOS e Android?", answer: "Sì. AKOKY è una PWA compatibile con iOS e Android. Accedi da akoky.com e aggiungi l&#39;icona alla schermata iniziale." },
  { question: "L&#39;app rispetta la mia privacy?", answer: "Assolutamente. La geolocalizzazione è approssimativa, le foto possono essere sfocate automaticamente e la modalità incognito ti permette di navigare invisibile." },
];

const AppIt = () => (
  <>
    <MetaTags
      title="AKOKY App | Applicazione Libertina Premium iOS e Android Italia"
      description="Scarica l&#39;app AKOKY: geolocalizzazione, messaggistica istantanea, notifiche eventi e gestione profilo. L&#39;app libertina più completa d&#39;Europa."
      canonical="https://akoky.com/it/app"
      lang="it"
    />
    <HreflangTags slug="app" />
    <ContentPageLayout
      lang="it"
      title="AKOKY App | Applicazione Libertina Premium iOS e Android Italia"
      description="Scarica l&#39;app AKOKY: geolocalizzazione, messaggistica istantanea, notifiche eventi e gestione profilo. L&#39;app libertina più completa d&#39;Europa."
      canonical="https://akoky.com/it/app"
      heroTitle="L&#39;App Libertina Più Completa d&#39;Europa"
      heroSubtitle="Geolocalizzazione, chat tipo WhatsApp, notifiche eventi e multi-profilo. Tutto sul tuo smartphone."
      breadcrumb={[{ label: "L&#39;App Libertina Più Completa d&#39;Europa" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY App: La Tua Community in Tasca</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L&#39;applicazione AKOKY è disponibile come PWA (Progressive Web App) ottimizzata per iOS e Android. Nessun download dall&#39;app store necessario: accedi direttamente dal browser e aggiungi l&#39;icona alla schermata iniziale.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Funzionalità Principali</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">📍 Geolocalizzazione</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Trova membri, club ed eventi vicino a te in tempo reale. La geolocalizzazione è approssimativa per proteggere la tua privacy: la tua posizione esatta non viene mai rivelata.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💬 Messaggistica Istantanea</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Chat individuale e di gruppo tipo WhatsApp, con conferme di lettura, invio foto e messaggi vocali. Coordina incontri, organizza serate e rimani in contatto con la tua rete in modo semplice e sicuro.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔔 Notifiche Eventi</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ricevi notifiche push per gli eventi che ti interessano: nuove serate nella tua città, eventi dei tuoi club preferiti e promemoria di prenotazione. Non perdere mai un&#39;opportunità.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">👤 Gestione Profilo e Multi-Profilo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Aggiorna il tuo profilo, gestisci la tua galleria foto e passa tra i tuoi diversi profili (coppia, single uomo, single donna) con un solo tocco. La funzionalità multi-profilo è esclusiva di AKOKY.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Privacy e Sicurezza</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L&#39;app AKOKY incorpora le stesse protezioni della versione web: crittografia end-to-end, modalità incognito, sfocatura delle foto e controllo totale sulla tua visibilità. La tua privacy, sotto il tuo controllo.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default AppIt;
