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
  { name: "Torino", href: "/it/club-libertini-torino" },
  { name: "Bologna", href: "/it/club-libertini-bologna" },
  { name: "Firenze", href: "/it/club-libertini-firenze" },
  { name: "Napoli", href: "/it/club-libertini-napoli" },
];

const ClubLibertiniRoma = () => {
  const [data, setData] = useState<Etablissement[]>([]);
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((csv) => {
        const all = parseEtablissements(csv);
        const it = getByLang(all, "it");
        setData(it.filter((e) => e.city === "Roma" || e.region === "Lazio" || e.city === "Pozzuoli"));
      })
      .catch(() => {});
  }, []);

  const faq = [
    { question: "Dove trovare club libertini a Roma?", answer: "Roma ha diversi club concentrati nelle zone di Testaccio, EUR e Via Appia. Consulta l'annuario AKOKY per schede dettagliate con orari, prezzi e recensioni." },
    { question: "Qual è il club libertino più esclusivo di Roma?", answer: "Il Notte Romana Club sulla Via Appia è considerato il più esclusivo, con la sua villa storica, giardino privato e serate glamour." },
    { question: "Ci sono saune libertine a Roma?", answer: "Sì, le Terme dei Sensi nell'EUR si ispirano alle antiche terme romane con vasche calde, hammam turco e frigidarium." },
    { question: "Il dress code è obbligatorio?", answer: "Sì, la maggior parte dei club romani richiede un abbigliamento elegante. Alcuni hanno serate a tema con dress code specifici." },
    { question: "Si può andare in club libertino il giovedì a Roma?", answer: "Sì, il Labyrinth Club propone serate 'couples only' il giovedì, ideali per iniziare con un ambiente più intimo." },
    { question: "Roma è adatta ai principianti?", answer: "Assolutamente. Molti club organizzano serate dedicate e il personale è formato per accogliere le coppie alla prima esperienza." },
  ];

  return (
    <>
      <MetaTags
        title="Club Libertini a Roma 2026 — Guida Completa della Capitale | AKOKY"
        description="Scopri i migliori club libertini e saune di Roma 2026: Testaccio, EUR, Via Appia. Guide dettagliate, terme libertine, serate a tema e consigli per la prima visita nella Città Eterna."
        canonical="https://akoky.com/it/club-libertini-roma"
        lang="it"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="club-libertini-roma" />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Club Libertini a Roma 2026",
        description: "Guida completa ai club libertini della capitale italiana.",
        url: "https://akoky.com/it/club-libertini-roma",
        inLanguage: "it",
      }} />

      <ContentPageLayout
        lang="it"
        title="Club Libertini a Roma 2026 — Guida Completa | AKOKY"
        description="Guida ai club libertini e saune di Roma."
        canonical="https://akoky.com/it/club-libertini-roma"
        heroTitle="Club Libertini a Roma"
        heroSubtitle="Roma, la Città Eterna, unisce storia millenaria e una scena libertina in piena espansione. Dalle ville storiche dell'Appia alle terme moderne dell'EUR, scoprite il piacere alla romana."
        heroImage="/images/clubs-libertins-villes.webp"
        breadcrumb={[
          { label: "Clubbing", href: "/it/clubbing" },
          { label: "Club Libertini", href: "/it/club-libertini" },
          { label: "Roma" },
        ]}
        faq={faq}
      >
        {/* ═══════════ INTRO ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Il Libertinismo nella Città Eterna</h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Roma non è solo la culla della civiltà occidentale — è anche una città che ha sempre celebrato il <strong className="text-foreground">piacere e la sensualità</strong>. Dalle feste decadenti dell'antica Roma imperiale alle notti moderne dei club libertini, la capitale italiana mantiene una tradizione di libertà che si riflette nella sua scena swinger contemporanea.
              </p>
              <p>
                La Città Eterna offre un contesto unico: <strong className="text-foreground">ville storiche sulla Via Appia</strong> trasformate in club esclusivi, <strong className="text-foreground">terme moderne ispirate alle antiche thermae</strong> romane, e una clientela internazionale che arriva da ogni angolo del mondo. Roma è il crocevia perfetto tra storia, cultura e desiderio.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ QUARTIERI ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">I Quartieri Libertini di Roma</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Via Appia & Tuscolana", emoji: "🏛️", desc: "Ville storiche trasformate in club esclusivi. Il Notte Romana Club è il gioiello della zona con giardino privato e ambienti tematici." },
                { name: "Testaccio", emoji: "🎶", desc: "Quartiere della vita notturna romana. Il Labyrinth Club su tre livelli offre un'esperienza immersiva con cabine a tema e dark room." },
                { name: "EUR", emoji: "🏙️", desc: "Quartiere moderno con le Terme dei Sensi: mosaici, vasche termali e hammam turco ispirato alle antiche terme romane." },
                { name: "Trastevere & Centro", emoji: "🌙", desc: "Aperitivi libertini nei locali esclusivi del centro storico. L'atmosfera romantica di Trastevere è il preludio perfetto a una serata in club." },
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
            <h2 className="text-3xl font-bold text-foreground mb-8">L'Offerta Libertina Romana</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Club Libertini</h3>
                <p>Roma conta almeno <strong className="text-foreground">6 club libertini attivi</strong> di alto livello. Le ville romane offrono spazi unici impossibili da trovare altrove: giardini con fontane, sale affrescate, terrazze con vista sulla città. Le serate del venerdì e sabato attirano una clientela selezionata e internazionale.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Terme Libertine</h3>
                <p>Roma è l'unica città d'Italia dove le <strong className="text-foreground">saune libertine si ispirano direttamente alle antiche terme</strong>. Vasche calde, frigidarium, mosaici e ambienti termali creano un'esperienza sensoriale unica che unisce benessere e sensualità.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Serate Tematiche</h3>
                <p>I club romani propongono serate <strong className="text-foreground">ispirate alla storia</strong>: notti imperiali, feste baccanali, serate in toga. La domenica sera è una particolarità romana con serate 'dolce vita' dalle 18h all'1h. Consultate l'<Link to="/it/eventi" className="text-primary hover:underline">agenda AKOKY</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CLUBS FROM CSV ═══════════ */}
        {data.length > 0 && (
          <section className="py-16 px-4 bg-card/30">
            <div className="container max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Club e Terme Verificati a Roma</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((club) => (
                  <ClubCard key={club.id} club={club} onOpenDetail={setSelectedClub} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/it/club-libertini" className="text-primary hover:underline font-semibold">Vedi l'annuario completo →</Link>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════ CONSIGLI ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Consigli per Roma</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🍕", title: "Cena prima", desc: "Roma si vive prima a tavola. Una cena a Trastevere o Testaccio prima del club è il rituale perfetto per entrare nell'atmosfera." },
                { icon: "🚖", title: "Taxi consigliato", desc: "Molti club sono in zone non centrali. Prenotate un taxi di ritorno in anticipo, soprattutto il sabato notte." },
                { icon: "☀️", title: "Serate estive", desc: "D'estate, i club romani aprono giardini e terrazze. La stagione giugno-settembre offre esperienze uniche all'aperto." },
                { icon: "🏛️", title: "Combinare turismo", desc: "Roma è Roma: godetevi il Colosseo di giorno e il Labyrinth di notte. La doppia vita della Città Eterna." },
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Roma Libertina — Guida AKOKY 2026</h2>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>AKOKY è il riferimento per trovare i migliori <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini in Italia</Link>. A Roma, la nostra community è in forte crescita con migliaia di membri che condividono <Link to="/it/recensioni" className="text-primary hover:underline">recensioni verificate</Link>.</p>
              <p>Scoprite anche le <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link>, gli <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> e la nostra guida su <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">come iniziare nel libertinismo</Link>.</p>
            </div>
          </div>
        </section>

        {/* ═══════════ ALTRE CITTÀ ═══════════ */}
        <section className="py-12 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Esplora Altre Città</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCities.map((c) => (
                <Link key={c.name} to={c.href} className="text-sm px-4 py-2 border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-all">{c.name}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova il Tuo Club a Roma</h2>
            <p className="text-muted-foreground mb-8">Iscriviti gratuitamente e accedi a tutte le schede dei club romani con recensioni verificate.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-primary-foreground font-bold text-lg hover:scale-105 transition-all">Inizia Ora →</a>
          </div>
        </section>
      </ContentPageLayout>
      <ClubDetailModal club={selectedClub} onClose={() => setSelectedClub(null)} />
    </>
  );
};

export default ClubLibertiniRoma;
