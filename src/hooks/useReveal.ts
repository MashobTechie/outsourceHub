"use client";

import { useEffect, useRef } from "react";

/**
 * One IntersectionObserver per *section*, not per element.
 *
 * Put the returned ref on a section; every `.reveal` descendant (and the root
 * itself, if it matches) is flipped to `data-shown="true"` as the section comes
 * into view, then unobserved — reveals are one-shot, they do not re-hide.
 *
 * Bails to instantly-shown when IntersectionObserver is unavailable or the
 * visitor has asked for reduced motion.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = new Set<Element>(root.querySelectorAll(".reveal"));
    if (root.classList.contains("reveal")) targets.add(root);

    const showAll = () =>
      targets.forEach((el) => el.setAttribute("data-shown", "true"));

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (typeof IntersectionObserver === "undefined" || prefersReduced) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-shown", "true");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
