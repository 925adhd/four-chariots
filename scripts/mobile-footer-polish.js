#!/usr/bin/env node
/**
 * Mobile footer polish:
 *   Row 1: copyright + links (inline, centered)
 *   Row 2: "Website by Studio 925" credit on its own line
 * Uses flex-basis:100% on last child to force wrap.
 *
 * Idempotent: replaces any previous mobile-footer-polish block.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HTML = fs
  .readdirSync(ROOT)
  .filter((f) => f.endsWith(".html") && f !== "privacy.html" && f !== "terms.html");

const BLOCK = `
    /* mobile-footer-polish v2 */
    @media (max-width: 640px){
      footer{
        flex-direction: row !important;
        flex-wrap: wrap;
        align-items: center !important;
        justify-content: center;
        gap: 10px 18px !important;
        text-align: center;
        padding: 20px 0 14px;
      }
      footer .links{
        justify-content: center;
      }
      footer > :last-child{
        flex-basis: 100%;
      }
    }
`;

// Match either the old v1 marker or the v2 marker + their block up to (and including) the closing }.
const RE_OLD_BLOCK =
  /\n    \/\* mobile-footer-polish( v2)? \*\/\n    @media \(max-width: 640px\)\{[\s\S]*?\n    \}\n/;

let total = 0;
for (const file of HTML) {
  const p = path.join(ROOT, file);
  let src = fs.readFileSync(p, "utf8");
  const before = src;

  // Strip prior block if present.
  src = src.replace(RE_OLD_BLOCK, "\n");

  // Insert new block before </style>.
  src = src.replace(/\n  <\/style>/, BLOCK + "  </style>");

  if (src !== before) {
    fs.writeFileSync(p, src);
    total++;
    console.log("  " + file);
  }
}
console.log(`Updated ${total} file(s).`);
