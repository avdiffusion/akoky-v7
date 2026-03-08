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
  { name: "Firenze", href: "/it/club-libertini-firenze" },
  { name: "Napoli", href: "/it/club-libertini-napoli" },
  { name: "Venezia", href: "/it/club-libertini" },
];

const ClubLibertiniBologna = () => {
  const [data, setData] = useState<Etablissement[]>([]);
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((csv) => {
        const all = parseEtablissements(csv);
        const it = getByLang(all, "it");
        setData(it.filter((e) => e.city === "Bologna" || e.region === "Emilia-Romagna"));
      })
      .catch(() => {});
  }, []);

  const faq = [
    { question: "Dove trovare club libertini a Bologna?", answer: "Bologna ha diversi locali libertini concentrati nella zona universitaria, nei dintorni di Via Zamboni e nel quartiere Santo Stefano. Consultate l'annuario AKOKY per la lista completa." },
    { question: "Qual è il miglior club libertino di Bologna?", answer: "Bologna offre un mix tra club storici e nuove realtà. Il panorama comprende club privati in centro, saune nella prima periferia e locali a tema nelle colline bolognesi." },
    { question: "Quanto costa entrare in un club a Bologna?", answer: "I prezzi variano dai 20€ ai 60€ a coppia. Le donne single hanno spesso ingresso ridotto. Le serate a tema possono avere tariffe maggiorate." },
    { question: "C'è un dress code nei club bolognesi?", answer: "La maggior parte dei club richiede un abbigliamento curato: elegante casual per gli uomini, abito da sera o lingerie per le donne. Lo stile bolognese è meno formale di Milano ma sempre raffinato." },
    { question: "Bologna è adatta ai principianti?", answer: "Assolutamente sì. L'atmosfera bolognese è nota per essere accogliente e rilassata. Molti club propongono serate dedicate ai neofiti con accompagnamento personalizzato." },
    { question: "Ci sono eventi libertini a Bologna durante la settimana?", answer: "Alcuni locali aprono il giovedì sera. Il venerdì e il sabato sono le serate principali, con eventi speciali durante le fiere e i festival della città." },
  ];

  return (
    <>
      <MetaTags
        title="Club Libertini a Bologna 2026 — Guida Completa | AKOKY"
        description="Scopri i migliori club libertini e saune di Bologna 2026: zona universitaria, Santo Stefano, colline. Schede dettagliate, orari, dress code, prezzi e recensioni verificate."
        canonical="https://akoky.com/it/club-libertini-bologna"
        lang="it"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="club-libertini-bologna" />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Club Libertini a Bologna 2026",
        description: "Guida completa ai club libertini di Bologna.",
        url: "https://akoky.com/it/club-libertini-bologna",
        inLanguage: "it",
      }} />

      <ContentPageLayout
        lang="it"
        title="Club Libertini a Bologna 2026 — Guida Completa | AKOKY"
        description="Guida completa ai club libertini e saune di Bologna."
        canonical="https://akoky.com/it/club-libertini-bologna"
        heroTitle="Club Libertini a Bologna"
        heroSubtitle="Bologna la Dotta, la Grassa, la Rossa — e anche la più libertina dell'Emilia-Romagna. Scoprite la scena swinger di una città che ha fatto della convivialità il suo stile di vita."
        heroImage="/images/clubs-libertins-villes.webp"
        breadcrumb={[
          { label: "Clubbing", href: "/it/clubbing" },
          { label: "Club Libertini", href: "/it/club-libertini" },
          { label: "Bologna" },
        ]}
        faq={faq}
      >
        {/* ═══════════ INTRO ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Il Libertinismo a Bologna Oggi</h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Bologna è una città unica nel panorama libertino italiano. La sua tradizione universitaria millenaria ha forgiato una mentalità <strong className="text-foreground">aperta, curiosa e sperimentale</strong> che si riflette anche nella vita notturna. I portici storici nascondono una scena swinger vivace e diversificata, dalle serate in club privati agli incontri più intimi nelle residenze delle colline.
              </p>
              <p>
                Con la sua posizione strategica al centro dell'<strong className="text-foreground">Emilia-Romagna</strong>, Bologna attira libertini da Modena, Parma, Rimini e Ferrara, creando una community regionale dinamica. La gastronomia eccezionale della città aggiunge un tocco di piacere in più: cenare in una trattoria bolognese prima di una serata in club è un rituale irrinunciabile.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ QUARTIERI ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Le Zone Libertine di Bologna</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Zona Universitaria", emoji: "🎓", desc: "Il cuore pulsante della Bologna notturna. Via Zamboni e dintorni ospitano locali aperti fino a tardi con una clientela giovane e cosmopolita." },
                { name: "Santo Stefano", emoji: "⛪", desc: "Quartiere elegante con club privati sofisticati. L'atmosfera è intima e il pubblico selezionato, ideale per coppie esigenti." },
                { name: "Colline Bolognesi", emoji: "🏔️", desc: "Ville storiche trasformate in location per eventi esclusivi su invito. Il panorama sulla città aggiunge fascino alle serate estive." },
                { name: "Prima Periferia", emoji: "🏢", desc: "Saune e club più grandi con ampi spazi e parcheggio privato. Strutture moderne con ogni comfort, ideali per chi cerca discrezione e praticità." },
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Tipi di Strutture a Bologna</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Club Privati</h3>
                <p>Bologna conta almeno <strong className="text-foreground">5 club libertini attivi</strong>, molti dei quali in funzione da oltre un decennio. L'atmosfera è generalmente più rilassata rispetto a Milano, con un'enfasi sulla socializzazione e la convivialità tipicamente emiliana.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Saune e Centri Benessere</h3>
                <p>Le saune bolognesi combinano benessere e libertinismo con <strong className="text-foreground">jacuzzi, hammam, sale relax e aree private</strong>. Alcune strutture propongono anche massaggi di coppia e trattamenti spa.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Eventi e Fiere</h3>
                <p>Bologna ospita importanti <strong className="text-foreground">fiere ed eventi</strong> durante l'anno, che generano serate libertine speciali in tutta la città. Consultate l'<Link to="/it/eventi" className="text-primary hover:underline">agenda AKOKY</Link> per restare aggiornati.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CLUBS FROM CSV ═══════════ */}
        {data.length > 0 && (
          <section className="py-16 px-4 bg-card/30">
            <div className="container max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Club e Saune Verificati a Bologna</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Consigli per una Serata a Bologna</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🍝", title: "Cenate prima", desc: "Bologna è la capitale gastronomica d'Italia. Una cena in trattoria con tortellini e Lambrusco è il preludio perfetto per una serata libertina." },
                { icon: "👗", title: "Stile casual chic", desc: "L'atmosfera bolognese è meno formale di Milano. Un look curato ma non troppo rigido è l'ideale. Lingerie di qualità è sempre apprezzata." },
                { icon: "🚗", title: "Parcheggio facile", desc: "I club in periferia offrono parcheggio privato e discreto. In centro, usate i parcheggi coperti di Via Rizzoli o Piazza Maggiore." },
                { icon: "🤝", title: "Spirito emiliano", desc: "I bolognesi sono famosi per la loro cordialità. Non esitate a socializzare al bar prima di esplorare gli spazi del club." },
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
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Bologna Libertina in Cifre</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "5+", label: "Club attivi" },
                { value: "85K", label: "Abitanti nella scena" },
                { value: "20€", label: "Ingresso minimo" },
                { value: "4.3★", label: "Rating medio" },
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Bologna Libertina — Guida AKOKY 2026</h2>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>AKOKY è la piattaforma di riferimento per trovare i migliori <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini in Italia</Link>. A Bologna, la nostra community cresce rapidamente grazie al passaparola e alle <Link to="/it/recensioni" className="text-primary hover:underline">recensioni verificate</Link>.</p>
              <p>Che siate una coppia alla <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">prima esperienza</Link> o libertini navigati, Bologna vi accoglierà con il suo spirito aperto. Esplorate anche le <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link>, gli <Link to="/it/eventi" className="text-primary hover:underline">eventi in programma</Link> e il nostro <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link>.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova il Tuo Club a Bologna</h2>
            <p className="text-muted-foreground mb-8">Iscriviti gratuitamente su AKOKY e accedi a tutte le schede dei club bolognesi con recensioni verificate.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-primary-foreground font-bold text-lg hover:scale-105 transition-all">Inizia Ora →</a>
          </div>
        </section>
      </ContentPageLayout>
      <ClubDetailModal club={selectedClub} onClose={() => setSelectedClub(null)} />
    </>
  );
};

export default ClubLibertiniBologna;
