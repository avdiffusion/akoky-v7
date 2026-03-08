import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import BannerCarousel from "@/components/clubs/BannerCarousel";
import { parseEtablissements, getByLang, type Etablissement } from "@/lib/etablissements";

/* ═══════════ HELPERS ═══════════ */
const CLUB_IMAGE = "/images/es-club-card.webp";
const SAUNA_IMAGE = "/images/es-sauna-card.webp";

function getCardImage(type: string) {
  return type.toLowerCase().includes("sauna") ? SAUNA_IMAGE : CLUB_IMAGE;
}

function getTypeBadge(type: string) {
  const t = type.toLowerCase();
  if (t.includes("sauna")) return "border-cyan-500/40 text-cyan-400 bg-cyan-500/10";
  if (t.includes("privat")) return "border-amber-500/40 text-amber-400 bg-amber-500/10";
  if (t.includes("bar") || t.includes("lounge")) return "border-purple-500/40 text-purple-400 bg-purple-500/10";
  return "border-primary/40 text-primary bg-primary/10";
}

/* ═══════════ CARD ═══════════ */
const ClubCardDE = ({ club, onOpen }: { club: Etablissement; onOpen: (c: Etablissement) => void }) => (
  <article
    className="group border border-border rounded-xl bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 overflow-hidden cursor-pointer"
    onClick={() => onOpen(club)}
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <div className="aspect-[16/7] overflow-hidden relative">
      <img
        src={club.image || getCardImage(club.type)}
        alt={`${club.name} — ${club.type} in ${club.city}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        itemProp="image"
      />
      <div className="absolute top-2 right-2 flex gap-1">
        {club.verified && (
          <span className="text-[10px] bg-green-500/90 text-white px-2 py-0.5 rounded-full font-bold">✓ Verifiziert</span>
        )}
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors" itemProp="name">
          {club.name}
        </h4>
        <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full border font-semibold ${getTypeBadge(club.type)}`}>
          {club.type}
        </span>
      </div>
      <p className="text-xs text-muted-foreground line-clamp-2 mb-2" itemProp="description">{club.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          📍 <span itemProp="addressLocality">{club.city}</span>, <span itemProp="addressRegion">{club.region}</span>
        </p>
        <p className="text-[10px] text-muted-foreground">🕐 {club.schedule.split(";")[0]}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
        Detaillierte Informationen →
      </span>
    </div>
  </article>
);

/* ═══════════ MODAL ═══════════ */
const ClubModalDE = ({ club, onClose }: { club: Etablissement | null; onClose: () => void }) => {
  if (!club) return null;
  const schedules = club.schedule.split(";").map((s) => s.trim());
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <article
        className="relative z-10 bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg" aria-label="Schließen">×</button>
        <div className="aspect-[16/7] overflow-hidden rounded-t-2xl">
          <img src={club.image || getCardImage(club.type)} alt={`${club.name} — Hauptansicht`} className="w-full h-full object-cover" itemProp="image" />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h2 className="text-2xl font-black text-foreground" itemProp="name">{club.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                <span className={`inline-flex text-xs px-2.5 py-0.5 rounded-full border font-semibold ${getTypeBadge(club.type)}`}>{club.type}</span>
                {club.verified && <span className="ml-2 text-xs text-green-400 font-semibold">✓ AKOKY verifiziert</span>}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-1 text-amber-400">{"★".repeat(Math.round(club.rating))}</div>
              <p className="text-xs text-muted-foreground">{club.rating}/5</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6" itemProp="description">{club.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted/30 rounded-xl p-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">📍 Adresse</h3>
              <p className="text-sm text-muted-foreground" itemProp="streetAddress">{club.address}</p>
              <p className="text-sm text-muted-foreground"><span itemProp="addressLocality">{club.city}</span>, <span itemProp="addressRegion">{club.region}</span></p>
              <p className="text-sm text-muted-foreground" itemProp="addressCountry">{club.country}</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">🕐 Öffnungszeiten</h3>
              {schedules.map((s, i) => (<p key={i} className="text-sm text-muted-foreground">{s}</p>))}
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">📞 Kontakt</h3>
              <a href={`tel:${club.phone}`} className="text-sm text-primary hover:underline" itemProp="telephone">{club.phone}</a>
              {club.website && club.website !== "#" && club.website !== "n/a" && (
                <a href={club.website} target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline mt-1">🌐 Offizielle Webseite</a>
              )}
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">🏷️ Kategorien</h3>
              <div className="flex flex-wrap gap-1.5">
                {club.tags.map((tag) => (<span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://app.akoky.com/register" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">AKOKY beitreten →</a>
            <Link to="/de/libertinismus-anfangen" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">Anfänger-Guide</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

/* ═══════════ MAIN PAGE ═══════════ */
const ClubsAnnuaireDe = () => {
  const [csvData, setCsvData] = useState<Etablissement[]>([]);
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedClub, setSelectedClub] = useState<Etablissement | null>(null);

  useEffect(() => {
    fetch("/data/etablissement.csv")
      .then((r) => r.text())
      .then((text) => {
        const all = parseEtablissements(text);
        const de = getByLang(all, "de");
        setCsvData(de);
      });
  }, []);

  // Only show establishments in Germany (country contains Deutschland)
  const data = useMemo(() => csvData.filter((e) => e.country === "Deutschland"), [csvData]);

  const regions = useMemo(() => [...new Set(data.map((e) => e.region))].sort(), [data]);
  const types = useMemo(() => [...new Set(data.map((e) => e.type))].sort(), [data]);

  const filtered = useMemo(() => {
    let result = data;
    if (selectedRegion) result = result.filter((e) => e.region === selectedRegion);
    if (selectedType) result = result.filter((e) => e.type === selectedType);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) => e.name.toLowerCase().includes(q) || e.city.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.region.toLowerCase().includes(q)
      );
    }
    return result;
  }, [data, selectedRegion, selectedType, search]);

  const grouped = useMemo(() => {
    const map: Record<string, Etablissement[]> = {};
    for (const e of filtered) {
      if (!map[e.region]) map[e.region] = [];
      map[e.region].push(e);
    }
    return map;
  }, [filtered]);

  const stats = useMemo(() => {
    const clubs = data.filter((e) => !e.type.toLowerCase().includes("sauna")).length;
    const saunas = data.filter((e) => e.type.toLowerCase().includes("sauna")).length;
    const regionsCount = new Set(data.map((e) => e.region)).size;
    return { total: data.length, clubs, saunas, regions: regionsCount };
  }, [data]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Verzeichnis der Swingerclubs und Saunas in Deutschland — AKOKY",
    description: `${stats.total} verifizierte libertine Einrichtungen in Deutschland.`,
    url: "https://akoky.com/de/clubs",
    numberOfItems: stats.total,
    itemListElement: data.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: e.name })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://akoky.com/de" },
      { "@type": "ListItem", position: 2, name: "Clubs & Saunas", item: "https://akoky.com/de/clubs" },
    ],
  };

  return (
    <>
      <HreflangTags slug="clubs" />
      <SchemaOrg schema={[pageSchema, breadcrumbSchema]} />

      <ContentPageLayout
        lang="de"
        title={`${stats.total} Swingerclubs & Saunas in Deutschland — AKOKY`}
        description="Verifiziertes Verzeichnis libertiner Einrichtungen in Deutschland."
        canonical="https://akoky.com/de/clubs"
        heroTitle="Swingerclubs & Saunas in Deutschland"
        heroSubtitle={`${stats.total} verifizierte Einrichtungen in ${stats.regions} Bundesländern — Swingerclubs, libertine Saunas, private Clubs. Detaillierte Profile.`}
        heroImage="/images/club.webp"
        breadcrumb={[{ label: "Clubs & Saunas Deutschland" }]}
        faq={[
          { question: "Wie finde ich einen Swingerclub in meiner Nähe?", answer: "Nutze die Filter nach Bundesland und Einrichtungstyp. Jede Karte enthält Adresse, Öffnungszeiten und Kontaktdaten des Clubs oder der Sauna." },
          { question: "Sind die Einrichtungen verifiziert?", answer: "Ja, alle auf AKOKY gelisteten Einrichtungen werden von unserem Team verifiziert. Wir prüfen Existenz, Standort und Qualität, bevor sie aufgenommen werden." },
          { question: "Was ist der Unterschied zwischen Swingerclub und libertiner Sauna?", answer: "Ein Swingerclub ist eine Einrichtung mit Bar, Tanzfläche und intimen Bereichen. Eine libertine Sauna bietet zusätzlich Wellness-Einrichtungen (Hammam, Jacuzzi, Sauna) in einem entspannten Rahmen." },
          { question: "Gibt es Clubs für Anfänger-Paare?", answer: "Ja, viele Clubs empfangen Anfänger mit speziellen Abenden. Besuche unseren Guide zum Einstieg in den Libertinismus." },
          { question: "In welchen Städten gibt es die meisten libertinen Einrichtungen?", answer: "Berlin, Hamburg, München, Köln und Frankfurt haben die größte Auswahl, aber du findest Optionen in den meisten Bundesländern." },
        ]}
      >
        {/* BANNER CAROUSEL */}
        <BannerCarousel lang="de" />

        {/* STATS */}
        <section className="py-8 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Einrichtungen</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.clubs}</p>
                <p className="text-sm text-muted-foreground">🏛️ Clubs</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.saunas}</p>
                <p className="text-sm text-muted-foreground">♨️ Saunas</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.regions}</p>
                <p className="text-sm text-muted-foreground">📍 Bundesländer</p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="py-6 px-4 bg-card/30 sticky top-16 z-30 backdrop-blur-md border-b border-border">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="🔍 Club, Stadt oder Bundesland suchen..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
                />
              </div>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">📍 Alle Bundesländer</option>
                {regions.map((r) => (<option key={r} value={r}>{r}</option>))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">🏛️ Alle Typen</option>
                {types.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span> Einrichtung{filtered.length !== 1 ? "en" : ""} gefunden
              </p>
              {(search || selectedRegion || selectedType) && (
                <button onClick={() => { setSearch(""); setSelectedRegion(""); setSelectedType(""); }} className="text-xs text-primary hover:underline">
                  ✕ Filter zurücksetzen
                </button>
              )}
            </div>
          </div>
        </section>

        {/* CLUBS LIST */}
        <section className="py-10 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            {Object.keys(grouped).length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-muted-foreground text-lg">Keine Einrichtung für diese Kriterien gefunden.</p>
              </div>
            ) : (
              Object.entries(grouped)
                .sort(([, a], [, b]) => b.length - a.length)
                .map(([region, clubs]) => (
                  <div key={region} className="mb-10">
                    <h2 className="text-xl font-black text-foreground mb-5 flex items-center gap-2">
                      <span className="text-2xl">🇩🇪</span> {region}
                      <span className="text-sm font-normal text-muted-foreground">({clubs.length} Einrichtung{clubs.length !== 1 ? "en" : ""})</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {clubs.map((club) => (
                        <ClubCardDE key={club.id} club={club} onOpen={setSelectedClub} />
                      ))}
                    </div>
                  </div>
                ))
            )}
          </div>
        </section>

        {/* sr-only full index for SEO crawlers */}
        <nav className="sr-only" aria-label="Vollständiger Index der Einrichtungen">
          {data.map((e) => (
            <a key={e.id} href={`#${e.slug}`}>{e.name} — {e.type} in {e.city}, {e.region}</a>
          ))}
        </nav>

        {/* SEO TEXT */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto prose prose-invert prose-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Verzeichnis libertiner Einrichtungen in Deutschland — AKOKY Guide 2026</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AKOKY verzeichnet <strong className="text-foreground">{stats.total} verifizierte libertine Einrichtungen in Deutschland</strong>: <Link to="/de/libertine-clubs" className="text-primary hover:underline">Swingerclubs</Link>, <Link to="/de/saunas" className="text-primary hover:underline">libertine Saunas</Link>, private Clubs und Lounges. Jede Einrichtung wird von unserem Team verifiziert und mit den <Link to="/de/bewertungen" className="text-primary hover:underline">Bewertungen unserer Community</Link> bereichert.
              </p>
              <p>
                Ob du einen Swingerclub in <strong className="text-foreground">Berlin</strong>, <strong className="text-foreground">Hamburg</strong>, <strong className="text-foreground">München</strong>, <strong className="text-foreground">Köln</strong> oder <strong className="text-foreground">Frankfurt</strong> suchst — unser Verzeichnis ermöglicht dir die Filterung nach Bundesland und Einrichtungstyp, um den idealen Ort zu finden. Deutschland bietet eine vielfältige und stetig wachsende libertine Szene.
              </p>
              <p>
                Anders als andere Plattformen bietet AKOKY ein 100% deutsches Verzeichnis mit detaillierten Profilen, aktuellen Öffnungszeiten und direktem Kontakt zu jeder Einrichtung. <Link to="/de/libertinismus-anfangen" className="text-primary hover:underline">Erfahre, wie du richtig einsteigst</Link> und finde den perfekten Club für deinen ersten Besuch.
              </p>
              <p>
                Alle auf AKOKY gelisteten Einrichtungen respektieren unsere <Link to="/de/vision" className="text-primary hover:underline">ethische Charta</Link>: explizites Einverständnis, garantierte Diskretion, tadellose Hygiene und Respekt der Grenzen jeder Person. Besuche auch unser <Link to="/de/lexikon" className="text-primary hover:underline">libertines Lexikon</Link>, um die Codes vor deinem ersten Besuch zu verstehen.
              </p>
            </div>
          </div>
        </section>

        {/* CITY LINKS */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Nach Stadt erkunden</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {["Berlin", "Hamburg", "München", "Köln", "Frankfurt", "Düsseldorf", "Stuttgart", "Leipzig", "Dresden", "Hannover", "Nürnberg", "Dortmund", "Essen", "Bremen", "Freiburg", "Kiel"].map((city) => (
                <button
                  key={city}
                  onClick={() => { setSearch(city); setSelectedRegion(""); setSelectedType(""); window.scrollTo({ top: 500, behavior: "smooth" }); }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL */}
        <ClubModalDE club={selectedClub} onClose={() => setSelectedClub(null)} />
      </ContentPageLayout>
    </>
  );
};

export default ClubsAnnuaireDe;
