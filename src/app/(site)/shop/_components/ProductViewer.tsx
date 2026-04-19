"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useNotify } from "@/components/NotifyModal";

export type ProductColor = {
  name: string;
  src: string;
  hex: string;
  swatch: string;
  comingSoon?: boolean;
};

export type ProductViewerProps = {
  productId: string;
  productName: string;
  altBase: string; // e.g. "CHOSEN Tee"
  modelSrc: string;
  colors: ProductColor[];
  sizes: string[];
  scriptureRef: string; // e.g. "John 15:16"
  scriptureQuote: string; // e.g. "You did not choose Me, but I chose you."
  displayWord: string; // e.g. "CHOSEN"
  elevated?: boolean; // apply subtle drop-shadow (forgiven source has this)
};

const SIZES_DEFAULT = ["S", "M", "L", "XL", "2XL", "3XL"];

export function ProductViewer({
  productId,
  productName,
  altBase,
  modelSrc,
  colors,
  sizes = SIZES_DEFAULT,
  scriptureRef,
  scriptureQuote,
  displayWord,
  elevated = false,
}: ProductViewerProps) {
  const { open } = useNotify();

  // Thumb entries: Black, Model, White, Red, Dapple (matches source ordering).
  // Active thumb can be model (empty color) OR a real color.
  const [heroSrc, setHeroSrc] = useState<string>(modelSrc);
  const [heroAlt, setHeroAlt] = useState<string>(altBase);
  const [activeColor, setActiveColor] = useState<string>(""); // "" = model
  const [modelActive, setModelActive] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [comingSoonVisible, setComingSoonVisible] = useState<boolean>(false);
  const [canHover, setCanHover] = useState<boolean>(false);

  useEffect(() => {
    // Detect hover-capable devices for thumb hover preview after hydration.
    if (typeof window !== "undefined" && window.matchMedia) {
      setCanHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  const previewColor = (color: ProductColor) => {
    setHeroSrc(color.src);
    setHeroAlt(`${altBase} - ${color.name}`);
    setComingSoonVisible(!!color.comingSoon);
    if (color.comingSoon) {
      // Hover preview on the coming-soon thumb: deactivate swatches,
      // keep the model state off (its own thumb handles active class).
      setActiveColor("__preview_coming_soon__");
      setModelActive(false);
    } else {
      setActiveColor(color.name);
      setModelActive(false);
    }
  };

  const selectColorFromThumb = (color: ProductColor) => {
    setHeroSrc(color.src);
    setHeroAlt(`${altBase} - ${color.name}`);
    setComingSoonVisible(!!color.comingSoon);
    if (color.comingSoon) {
      setActiveColor("__preview_coming_soon__");
      setModelActive(false);
    } else {
      setActiveColor(color.name);
      setModelActive(false);
    }
  };

  const selectModelThumb = () => {
    setHeroSrc(modelSrc);
    setHeroAlt(altBase);
    setActiveColor("");
    setModelActive(true);
    setComingSoonVisible(false);
  };

  const selectColorFromSwatch = (color: ProductColor) => {
    setHeroSrc(color.src);
    setHeroAlt(`${altBase} - ${color.name}`);
    setComingSoonVisible(false);
    if (color.comingSoon) {
      // Source behavior: clicking a coming-soon swatch does nothing lasting
      // (pointer-events:none keeps this from firing anyway).
      return;
    }
    setActiveColor(color.name);
    setModelActive(false);
  };

  const onNotify = () => {
    const parts: string[] = [];
    if (activeColor && activeColor !== "__preview_coming_soon__") {
      parts.push(activeColor);
    }
    if (selectedSize) parts.push(selectedSize);
    open({
      productId,
      productName,
      variant: parts.join(" / "),
    });
  };

  // Build the ordered thumb list as in source:
  // [Black, Model, White, Red, Dapple]
  const thumbs = useMemo(() => {
    const black = colors.find((c) => c.name === "Black");
    const white = colors.find((c) => c.name === "White");
    const red = colors.find((c) => c.name === "Red");
    const dapple = colors.find((c) => c.name === "Dapple");
    return { black, white, red, dapple };
  }, [colors]);

  const colorLabel = activeColor && activeColor !== "__preview_coming_soon__"
    ? activeColor
    : "";

  return (
    <div className={`showcase${elevated ? " elevated" : ""}`}>
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
          <span
            id="comingSoonBadge"
            style={{
              display: comingSoonVisible ? "block" : "none",
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
        </div>
        <div className="scThumbs">
          {thumbs.black && (
            <div
              className={`scThumb${activeColor === "Black" ? " active" : ""}`}
              onMouseEnter={canHover ? () => previewColor(thumbs.black!) : undefined}
              onClick={() => selectColorFromThumb(thumbs.black!)}
            >
              <img
                src={thumbs.black.src}
                alt="Black"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          )}
          <div
            className={`scThumb model-thumb${modelActive ? " active" : ""}`}
            onMouseEnter={canHover ? selectModelThumb : undefined}
            onClick={selectModelThumb}
          >
            <img
              src={modelSrc}
              alt="Model"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>
          {thumbs.white && (
            <div
              className={`scThumb${activeColor === "White" ? " active" : ""}`}
              onMouseEnter={canHover ? () => previewColor(thumbs.white!) : undefined}
              onClick={() => selectColorFromThumb(thumbs.white!)}
            >
              <img
                src={thumbs.white.src}
                alt="White"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          )}
          {thumbs.red && (
            <div
              className={`scThumb${activeColor === "Red" ? " active" : ""}`}
              onMouseEnter={canHover ? () => previewColor(thumbs.red!) : undefined}
              onClick={() => selectColorFromThumb(thumbs.red!)}
            >
              <img
                src={thumbs.red.src}
                alt="Red"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          )}
          {thumbs.dapple && (
            <div
              className="scThumb coming-soon"
              onMouseEnter={canHover ? () => previewColor(thumbs.dapple!) : undefined}
              onClick={() => selectColorFromThumb(thumbs.dapple!)}
            >
              <img
                src={thumbs.dapple.src}
                alt="Dapple"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>

      <div className="scInfo">
        <h2 className="scTitle">{displayWord}</h2>
        <div className="scPrice">$25.00</div>

        <p className="product-material-note">HEAVYWEIGHT 100 PERCENT PREMIUM USA COTTON</p>
        <hr className="product-divider" />

        <p className="scDesc product-description">
          A single word, carried into the everyday.<br />
          Designed to be worn with intention.<br />
          Precision embroidery. Everyday durability.
        </p>

        <p className="scripture-hint">{scriptureRef} &mdash; connected scripture detail</p>

        <div>
          <div className="scLabel">
            Color <span className="val">{colorLabel}</span>
          </div>
          <div className="scColors" style={{ marginTop: 8 }}>
            {colors.map((c) => {
              const isActive = activeColor === c.name;
              const className = `scSwatch${c.comingSoon ? " coming-soon" : ""}${isActive ? " active" : ""}`;
              return (
                <button
                  key={c.name}
                  type="button"
                  className={className}
                  title={c.name}
                  onClick={() => selectColorFromSwatch(c)}
                >
                  <span
                    className="inner"
                    style={{ backgroundImage: `url('${c.swatch}')` }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="scLabel">
            Size <span className="val">{selectedSize}</span>
          </div>
          <div className="sizeBtns">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`sizeBtn${selectedSize === s ? " active" : ""}`}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="btn primary"
          style={{ width: "100%", marginTop: 4 }}
          onClick={onNotify}
        >
          Notify me
        </button>

        <div className="scMeta">
          <div className="scMetaItem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span>Made to order, just for you</span>
          </div>
          <div className="scMetaItem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <path d="M1 10h22" />
            </svg>
            <span>Secure checkout via Stripe</span>
          </div>
          <div className="scMetaItem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 18H3a1 1 0 01-1-1V7a1 1 0 011-1h10v11m0-11h3l3 4v7a1 1 0 01-1 1h-2" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
            <span>
              Free shipping for{" "}
              <Link
                href="/membership"
                style={{ textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 700 }}
              >
                members
              </Link>
            </span>
          </div>
        </div>

        <div style={{ paddingTop: 14, borderTop: "1px solid var(--line)" }}>
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
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.55 }}>
            Every piece carries a scripture reference chosen to reflect the word on the front.
            &quot;{displayWord}&quot; connects to{" "}
            <strong style={{ color: "var(--ink)" }}>{scriptureRef}</strong> &mdash; &quot;{scriptureQuote}&quot; &mdash; embroidered quietly along the right sleeve as a mark of intention.
          </p>
        </div>
      </div>
    </div>
  );
}
