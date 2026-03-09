import { useState, useCallback } from "react";
import { getClubUrl, getTypeBadgeColor, type Etablissement } from "@/lib/etablissements";

// ── Image pool for carousel variety ──
const GALLERY_IMAGES: Record<string, string[]> = {
  sauna: [
    "https://legal.akoky.com/UPLOAD-AKOKY/CLUBS/sauna.webp",
    "https://legal.akoky.com/UPLOAD-AKOKY/CLUBS/sauna2.webp",
    "https://legal.akoky.com/UPLOAD-AKOKY/CLUBS/sauna3.webp",
  ],
  club: [
    "https://legal.akoky.com/UPLOAD-AKOKY/CLUBS/club.webp",
    "https://legal.akoky.com/UPLOAD-AKOKY/CLUBS/club2.webp",
    "https://legal.akoky.com/UPLOAD-AKOKY/CLUBS/club3.webp",
  ],
  default: [
    "https://legal.akoky.com/UPLOAD-AKOKY/CLUBS/club.webp",
    "https://legal.akoky.com/UPLOAD-AKOKY/CLUBS/sauna.webp",
  ],
};

function getGallery(club: Etablissement): string[] {
  const t = club.type.toLowerCase();
  const base = club.image;
  let pool: string[];
  if (t.includes("sauna")) pool = GALLERY_IMAGES.sauna;
  else if (t.includes("club") || t.includes("bar")) pool = GALLERY_IMAGES.club;
  else pool = GALLERY_IMAGES.default;
  // Ensure main image is first, then add pool images (deduped)
  const images = [base, ...pool.filter((img) => img !== base)];
  return images.slice(0, 3);
}

interface ClubCardProps {
  club: Etablissement;
  onOpenDetail: (club: Etablissement) => void;
}

const ClubCard = ({ club, onOpenDetail }: ClubCardProps) => {
  const [imgIdx, setImgIdx] = useState(0);
  const images = getGallery(club);

  const nextImg = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setImgIdx((i) => (i + 1) % images.length);
    },
    [images.length]
  );

  const prevImg = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setImgIdx((i) => (i - 1 + images.length) % images.length);
    },
    [images.length]
  );

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenDetail(club);
  };

  return (
    <article
      className="group border border-border rounded-xl bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-1 glow-border"
      onClick={handleClick}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Carousel */}
      <div className="aspect-[16/7] overflow-hidden relative img-zoom">
        <img
          src={images[imgIdx]}
          alt={`${club.name} — ${club.type} à ${club.city}`}
          className="w-full h-full object-cover transition-transform duration-700"
          loading="lazy"
          itemProp="image"
        />
        {/* Carousel controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-black/70"
              aria-label="Image précédente"
            >
              ‹
            </button>
            <button
              onClick={nextImg}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-black/70"
              aria-label="Image suivante"
            >
              ›
            </button>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIdx ? "bg-primary w-3" : "bg-white/60"}`}
                />
              ))}
            </div>
          </>
        )}
        {/* Badges */}
        <div className="absolute top-2 right-2 flex gap-1">
          {club.verified && (
            <span className="text-[10px] bg-green-500/90 text-white px-2 py-0.5 rounded-full font-bold">
              ✓ Vérifié
            </span>
          )}
        </div>
      </div>

      {/* SEO-indexable content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4
            className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors"
            itemProp="name"
          >
            {club.name}
          </h4>
          <span
            className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full border font-semibold ${getTypeBadgeColor(club.type)}`}
          >
            {club.type}
          </span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2" itemProp="description">
          {club.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            📍 <span itemProp="addressLocality">{club.city}</span>, <span itemProp="addressRegion">{club.region}</span>
          </p>
          {club.schedule && club.schedule !== "n/a" && (
            <p className="text-[10px] text-muted-foreground">🕐 {club.schedule.split(";")[0]}</p>
          )}
        </div>
        <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-2 group-hover:gap-2.5 group-hover:translate-x-1 transition-all duration-300">
          Voir la fiche détaillée →
        </span>
      </div>

      {/* Hidden SEO data */}
      <meta itemProp="url" content={getClubUrl(club.slug)} />
      <span itemProp="telephone" className="hidden">{club.phone}</span>
    </article>
  );
};

export default ClubCard;
