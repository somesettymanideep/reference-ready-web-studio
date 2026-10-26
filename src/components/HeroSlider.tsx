import { useCallback, useEffect, useRef, useState } from "react";
import highwaySlide from "@/assets/hero-slide-highway.jpg.asset.json";
import plansSlide from "@/assets/hero-slide-plans.jpg.asset.json";
import skylineSlide from "@/assets/hero-slide-skyline.jpg.asset.json";

/**
 * Hero background slider — three photos, autoplay, endless loop, crossfade.
 * After the third slide the first one is shown again, so the loop never breaks.
 */
const SLIDES = [
  {
    src: highwaySlide.url,
    alt: "Highway and bridge construction by Naidu & Co at golden hour",
    label: "Infrastructure & Road Works",
  },
  {
    src: plansSlide.url,
    alt: "Architectural blueprints, house model and helmet on a design desk",
    label: "Approved Home Plans & Design",
  },
  {
    src: skylineSlide.url,
    alt: "Multi-storey building under construction against a sunset skyline",
    label: "Residential & Commercial Builds",
  },
] as const;

const SLIDE_DURATION = 5000; // time each photo stays on screen
const FADE_DURATION = 1200; // crossfade length
const PREFERS_REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const goTo = useCallback((next: number) => {
    setActive(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  /* Autoplay: advance forever, loop back to the first photo after the last. */
  useEffect(() => {
    if (paused || PREFERS_REDUCED_MOTION) return;
    timer.current = window.setInterval(() => {
      if (document.hidden) return; // don't burn slides in a background tab
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => {
      if (timer.current !== null) window.clearInterval(timer.current);
      timer.current = null;
    };
  }, [paused]);

  /* Preload every photo once so the first fade is never blank. */
  useEffect(() => {
    SLIDES.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div
      className="absolute inset-0"
      role="group"
      aria-roledescription="carousel"
      aria-label="Naidu & Co project highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transitionDuration: `${FADE_DURATION}ms`,
              zIndex: isActive ? 1 : 0,
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 md:left-auto md:right-8 md:translate-x-0">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${slide.label}`}
            aria-current={i === active}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === active ? "2.25rem" : "0.75rem",
              background:
                i === active
                  ? "var(--gold)"
                  : "color-mix(in oklab, oklch(0.98 0.003 90) 45%, transparent)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
