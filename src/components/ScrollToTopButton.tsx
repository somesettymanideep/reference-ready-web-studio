import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

/**
 * Floating "Scroll to Top" button (construction safety theme).
 *
 * Visibility is driven by the Intersection Observer API — no scroll listeners.
 * The button appears only once the viewport has scrolled PAST the section
 * with id `construction-point-view`, and hides again when the user scrolls
 * back above it.
 */
const SECTION_ID = "construction-point-view";
const SCROLL_DURATION_MS = 800;

// easeInOutCubic — smooth accelerate + decelerate over exactly 800ms.
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);
  const { pathname } = useLocation();

  // Re-evaluate on route change: the marker section only exists on pages
  // that render it, so the button resets (hides) everywhere else.
  useEffect(() => {
    const target = document.getElementById(SECTION_ID);
    if (!target) {
      setVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // The section's top edge sits above the viewport top = the user has
        // scrolled past the start of the section. Scrolling back so the top
        // edge re-enters from above hides it again.
        setVisible(entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  const cancelAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  // Clean up any in-flight animation on unmount.
  useEffect(() => cancelAnimation, [cancelAnimation]);

  const scrollToTop = useCallback(() => {
    cancelAnimation();

    const start = window.scrollY;
    const startTime = performance.now();
    const stopOnUserInput = () => {
      cancelAnimation();
      window.removeEventListener("wheel", stopOnUserInput);
      window.removeEventListener("touchstart", stopOnUserInput);
    };

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);
      window.scrollTo(0, start * (1 - easeInOutCubic(progress)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      rafRef.current = null;
      stopOnUserInput();
    };

    // Let the user interrupt the animation by scrolling manually.
    window.addEventListener("wheel", stopOnUserInput, { passive: true });
    window.addEventListener("touchstart", stopOnUserInput, { passive: true });
    rafRef.current = requestAnimationFrame(step);
  }, [cancelAnimation]);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-50 flex h-12 w-12 flex-col items-center justify-center rounded-full border-2 border-safety-black bg-safety-yellow text-safety-black shadow-lg shadow-safety-black/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-safety-yellow-light hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-black sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Hard-hat ridge */}
      <span
        aria-hidden
        className="absolute top-2 h-1.5 w-6 rounded-full bg-safety-black"
      />
      <ArrowUp
        aria-hidden
        strokeWidth={2.5}
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-6 sm:w-6"
      />
    </button>
  );
}
