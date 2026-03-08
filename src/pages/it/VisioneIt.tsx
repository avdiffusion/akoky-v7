import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Qual è la missione di AKOKY?", answer: "Offrire alla community libertina europea una piattaforma premium, sicura ed etica, che metta il consenso, la sicurezza e l'autenticità al centro di ogni interazione." },
  { question: "AKOKY è conforme al GDPR?", answer: "Sì. AKOKY è gestita da Liberty-Interactive-Ltd e rispetta rigorosamente il GDPR. La protezione dei dati è una priorità assoluta." },
  { question: "In quali paesi è disponibile AKOKY?", answer: "AKOKY è disponibile in tutta Europa: Francia, Spagna, Belgio, Svizzera, Lussemburgo, Germania, Italia e Portogallo." },
];

const LINKS = [
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Funzionalità, community e innovazione." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Esperienza premium e vantaggi esclusivi." },
  { href: "/it/contatto", icon: "📩", title: "Contattaci", desc: "Il nostro team è disponibile 24h." },
  { href: "/it/attualita-libertine", icon: "📰", title: "Attualità", desc: "Tendenze e notizie del settore." },
];

const VisioneIt = () => (
  <>
    <MetaTags title="AKOKY | La Nostra Visione — L'Evoluzione del Libertinismo Moderno" description="Scopri la visione di AKOKY: una piattaforma libertina moderna, sicura e responsabile. Da AcoquinementVotre ad AKOKY." canonical="https://akoky.com/it/visione" lang="it" />
    <HreflangTags slug="visione" />
    <ContentPageLayout lang="it" title="AKOKY | La Nostra Visione" description="Scopri la visione di AKOKY." canonical="https://akoky.com/it/visione" heroTitle="La Nostra Visione" heroSubtitle="AKOKY è nata da una convinzione: il libertinismo moderno merita una piattaforma all'altezza." breadcrumb={[{ label: "La Nostra Visione" }]} faq={FAQ}>
      <section className="py-12 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">La Nascita di una Visione</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è l'evoluzione naturale di AcoquinementVotre, una piattaforma pioniera del libertinismo francese. Nel corso degli anni è diventato chiaro che la community libertina meritava qualcosa di più: un vero social network, un ecosistema completo che combinasse incontri, eventi, club e contenuti educativi in un unico luogo.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">I 5 Pilastri della Visione AKOKY</h2>
          <div className="grid md:grid-cols-1 gap-6 mb-8">
            {[
              { icon: "🗽", title: "Libertà Vissuta", desc: "Ogni adulto ha il diritto di esplorare la propria sessualità liberamente, senza giudizi e senza vergogna. La nostra piattaforma offre uno spazio dove la libertà è celebrata." },
              { icon: "🤝", title: "Consenso Chiaro", desc: "Il consenso non è un dettaglio: è il fondamento di tutto. Ogni funzionalità, ogni politica è costruita attorno al principio del consenso libero, informato ed entusiasta." },
              { icon: "🛡️", title: "Sicurezza Rafforzata", desc: "Verifica dell'identità, moderazione umana 24h/7d, crittografia dei dati e opzioni avanzate di privacy rendono AKOKY la piattaforma libertina più sicura d'Europa." },
              { icon: "💡", title: "Tecnologia al Servizio dell'Uomo", desc: "Il multi-profilo, la chat tipo WhatsApp, il live streaming e la geolocalizzazione sono strumenti per incontri più autentici." },
              { icon: "✨", title: "Eleganza e Discrezione", desc: "AKOKY rifiuta la volgarità. Interfaccia, linguaggio e contenuti riflettono una visione elegante e rispettosa del libertinismo." },
            ].map((p) => (
              <div key={p.title} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                <span className="text-3xl shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">AKOKY in Italia e in Europa</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Presente in Italia, Francia, Spagna, Belgio, Germania e Portogallo, <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link> costruisce una community europea unita dalla stessa visione: libertà, rispetto e autenticità. Scopri i <Link to="/it/club-libertini" className="text-primary hover:underline">club partner</Link> e gli <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> nella tua città.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Condividi la Nostra Visione</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Unisciti a 1,5 milioni di membri che credono in un libertinismo moderno, sicuro e rispettoso.</p>
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

export default VisioneIt;
