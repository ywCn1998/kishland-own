// /lib/initReveal.ts
export type RevealOptions = {
    selector?: string;                // which elements to observe
    threshold?: number;               // IO threshold
    rootMargin?: string;              // IO rootMargin
    staggerStepMs?: number;           // default stagger unit
    visibleClass?: string;            // class to add when visible
  };
  
  export function initReveal({
    selector = "[data-reveal], .reveal, .reveal-in, .reveal-down, .animate-slide-in-left",
    threshold = 0.15,
    rootMargin = "0px 0px -10% 0px",
    staggerStepMs = 80,
    visibleClass = "is-visible",
  }: RevealOptions = {}) {
    if (typeof window === "undefined") return () => {}; // SSR guard
  
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  
    // If no IO support or nothing to observe, just reveal everything
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add(visibleClass));
      return () => {};
    }
  
    // Respect prefers-reduced-motion: reveal immediately
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      els.forEach((el) => el.classList.add(visibleClass));
      return () => {};
    }
  
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting) continue;
  
          // Optional stagger via data-stagger-index (or data-stagger-step override)
          const idxAttr = el.getAttribute("data-stagger-index");
          const stepAttr = el.getAttribute("data-stagger-step");
          const step = Number(stepAttr) || staggerStepMs;
  
          if (idxAttr) {
            const idx = Number(idxAttr) || 0;
            el.style.setProperty("--d", `${idx * step}ms`);
          }
  
          el.classList.add(visibleClass);
          io.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
  
    els.forEach((el) => io.observe(el));
  
    // Cleanup
    return () => io.disconnect();
  }
  
