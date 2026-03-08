import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Il programma referral è gratuito?", answer: "Sì. La partecipazione al programma referral è completamente gratuita per tutti i membri AKOKY." },
  { question: "Quando vengono assegnati i vantaggi?", answer: "I vantaggi vengono assegnati automaticamente quando il nuovo membro attiva il suo account con il tuo link referral." },
  { question: "C'è un limite di referral?", answer: "No. Puoi invitare quante persone vuoi. Più inviti, più vantaggi accumuli." },
  { question: "Posso condividere il link sui social?", answer: "Assolutamente! Puoi condividere il tuo link ovunque: WhatsApp, Instagram, Telegram, email o di persona." },
  { question: "Il mio filleul saprà chi l'ha invitato?", answer: "No. Il programma è completamente discreto. Il tuo filleul non vedrà il tuo profilo né saprà chi l'ha invitato." },
];

const LINKS = [
  { href: "/it/vip", icon: "💎", title: "Stato VIP", desc: "Tutti i vantaggi dell'abbonamento premium." },
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Funzionalità e community." },
  { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "Accesso prioritario per i migliori referrer." },
  { href: "/it/app", icon: "📱", title: "App AKOKY", desc: "Condividi il tuo link dal tuo smartphone." },
];

const TIERS = [
  { invites: "1-5", badge: "🥉 Bronze", reward: "7 giorni VIP per invito", color: "border-amber-700/30" },
  { invites: "6-15", badge: "🥈 Silver", reward: "14 giorni VIP per invito", color: "border-slate-400/30" },
  { invites: "16-30", badge: "🥇 Gold", reward: "30 giorni VIP per invito + accesso eventi", color: "border-yellow-500/30" },
  { invites: "31+", badge: "💎 Diamond", reward: "VIP illimitato + vantaggi esclusivi", color: "border-primary/50" },
];

const ReferralIt = () => (
  <>
    <MetaTags title="Programma Referral AKOKY | Invita Amici e Guadagna Vantaggi" description="Invita i tuoi amici su AKOKY e guadagna vantaggi esclusivi: accesso VIP, eventi gratuiti e molto altro." canonical="https://akoky.com/it/referral" lang="it" />
    <HreflangTags slug="referral" />
    <ContentPageLayout lang="it" title="Programma Referral AKOKY" description="Invita amici e guadagna vantaggi esclusivi." canonical="https://akoky.com/it/referral" heroTitle="Programma Referral AKOKY" heroSubtitle="Invita i tuoi amici, guadagna vantaggi esclusivi e fai crescere la tua community." heroImage="/images/es-parrainage-cover.webp" breadcrumb={[{ label: "Programma Referral" }]} faq={FAQ}>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "100%", label: "Gratuito" },
              { val: "4", label: "Livelli di ricompensa" },
              { val: "♾️", label: "Inviti illimitati" },
              { val: "🎭", label: "Totalmente discreto" },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-xl border border-border bg-card">
                <span className="text-2xl md:text-3xl font-black text-primary block mb-1">{s.val}</span>
                <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Come Funziona il Programma Referral?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">Il programma referral AKOKY ti premia per far crescere la community. Ogni nuovo membro che si registra con il tuo link referral ti dà diritto a vantaggi esclusivi: giorni <Link to="/it/vip" className="text-primary hover:underline">VIP</Link> gratuiti, accesso prioritario agli eventi e molto altro.</p>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { step: "1", icon: "👤", title: "Accedi", desc: "Vai al tuo spazio membro AKOKY" },
              { step: "2", icon: "🔗", title: "Copia il Link", desc: "Trova il tuo link nella sezione Referral" },
              { step: "3", icon: "📤", title: "Condividi", desc: "Invialo ad amici, social o ovunque" },
              { step: "4", icon: "🎁", title: "Guadagna", desc: "Ogni registrazione = vantaggi automatici" },
            ].map((s, i) => (
              <div key={i} className="relative text-center p-5 rounded-xl border border-border bg-card">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-black">{s.step}</div>
                <span className="text-3xl block mb-3 mt-2">{s.icon}</span>
                <h3 className="font-bold text-foreground mb-1 text-sm">{s.title}</h3>
                <p className="text-muted-foreground text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Tiers */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">I Livelli di Ricompensa</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {TIERS.map((t, i) => (
              <div key={i} className={`rounded-2xl border-2 ${t.color} bg-card p-6 hover:shadow-lg transition-all`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{t.badge.split(' ')[0]}</span>
                  <div>
                    <h3 className="font-black text-foreground">{t.badge.split(' ')[1]}</h3>
                    <span className="text-primary text-sm font-bold">{t.invites} inviti</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{t.reward}</p>
                {/* Progress bar visual */}
                <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all" style={{ width: `${(i + 1) * 25}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">I Tuoi Vantaggi</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "💎", title: "Giorni VIP Gratuiti", desc: "Per ogni amico che si registra e attiva il suo account." },
              { icon: "🎭", title: "Accesso Prioritario", desc: "I migliori referrer accedono agli eventi più esclusivi." },
              { icon: "🏅", title: "Badge Referrer", desc: "Un riconoscimento visibile sul tuo profilo." },
              { icon: "✈️", title: "Viaggi Esclusivi", desc: "I Diamond referrer sono invitati a weekend libertini VIP." },
              { icon: "🎁", title: "Sorprese Mensili", desc: "Ogni mese, i top referrer ricevono regali a sorpresa." },
              { icon: "👑", title: "Status Élite", desc: "Un posto nella cerchia dei membri più influenti di AKOKY." },
            ].map((b, i) => (
              <div key={i} className="group rounded-xl border border-border bg-card p-5 text-center hover:border-primary/40 hover:shadow-lg transition-all">
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">{b.icon}</span>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{b.title}</h3>
                <p className="text-muted-foreground text-xs">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Inizia a Invitare</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscrizione gratuita. Ottieni il tuo link referral e inizia a guadagnare vantaggi.</p>
          <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Ottieni il Tuo Link →</a>
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

export default ReferralIt;
