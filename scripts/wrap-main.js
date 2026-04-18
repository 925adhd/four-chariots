#!/usr/bin/env node
/**
 * Wrap the main content of each page in <main id="main-content" tabindex="-1">.
 *
 *  Before: <div class="wrap" id="main-content" tabindex="-1">
 *            <div class="topbar">...</div>
 *            [content]
 *            <footer>...</footer>
 *          </div>
 *
 *  After:  <div class="wrap">
 *            <div class="topbar">...</div>
 *            <main id="main-content" tabindex="-1">
 *              [content]
 *            </main>
 *            <footer>...</footer>
 *          </div>
 *
 * Uses balance counting for <div>/</div> starting at the topbar's opening,
 * skipping content inside <script>...</script> (inline JS templates contain
 * "<div>" as string literals on cart.html).
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

function findTopbarClose(c, topbarOpen) {
  // Returns the index just after the </div> that closes topbar, or -1.
  let i = topbarOpen + '<div class="topbar">'.length;
  let depth = 1;
  let inScript = false;
  let inStyle = false;

  while (i < c.length && depth > 0) {
    if (!inScript && !inStyle) {
      if (c.substr(i, 7).toLowerCase() === "<script") {
        inScript = true;
        const gt = c.indexOf(">", i);
        i = gt === -1 ? c.length : gt + 1;
        continue;
      }
      if (c.substr(i, 6).toLowerCase() === "<style") {
        inStyle = true;
        const gt = c.indexOf(">", i);
        i = gt === -1 ? c.length : gt + 1;
        continue;
      }
      // Check <div opening (must be followed by space, >, tab, or newline to avoid <diva>)
      if (c.substr(i, 4).toLowerCase() === "<div") {
        const next = c[i + 4];
        if (next === " " || next === ">" || next === "\t" || next === "\n") {
          depth++;
          i += 4;
          continue;
        }
      }
      if (c.substr(i, 6).toLowerCase() === "</div>") {
        depth--;
        i += 6;
        if (depth === 0) return i;
        continue;
      }
    } else {
      if (inScript && c.substr(i, 9).toLowerCase() === "</script>") {
        inScript = false;
        i += 9;
        continue;
      }
      if (inStyle && c.substr(i, 8).toLowerCase() === "</style>") {
        inStyle = false;
        i += 8;
        continue;
      }
    }
    i++;
  }
  return -1;
}

let changed = 0;
for (const rel of HTML_FILES) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) continue;
  let c = fs.readFileSync(abs, "utf8");
  const before = c;

  // Skip if already wrapped
  if (/<main id="main-content"/.test(c)) {
    console.log(`skip (already wrapped): ${rel}`);
    continue;
  }

  // 1) Remove id + tabindex from .wrap (added by previous pass)
  c = c.replace(
    /<div class="wrap" id="main-content" tabindex="-1">/,
    '<div class="wrap">'
  );

  // 2) Locate topbar open and its matching close
  const topbarOpen = c.indexOf('<div class="topbar">');
  if (topbarOpen === -1) {
    console.error(`no topbar in ${rel}`);
    continue;
  }
  const topbarCloseEnd = findTopbarClose(c, topbarOpen);
  if (topbarCloseEnd === -1) {
    console.error(`failed to balance topbar in ${rel}`);
    continue;
  }

  // 3) Locate <footer after topbar
  const footerMatch = /\n(\s*)<footer\b/.exec(c.substring(topbarCloseEnd));
  if (!footerMatch) {
    console.error(`no footer in ${rel}`);
    continue;
  }
  const footerIndent = footerMatch[1];
  const footerStart = topbarCloseEnd + footerMatch.index + 1; // skip leading \n

  // 4) Build new content: insert <main> after topbar close, </main> before footer
  const head = c.substring(0, topbarCloseEnd);
  const body = c.substring(topbarCloseEnd, footerStart);
  const tail = c.substring(footerStart);

  const wrapped =
    head +
    `\n\n${footerIndent}<main id="main-content" tabindex="-1">` +
    body.replace(/\s+$/, "") +
    `\n\n${footerIndent}</main>\n\n${footerIndent}` +
    tail;

  if (wrapped !== before) {
    fs.writeFileSync(abs, wrapped);
    changed++;
    console.log(`updated: ${rel}`);
  }
}
console.log(`Done. Wrapped ${changed} files.`);
