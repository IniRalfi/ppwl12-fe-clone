import { useState, useEffect } from "react";

/**
 * Hysteresis scroll detection — tidak jitter di ambang batas.
 * @param downThreshold - scrollY minimal untuk trigger "scrolled" (default 50px)
 * @param upThreshold   - scrollY maksimal untuk un-trigger (default 20px)
 */
export function useScrolled(downThreshold = 50, upThreshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled((prev) => {
        if (!prev && window.scrollY > downThreshold) return true;
        if (prev && window.scrollY < upThreshold) return false;
        return prev;
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [downThreshold, upThreshold]);

  return scrolled;
}
