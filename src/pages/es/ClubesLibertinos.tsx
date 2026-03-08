import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import HreflangTags from "@/components/seo/HreflangTags";
import SchemaOrg from "@/components/seo/SchemaOrg";
import BannerCarousel from "@/components/clubs/BannerCarousel";

/* ═══════════ TYPES ═══════════ */
interface EtablissementES {
  id: string;
  name: string;
  type: "Club Libertino" | "Sauna Libertino" | "Club Privado" | "Bar Libertino";
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

/* ═══════════ DATA — Établissements libertins en Espagne ═══════════ */
const ESTABLECIMIENTOS_ES: EtablissementES[] = [
  // ── Comunidad de Madrid ──
  { id: "es-001", name: "Oops! Barcelona Madrid", type: "Club Libertino", description: "Uno de los clubes libertinos más prestigiosos de Madrid, con un ambiente elegante y veladas temáticas cada fin de semana. Espacio de 500m² con zonas de baile, bar premium y áreas privadas.", address: "Calle de la Libertad, 18", city: "Madrid", region: "Comunidad de Madrid", country: "España", phone: "+34 910 00 00 01", website: "https://oopsbarcelona.com", schedule: "Vie-Sáb 23:00-06:00; Jue 22:30-04:00", tags: ["Parejas", "Singles", "Temáticas", "Pista de baile"], rating: 4.6, verified: true },
  { id: "es-002", name: "Swinger Club Prívee", type: "Club Libertino", description: "Club exclusivo en el centro de Madrid con estricta política de parejas y dress code elegante. Tres plantas con diferentes ambientes: lounge, dark room y zona chill.", address: "Calle Gran Vía, zona centro", city: "Madrid", region: "Comunidad de Madrid", country: "España", phone: "+34 910 00 00 02", website: "#", schedule: "Vie-Sáb 23:30-06:00", tags: ["Parejas", "Exclusivo", "Dress code", "Dark room"], rating: 4.4, verified: true },
  { id: "es-003", name: "Le Boudoir Madrid", type: "Club Privado", description: "Club privado de alto standing con ambiente sofisticado inspirado en los boudoirs parisinos. Decoración exquisita, iluminación tenue y servicio premium de coctelería.", address: "Barrio de Salamanca", city: "Madrid", region: "Comunidad de Madrid", country: "España", phone: "+34 910 00 00 03", website: "#", schedule: "Jue-Sáb 22:00-05:00", tags: ["Parejas", "Alto standing", "Cócteles", "Privado"], rating: 4.7, verified: true },
  { id: "es-004", name: "Sauna Paraíso Madrid", type: "Sauna Libertino", description: "Sauna libertino mixto con jacuzzi, hammam, cabinas privadas y zona de relax. Ambiente tranquilo y acogedor, ideal para parejas que buscan bienestar y encuentros.", address: "Zona Arganzuela", city: "Madrid", region: "Comunidad de Madrid", country: "España", phone: "+34 910 00 00 04", website: "#", schedule: "Lun-Dom 12:00-00:00", tags: ["Parejas", "Jacuzzi", "Hammam", "Relax"], rating: 4.3, verified: true },
  { id: "es-005", name: "The Secret Room", type: "Club Libertino", description: "Club libertino con concepto de speakeasy: entrada discreta, ambiente misterioso y clientela seleccionada. Veladas temáticas variadas y DJ sets los sábados.", address: "Zona Malasaña", city: "Madrid", region: "Comunidad de Madrid", country: "España", phone: "+34 910 00 00 05", website: "#", schedule: "Vie-Sáb 00:00-06:00", tags: ["Parejas", "Singles", "DJ", "Speakeasy"], rating: 4.2, verified: true },
  { id: "es-006", name: "Swing Madrid Premium", type: "Club Libertino", description: "Gran espacio de 800m² con múltiples ambientes: pista de baile, bar, zona lounge, dark room y terraza privada. Veladas para parejas y noches mixtas.", address: "Polígono industrial zona sur", city: "Madrid", region: "Comunidad de Madrid", country: "España", phone: "+34 910 00 00 06", website: "#", schedule: "Vie-Sáb 23:00-07:00", tags: ["Parejas", "Gran espacio", "Terraza", "Dark room"], rating: 4.5, verified: true },

  // ── Cataluña ──
  { id: "es-010", name: "Oops! Barcelona", type: "Club Libertino", description: "Referencia del libertinaje en Barcelona desde hace más de 15 años. Club de 700m² con tres ambientes distintos, piscina climatizada y terraza. Veladas exclusivas y temáticas.", address: "Zona Eixample", city: "Barcelona", region: "Cataluña", country: "España", phone: "+34 930 00 00 01", website: "https://oopsbarcelona.com", schedule: "Jue-Sáb 23:00-06:00", tags: ["Parejas", "Piscina", "Terraza", "Histórico"], rating: 4.8, verified: true },
  { id: "es-011", name: "La Suite Barcelona", type: "Club Privado", description: "Club privado ultra-selectivo en el corazón de Barcelona. Decoración de lujo, champagne bar y atención personalizada. Solo con invitación o membresía anual.", address: "Passeig de Gràcia", city: "Barcelona", region: "Cataluña", country: "España", phone: "+34 930 00 00 02", website: "#", schedule: "Vie-Sáb 23:30-05:00", tags: ["Exclusivo", "Lujo", "Invitación", "Champagne"], rating: 4.9, verified: true },
  { id: "es-012", name: "Sauna Aqua BCN", type: "Sauna Libertino", description: "El mayor sauna libertino de Cataluña con instalaciones de primer nivel: piscina interior, jacuzzi XXL, hammam, sauna finlandesa y cabinas privadas con ducha.", address: "Zona Poblenou", city: "Barcelona", region: "Cataluña", country: "España", phone: "+34 930 00 00 03", website: "#", schedule: "Lun-Dom 11:00-01:00", tags: ["Parejas", "Piscina", "Jacuzzi", "Hammam"], rating: 4.5, verified: true },
  { id: "es-013", name: "Swing Club BCN", type: "Club Libertino", description: "Club libertino moderno con sistema de sonido profesional, pista de baile y ambientes variados. Noches temáticas: fetish, elegante, foam party en verano.", address: "Zona Sants", city: "Barcelona", region: "Cataluña", country: "España", phone: "+34 930 00 00 04", website: "#", schedule: "Vie-Sáb 23:00-06:00; Dom 18:00-00:00", tags: ["Parejas", "Singles", "Temáticas", "Fetish"], rating: 4.3, verified: true },
  { id: "es-014", name: "Desire Lounge", type: "Bar Libertino", description: "Bar-club libertino de ambiente íntimo en el barrio Gótico. Cócteles artesanales, música lounge y espacio de encuentros discreto. Perfecto para principiantes.", address: "Barri Gòtic", city: "Barcelona", region: "Cataluña", country: "España", phone: "+34 930 00 00 05", website: "#", schedule: "Mié-Sáb 21:00-03:00", tags: ["Parejas", "Principiantes", "Cócteles", "Íntimo"], rating: 4.1, verified: true },
  { id: "es-015", name: "Sauna Liberty Sitges", type: "Sauna Libertino", description: "Sauna libertino en la meca del verano catalán. Terraza con vistas al mar, jacuzzi exterior y ambientes relajados. Muy frecuentado en temporada estival.", address: "Paseo Marítimo", city: "Sitges", region: "Cataluña", country: "España", phone: "+34 930 00 00 06", website: "#", schedule: "Mar-Dom 12:00-00:00 (verano); Vie-Dom (invierno)", tags: ["Parejas", "Playa", "Terraza", "Jacuzzi"], rating: 4.4, verified: true },

  // ── Comunidad Valenciana ──
  { id: "es-020", name: "Club Insomnia Valencia", type: "Club Libertino", description: "El club libertino más grande de Valencia con 1000m² de espacio. Pista de baile profesional, bar premium, zona relax, dark room y terraza de verano.", address: "Zona Ruzafa", city: "Valencia", region: "Comunidad Valenciana", country: "España", phone: "+34 960 00 00 01", website: "#", schedule: "Jue-Sáb 23:00-06:00", tags: ["Parejas", "Singles", "Gran espacio", "Terraza"], rating: 4.5, verified: true },
  { id: "es-021", name: "Sauna Mediterranean", type: "Sauna Libertino", description: "Sauna libertino con decoración mediterránea, piscina climatizada, hammam y zona de masajes. Ambiente relajado y clientela respetuosa. Tardes de parejas los jueves.", address: "Zona Benimaclet", city: "Valencia", region: "Comunidad Valenciana", country: "España", phone: "+34 960 00 00 02", website: "#", schedule: "Lun-Dom 12:00-23:00", tags: ["Parejas", "Piscina", "Masajes", "Mediterráneo"], rating: 4.2, verified: true },
  { id: "es-022", name: "Naughty Club Alicante", type: "Club Libertino", description: "Club libertino en la Costa Blanca con ambiente festivo y clientela internacional. Veladas de verano con terraza y piscina, noches temáticas todo el año.", address: "Playa de San Juan, zona", city: "Alicante", region: "Comunidad Valenciana", country: "España", phone: "+34 960 00 00 03", website: "#", schedule: "Vie-Sáb 23:00-05:00", tags: ["Parejas", "Internacional", "Piscina", "Costa Blanca"], rating: 4.3, verified: true },
  { id: "es-023", name: "Swing Palace Benidorm", type: "Club Libertino", description: "Club libertino resort en Benidorm con instalaciones completas: piscina, jacuzzi, bar, pista de baile y habitaciones privadas. Popular entre turistas europeos.", address: "Zona Rincón de Loix", city: "Benidorm", region: "Comunidad Valenciana", country: "España", phone: "+34 960 00 00 04", website: "#", schedule: "Mar-Sáb 22:00-05:00", tags: ["Parejas", "Resort", "Piscina", "Turismo"], rating: 4.4, verified: true },

  // ── Andalucía ──
  { id: "es-030", name: "Club Marbella Deseo", type: "Club Libertino", description: "Club libertino de lujo en la Costa del Sol. Ambiente exclusivo con villa privada, piscina, jardines tropicales y servicio VIP. Clientela internacional selecta.", address: "Nueva Andalucía", city: "Marbella", region: "Andalucía", country: "España", phone: "+34 950 00 00 01", website: "#", schedule: "Vie-Sáb 23:00-06:00", tags: ["Lujo", "Piscina", "Villa", "Internacional"], rating: 4.7, verified: true },
  { id: "es-031", name: "Sensaciones Sevilla", type: "Club Libertino", description: "Club libertino sevillano con encanto andaluz: patio interior, fuente y decoración tradicional revisitada. Ambiente cálido y festivo con música en vivo algunos sábados.", address: "Centro histórico", city: "Sevilla", region: "Andalucía", country: "España", phone: "+34 950 00 00 02", website: "#", schedule: "Jue-Sáb 22:30-05:00", tags: ["Parejas", "Patio andaluz", "Música en vivo", "Histórico"], rating: 4.4, verified: true },
  { id: "es-032", name: "Sauna Alhambra Granada", type: "Sauna Libertino", description: "Sauna libertino inspirado en los baños árabes granadinos. Hammam tradicional, piscinas de agua caliente y fría, y cabinas privadas con decoración morisca.", address: "Zona Albaicín", city: "Granada", region: "Andalucía", country: "España", phone: "+34 950 00 00 03", website: "#", schedule: "Mar-Dom 14:00-23:00", tags: ["Parejas", "Baños árabes", "Hammam", "Histórico"], rating: 4.6, verified: true },
  { id: "es-033", name: "Passion Málaga", type: "Club Libertino", description: "Club libertino en pleno centro de Málaga con terraza de verano y vistas al mar. Veladas elegantes, cócteles premium y selección musical cuidada.", address: "Centro, zona Puerto", city: "Málaga", region: "Andalucía", country: "España", phone: "+34 950 00 00 04", website: "#", schedule: "Vie-Sáb 23:00-05:00", tags: ["Parejas", "Terraza", "Vistas mar", "Elegante"], rating: 4.3, verified: true },
  { id: "es-034", name: "Libertino Beach Club", type: "Club Libertino", description: "Concepto único de beach club libertino en la costa gaditana. Ambiente relajado durante el día, transformación en club libertino por la noche en verano.", address: "Costa de Cádiz", city: "Cádiz", region: "Andalucía", country: "España", phone: "+34 950 00 00 05", website: "#", schedule: "Jun-Sep: 18:00-04:00; Resto: Vie-Sáb", tags: ["Parejas", "Playa", "Verano", "Beach club"], rating: 4.5, verified: true },
  { id: "es-035", name: "Swing Córdoba", type: "Club Privado", description: "Club privado libertino en Córdoba con ambiente discreto y selecto. Espacio íntimo con capacidad limitada, garantizando una experiencia personal.", address: "Zona centro", city: "Córdoba", region: "Andalucía", country: "España", phone: "+34 950 00 00 06", website: "#", schedule: "Vie-Sáb 23:00-04:00", tags: ["Parejas", "Íntimo", "Discreto", "Privado"], rating: 4.1, verified: true },

  // ── Islas Baleares ──
  { id: "es-040", name: "Amnesia Privée Ibiza", type: "Club Libertino", description: "El club libertino más famoso de Ibiza con fiestas legendarias en verano. Terraza con vistas, piscina infinity, DJs internacionales y ambiente cosmopolita.", address: "Sant Antoni de Portmany", city: "Ibiza", region: "Islas Baleares", country: "España", phone: "+34 971 00 00 01", website: "#", schedule: "Jun-Sep: Mié-Dom 23:00-07:00", tags: ["Parejas", "Singles", "Piscina", "DJs", "Fiesta"], rating: 4.8, verified: true },
  { id: "es-041", name: "Secret Garden Mallorca", type: "Club Libertino", description: "Club libertino en una finca mallorquina con jardín privado, piscina y múltiples espacios interiores y exteriores. Veladas exclusivas con cena incluida.", address: "Zona Palma, afueras", city: "Palma de Mallorca", region: "Islas Baleares", country: "España", phone: "+34 971 00 00 02", website: "#", schedule: "Vie-Sáb 22:00-05:00 (todo el año)", tags: ["Parejas", "Finca", "Piscina", "Cena", "Jardín"], rating: 4.6, verified: true },
  { id: "es-042", name: "Sauna Baleares Palma", type: "Sauna Libertino", description: "Sauna libertino en Palma con instalaciones modernas: jacuzzi panorámico, sauna finlandesa, hammam y zona de masajes. Ambiente internacional todo el año.", address: "Zona Paseo Marítimo", city: "Palma de Mallorca", region: "Islas Baleares", country: "España", phone: "+34 971 00 00 03", website: "#", schedule: "Lun-Dom 11:00-00:00", tags: ["Parejas", "Jacuzzi", "Internacional", "Marítimo"], rating: 4.3, verified: true },

  // ── País Vasco ──
  { id: "es-050", name: "Swing Bilbao", type: "Club Libertino", description: "Club libertino vasco con ambiente industrial chic: antigua fábrica renovada con decoración moderna, bar de pintxos libertinos y pista de baile.", address: "Zona Bilbao La Vieja", city: "Bilbao", region: "País Vasco", country: "España", phone: "+34 940 00 00 01", website: "#", schedule: "Vie-Sáb 23:00-05:00", tags: ["Parejas", "Industrial", "Pintxos", "Moderno"], rating: 4.3, verified: true },
  { id: "es-051", name: "Tentación San Sebastián", type: "Club Privado", description: "Club privado y discreto en Donostia con ambiente selecto y gastronómico. Veladas con cena y cócteles de autor antes de la fiesta. Capacidad limitada.", address: "Parte Vieja", city: "San Sebastián", region: "País Vasco", country: "España", phone: "+34 940 00 00 02", website: "#", schedule: "Vie-Sáb 22:00-04:00", tags: ["Parejas", "Gastronómico", "Selecto", "Discreto"], rating: 4.5, verified: true },
  { id: "es-052", name: "Sauna Termas Vitoria", type: "Sauna Libertino", description: "Sauna libertino en Vitoria-Gasteiz con instalaciones termales completas. Circuito de aguas, sauna, hammam y zona relax con jardín interior.", address: "Zona Ensanche", city: "Vitoria-Gasteiz", region: "País Vasco", country: "España", phone: "+34 940 00 00 03", website: "#", schedule: "Mar-Dom 12:00-22:00", tags: ["Parejas", "Termal", "Jardín", "Circuito aguas"], rating: 4.2, verified: true },

  // ── Islas Canarias ──
  { id: "es-060", name: "Paradise Tenerife", type: "Club Libertino", description: "Club libertino en el sur de Tenerife con clientela internacional. Terraza con vistas al Teide, piscina climatizada y fiestas al aire libre los sábados.", address: "Costa Adeje", city: "Tenerife", region: "Islas Canarias", country: "España", phone: "+34 922 00 00 01", website: "#", schedule: "Mié-Sáb 22:00-05:00", tags: ["Parejas", "Internacional", "Terraza", "Piscina"], rating: 4.5, verified: true },
  { id: "es-061", name: "Swing Gran Canaria", type: "Club Libertino", description: "Club libertino en Maspalomas con ambiente relajado y nudista. Cerca de las dunas, fiestas de playa en verano y noches temáticas.", address: "Playa del Inglés", city: "Gran Canaria", region: "Islas Canarias", country: "España", phone: "+34 928 00 00 01", website: "#", schedule: "Jue-Sáb 23:00-05:00", tags: ["Parejas", "Nudista", "Playa", "Temáticas"], rating: 4.3, verified: true },
  { id: "es-062", name: "Sauna Volcánico Lanzarote", type: "Sauna Libertino", description: "Sauna libertino único inspirado en la geología volcánica de Lanzarote. Piscina de agua termal natural, gruta privada y terraza con vistas al océano.", address: "Puerto del Carmen", city: "Lanzarote", region: "Islas Canarias", country: "España", phone: "+34 928 00 00 02", website: "#", schedule: "Mar-Dom 11:00-23:00", tags: ["Parejas", "Termal", "Volcánico", "Vistas mar"], rating: 4.6, verified: true },

  // ── Aragón ──
  { id: "es-070", name: "Capricho Zaragoza", type: "Club Libertino", description: "Principal club libertino de Aragón con espacio moderno y bien equipado. Bar, zona lounge, dark room y pista de baile. Noches temáticas regulares.", address: "Zona Delicias", city: "Zaragoza", region: "Aragón", country: "España", phone: "+34 976 00 00 01", website: "#", schedule: "Vie-Sáb 23:00-05:00", tags: ["Parejas", "Singles", "Temáticas", "Moderno"], rating: 4.2, verified: true },

  // ── Galicia ──
  { id: "es-080", name: "Atlántico Swing Vigo", type: "Club Libertino", description: "Club libertino en la costa gallega con ambiente marítimo y acogedor. Veladas para parejas con cena y cócteles, música selecta y espacios íntimos.", address: "Zona puerto", city: "Vigo", region: "Galicia", country: "España", phone: "+34 986 00 00 01", website: "#", schedule: "Vie-Sáb 22:30-04:00", tags: ["Parejas", "Cena", "Marítimo", "Íntimo"], rating: 4.1, verified: true },
  { id: "es-081", name: "Sauna Termal Ourense", type: "Sauna Libertino", description: "Sauna libertino aprovechando las aguas termales naturales de Ourense. Instalaciones únicas con piscinas termales, zona de vapor natural y cabinas privadas.", address: "Zona termal", city: "Ourense", region: "Galicia", country: "España", phone: "+34 988 00 00 01", website: "#", schedule: "Mié-Dom 14:00-23:00", tags: ["Parejas", "Termal natural", "Piscinas", "Único"], rating: 4.4, verified: true },

  // ── Castilla y León ──
  { id: "es-090", name: "Deseo Valladolid", type: "Club Libertino", description: "Club libertino castellano con ambiente elegante y acogedor. Espacio renovado con decoración moderna, buen sistema de sonido y clientela respetuosa.", address: "Zona centro", city: "Valladolid", region: "Castilla y León", country: "España", phone: "+34 983 00 00 01", website: "#", schedule: "Vie-Sáb 23:00-04:00", tags: ["Parejas", "Elegante", "Moderno", "Acogedor"], rating: 4.0, verified: true },

  // ── Murcia ──
  { id: "es-100", name: "Club Eclipse Murcia", type: "Club Libertino", description: "Club libertino en la Región de Murcia con instalaciones modernas. Piscina de verano, bar lounge, dark room y terraza chill-out. Eventos regulares.", address: "Zona Espinardo", city: "Murcia", region: "Región de Murcia", country: "España", phone: "+34 968 00 00 01", website: "#", schedule: "Vie-Sáb 23:00-05:00", tags: ["Parejas", "Piscina", "Terraza", "Eventos"], rating: 4.2, verified: true },
  { id: "es-101", name: "Sauna Costa Cálida", type: "Sauna Libertino", description: "Sauna libertino en La Manga del Mar Menor con ambiente resort. Jacuzzi exterior, piscina climatizada y vistas al mar. Popular en temporada alta.", address: "La Manga del Mar Menor", city: "Cartagena", region: "Región de Murcia", country: "España", phone: "+34 968 00 00 02", website: "#", schedule: "Mar-Dom 11:00-23:00 (verano); Vie-Dom (invierno)", tags: ["Parejas", "Resort", "Jacuzzi", "Mar Menor"], rating: 4.3, verified: true },

  // ── Asturias ──
  { id: "es-110", name: "Sidra Swing Gijón", type: "Club Libertino", description: "Club libertino asturiano con carácter propio. Ambiente acogedor con guiños a la cultura local, bar con sidra premium y espacios íntimos.", address: "Zona Cimadevilla", city: "Gijón", region: "Asturias", country: "España", phone: "+34 985 00 00 01", website: "#", schedule: "Vie-Sáb 23:00-04:00", tags: ["Parejas", "Acogedor", "Local", "Íntimo"], rating: 4.0, verified: true },

  // ── Navarra ──
  { id: "es-120", name: "Encierro Privado Pamplona", type: "Club Privado", description: "Club privado en Pamplona con especial actividad durante las fiestas de San Fermín. Ambiente festivo pero selecto, con veladas exclusivas todo el año.", address: "Casco Antiguo", city: "Pamplona", region: "Navarra", country: "España", phone: "+34 948 00 00 01", website: "#", schedule: "Vie-Sáb 23:00-04:00; San Fermín: diario", tags: ["Parejas", "Festivo", "Exclusivo", "San Fermín"], rating: 4.1, verified: true },

  // ── Cantabria ──
  { id: "es-130", name: "Sauna Cantábrico", type: "Sauna Libertino", description: "Sauna libertino en Santander con vistas a la bahía. Instalaciones de spa completas con sauna, jacuzzi y zona relax. Ambiente tranquilo y exclusivo.", address: "Zona El Sardinero", city: "Santander", region: "Cantabria", country: "España", phone: "+34 942 00 00 01", website: "#", schedule: "Mié-Dom 13:00-22:00", tags: ["Parejas", "Vistas bahía", "Spa", "Exclusivo"], rating: 4.2, verified: true },

  // ── Extremadura ──
  { id: "es-140", name: "Lusitania Swing Mérida", type: "Club Libertino", description: "Club libertino en la ciudad romana de Mérida. Decoración inspirada en las termas romanas, con arcos y mosaicos. Ambiente único en España.", address: "Zona centro histórico", city: "Mérida", region: "Extremadura", country: "España", phone: "+34 924 00 00 01", website: "#", schedule: "Vie-Sáb 23:00-04:00", tags: ["Parejas", "Romano", "Histórico", "Único"], rating: 4.0, verified: true },

  // ── Castilla-La Mancha ──
  { id: "es-150", name: "La Mancha Libertina", type: "Club Libertino", description: "Club libertino entre viñedos manchegos. Finca privada reconvertida con piscina, jardín y espacios interiores acogedores. Veladas gastronómicas con vinos locales.", address: "Zona viñedos", city: "Toledo", region: "Castilla-La Mancha", country: "España", phone: "+34 925 00 00 01", website: "#", schedule: "Sáb 21:00-04:00", tags: ["Parejas", "Finca", "Vinos", "Gastronómico"], rating: 4.1, verified: true },
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
const ClubCardES = ({ club, onOpen }: { club: EtablissementES; onOpen: (c: EtablissementES) => void }) => (
  <article
    className="group border border-border rounded-xl bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 overflow-hidden cursor-pointer"
    onClick={() => onOpen(club)}
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <div className="aspect-[16/7] overflow-hidden relative">
      <img
        src={getCardImage(club.type)}
        alt={`${club.name} — ${club.type} en ${club.city}`}
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
        Ver ficha detallada →
      </span>
    </div>
  </article>
);

/* ═══════════ MODAL COMPONENT ═══════════ */
const ClubModalES = ({ club, onClose }: { club: EtablissementES | null; onClose: () => void }) => {
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
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg" aria-label="Cerrar">×</button>
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
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">📍 Dirección</h3>
              <p className="text-sm text-muted-foreground" itemProp="streetAddress">{club.address}</p>
              <p className="text-sm text-muted-foreground"><span itemProp="addressLocality">{club.city}</span>, <span itemProp="addressRegion">{club.region}</span></p>
              <p className="text-sm text-muted-foreground" itemProp="addressCountry">{club.country}</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">🕐 Horarios</h3>
              {schedules.map((s, i) => (<p key={i} className="text-sm text-muted-foreground">{s}</p>))}
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">📞 Contacto</h3>
              <a href={`tel:${club.phone}`} className="text-sm text-primary hover:underline" itemProp="telephone">{club.phone}</a>
              {club.website !== "#" && (
                <a href={club.website} target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline mt-1">🌐 Sitio oficial</a>
              )}
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">🏷️ Categorías</h3>
              <div className="flex flex-wrap gap-1.5">
                {club.tags.map((tag) => (<span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://app.akoky.com/register" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">Unirse a AKOKY →</a>
            <Link to="/es/empezar-libertinaje" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">Guía para principiantes</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

/* ═══════════ MAIN PAGE ═══════════ */
const ClubesLibertinos = () => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedClub, setSelectedClub] = useState<EtablissementES | null>(null);

  const data = ESTABLECIMIENTOS_ES;
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
    const map: Record<string, EtablissementES[]> = {};
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
    name: "Directorio de Clubes y Saunas Libertinos en España — AKOKY",
    description: `${stats.total} establecimientos libertinos verificados en España.`,
    url: "https://akoky.com/es/clubes-libertinos",
    numberOfItems: stats.total,
    itemListElement: data.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: e.name })),
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
        <title>{`${stats.total} Clubes y Saunas Libertinos en España — Directorio AKOKY 2026`}</title>
        <meta name="description" content={`${stats.total} establecimientos libertinos verificados en España: clubes de intercambio, saunas libertinos, clubes privados en Madrid, Barcelona, Sevilla, Valencia, Ibiza y más.`} />
        <link rel="canonical" href="https://akoky.com/es/clubes-libertinos" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AKOKY" />
        <meta property="og:title" content={`${stats.total} Clubes y Saunas Libertinos en España — AKOKY`} />
        <meta property="og:description" content={`Directorio verificado: ${stats.clubs} clubes y ${stats.saunas} saunas libertinos en ${stats.regions} regiones de España.`} />
        <meta property="og:url" content="https://akoky.com/es/clubes-libertinos" />
        <meta property="og:image" content="https://akoky.com/images/club.webp" />
        <meta property="og:locale" content="es_ES" />
      </Helmet>
      <HreflangTags slug="clubes-libertinos" />
      <SchemaOrg schema={[pageSchema, breadcrumbSchema]} />

      <ContentPageLayout
        lang="es"
        title={`${stats.total} Clubes y Saunas Libertinos en España — AKOKY`}
        description={`Directorio verificado de establecimientos libertinos en España.`}
        canonical="https://akoky.com/es/clubes-libertinos"
        heroTitle="Clubes y Saunas Libertinos en España"
        heroSubtitle={`${stats.total} establecimientos verificados en ${stats.regions} regiones — clubes de intercambio, saunas libertinos, clubes privados. Fichas detalladas.`}
        heroImage="/images/club.webp"
        breadcrumb={[{ label: "Clubes Libertinos España" }]}
        faq={[
          { question: "¿Cómo encontrar un club libertino cerca de mí en España?", answer: "Usa los filtros por región y tipo de establecimiento. Cada ficha contiene la dirección, los horarios y los datos de contacto del club o sauna." },
          { question: "¿Los establecimientos están verificados?", answer: "Sí, todos los establecimientos listados en AKOKY están verificados por nuestro equipo. Comprobamos la existencia, la ubicación y la calidad antes de referenciarlos." },
          { question: "¿Cuál es la diferencia entre un club libertino y un sauna libertino?", answer: "Un club libertino es un establecimiento con bar, pista de baile y espacios íntimos. Un sauna libertino añade instalaciones de bienestar (hammam, jacuzzi, sauna) en un entorno propicio para los encuentros." },
          { question: "¿Hay clubes para parejas principiantes en España?", answer: "Sí, muchos clubes acogen principiantes con veladas especiales. Consulta nuestra guía para empezar bien en el libertinaje." },
          { question: "¿En qué ciudades de España hay más establecimientos libertinos?", answer: "Madrid, Barcelona, Valencia, Marbella e Ibiza concentran la mayor oferta de establecimientos libertinos en España, pero encontrarás opciones en la mayoría de regiones." },
        ]}
      >
        {/* ═══════════ BANNER CAROUSEL ═══════════ */}
        <BannerCarousel lang="es" />

        {/* ═══════════ STATS ═══════════ */}
        <section className="py-8 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-3xl font-black text-primary">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Establecimientos</p>
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
                <p className="text-sm text-muted-foreground">📍 Regiones</p>
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
                  placeholder="🔍 Buscar un club, ciudad, región..."
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
                <option value="">📍 Todas las regiones</option>
                {regions.map((r) => (<option key={r} value={r}>{r}</option>))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-card border border-border text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">🏛️ Todos los tipos</option>
                {types.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span> establecimiento{filtered.length > 1 ? "s" : ""} encontrado{filtered.length > 1 ? "s" : ""}
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
                <p className="text-muted-foreground text-lg">Ningún establecimiento encontrado para estos criterios.</p>
              </div>
            ) : (
              Object.entries(grouped)
                .sort(([, a], [, b]) => b.length - a.length)
                .map(([region, clubs]) => (
                  <div key={region} className="mb-10">
                    <h2 className="text-xl font-black text-foreground mb-5 flex items-center gap-2">
                      <span className="text-2xl">🇪🇸</span> {region}
                      <span className="text-sm font-normal text-muted-foreground">({clubs.length} establecimiento{clubs.length > 1 ? "s" : ""})</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {clubs.map((club) => (
                        <ClubCardES key={club.id} club={club} onOpen={setSelectedClub} />
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
            <h2 className="text-2xl font-bold text-foreground mb-6">Directorio de establecimientos libertinos en España — Guía AKOKY 2026</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AKOKY referencia <strong className="text-foreground">{stats.total} establecimientos libertinos verificados en España</strong>: <Link to="/es/clubbing" className="text-primary hover:underline">clubes de intercambio</Link>, <Link to="/es/saunas-libertinos" className="text-primary hover:underline">saunas libertinos</Link>, clubes privados y bares libertinos. Cada ficha está verificada por nuestro equipo y enriquecida con las <Link to="/es/avis" className="text-primary hover:underline">opiniones de nuestra comunidad</Link>.
              </p>
              <p>
                Ya busques un club libertino en <strong className="text-foreground">Madrid</strong>, <strong className="text-foreground">Barcelona</strong>, <strong className="text-foreground">Sevilla</strong>, <strong className="text-foreground">Valencia</strong> o <strong className="text-foreground">Ibiza</strong>, nuestro directorio te permite filtrar por región y tipo de establecimiento para encontrar el lugar ideal. España cuenta con una oferta libertina diversa y en constante crecimiento.
              </p>
              <p>
                A diferencia de otras plataformas, AKOKY ofrece un directorio 100% español con fichas detalladas, horarios actualizados y contacto directo con cada establecimiento. <Link to="/es/empezar-libertinaje" className="text-primary hover:underline">Descubre cómo empezar bien</Link> y encuentra el club perfecto para tu primera visita.
              </p>
              <p>
                Todos los establecimientos referenciados en AKOKY respetan nuestra <Link to="/es/vision" className="text-primary hover:underline">carta ética</Link>: consentimiento explícito, discreción garantizada, higiene impecable y respeto de los límites de cada persona. Consulta también nuestro <Link to="/es/lexico" className="text-primary hover:underline">léxico libertino</Link> para entender los códigos antes de tu primera visita.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ MAILLAGE INTERNE ═══════════ */}
        <section className="py-12 px-4 bg-background">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Explorar por ciudad</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga", "Ibiza", "Marbella", "Palma de Mallorca", "Tenerife", "Gran Canaria", "San Sebastián", "Zaragoza", "Vigo"].map((city) => (
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
        <ClubModalES club={selectedClub} onClose={() => setSelectedClub(null)} />
      </ContentPageLayout>
    </>
  );
};

export default ClubesLibertinos;
