import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Come contattare il supporto AKOKY?", answer: "Tramite il nostro modulo online, via email a support@akoky.com o dal tuo spazio membro. Il nostro team risponde entro 24 ore lavorative." },
  { question: "AKOKY offre supporto in italiano?", answer: "Sì. Il nostro supporto è disponibile in italiano, francese, spagnolo, tedesco e portoghese." },
  { question: "Come segnalare un profilo problematico?", answer: "Usa il pulsante 'Segnala' disponibile su ogni profilo. Il nostro team di moderazione gestisce ogni segnalazione entro 2 ore." },
];

const LINKS = [
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Tutte le funzionalità della piattaforma." },
  { href: "/it/visione", icon: "🔭", title: "La Nostra Visione", desc: "I valori dietro AKOKY." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Supporto prioritario per i membri VIP." },
  { href: "/it/referral", icon: "🎁", title: "Programma Referral", desc: "Invita amici e guadagna vantaggi." },
];

const ContattoIt = () => (
  <>
    <MetaTags title="AKOKY Italia | Contatto — Supporto e Assistenza Premium" description="Contatta AKOKY: supporto membri, richieste partner, stampa e affiliazione. Team disponibile 24h." canonical="https://akoky.com/it/contatto" lang="it" />
    <HreflangTags slug="contatto" />
    <ContentPageLayout lang="it" title="AKOKY Italia | Contatto" description="Contatta AKOKY." canonical="https://akoky.com/it/contatto" heroTitle="Contattare AKOKY" heroSubtitle="Il nostro team è disponibile 24h per aiutarti. Trova il canale di contatto adatto alla tua richiesta." breadcrumb={[{ label: "Contattare AKOKY" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Supporto per i Membri</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Hai una domanda sul tuo account, una funzionalità o un'esperienza sulla piattaforma? Il nostro team di supporto risponde entro 24 ore lavorative.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-2">📧 Email di Supporto</h3>
              <p className="text-muted-foreground text-sm">support@akoky.com — Per tutte le domande relative al tuo account e alla piattaforma.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-2">🕐 Orari</h3>
              <p className="text-muted-foreground text-sm">Lun-Ven: 9-20 | Sab-Dom: 10-18. Risposta abituale: meno di 24h lavorative.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Richieste di Partnership</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Gestisci un <Link to="/it/club-libertini" className="text-primary hover:underline">club libertino</Link>, organizzi <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> o rappresenti un media? Abbiamo proposte specifiche per ogni profilo.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Club Libertini</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Referenzia la tua struttura nel directory AKOKY e accedi alla nostra community di 1,5 milioni di membri. Contatta il nostro team partnership.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Organizzatori di Eventi</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Pubblica i tuoi eventi nel calendario AKOKY. Scrivici a partenaires@akoky.com.</p>
          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Media e Influencer</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Per richieste stampa, interviste o collaborazioni: presse@akoky.com. Risposta entro 48h.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Segnalare un Profilo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Se trovi un profilo o contenuto che non rispetta la carta AKOKY, utilizza il pulsante 'Segnala'. Il nostro team gestisce ogni segnalazione entro 2 ore.</p>
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

export default ContattoIt;
