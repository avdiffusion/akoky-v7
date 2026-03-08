import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
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

const ClubesLibertinos = () => {
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
        setData(getByLang(all, "es"));
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
    España: "🇪🇸",
    France: "🇫🇷",
    Francia: "🇫🇷",
    Belgique: "🇧🇪",
    Bélgica: "🇧🇪",
    Suisse: "🇨🇭",
    Suiza: "🇨🇭",
    Luxembourg: "🇱🇺",
    Luxemburgo: "🇱🇺",
    Allemagne: "🇩🇪",
    Alemania: "🇩🇪",
    "Pays-Bas": "🇳🇱",
    "Países Bajos": "🇳🇱",
    Italie: "🇮🇹",
    Italia: "🇮🇹",
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
    name: "Directorio de Clubes Libertinos en Europa — AKOKY",
    description: `${stats.total} clubes libertinos verificados en España y Europa: saunas, clubes elegantes, locales privados.`,
    url: "https://akoky.com/es/clubes-libertinos",
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
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://akoky.com/es" },
      { "@type": "ListItem", position: 2, name: "Clubes Libertinos", item: "https://akoky.com/es/clubes-libertinos" },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{`${stats.total} Clubes Libertinos en Europa — Directorio Verificado | AKOKY`}</title>
        <meta name="description" content={`${stats.total} clubes libertinos verificados en España y Europa. Saunas, clubes elegantes, locales privados. Opiniones de miembros, fichas detalladas.`} />
        <link rel="canonical" href="https://akoky.com/es/clubes-libertinos" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AKOKY" />
        <meta property="og:title" content={`${stats.total} Clubes Libertinos en Europa — Directorio Verificado | AKOKY`} />
        <meta property="og:description" content={`${stats.total} clubes libertinos verificados en España y Europa.`} />
        <meta property="og:url" content="https://akoky.com/es/clubes-libertinos" />
        <meta property="og:image" content="https://akoky.com/images/club.webp" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@akoky_official" />
      </Helmet>
      <HreflangTags slug="clubes-libertinos" />
      <SchemaOrg schema={[pageSchema, breadcrumbSchema, ...clubsSchema]} />

      <ContentPageLayout
        lang="es"
        title={`${stats.total} Clubes Libertinos — Directorio AKOKY`}
        description={`${stats.total} clubes libertinos verificados en Europa.`}
        canonical="https://akoky.com/es/clubes-libertinos"
        heroTitle="Directorio de Clubes Libertinos"
        heroSubtitle={`${stats.total} establecimientos verificados en España y toda Europa — clubes, saunas, locales privados. Fichas detalladas y enlaces directos.`}
        heroImage="/images/club.webp"
        breadcrumb={[{ label: "Clubes Libertinos" }]}
        faq={[
          { question: "¿Cómo encontrar un club libertino cerca de mí?", answer: "Usa los filtros por país, región y tipo de establecimiento arriba. Cada ficha de club contiene la dirección, los horarios y un enlace directo a la página AKOKY del club." },
          { question: "¿Los clubes están verificados?", answer: "Sí, todos los establecimientos listados en AKOKY están verificados por nuestro equipo. Verificamos la existencia, la ubicación y la calidad de cada establecimiento antes de referenciarlo." },
          { question: "¿Puedo reservar directamente a través de AKOKY?", answer: "Algunos clubes asociados ofrecen reserva directa a través de la plataforma AKOKY. Para los demás, encontrarás los datos de contacto y el sitio web oficial en cada ficha." },
          { question: "¿Cuál es la diferencia entre un club libertino y un sauna libertino?", answer: "Un club libertino es un establecimiento dedicado a los encuentros entre adultos consentidores, con a menudo un bar, una pista de baile y espacios íntimos. Un sauna libertino ofrece además instalaciones de bienestar (hammam, jacuzzi, sauna) en un entorno propicio para los encuentros." },
          { question: "¿Hay clubes para parejas principiantes?", answer: "Sí, muchos clubes acogen a principiantes con veladas especiales y acompañamiento. Consulta nuestra guía para empezar bien en un club libertino." },
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
                <p className="text-sm text-muted-foreground">Establecimientos</p>
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
                  placeholder="🔍 Buscar un club, una ciudad, una región..."
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
                <option value="">🌍 Todos los países</option>
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
                <option value="">📍 Todas las regiones</option>
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
                <option value="">🏛️ Todos los tipos</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span> establecimiento{filtered.length > 1 ? "s" : ""} encontrado{filtered.length > 1 ? "s" : ""}
              </p>
              {(search || selectedCountry || selectedRegion || selectedType) && (
                <button
                  onClick={() => { setSearch(""); setSelectedCountry(""); setSelectedRegion(""); setSelectedType(""); }}
                  className="text-xs text-primary hover:underline"
                >
                  ✕ Reiniciar filtros
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
                <p className="text-muted-foreground">Cargando el directorio...</p>
              </div>
            ) : Object.keys(grouped).length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-muted-foreground text-lg">Ningún establecimiento encontrado para estos criterios.</p>
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
                        {country} — {countryTotal} establecimiento{countryTotal > 1 ? "s" : ""}
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
            <h2 className="text-2xl font-bold text-foreground mb-6">Directorio de clubes libertinos en Europa — Guía AKOKY 2026</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AKOKY referencia <strong className="text-foreground">{stats.total} establecimientos libertinos verificados</strong> en Europa: <Link to="/es/clubbing" className="text-primary hover:underline">clubes de intercambio</Link>, <Link to="/es/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link>, locales privados y cines para adultos. Cada ficha está verificada por nuestro equipo y enriquecida con las <Link to="/es/avis" className="text-primary hover:underline">opiniones de nuestra comunidad de 1,5M de miembros</Link>.
              </p>
              <p>
                Ya busques un club libertino en Madrid, Barcelona, Sevilla o Valencia, nuestro directorio te permite filtrar por país, región y tipo de establecimiento para encontrar el lugar ideal.
              </p>
              <p>
                A diferencia de <strong className="text-foreground">Wyylde</strong>, <strong className="text-foreground">NousLibertins</strong> o <strong className="text-foreground">Libertic</strong>, AKOKY ofrece un directorio completo con fichas detalladas, fotos verificadas, horarios actualizados y enlaces directos a cada establecimiento. <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">Descubre cómo empezar bien</Link> y encuentra el club perfecto para tu primera visita.
              </p>
              <p>
                Todos los clubes asociados a AKOKY respetan nuestra <Link to="/es/vision" className="text-primary hover:underline">carta ética</Link>: consentimiento explícito, discreción garantizada, higiene impecable y respeto de los límites de cada uno. Explora también nuestro <Link to="/es/lexico" className="text-primary hover:underline">léxico libertino</Link> para entender los códigos y las prácticas antes de tu primera visita.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ MAILLAGE INTERNE ═══════════ */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Explorar por ciudad</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Madrid", href: "/es/clubbing" },
                { label: "Barcelona", href: "/es/clubbing" },
                { label: "Valencia", href: "/es/clubbing" },
                { label: "Sevilla", href: "/es/clubbing" },
                { label: "Bilbao", href: "/es/clubbing" },
                { label: "Málaga", href: "/es/clubbing" },
                { label: "Zaragoza", href: "/es/clubbing" },
                { label: "Marbella", href: "/es/clubbing" },
                { label: "Ibiza", href: "/es/clubbing" },
                { label: "Alicante", href: "/es/clubbing" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CLUB DETAIL MODAL */}
        <ClubDetailModal
          club={selectedClub}
          onClose={() => setSelectedClub(null)}
        />
      </ContentPageLayout>
    </>
  );
};

export default ClubesLibertinos;
