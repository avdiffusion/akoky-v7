import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Con quale frequenza viene aggiornata la sezione attualità?", answer: "La sezione attualità di AKOKY viene aggiornata ogni settimana con nuove tendenze, analisi e notizie del settore libertino." },
  { question: "Come contribuire con informazioni?", answer: "Accedi al tuo spazio membro AKOKY e utilizza il modulo di contribuzione editoriale. I contenuti vengono moderati prima della pubblicazione." },
];

const LINKS = [
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Il calendario degli eventi più attesi." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Nuove aperture e club in evidenza." },
  { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo Oggi", desc: "Evoluzione delle pratiche e della cultura." },
  { href: "/it/blog", icon: "📖", title: "Blog AKOKY", desc: "Articoli e guide approfondite." },
];

const AttualitaLibertineIt = () => (
  <>
    <MetaTags title="Attualità Libertine 2026 | Tendenze e Notizie — AKOKY Italia" description="Segui le ultime tendenze del mondo libertino in Italia e in Europa: nuovi club, eventi di rilievo, evoluzioni del settore." canonical="https://akoky.com/it/attualita-libertine" lang="it" />
    <HreflangTags slug="attualita-libertine" />
    <ContentPageLayout lang="it" title="Attualità Libertine 2026 | AKOKY Italia" description="Ultime tendenze e notizie del mondo libertino in Italia." canonical="https://akoky.com/it/attualita-libertine" heroTitle="Attualità e Tendenze Libertine" heroSubtitle="La rassegna editoriale del mondo libertino in Italia: tendenze, analisi e notizie aggiornate." breadcrumb={[{ label: "Attualità Libertine" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Una Rassegna Editoriale al Servizio della Community</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il team editoriale di AKOKY segue continuamente la scena libertina in Italia e in Europa: aperture di nuove strutture, tendenze della community, evoluzioni normative e analisi del settore.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tendenze 2026 in Italia</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-2">📈 Qualità delle Strutture</h3>
              <p className="text-muted-foreground text-sm">I nuovi <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link> puntano su decorazioni più curate, servizi più completi e politiche di ammissione più selettive.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-2">🧖 Benessere Olistico</h3>
              <p className="text-muted-foreground text-sm">Sempre più club integrano spazi relax. Le <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link> sono in forte crescita.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-2">💻 Digitalizzazione</h3>
              <p className="text-muted-foreground text-sm">Prenotazione online, profili verificati e integrazione con piattaforme come <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link> sono diventati standard.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-2">🏖️ Nuovi Concept</h3>
              <p className="text-muted-foreground text-sm">Serate in ville di lusso, weekend in hotel boutique, esperienze su barche. Il <Link to="/it/libertinismo" className="text-primary hover:underline">libertinismo</Link> si adatta a tutti gli stili.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventi in Evidenza</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Ogni mese, la redazione seleziona gli <Link to="/it/eventi" className="text-primary hover:underline">eventi più attesi</Link> della scena libertina italiana: serate esclusive, weekend tematici e inaugurazioni di nuovi locali.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Contribuisci all'Attualità</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Hai informazioni su una nuova struttura, un evento di rilievo o una tendenza emergente? Condividila con la community AKOKY tramite il tuo spazio membro.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Rimani Aggiornato</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscriviti gratuitamente su AKOKY e ricevi le ultime notizie della community.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Iscriviti Gratuitamente →</a>
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

export default AttualitaLibertineIt;
