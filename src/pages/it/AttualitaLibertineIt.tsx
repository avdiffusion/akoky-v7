import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Con quale frequenza viene aggiornata la sezione attualità?", answer: "La sezione attualità di AKOKY viene aggiornata ogni settimana con nuove tendenze, analisi e notizie del settore libertino." },
  { question: "Come contribuire con informazioni?", answer: "Accedi al tuo spazio membro AKOKY e utilizza il modulo di contribuzione editoriale. I contenuti vengono moderati prima della pubblicazione." },
  { question: "Le informazioni sono verificate?", answer: "Sì. La redazione AKOKY verifica ogni informazione prima della pubblicazione. Le fonti sono sempre indicate quando disponibili." },
  { question: "Posso ricevere le notizie via email?", answer: "Iscrivendoti su AKOKY e attivando le notifiche, riceverai settimanalmente le notizie principali della community." },
];

const LINKS = [
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Il calendario degli eventi più attesi." },
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Nuove aperture e club in evidenza." },
  { href: "/it/libertinismo", icon: "🔥", title: "Il Libertinismo Oggi", desc: "Evoluzione delle pratiche e della cultura." },
  { href: "/it/blog", icon: "📖", title: "Blog AKOKY", desc: "Articoli e guide approfondite." },
];

const NEWS = [
  { img: "/images/ambiance-sauna-libertin.webp", tag: "Tendenza", title: "Il Wellness Libertino Conquista l'Italia", desc: "Sempre più club integrano spa, saune e jacuzzi. Il confine tra benessere e libertinismo si assottiglia.", link: "/it/saune-libertine" },
  { img: "/images/soiree-club-libertin.webp", tag: "Apertura", title: "Nuovi Club nel Nord Italia", desc: "Milano, Torino e Bologna accolgono nuovi concept di club libertini con standard elevati.", link: "/it/club-libertini" },
  { img: "/images/evenement-libertin-europe.webp", tag: "Evento", title: "Festival Libertini Estate 2026", desc: "I grandi eventi dell'estate: Sardegna, Costiera Amalfitana e le novità della scena italiana.", link: "/it/eventi" },
  { img: "/images/application-akoky.webp", tag: "Tech", title: "AKOKY 3.0: Le Novità", desc: "Nuove funzionalità in arrivo: geolocalizzazione avanzata, AI matching e interfaccia rinnovata.", link: "/it/app" },
];

const AttualitaLibertineIt = () => (
  <>
    <MetaTags title="Attualità Libertine 2026 | Tendenze e Notizie — AKOKY Italia" description="Segui le ultime tendenze del mondo libertino in Italia e in Europa: nuovi club, eventi di rilievo, evoluzioni del settore." canonical="https://akoky.com/it/attualita-libertine" lang="it" />
    <HreflangTags slug="attualita-libertine" />
    <ContentPageLayout lang="it" title="Attualità Libertine 2026 | AKOKY Italia" description="Ultime tendenze e notizie del mondo libertino in Italia." canonical="https://akoky.com/it/attualita-libertine" heroTitle="Attualità e Tendenze Libertine" heroSubtitle="La rassegna editoriale del mondo libertino in Italia: tendenze, analisi e notizie aggiornate." heroImage="/images/es-actualidad-cover.webp" breadcrumb={[{ label: "Attualità Libertine" }]} faq={FAQ}>

      {/* Intro */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Una Rassegna Editoriale al Servizio della Community</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il team editoriale di AKOKY segue continuamente la scena libertina in Italia e in Europa: aperture di nuove strutture, tendenze della community, evoluzioni normative e analisi del settore.</p>
        </div>
      </section>

      {/* Featured News Cards with Images */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Notizie in Evidenza</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {NEWS.map((n, i) => (
              <Link key={i} to={n.link} className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">{n.tag}</span>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{n.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trends 2026 */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Tendenze 2026 in Italia</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "📈", title: "Qualità delle Strutture", desc: "I nuovi club libertini puntano su decorazioni più curate, servizi più completi e politiche di ammissione più selettive.", link: "/it/club-libertini" },
              { icon: "🧖", title: "Benessere Olistico", desc: "Sempre più club integrano spazi relax. Le saune libertine sono in forte crescita.", link: "/it/saune-libertine" },
              { icon: "💻", title: "Digitalizzazione", desc: "Prenotazione online, profili verificati e integrazione con piattaforme come AKOKY sono diventati standard.", link: "/it/akoky" },
              { icon: "🏖️", title: "Nuovi Concept", desc: "Serate in ville di lusso, weekend in hotel boutique, esperienze su barche. Il libertinismo si adatta a tutti gli stili.", link: "/it/libertinismo" },
            ].map((t, i) => (
              <Link key={i} to={t.link} className="group flex gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <span className="text-3xl shrink-0">{t.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{t.title}</h3>
                  <p className="text-muted-foreground text-sm">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events highlight */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Eventi in Evidenza</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Ogni mese, la redazione seleziona gli <Link to="/it/eventi" className="text-primary hover:underline">eventi più attesi</Link> della scena libertina italiana: serate esclusive, weekend tematici e inaugurazioni di nuovi locali.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/soirreeparis.webp", alt: "Serata libertina" },
              { src: "/images/soiree-libertine-plage.webp", alt: "Serata in spiaggia" },
              { src: "/images/apero-libertin-akoky.webp", alt: "Aperitivo AKOKY" },
              { src: "/images/soiree-couple-libertin.webp", alt: "Serata di coppia" },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Contribuisci all'Attualità</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Hai informazioni su una nuova struttura, un evento di rilievo o una tendenza emergente? Condividila con la community AKOKY tramite il tuo spazio membro.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Rimani Aggiornato</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscriviti gratuitamente su AKOKY e ricevi le ultime notizie della community.</p>
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

export default AttualitaLibertineIt;
