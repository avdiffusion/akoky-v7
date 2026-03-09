import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function shouldEnableAutoReveal(pathname: string) {
  // Keep admin/editor screens snappy and avoid hiding form UIs.
  if (pathname.startsWith("/admin")) return false;
  return true;
}

/**
 * Global auto-reveal animations for all languages/pages.
 * Adds `ak-auto-reveal` class on <html> and toggles `is-revealed` on targets.
 */
export default function AutoReveal() {
  const location = useLocation();

  useEffect(() => {
    const enabled = shouldEnableAutoReveal(location.pathname);
    const root = document.documentElement;

    root.classList.toggle("ak-auto-reveal", enabled);
    if (!enabled) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const main = document.querySelector("main");
    if (!main) return;

    // Targets:
    // 1) All main direct sections except the hero (they animate as whole blocks on scroll)
    // 2) Inside the hero (first section): animate title/subtitle/buttons/hero image
    const sectionTargets = Array.from(
      main.querySelectorAll(":scope > section:not(:first-child)")
    ) as HTMLElement[];

    const hero = main.querySelector(":scope > section:first-child") as HTMLElement | null;
    const heroTargets = hero
      ? (Array.from(hero.querySelectorAll("h1, h2, p, a, button, img")) as HTMLElement[])
      : [];

    // Stagger (via CSS var)
    sectionTargets.forEach((el, i) => {
      el.style.setProperty("--ak-delay", `${Math.min(i * 60, 240)}ms`);
    });
    heroTargets.forEach((el, i) => {
      el.style.setProperty("--ak-delay", `${Math.min(i * 90, 540)}ms`);
    });

    const targets = [...sectionTargets, ...heroTargets];

    if (reduceMotion) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    // Ensure hero targets are revealed immediately if already visible.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}
