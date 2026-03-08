import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come accedere ai live AKOKY?", answer: "I live sono accessibili ai membri iscritti. Alcuni contenuti sono riservati ai membri VIP. Crea il tuo account gratuitamente su AKOKY." },
  { question: "I live sono sicuri?", answer: "Sì. Tutti i partecipanti sono verificati, la moderazione è umana 24h/7d e l'accesso è strettamente riservato ai membri maggiorenni." },
  { question: "Posso trasmettere il mio live?", answer: "Sì, i membri verificati possono trasmettere. Ogni trasmissione è soggetta alla carta AKOKY e a una verifica preliminare." },
];

const LINKS = [
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Accedi ai live esclusivi e ai privilegi premium." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Scopri gli eventi dal vivo in tutta Italia." },
  { href: "/it/app", icon: "📱", title: "App AKOKY", desc: "Guarda i live ovunque dal tuo smartphone." },
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Tutte le funzionalità della piattaforma." },
];

const LiveIt = () => (
  <>
    <MetaTags title="Live Libertini Esclusivi | Streaming Premium AKOKY Italia" description="Scopri 20+ live libertini a settimana: atmosfera di club in diretta, serate esclusive, contenuti VIP. Streaming sicuro e discreto." canonical="https://akoky.com/it/live" lang="it" />
    <HreflangTags slug="live" />
    <ContentPageLayout lang="it" title="Live Libertini Esclusivi | Streaming Premium AKOKY Italia" description="Scopri 20+ live libertini a settimana." canonical="https://akoky.com/it/live" heroTitle="Live AKOKY — Video e Incontri in Diretta" heroSubtitle="20+ live a settimana: club in diretta, serate esclusive, contenuti VIP. Sicuro e discreto." breadcrumb={[{ label: "Live AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Benvenuto nell'Esperienza AKOKY Live</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY Live è la piattaforma di streaming libertino più completa d'Europa. Con oltre 20 live a settimana, avrai accesso a un'esperienza immersiva del mondo libertino dalla comodità di casa tua.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Framework AKOKY Live</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Esperienza Immersiva</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Vivi l'atmosfera dei migliori <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link> d'Europa in diretta. Ogni live è una finestra su un mondo che pochi hanno l'opportunità di scoprire.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Moderazione Umana</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Tutti i live sono supervisionati in tempo reale dal nostro team di moderazione. Qualsiasi contenuto che non rispetti la carta AKOKY viene rimosso immediatamente.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Rispetto e Consenso</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Tutti i partecipanti ai live hanno dato il loro consenso esplicito a essere filmati e trasmessi. Nessuna immagine viene pubblicata senza autorizzazione preventiva.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipi di Live</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Live di Coppie</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Coppie verificate condividono momenti della loro vita intima in diretta. Interagisci nella chat, fai domande e crea connessioni reali con persone della tua community.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Live Solo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Uomini e donne single condividono le loro esperienze. Il formato più popolare per chi vuole esplorare prima di fare esperienze di persona nei <Link to="/it/eventi" className="text-primary hover:underline">eventi AKOKY</Link>.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Live dai Club</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Alcuni dei nostri club partner trasmettono serate in diretta esclusivamente per la community AKOKY. Un'immersione totale nell'atmosfera delle migliori serate libertine d'Europa.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Live VIP Esclusivi</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">I membri <Link to="/it/vip" className="text-primary hover:underline">VIP AKOKY</Link> hanno accesso a contenuti esclusivi: live premium dai club di lusso, trasmissioni private e replay illimitati. Un'esperienza di livello superiore per i membri più esigenti.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Accedi ai Live AKOKY</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Accedi ai live della community e scopri un nuovo modo di vivere il libertinismo.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Guarda i Live →</a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Scopri Anche</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LINKS.map((l) => (
              <Link key={l.href} to={l.href} className="group block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <span className="text-3xl mb-3 block">{l.icon}</span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{l.title}</h3>
                <p className="text-muted-foreground text-sm">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default LiveIt;
