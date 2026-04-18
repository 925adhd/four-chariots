#!/usr/bin/env node
/**
 * Deletes the original PNG/JPG files that were converted to WebP.
 * Keeps anything flagged as { kept: true } in the manifest (e.g., logo.png).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const MANIFEST = JSON.parse(fs.readFileSync(path.join(ROOT, "image-manifest.json"), "utf8"));

let deleted = 0;
let kept = 0;
for (const [oldRel, entry] of Object.entries(MANIFEST)) {
  if (entry.kept) {
    kept++;
    continue;
  }
  if (oldRel === entry.newRel) continue;
  const abs = path.join(ROOT, oldRel);
  if (fs.existsSync(abs)) {
    fs.unlinkSync(abs);
    deleted++;
  }
}
console.log(`Deleted ${deleted} originals. Kept ${kept} as-is.`);
