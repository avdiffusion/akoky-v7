import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ClubCard from "@/components/clubs/ClubCard";
import ClubDetailModal from "@/components/clubs/ClubDetailModal";
import { parseEtablissements, getByLang, type Etablissement } from "@/lib/etablissements";

const otherCities = [
  { name: "Roma", href: "/it/club-libertini-roma" },
  { name: "Torino", href: "/it/club-libertini-torino" },
  { name: "Bologna", href: "/it/club-libertini-bologna" },
  { name: "Firenze", href: "/it/club-libertini-firenze" },
  { name: "Napoli", href: "/it/club-libertini-napoli" },
  { name: "Venezia", href: "/it/club-libertini" },
];

const ClubLibertiniMilano = () => {
  const [data, setData] = useState<Etablissement[]>([]);
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((csv) => {
        const all = parseEtablissements(csv);
        const it = getByLang(all, "it");
        setData(it.filter((e) => e.city === "Milano" || e.region === "Lombardia"));
      })
      .catch(() => {});
  }, []);

  const faq = [
    { question: "Dove trovare club libertini a Milano?", answer: "Milano ha diversi club e saune libertine concentrati nelle zone di Navigli, Porta Romana, Isola e Lingotto. Consulta l'annuario AKOKY per la lista completa con schede dettagliate." },
    { question: "Qual è il miglior club libertino di Milano?", answer: "Dipende dalle vostre preferenze: il Club Privé Milano nei Navigli per l'esclusività, il Desiderio Club a Porta Romana per l'intimità, l'Eden Sauna per il benessere. Leggete le recensioni su AKOKY." },
    { question: "Quanto costa l'ingresso in un club a Milano?", answer: "I prezzi variano da 30€ a 80€ a coppia. Le donne single hanno spesso ingresso gratuito o ridotto. Le serate speciali possono avere tariffe maggiorate." },
    { question: "C'è un dress code nei club milanesi?", answer: "Sì, Milano è particolarmente esigente sul dress code: abito elegante per gli uomini, abito da cocktail o lingerie fine per le donne. Verificate le regole specifiche di ogni club." },
    { question: "I club accettano coppie alla prima esperienza?", answer: "Sì, molti club milanesi organizzano serate dedicate ai principianti con accoglienza personalizzata e tour degli spazi." },
    { question: "Ci sono serate libertine durante la settimana?", answer: "Sì, alcune strutture come l'Eden Sauna sono aperte anche in settimana. I club propongono serate dal giovedì al sabato." },
  ];

  return (
    <>
      <MetaTags
        title="Club Libertini a Milano 2026 — Guida Completa | AKOKY"
        description="Scopri i migliori club libertini e saune di Milano 2026: Navigli, Porta Romana, Isola. Schede dettagliate, orari, dress code, prezzi e recensioni verificate."
        canonical="https://akoky.com/it/club-libertini-milano"
        lang="it"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="club-libertini-milano" />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Club Libertini a Milano 2026",
        description: "Guida completa ai club libertini di Milano.",
        url: "https://akoky.com/it/club-libertini-milano",
        inLanguage: "it",
      }} />

      <ContentPageLayout
        lang="it"
        title="Club Libertini a Milano 2026 — Guida Completa | AKOKY"
        description="Guida completa ai club libertini e saune di Milano."
        canonical="https://akoky.com/it/club-libertini-milano"
        heroTitle="Club Libertini a Milano"
        heroSubtitle="Milano, capitale del glamour e della moda, ospita una scena libertina tra le più raffinate d'Italia. Scoprite i club, le saune e gli eventi che animano le notti milanesi."
        heroImage="/images/clubs-libertins-villes.webp"
        breadcrumb={[
          { label: "Clubbing", href: "/it/clubbing" },
          { label: "Club Libertini", href: "/it/club-libertini" },
          { label: "Milano" },
        ]}
        faq={faq}
      >
        {/* ═══════════ INTRO ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Il Libertinismo a Milano Oggi</h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Milano non è solo la capitale della moda e del design — è anche l'epicentro del <strong className="text-foreground">libertinismo italiano</strong>. Con la sua mentalità internazionale e cosmopolita, la città offre una scena swinger tra le più attive e diversificate d'Europa. Dai club esclusivi dei <strong className="text-foreground">Navigli</strong> alle saune raffinate dell'<strong className="text-foreground">Isola</strong>, Milano propone esperienze per tutti i gusti e livelli di esperienza.
              </p>
              <p>
                La metropoli lombarda attira coppie e single da tutta Italia e dall'estero, creando un melting pot culturale unico. I club milanesi sono rinomati per la loro <strong className="text-foreground">eleganza, discrezione e qualità</strong> del servizio, riflettendo lo spirito della città.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ QUARTIERI ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">I Quartieri Libertini di Milano</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Navigli", emoji: "🚣", desc: "Il cuore pulsante della vita notturna milanese. Club esclusivi lungo i canali storici con atmosfere uniche e clientela internazionale." },
                { name: "Porta Romana", emoji: "🏛️", desc: "Zone di club sofisticati con ambiente intimo. Perfetto per coppie che cercano un'esperienza raffinata e discreta." },
                { name: "Isola", emoji: "🌿", desc: "Quartiere trendy con saune di lusso e locali moderni. L'Eden Sauna Club è un punto di riferimento per gli amanti del benessere libertino." },
                { name: "Lago di Como", emoji: "🏔️", desc: "A 40 minuti da Milano, ville private sulle rive del lago ospitano eventi esclusivi su invito. Il top del lusso libertino lombardo." },
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Tipi di Strutture a Milano</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Club Libertini</h3>
                <p>Milano conta almeno <strong className="text-foreground">8 club libertini attivi</strong>, dai più esclusivi ai più accessibili. La maggior parte propone bar, pista da ballo, cabine private e aree tematiche. Le serate del venerdì e sabato sono le più frequentate, con dress code rigoroso e atmosfera elettrizzante.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Saune Libertine</h3>
                <p>Le saune milanesi sono tra le più moderne d'Italia. <strong className="text-foreground">Hammam, jacuzzi, sauna finlandese, cabine private</strong> e zone relax: il mix perfetto tra benessere e sensualità. Aperte anche in settimana, sono ideali per chi cerca un'esperienza più rilassata.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Eventi e Serate Private</h3>
                <p>Milano ospita regolarmente <strong className="text-foreground">pool party, aperitivi libertini e feste in villa</strong> nella cintura milanese. Consultate l'<Link to="/it/eventi" className="text-primary hover:underline">agenda AKOKY</Link> per non perdere nulla.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CLUBS FROM CSV ═══════════ */}
        {data.length > 0 && (
          <section className="py-16 px-4 bg-card/30">
            <div className="container max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Club e Saune Verificati a Milano</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Consigli per una Serata a Milano</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "👔", title: "Dress code impeccabile", desc: "Milano è la città della moda: investite nell'abbigliamento. Camicia e scarpe eleganti per gli uomini, abito da cocktail per le donne." },
                { icon: "📅", title: "Prenotate in anticipo", desc: "I club migliori si riempiono velocemente, soprattutto il sabato. Prenotate tramite AKOKY per garanzia d'ingresso." },
                { icon: "🍸", title: "Aperitivo prima", desc: "Cenate nei ristoranti dei Navigli o di Brera prima di andare in club. L'atmosfera milanese si vive anche a tavola." },
                { icon: "🔒", title: "Discrezione totale", desc: "Milano apprezza la riservatezza. I club garantiscono anonimato e sicurezza. Nessuna foto, nessun commento fuori." },
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

        {/* ═══════════ SEO TEXT ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto prose prose-invert prose-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">Milano Libertina — Guida AKOKY 2026</h2>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>AKOKY è la piattaforma di riferimento per trovare i migliori <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini in Italia</Link>. A Milano, la nostra community conta migliaia di membri attivi che condividono <Link to="/it/recensioni" className="text-primary hover:underline">recensioni verificate</Link> e raccomandazioni.</p>
              <p>Che siate una coppia alla <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">prima esperienza</Link> o libertini esperti, Milano offre l'ambiente perfetto. Esplorate anche le <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link>, gli <Link to="/it/eventi" className="text-primary hover:underline">eventi in programma</Link> e il nostro <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link> per comprendere i codici.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova il Tuo Club a Milano</h2>
            <p className="text-muted-foreground mb-8">Iscriviti gratuitamente su AKOKY e accedi a tutte le schede dei club milanesi con recensioni verificate.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-primary-foreground font-bold text-lg hover:scale-105 transition-all">Inizia Ora →</a>
          </div>
        </section>
      </ContentPageLayout>
      <ClubDetailModal club={selectedClub} onClose={() => setSelectedClub(null)} />
    </>
  );
};

export default ClubLibertiniMilano;
