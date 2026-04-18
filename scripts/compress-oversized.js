#!/usr/bin/env node
/**
 * Recompress images that exceed the 200KB performance budget.
 * Also resizes logo.png (currently 1024x1024, ~420KB) down to 512x512 so it
 * works as favicon + apple-touch-icon + schema logo without wasting bytes.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");

const TARGETS = [
  { rel: "images/logo.png", resize: 512, format: "png" },
  { rel: "images/four-chariots-flyer.webp", quality: 72 },
  { rel: "images/closeupsleevedap.webp", quality: 75 },
  { rel: "images/core/chosen/choesencloseup.webp", quality: 75 },
  { rel: "images/core/forgiven/forgivencloseup.webp", quality: 75 },
  { rel: "images/core/grateful/greatefulcloseup.webp", quality: 72 },
  { rel: "images/core/unashamed/unashamedcloseup.webp", quality: 72 },
  { rel: "images/drops/unshaken/unshakencloseup1.webp", quality: 75 },
  { rel: "images/drops/unshaken/unshakencloseup2.webp", quality: 75 },
];

async function run() {
  for (const t of TARGETS) {
    const abs = path.join(ROOT, t.rel);
    if (!fs.existsSync(abs)) {
      console.log("SKIP (missing):", t.rel);
      continue;
    }
    const before = fs.statSync(abs).size;

    const inputBuffer = fs.readFileSync(abs);
    let pipeline = sharp(inputBuffer);
    if (t.resize) {
      pipeline = pipeline.resize(t.resize, t.resize, { fit: "inside" });
    }
    if (t.format === "png") {
      pipeline = pipeline.png({ compressionLevel: 9, palette: true });
    } else {
      pipeline = pipeline.webp({ quality: t.quality || 75 });
    }

    const outputBuffer = await pipeline.toBuffer();
    fs.writeFileSync(abs, outputBuffer);
    const after = fs.statSync(abs).size;
    const pct = ((1 - after / before) * 100).toFixed(0);
    console.log(`${t.rel}: ${before} → ${after} bytes (-${pct}%)`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
