"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".section-title",
  "main section > .soft-card",
  "main article.soft-card",
  "main .grid > .soft-card",
  "main .grid > article",
  "main table",
  "main img",
].join(",");

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    ).filter((element) => !element.closest(".hero-home"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    elements.forEach((element, index) => {
      element.classList.remove("is-visible");
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
