export interface Etablissement {
  id: string;
  lang: string;
  slug: string;
  name: string;
  type: string;
  description: string;
  address: string;
  city: string;
  country: string;
  region: string;
  phone: string;
  website: string;
  schedule: string;
  image: string;
  tags: string[];
  verified: boolean;
  featured: boolean;
  rating: number;
}

/**
 * Parse a CSV line handling quoted fields with commas inside
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Parse CSV text into Etablissement array
 */
export function parseEtablissements(csvText: string): Etablissement[] {
  const lines = csvText.split("\n").filter((l) => l.trim().length > 0);
  if (lines.length < 2) return [];

  // Build column map from header
  const headers = parseCSVLine(lines[0]);
  const colMap: Record<string, number> = {};
  headers.forEach((h, i) => (colMap[h.trim().toLowerCase()] = i));

  const results: Etablissement[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = parseCSVLine(lines[i]);
    if (cols.length < 10) continue;

    const get = (key: string) => cols[colMap[key]] ?? "";

    results.push({
      id: get("id"),
      lang: get("lang"),
      slug: get("slug"),
      name: get("name"),
      type: get("type"),
      description: get("description"),
      address: get("address"),
      city: get("city"),
      country: get("country"),
      region: get("region"),
      phone: get("phone"),
      website: get("website"),
      schedule: get("schedule"),
      image: get("image"),
      tags: get("tags").split("|").filter(Boolean),
      verified: get("verified") === "true",
      featured: get("featured") === "true",
      rating: parseFloat(get("rating")) || 0,
    });
  }

  return results;
}

/**
 * Filter by language
 */
export function getByLang(data: Etablissement[], lang: string): Etablissement[] {
  return data.filter((e) => e.lang === lang);
}

/**
 * Get unique regions for a language
 */
export function getRegions(data: Etablissement[]): string[] {
  return [...new Set(data.map((e) => e.region))].sort();
}

/**
 * Get unique countries for a language
 */
export function getCountries(data: Etablissement[]): string[] {
  return [...new Set(data.map((e) => e.country))].sort();
}

/**
 * Get unique types for a language
 */
export function getTypes(data: Etablissement[]): string[] {
  return [...new Set(data.map((e) => e.type))].sort();
}

/**
 * Build AKOKY club URL from slug
 */
export function getClubUrl(slug: string): string {
  return `https://akoky.com/club/${slug}`;
}

/**
 * Type badge color mapping
 */
export function getTypeBadgeColor(type: string): string {
  const t = type.toLowerCase();
  if (t.includes("sauna")) return "bg-blue-500/15 text-blue-400 border-blue-500/20";
  if (t.includes("gîte") || t.includes("gite") || t.includes("chambre")) return "bg-green-500/15 text-green-400 border-green-500/20";
  if (t.includes("cinéma") || t.includes("cinema")) return "bg-amber-500/15 text-amber-400 border-amber-500/20";
  if (t.includes("bar") || t.includes("lounge")) return "bg-purple-500/15 text-purple-400 border-purple-500/20";
  return "bg-primary/15 text-primary border-primary/20";
}
