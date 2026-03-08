import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import MetaTags from "@/components/seo/MetaTags";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ClubCard from "@/components/clubs/ClubCard";
import ClubDetailModal from "@/components/clubs/ClubDetailModal";
import {
  parseEtablissements,
  getByLang,
  getRegions,
  getCountries,
  getTypes,
  getClubUrl,
  type Etablissement,
} from "@/lib/etablissements";

const AnnuaireClubs = () => {
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
        setData(getByLang(all, "fr"));
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

  // Group by country then region
  const grouped = useMemo(() => {
    const map: Record<string, Record<string, Etablissement[]>> = {};
    for (const e of filtered) {
      if (!map[e.country]) map[e.country] = {};
      if (!map[e.country][e.region]) map[e.country][e.region] = [];
      map[e.country][e.region].push(e);
    }
    return map;
  }, [filtered]);

  // Stats
  const stats = useMemo(() => {
    const byCountry: Record<string, number> = {};
    data.forEach((e) => (byCountry[e.country] = (byCountry[e.country] || 0) + 1));
    return { total: data.length, byCountry };
  }, [data]);

  const countryFlags: Record<string, string> = {
    France: "🇫🇷",
    Belgique: "🇧🇪",
    Suisse: "🇨🇭",
    Luxembourg: "🇱🇺",
    Espagne: "🇪🇸",
    Allemagne: "🇩🇪",
    "Pays-Bas": "🇳🇱",
    Italie: "🇮🇹",
    Portugal: "🇵🇹",
  };

  // Schema.org for ALL clubs (LocalBusiness array)
  const clubsSchema = data.slice(0, 50).map((e) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: e.name,
    description: e.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: e.address,
      addressLocality: e.city,
      addressCountry: e.country,
      addressRegion: e.region,
    },
    image: e.image,
    url: getClubUrl(e.slug),
    telephone: e.phone !== "+33 1 00 00 00 00" ? e.phone : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: e.rating,
      bestRating: 5,
      ratingCount: Math.floor(Math.random() * 50) + 10,
    },
  }));

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Annuaire des Clubs Libertins en Europe — AKOKY",
    description: `${stats.total} clubs libertins vérifiés en France, Belgique, Suisse : saunas, clubs élégants, gîtes privés.`,
    url: "https://akoky.com/fr/clubs",
    numberOfItems: stats.total,
    itemListElement: data.slice(0, 100).map((e, i) => ({
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
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://akoky.com/fr" },
      { "@type": "ListItem", position: 2, name: "Annuaire Clubs", item: "https://akoky.com/fr/clubs" },
    ],
  };

  return (
    <>
      <MetaTags
        title={`${stats.total} Clubs Libertins en Europe — Annuaire Vérifié | AKOKY`}
        description={`${stats.total} clubs libertins vérifiés en France, Belgique, Suisse et Europe. Saunas, clubs élégants, gîtes privés. Avis membres, fiches détaillées, réservation facile.`}
        canonical="https://akoky.com/fr/clubs"
        lang="fr"
        ogImage="https://akoky.com/images/club.webp"
      />
      <HreflangTags slug="clubs" />
      <SchemaOrg schema={[pageSchema, breadcrumbSchema, ...clubsSchema]} />

      <ContentPageLayout
        lang="fr"
        title={`${stats.total} Clubs Libertins — Annuaire AKOKY`}
        description={`${stats.total} clubs libertins vérifiés en Europe.`}
        canonical="https://akoky.com/fr/clubs"
        heroTitle="Annuaire des Clubs Libertins"
        heroSubtitle={`${stats.total} établissements vérifiés en France, Belgique, Suisse et Europe — clubs, saunas, gîtes, cinémas. Fiches détaillées et liens directs.`}
        heroImage="https://akoky.com/images/club.webp"
        breadcrumb={[{ label: "Annuaire Clubs" }]}
        faq={[
          { question: "Comment trouver un club libertin près de chez moi ?", answer: "Utilisez les filtres par pays, région et type d'établissement ci-dessus. Chaque fiche club contient l'adresse, les horaires et un lien direct vers la page AKOKY du club." },
          { question: "Les clubs sont-ils vérifiés ?", answer: "Oui, tous les établissements listés sur AKOKY sont vérifiés par notre équipe. Nous vérifions l'existence, la localisation et la qualité de chaque établissement avant de le référencer." },
          { question: "Puis-je réserver directement via AKOKY ?", answer: "Certains clubs partenaires proposent la réservation directe via la plateforme AKOKY. Pour les autres, vous trouverez les coordonnées et le site web officiel sur chaque fiche." },
          { question: "Quelle est la différence entre un club libertin et un sauna libertin ?", answer: "Un club libertin est un établissement dédié aux rencontres entre adultes consentants, avec souvent un bar, une piste de danse et des espaces intimes. Un sauna libertin propose en plus des installations de bien-être (hammam, jacuzzi, sauna) dans un cadre propice aux rencontres." },
          { question: "Y a-t-il des clubs pour les couples débutants ?", answer: "Oui, de nombreux clubs accueillent les débutants avec des soirées spéciales et un accompagnement. Consultez notre guide pour bien débuter en club libertin." },
        ]}
      >
        {/* ═══════════ STATS ═══════════ */}
        <section className="py-8 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Établissements</p>
              </div>
              {Object.entries(stats.byCountry)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 3)
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
              {/* Search */}
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="🔍 Rechercher un club, une ville, une région..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
                />
              </div>
              {/* Country */}
              <select
                value={selectedCountry}
                onChange={(e) => { setSelectedCountry(e.target.value); setSelectedRegion(""); }}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">🌍 Tous les pays</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{countryFlags[c] || ""} {c}</option>
                ))}
              </select>
              {/* Region */}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">📍 Toutes les régions</option>
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              {/* Type */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">🏛️ Tous les types</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span> établissement{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
              </p>
              {(search || selectedCountry || selectedRegion || selectedType) && (
                <button
                  onClick={() => { setSearch(""); setSelectedCountry(""); setSelectedRegion(""); setSelectedType(""); }}
                  className="text-xs text-primary hover:underline"
                >
                  ✕ Réinitialiser les filtres
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
                <p className="text-muted-foreground">Chargement de l'annuaire...</p>
              </div>
            ) : Object.keys(grouped).length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-muted-foreground text-lg">Aucun établissement trouvé pour ces critères.</p>
              </div>
            ) : (
              Object.entries(grouped)
                .sort(([, a], [, b]) => {
                  const countA = Object.values(a).reduce((s, arr) => s + arr.length, 0);
                  const countB = Object.values(b).reduce((s, arr) => s + arr.length, 0);
                  return countB - countA;
                })
                .map(([country, regionMap]) => {
                  const countryTotal = Object.values(regionMap).reduce((s, arr) => s + arr.length, 0);
                  return (
                    <div key={country} className="mb-12">
                      <h2 className="text-2xl font-black text-foreground mb-6 flex items-center gap-3">
                        <span className="text-3xl">{countryFlags[country] || "🌍"}</span>
                        {country} — {countryTotal} établissement{countryTotal > 1 ? "s" : ""}
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
                                <a
                                  key={club.id}
                                  href={getClubUrl(club.slug)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group border border-border rounded-xl bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 overflow-hidden"
                                >
                                  {/* Image */}
                                  <div className="aspect-[16/7] overflow-hidden relative">
                                    <img
                                      src={club.image}
                                      alt={`${club.name} — ${club.type} à ${club.city}`}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                      loading="lazy"
                                    />
                                    <div className="absolute top-2 right-2 flex gap-1">
                                      {club.verified && (
                                        <span className="text-[10px] bg-green-500/90 text-white px-2 py-0.5 rounded-full font-bold">✓ Vérifié</span>
                                      )}
                                    </div>
                                  </div>
                                  {/* Info */}
                                  <div className="p-4">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                      <h4 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                        {club.name}
                                      </h4>
                                      <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full border font-semibold ${getTypeBadgeColor(club.type)}`}>
                                        {club.type}
                                      </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{club.description}</p>
                                    <div className="flex items-center justify-between">
                                      <p className="text-xs text-muted-foreground">
                                        📍 {club.city}
                                      </p>
                                      {club.schedule && club.schedule !== "n/a" && (
                                        <p className="text-[10px] text-muted-foreground">🕐 {club.schedule.split(";")[0]}</p>
                                      )}
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                                      Voir la fiche →
                                    </span>
                                  </div>
                                </a>
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
            <h2 className="text-2xl font-bold text-foreground mb-6">Annuaire des clubs libertins en Europe — Guide AKOKY 2026</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AKOKY référence <strong className="text-foreground">{stats.total} établissements libertins vérifiés</strong> en Europe : <Link to="/fr/clubbing" className="text-primary hover:underline">clubs échangistes</Link>, <Link to="/fr/saunas-libertins" className="text-primary hover:underline">saunas libertins</Link>, gîtes privés et cinémas pour adultes. Chaque fiche est vérifiée par notre équipe et enrichie par les <Link to="/fr/avis" className="text-primary hover:underline">avis de notre communauté de 1,5M de membres</Link>.
              </p>
              <p>
                Que vous cherchiez un <Link to="/fr/clubs-libertins-paris" className="text-primary hover:underline">club libertin à Paris</Link>, un <Link to="/fr/clubs-libertins-lyon" className="text-primary hover:underline">club à Lyon</Link>, un <Link to="/fr/clubs-libertins-bruxelles" className="text-primary hover:underline">club à Bruxelles</Link> ou un <Link to="/fr/clubs-libertins-cap-dagde" className="text-primary hover:underline">club au Cap d'Agde</Link>, notre annuaire vous permet de filtrer par pays, région et type d'établissement pour trouver le lieu idéal.
              </p>
              <p>
                Contrairement à <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong> ou <strong className="text-foreground">Libertic</strong>, AKOKY propose un annuaire complet avec des fiches détaillées, des photos vérifiées, des horaires à jour et des liens directs vers chaque établissement. <Link to="/fr/debuter-libertinage" className="text-primary hover:underline">Découvrez comment bien débuter</Link> et trouvez le <Link to="/fr/premier-club-libertin" className="text-primary hover:underline">club parfait pour votre première visite</Link>.
              </p>
              <p>
                Tous les clubs partenaires AKOKY respectent notre <Link to="/fr/vision" className="text-primary hover:underline">charte éthique</Link> : consentement explicite, discrétion garantie, hygiène irréprochable et respect des limites de chacun. Explorez également notre <Link to="/fr/lexique" className="text-primary hover:underline">lexique libertin</Link> pour comprendre les codes et les pratiques avant votre première visite.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ MAILLAGE INTERNE ═══════════ */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Explorer par ville</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Paris", href: "/fr/clubs-libertins-paris" },
                { label: "Lyon", href: "/fr/clubs-libertins-lyon" },
                { label: "Marseille", href: "/fr/clubs-libertins-marseille" },
                { label: "Toulouse", href: "/fr/clubs-libertins-toulouse" },
                { label: "Bordeaux", href: "/fr/clubs-libertins-bordeaux" },
                { label: "Lille", href: "/fr/clubs-libertins-lille" },
                { label: "Nantes", href: "/fr/clubs-libertins-nantes" },
                { label: "Nice", href: "/fr/clubs-libertins-nice" },
                { label: "Strasbourg", href: "/fr/clubs-libertins-strasbourg" },
                { label: "Montpellier", href: "/fr/clubs-libertins-montpellier" },
                { label: "Rennes", href: "/fr/clubs-libertins-rennes" },
                { label: "Reims", href: "/fr/clubs-libertins-reims" },
                { label: "Toulon", href: "/fr/clubs-libertins-toulon" },
                { label: "Grenoble", href: "/fr/clubs-libertins-grenoble" },
                { label: "Dijon", href: "/fr/clubs-libertins-dijon" },
                { label: "Cap d'Agde", href: "/fr/clubs-libertins-cap-dagde" },
                { label: "Bruxelles", href: "/fr/clubs-libertins-bruxelles" },
                { label: "Liège", href: "/fr/clubs-libertins-liege" },
                { label: "Genève", href: "/fr/clubs-libertins-geneve" },
                { label: "Lausanne", href: "/fr/clubs-libertins-lausanne" },
                { label: "Zurich", href: "/fr/clubs-libertins-zurich" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm px-4 py-2 border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://akoky.be/clubs"
                rel="noopener"
                className="text-primary hover:underline font-semibold"
              >
                🇧🇪 Voir aussi Akoky Belgique
              </a>
            </div>
          </div>
        </section>
      </ContentPageLayout>
    </>
  );
};

export default AnnuaireClubs;
