import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Lang = "fr" | "es" | "de" | "it" | "pt";

interface Slide {
  id: number;
  lang?: string;
  title: string;
  description: string;
  image: string;
  url: string;
  alt: string;
}

interface SlideSettings {
  autoplaySpeed: number;
  transitionDuration: number;
  pauseOnHover: boolean;
}

interface SlidesData {
  slides: Slide[];
  settings: SlideSettings;
}

const LABELS: Record<Lang, { badge: string; cta: string; aria: string; prev: string; next: string; goTo: string; schema: string }> = {
  fr: { badge: "Club partenaire", cta: "Découvrir le club →", aria: "Clubs partenaires en vedette", prev: "Slide précédent", next: "Slide suivant", goTo: "Aller au slide", schema: "Clubs libertins partenaires AKOKY" },
  en: { badge: "Partner Club", cta: "Discover the club →", aria: "Featured partner clubs", prev: "Previous slide", next: "Next slide", goTo: "Go to slide", schema: "AKOKY partner libertine clubs" },
  es: { badge: "Club asociado", cta: "Descubrir el club →", aria: "Clubes asociados destacados", prev: "Slide anterior", next: "Slide siguiente", goTo: "Ir al slide", schema: "Clubes libertinos asociados AKOKY" },
  de: { badge: "Partnerclub", cta: "Club entdecken →", aria: "Ausgewählte Partnerclubs", prev: "Vorheriger Slide", next: "Nächster Slide", goTo: "Zum Slide gehen", schema: "AKOKY Partner-Libertinerclubs" },
  it: { badge: "Club partner", cta: "Scopri il club →", aria: "Club partner in evidenza", prev: "Slide precedente", next: "Slide successivo", goTo: "Vai allo slide", schema: "Club libertini partner AKOKY" },
  pt: { badge: "Clube parceiro", cta: "Descobrir o clube →", aria: "Clubes parceiros em destaque", prev: "Slide anterior", next: "Slide seguinte", goTo: "Ir para o slide", schema: "Clubes libertinos parceiros AKOKY" },
};

interface BannerCarouselProps {
  lang?: Lang;
}

const BannerCarousel = ({ lang = "fr" }: BannerCarouselProps) => {
  const [data, setData] = useState<SlidesData | null>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetch("/data/slides-data.json")
      .then((r) => r.json())
      .then((d: SlidesData) => setData(d))
      .catch(() => {});
  }, []);

  // Filter slides by lang — fallback to all slides if none match
  const allSlides = data?.slides ?? [];
  const langSlides = allSlides.filter((s) => s.lang === lang);
  const slides = langSlides.length > 0 ? langSlides : allSlides.filter((s) => !s.lang || s.lang === "fr");
  const settings = data?.settings ?? { autoplaySpeed: 5000, transitionDuration: 600, pauseOnHover: true };
  const labels = LABELS[lang];

  const next = useCallback(() => {
    if (slides.length === 0) return;
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    if (slides.length === 0) return;
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Reset current when lang changes
  useEffect(() => {
    setCurrent(0);
  }, [lang]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = setInterval(next, settings.autoplaySpeed);
    return () => clearInterval(timer);
  }, [paused, next, settings.autoplaySpeed, slides.length]);

  if (!data || slides.length === 0) return null;

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-card"
      onMouseEnter={() => settings.pauseOnHover && setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label={labels.aria}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={labels.schema} />
      <meta itemProp="numberOfItems" content={String(slides.length)} />

      <div className="relative h-[280px] sm:h-[340px] md:h-[400px]">
        {slides.map((s, i) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 transition-opacity ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ transitionDuration: `${settings.transitionDuration}ms` }}
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
            aria-hidden={i !== current}
            tabIndex={i === current ? 0 : -1}
          >
            <meta itemProp="position" content={String(i + 1)} />
            <meta itemProp="url" content={s.url} />

            <img
              src={s.image}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              itemProp="image"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 z-20">
              <div className="container max-w-6xl mx-auto">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground rounded-full">
                  {labels.badge}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2" itemProp="name">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-xl" itemProp="description">
                  {s.description}
                </p>
                <span className="inline-flex items-center mt-3 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  {labels.cta}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Navigation arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label={labels.prev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label={labels.next}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`${labels.goTo} ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BannerCarousel;
