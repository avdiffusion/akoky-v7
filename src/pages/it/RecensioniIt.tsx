import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import ReviewsList from "@/components/reviews/ReviewsList";

const FAQ = [
  { question: "Le recensioni su AKOKY sono autentiche?", answer: "Sì. Tutte le recensioni sono collegate a profili verificati. Questo garantisce la loro autenticità e previene le manipolazioni." },
  { question: "Come lasciare una recensione?", answer: "Accedi al tuo account AKOKY, visita la scheda del club o evento e utilizza il modulo di valutazione. Le recensioni sono moderate prima della pubblicazione." },
];

const LINKS = [
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Scopri i club con le migliori recensioni." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Consulta le valutazioni degli eventi." },
  { href: "/it/akoky-vs-wyylde", icon: "⚔️", title: "AKOKY vs Wyylde", desc: "Confronto tra le piattaforme leader." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Accesso prioritario e vantaggi esclusivi." },
];

const RecensioniIt = () => (
  <>
    <MetaTags title="AKOKY Recensioni | Valutazioni della Community Libertina" description="Leggi le recensioni della community AKOKY: esperienze reali, testimonianze verificate e valutazioni di club ed eventi." canonical="https://akoky.com/it/recensioni" lang="it" />
    <HreflangTags slug="recensioni" />
    <ContentPageLayout lang="it" title="AKOKY Recensioni | Valutazioni della Community Libertina" description="Leggi le recensioni della community AKOKY." canonical="https://akoky.com/it/recensioni" heroTitle="Recensioni e Valutazioni AKOKY" heroSubtitle="Testimonianze reali e verificate della community libertina europea." breadcrumb={[{ label: "Recensioni AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Perché Ci Fidiamo delle Recensioni</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Su AKOKY, le recensioni non sono anonime: sono collegate a profili verificati. Questo garantisce la loro autenticità e previene le manipolazioni. Quando leggi una recensione su AKOKY, sai che proviene da una persona reale.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Testimonianze dei Membri</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Coppie</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Scopri come coppie da tutta Italia hanno trovato in AKOKY lo spazio che cercavano per esplorare la loro vita intima in modo sicuro e autentico.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Single</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La community AKOKY è vibrante anche per i single. Uomini e donne che hanno trovato incontri autentici, amicizie durature e una community dove si sentono benvenuti.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Valutazioni dei Club</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Ogni <Link to="/it/club-libertini" className="text-primary hover:underline">club referenziato</Link> su AKOKY accumula valutazioni dei membri che lo hanno visitato. Una media di punteggio, commenti dettagliati sull'atmosfera, la pulizia, il personale e il livello dei visitatori.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Valutazioni degli Eventi</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Dopo ogni <Link to="/it/eventi" className="text-primary hover:underline">evento AKOKY</Link>, i partecipanti possono lasciare le loro impressioni. Atmosfera, organizzazione, qualità dei partecipanti, rapporto qualità-prezzo: tutti i dettagli per scegliere il tuo prossimo evento.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Condividi la Tua Esperienza</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Hai avuto un'esperienza positiva? Condividi la tua testimonianza su AKOKY. La tua opinione aiuta tutta la community a prendere decisioni migliori.</p>
        </div>
      </section>

      <ReviewsList lang="it" />

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Unisciti alla Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Leggi le recensioni, lascia le tue valutazioni e fai scelte informate.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Crea il Tuo Account →</a>
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

export default RecensioniIt;
