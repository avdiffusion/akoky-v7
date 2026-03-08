import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Il programma referral è gratuito?", answer: "Sì. La partecipazione al programma referral è completamente gratuita per tutti i membri AKOKY." },
  { question: "Quando vengono assegnati i vantaggi?", answer: "I vantaggi vengono assegnati automaticamente quando il nuovo membro attiva il suo account con il tuo link referral." },
  { question: "C'è un limite di referral?", answer: "No. Puoi invitare quante persone vuoi. Più inviti, più vantaggi accumuli." },
];

const LINKS = [
  { href: "/it/vip", icon: "💎", title: "Stato VIP", desc: "Tutti i vantaggi dell'abbonamento premium." },
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Funzionalità e community." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Accesso prioritario per i migliori referrer." },
  { href: "/it/app", icon: "📱", title: "App AKOKY", desc: "Condividi il tuo link dal tuo smartphone." },
];

const ReferralIt = () => (
  <>
    <MetaTags title="Programma Referral AKOKY | Invita Amici e Guadagna Vantaggi" description="Invita i tuoi amici su AKOKY e guadagna vantaggi esclusivi: accesso VIP, eventi gratuiti e molto altro." canonical="https://akoky.com/it/referral" lang="it" />
    <HreflangTags slug="referral" />
    <ContentPageLayout lang="it" title="Programma Referral AKOKY" description="Invita amici e guadagna vantaggi esclusivi." canonical="https://akoky.com/it/referral" heroTitle="Programma Referral AKOKY" heroSubtitle="Invita i tuoi amici, guadagna vantaggi esclusivi e fai crescere la tua community." breadcrumb={[{ label: "Programma Referral" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Funziona il Programma Referral?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Il programma referral AKOKY ti premia per far crescere la community. Ogni nuovo membro che si registra con il tuo link referral ti dà diritto a vantaggi esclusivi: giorni <Link to="/it/vip" className="text-primary hover:underline">VIP</Link> gratuiti, accesso prioritario agli eventi e molto altro.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I Tuoi Vantaggi</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <span className="text-3xl mb-3 block">💎</span>
              <h3 className="font-bold text-foreground mb-2">Giorni VIP Gratuiti</h3>
              <p className="text-muted-foreground text-sm">Per ogni amico che si registra e attiva il suo account.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <span className="text-3xl mb-3 block">🎭</span>
              <h3 className="font-bold text-foreground mb-2">Accesso Prioritario</h3>
              <p className="text-muted-foreground text-sm">I migliori referrer accedono agli <Link to="/it/eventi" className="text-primary hover:underline">eventi più esclusivi</Link>.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <span className="text-3xl mb-3 block">🏅</span>
              <h3 className="font-bold text-foreground mb-2">Badge Referrer</h3>
              <p className="text-muted-foreground text-sm">Un riconoscimento visibile sul tuo profilo.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Come Iniziare?</h2>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-3 mb-8">
            <li>Accedi al tuo spazio membro <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link></li>
            <li>Vai alla sezione 'Referral' e copia il tuo link personale</li>
            <li>Condividilo con i tuoi amici, sui social network o ovunque</li>
            <li>Ogni registrazione con il tuo link viene conteggiata automaticamente</li>
          </ol>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Inizia a Invitare</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Ottieni il tuo link referral e inizia a guadagnare vantaggi.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Ottieni il Tuo Link →</a>
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

export default ReferralIt;
