// app/_route-io.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteIO() {
  const pathname = usePathname();

  useEffect(() => {
    const sel = ".reveal, .reveal-in, .reveal-down, .animate-slide-in-left";
    const els = Array.from(document.querySelectorAll<HTMLElement>(sel));

    // Un-hide immediately as a safety net (prevents blank on failures)
    els.forEach((el) => el.classList.add("is-visible"));

    // Set up IO to add `is-visible` when in view
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target); // one-shot, remove if you want repeat
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    els.forEach((el) => {
      // reset between navigations
      el.classList.remove("is-visible");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
