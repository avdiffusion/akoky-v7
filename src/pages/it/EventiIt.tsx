import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come partecipare agli eventi AKOKY?", answer: "Registrati su AKOKY, sfoglia il calendario degli eventi e prenota il tuo posto direttamente online. Alcuni eventi richiedono lo status VIP." },
  { question: "Gli eventi sono aperti ai principianti?", answer: "Sì. Molti eventi sono specificamente pensati per accogliere i nuovi membri con calore. Sono chiaramente identificati nel calendario." },
  { question: "Si può andare da soli a un evento?", answer: "Sì. Single e coppie sono i benvenuti. La composizione delle serate varia secondo l&#39;evento." },
];

const EventiIt = () => (
  <>
    <MetaTags
      title="Eventi Libertini in Italia 2026 | 300+ Serate e Weekend — AKOKY"
      description="Scopri 300+ eventi libertini al mese: serate esclusive, weekend tematici, incontri privati a Milano, Roma e in tutta Italia."
      canonical="https://akoky.com/it/eventi"
      lang="it"
    />
    <HreflangTags slug="eventi" />
    <ContentPageLayout
      lang="it"
      title="Eventi Libertini in Italia 2026 | 300+ Serate e Weekend — AKOKY"
      description="Scopri 300+ eventi libertini al mese: serate esclusive, weekend tematici, incontri privati a Milano, Roma e in tutta Italia."
      canonical="https://akoky.com/it/eventi"
      heroTitle="Eventi Libertini in Italia"
      heroSubtitle="300+ eventi al mese: serate esclusive, weekend tematici, incontri privati. Prenota il tuo posto su AKOKY."
      breadcrumb={[{ label: "Eventi Libertini in Italia" }]}
      faq={FAQ}
    >
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Più Grande Calendario di Eventi Libertini</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organizza e pubblica oltre 300 eventi libertini ogni mese in tutta Europa. In Italia troverai serate in club, aperitivi libertini afterwork, weekend tematici e incontri privati nelle principali città.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipi di Eventi</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🎭 Serate in Club</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Le serate nei club libertini sono il formato più tradizionale. Con atmosfera festosa, musica, bar e molteplici spazi tematici, sono perfette per scoprire il mondo libertino o ampliare la propria cerchia sociale.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🥂 Aperitivi Libertini</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Gli aperitivi libertini sono incontri informali, generalmente in un bar privato o in casa, per conoscere altre coppie o single in un&#39;atmosfera rilassata. Senza pressione, senza obblighi — il formato ideale per i principianti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🌊 Weekend Tematici</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Fughe di fine settimana in ville private, hotel o destinazioni balneari. Questi eventi combinano convivialità, attività diurne e serate libertine notturne. I posti sono limitati, prenota in anticipo.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">🔒 Incontri Privati</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Incontri più intimi organizzati in casa privata, con un numero ridotto di partecipanti selezionati. L&#39;accesso richiede una verifica preliminare e spesso un invito da un membro della community.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventi per Principianti</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organizza regolarmente eventi specificamente pensati per i nuovi arrivati nel libertinismo. Chiaramente identificati nel calendario, si caratterizzano per un&#39;atmosfera accogliente, senza pressione.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Prenotare?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Tutti gli eventi AKOKY si prenotano online direttamente sulla piattaforma. Crea il tuo account gratuito, esplora il calendario degli eventi vicino a te e prenota il tuo posto con pochi clic.</p>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default EventiIt;
