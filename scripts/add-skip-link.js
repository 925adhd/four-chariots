#!/usr/bin/env node
/**
 * For every page HTML file:
 *   1. Add a "Skip to main content" link as the first child of <body>.
 *   2. Add id="main-content" + tabindex="-1" to the .wrap div so the skip target exists.
 *   3. Inject CSS: .skip-to-content visible-on-focus + :focus-visible outline.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const HTML_FILES = [
  "index.html", "about.html", "shop.html", "drop.html",
  "chosen.html", "unashamed.html", "forgiven.html", "grateful.html",
  "mug.html", "sticker.html", "membership.html", "cart.html",
  "support.html", "product.html",
];

const SKIP_LINK =
  `  <a class="skip-to-content" href="#main-content">Skip to main content</a>\n`;

const A11Y_CSS =
  `    .skip-to-content{\n` +
  `      position:absolute;\n` +
  `      top:-48px;\n` +
  `      left:8px;\n` +
  `      z-index:10000;\n` +
  `      padding:10px 14px;\n` +
  `      background:#0b1a2a;\n` +
  `      color:#fff;\n` +
  `      font-size:13px;\n` +
  `      font-weight:700;\n` +
  `      letter-spacing:.06em;\n` +
  `      text-transform:uppercase;\n` +
  `      text-decoration:none;\n` +
  `      border-radius:0;\n` +
  `      transition:top .15s ease;\n` +
  `    }\n` +
  `    .skip-to-content:focus{ top:8px; outline:2px solid #fff; outline-offset:2px; }\n` +
  `    a:focus-visible, button:focus-visible, input:focus-visible,\n` +
  `    select:focus-visible, textarea:focus-visible, [tabindex]:focus-visible{\n` +
  `      outline:2px solid #0b1a2a;\n` +
  `      outline-offset:2px;\n` +
  `    }\n`;

let changed = 0;
for (const rel of HTML_FILES) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) continue;
  let c = fs.readFileSync(abs, "utf8");
  const before = c;

  // 1) Inject skip link after <body> (handle any body attributes)
  if (!/class="skip-to-content"/.test(c)) {
    c = c.replace(/<body([^>]*)>\n/, (m, attrs) => `<body${attrs}>\n${SKIP_LINK}`);
  }

  // 2) Add id="main-content" + tabindex to the first <div class="wrap"> if not already present
  if (!/id="main-content"/.test(c)) {
    c = c.replace(
      /<div class="wrap">/,
      '<div class="wrap" id="main-content" tabindex="-1">'
    );
  }

  // 3) Inject CSS just before the closing </style> of the FIRST <style> block
  if (!/\.skip-to-content\{/.test(c)) {
    c = c.replace(/<\/style>/, `${A11Y_CSS}  </style>`);
  }

  if (c !== before) {
    fs.writeFileSync(abs, c);
    changed++;
    console.log(`updated: ${rel}`);
  }
}
console.log(`Done. Updated ${changed} files.`);
