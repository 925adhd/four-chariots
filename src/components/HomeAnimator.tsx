"use client";

import { useEffect } from "react";

export function HomeAnimator() {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const hero = document.getElementById("heroSection");
      const kicker = document.querySelector(".kicker");
      if (kicker) {
        kicker.querySelectorAll("span").forEach((s, i) => {
          (s as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
        });
        kicker.classList.add("visible");
      }
      const headline = document.querySelector(".headline");
      if (headline) {
        headline.querySelectorAll(".word span").forEach((s, i) => {
          (s as HTMLElement).style.transitionDelay = `${0.25 + i * 0.1}s`;
        });
        headline.classList.add("visible");
      }
      if (hero) hero.classList.add("animated");
      document.querySelectorAll(".fade-up").forEach((el) => {
        el.classList.add("visible");
      });
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  return null;
}
