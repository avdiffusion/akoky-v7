import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FAQ = [
  { question: "Come partecipare ai concorsi Akoky?", answer: "Per partecipare, devi essere membro registrato su Akoky. Ogni concorso ha le proprie regole di partecipazione dettagliate nella pagina dedicata. La maggior parte è gratuita e aperta a tutti i membri attivi." },
  { question: "I concorsi di Akoky sono davvero gratuiti?", answer: "Sì, tutti i concorsi organizzati da Akoky sono 100% gratuiti. Non è richiesto alcun acquisto o pagamento per partecipare." },
  { question: "Posso usare il programma referral per i concorsi?", answer: "Alcuni concorsi includono bonus legati al programma referral Akoky: partecipazioni multiple, punti bonus, accesso prioritario. Consulta il regolamento di ogni concorso." },
  { question: "Quali sono i premi in palio?", answer: "I premi variano: soggiorni in club libertini premium, abbonamenti VIP Akoky, inviti a eventi privati, pacchetti regalo ed esperienze uniche in Italia e in Europa." },
  { question: "Come vengono designati i vincitori?", answer: "Secondo le modalità di ogni concorso: estrazione, performance (il primo a completare un compito), voto della community o giuria Akoky." },
  { question: "Posso partecipare a più concorsi contemporaneamente?", answer: "Sì, puoi partecipare a tutti i concorsi Akoky che desideri." },
  { question: "I miei dati personali sono protetti?", answer: "Sì. Akoky rispetta rigorosamente il GDPR e non condivide mai i tuoi dati con terzi." },
];

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://akoky.com/it" },
    { "@type": "ListItem", "position": 2, "name": "Concorsi", "item": "https://akoky.com/it/concorso" },
  ],
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Concorsi AKOKY – Vinci Esperienze Libertine Esclusive",
  "description": "Partecipa gratuitamente ai concorsi Akoky e vinci soggiorni nei migliori club libertini d'Europa, abbonamenti VIP ed esperienze uniche.",
  "url": "https://akoky.com/it/concorso",
  "inLanguage": "it",
  "isPartOf": { "@type": "WebSite", "name": "AKOKY", "url": "https://akoky.com" },
};

const ConcorsoIt = () => (
  <>
    <Helmet>
      <html lang="it" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="AKOKY" />
      <meta name="twitter:site" content="@akoky_official" />
    </Helmet>
    <HreflangTags slug="concorso" />

    <ContentPageLayout
      lang="it"
      title="Concorsi AKOKY – Vinci Esperienze Libertine Esclusive"
      description="Partecipa gratuitamente ai concorsi Akoky e vinci soggiorni nei migliori club libertini d'Italia e d'Europa, abbonamenti VIP ed esperienze uniche."
      canonical="https://akoky.com/it/concorso"
      heroTitle="Concorsi AKOKY"
      heroSubtitle="Partecipa gratuitamente e vinci soggiorni, abbonamenti VIP ed esperienze libertine esclusive in Italia e in tutta Europa."
      heroImage="/images/concours/six-cles.webp"
      breadcrumb={[{ label: "Concorsi" }]}
      faq={FAQ}
      schema={[PAGE_SCHEMA, BREADCRUMB_SCHEMA]}
    >
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto space-y-20">

          {/* ─── CONCORSI ATTUALI ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🔥</span>
              <h2 className="text-3xl font-black text-foreground font-display">Concorsi attuali</h2>
            </div>

            <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 text-center">
              <span className="text-6xl block mb-6">🏆</span>
              <h3 className="text-2xl font-bold text-foreground mb-4">Molto presto concorsi esclusivi per l'Italia!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                Il team AKOKY sta preparando concorsi eccezionali per la community libertina italiana. Soggiorni nei migliori club di <strong className="text-foreground">Milano</strong>, <strong className="text-foreground">Roma</strong>, <strong className="text-foreground">Firenze</strong> e altre città italiane, abbonamenti VIP ed esperienze uniche — restate sintonizzati!
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Nel frattempo, crea il tuo account gratuito per essere il primo a partecipare quando saranno lanciati.
              </p>
              <a href="https://app.akoky.com/register" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
                Crea il mio account gratis
              </a>
            </div>
          </div>

          {/* ─── PROGRAMMA REFERRAL ─── */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">👑</span>
                  <span className="text-primary text-sm font-bold uppercase tracking-wide">Programma Referral</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 font-display">
                  Invita. Vinci. Goditi.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Invita <strong className="text-foreground">10 membri</strong> su Akoky e ricevi <strong className="text-primary">6 mesi di abbonamento VIP+</strong> in regalo. Accesso al live streaming, messaggistica prioritaria, badge VIP+ e accesso a eventi esclusivi.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["✓ Senza impegno", "✓ Senza abbonamento obbligatorio", "✓ Ricompensa automatica"].map((t, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-3 bg-card border border-primary/30 rounded-full px-6 py-3 mb-6">
                  <span className="text-lg font-black text-primary">10 Referral = 6 MESI VIP+</span>
                </div>
                <div className="block">
                  <Link to="/it/referral" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">
                    Scopri il programma →
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: "📢", label: "Parla di Akoky" },
                  { icon: "📝", label: "Si iscrivono" },
                  { icon: "🎁", label: "Tu vinci" },
                ].map((s, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4 w-24">
                    <span className="text-2xl block mb-1">{s.icon}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── PROSSIMI CONCORSI (TEASERS) ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">⏳</span>
              <h2 className="text-3xl font-black text-foreground font-display">Prossimi concorsi</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📸", title: "Concorso Foto di Coppia", date: "fine 2026 – inizio 2027", lot: "Weekend in un club premium", desc: "Condividi la tua migliore foto di coppia libertina e vinci un weekend premium esclusivo." },
                { icon: "✍️", title: "Miglior Testimonianza Libertina", date: "2027", lot: "3 abbonamenti Premium 1 anno", desc: "Racconta la tua esperienza libertina più memorabile e vinci." },
                { icon: "🌴", title: "Challenge Referral Estate", date: "Estate 2027", lot: "5 soggiorni in club europei", desc: "I migliori ambasciatori vincono un weekend da sogno!" },
              ].map((c, i) => (
                <div key={i} className="p-6 bg-card/50 rounded-2xl border border-border opacity-60">
                  <p className="text-muted-foreground/60 text-xs mb-2">{c.date}</p>
                  <span className="text-3xl block mb-3">{c.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{c.desc}</p>
                  <p className="text-muted-foreground text-sm"><strong>Premio:</strong> {c.lot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CONCORSI PASSATI ─── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">✅</span>
              <h2 className="text-3xl font-black text-foreground font-display">Concorsi passati</h2>
            </div>
            <div className="bg-card/50 border border-border rounded-2xl p-8 text-center">
              <p className="text-muted-foreground">Non ci sono ancora concorsi conclusi per l'Italia. I primi concorsi AKOKY sono in preparazione!</p>
            </div>
          </div>

          {/* ─── SEO TEXT ─── */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">Concorsi AKOKY Italia – Vinci esperienze libertine uniche</h2>
            <p>
              AKOKY organizza regolarmente <strong className="text-foreground">concorsi gratuiti</strong> esclusivi per la sua community libertina in Italia e in tutta Europa. Con oltre <Link to="/it" className="text-primary hover:underline">1,5 milioni di membri attivi</Link>, la piattaforma offre premi eccezionali: soggiorni nei <Link to="/it/club-libertini" className="text-primary hover:underline">migliori club libertini</Link> di Milano, Roma, Firenze e altre città, <Link to="/it/vip" className="text-primary hover:underline">abbonamenti VIP premium</Link>, inviti a <Link to="/it/eventi" className="text-primary hover:underline">eventi privati esclusivi</Link> ed esperienze indimenticabili.
            </p>
            <p>
              A differenza di <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong> o <strong className="text-foreground">Libertic</strong>, AKOKY punta sulla qualità e la trasparenza dei suoi concorsi. Ogni concorso dispone di un regolamento ufficiale, premi verificati e un processo di selezione equo. Non è richiesto alcun acquisto né abbonamento per partecipare — basta creare un <Link to="/it/akoky" className="text-primary hover:underline">account gratuito su AKOKY</Link>.
            </p>
            <p>
              I concorsi AKOKY coprono tutti gli aspetti dell'esperienza libertina: scoperta delle <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link>, scoperta dei <Link to="/it/clubbing" className="text-primary hover:underline">club associati</Link>, utilizzo della nostra <Link to="/it/app" className="text-primary hover:underline">applicazione mobile</Link>, partecipazione ai <Link to="/it/live" className="text-primary hover:underline">live esclusivi</Link> e coinvolgimento con la community. I membri più attivi e i migliori ambasciatori del <Link to="/it/referral" className="text-primary hover:underline">programma referral</Link> ottengono accesso prioritario ai prossimi concorsi.
            </p>
            <p>
              Sei nuovo nel <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo</Link>? Consulta il nostro <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link> e la nostra guida per <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare con il piede giusto</Link>. Leggi le <Link to="/it/recensioni" className="text-primary hover:underline">recensioni verificate dei nostri membri</Link> (voto medio 4,7/5) e unisciti alla community libertina più attiva d'Europa.
            </p>
          </div>

          <div className="text-center">
            <a href="https://app.akoky.com/register" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold text-lg hover:scale-105 transition-all inline-block">Crea il mio account gratis</a>
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default ConcorsoIt;
