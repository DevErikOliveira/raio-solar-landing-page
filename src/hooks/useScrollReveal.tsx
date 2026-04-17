import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const root = document.querySelector("main");
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>("section"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
}
