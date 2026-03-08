import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come prepararsi per la prima serata in un club libertino?", answer: "Prenotare in anticipo, informarsi sul dress code, arrivare presto, esplorare prima gli spazi vestiti e ricordare che hai il diritto assoluto di dire no in qualsiasi momento." },
  { question: "I club libertini sono sicuri?", answer: "I club referenziati su AKOKY sono stati verificati in termini di sicurezza. Scegli sempre strutture verificate con buone recensioni della community." },
];

const LINKS = [
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Directory completo dei club in Italia." },
  { href: "/it/saune-libertine", icon: "🧖", title: "Saune Libertine", desc: "Alternativa relax al clubbing tradizionale." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Calendario dei prossimi eventi." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida per i principianti." },
];

const ClubbingIt = () => (
  <>
    <MetaTags title="Clubbing Libertino in Italia 2026 | Guida alle Serate — AKOKY" description="Guida completa al clubbing libertino in Italia: cosa aspettarsi, come prepararsi, i migliori club a Milano, Roma e in tutta Italia." canonical="https://akoky.com/it/clubbing" lang="it" />
    <HreflangTags slug="clubbing" />
    <ContentPageLayout lang="it" title="Clubbing Libertino in Italia 2026 | Guida — AKOKY" description="Guida completa al clubbing libertino in Italia." canonical="https://akoky.com/it/clubbing" heroTitle="Clubbing Libertino in Italia" heroSubtitle="Scopri la scena del clubbing libertino: preparazione, codici, i migliori club e come vivere l'esperienza al massimo." breadcrumb={[{ label: "Clubbing Libertino" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Cos'è il Clubbing Libertino?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il clubbing libertino è la frequentazione di <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link> per serate sociali e sensuali in un contesto organizzato e sicuro. Il club offre uno spazio neutrale, con regole chiare e personale formato per garantire il benessere di tutti.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Scena Libertina in Italia</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">L'Italia ha una delle scene libertine più attive d'Europa. Milano e Roma sono i due epicentri, con decine di club di tutte le dimensioni. Il fenomeno si estende anche a Torino, Bologna, Napoli, Firenze e molte altre città.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Prepararsi per una Serata</h2>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Prenotare in Anticipo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">La maggior parte dei club di qualità richiede una prenotazione anticipata, soprattutto il fine settimana. Prenota tramite AKOKY per le migliori condizioni.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Il Dress Code</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Ogni club ha il proprio dress code: elegante, sexy (lingerie, latex, pelle) o tematico. Consulta la scheda del club su AKOKY per il codice esatto.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">I Primi Passi all'Arrivo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">All'arrivo: accoglienza, guardaroba, tour degli spazi se è la tua prima visita. Inizia dagli spazi vestiti per ambientarti.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Le Regole d'Oro</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Non toccare mai senza permesso esplicito</li>
            <li>Accettare il no senza discutere</li>
            <li>Rispettare la privacy (nessuna foto senza consenso)</li>
            <li>Mantenere la discrezione fuori dal club</li>
            <li>Curare l'igiene personale</li>
            <li>Rispettare le strutture e il personale</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Clubbing vs Sauna Libertina</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Se preferisci un'atmosfera più rilassata, le <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link> sono un'alternativa eccellente al clubbing tradizionale. Impianti benessere, atmosfera tranquilla e orari flessibili.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Trovare i Migliori Club con AKOKY</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il directory AKOKY referenzia i migliori club verificati in Italia con schede dettagliate, foto, orari, prezzi e <Link to="/it/recensioni" className="text-primary hover:underline">recensioni autentiche</Link>.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova la Tua Serata</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscriviti gratuitamente e accedi al calendario dei club e degli eventi in Italia.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Esplora i Club →</a>
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

export default ClubbingIt;
