#!/usr/bin/env node
/**
 * Convert all PNG/JPG images in /images to WebP.
 * Apply selective renames for generic filenames.
 * Output a manifest at image-manifest.json mapping old relative paths → new paths + dimensions.
 *
 * logo.png is kept as PNG (needed for favicons + apple-touch-icon) AND also converted to webp.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "images");
const MANIFEST_PATH = path.join(ROOT, "image-manifest.json");

// Selective renames for generic/unfortunate filenames.
// Keys are relative to project root, use forward slashes.
const RENAMES = {
  "images/FLYER.png": "images/four-chariots-flyer.webp",
  "images/shipping.png": "images/automatic-delivery-icon.webp",
  "images/inventory.png": "images/guaranteed-inventory-icon.webp",
  "images/vote.png": "images/members-vote-icon.webp",
  "images/skip.png": "images/member-access-icon.webp",
  "images/drops/unshaken/ChatGPT Image Feb 19, 2026, 10_46_09 AM.png":
    "images/drops/unshaken/unshaken-announcement.webp",
};

// Files that should NOT be converted/deleted (kept exactly as-is).
const KEEP_AS_IS = new Set([
  "images/logo.png", // favicon + apple-touch-icon
]);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function toRel(absPath) {
  return path.relative(ROOT, absPath).replace(/\\/g, "/");
}

async function convertOne(absSrc) {
  const rel = toRel(absSrc);
  if (!/\.(png|jpe?g)$/i.test(rel)) return null;

  let destRel;
  if (RENAMES[rel]) {
    destRel = RENAMES[rel];
  } else {
    destRel = rel.replace(/\.(png|jpe?g)$/i, ".webp");
  }

  const absDest = path.join(ROOT, destRel);
  fs.mkdirSync(path.dirname(absDest), { recursive: true });

  const img = sharp(absSrc);
  const meta = await img.metadata();

  // Convert to WebP with quality 80. Skip if destination already matches source (same file).
  if (absSrc !== absDest) {
    await img.webp({ quality: 80 }).toFile(absDest);
  }

  return {
    oldRel: rel,
    newRel: destRel,
    width: meta.width,
    height: meta.height,
  };
}

async function main() {
  const files = walk(IMAGES_DIR);
  const manifest = {};
  let converted = 0;
  let skipped = 0;

  for (const abs of files) {
    const rel = toRel(abs);
    if (KEEP_AS_IS.has(rel)) {
      // Still record dimensions so HTML can add width/height on logo references.
      const meta = await sharp(abs).metadata();
      manifest[rel] = { oldRel: rel, newRel: rel, width: meta.width, height: meta.height, kept: true };
      skipped++;
      continue;
    }

    try {
      const res = await convertOne(abs);
      if (res) {
        manifest[res.oldRel] = res;
        converted++;
      }
    } catch (err) {
      console.error("Failed:", rel, err.message);
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`Converted ${converted}, kept ${skipped}. Manifest → ${MANIFEST_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
