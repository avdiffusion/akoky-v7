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
  { name: "Firenze", href: "/it/club-libertini-firenze" },
  { name: "Venezia", href: "/it/club-libertini" },
];

const ClubLibertiniNapoli = () => {
  const [data, setData] = useState<Etablissement[]>([]);
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((csv) => {
        const all = parseEtablissements(csv);
        const it = getByLang(all, "it");
        setData(it.filter((e) => e.city === "Napoli" || e.region === "Campania"));
      })
      .catch(() => {});
  }, []);

  const faq = [
    { question: "Dove trovare club libertini a Napoli?", answer: "Napoli ha una scena libertina in crescita con locali nelle zone di Chiaia, Vomero, Centro Storico e nella costiera flegrea. Consultate l'annuario AKOKY per schede aggiornate." },
    { question: "Qual è il miglior club libertino di Napoli?", answer: "Il panorama napoletano è in evoluzione. I club si distinguono per l'atmosfera calda e passionale tipica del Sud, con strutture che spaziano da locali intimi a spazi più ampi con piscina." },
    { question: "Quanto costa l'ingresso a Napoli?", answer: "I prezzi sono generalmente più accessibili rispetto al Nord: dai 15€ ai 50€ a coppia. Le donne single hanno quasi sempre ingresso gratuito." },
    { question: "Napoli è sicura per il libertinismo?", answer: "I club libertini napoletani garantiscono sicurezza e discrezione assoluta. Le strutture verificate su AKOKY rispettano standard elevati di privacy e accoglienza." },
    { question: "Si può combinare vacanza e libertinismo a Napoli?", answer: "Assolutamente! Napoli offre un mix unico di cultura, gastronomia e vita notturna. La Costiera Amalfitana e le isole (Capri, Ischia) ospitano eventi esclusivi durante l'estate." },
    { question: "Ci sono eventi libertini estivi a Napoli?", answer: "Sì, l'estate napoletana è ricca di pool party, serate in terrazza e feste sulle isole. Seguite l'agenda AKOKY per non perdere gli appuntamenti." },
  ];

  return (
    <>
      <MetaTags
        title="Club Libertini a Napoli 2026 — Guida Completa | AKOKY"
        description="Scopri i migliori club libertini e saune di Napoli 2026: Chiaia, Vomero, Costiera. Schede dettagliate, orari, dress code, prezzi e recensioni verificate."
        canonical="https://akoky.com/it/club-libertini-napoli"
        lang="it"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="club-libertini-napoli" />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Club Libertini a Napoli 2026",
        description: "Guida completa ai club libertini di Napoli.",
        url: "https://akoky.com/it/club-libertini-napoli",
        inLanguage: "it",
      }} />

      <ContentPageLayout
        lang="it"
        title="Club Libertini a Napoli 2026 — Guida Completa | AKOKY"
        description="Guida completa ai club libertini e saune di Napoli."
        canonical="https://akoky.com/it/club-libertini-napoli"
        heroTitle="Club Libertini a Napoli"
        heroSubtitle="Napoli, città di passione e trasgressione, rivela una scena libertina vibrante e autentica. Scoprite i club, gli eventi e i segreti della vita notturna partenopea."
        heroImage="/images/clubs-libertins-villes.webp"
        breadcrumb={[
          { label: "Clubbing", href: "/it/clubbing" },
          { label: "Club Libertini", href: "/it/club-libertini" },
          { label: "Napoli" },
        ]}
        faq={faq}
      >
        {/* ═══════════ INTRO ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Il Libertinismo a Napoli Oggi</h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Napoli è la città della <strong className="text-foreground">passione per eccellenza</strong>. Sotto il Vesuvio, il libertinismo si vive con l'intensità e il calore che contraddistinguono la cultura partenopea. La scena swinger napoletana è in piena espansione, con nuove strutture che aprono ogni anno e una community sempre più numerosa.
              </p>
              <p>
                A differenza delle città del Nord, Napoli offre un'esperienza libertina più <strong className="text-foreground">spontanea, calorosa e conviviale</strong>. I club napoletani sono noti per l'accoglienza straordinaria e l'atmosfera vibrante, dove la seduzione si mescola alla gioia di vivere tipicamente mediterranea.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ QUARTIERI ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Le Zone Libertine di Napoli</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Chiaia", emoji: "🌊", desc: "Quartiere elegante sul lungomare con locali raffinati e terrazze vista mare. L'atmosfera è glamour e la clientela selezionata. Perfetto per coppie che amano il lusso." },
                { name: "Vomero", emoji: "🏙️", desc: "Zona residenziale con club privati discreti e intimi. L'accesso è spesso su prenotazione, garantendo privacy assoluta e atmosfera raccolta." },
                { name: "Centro Storico", emoji: "🏛️", desc: "Tra i vicoli patrimonio UNESCO, locali nascosti con un fascino antico. L'esperienza è unica, tra storia e trasgressione in location insolite." },
                { name: "Costa Flegrea", emoji: "🌅", desc: "Pozzuoli, Bacoli e le isole flegree ospitano eventi estivi esclusivi con piscina, giardini privati e tramonti sul Golfo di Napoli." },
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Tipi di Strutture a Napoli</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Club Libertini</h3>
                <p>Napoli conta circa <strong className="text-foreground">4-5 club libertini attivi</strong>, con un mix tra strutture storiche e nuove aperture. L'atmosfera è calda e accogliente, con musica dal vivo in alcune serate e spazi interni/esterni durante l'estate.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Pool Party e Serate Estive</h3>
                <p>L'estate napoletana è sinonimo di <strong className="text-foreground">pool party, feste in villa e aperitivi libertini</strong> sulla costa. Da giugno a settembre, la scena si sposta all'aperto con location mozzafiato tra Posillipo e le isole del Golfo.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Vacanze Libertine</h3>
                <p><strong className="text-foreground">Capri, Ischia e la Costiera Amalfitana</strong> sono mete ambite per il libertinismo vacanziero. Resort e ville private organizzano weekend esclusivi. Consultate l'<Link to="/it/eventi" className="text-primary hover:underline">agenda AKOKY</Link> per le date.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CLUBS FROM CSV ═══════════ */}
        {data.length > 0 && (
          <section className="py-16 px-4 bg-card/30">
            <div className="container max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Club e Saune Verificati a Napoli</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Consigli per una Serata a Napoli</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🍕", title: "Cenate napoletano", desc: "Pizza, frittura di mare, babà: Napoli è la capitale del gusto. Una cena vista Golfo è il miglior preludio per una serata indimenticabile." },
                { icon: "🔥", title: "Lasciatevi andare", desc: "L'atmosfera napoletana è contagiosa. La passione si respira ovunque: non abbiate paura di lasciarvi trasportare dal ritmo della città." },
                { icon: "🚕", title: "Taxi o auto privata", desc: "Per gli spostamenti serali, preferite taxi o NCC per raggiungere i club in tutta sicurezza e discrezione." },
                { icon: "☀️", title: "Estate = outdoor", desc: "Da maggio a ottobre, la scena si sposta all'aperto. Pool party e terrazze sono imperdibili. Prenotate in anticipo per gli eventi estivi." },
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
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Napoli Libertina in Cifre</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "4+", label: "Club attivi" },
                { value: "60K", label: "Nella community" },
                { value: "15€", label: "Ingresso minimo" },
                { value: "4.1★", label: "Rating medio" },
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Napoli Libertina — Guida AKOKY 2026</h2>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>AKOKY è la piattaforma di riferimento per i <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini in Italia</Link>. A Napoli, la community partenopea cresce con entusiasmo, alimentata dalle <Link to="/it/recensioni" className="text-primary hover:underline">recensioni verificate</Link> degli utenti.</p>
              <p>Che siate alla <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">prima esperienza</Link> o libertini esperti, Napoli vi conquisterà. Scoprite le <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link>, gli <Link to="/it/eventi" className="text-primary hover:underline">eventi</Link> e il <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link>.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova il Tuo Club a Napoli</h2>
            <p className="text-muted-foreground mb-8">Iscriviti gratuitamente su AKOKY e scopri i club napoletani con recensioni verificate della community.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-primary-foreground font-bold text-lg hover:scale-105 transition-all">Inizia Ora →</a>
          </div>
        </section>
      </ContentPageLayout>
      <ClubDetailModal club={selectedClub} onClose={() => setSelectedClub(null)} />
    </>
  );
};

export default ClubLibertiniNapoli;
