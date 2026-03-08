import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "AKOKY è gratuito?", answer: "Sì, la registrazione è completamente gratuita. Le funzioni di base sono disponibili per tutti i membri. Le funzionalità premium (multi-profilo, eventi VIP, live esclusivi) sono disponibili con l&#39;abbonamento VIP." },
  { question: "AKOKY è disponibile in Italia?", answer: "Sì. AKOKY ha una community attiva in tutta Italia: Milano, Roma, Torino, Bologna, Napoli, Firenze e molte altre città." },
  { question: "Come garantisce AKOKY la discrezione?", answer: "Con crittografia di livello bancario, verifica manuale dei profili, modalità incognito, sfocatura delle foto e geolocalizzazione approssimativa. La tua identità e i tuoi dati sono protetti." },
  { question: "Posso unirmi da solo/a?", answer: "Certo. AKOKY accoglie sia coppie che single. Le donne single hanno accesso privilegiato in molti club ed eventi." },
];

const HomeIt = () => (
  <>
    <MetaTags
      title="AKOKY Italia | La Community Libertina Premium d&#39;Europa"
      description="Unisciti ad AKOKY, la più grande community libertina d&#39;Europa. 1,5 milioni di membri, 120+ club verificati, 300 eventi al mese. Registrazione gratuita."
      canonical="https://akoky.com/it"
      lang="it"
    />
    <HreflangTags slug="" />
    <ContentPageLayout
      lang="it"
      title="AKOKY Italia | La Community Libertina Premium d&#39;Europa"
      description="Unisciti ad AKOKY, la più grande community libertina d&#39;Europa. 1,5 milioni di membri, 120+ club verificati, 300 eventi al mese. Registrazione gratuita."
      canonical="https://akoky.com/it"
      heroTitle="La Più Grande Community Libertina d&#39;Europa"
      heroSubtitle="1,5 milioni di membri, club verificati ed eventi esclusivi in Italia e in Europa. Inizia gratis."
      breadcrumb={[{ label: "La Più Grande Community Libertina d&#39;Europa" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cos&#39;è AKOKY?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è la più grande piattaforma comunitaria libertina premium d&#39;Europa. Con oltre 1,5 milioni di membri attivi, un directory di 120+ club verificati e oltre 300 eventi organizzati ogni mese, AKOKY offre un ecosistema completo per coppie e single che desiderano esplorare lo stile di vita libertino in modo sicuro, discreto e autentico.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">A differenza delle normali app di incontri, AKOKY è un social network completo: chat tipo WhatsApp con gruppi, multi-profilo esclusivo, testimonianze verificate, live streaming e un directory di club con recensioni della community.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Perché Scegliere AKOKY?</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Sicurezza e Discrezione</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Verifica dell&#39;identità, moderazione umana 24h/7d e opzioni avanzate di privacy: sfocatura delle foto, modalità incognito, geolocalizzazione approssimativa. La tua vita privata, protetta.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">💎 Qualità Premium</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">App mobile iOS e Android, funzionalità avanzate e accesso a eventi esclusivi. AKOKY SAFE, il nostro sistema di verifica, garantisce autenticità in ogni profilo.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🤝 Community Rispettosa</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Codice etico chiaro, consenso al centro di ogni scambio e accompagnamento per i nuovi membri. Una community dove il rispetto non è opzionale.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🌍 Rete Europea</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Presenza attiva in Italia, Francia, Spagna, Belgio, Germania e Portogallo. Eventi e incontri su scala europea per un&#39;esperienza senza confini.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Club Libertini in Italia</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY referenzia i migliori club libertini verificati in Italia: Milano, Roma, Torino, Bologna, Napoli e oltre 30 altre città. Ogni scheda include foto, orari, prezzi e recensioni verificate della community.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Unisciti ad AKOKY Italia</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">La registrazione è gratuita e non richiede carta di credito. Crea il tuo profilo, scopri la community ed esplora al tuo ritmo. AKOKY è disponibile in italiano, francese, spagnolo, tedesco e portoghese.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default HomeIt;
