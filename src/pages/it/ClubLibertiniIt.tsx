import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come trovare un club libertino vicino a me?", answer: "Usa la mappa interattiva di AKOKY per localizzare i club verificati più vicini a te. Puoi filtrare per città, tipo di struttura e valutazione." },
  { question: "Bisogna prenotare per andare in un club libertino?", answer: "Per le prime visite è molto consigliabile prenotare online tramite AKOKY. Alcuni club accettano solo su prenotazione." },
  { question: "Quanto costa l'ingresso in un club libertino?", answer: "I prezzi variano tra 20€ e 80€ a coppia secondo il club e il giorno. Le donne single hanno spesso l'ingresso gratuito o ridotto." },
  { question: "I club libertini sono sicuri?", answer: "I club referenziati su AKOKY sono stati verificati in termini di sicurezza, igiene e rispetto delle regole. Scegli sempre strutture con buone recensioni." },
];

const LINKS = [
  { href: "/it/clubbing", icon: "🎭", title: "Guida al Clubbing", desc: "Prepararsi per la prima serata in club." },
  { href: "/it/saune-libertine", icon: "🧖", title: "Saune Libertine", desc: "Scopri le saune e le differenze con i club." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "300+ eventi al mese in tutta Italia." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida completa per i principianti." },
];

const ClubLibertiniIt = () => (
  <>
    <MetaTags title="Club Libertini in Italia 2026 | Directory AKOKY" description="Scopri i migliori club libertini in Italia: Milano, Roma, Torino, Bologna e altro ancora. Schede dettagliate, foto e recensioni verificate." canonical="https://akoky.com/it/club-libertini" lang="it" />
    <HreflangTags slug="club-libertini" />
    <ContentPageLayout lang="it" title="Club Libertini in Italia 2026 | Directory AKOKY" description="Scopri i migliori club libertini in Italia: Milano, Roma, Torino, Bologna e altro ancora." canonical="https://akoky.com/it/club-libertini" heroTitle="Club Libertini in Italia" heroSubtitle="Directory completo di club libertini verificati in Italia e in Europa. Schede dettagliate, foto e recensioni autentiche." breadcrumb={[{ label: "Club Libertini in Italia" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Directory Libertino di Riferimento in Italia</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY referenzia oltre 120 club libertini verificati in tutta Europa, con una presenza significativa in Italia. Ogni struttura è stata visitata e validata dal nostro team prima di apparire nel directory. Le recensioni sono autentiche, pubblicate da membri verificati della community.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Club nelle Principali Città Italiane</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Milano</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La capitale economica italiana ha una scena libertina attiva e diversificata. Da club dall'atmosfera intima a grandi strutture con più stanze a tema, Milano offre opzioni per tutti i gusti e livelli di esperienza.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Roma</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Roma è uno dei centri del libertinismo in Italia. La capitale ospita alcuni dei club più rinomati del paese, con una clientela internazionale e un programma di eventi ricco e variegato durante tutto l'anno.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Torino</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Torino ha una community libertina in crescita con diverse strutture di qualità. I club torinesi si distinguono per la loro atmosfera accogliente e particolarmente aperta ai principianti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Bologna, Napoli e Altre Città</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Il directory AKOKY copre anche Bologna, Napoli, Firenze, Venezia, Genova e decine di altre città. Consulta la mappa interattiva per trovare il club più vicino a te.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Scegliere il Tuo Club Libertino?</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">L'Atmosfera</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ogni club ha la propria personalità: alcuni sono più intimi e orientati alle coppie, altri più festosi con musica e bar, altri ancora specializzati in determinate pratiche. Leggi le recensioni della community per farti un'idea dell'atmosfera prima di andare.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Il Dress Code</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La maggior parte dei club richiede un abbigliamento elegante o sexy all'ingresso. Alcuni hanno serate a tema con dress code specifici. Consulta la scheda del club su AKOKY per i requisiti esatti.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Le Recensioni della Community</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Su AKOKY, ogni club ha una pagina con <Link to="/it/recensioni" className="text-primary hover:underline">recensioni verificate</Link> dei membri che lo hanno visitato. Atmosfera, pulizia, personale, qualità dei visitatori: tutte le informazioni per una scelta informata.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Prossimi Eventi nei Club Italiani</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY pubblica il calendario degli eventi dei club associati: serate a tema, feste di inaugurazione, notti speciali. Consulta l'<Link to="/it/eventi" className="text-primary hover:underline">agenda degli eventi</Link> e prenota il tuo posto direttamente sulla piattaforma.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova il Tuo Club Libertino</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscriviti gratuitamente su AKOKY e accedi al directory completo dei club libertini verificati in Italia.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Accedi al Directory →</a>
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

export default ClubLibertiniIt;
