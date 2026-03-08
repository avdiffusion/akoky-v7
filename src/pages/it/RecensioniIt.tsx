import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import ReviewsList from "@/components/reviews/ReviewsList";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://akoky.com/it" },
    { "@type": "ListItem", "position": 2, "name": "Recensioni", "item": "https://akoky.com/it/recensioni" },
  ],
};

const PAGE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Recensioni AKOKY – Testimonianze Verificate dei Membri",
    "description": "Leggi le recensioni autentiche e verificate dei membri AKOKY. Testimonianze reali sull'esperienza, eventi, club associati e abbonamento premium.",
    "url": "https://akoky.com/it/recensioni",
    "inLanguage": "it",
    "isPartOf": { "@type": "WebSite", "name": "AKOKY", "url": "https://akoky.com" },
  },
  BREADCRUMB_SCHEMA,
];

const FAQ = [
  { question: "Le recensioni su AKOKY sono autentiche e verificate?", answer: "Sì, il 100% delle nostre recensioni sono autentiche e verificate. Ogni testimonianza proviene da un membro attivo della nostra community ed è verificata dal nostro team di moderazione prima della pubblicazione. A differenza di altre piattaforme, non pubblichiamo mai recensioni false né testimonianze sponsorizzate." },
  { question: "Qual è il voto medio di AKOKY?", answer: "AKOKY ottiene un voto medio di 4,7/5 basato su oltre 60 recensioni verificate di membri. Questo punteggio riflette la soddisfazione globale della nostra community riguardo alla qualità della piattaforma, alla sicurezza degli eventi e al rispetto del consenso." },
  { question: "Come posso lasciare una recensione su AKOKY?", answer: "Se sei membro attivo di AKOKY, puoi condividere la tua testimonianza contattando il nostro team tramite la pagina contatti. Valorizziamo le recensioni dettagliate che descrivano la tua esperienza reale: atmosfera degli eventi, qualità degli incontri, facilità d'uso dell'applicazione e rispetto delle regole del consenso." },
  { question: "Posso vincere un abbonamento lasciando una recensione?", answer: "Sì! Le testimonianze autentiche e dettagliate possono farti vincere fino a 12 mesi di abbonamento premium AKOKY. Ricompensiamo i membri che dedicano tempo a condividere la loro esperienza in modo costruttivo e onesto." },
  { question: "AKOKY è meglio valutato rispetto a Wyylde o NousLibertins?", answer: "Con un voto di 4,7/5, AKOKY si posiziona come una delle piattaforme libertine meglio valutate d'Europa. Il nostro approccio premium, centrato sulla qualità più che sulla quantità, ci differenzia da concorrenti come Wyylde, NousLibertins, Libertic o SexyLib." },
];

const RecensioniIt = () => (
  <>
    <Helmet>
      <html lang="it" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="AKOKY" />
      <meta name="twitter:site" content="@akoky_official" />
    </Helmet>
    <HreflangTags slug="recensioni" />

    <ContentPageLayout
      lang="it"
      title="Recensioni AKOKY – Testimonianze Verificate della Community Libertina"
      description="Leggi le recensioni autentiche e verificate dei membri AKOKY. Testimonianze reali sull'esperienza, eventi, club associati e abbonamento premium."
      canonical="https://akoky.com/it/recensioni"
      heroTitle="Recensioni e Valutazioni AKOKY – Testimonianze Verificate"
      heroSubtitle="Scopri oltre 60 testimonianze autentiche della community AKOKY, il social network libertino leader in Europa"
      heroImage="/images/jeux-cover.webp"
      breadcrumb={[{ label: "Recensioni" }]}
      faq={FAQ}
      schema={PAGE_SCHEMA}
    >
      {/* Intro SEO */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Perché le Recensioni AKOKY Contano</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Nel mondo delle <Link to="/it/libertinismo" className="text-primary hover:underline">piattaforme libertine</Link>, la trasparenza e l'autenticità sono essenziali. A differenza dei siti di incontri standard o di concorrenti come Wyylde e NousLibertins, AKOKY punta sulla qualità della community prima che sulla quantità. Ogni recensione pubblicata in questa pagina proviene da un membro verificato che ha realmente partecipato ai nostri <Link to="/it/eventi" className="text-primary hover:underline">eventi libertini</Link> o utilizzato i nostri servizi premium.</p>
            <p>Le nostre testimonianze coprono tutti gli aspetti dell'esperienza AKOKY: l'atmosfera nei <Link to="/it/clubbing" className="text-primary hover:underline">club libertini associati</Link>, la qualità della nostra <Link to="/it/app" className="text-primary hover:underline">applicazione mobile</Link>, il rispetto del consenso negli eventi, la moderazione della community e i vantaggi dell'<Link to="/it/vip" className="text-primary hover:underline">abbonamento VIP</Link>. Queste recensioni reali aiutano i nuovi membri a comprendere la nostra filosofia e a unirsi a una community libertina etica e accogliente.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <span className="text-4xl mb-4 block">⭐</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">★★★★★</span>
              <span className="text-5xl font-black text-primary block">4.7</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Voto medio</span>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">🧾</span>
              <span className="text-5xl font-black text-primary block">60+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">recensioni verificate</span>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">✅</span>
              <span className="text-5xl font-black text-primary block">100%</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Recensioni autentiche</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews from CSV */}
      <ReviewsList lang="it" />

      {/* CTA */}
      <section className="py-16 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Condividi la Tua Esperienza AKOKY e Vinci Fino a 12 Mesi VIP</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sei membro della nostra community libertina? La tua testimonianza è preziosa e potrebbe farti vincere fino a <strong className="text-foreground">12 mesi di abbonamento premium</strong>. Condividi la tua esperienza autentica sui nostri <Link to="/it/eventi" className="text-primary hover:underline">eventi libertini</Link>, la nostra <Link to="/it/app" className="text-primary hover:underline">applicazione</Link> o i <Link to="/it/clubbing" className="text-primary hover:underline">locali associati</Link>, e aiuta la community AKOKY a crescere con rispetto e autenticità.
          </p>
          <a href="https://akoky.com/it/contatto" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
            👉 Voglio condividere la mia opinione
          </a>
        </div>
      </section>

      {/* Scopri Anche */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Scopri Anche</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: "/it/club-libertini", icon: "🏛️", title: "Club Libertini", desc: "Annuario completo dei club verificati." },
              { href: "/it/saune-libertine", icon: "♨️", title: "Saune Libertine", desc: "Wellness e piacere in Italia." },
              { href: "/it/vip", icon: "💎", title: "AKOKY VIP", desc: "Vantaggi esclusivi per i membri premium." },
              { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida per i primi passi." },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="group block rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg transition-all">
                <span className="text-3xl mb-2 block">{l.icon}</span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">{l.title}</h3>
                <p className="text-xs text-muted-foreground">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentPageLayout>
  </>
);

export default RecensioniIt;
