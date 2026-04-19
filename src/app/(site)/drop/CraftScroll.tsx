"use client";

import { useEffect, useRef } from "react";

export function CraftScroll() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const blocks = Array.from(
      root.querySelectorAll<HTMLElement>(".craftBlock"),
    );
    blocks.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    blocks.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="craftScroll" ref={rootRef}>
      {/* Craft Intro */}
      <div className="craftBlock">
        <img
          src="/images/drops/unshaken/unshakencloseup.webp"
          alt="Precision embroidery detail"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          width={1024}
          height={1024}
          loading="lazy"
        />
        <div className="craftText">
          <h3>PRECISION EMBROIDERY</h3>
          <p>
            Each stitch is placed with intention. Dense threadwork creates a
            raised surface that holds its structure through wear, wash, and
            time.
          </p>
        </div>
      </div>

      {/* Sleeve Scripture */}
      <div className="craftBlock reverse">
        <img
          src="/images/drops/unshaken/unshakenscript.webp"
          alt="Sleeve scripture detail"
          width={1024}
          height={1024}
          loading="lazy"
        />
        <div className="craftText">
          <h3>QUIET SCRIPTURE DETAIL</h3>
          <p>
            Psalm 16:8 rests along the right sleeve. Subtle. Personal. A
            reminder carried without needing explanation.
          </p>
        </div>
      </div>

      {/* Bridge line */}
      <p
        style={{
          textAlign: "center",
          margin: 0,
          padding: "20px 0",
          fontSize: 13,
          color: "var(--muted)",
          fontStyle: "italic",
          letterSpacing: "0.02em",
          borderBottom: "1px solid var(--line)",
        }}
      >
        Every piece carries a mark that it was part of this moment.
      </p>

      {/* Exterior Numbered Label */}
      <div className="craftBlock">
        <img
          src="/images/drops/unshaken/droptag.webp"
          alt="Exterior numbered label"
          width={1024}
          height={1024}
          loading="lazy"
        />
        <div className="craftText">
          <h3>INDIVIDUALLY NUMBERED</h3>
          <p>
            Every piece is sewn with an exterior label marking its place within
            Drop 001. Only sixty six exist. When the release closes, it moves
            into archive.
          </p>
        </div>
      </div>

      {/* Fabric Detail */}
      <div className="craftBlock reverse">
        <img
          src="/images/closeupsleeve.webp"
          alt="Heavyweight cotton texture"
          width={1024}
          height={1024}
          loading="lazy"
        />
        <div className="craftText">
          <h3>PRECISION EMBROIDERED PATCH</h3>
          <p>
            The Four Chariots emblem, carried with intention. A quiet symbol of
            movement and purpose, shaped through layered threadwork and
            precision.
          </p>
        </div>
      </div>

      {/* Lifestyle Model */}
      <div className="craftBlock">
        <img
          src="/images/drops/unshaken/everydaymodel.webp"
          alt="UNSHAKEN lifestyle"
          width={1024}
          height={1024}
          loading="lazy"
        />
        <div className="craftText">
          <h3>DESIGNED FOR ORDINARY MOMENTS</h3>
          <p>
            Not loud. Not disposable. Built to be worn daily while carrying
            meaning quietly.
          </p>
        </div>
      </div>

      {/* Community / Shared Faith */}
      <div
        className="craftBlock reverse"
        style={{
          marginTop: 20,
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <img
          src="/images/drops/unshaken/spreadingtheword.webp"
          alt="Sharing faith in everyday moments"
          width={1024}
          height={1024}
          loading="lazy"
        />
        <div className="craftText">
          <h3>QUIETLY INVITES CONVERSATION</h3>
          <p>
            Sometimes meaning is carried quietly, revealed in conversations
            that begin long before words are spoken.
          </p>
        </div>
      </div>
    </section>
  );
}
