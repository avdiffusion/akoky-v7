import { useEffect, useCallback } from "react";
import { getClubUrl, getTypeBadgeColor, type Etablissement } from "@/lib/etablissements";

interface ClubDetailModalProps {
  club: Etablissement | null;
  onClose: () => void;
}

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
  const images = [base, ...pool.filter((img) => img !== base)];
  return images.slice(0, 4);
}

const ClubDetailModal = ({ club, onClose }: ClubDetailModalProps) => {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!club) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [club, handleEsc]);

  if (!club) return null;

  const images = getGallery(club);
  const clubUrl = getClubUrl(club.slug);
  const schedules = club.schedule && club.schedule !== "n/a" ? club.schedule.split(";").map((s) => s.trim()) : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Détails de ${club.name}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <article
        className="relative z-10 bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg"
          aria-label="Fermer"
        >
          ×
        </button>

        {/* Image gallery */}
        <div className="grid grid-cols-2 gap-0.5 rounded-t-2xl overflow-hidden">
          <div className="col-span-2 sm:col-span-1 aspect-[16/9]">
            <img
              src={images[0]}
              alt={`${club.name} — vue principale`}
              className="w-full h-full object-cover"
              itemProp="image"
            />
          </div>
          <div className="hidden sm:grid grid-rows-2 gap-0.5">
            {images.slice(1, 3).map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`${club.name} — photo ${i + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content — fully SEO indexable */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h2 className="text-2xl font-black text-foreground" itemProp="name">
                {club.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                <span
                  className={`inline-flex text-xs px-2.5 py-0.5 rounded-full border font-semibold ${getTypeBadgeColor(club.type)}`}
                >
                  {club.type}
                </span>
                {club.verified && (
                  <span className="ml-2 text-xs text-green-400 font-semibold">✓ Vérifié AKOKY</span>
                )}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-1 text-amber-400">
                {"★".repeat(Math.round(club.rating))}
              </div>
              <p className="text-xs text-muted-foreground">{club.rating}/5</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6" itemProp="description">
            {club.description}
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Address */}
            <div
              className="bg-muted/30 rounded-xl p-4"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">📍 Adresse</h3>
              <p className="text-sm text-muted-foreground" itemProp="streetAddress">{club.address}</p>
              <p className="text-sm text-muted-foreground">
                <span itemProp="addressLocality">{club.city}</span>,{" "}
                <span itemProp="addressRegion">{club.region}</span>
              </p>
              <p className="text-sm text-muted-foreground" itemProp="addressCountry">{club.country}</p>
            </div>

            {/* Schedule */}
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">🕐 Horaires</h3>
              {schedules.length > 0 ? (
                schedules.map((s, i) => (
                  <p key={i} className="text-sm text-muted-foreground">{s}</p>
                ))
              ) : (
                <p className="text-sm text-muted-foreground italic">Contactez l'établissement</p>
              )}
            </div>

            {/* Contact */}
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">📞 Contact</h3>
              {club.phone && club.phone !== "+33 1 00 00 00 00" ? (
                <a href={`tel:${club.phone}`} className="text-sm text-primary hover:underline" itemProp="telephone">
                  {club.phone}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground italic">Voir le site web</p>
              )}
              {club.website && club.website !== "n/a" && (
                <a
                  href={club.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:underline mt-1"
                  itemProp="url"
                >
                  🌐 Site officiel
                </a>
              )}
            </div>

            {/* Tags */}
            <div className="bg-muted/30 rounded-xl p-4">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">🏷️ Catégories</h3>
              <div className="flex flex-wrap gap-1.5">
                {club.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={clubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Voir sur AKOKY →
            </a>
            <a
              href="https://app.akoky.com/register"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors"
            >
              Créer mon compte gratuit
            </a>
          </div>
        </div>

        {/* Hidden SEO structured data */}
        <meta itemProp="url" content={clubUrl} />
      </article>
    </div>
  );
};

export default ClubDetailModal;
