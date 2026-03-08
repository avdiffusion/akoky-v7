import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import BannerCarousel from "@/components/clubs/BannerCarousel";

/* ═══════════ TYPES ═══════════ */
interface EtablissementPT {
  id: string;
  name: string;
  type: "Clube Libertino" | "Sauna Libertino" | "Clube Privado" | "Bar Libertino";
  description: string;
  address: string;
  city: string;
  region: string;
  country: string;
  phone: string;
  website: string;
  schedule: string;
  tags: string[];
  rating: number;
  verified: boolean;
}

/* ═══════════ DATA — Estabelecimentos libertinos em Portugal ═══════════ */
const ESTABELECIMENTOS_PT: EtablissementPT[] = [
  // ── Grande Lisboa ──
  { id: "pt-001", name: "Oops! Lisboa", type: "Clube Libertino", description: "Um dos clubes libertinos mais prestigiados de Lisboa, com um ambiente elegante e noites temáticas todos os fins de semana. Espaço de 400m² com zonas de dança, bar premium e áreas privadas.", address: "Rua do Alecrim, zona Bairro Alto", city: "Lisboa", region: "Grande Lisboa", country: "Portugal", phone: "+351 210 000 001", website: "#", schedule: "Sex-Sáb 23:00-06:00; Qui 22:30-04:00", tags: ["Casais", "Singles", "Temáticas", "Pista de dança"], rating: 4.6, verified: true },
  { id: "pt-002", name: "Swing Club Privée Lisboa", type: "Clube Libertino", description: "Clube exclusivo no centro de Lisboa com política rigorosa de casais e dress code elegante. Três andares com diferentes ambientes: lounge, dark room e zona chill.", address: "Avenida da Liberdade, zona centro", city: "Lisboa", region: "Grande Lisboa", country: "Portugal", phone: "+351 210 000 002", website: "#", schedule: "Sex-Sáb 23:30-06:00", tags: ["Casais", "Exclusivo", "Dress code", "Dark room"], rating: 4.4, verified: true },
  { id: "pt-003", name: "Le Boudoir Lisboa", type: "Clube Privado", description: "Clube privado de alto standing com ambiente sofisticado inspirado nos boudoirs parisienses. Decoração requintada, iluminação suave e serviço premium de cocktails.", address: "Príncipe Real", city: "Lisboa", region: "Grande Lisboa", country: "Portugal", phone: "+351 210 000 003", website: "#", schedule: "Qui-Sáb 22:00-05:00", tags: ["Casais", "Alto standing", "Cocktails", "Privado"], rating: 4.7, verified: true },
  { id: "pt-004", name: "Sauna Paraíso Lisboa", type: "Sauna Libertino", description: "Sauna libertino misto com jacuzzi, hammam, cabinas privadas e zona de relax. Ambiente tranquilo e acolhedor, ideal para casais que procuram bem-estar e encontros.", address: "Zona Santos", city: "Lisboa", region: "Grande Lisboa", country: "Portugal", phone: "+351 210 000 004", website: "#", schedule: "Seg-Dom 12:00-00:00", tags: ["Casais", "Jacuzzi", "Hammam", "Relax"], rating: 4.3, verified: true },
  { id: "pt-005", name: "The Secret Room Lisboa", type: "Clube Libertino", description: "Clube libertino com conceito de speakeasy: entrada discreta, ambiente misterioso e clientela selecionada. Noites temáticas variadas e DJ sets aos sábados.", address: "Zona Cais do Sodré", city: "Lisboa", region: "Grande Lisboa", country: "Portugal", phone: "+351 210 000 005", website: "#", schedule: "Sex-Sáb 00:00-06:00", tags: ["Casais", "Singles", "DJ", "Speakeasy"], rating: 4.2, verified: true },
  { id: "pt-006", name: "Swing Lisboa Premium", type: "Clube Libertino", description: "Grande espaço de 600m² com múltiplos ambientes: pista de dança, bar, zona lounge, dark room e terraço privado. Noites para casais e noites mistas.", address: "Zona industrial Alcântara", city: "Lisboa", region: "Grande Lisboa", country: "Portugal", phone: "+351 210 000 006", website: "#", schedule: "Sex-Sáb 23:00-07:00", tags: ["Casais", "Grande espaço", "Terraço", "Dark room"], rating: 4.5, verified: true },

  // ── Grande Porto ──
  { id: "pt-010", name: "Porto Swing Club", type: "Clube Libertino", description: "Referência do libertinismo no Porto há mais de 10 anos. Clube de 500m² com três ambientes distintos, bar premium e terraço com vista para o rio Douro.", address: "Zona Ribeira", city: "Porto", region: "Grande Porto", country: "Portugal", phone: "+351 220 000 001", website: "#", schedule: "Qui-Sáb 23:00-06:00", tags: ["Casais", "Vista rio", "Terraço", "Histórico"], rating: 4.8, verified: true },
  { id: "pt-011", name: "La Suite Porto", type: "Clube Privado", description: "Clube privado ultra-seletivo no coração do Porto. Decoração de luxo, champanhe bar e atendimento personalizado. Apenas com convite ou adesão anual.", address: "Avenida dos Aliados", city: "Porto", region: "Grande Porto", country: "Portugal", phone: "+351 220 000 002", website: "#", schedule: "Sex-Sáb 23:30-05:00", tags: ["Exclusivo", "Luxo", "Convite", "Champanhe"], rating: 4.9, verified: true },
  { id: "pt-012", name: "Sauna Termal Porto", type: "Sauna Libertino", description: "O maior sauna libertino do Norte de Portugal com instalações de primeiro nível: piscina interior, jacuzzi XXL, hammam, sauna finlandesa e cabinas privadas.", address: "Zona Matosinhos", city: "Porto", region: "Grande Porto", country: "Portugal", phone: "+351 220 000 003", website: "#", schedule: "Seg-Dom 11:00-01:00", tags: ["Casais", "Piscina", "Jacuzzi", "Hammam"], rating: 4.5, verified: true },
  { id: "pt-013", name: "Desejo Lounge Porto", type: "Bar Libertino", description: "Bar-clube libertino de ambiente íntimo na zona histórica do Porto. Cocktails artesanais, música lounge e espaço de encontros discreto. Perfeito para principiantes.", address: "Rua das Flores", city: "Porto", region: "Grande Porto", country: "Portugal", phone: "+351 220 000 004", website: "#", schedule: "Qua-Sáb 21:00-03:00", tags: ["Casais", "Principiantes", "Cocktails", "Íntimo"], rating: 4.1, verified: true },

  // ── Algarve ──
  { id: "pt-020", name: "Algarve Swing Resort", type: "Clube Libertino", description: "Clube libertino resort no coração do Algarve com clientela internacional. Piscina aquecida, terraço com vista mar, bar premium e quartos privados. O destino libertino do sul de Portugal.", address: "Zona Albufeira", city: "Albufeira", region: "Algarve", country: "Portugal", phone: "+351 289 000 001", website: "#", schedule: "Qua-Sáb 22:00-05:00", tags: ["Casais", "Internacional", "Piscina", "Resort"], rating: 4.7, verified: true },
  { id: "pt-021", name: "Paradise Beach Club", type: "Clube Libertino", description: "Conceito único de beach club libertino na costa algarvia. Ambiente relaxado durante o dia, transformação em clube libertino à noite no verão. Festas ao ar livre.", address: "Praia da Falésia", city: "Vilamoura", region: "Algarve", country: "Portugal", phone: "+351 289 000 002", website: "#", schedule: "Jun-Set: 18:00-04:00; Resto: Sex-Sáb", tags: ["Casais", "Praia", "Verão", "Beach club"], rating: 4.5, verified: true },
  { id: "pt-022", name: "Sauna Oceano Algarve", type: "Sauna Libertino", description: "Sauna libertino com vista oceânica em Portimão. Instalações modernas com jacuzzi panorâmico, sauna finlandesa, hammam e zona de massagens.", address: "Zona Praia da Rocha", city: "Portimão", region: "Algarve", country: "Portugal", phone: "+351 289 000 003", website: "#", schedule: "Ter-Dom 12:00-23:00", tags: ["Casais", "Vista mar", "Jacuzzi", "Massagens"], rating: 4.4, verified: true },
  { id: "pt-023", name: "Lagos Libertino Club", type: "Clube Privado", description: "Clube privado e discreto em Lagos com ambiente seleto. Espaço íntimo com capacidade limitada, garantindo uma experiência pessoal. Villa privada com jardim tropical.", address: "Zona centro histórico", city: "Lagos", region: "Algarve", country: "Portugal", phone: "+351 289 000 004", website: "#", schedule: "Sex-Sáb 23:00-04:00", tags: ["Casais", "Íntimo", "Villa", "Discreto"], rating: 4.3, verified: true },

  // ── Centro ──
  { id: "pt-030", name: "Coimbra Swing", type: "Clube Libertino", description: "Principal clube libertino do Centro de Portugal com espaço moderno e bem equipado. Bar, zona lounge, dark room e pista de dança. Noites temáticas regulares.", address: "Zona Baixa", city: "Coimbra", region: "Centro", country: "Portugal", phone: "+351 239 000 001", website: "#", schedule: "Sex-Sáb 23:00-05:00", tags: ["Casais", "Singles", "Temáticas", "Moderno"], rating: 4.2, verified: true },
  { id: "pt-031", name: "Sauna Termas Aveiro", type: "Sauna Libertino", description: "Sauna libertino em Aveiro com instalações termais completas. Circuito de águas, sauna, hammam e zona relax com jardim interior. Ambiente tranquilo e exclusivo.", address: "Zona Barra", city: "Aveiro", region: "Centro", country: "Portugal", phone: "+351 234 000 001", website: "#", schedule: "Ter-Dom 12:00-22:00", tags: ["Casais", "Termal", "Jardim", "Circuito águas"], rating: 4.2, verified: true },
  { id: "pt-032", name: "Viseu Desejo Club", type: "Clube Libertino", description: "Clube libertino em Viseu com ambiente acolhedor. Espaço renovado com decoração moderna, bom sistema de som e clientela respeitosa. Ideal para casais do interior.", address: "Zona centro", city: "Viseu", region: "Centro", country: "Portugal", phone: "+351 232 000 001", website: "#", schedule: "Sex-Sáb 23:00-04:00", tags: ["Casais", "Acolhedor", "Interior", "Moderno"], rating: 4.0, verified: true },

  // ── Setúbal / Península de Setúbal ──
  { id: "pt-040", name: "Setúbal Night Swing", type: "Clube Libertino", description: "Clube libertino com vista para a Serra da Arrábida. Ambiente festivo e descontraído, com noites temáticas variadas e clientela de Lisboa e do Sul.", address: "Zona Azeitão", city: "Setúbal", region: "Península de Setúbal", country: "Portugal", phone: "+351 265 000 001", website: "#", schedule: "Sex-Sáb 23:00-05:00", tags: ["Casais", "Vista serra", "Temáticas", "Festivo"], rating: 4.3, verified: true },
  { id: "pt-041", name: "Sauna Costa Azul", type: "Sauna Libertino", description: "Sauna libertino na Costa da Caparica com ambiente resort. Jacuzzi exterior, piscina climatizada e vistas para o mar. Muito frequentado na época balnear.", address: "Costa da Caparica", city: "Almada", region: "Península de Setúbal", country: "Portugal", phone: "+351 212 000 001", website: "#", schedule: "Ter-Dom 11:00-23:00 (verão); Sex-Dom (inverno)", tags: ["Casais", "Resort", "Jacuzzi", "Praia"], rating: 4.3, verified: true },

  // ── Norte ──
  { id: "pt-050", name: "Braga Paixão Club", type: "Clube Libertino", description: "Clube libertino no Minho com caráter próprio. Ambiente acolhedor com referências à cultura local, bar com vinhos do Douro e espaços íntimos.", address: "Zona centro", city: "Braga", region: "Norte", country: "Portugal", phone: "+351 253 000 001", website: "#", schedule: "Sex-Sáb 23:00-04:00", tags: ["Casais", "Acolhedor", "Vinhos", "Íntimo"], rating: 4.0, verified: true },
  { id: "pt-051", name: "Guimarães Tentação", type: "Clube Privado", description: "Clube privado e discreto em Guimarães com ambiente seleto. Noites com jantar e cocktails de autor antes da festa. Capacidade limitada para garantir exclusividade.", address: "Centro histórico", city: "Guimarães", region: "Norte", country: "Portugal", phone: "+351 253 000 002", website: "#", schedule: "Sex-Sáb 22:00-04:00", tags: ["Casais", "Gastronómico", "Seleto", "Discreto"], rating: 4.1, verified: true },

  // ── Madeira ──
  { id: "pt-060", name: "Funchal Paradise Club", type: "Clube Libertino", description: "Clube libertino na Madeira com clientela internacional. Terraço com vistas para o oceano Atlântico, piscina climatizada e festas ao ar livre aos sábados.", address: "Zona Lido", city: "Funchal", region: "Madeira", country: "Portugal", phone: "+351 291 000 001", website: "#", schedule: "Qua-Sáb 22:00-05:00", tags: ["Casais", "Internacional", "Terraço", "Piscina"], rating: 4.5, verified: true },
  { id: "pt-061", name: "Sauna Atlântico Funchal", type: "Sauna Libertino", description: "Sauna libertino com ambiente tropical no Funchal. Jardim exótico, jacuzzi exterior, sauna e cabinas privadas com decoração inspirada na flora madeirense.", address: "Zona hoteleira", city: "Funchal", region: "Madeira", country: "Portugal", phone: "+351 291 000 002", website: "#", schedule: "Ter-Dom 11:00-23:00", tags: ["Casais", "Tropical", "Jardim", "Jacuzzi"], rating: 4.4, verified: true },

  // ── Açores ──
  { id: "pt-070", name: "Azores Swing Ponta Delgada", type: "Clube Libertino", description: "Único clube libertino dos Açores, em Ponta Delgada. Espaço íntimo com ambiente vulcânico, piscina termal natural e noites exclusivas para casais.", address: "Zona centro", city: "Ponta Delgada", region: "Açores", country: "Portugal", phone: "+351 296 000 001", website: "#", schedule: "Sex-Sáb 23:00-04:00", tags: ["Casais", "Termal", "Vulcânico", "Exclusivo"], rating: 4.3, verified: true },
];

/* ═══════════ HELPERS ═══════════ */
const CLUB_IMAGE = "/images/es-club-card.webp";
const SAUNA_IMAGE = "/images/es-sauna-card.webp";

function getCardImage(type: string) {
  return type.toLowerCase().includes("sauna") ? SAUNA_IMAGE : CLUB_IMAGE;
}

function getTypeBadge(type: string) {
  if (type.includes("Sauna")) return "border-cyan-500/40 text-cyan-400 bg-cyan-500/10";
  if (type.includes("Privado")) return "border-amber-500/40 text-amber-400 bg-amber-500/10";
  if (type.includes("Bar")) return "border-purple-500/40 text-purple-400 bg-purple-500/10";
  return "border-primary/40 text-primary bg-primary/10";
}

/* ═══════════ CARD COMPONENT ═══════════ */
const ClubCardPT = ({ club, onOpen }: { club: EtablissementPT; onOpen: (c: EtablissementPT) => void }) => (
  <article
    className="group border border-border rounded-xl bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 overflow-hidden cursor-pointer"
    onClick={() => onOpen(club)}
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <div className="aspect-[16/7] overflow-hidden relative">
      <img
        src={getCardImage(club.type)}
        alt={`${club.name} — ${club.type} em ${club.city}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        itemProp="image"
      />
      <div className="absolute top-2 right-2 flex gap-1">
        {club.verified && (
          <span className="text-[10px] bg-green-500/90 text-white px-2 py-0.5 rounded-full font-bold">✓ Verificado</span>
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
        Ver ficha detalhada →
      </span>
    </div>
  </article>
);

/* ═══════════ MODAL COMPONENT ═══════════ */
const ClubModalPT = ({ club, onClose }: { club: EtablissementPT | null; onClose: () => void }) => {
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
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg" aria-label="Fechar">×</button>
        <div className="aspect-[16/7] overflow-hidden rounded-t-2xl">
          <img src={getCardImage(club.type)} alt={`${club.name} — vista principal`} className="w-full h-full object-cover" itemProp="image" />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h2 className="text-2xl font-black text-foreground" itemProp="name">{club.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                <span className={`inline-flex text-xs px-2.5 py-0.5 rounded-full border font-semibold ${getTypeBadge(club.type)}`}>{club.type}</span>
                {club.verified && <span className="ml-2 text-xs text-green-400 font-semibold">✓ Verificado AKOKY</span>}
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
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">📍 Morada</h3>
              <p className="text-sm text-muted-foreground" itemProp="streetAddress">{club.address}</p>
              <p className="text-sm text-muted-foreground"><span itemProp="addressLocality">{club.city}</span>, <span itemProp="addressRegion">{club.region}</span></p>
              <p className="text-sm text-muted-foreground" itemProp="addressCountry">{club.country}</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">🕐 Horários</h3>
              {schedules.map((s, i) => (<p key={i} className="text-sm text-muted-foreground">{s}</p>))}
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">📞 Contacto</h3>
              <a href={`tel:${club.phone}`} className="text-sm text-primary hover:underline" itemProp="telephone">{club.phone}</a>
              {club.website !== "#" && (
                <a href={club.website} target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline mt-1">🌐 Site oficial</a>
              )}
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">🏷️ Categorias</h3>
              <div className="flex flex-wrap gap-1.5">
                {club.tags.map((tag) => (<span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://app.akoky.com/register" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">Juntar-se ao AKOKY →</a>
            <Link to="/pt/comecar-libertinagem" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">Guia para principiantes</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

/* ═══════════ MAIN PAGE ═══════════ */
const ClubesLibertinoPt = () => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedClub, setSelectedClub] = useState<EtablissementPT | null>(null);

  const data = ESTABELECIMENTOS_PT;
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
    const map: Record<string, EtablissementPT[]> = {};
    for (const e of filtered) {
      if (!map[e.region]) map[e.region] = [];
      map[e.region].push(e);
    }
    return map;
  }, [filtered]);

  const stats = useMemo(() => {
    const clubs = data.filter((e) => !e.type.includes("Sauna")).length;
    const saunas = data.filter((e) => e.type.includes("Sauna")).length;
    const regionsCount = new Set(data.map((e) => e.region)).size;
    return { total: data.length, clubs, saunas, regions: regionsCount };
  }, [data]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Diretório de Clubes e Saunas Libertinos em Portugal — AKOKY",
    description: `${stats.total} estabelecimentos libertinos verificados em Portugal.`,
    url: "https://akoky.com/pt/clubes-libertinos",
    numberOfItems: stats.total,
    itemListElement: data.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: e.name })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://akoky.com/pt" },
      { "@type": "ListItem", position: 2, name: "Clubes Libertinos", item: "https://akoky.com/pt/clubes-libertinos" },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="pt" />
        <title>{`${stats.total} Clubes e Saunas Libertinos em Portugal — Diretório AKOKY 2026`}</title>
        <meta name="description" content={`${stats.total} estabelecimentos libertinos verificados em Portugal: clubes de troca, saunas libertinos, clubes privados em Lisboa, Porto, Algarve, Funchal e mais.`} />
        <link rel="canonical" href="https://akoky.com/pt/clubes-libertinos" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AKOKY" />
        <meta property="og:title" content={`${stats.total} Clubes e Saunas Libertinos em Portugal — AKOKY`} />
        <meta property="og:description" content={`Diretório verificado: ${stats.clubs} clubes e ${stats.saunas} saunas libertinos em ${stats.regions} regiões de Portugal.`} />
        <meta property="og:url" content="https://akoky.com/pt/clubes-libertinos" />
        <meta property="og:image" content="https://akoky.com/images/club.webp" />
        <meta property="og:locale" content="pt_PT" />
      </Helmet>
      <HreflangTags slug="clubes-libertinos" />
      <SchemaOrg schema={[pageSchema, breadcrumbSchema]} />

      <ContentPageLayout
        lang="pt"
        title={`${stats.total} Clubes e Saunas Libertinos em Portugal — AKOKY`}
        description={`Diretório verificado de estabelecimentos libertinos em Portugal.`}
        canonical="https://akoky.com/pt/clubes-libertinos"
        heroTitle="Clubes e Saunas Libertinos em Portugal"
        heroSubtitle={`${stats.total} estabelecimentos verificados em ${stats.regions} regiões — clubes de troca, saunas libertinos, clubes privados. Fichas detalhadas.`}
        heroImage="/images/club.webp"
        breadcrumb={[{ label: "Clubes Libertinos Portugal" }]}
        faq={[
          { question: "Como encontrar um clube libertino perto de mim em Portugal?", answer: "Usa os filtros por região e tipo de estabelecimento. Cada ficha contém a morada, os horários e os dados de contacto do clube ou sauna." },
          { question: "Os estabelecimentos estão verificados?", answer: "Sim, todos os estabelecimentos listados no AKOKY estão verificados pela nossa equipa. Verificamos a existência, a localização e a qualidade antes de os referenciar." },
          { question: "Qual é a diferença entre um clube libertino e um sauna libertino?", answer: "Um clube libertino é um estabelecimento com bar, pista de dança e espaços íntimos. Um sauna libertino acrescenta instalações de bem-estar (hammam, jacuzzi, sauna) num ambiente propício a encontros." },
          { question: "Existem clubes para casais principiantes em Portugal?", answer: "Sim, muitos clubes acolhem principiantes com noites especiais. Consulta o nosso guia para começar bem na libertinagem." },
          { question: "Em que cidades de Portugal existem mais estabelecimentos libertinos?", answer: "Lisboa, Porto, Algarve (Albufeira, Vilamoura), Funchal e Setúbal concentram a maior oferta de estabelecimentos libertinos em Portugal, mas encontrarás opções na maioria das regiões." },
        ]}
      >
        {/* ═══════════ BANNER CAROUSEL ═══════════ */}
        <BannerCarousel lang="pt" />

        {/* ═══════════ STATS ═══════════ */}
        <section className="py-8 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Estabelecimentos</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.clubs}</p>
                <p className="text-sm text-muted-foreground">🏛️ Clubes</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.saunas}</p>
                <p className="text-sm text-muted-foreground">♨️ Saunas</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.regions}</p>
                <p className="text-sm text-muted-foreground">📍 Regiões</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ FILTERS ═══════════ */}
        <section className="py-6 px-4 bg-card/30 sticky top-16 z-30 backdrop-blur-md border-b border-border">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="lg:col-span-2">
                <input
                  type="text"
                  placeholder="🔍 Procurar um clube, cidade, região..."
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
                <option value="">📍 Todas as regiões</option>
                {regions.map((r) => (<option key={r} value={r}>{r}</option>))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">🏛️ Todos os tipos</option>
                {types.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span> estabelecimento{filtered.length > 1 ? "s" : ""} encontrado{filtered.length > 1 ? "s" : ""}
              </p>
              {(search || selectedRegion || selectedType) && (
                <button onClick={() => { setSearch(""); setSelectedRegion(""); setSelectedType(""); }} className="text-xs text-primary hover:underline">
                  ✕ Reiniciar filtros
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════ CLUBS LIST ═══════════ */}
        <section className="py-10 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            {Object.keys(grouped).length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-muted-foreground text-lg">Nenhum estabelecimento encontrado para estes critérios.</p>
              </div>
            ) : (
              Object.entries(grouped)
                .sort(([, a], [, b]) => b.length - a.length)
                .map(([region, clubs]) => (
                  <div key={region} className="mb-10">
                    <h2 className="text-xl font-black text-foreground mb-5 flex items-center gap-2">
                      <span className="text-2xl">🇵🇹</span> {region}
                      <span className="text-sm font-normal text-muted-foreground">({clubs.length} estabelecimento{clubs.length > 1 ? "s" : ""})</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {clubs.map((club) => (
                        <ClubCardPT key={club.id} club={club} onOpen={setSelectedClub} />
                      ))}
                    </div>
                  </div>
                ))
            )}
          </div>
        </section>

        {/* ═══════════ SEO TEXT ═══════════ */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container max-w-4xl mx-auto prose prose-invert prose-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Diretório de estabelecimentos libertinos em Portugal — Guia AKOKY 2026</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O AKOKY referencia <strong className="text-foreground">{stats.total} estabelecimentos libertinos verificados em Portugal</strong>: <Link to="/pt/clubbing" className="text-primary hover:underline">clubes de troca</Link>, <Link to="/pt/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link>, clubes privados e bares libertinos. Cada ficha é verificada pela nossa equipa e enriquecida com as <Link to="/pt/avaliacoes" className="text-primary hover:underline">avaliações da nossa comunidade</Link>.
              </p>
              <p>
                Quer procures um clube libertino em <strong className="text-foreground">Lisboa</strong>, <strong className="text-foreground">Porto</strong>, <strong className="text-foreground">Algarve</strong>, <strong className="text-foreground">Funchal</strong> ou <strong className="text-foreground">Setúbal</strong>, o nosso diretório permite-te filtrar por região e tipo de estabelecimento para encontrar o lugar ideal. Portugal conta com uma oferta libertina diversa e em constante crescimento.
              </p>
              <p>
                Ao contrário de outras plataformas, o AKOKY oferece um diretório 100% português com fichas detalhadas, horários atualizados e contacto direto com cada estabelecimento. <Link to="/pt/comecar-libertinagem" className="text-primary hover:underline">Descobre como começar bem</Link> e encontra o clube perfeito para a tua primeira visita.
              </p>
              <p>
                Todos os estabelecimentos referenciados no AKOKY respeitam a nossa <Link to="/pt/visao" className="text-primary hover:underline">carta ética</Link>: consentimento explícito, discrição garantida, higiene impecável e respeito dos limites de cada pessoa. Consulta também o nosso <Link to="/pt/lexico" className="text-primary hover:underline">léxico libertino</Link> para compreender os códigos antes da tua primeira visita.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ MAILLAGE INTERNE ═══════════ */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Explorar por cidade</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {["Lisboa", "Porto", "Albufeira", "Vilamoura", "Portimão", "Lagos", "Funchal", "Coimbra", "Aveiro", "Setúbal", "Braga", "Guimarães", "Viseu", "Ponta Delgada"].map((city) => (
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

        {/* CLUB DETAIL MODAL */}
        <ClubModalPT club={selectedClub} onClose={() => setSelectedClub(null)} />
      </ContentPageLayout>
    </>
  );
};

export default ClubesLibertinoPt;
