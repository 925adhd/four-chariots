"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useNotify } from "@/components/NotifyModal";

type Thumb = {
  src: string;
  color: string;
  hex: string;
  alt: string;
  comingSoon?: boolean;
  model?: boolean;
};

const THUMBS: Thumb[] = [
  {
    src: "/images/drops/unshaken/unshakenblk.webp",
    color: "Black",
    hex: "#1a1a1a",
    alt: "Black",
  },
  {
    src: "/images/drops/unshaken/model.webp",
    color: "",
    hex: "",
    alt: "Model",
    model: true,
  },
  {
    src: "/images/drops/unshaken/unshakenwhite.webp",
    color: "White",
    hex: "#f5f0e1",
    alt: "White",
  },
  {
    src: "/images/drops/unshaken/unshakenred.webp",
    color: "Red",
    hex: "#8b2232",
    alt: "Red",
  },
  {
    src: "/images/drops/unshaken/unshakendap.webp",
    color: "Dapple",
    hex: "#555555",
    alt: "Dapple",
    comingSoon: true,
  },
];

type Swatch = {
  color: string;
  src: string;
  swatch: string;
  comingSoon?: boolean;
};

const SWATCHES: Swatch[] = [
  {
    color: "Black",
    src: "/images/drops/unshaken/unshakenblk.webp",
    swatch: "/images/blackswatch.webp",
  },
  {
    color: "White",
    src: "/images/drops/unshaken/unshakenwhite.webp",
    swatch: "/images/whiteswatch.webp",
  },
  {
    color: "Red",
    src: "/images/drops/unshaken/unshakenred.webp",
    swatch: "/images/redswatch.webp",
  },
  {
    color: "Dapple",
    src: "/images/drops/unshaken/unshakendap.webp",
    swatch: "/images/dappleswatch.webp",
    comingSoon: true,
  },
];

const MODEL_IMAGES: Record<string, string> = {
  Black: "/images/drops/unshaken/model.webp",
  White: "/images/drops/unshaken/modelwhite.webp",
  Red: "/images/drops/unshaken/modelred.webp",
  Dapple: "/images/drops/unshaken/modeldap.webp",
};

const SIZES = ["S", "M", "L", "XL", "2XL", "3XL"];

/* ── Drop product state system ── */
const DROP_TOTAL = 66;
const DROP_REMAINING = 54; // placeholder: change this to test states

export function DropShowcase() {
  const { open } = useNotify();

  // Active hero image: driven by thumb index (for model support) or color selection
  const [heroSrc, setHeroSrc] = useState<string>(THUMBS[0].src);
  const [heroAlt, setHeroAlt] = useState<string>("UNSHAKEN Tee - Black");
  const [showComingSoonBadge, setShowComingSoonBadge] = useState(false);

  // Which thumb is active (index into THUMBS)
  const [activeThumbIdx, setActiveThumbIdx] = useState<number>(0);

  // Color selection — for swatches + size variant string
  const [selectedColor, setSelectedColor] = useState<string>("Black");
  const [colorLabel, setColorLabel] = useState<string>("Black");

  // Size
  const [selectedSize, setSelectedSize] = useState<string>("");

  // Model thumb dynamic src
  const [modelThumbSrc, setModelThumbSrc] = useState<string>(
    MODEL_IMAGES.Black,
  );

  const canHoverRef = useRef<boolean>(false);
  useEffect(() => {
    canHoverRef.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  function selectThumb(idx: number) {
    const t = THUMBS[idx];
    setHeroSrc(t.src);
    setHeroAlt("UNSHAKEN Tee - " + (t.color || "Model"));
    setActiveThumbIdx(idx);
    if (t.comingSoon) {
      setShowComingSoonBadge(true);
      // Deselect color swatch when Dapple selected (coming soon)
      setSelectedColor("");
      setColorLabel(t.color);
      return;
    }
    setShowComingSoonBadge(false);
    if (t.color) {
      setSelectedColor(t.color);
      setColorLabel(t.color);
      setModelThumbSrc(MODEL_IMAGES[t.color] ?? modelThumbSrc);
    }
  }

  function hoverThumb(idx: number) {
    if (!canHoverRef.current) return;
    const t = THUMBS[idx];
    setHeroSrc(t.src);
    setHeroAlt("UNSHAKEN Tee - " + (t.color || "Model"));
    setColorLabel(t.color || "");
    if (t.comingSoon) {
      setShowComingSoonBadge(true);
      setActiveThumbIdx(idx);
      setSelectedColor("");
    } else {
      setShowComingSoonBadge(false);
      setActiveThumbIdx(idx);
      if (t.color) setSelectedColor(t.color);
    }
  }

  function selectSwatch(sw: Swatch) {
    setHeroSrc(sw.src);
    setHeroAlt("UNSHAKEN Tee - " + sw.color);
    setColorLabel(sw.color);
    setShowComingSoonBadge(false);
    if (sw.comingSoon) return;
    setSelectedColor(sw.color);
    if (MODEL_IMAGES[sw.color]) setModelThumbSrc(MODEL_IMAGES[sw.color]);
    // Sync thumb highlight to matching color thumb
    const matchingIdx = THUMBS.findIndex((t) => t.color === sw.color);
    if (matchingIdx >= 0) setActiveThumbIdx(matchingIdx);
  }

  function onNotifyClick() {
    const parts: string[] = [];
    if (selectedColor) parts.push(selectedColor);
    if (selectedSize) parts.push(selectedSize);
    open({
      productId: "unshaken-drop-001",
      productName: "UNSHAKEN Tee — DROP 001",
      variant: parts.join(" / "),
    });
  }

  // Drop state
  const claimed = DROP_TOTAL - DROP_REMAINING;
  const archived = DROP_REMAINING <= 0;
  const lowStock = DROP_REMAINING > 0 && DROP_REMAINING < 10;
  const ctaText = archived ? "Notify me when restocked" : "Notify me";

  // Intersection observer for craftBlock reveal lives in parent — this
  // component only owns the showcase block.

  return (
    <div className={"showcase" + (archived ? " archived" : "")}>
      <div className="scGallery">
        <div className="scMainImg" style={{ position: "relative" }}>
          <img
            id="scHeroImg"
            src={heroSrc}
            alt={heroAlt}
            width={1024}
            height={1024}
            fetchPriority="high"
          />
          {showComingSoonBadge && (
            <span
              id="comingSoonBadge"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                transform: "translateY(-50%)",
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: "var(--ink)",
                background: "rgba(255,255,255,.88)",
                padding: "14px 0",
                textAlign: "center",
                backdropFilter: "blur(2px)",
                borderTop: "1px solid rgba(11,26,42,.08)",
                borderBottom: "1px solid rgba(11,26,42,.08)",
              }}
            >
              COMING SOON
            </span>
          )}
        </div>
        <div className="scThumbs">
          {THUMBS.map((t, i) => {
            const isModel = !!t.model;
            const src = isModel ? modelThumbSrc : t.src;
            return (
              <div
                key={i}
                className={
                  "scThumb" +
                  (activeThumbIdx === i ? " active" : "") +
                  (t.comingSoon ? " coming-soon" : "") +
                  (isModel ? " model-thumb" : "")
                }
                onClick={() => selectThumb(i)}
                onMouseEnter={() => hoverThumb(i)}
              >
                <img
                  src={src}
                  alt={t.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="scInfo product-layout">
        <div className="product-header">
          <h2 className="scTitle">UNSHAKEN</h2>
          <div className="scPrice" id="dropPrice">
            $50.00
          </div>
          <div className="archivedLabel" id="archivedLabel">
            ARCHIVED
          </div>
          <div
            className={"stockStatus" + (lowStock ? " low" : "")}
            id="stockStatus"
            style={archived ? { display: "none" } : undefined}
          >
            {lowStock ? (
              <>
                <span style={{ color: "#8b7a56" }}>{DROP_REMAINING}</span>{" "}
                pieces remain
              </>
            ) : (
              <>
                <span style={{ color: "#8b7a56" }}>
                  {claimed} / {DROP_TOTAL}
                </span>{" "}
                claimed
              </>
            )}
          </div>
          <p className="member-benefit">
            Members save $10 per drop + free shipping
          </p>
        </div>

        <div className="product-story">
          <p className="product-material-note">
            HEAVYWEIGHT 100 PERCENT PREMIUM USA COTTON
          </p>
          <hr className="product-divider" />

          <div className="proof-list">
            <span>
              Precision embroidery. Individually numbered exterior label.
              Limited to 66.
            </span>
          </div>
        </div>

        <div className="product-options">
          <div>
            <div className="scLabel">
              Color{" "}
              <span className="val" id="scColorLabel">
                {colorLabel}
              </span>
            </div>
            <div className="scColors" style={{ marginTop: 8 }}>
              {SWATCHES.map((sw) => (
                <button
                  key={sw.color}
                  type="button"
                  className={
                    "scSwatch" +
                    (selectedColor === sw.color && !sw.comingSoon
                      ? " active"
                      : "") +
                    (sw.comingSoon ? " coming-soon" : "")
                  }
                  title={sw.color}
                  onClick={() => selectSwatch(sw)}
                >
                  <span
                    className="inner"
                    style={{ backgroundImage: `url('${sw.swatch}')` }}
                  />
                </button>
              ))}
              <div
                className="colorError"
                id="colorError"
                style={{ display: "none" }}
              >
                Please select an available color
              </div>
            </div>
          </div>

          <div>
            <div className="scLabel">
              Size{" "}
              <span className="val" id="scSizeLabel">
                {selectedSize}
              </span>
            </div>
            <div className="sizeBtns">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={"sizeBtn" + (selectedSize === s ? " active" : "")}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div
              className="sizeError"
              id="sizeError"
              style={{ display: "none" }}
            >
              Please select a size
            </div>
          </div>
        </div>

        <div className="product-cta">
          <div
            className="releaseClosed"
            id="releaseClosed"
            style={archived ? { display: "block" } : undefined}
          >
            Release Closed
          </div>
          <button
            type="button"
            className="btn primary"
            id="addToCartBtn"
            style={{ width: "100%", marginTop: 4 }}
            onClick={onNotifyClick}
            disabled={archived}
          >
            {ctaText}
          </button>

          <div className="trust-strip">
            <div className="scMetaItem">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <span>Crafted per order within the Drop 001 release.</span>
            </div>
            <div className="scMetaItem">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <path d="M1 10h22" />
              </svg>
              <span>Secure checkout via Stripe</span>
            </div>
            <div className="scMetaItem">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 18H3a1 1 0 01-1-1V7a1 1 0 011-1h10v11m0-11h3l3 4v7a1 1 0 01-1 1h-2" />
                <circle cx={7} cy={18} r={2} />
                <circle cx={17} cy={18} r={2} />
              </svg>
              <span>
                Free shipping for{" "}
                <Link
                  href="/membership"
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    fontWeight: 700,
                  }}
                >
                  members
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div
          className="credibility-strip"
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            padding: "12px 0",
            marginTop: 10,
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                background: "var(--ink)",
                borderRadius: "50%",
                opacity: 0.4,
              }}
            />
            Limited to 66 pieces
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                background: "var(--ink)",
                borderRadius: "50%",
                opacity: 0.4,
              }}
            />
            Heavyweight cotton + precision embroidery
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                background: "var(--ink)",
                borderRadius: "50%",
                opacity: 0.4,
              }}
            />
            Individually numbered exterior label
          </span>
        </div>

        <div
          className="connected-verse"
          style={{ paddingTop: 14, borderTop: "none" }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--muted)",
              marginBottom: 8,
            }}
          >
            Connected Verse
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "var(--muted)",
              lineHeight: 1.55,
            }}
          >
            Every drop carries a scripture reference chosen to reflect the word
            on the front. For Drop 001, &quot;UNSHAKEN&quot; connects to{" "}
            <strong style={{ color: "var(--ink)" }}>Psalm 16:8</strong>,
            embroidered quietly along the right sleeve as a mark of intention.
          </p>
        </div>
      </div>
    </div>
  );
}
