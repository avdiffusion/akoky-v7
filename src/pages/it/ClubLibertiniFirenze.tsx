import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ClubCard from "@/components/clubs/ClubCard";
import ClubDetailModal from "@/components/clubs/ClubDetailModal";
import { parseEtablissements, getByLang, type Etablissement } from "@/lib/etablissements";

const otherCities = [
  { name: "Milano", href: "/it/club-libertini-milano" },
  { name: "Roma", href: "/it/club-libertini-roma" },
  { name: "Torino", href: "/it/club-libertini-torino" },
  { name: "Bologna", href: "/it/club-libertini-bologna" },
  { name: "Napoli", href: "/it/club-libertini-napoli" },
  { name: "Venezia", href: "/it/club-libertini" },
];

const ClubLibertiniFirenze = () => {
  const [data, setData] = useState<Etablissement[]>([]);
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((csv) => {
        const all = parseEtablissements(csv);
        const it = getByLang(all, "it");
        setData(it.filter((e) => e.city === "Firenze" || e.region === "Toscana"));
      })
      .catch(() => {});
  }, []);

  const faq = [
    { question: "Dove trovare club libertini a Firenze?", answer: "Firenze ha una scena libertina discreta ma raffinata, con locali nella zona dell'Oltrarno, San Frediano e nella campagna circostante. Consultate AKOKY per le schede aggiornate." },
    { question: "Qual è il miglior club libertino di Firenze?", answer: "Firenze privilegia la qualità alla quantità. I club fiorentini sono noti per la loro esclusività, l'arredamento ricercato e le location in palazzi storici o ville toscane." },
    { question: "Quanto costa entrare in un club a Firenze?", answer: "I prezzi oscillano tra 25€ e 70€ a coppia. Alcune location esclusive nelle colline possono avere tariffe più alte per eventi speciali." },
    { question: "C'è un dress code a Firenze?", answer: "Firenze è una città d'arte e di stile. Il dress code è elegante: abito scuro per gli uomini, abito da cocktail o lingerie raffinata per le donne. La cura dell'estetica è fondamentale." },
    { question: "Si possono combinare cultura e libertinismo a Firenze?", answer: "Sì, è il bello di Firenze! Galleria degli Uffizi di giorno, cena in enoteca a sera, club libertino la notte. Una combinazione perfetta di arte, buon gusto e piacere." },
    { question: "Ci sono eventi nelle colline toscane?", answer: "Sì, da aprile a ottobre le ville del Chianti ospitano serate esclusive con degustazioni di vino, cena gourmet e atmosfera libertina sotto le stelle toscane." },
  ];

  return (
    <>
      <MetaTags
        title="Club Libertini a Firenze 2026 — Guida Completa | AKOKY"
        description="Scopri i migliori club libertini e saune di Firenze 2026: Oltrarno, colline del Chianti, ville toscane. Schede dettagliate, orari, dress code e recensioni verificate."
        canonical="https://akoky.com/it/club-libertini-firenze"
        lang="it"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="club-libertini-firenze" />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Club Libertini a Firenze 2026",
        description: "Guida completa ai club libertini di Firenze.",
        url: "https://akoky.com/it/club-libertini-firenze",
        inLanguage: "it",
      }} />

      <ContentPageLayout
        lang="it"
        title="Club Libertini a Firenze 2026 — Guida Completa | AKOKY"
        description="Guida completa ai club libertini e saune di Firenze."
        canonical="https://akoky.com/it/club-libertini-firenze"
        heroTitle="Club Libertini a Firenze"
        heroSubtitle="Firenze, culla del Rinascimento e dell'arte di vivere, custodisce una scena libertina d'élite tra palazzi storici, ville nel Chianti e locali d'autore."
        heroImage="/images/clubs-libertins-villes.webp"
        breadcrumb={[
          { label: "Clubbing", href: "/it/clubbing" },
          { label: "Club Libertini", href: "/it/club-libertini" },
          { label: "Firenze" },
        ]}
        faq={faq}
      >
        {/* ═══════════ INTRO ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Il Libertinismo a Firenze Oggi</h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Firenze incarna la <strong className="text-foreground">bellezza, la raffinatezza e l'arte di vivere</strong> all'italiana. Non sorprende che la scena libertina fiorentina rifletta questi valori: club esclusivi in palazzi storici, serate in ville del Chianti, un'attenzione maniacale all'estetica e all'atmosfera.
              </p>
              <p>
                La città attira una clientela internazionale tutto l'anno, con coppie che combinano vacanza culturale e esperienze libertine. La <strong className="text-foreground">Toscana</strong> offre un contesto unico: dalle colline ondulate del Chianti ai borghi medievali, ogni serata diventa un'esperienza multisensoriale tra vino, gastronomia e sensualità.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ QUARTIERI ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Le Zone Libertine di Firenze</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Oltrarno", emoji: "🎨", desc: "Il quartiere degli artigiani e delle botteghe d'arte nasconde locali esclusivi e intimisti. L'atmosfera bohémien si mescola all'eleganza fiorentina in spazi unici." },
                { name: "San Frediano", emoji: "🍷", desc: "Zona di vita notturna con enoteca e bar dove iniziare la serata prima di raggiungere i club privati. Il quartiere più trendy di Firenze." },
                { name: "Colline del Chianti", emoji: "🏡", desc: "A 20-40 minuti dal centro, ville rinascimentali trasformate in location per serate esclusive con degustazione e cena gourmet sotto le stelle." },
                { name: "Fiesole e dintorni", emoji: "⛰️", desc: "Le colline di Fiesole offrono privacy assoluta e panorami mozzafiatosi. Location per eventi su invito con piscina, giardini all'italiana e terrazze panoramiche." },
              ].map((q) => (
                <div key={q.name} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
                  <span className="text-3xl">{q.emoji}</span>
                  <h3 className="text-lg font-bold text-foreground mt-3 mb-2">{q.name}</h3>
                  <p className="text-muted-foreground text-sm">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ TYPES ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Tipi di Esperienze a Firenze</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Club Privati d'Élite</h3>
                <p>Firenze conta <strong className="text-foreground">3-4 club libertini attivi</strong> in città, con un focus sull'esclusività. Le location sono spesso in edifici storici con affreschi, soffitti a volta e arredamento d'epoca, creando un'atmosfera impossibile da replicare altrove.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Serate in Villa Toscana</h3>
                <p>L'esperienza più emblematica: <strong className="text-foreground">cena gourmet, degustazione di Chianti Classico e serata libertina</strong> in una villa rinascimentale. Queste serate, organizzate da aprile a ottobre, attirano coppie da tutta Europa.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Weekend Libertini</h3>
                <p>Alcuni agriturismi e boutique hotel toscani propongono <strong className="text-foreground">weekend completi</strong> con attività culturali di giorno e serate libertine. Seguite l'<Link to="/it/eventi" className="text-primary hover:underline">agenda AKOKY</Link> per le prossime date.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CLUBS FROM CSV ═══════════ */}
        {data.length > 0 && (
          <section className="py-16 px-4 bg-card/30">
            <div className="container max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Club e Saune Verificati a Firenze</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((club) => (
                  <ClubCard key={club.id} club={club} onOpenDetail={setSelectedClub} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/it/club-libertini" className="text-primary hover:underline font-semibold">
                  Vedi l'annuario completo →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ CONSIGLI ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Consigli per una Serata a Firenze</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🍷", title: "Iniziate con il vino", desc: "Un aperitivo in una delle enoteche dell'Oltrarno è il modo perfetto per entrare nell'atmosfera. Chianti, Brunello, Super Tuscan: scegliete il vostro nettare." },
                { icon: "👘", title: "Eleganza rinascimentale", desc: "Firenze ama l'eleganza senza tempo. Tessuti pregiati, accessori ricercati, profumi d'autore. Curate ogni dettaglio come farebbe un artigiano fiorentino." },
                { icon: "🏛️", title: "Cultura di giorno", desc: "Visitare gli Uffizi o Palazzo Pitti di giorno rende la serata ancora più speciale. L'arte stimola i sensi e prepara ad esperienze intense." },
                { icon: "🚗", title: "Noleggiate un'auto", desc: "Per le serate nelle ville del Chianti, un'auto a noleggio è indispensabile. Le strade toscane al tramonto sono parte dell'esperienza." },
              ].map((tip) => (
                <div key={tip.title} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CIFRE CHIAVE ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Firenze Libertina in Cifre</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "3+", label: "Club attivi" },
                { value: "45K", label: "Nella community" },
                { value: "25€", label: "Ingresso minimo" },
                { value: "4.5★", label: "Rating medio" },
              ].map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-all">
                  <p className="text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SEO TEXT ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto prose prose-invert prose-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Firenze Libertina — Guida AKOKY 2026</h2>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>AKOKY è la piattaforma di riferimento per i <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini in Italia</Link>. A Firenze, la community toscana apprezza la qualità e l'esclusività delle esperienze proposte. Leggete le <Link to="/it/recensioni" className="text-primary hover:underline">recensioni verificate</Link>.</p>
              <p>Che siate alla <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">prima esperienza</Link> o conoscitori, Firenze offre il meglio. Esplorate le <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link>, gli <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> e il <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link>.</p>
            </div>
          </div>
        </section>

        {/* ═══════════ ALTRE CITTÀ ═══════════ */}
        <section className="py-12 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Esplora Altre Città</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCities.map((c) => (
                <Link key={c.name} to={c.href} className="text-sm px-4 py-2 border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-all">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova il Tuo Club a Firenze</h2>
            <p className="text-muted-foreground mb-8">Iscriviti gratuitamente su AKOKY e scopri i club fiorentini con recensioni verificate e schede complete.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-primary-foreground font-bold text-lg hover:scale-105 transition-all">Inizia Ora →</a>
          </div>
        </section>
      </ContentPageLayout>
      <ClubDetailModal club={selectedClub} onClose={() => setSelectedClub(null)} />
    </>
  );
};

export default ClubLibertiniFirenze;
