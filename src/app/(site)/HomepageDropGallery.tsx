"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Thumb = { src: string; label: string; comingSoon?: boolean; model?: boolean };

const THUMBS: Thumb[] = [
  { src: "/images/drops/unshaken/unshakenblk.webp", label: "Black" },
  { src: "/images/drops/unshaken/unshakencloseup1.webp", label: "Embroidery Detail" },
  { src: "/images/drops/unshaken/unshakenscript.webp", label: "Scripture Detail" },
  { src: "/images/closeupsleeve.webp", label: "Sleeve Detail" },
  { src: "/images/drops/unshaken/droptag.webp", label: "Drop Tag" },
  { src: "/images/drops/unshaken/model.webp", label: "Model", model: true },
  { src: "/images/drops/unshaken/unshakenwhite.webp", label: "White" },
  { src: "/images/drops/unshaken/unshakenred.webp", label: "Red" },
  { src: "/images/drops/unshaken/unshakendap.webp", label: "Dapple", comingSoon: true },
];

export function HomepageDropGallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = THUMBS[activeIdx];

  return (
    <div className="dropCard fade-up" style={{ transitionDelay: ".05s" }}>
      <div className="dropMedia">
        <div className="dropMainImg" style={{ position: "relative" }}>
          <Image
            src={active.src}
            alt={`UNSHAKEN Tee - ${active.label}`}
            width={1024}
            height={1024}
            priority
            sizes="(max-width: 980px) 100vw, 520px"
          />
        </div>
        <div className="dropThumbs">
          {THUMBS.map((t, i) => (
            <button
              key={t.src}
              type="button"
              className={
                "dropThumb" +
                (i === activeIdx ? " active" : "") +
                (t.comingSoon ? " coming-soon" : "") +
                (t.model ? " model-thumb" : "")
              }
              onClick={() => !t.comingSoon && setActiveIdx(i)}
              aria-label={t.label}
            >
              <Image
                src={t.src}
                alt={t.label}
                width={120}
                height={120}
                sizes="60px"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="dropBody">
        <h3 className="dropWord">UNSHAKEN</h3>
        <div
          style={{
            margin: "4px 0 10px",
            padding: "10px 0",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <p className="dropPrice" style={{ fontSize: 22 }}>
            $50.00
          </p>
          <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: 12 }}>
            Limited to 66 pieces{" "}
            <span style={{ margin: "0 6px", opacity: 0.4 }}>•</span>{" "}
            Individually Numbered
          </p>
        </div>

        <p className="dropDesc">
          Heavyweight premium cotton with precision embroidery.
        </p>
        <p className="dropDesc">One word. One release. When it&apos;s gone, it&apos;s gone.</p>

        <div className="dropActions">
          <Link className="btn primary" href="/drop">
            Shop this drop
          </Link>
        </div>
        <div className="dropMeta">
          <span style={{ color: "#6c727a", fontSize: 11 }}>
            Secure Stripe checkout
          </span>
        </div>
      </div>
    </div>
  );
}
