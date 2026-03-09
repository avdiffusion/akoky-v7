import { useEffect, useRef, useState, useCallback } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Hook to animate elements when they enter the viewport.
 * Returns a ref to attach to the element and a boolean for visibility.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * Component wrapper for scroll-reveal animations.
 * Supports staggered children via `delay` prop.
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "blur-in" | "slide-up";
  delay?: number; // ms
  duration?: number; // ms
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export function Reveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once });

  const animationStyles: Record<string, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
    "fade-up": {
      hidden: { opacity: 0, transform: "translateY(40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-down": {
      hidden: { opacity: 0, transform: "translateY(-40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-left": {
      hidden: { opacity: 0, transform: "translateX(-40px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "fade-right": {
      hidden: { opacity: 0, transform: "translateX(40px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "scale-up": {
      hidden: { opacity: 0, transform: "scale(0.9)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    "blur-in": {
      hidden: { opacity: 0, filter: "blur(10px)", transform: "translateY(20px)" },
      visible: { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
    },
    "slide-up": {
      hidden: { opacity: 0, transform: "translateY(60px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
  };

  const anim = animationStyles[animation] || animationStyles["fade-up"];
  const style: React.CSSProperties = {
    ...(isVisible ? anim.visible : anim.hidden),
    transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "transform, opacity, filter",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/**
 * Stagger helper: wraps children in Reveal with incremental delays
 */
interface StaggerProps {
  children: React.ReactNode[];
  className?: string;
  animation?: RevealProps["animation"];
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  itemClassName?: string;
}

export function RevealStagger({
  children,
  className = "",
  animation = "fade-up",
  staggerDelay = 100,
  baseDelay = 0,
  duration = 600,
  itemClassName = "",
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal
          key={i}
          animation={animation}
          delay={baseDelay + i * staggerDelay}
          duration={duration}
          className={itemClassName}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
