import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ClubCard from "@/components/clubs/ClubCard";
import ClubDetailModal from "@/components/clubs/ClubDetailModal";
import BannerCarousel from "@/components/clubs/BannerCarousel";
import {
  parseEtablissements,
  getByLang,
  getRegions,
  getCountries,
  getTypes,
  getClubUrl,
  type Etablissement,
} from "@/lib/etablissements";

const ClubLibertiniIt = () => {
  const [data, setData] = useState<Etablissement[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((csv) => {
        const all = parseEtablissements(csv);
        setData(getByLang(all, "it"));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const countries = useMemo(() => getCountries(data), [data]);
  const regions = useMemo(() => {
    const filtered = selectedCountry ? data.filter((e) => e.country === selectedCountry) : data;
    return getRegions(filtered);
  }, [data, selectedCountry]);
  const types = useMemo(() => getTypes(data), [data]);

  const filtered = useMemo(() => {
    let result = data;
    if (selectedCountry) result = result.filter((e) => e.country === selectedCountry);
    if (selectedRegion) result = result.filter((e) => e.region === selectedRegion);
    if (selectedType) result = result.filter((e) => e.type === selectedType);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.city.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.region.toLowerCase().includes(q)
      );
    }
    return result;
  }, [data, selectedCountry, selectedRegion, selectedType, search]);

  const grouped = useMemo(() => {
    const map: Record<string, Record<string, Etablissement[]>> = {};
    for (const e of filtered) {
      if (!map[e.country]) map[e.country] = {};
      if (!map[e.country][e.region]) map[e.country][e.region] = [];
      map[e.country][e.region].push(e);
    }
    return map;
  }, [filtered]);

  const stats = useMemo(() => {
    const byCountry: Record<string, number> = {};
    data.forEach((e) => (byCountry[e.country] = (byCountry[e.country] || 0) + 1));
    return { total: data.length, byCountry };
  }, [data]);

  // Count Italian-only clubs
  const italianCount = useMemo(() => data.filter((e) => e.country === "Italia").length, [data]);

  const countryFlags: Record<string, string> = {
    Italia: "🇮🇹",
    France: "🇫🇷",
    Belgique: "🇧🇪",
    Suisse: "🇨🇭",
    Luxembourg: "🇱🇺",
    Espagne: "🇪🇸",
    Allemagne: "🇩🇪",
    "Pays-Bas": "🇳🇱",
    Portugal: "🇵🇹",
  };

  const clubsSchema = data.filter((e) => e.country === "Italia").slice(0, 50).map((e) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: e.name,
    description: e.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: e.address,
      addressLocality: e.city,
      addressCountry: "IT",
      addressRegion: e.region,
    },
    image: e.image,
    url: getClubUrl(e.slug),
  }));

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Annuario Club Libertini in Italia e Europa — AKOKY",
    description: `${stats.total} club libertini verificati in Italia e Europa: club, saune, ville private.`,
    url: "https://akoky.com/it/club-libertini",
    numberOfItems: stats.total,
    itemListElement: data.filter((e) => e.country === "Italia").slice(0, 50).map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e.name,
      url: getClubUrl(e.slug),
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://akoky.com/it" },
      { "@type": "ListItem", position: 2, name: "Club Libertini", item: "https://akoky.com/it/club-libertini" },
    ],
  };

  return (
    <>
      <MetaTags
        title={`${italianCount}+ Club Libertini in Italia 2026 — Annuario Verificato | AKOKY`}
        description={`${stats.total} club libertini e saune verificate in Italia e Europa. Milano, Roma, Torino, Bologna, Napoli, Firenze, Venezia. Schede dettagliate, foto e recensioni autentiche.`}
        canonical="https://akoky.com/it/club-libertini"
        lang="it"
        ogImage="/images/club.webp"
      />
      <HreflangTags slug="club-libertini" />
      <SchemaOrg schema={[pageSchema, breadcrumbSchema, ...clubsSchema]} />

      <ContentPageLayout
        lang="it"
        title={`${italianCount}+ Club Libertini — Annuario AKOKY`}
        description={`${stats.total} club libertini verificati in Italia e Europa.`}
        canonical="https://akoky.com/it/club-libertini"
        heroTitle="Annuario Club Libertini in Italia"
        heroSubtitle={`${italianCount}+ strutture italiane verificate + ${stats.total} in tutta Europa — club, saune, ville private. Schede dettagliate e recensioni autentiche.`}
        heroImage="/images/club.webp"
        breadcrumb={[{ label: "Club Libertini" }]}
        faq={[
          { question: "Come trovare un club libertino vicino a me in Italia?", answer: "Usa i filtri per regione e città qui sopra. Ogni scheda contiene indirizzo, orari e link diretto alla pagina AKOKY del club." },
          { question: "I club sono verificati?", answer: "Sì, tutte le strutture elencate su AKOKY sono verificate dal nostro team. Controlliamo esistenza, posizione e qualità prima di inserirle nell'annuario." },
          { question: "Posso prenotare direttamente tramite AKOKY?", answer: "Alcuni club partner offrono la prenotazione diretta sulla piattaforma AKOKY. Per gli altri, troverai contatti e sito web ufficiale su ogni scheda." },
          { question: "Qual è la differenza tra un club libertino e una sauna libertina?", answer: "Un club libertino è dedicato agli incontri con bar, pista da ballo e aree private. Una sauna libertina aggiunge strutture benessere (hammam, jacuzzi, sauna) in un ambiente propizio agli incontri." },
          { question: "Ci sono club per coppie principianti in Italia?", answer: "Sì, molti club accolgono i principianti con serate speciali e accompagnamento. Consulta la nostra guida su come iniziare nel libertinismo." },
          { question: "Quanto costa l'ingresso in un club libertino in Italia?", answer: "I prezzi variano tra 20€ e 80€ a coppia secondo il club e il giorno. Le donne single hanno spesso ingresso gratuito o ridotto." },
        ]}
      >
        {/* ═══════════ BANNER CAROUSEL ═══════════ */}
        <BannerCarousel />

        {/* ═══════════ STATS ═══════════ */}
        <section className="py-8 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Strutture totali</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{italianCount}</p>
                <p className="text-sm text-muted-foreground">🇮🇹 In Italia</p>
              </div>
              {Object.entries(stats.byCountry)
                .filter(([c]) => c !== "Italia")
                .sort(([, a], [, b]) => b - a)
                .slice(0, 2)
                .map(([country, count]) => (
                  <div key={country} className="bg-card border border-border rounded-xl p-4">
                    <p className="text-3xl font-black text-primary">{count}</p>
                    <p className="text-sm text-muted-foreground">
                      {countryFlags[country] || ""} {country}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FILTERS ═══════════ */}
        <section className="py-6 px-4 bg-card/30 sticky top-16 z-30 backdrop-blur-md border-b border-border">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="🔍 Cerca un club, una città, una regione..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
                />
              </div>
              <select
                value={selectedCountry}
                onChange={(e) => { setSelectedCountry(e.target.value); setSelectedRegion(""); }}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">🌍 Tutti i paesi</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{countryFlags[c] || ""} {c}</option>
                ))}
              </select>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">📍 Tutte le regioni</option>
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">🏛️ Tutti i tipi</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span> struttur{filtered.length !== 1 ? "e" : "a"} trovat{filtered.length !== 1 ? "e" : "a"}
              </p>
              {(search || selectedCountry || selectedRegion || selectedType) && (
                <button
                  onClick={() => { setSearch(""); setSelectedCountry(""); setSelectedRegion(""); setSelectedType(""); }}
                  className="text-xs text-primary hover:underline"
                >
                  ✕ Resetta i filtri
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════ CLUBS LIST ═══════════ */}
        <section className="py-10 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin text-4xl mb-4">⏳</div>
                <p className="text-muted-foreground">Caricamento dell'annuario...</p>
              </div>
            ) : Object.keys(grouped).length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-muted-foreground text-lg">Nessuna struttura trovata per questi criteri.</p>
              </div>
            ) : (
              Object.entries(grouped)
                .sort(([a], [b]) => {
                  if (a === "Italia") return -1;
                  if (b === "Italia") return 1;
                  const countA = Object.values(grouped[a] || {}).reduce((s, arr) => s + arr.length, 0);
                  const countB = Object.values(grouped[b] || {}).reduce((s, arr) => s + arr.length, 0);
                  return countB - countA;
                })
                .map(([country, regionMap]) => {
                  const countryTotal = Object.values(regionMap).reduce((s, arr) => s + arr.length, 0);
                  return (
                    <div key={country} className="mb-12">
                      <h2 className="text-2xl font-black text-foreground mb-6 flex items-center gap-3">
                        <span className="text-3xl">{countryFlags[country] || "🌍"}</span>
                        {country} — {countryTotal} struttur{countryTotal > 1 ? "e" : "a"}
                      </h2>

                      {Object.entries(regionMap)
                        .sort(([, a], [, b]) => b.length - a.length)
                        .map(([region, clubs]) => (
                          <div key={region} className="mb-8">
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                              <span className="text-primary">📍</span> {region}
                              <span className="text-sm font-normal text-muted-foreground">({clubs.length})</span>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {clubs.map((club) => (
                                <ClubCard
                                  key={club.id}
                                  club={club}
                                  onOpenDetail={setSelectedClub}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  );
                })
            )}
          </div>
        </section>

        {/* ═══════════ SEO TEXT ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto prose prose-invert prose-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Annuario dei Club Libertini in Italia — Guida AKOKY 2026</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AKOKY referenzia <strong className="text-foreground">{italianCount}+ strutture libertine verificate in Italia</strong> e oltre {stats.total} in tutta Europa: <Link to="/it/clubbing" className="text-primary hover:underline">club scambisti</Link>, <Link to="/it/saune-libertine" className="text-primary hover:underline">saune libertine</Link>, ville private e locali esclusivi. Ogni scheda è verificata dal nostro team e arricchita dalle <Link to="/it/recensioni" className="text-primary hover:underline">recensioni autentiche della community di 1,5M di membri</Link>.
              </p>
              <p>
                Che cerchiate un <strong className="text-foreground">club libertino a Milano</strong>, una <strong className="text-foreground">sauna a Roma</strong>, un <strong className="text-foreground">club a Torino</strong>, una <strong className="text-foreground">villa privata in Toscana</strong> o un <strong className="text-foreground">club a Napoli</strong>, il nostro annuario vi permette di filtrare per paese, regione e tipo di struttura per trovare il luogo ideale.
              </p>
              <p>
                A differenza di <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">JOYclub</strong> o <strong className="text-foreground">FabSwingers</strong>, AKOKY propone un annuario completo con schede dettagliate, foto verificate, orari aggiornati e link diretti a ogni struttura. <Link to="/it/iniziare-libertinismo" className="text-primary hover:underline">Scoprite come iniziare</Link> e trovate il <Link to="/it/blog" className="text-primary hover:underline">club perfetto per la vostra prima visita</Link>.
              </p>
              <p>
                Tutti i club partner AKOKY rispettano la nostra <Link to="/it/visione" className="text-primary hover:underline">carta etica</Link>: consenso esplicito, discrezione garantita, igiene impeccabile e rispetto dei limiti di ciascuno. Esplorate anche il nostro <Link to="/it/lessico-libertino" className="text-primary hover:underline">lessico libertino</Link> per comprendere i codici e le pratiche prima della vostra prima visita.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ MAILLAGE INTERNO — CITTÀ ITALIANE ═══════════ */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Esplora per città</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Milano", "Roma", "Torino", "Bologna", "Firenze", "Napoli",
                "Venezia", "Verona", "Genova", "Palermo", "Catania", "Bari",
                "Cagliari", "Rimini", "Lecce", "Taormina", "Padova", "Perugia", "Trieste",
              ].map((city) => (
                <button
                  key={city}
                  onClick={() => { setSearch(city); setSelectedCountry("Italia"); setSelectedRegion(""); setSelectedType(""); window.scrollTo({ top: 600, behavior: "smooth" }); }}
                  className="text-sm px-4 py-2 border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-all"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ LINK INTERNI ═══════════ */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Scopri Anche</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { href: "/it/clubbing", icon: "🎭", title: "Guida al Clubbing", desc: "Come prepararsi per la prima serata in un club libertino." },
                { href: "/it/saune-libertine", icon: "🧖", title: "Saune Libertine", desc: "Scopri le saune libertine e le differenze con i club." },
                { href: "/it/eventi", icon: "📅", title: "Eventi e Serate", desc: "300+ eventi al mese in Italia e in tutta Europa." },
                { href: "/it/iniziare-libertinismo", icon: "🧭", title: "Come Iniziare", desc: "Guida completa per coppie e single principianti." },
                { href: "/it/vip", icon: "👑", title: "AKOKY VIP", desc: "Accesso prioritario agli eventi e funzionalità esclusive." },
                { href: "/it/blog", icon: "📝", title: "Blog Libertino", desc: "Guide, consigli e articoli sulla scena libertina italiana." },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="group block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                  <span className="text-3xl mb-3 block">{l.icon}</span>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{l.title}</h3>
                  <p className="text-muted-foreground text-sm">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trova il Tuo Club Libertino in Italia</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Iscriviti gratuitamente su AKOKY e accedi all'annuario completo con {stats.total}+ club libertini e saune verificate in Italia e in Europa.</p>
            <a href="https://app.akoky.com/register" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">Accedi all'Annuario →</a>
          </div>
        </section>
      </ContentPageLayout>

      <ClubDetailModal club={selectedClub} onClose={() => setSelectedClub(null)} />
    </>
  );
};

export default ClubLibertiniIt;
