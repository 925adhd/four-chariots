"use client";

import { useEffect, useState } from "react";
import { useNotify } from "@/components/NotifyModal";

type Thumb = { src: string; alt: string };

const THUMBS: Thumb[] = [
  { src: "/images/gear/stickerdecal.webp", alt: "Sticker" },
  { src: "/images/gear/laptopdecal.webp", alt: "Laptop decal" },
];

export function StickerPdp() {
  const { open } = useNotify();
  const [activeIdx, setActiveIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCanHover(window.matchMedia("(hover: hover)").matches);
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll(".fade-up").forEach((el) => {
        el.classList.add("visible");
      });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleNotify = () => {
    open({
      productId: "fc-foundation-seal-sticker",
      productName: "Foundation Seal Sticker",
      variant: "",
    });
  };

  const active = THUMBS[activeIdx];

  return (
    <div className="pdp">
      <div className="gallery fade-up">
        <div className="mainImage">
          <img
            id="mainImg"
            src={active.src}
            alt="FOUR CHARIOTS Foundation Seal Sticker"
            width={1200}
            height={1200}
            loading="lazy"
          />
        </div>
        <div className="thumbStrip">
          {THUMBS.map((thumb, i) => (
            <div
              key={thumb.src}
              className={"thumb" + (i === activeIdx ? " active" : "")}
              onClick={() => setActiveIdx(i)}
              onMouseEnter={() => {
                if (canHover) setActiveIdx(i);
              }}
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                width={1200}
                height={1200}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pdpInfo fade-up" style={{ transitionDelay: ".1s" }}>
        <h1 className="pdpTitle">
          FOUR CHARIOTS Foundation Seal Sticker — Glossy Vinyl Decal
        </h1>
        <div className="pdpPrice">$4.00</div>

        <p className="pdpDesc">
          A simple vinyl sticker featuring the FOUR CHARIOTS foundation seal.
          Clean lines and strong contrast give the symbol a steady presence
          wherever it&apos;s placed, from laptops and journals to water bottles
          and workspaces. Printed on durable glossy vinyl, it applies smoothly
          and holds up through everyday use.
        </p>
        <p className="pdpDesc">Minimal by design. Made to last.</p>
        <p className="pdpDesc" style={{ marginTop: 14 }}>
          <strong
            style={{
              color: "var(--ink)",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Details
          </strong>
          <br />
          Glossy scratch-resistant finish · Durable vinyl with strong permanent
          adhesive · Eco-solvent inks for long-lasting color · Available in
          white or transparent backing · Multiple size options · Smooth,
          bubble-free application
        </p>
        <p className="pdpDesc" style={{ marginTop: 8 }}>
          <strong
            style={{
              color: "var(--ink)",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Care
          </strong>
          <br />
          Use a soft, clean, dry cloth to gently remove dust from the center
          outward.
        </p>

        <div className="qtyRow">
          <span className="qtyLabel">Qty</span>
          <button
            type="button"
            className="qtyBtn"
            id="qtyMinus"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
          >
            −
          </button>
          <span className="qtyVal" id="qtyVal">
            {quantity}
          </span>
          <button
            type="button"
            className="qtyBtn"
            id="qtyPlus"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => (q < 10 ? q + 1 : q))}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="btn primary addToCart"
          id="addToCartBtn"
          onClick={handleNotify}
        >
          Notify me
        </button>

        <div className="pdpMeta">
          <div className="metaItem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span>Made to order, just for you</span>
          </div>
          <div className="metaItem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Ships worldwide</span>
          </div>
          <div className="metaItem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <path d="M1 10h22" />
            </svg>
            <span>Secure checkout via Stripe</span>
          </div>
        </div>

        <div className="paymentIcons">
          <span className="payIcon">VISA</span>
          <span className="payIcon">MC</span>
          <span className="payIcon">AMEX</span>
          <span className="payIcon">APPLE PAY</span>
        </div>
      </div>
    </div>
  );
}
