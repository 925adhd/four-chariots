#!/usr/bin/env node
/**
 * WCAG 2.2 AA fixes applied site-wide:
 *   1. Change --muted from #5f6368 (4.25:1) to #464b52 (~5.2:1) for WCAG AA contrast.
 *   2. Inject @media (prefers-reduced-motion: reduce) rule at the end of each inline <style>.
 *   3. In fcCloseNav, after resetting aria-expanded, return focus to the hamburger button.
 *
 * Covers all 14 main pages + privacy.html + terms.html.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HTML = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));

const REDUCED_MOTION_BLOCK = `
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
`;

const OLD_CLOSE_NAV = `    var fcCloseNav = function () {
      document.querySelector(".nav").classList.remove("open");
      document.getElementById("navOverlay").classList.remove("open");
      var mb = document.querySelector(".menuBtn");
      if (mb) mb.setAttribute("aria-expanded", "false");
    };`;

const NEW_CLOSE_NAV = `    var fcCloseNav = function (returnFocus) {
      document.querySelector(".nav").classList.remove("open");
      document.getElementById("navOverlay").classList.remove("open");
      var mb = document.querySelector(".menuBtn");
      if (mb) {
        mb.setAttribute("aria-expanded", "false");
        if (returnFocus === true) mb.focus();
      }
    };`;

const OLD_OVERLAY_HANDLER = `document.getElementById("navOverlay").addEventListener("click", fcCloseNav);`;
const NEW_OVERLAY_HANDLER = `document.getElementById("navOverlay").addEventListener("click", function(){ fcCloseNav(true); });
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape") {
        var n = document.querySelector(".nav");
        if (n && n.classList.contains("open")) fcCloseNav(true);
      }
    });`;

let total = 0;
for (const file of HTML) {
  const p = path.join(ROOT, file);
  let src = fs.readFileSync(p, "utf8");
  const before = src;

  // 1. Darker muted color for AA contrast
  src = src.replace(/--muted:#5f6368;/g, "--muted:#464b52;");

  // 2. Inject prefers-reduced-motion block before </style> if not already present
  if (!src.includes("prefers-reduced-motion")) {
    src = src.replace(/\n  <\/style>/, REDUCED_MOTION_BLOCK + "  </style>");
  }

  // 3. Hamburger focus return + Escape key close (only files with nav close handler)
  if (src.includes(OLD_CLOSE_NAV)) {
    src = src.replace(OLD_CLOSE_NAV, NEW_CLOSE_NAV);
  }
  if (src.includes(OLD_OVERLAY_HANDLER)) {
    src = src.replace(OLD_OVERLAY_HANDLER, NEW_OVERLAY_HANDLER);
  }

  if (src !== before) {
    fs.writeFileSync(p, src);
    total++;
    console.log("  " + file);
  }
}
console.log(`Updated ${total} file(s).`);
