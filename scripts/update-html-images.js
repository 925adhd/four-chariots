#!/usr/bin/env node
/**
 * Reads image-manifest.json and updates all HTML files:
 *   1. Replaces old image paths with new WebP paths (both relative and absolute URL forms).
 *   2. Adds width="..." height="..." to every <img> tag that doesn't already have them.
 *   3. Adds loading="lazy" to every <img> that isn't a hero (id="scHeroImg" is the recognized hero marker).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const MANIFEST = JSON.parse(fs.readFileSync(path.join(ROOT, "image-manifest.json"), "utf8"));

const HTML_FILES = [
  "index.html", "about.html", "shop.html", "drop.html",
  "chosen.html", "unashamed.html", "forgiven.html", "grateful.html",
  "mug.html", "sticker.html", "membership.html", "cart.html",
  "support.html", "product.html",
];

// Build lookup from any known reference form (old rel, new rel, absolute variants) → dimensions.
const dimsBySrc = {};
for (const [oldRel, entry] of Object.entries(MANIFEST)) {
  const w = entry.width, h = entry.height;
  dimsBySrc[oldRel] = { width: w, height: h };
  dimsBySrc[entry.newRel] = { width: w, height: h };
  dimsBySrc[`https://4chariots.com/${oldRel}`] = { width: w, height: h };
  dimsBySrc[`https://4chariots.com/${entry.newRel}`] = { width: w, height: h };
}

// Sort renames by descending old-path length so longer paths are replaced first
// (prevents partial match of shorter strings inside longer ones).
const renames = Object.entries(MANIFEST)
  .filter(([oldRel, entry]) => oldRel !== entry.newRel)
  .sort((a, b) => b[0].length - a[0].length);

function replacePaths(content) {
  for (const [oldRel, entry] of renames) {
    // Replace absolute URL form first (longer, more specific)
    const absOld = `https://4chariots.com/${oldRel}`;
    const absNew = `https://4chariots.com/${entry.newRel}`;
    content = content.split(absOld).join(absNew);
    // Replace relative form
    content = content.split(oldRel).join(entry.newRel);
  }
  return content;
}

function updateImgTags(content) {
  // Match <img ... > or <img ... />, capturing the attrs. Img is a void element.
  return content.replace(/<img\b([^>]*?)\s*\/?\s*>/gi, (match, attrs) => {
    const srcMatch = attrs.match(/\bsrc\s*=\s*"([^"]+)"/i);
    if (!srcMatch) return match;
    const src = srcMatch[1];
    const dims = dimsBySrc[src];

    let newAttrs = attrs;

    if (dims) {
      if (!/\bwidth\s*=/.test(newAttrs)) {
        newAttrs = newAttrs + ` width="${dims.width}"`;
      }
      if (!/\bheight\s*=/.test(newAttrs)) {
        newAttrs = newAttrs + ` height="${dims.height}"`;
      }
    }

    const isHero = /\bid\s*=\s*"scHeroImg"/i.test(newAttrs);
    if (!/\bloading\s*=/.test(newAttrs) && !isHero) {
      newAttrs = newAttrs + ` loading="lazy"`;
    }
    if (isHero && !/\bfetchpriority\s*=/i.test(newAttrs)) {
      newAttrs = newAttrs + ` fetchpriority="high"`;
    }

    // Normalize trailing whitespace; emit self-closing form.
    return `<img${newAttrs.replace(/\s+$/, "")} />`;
  });
}

let totalChanged = 0;
for (const rel of HTML_FILES) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) continue;
  const before = fs.readFileSync(abs, "utf8");
  let after = replacePaths(before);
  after = updateImgTags(after);
  if (after !== before) {
    fs.writeFileSync(abs, after);
    totalChanged++;
    console.log(`updated: ${rel}`);
  }
}
console.log(`Done. Updated ${totalChanged} HTML files.`);
