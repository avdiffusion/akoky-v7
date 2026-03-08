import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "I giochi AKOKY sono gratuiti?", answer: "Alcuni giochi sono accessibili gratuitamente a tutti i membri. Altri contenuti sono riservati ai membri VIP." },
  { question: "Sono adatti ai principianti?", answer: "Assolutamente. I giochi AKOKY sono pensati per essere accessibili e divertenti, qualunque sia il tuo livello di esperienza." },
];

const LINKS = [
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "I giochi perfetti per animare le serate." },
  { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida completa per i nuovi arrivati." },
  { href: "/it/lessico-libertino", icon: "📘", title: "Lessico Libertino", desc: "Comprendi tutti i termini della community." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Accedi a tutti i giochi e contenuti premium." },
];

const GiochiIt = () => (
  <>
    <MetaTags title="Giochi Libertini AKOKY | Animazioni e Attività per Serate" description="Scopri i nostri giochi libertini: carte piccanti, sfide, animazioni interattive. Ludico, conviviale e rispettoso." canonical="https://akoky.com/it/giochi" lang="it" />
    <HreflangTags slug="giochi" />
    <ContentPageLayout lang="it" title="Giochi Libertini AKOKY | Animazioni e Attività" description="Giochi libertini per animare le tue serate." canonical="https://akoky.com/it/giochi" heroTitle="Giochi Libertini AKOKY" heroSubtitle="Anima le tue serate con i nostri giochi esclusivi: roulette, dado, verità o sfida e altro ancora." breadcrumb={[{ label: "Giochi Libertini" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Perché Giocare a una Serata Libertina?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">I giochi sono un ottimo modo per rompere il ghiaccio, creare complicità ed esplorare i desideri in modo ludico e senza pressione. Perfetti per chi sta <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziando nel libertinismo</Link> ma anche per i più esperti.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Nostri Giochi</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">🎯</span>
              <h3 className="font-bold text-foreground mb-2">Roulette delle Penitenze</h3>
              <p className="text-muted-foreground text-sm">Roulette digitale con penitenze personalizzabili secondo il livello di audacia del gruppo.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">🎲</span>
              <h3 className="font-bold text-foreground mb-2">Dado del Desiderio</h3>
              <p className="text-muted-foreground text-sm">Dado speciale con azioni, zone del corpo e intensità. Un classico reinventato.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">❓</span>
              <h3 className="font-bold text-foreground mb-2">Verità o Sfida</h3>
              <p className="text-muted-foreground text-sm">La versione adulta del classico gioco. Domande audaci e sfide sensuali.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="text-2xl mb-2 block">💑</span>
              <h3 className="font-bold text-foreground mb-2">Sfide di Coppia</h3>
              <p className="text-muted-foreground text-sm">Sfide pensate per coppie: comunicazione, fiducia, creatività e sensualità.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Regole Fondamentali dei Giochi AKOKY</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
            <li>Consenso esplicito prima di ogni azione</li>
            <li>Diritto assoluto di passare senza spiegazioni</li>
            <li>Rispetto dei limiti di ogni partecipante</li>
            <li>Giocare deve essere sempre una fonte di piacere, mai di pressione</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Dove Giocare?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">I giochi AKOKY sono perfetti per gli <Link to="/it/eventi" className="text-primary hover:underline">eventi e serate</Link>, le serate in casa o come preludio a una visita nei <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini</Link>. Disponibili nell'app e nello spazio membro.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Prova i Giochi AKOKY</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Accedi ai giochi della community e anima le tue serate.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Accedi ai Giochi →</a>
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

export default GiochiIt;
