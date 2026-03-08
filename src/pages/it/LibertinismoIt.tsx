import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Cos'è il libertinismo?", answer: "Il libertinismo è una pratica sessuale e relazionale che consiste nell'esplorare la sessualità al di fuori della coppia monogama tradizionale, sempre con il consenso libero e informato di tutti i partecipanti." },
  { question: "Il libertinismo è pericoloso?", answer: "No, a patto che le pratiche siano consensuali, discusse apertamente e vissute con rispetto reciproco." },
  { question: "Bisogna essere in coppia per praticare il libertinismo?", answer: "No. Coppie e single sono i benvenuti. Le donne single hanno generalmente un accesso privilegiato ai club e agli eventi libertini." },
  { question: "Come iniziare nel libertinismo?", answer: "Parlando apertamente con il tuo partner, definendo i tuoi limiti e scoprendo progressivamente attraverso piattaforme come AKOKY." },
];

const LINKS = [
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida pratica per i primi passi." },
  { href: "/it/lessico-libertino", icon: "📘", title: "Lessico Libertino", desc: "Tutti i termini spiegati dalla A alla Z." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Directory dei club verificati in Italia." },
  { href: "/it/attualita-libertine", icon: "📰", title: "Attualità Libertine", desc: "Tendenze e notizie del settore nel 2026." },
];

const LibertinismoIt = () => (
  <>
    <MetaTags title="Libertinismo Moderno 2026 | Guida Completa, Pratiche ed Etica — AKOKY" description="Scopri il libertinismo oggi: definizione, pratiche (soft, hard, scambio), consenso ed evoluzione. Guida completa per coppie e single." canonical="https://akoky.com/it/libertinismo" lang="it" />
    <HreflangTags slug="libertinismo" />
    <ContentPageLayout lang="it" title="Libertinismo Moderno 2026 | Guida Completa, Pratiche ed Etica — AKOKY" description="Scopri il libertinismo oggi: definizione, pratiche, consenso ed evoluzione." canonical="https://akoky.com/it/libertinismo" heroTitle="Il Libertinismo Moderno: Definizione, Pratiche e Consenso" heroSubtitle="Scopri questo universo nel 2026: pratiche rispettose, evoluzione culturale e chiavi per un'esplorazione consapevole." breadcrumb={[{ label: "Il Libertinismo Moderno" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cos'è il Libertinismo?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il libertinismo è una pratica sessuale e relazionale che consiste nell'esplorare la sessualità al di fuori della coppia monogama tradizionale. Lontano dai cliché mediatici, il libertinismo moderno è prima di tutto un approccio libero, consensuale e consapevole, basato sul dialogo, il rispetto e la fiducia reciproca.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Storicamente, il termine 'libertino' designava una persona emancipata dalle regole morali o religiose del suo tempo. Oggi questa filosofia designa una pratica sessuale e relazionale dove l'esplorazione avviene sempre con il consenso di tutti i partecipanti.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Le Diverse Forme di Pratica</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Pratiche Soft</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Le pratiche soft escludono la penetrazione con altri partner. Includono scambi di carezze, giochi sensuali e momenti di complicità in presenza di altre persone. È spesso il primo passo per le coppie principianti. Scopri di più nel nostro <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico completo</Link>.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Lo Scambio di Coppie (Swinging)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Lo scambio di coppie è probabilmente la forma più conosciuta. Consiste nel fatto che due coppie scambino i loro partner per momenti intimi. Questa pratica si basa su un accordo reciproco tra le quattro persone coinvolte.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Il Candaulismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il candaulismo è una pratica in cui uno dei membri della coppia prova piacere nel vedere o sapere che il proprio partner ha rapporti sessuali con un'altra persona. A differenza dello scambio, il candaulismo si basa su un piacere asimmetrico.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Il Triolismo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il triolismo designa un rapporto sessuale tra tre persone. Può trattarsi di una coppia che invita una terza persona, o di tre persone che interagiscono insieme senza gerarchia particolare.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Le Relazioni Aperte</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Le relazioni aperte sono un modello relazionale in cui i partner si autorizzano reciprocamente ad avere rapporti sessuali o affettivi con altre persone. Le regole variano, ma il principio fondamentale è sempre la trasparenza.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Consenso: Fondamento di Tutto</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il consenso è la base di ogni esplorazione in questo ambito. Senza consenso libero, informato ed entusiasta, non può esserci pratica sana. Il consenso non è statico: ciò che era accettabile ieri potrebbe non esserlo oggi.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">A Chi Si Rivolge il Libertinismo?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il libertinismo è accessibile a tutti, indipendentemente dall'età, dall'orientamento sessuale o dalla situazione sentimentale. Se vuoi <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare nel libertinismo</Link>, AKOKY ti accompagna con guide dedicate e una community accogliente.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Dove Vivere il Libertinismo in Italia?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L'Italia offre una scena libertina ricca e diversificata: <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link> a Milano, Roma, Torino e Bologna, <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link> in tutta la penisola e <Link to="/it/eventi" className="text-primary hover:underline">eventi esclusivi</Link> ogni mese.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Esplora il Libertinismo con AKOKY</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. 1,5 milioni di membri, 120+ club verificati, 300+ eventi al mese.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Iscriviti Gratuitamente →</a>
        </div>
      </section>

      {/* Maillage */}
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

export default LibertinismoIt;
