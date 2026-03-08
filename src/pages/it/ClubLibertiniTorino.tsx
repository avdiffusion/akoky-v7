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
  { name: "Bologna", href: "/it/club-libertini" },
  { name: "Firenze", href: "/it/club-libertini" },
  { name: "Napoli", href: "/it/club-libertini" },
  { name: "Venezia", href: "/it/club-libertini" },
];

const ClubLibertiniTorino = () => {
  const [data, setData] = useState<Etablissement[]>([]);
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((csv) => {
        const all = parseEtablissements(csv);
        const it = getByLang(all, "it");
        setData(it.filter((e) => e.city === "Torino" || e.region === "Piemonte"));
      })
      .catch(() => {});
  }, []);

  const faq = [
    { question: "Dove trovare club libertini a Torino?", answer: "Torino ha club concentrati nelle zone di San Salvario, Crocetta e Lingotto. Il Secret Club è il più rinomato. Consulta l'annuario AKOKY per schede complete." },
    { question: "Torino è adatta ai principianti?", answer: "Assolutamente. I club torinesi sono noti per la loro atmosfera accogliente e l'attenzione ai nuovi arrivati. San Salvario è il quartiere ideale per iniziare." },
    { question: "Quanto costa una serata a Torino?", answer: "Prezzi generalmente più accessibili rispetto a Milano: da 25€ a 60€ a coppia. Le donne single hanno spesso ingresso gratuito." },
    { question: "Ci sono saune libertine a Torino?", answer: "Sì, la Piemonte Sauna nella zona Lingotto offre sauna finlandese, bagno turco, jacuzzi e cabine private in un ambiente moderno." },
    { question: "Quali sono le serate tematiche torinesi?", answer: "Torino è famosa per il Ballo Reale (ispirato alla corte sabauda), le Notti del Cioccolato e le Serate Piemontesi con degustazione Barolo." },
    { question: "Come arrivare ai club?", answer: "La maggior parte dei club è raggiungibile con i mezzi pubblici o in taxi. San Salvario è vicino alla stazione di Porta Nuova." },
  ];

  return (
    <>
      <MetaTags
        title="Club Libertini a Torino 2026 — Guida Completa Piemontese | AKOKY"
        description="Scopri i migliori club libertini e saune di Torino 2026: San Salvario, Lingotto, Crocetta. L'eleganza sabauda incontra il libertinismo. Schede, prezzi e recensioni verificate."
        canonical="https://akoky.com/it/club-libertini-torino"
        lang="it"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="club-libertini-torino" />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Club Libertini a Torino 2026",
        description: "Guida completa ai club libertini di Torino e del Piemonte.",
        url: "https://akoky.com/it/club-libertini-torino",
        inLanguage: "it",
      }} />

      <ContentPageLayout
        lang="it"
        title="Club Libertini a Torino 2026 — Guida Completa | AKOKY"
        description="Guida ai club libertini e saune di Torino."
        canonical="https://akoky.com/it/club-libertini-torino"
        heroTitle="Club Libertini a Torino"
        heroSubtitle="Torino, città regale e discreta, ospita una scena libertina raffinata che riflette il suo carattere aristocratico. L'eleganza sabauda si fonde con la passione piemontese."
        heroImage="/images/clubs-libertins-villes.webp"
        breadcrumb={[
          { label: "Clubbing", href: "/it/clubbing" },
          { label: "Club Libertini", href: "/it/club-libertini" },
          { label: "Torino" },
        ]}
        faq={faq}
      >
        {/* ═══════════ INTRO ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">L'Eleganza Libertina di Torino</h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Torino è una città che sorprende. Dietro la sua facciata austera e i suoi portici solenni si nasconde un'anima <strong className="text-foreground">sensuale e sofisticata</strong>. La prima capitale d'Italia ha una tradizione di piacere che risale ai saloni aristocratici del XVIII secolo, dove la nobiltà sabauda coltivava l'arte della seduzione con la stessa eleganza che metteva nel governo.
              </p>
              <p>
                Oggi, Torino offre una scena libertina in piena crescita, caratterizzata da <strong className="text-foreground">club intimi e raffinati</strong>, saune moderne e serate tematiche uniche nel panorama italiano. Meno massificata di Milano, più discreta di Roma, Torino è la meta ideale per chi cerca <strong className="text-foreground">qualità, riservatezza e autenticità</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ QUARTIERI ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">I Quartieri Libertini di Torino</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "San Salvario", emoji: "🎵", desc: "Il quartiere più vivace di Torino. Bar, locali e il Secret Club, punto di riferimento della scena libertina torinese. Atmosfera giovane e cosmopolita." },
                { name: "Crocetta & Centro", emoji: "👑", desc: "Zone eleganti con locali privati discreti. Aperitivi libertini nei rooftop bar con vista sulla Mole e sulle Alpi." },
                { name: "Lingotto", emoji: "🏗️", desc: "L'ex quartiere industriale riconvertito ospita la Piemonte Sauna: struttura moderna con sauna, hammam e jacuzzi panoramico." },
                { name: "Collina di Superga", emoji: "⛰️", desc: "Ville private sulla collina organizzano eventi esclusivi su invito. Viste mozzafiato sulla città e sulle Alpi, setting irripetibili." },
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

        {/* ═══════════ SPECIALITÀ TORINESI ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Le Specialità Libertine Torinesi</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Il Ballo Reale</h3>
                <p>Ispirate alle feste della corte sabauda, le serate <strong className="text-foreground">"Ballo Reale"</strong> sono un'esclusiva torinese. Abiti da sera, maschere veneziane, candele e musica classica: un viaggio nel tempo che unisce eleganza e trasgressione. Queste serate si tengono in palazzi storici del centro e sono tra le più richieste d'Italia.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Le Notti del Cioccolato</h3>
                <p>Torino è la capitale italiana del cioccolato. Le <strong className="text-foreground">"Notti del Cioccolato"</strong> combinano degustazione di gianduiotti e cioccolato artigianale con ambiente libertino. Un'esperienza multisensoriale unica nel panorama europeo.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Serate Piemontesi</h3>
                <p>Cena degustazione con <strong className="text-foreground">Barolo, tartufo e agnolotti</strong> seguita da serata in club. La gastronomia piemontese diventa preludio al piacere. Serate organizzate nei ristoranti privati del centro con trasferimento in club dopo la cena.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CLUBS FROM CSV ═══════════ */}
        {data.length > 0 && (
          <section className="py-16 px-4 bg-card/30">
            <div className="container max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Club e Saune Verificati a Torino</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Consigli per Torino</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🎩", title: "Eleganza sabauda", desc: "Torino apprezza la classe. Dress code curato: giacca per gli uomini, abito elegante per le donne. I club più esclusivi sono rigorosi." },
                { icon: "🍷", title: "Aperitivo al Bicerin", desc: "Prima del club, un aperitivo in un caffè storico del centro. Il Bicerin (caffè, cioccolato e crema) è il rito torinese per eccellenza." },
                { icon: "🌙", title: "Serate tardive", desc: "I club torinesi iniziano tardi (dalle 23h). Cenate prima in un ristorante di San Salvario o Vanchiglia e arrivate dopo le 23:30." },
                { icon: "📞", title: "Prenotazione necessaria", desc: "I club torinesi sono più intimi dei milanesi: la capienza è ridotta. Prenotate sempre in anticipo tramite AKOKY." },
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Torino Libertina — Guida AKOKY 2026</h2>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>AKOKY è la piattaforma di riferimento per i <Link to="/it/club-libertini" className="text-primary hover:underline">club libertini in Italia</Link>. A Torino, la community cresce rapidamente con coppie e single che condividono <Link to="/it/recensioni" className="text-primary hover:underline">recensioni verificate</Link>.</p>
              <p>Scoprite le <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link>, gli <Link to="/it/eventi" className="text-primary hover:underline">eventi in Piemonte</Link>, la guida per <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">iniziare nel libertinismo</Link> e il <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link>.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova il Tuo Club a Torino</h2>
            <p className="text-muted-foreground mb-8">Iscriviti gratuitamente su AKOKY e scopri i club piemontesi con recensioni verificate.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-primary-foreground font-bold text-lg hover:scale-105 transition-all">Inizia Ora →</a>
          </div>
        </section>
      </ContentPageLayout>
      <ClubDetailModal club={selectedClub} onClose={() => setSelectedClub(null)} />
    </>
  );
};

export default ClubLibertiniTorino;
