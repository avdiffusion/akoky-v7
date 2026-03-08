import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
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

const BannerCarousel = () => {
  const [data, setData] = useState<SlidesData | null>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetch("/data/slides-data.json")
      .then((r) => r.json())
      .then((d: SlidesData) => setData(d))
      .catch(() => {});
  }, []);

  const slides = data?.slides ?? [];
  const settings = data?.settings ?? { autoplaySpeed: 5000, transitionDuration: 600, pauseOnHover: true };

  const next = useCallback(() => {
    if (slides.length === 0) return;
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    if (slides.length === 0) return;
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

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
      aria-label="Clubs partenaires en vedette"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Clubs libertins partenaires AKOKY" />
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
                  Club partenaire
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2" itemProp="name">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-xl" itemProp="description">
                  {s.description}
                </p>
                <span className="inline-flex items-center mt-3 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  Découvrir le club →
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
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Slide suivant"
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
              aria-label={`Aller au slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BannerCarousel;
