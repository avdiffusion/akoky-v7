import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";

const FAQ = [
  { question: "Qual è la missione di AKOKY?", answer: "Offrire alla community libertina europea una piattaforma premium, sicura ed etica, che metta il consenso, la sicurezza e l'autenticità al centro di ogni interazione." },
  { question: "AKOKY è conforme al GDPR?", answer: "Sì. AKOKY è gestita da Liberty-Interactive-Ltd e rispetta rigorosamente il GDPR. La protezione dei dati è una priorità assoluta." },
  { question: "In quali paesi è disponibile AKOKY?", answer: "AKOKY è disponibile in tutta Europa: Francia, Spagna, Belgio, Svizzera, Lussemburgo, Germania, Italia e Portogallo." },
  { question: "Da quando esiste AKOKY?", answer: "AKOKY è l'evoluzione di AcoquinementVotre, fondata nel 2014. Il rebranding in AKOKY è avvenuto nel 2023 con il lancio della nuova piattaforma." },
  { question: "Qual è la differenza con un sito di incontri classico?", answer: "AKOKY è un social network libertino completo: non solo incontri, ma anche club, eventi, live streaming, chat di gruppo, viaggi e contenuti educativi." },
];

const LINKS = [
  { href: "/it/akoky", icon: "🌍", title: "Scopri AKOKY", desc: "Funzionalità, community e innovazione." },
  { href: "/it/vip", icon: "💎", title: "Diventa VIP", desc: "Esperienza premium e vantaggi esclusivi." },
  { href: "/it/contatto", icon: "📩", title: "Contattaci", desc: "Il nostro team è disponibile 24h." },
  { href: "/it/attualita-libertine", icon: "📰", title: "Attualità", desc: "Tendenze e notizie del settore." },
];

const TIMELINE = [
  { year: "2014", title: "La Nascita", desc: "AcoquinementVotre nasce come piattaforma pioniera del libertinismo francese. Un'idea semplice: offrire uno spazio sicuro e rispettoso." },
  { year: "2018", title: "La Crescita", desc: "La community raggiunge 500.000 membri. L'espansione europea inizia con Belgio e Svizzera." },
  { year: "2021", title: "L'Innovazione", desc: "Lancio del multi-profilo (prima mondiale), della chat WhatsApp-like e del sistema di testimonianze verificate." },
  { year: "2023", title: "Il Rebranding", desc: "AcoquinementVotre diventa AKOKY. Nuova identità, nuova piattaforma, stessa missione. Lancio in Italia, Spagna e Germania." },
  { year: "2025", title: "L'Espansione", desc: "1,5 milioni di membri, 120+ club verificati, 300+ eventi al mese. AKOKY diventa il riferimento europeo." },
  { year: "2026", title: "Il Futuro", desc: "Intelligenza artificiale, geolocalizzazione avanzata, nuove funzionalità comunitarie. La visione continua a evolversi." },
];

const VisioneIt = () => (
  <>
    <MetaTags title="AKOKY | La Nostra Visione — L'Evoluzione del Libertinismo Moderno" description="Scopri la visione di AKOKY: una piattaforma libertina moderna, sicura e responsabile. Da AcoquinementVotre ad AKOKY." canonical="https://akoky.com/it/visione" lang="it" />
    <HreflangTags slug="visione" />
    <ContentPageLayout lang="it" title="AKOKY | La Nostra Visione" description="Scopri la visione di AKOKY." canonical="https://akoky.com/it/visione" heroTitle="La Nostra Visione" heroSubtitle="AKOKY è nata da una convinzione: il libertinismo moderno merita una piattaforma all'altezza." heroImage="/images/es-vision-cover.webp" breadcrumb={[{ label: "La Nostra Visione" }]} faq={FAQ}>

      {/* Key Stats */}
      <section className="py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "2014", label: "Anno di fondazione" },
              { val: "1.5M+", label: "Membri in Europa" },
              { val: "8", label: "Paesi coperti" },
              { val: "6", label: "Lingue supportate" },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-xl border border-border bg-card">
                <span className="text-2xl md:text-3xl font-black text-primary block mb-1">{s.val}</span>
                <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birth */}
      <section className="py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">La Nascita di una Visione</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">AKOKY è l'evoluzione naturale di AcoquinementVotre, una piattaforma pioniera del libertinismo francese. Nel corso degli anni è diventato chiaro che la community libertina meritava qualcosa di più: un vero social network, un ecosistema completo che combinasse incontri, eventi, club e contenuti educativi in un unico luogo.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">La Nostra Storia</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            {TIMELINE.map((t, i) => (
              <div key={i} className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="inline-block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all">
                    <h3 className="font-bold text-foreground mb-1">{t.title}</h3>
                    <p className="text-muted-foreground text-sm">{t.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-black -translate-x-1/2 z-10 shrink-0">
                  {t.year.slice(2)}
                </div>
                <div className="md:hidden ml-10">
                  <span className="text-primary font-black text-sm">{t.year}</span>
                  <h3 className="font-bold text-foreground">{t.title}</h3>
                  <p className="text-muted-foreground text-sm">{t.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">I 5 Pilastri della Visione AKOKY</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🗽", title: "Libertà Vissuta", desc: "Ogni adulto ha il diritto di esplorare la propria sessualità liberamente, senza giudizi e senza vergogna. La nostra piattaforma offre uno spazio dove la libertà è celebrata." },
              { icon: "🤝", title: "Consenso Chiaro", desc: "Il consenso non è un dettaglio: è il fondamento di tutto. Ogni funzionalità, ogni politica è costruita attorno al principio del consenso libero, informato ed entusiasta." },
              { icon: "🛡️", title: "Sicurezza Rafforzata", desc: "Verifica dell'identità, moderazione umana 24h/7d, crittografia dei dati e opzioni avanzate di privacy rendono AKOKY la piattaforma libertina più sicura d'Europa." },
              { icon: "💡", title: "Tecnologia al Servizio dell'Uomo", desc: "Il multi-profilo, la chat tipo WhatsApp, il live streaming e la geolocalizzazione sono strumenti per incontri più autentici." },
              { icon: "✨", title: "Eleganza e Discrezione", desc: "AKOKY rifiuta la volgarità. Interfaccia, linguaggio e contenuti riflettono una visione elegante e rispettosa del libertinismo." },
              { icon: "🌍", title: "Respiro Europeo", desc: "Una community senza frontiere, unita da valori comuni. Da Milano a Madrid, da Berlino a Lisbona, il libertinismo parla una lingua universale." },
            ].map((p, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-muted/30 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Europe */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">AKOKY in Italia e in Europa</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Presente in Italia, Francia, Spagna, Belgio, Germania e Portogallo, <Link to="/it/akoky" className="text-primary hover:underline">AKOKY</Link> costruisce una community europea unita dalla stessa visione: libertà, rispetto e autenticità. Scopri i <Link to="/it/club-libertini" className="text-primary hover:underline">club partner</Link> e gli <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> nella tua città.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { flag: "🇮🇹", country: "Italia" }, { flag: "🇫🇷", country: "Francia" },
              { flag: "🇪🇸", country: "Spagna" }, { flag: "🇩🇪", country: "Germania" },
              { flag: "🇧🇪", country: "Belgio" }, { flag: "🇨🇭", country: "Svizzera" },
              { flag: "🇵🇹", country: "Portogallo" }, { flag: "🇱🇺", country: "Lussemburgo" },
            ].map((c, i) => (
              <div key={i} className="text-center p-4 rounded-xl border border-border bg-card">
                <span className="text-2xl block mb-1">{c.flag}</span>
                <span className="text-foreground text-sm font-medium">{c.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Condividi la Nostra Visione</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Unisciti a 1,5 milioni di membri che credono in un libertinismo moderno, sicuro e rispettoso.</p>
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

export default VisioneIt;
