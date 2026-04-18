#!/usr/bin/env node
/**
 * Fix mobile topbar overflow: CHARIOTS text was being clipped by the
 * Notify Me button on small screens. Scale down the button padding,
 * brand-split font, and logo size progressively as viewport shrinks.
 * At <=360px, drop the left "FOUR" split so logo + CHARIOTS fits cleanly.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HTML = fs
  .readdirSync(ROOT)
  .filter((f) => f.endsWith(".html") && f !== "privacy.html" && f !== "terms.html");

const BLOCK = `
    @media (max-width: 640px){
      .topbar{ gap: 10px; }
      .brandSplit{ font-size: 13px; letter-spacing: 0.08em; }
      .ctaRow .btn.primary{
        padding: 10px 12px;
        font-size: 11px;
        letter-spacing: 0.08em;
        white-space: nowrap;
      }
    }
    @media (max-width: 420px){
      .brandSplit{ font-size: 12px; letter-spacing: 0.06em; }
      .mark{ height: 48px; }
      .brand{ gap: 6px; }
      .ctaRow .btn.primary{
        padding: 9px 10px;
        font-size: 10.5px;
        letter-spacing: 0.06em;
      }
    }
    @media (max-width: 360px){
      .brandSplitLeft{ display: none; }
    }
`;

const MARKER = "/* mobile-topbar-fit */";

let total = 0;
for (const file of HTML) {
  const p = path.join(ROOT, file);
  let src = fs.readFileSync(p, "utf8");
  if (src.includes(MARKER)) continue;

  const insertion = "\n    " + MARKER + BLOCK + "  </style>";
  const updated = src.replace(/\n  <\/style>/, insertion);
  if (updated !== src) {
    fs.writeFileSync(p, updated);
    total++;
    console.log("  " + file);
  }
}
console.log(`Updated ${total} file(s).`);
