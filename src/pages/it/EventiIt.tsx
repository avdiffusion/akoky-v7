import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come partecipare agli eventi AKOKY?", answer: "Registrati su AKOKY, sfoglia il calendario degli eventi e prenota il tuo posto direttamente online. Alcuni eventi richiedono lo status VIP." },
  { question: "Gli eventi sono aperti ai principianti?", answer: "Sì. Molti eventi sono specificamente pensati per accogliere i nuovi membri. Sono chiaramente identificati nel calendario." },
  { question: "Si può andare da soli a un evento?", answer: "Sì. Single e coppie sono i benvenuti. La composizione delle serate varia secondo l'evento." },
];

const LINKS = [
  { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Trova il club perfetto per le tue serate." },
  { href: "/it/clubbing", icon: "🎭", title: "Guida al Clubbing", desc: "Prepararsi per una serata memorabile." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida dedicata ai principianti." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Accesso prioritario agli eventi esclusivi." },
];

const EventiIt = () => (
  <>
    <MetaTags title="Eventi Libertini in Italia 2026 | 300+ Serate e Weekend — AKOKY" description="Scopri 300+ eventi libertini al mese: serate esclusive, weekend tematici, incontri privati a Milano, Roma e in tutta Italia." canonical="https://akoky.com/it/eventi" lang="it" />
    <HreflangTags slug="eventi" />
    <ContentPageLayout lang="it" title="Eventi Libertini in Italia 2026 | 300+ Serate — AKOKY" description="300+ eventi libertini al mese in Italia." canonical="https://akoky.com/it/eventi" heroTitle="Eventi Libertini in Italia" heroSubtitle="300+ eventi al mese: serate esclusive, weekend tematici, incontri privati. Prenota il tuo posto su AKOKY." breadcrumb={[{ label: "Eventi Libertini" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Il Più Grande Calendario di Eventi Libertini</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organizza e pubblica oltre 300 eventi libertini ogni mese in tutta Europa. In Italia troverai serate in <Link to="/it/club-libertini" className="text-primary hover:underline">club</Link>, aperitivi libertini, weekend tematici e incontri privati nelle principali città.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Tipi di Eventi</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">🎭</span>
              <h3 className="font-bold text-foreground mb-2">Serate in Club</h3>
              <p className="text-muted-foreground text-sm">Atmosfera festosa, musica, bar e molteplici spazi tematici. Perfette per scoprire il <Link to="/it/clubbing" className="text-primary hover:underline">mondo del clubbing</Link>.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">🥂</span>
              <h3 className="font-bold text-foreground mb-2">Aperitivi Libertini</h3>
              <p className="text-muted-foreground text-sm">Incontri informali per conoscere altre coppie o single in un'atmosfera rilassata. Ideale per chi sta <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziando</Link>.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">🌊</span>
              <h3 className="font-bold text-foreground mb-2">Weekend Tematici</h3>
              <p className="text-muted-foreground text-sm">Fughe in ville private, hotel o destinazioni balneari. Convivialità e serate libertine. Posti limitati.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">🔒</span>
              <h3 className="font-bold text-foreground mb-2">Incontri Privati</h3>
              <p className="text-muted-foreground text-sm">Incontri intimi con numero ridotto di partecipanti selezionati. Accesso su verifica e invito.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Eventi per Principianti</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY organizza regolarmente eventi specifici per i nuovi arrivati. Atmosfera accogliente, senza pressione. Chiaramente identificati nel calendario con il badge "Principianti Benvenuti".</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Prenotare?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Tutti gli eventi AKOKY si prenotano online direttamente sulla piattaforma. Crea il tuo account gratuito, esplora il calendario e prenota con pochi clic. I membri <Link to="/it/vip" className="text-primary hover:underline">VIP</Link> hanno accesso prioritario agli eventi più esclusivi.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Prenota il Tuo Prossimo Evento</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">300+ eventi al mese. Iscrizione gratuita. Trova l'evento perfetto vicino a te.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Esplora il Calendario →</a>
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

export default EventiIt;
