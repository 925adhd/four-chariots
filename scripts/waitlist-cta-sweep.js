#!/usr/bin/env node
/**
 * Site-wide CTA cleanup for waitlist mode:
 *   1. Remove the mobile cart icon from the topbar (no cart while in waitlist mode).
 *   2. Replace the desktop "Cart" button with a "Notify Me" button that opens
 *      the waitlist modal with a generic product name.
 *   3. Ensure notify.js is loaded on every page so the topbar CTA works.
 *   4. Update mobile CSS so .ctaRow shows the primary button instead of being hidden.
 *
 * Skips privacy.html and terms.html (minimal topbar, no waitlist needed).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HTML = fs
  .readdirSync(ROOT)
  .filter((f) => f.endsWith(".html") && f !== "privacy.html" && f !== "terms.html");

const OLD_MOBILE_CART = `      <a class="mobileCart cartBtn" href="cart.html" aria-label="Cart"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg><span class="cartBadge" id="cartBadgeMobile" style="display:none;">0</span></a>\n\n`;

const OLD_DESKTOP_CART = `<a class="btn primary cartBtn" href="cart.html" id="cartBtn">Cart <span class="cartBadge" id="cartBadge" style="display:none;">0</span></a>`;
const NEW_DESKTOP_CTA = `<button class="btn primary" type="button" onclick="window.FCNotify&&FCNotify.open({productId:'general',productName:'the next drop'})">Notify Me</button>`;

const OLD_MOBILE_CSS = `.ctaRow{ display:none; }\n      .mobileCart{ display:flex !important; }`;
const NEW_MOBILE_CSS = `.ctaRow .btn:not(.primary){ display:none; }`;

const NOTIFY_SCRIPT_TAG = `  <script src="notify.js"></script>\n`;

function ensureNotifyScript(src) {
  if (src.includes(`<script src="notify.js">`)) return src;
  const idx = src.lastIndexOf("</body>");
  if (idx === -1) return src;
  return src.slice(0, idx) + NOTIFY_SCRIPT_TAG + src.slice(idx);
}

let totalChanged = 0;
for (const file of HTML) {
  const p = path.join(ROOT, file);
  let src = fs.readFileSync(p, "utf8");
  const before = src;

  if (src.includes(OLD_MOBILE_CART)) src = src.replace(OLD_MOBILE_CART, "");
  if (src.includes(OLD_DESKTOP_CART)) src = src.replace(OLD_DESKTOP_CART, NEW_DESKTOP_CTA);
  if (src.includes(OLD_MOBILE_CSS)) src = src.replace(OLD_MOBILE_CSS, NEW_MOBILE_CSS);
  src = ensureNotifyScript(src);

  if (src !== before) {
    fs.writeFileSync(p, src);
    totalChanged++;
    console.log("  " + file);
  }
}
console.log(`Updated ${totalChanged} file(s).`);
