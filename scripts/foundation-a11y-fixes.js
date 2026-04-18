#!/usr/bin/env node
/**
 * Foundation audit fixes:
 *   1. Hamburger button: add aria-expanded="false", toggle it in onclick.
 *   2. Nav close handlers: reset aria-expanded to false when nav closes.
 *   3. Remove <span>Instagram</span> footer placeholder (user has no IG).
 *   4. Remove Instagram DM contact block from support.html.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HTML_FILES = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));

const OLD_BUTTON =
  `<button class="menuBtn" aria-label="Toggle menu" onclick="document.querySelector('.nav').classList.toggle('open');document.getElementById('navOverlay').classList.toggle('open')">&#9776;</button>`;
const NEW_BUTTON =
  `<button class="menuBtn" aria-label="Toggle menu" aria-expanded="false" onclick="var o=document.querySelector('.nav').classList.toggle('open');document.getElementById('navOverlay').classList.toggle('open');this.setAttribute('aria-expanded',o)">&#9776;</button>`;

const OLD_HANDLERS = `    document.querySelectorAll(".nav a").forEach(a => {
      a.addEventListener("click", () => {
        document.querySelector(".nav").classList.remove("open");
        document.getElementById("navOverlay").classList.remove("open");
      });
    });
    document.getElementById("navOverlay").addEventListener("click", () => {
      document.querySelector(".nav").classList.remove("open");
      document.getElementById("navOverlay").classList.remove("open");
    });`;

const NEW_HANDLERS = `    var fcCloseNav = function () {
      document.querySelector(".nav").classList.remove("open");
      document.getElementById("navOverlay").classList.remove("open");
      var mb = document.querySelector(".menuBtn");
      if (mb) mb.setAttribute("aria-expanded", "false");
    };
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", fcCloseNav);
    });
    document.getElementById("navOverlay").addEventListener("click", fcCloseNav);`;

const OLD_IG_FOOTER = `
        <span>Instagram</span>`;

const OLD_IG_DM_BLOCK = `        <div class="contactMethod">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          <span>Instagram DM</span>
        </div>
`;

function apply(file) {
  const p = path.join(ROOT, file);
  let src = fs.readFileSync(p, "utf8");
  const before = src;

  if (src.includes(OLD_BUTTON)) src = src.replace(OLD_BUTTON, NEW_BUTTON);
  if (src.includes(OLD_HANDLERS)) src = src.replace(OLD_HANDLERS, NEW_HANDLERS);
  while (src.includes(OLD_IG_FOOTER)) src = src.replace(OLD_IG_FOOTER, "");
  if (file === "support.html" && src.includes(OLD_IG_DM_BLOCK)) {
    src = src.replace(OLD_IG_DM_BLOCK, "");
  }

  if (src !== before) {
    fs.writeFileSync(p, src);
    return true;
  }
  return false;
}

const changed = HTML_FILES.filter(apply);
console.log(`Updated ${changed.length} file(s):`);
changed.forEach((f) => console.log("  " + f));
