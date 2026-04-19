import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop FOUR CHARIOTS faith-driven apparel — Core Collection scripture tees, limited drops, and gear. Every piece made to order with intention.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop | FOUR CHARIOTS",
    description:
      "Core Collection tees, limited drops, and gear. Every piece made to order.",
    url: "/shop",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | FOUR CHARIOTS",
    description:
      "Core Collection tees, limited drops, and gear. Every piece made to order.",
    images: ["/images/logo.png"],
  },
};

export default function ShopPage() {
  return (
    <>
      <div className="divider"></div>

      <div className="memberBanner">
        Free shipping on every drop — members only.
        <Link href="/membership">Join now</Link>
      </div>

      {/* Core Collection header */}
      <div id="core" style={{ textAlign: "center", padding: "56px 0 28px" }}>
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
          Core Collection
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(24px,3vw,36px)",
            fontWeight: 950,
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            color: "var(--ink)",
          }}
        >
          The Four
        </h2>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--muted)" }}>
          Foundations that remain. Drops come and go, but{" "}
          <span className="noBreak">The Four stay.</span>
        </p>
        <p
          style={{
            margin: "6px 0 0",
            fontSize: 14,
            color: "var(--muted)",
            opacity: 0.7,
          }}
        >
          Start with the word that carries you daily.
        </p>
        <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--muted)" }}>
          Heavyweight core pieces built to anchor every drop.
        </p>
      </div>

      {/* Core grid — all 4 compact */}
      <section className="coreGrid" aria-label="Core Collection">
        <article className="product">
          <Link className="media" href="/shop/forgiven">
            <img
              src="/images/core/forgiven/forgivenred.webp"
              alt="FORGIVEN Tee"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <img
              className="preview-model"
              src="/images/core/forgiven/model.webp"
              alt="FORGIVEN Tee on model"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </Link>
          <div className="body">
            <Link href="/shop/forgiven">
              <h3 className="name">FORGIVEN</h3>
            </Link>
            <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--muted)" }}>
              Heavyweight embroidery • Signature sleeve patch
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 9, color: "var(--muted)" }}>
              Psalm 130:4
            </p>
            <p
              className="desc"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                margin: "2px 0 0",
                fontSize: 9,
                color: "var(--muted)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0 }}>
                <circle cx="5" cy="5" r="4.5" fill="none" stroke="rgba(0,0,0,.12)" strokeWidth=".5" />
                <path d="M5 0.5A4.5 4.5 0 0 1 9.5 5H5Z" fill="#1a1a1a" />
                <path d="M9.5 5A4.5 4.5 0 0 1 5 9.5V5Z" fill="#8b2232" />
                <path d="M5 9.5A4.5 4.5 0 0 1 0.5 5H5Z" fill="#555" />
                <path d="M0.5 5A4.5 4.5 0 0 1 5 0.5V5Z" fill="#f5f0e1" />
              </svg>{" "}
              4 colorways available
            </p>
          </div>
          <div className="bottom">
            <div>
              <div className="price">$25.00</div>
              <div className="fine">Core Collection • Permanent Line</div>
            </div>
            <Link className="btn primary" href="/shop/forgiven">
              View Details
            </Link>
          </div>
        </article>

        <article className="product">
          <Link className="media" href="/shop/unashamed">
            <img
              src="/images/core/unashamed/unashamedblk.webp"
              alt="UNASHAMED Tee"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <img
              className="preview-model"
              src="/images/core/unashamed/model.webp"
              alt="UNASHAMED Tee on model"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </Link>
          <div className="body">
            <Link href="/shop/unashamed">
              <h3 className="name">UNASHAMED</h3>
            </Link>
            <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--muted)" }}>
              Heavyweight embroidery • Signature sleeve patch
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 9, color: "var(--muted)" }}>
              Romans 1:16
            </p>
            <p
              className="desc"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                margin: "2px 0 0",
                fontSize: 9,
                color: "var(--muted)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0 }}>
                <circle cx="5" cy="5" r="4.5" fill="none" stroke="rgba(0,0,0,.12)" strokeWidth=".5" />
                <path d="M5 0.5A4.5 4.5 0 0 1 9.5 5H5Z" fill="#1a1a1a" />
                <path d="M9.5 5A4.5 4.5 0 0 1 5 9.5V5Z" fill="#8b2232" />
                <path d="M5 9.5A4.5 4.5 0 0 1 0.5 5H5Z" fill="#555" />
                <path d="M0.5 5A4.5 4.5 0 0 1 5 0.5V5Z" fill="#f5f0e1" />
              </svg>{" "}
              4 colorways available
            </p>
          </div>
          <div className="bottom">
            <div>
              <div className="price">$25.00</div>
              <div className="fine">Core Collection • Permanent Line</div>
            </div>
            <Link className="btn primary" href="/shop/unashamed">
              View Details
            </Link>
          </div>
        </article>

        <article className="product">
          <Link className="media" href="/shop/chosen">
            <img
              src="/images/core/chosen/chosenwhite.webp"
              alt="CHOSEN Tee"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <img
              className="preview-model"
              src="/images/core/chosen/model.webp"
              alt="CHOSEN Tee on model"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </Link>
          <div className="body">
            <Link href="/shop/chosen">
              <h3 className="name">CHOSEN</h3>
            </Link>
            <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--muted)" }}>
              Heavyweight embroidery • Signature sleeve patch
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 9, color: "var(--muted)" }}>
              John 15:16
            </p>
            <p
              className="desc"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                margin: "2px 0 0",
                fontSize: 9,
                color: "var(--muted)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0 }}>
                <circle cx="5" cy="5" r="4.5" fill="none" stroke="rgba(0,0,0,.12)" strokeWidth=".5" />
                <path d="M5 0.5A4.5 4.5 0 0 1 9.5 5H5Z" fill="#1a1a1a" />
                <path d="M9.5 5A4.5 4.5 0 0 1 5 9.5V5Z" fill="#8b2232" />
                <path d="M5 9.5A4.5 4.5 0 0 1 0.5 5H5Z" fill="#555" />
                <path d="M0.5 5A4.5 4.5 0 0 1 5 0.5V5Z" fill="#f5f0e1" />
              </svg>{" "}
              4 colorways available
            </p>
          </div>
          <div className="bottom">
            <div>
              <div className="price">$25.00</div>
              <div className="fine">Core Collection • Permanent Line</div>
            </div>
            <Link className="btn primary" href="/shop/chosen">
              View Details
            </Link>
          </div>
        </article>

        <article className="product">
          <Link className="media" href="/shop/grateful">
            <img
              src="/images/core/grateful/gratefuldap.webp"
              alt="GRATEFUL Tee"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <img
              className="preview-model"
              src="/images/core/grateful/model.webp"
              alt="GRATEFUL Tee on model"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </Link>
          <div className="body">
            <Link href="/shop/grateful">
              <h3 className="name">GRATEFUL</h3>
            </Link>
            <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--muted)" }}>
              Heavyweight embroidery • Signature sleeve patch
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 9, color: "var(--muted)" }}>
              1 Thessalonians 5:18
            </p>
            <p
              className="desc"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                margin: "2px 0 0",
                fontSize: 9,
                color: "var(--muted)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0 }}>
                <circle cx="5" cy="5" r="4.5" fill="none" stroke="rgba(0,0,0,.12)" strokeWidth=".5" />
                <path d="M5 0.5A4.5 4.5 0 0 1 9.5 5H5Z" fill="#1a1a1a" />
                <path d="M9.5 5A4.5 4.5 0 0 1 5 9.5V5Z" fill="#8b2232" />
                <path d="M5 9.5A4.5 4.5 0 0 1 0.5 5H5Z" fill="#555" />
                <path d="M0.5 5A4.5 4.5 0 0 1 5 0.5V5Z" fill="#f5f0e1" />
              </svg>{" "}
              4 colorways available
            </p>
          </div>
          <div className="bottom">
            <div>
              <div className="price">$25.00</div>
              <div className="fine">Core Collection • Permanent Line</div>
            </div>
            <Link className="btn primary" href="/shop/grateful">
              View Details
            </Link>
          </div>
        </article>
      </section>

      {/* Current Drop */}
      <div style={{ textAlign: "center", padding: "80px 0 28px" }}>
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
          Current Drop
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(24px,3vw,36px)",
            fontWeight: 950,
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            color: "var(--ink)",
          }}
        >
          Drop 001
        </h2>
        <p
          style={{
            margin: "8px 0 0",
            fontSize: 14,
            color: "var(--muted)",
            opacity: 0.7,
          }}
        >
          Limited release · Individually numbered · New scripture edition
        </p>
        <p style={{ margin: "6px 0 0", fontSize: 12, color: "var(--muted)" }}>
          Members receive early access before public release.
        </p>
      </div>

      <div className="current-drop-container">
        <Link
          href="/drop"
          className="drop-img-wrap"
          style={{ display: "block", padding: "24px 0" }}
        >
          <img
            src="/images/drops/unshaken/unshakenblk.webp"
            alt="UNSHAKEN Tee"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <img
            className="preview-model"
            src="/images/drops/unshaken/model.webp"
            alt="UNSHAKEN Tee on model"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </Link>
        <Link href="/drop" style={{ display: "block" }}>
          <h3
            style={{
              margin: 0,
              fontWeight: 950,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              fontSize: 18,
              color: "var(--ink)",
            }}
          >
            UNSHAKEN Tee — Drop 001
          </h3>
        </Link>
        <p className="current-drop-description">
          One word. One release. Individually numbered.
        </p>
        <div className="drop-actions">
          <span
            style={{
              fontWeight: 950,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              fontSize: 18,
            }}
          >
            $50.00
          </span>
          <Link className="btn primary" href="/drop">
            View Details
          </Link>
        </div>
        <div className="current-drop-release">Limited release</div>
      </div>

      <p className="current-drop-archive">
        Missed a drop? Sold out drops remain in the{" "}
        <a href="#archive" className="inline-link">
          archive
        </a>
        . Begin with{" "}
        <a href="#core" className="inline-link">
          The Core
        </a>{" "}
        while you wait for the next release.
      </p>

      {/* Gear sub-header */}
      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.05)",
          margin: "72px auto",
          maxWidth: 420,
        }}
      ></div>
      <div className="pageTitle" style={{ padding: "36px 0 20px" }}>
        <h1>Gear</h1>
        <p>Faith-driven gear. Made to order, just for you.</p>
      </div>

      {/* Product grid (local) */}
      <section className="grid" id="grid" aria-label="Products">
        {/* MUG */}
        <article className="product">
          <Link className="media" href="/shop/mug">
            <img
              src="/images/gear/mugpreview.webp"
              alt="FOUR CHARIOTS Horse Emblem Mug"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <img
              className="preview-model"
              src="/images/gear/four-chariots-horse-emblem-mug-glossy-ceramic-coffee-mug-11oz-15oz (1).webp"
              alt="FOUR CHARIOTS Horse Emblem Mug alternate view"
              loading="lazy"
              width={1200}
              height={1200}
            />
          </Link>
          <div className="body">
            <Link href="/shop/mug">
              <h3 className="name">
                FOUR CHARIOTS Horse Emblem Mug — Glossy Ceramic Coffee Mug (11oz
                / 15oz)
              </h3>
            </Link>
            <p className="desc">
              A simple ceramic mug featuring the FOUR CHARIOTS horse emblem.
              Glossy white ceramic gives the design strong contrast while
              keeping the look clean and minimal. Durable printing holds up
              through daily use, whether it&apos;s morning coffee, tea, or
              something warm at the end of the day.
            </p>
          </div>
          <div className="bottom">
            <div>
              <div className="price">$15.00</div>
              <div className="fine">Stripe checkout</div>
            </div>
            <Link className="btn primary" href="/shop/mug">
              View Details
            </Link>
          </div>
        </article>

        {/* DECAL */}
        <article className="product">
          <Link className="media" href="/shop/sticker">
            <img
              src="/images/gear/stickerpreview.webp"
              alt="FOUR CHARIOTS Foundation Seal Sticker"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <img
              className="preview-model"
              src="/images/gear/laptopdecal.webp"
              alt="FOUR CHARIOTS Foundation Seal Sticker on laptop"
              loading="lazy"
              width={1200}
              height={1200}
            />
          </Link>
          <div className="body">
            <Link href="/shop/sticker">
              <h3 className="name">
                FOUR CHARIOTS Foundation Seal Sticker — Glossy Vinyl Decal
              </h3>
            </Link>
            <p className="desc">
              A simple vinyl sticker featuring the FOUR CHARIOTS foundation
              seal. Clean lines and strong contrast give the symbol a steady
              presence wherever it&apos;s placed, from laptops and journals to
              water bottles and workspaces. Printed on durable glossy vinyl, it
              applies smoothly and holds up through everyday use.
            </p>
          </div>
          <div className="bottom">
            <div>
              <div className="price">$4.00</div>
              <div className="fine">Stripe checkout</div>
            </div>
            <Link className="btn primary" href="/shop/sticker">
              View Details
            </Link>
          </div>
        </article>
      </section>

      {/* Archive placeholder (empty until sold out drops exist) */}
      <div id="archive" style={{ textAlign: "center", padding: "48px 0 12px" }}>
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
          Archive
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(24px,3vw,36px)",
            fontWeight: 950,
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            color: "var(--ink)",
          }}
        >
          Previous Drops
        </h2>
      </div>

      <style>{`
        .noBreak{ white-space:nowrap; }
        [id]{ scroll-margin-top:24px; }

        .coreGrid{
          max-width:960px;
          display:flex;
          gap:14px;
          padding-top:12px;
          margin:0 auto;
        }
        .coreGrid .product{
          flex:1 1 0;
          min-width:0;
          border:1px solid rgba(0,0,0,0.03);
          background:transparent;
          display:flex;
          flex-direction:column;
          min-height:auto;
        }
        .coreGrid .product .media{
          aspect-ratio:1;
          font-size:11px !important;
        }
        .coreGrid .product .body{ padding:8px 10px; gap:2px; min-height:auto; }
        .coreGrid .product .name{ font-size:13px; }
        .coreGrid .product .desc{ font-size:11px; }
        .coreGrid .product .bottom{ padding:10px 12px; }
        .coreGrid .product .bottom .price{ font-size:13px; }
        .coreGrid .product .bottom .fine{ font-size:10px; }
        .coreGrid .product .bottom .btn{ font-size:11px; padding:8px 12px; }

        .pageTitle{
          text-align:center;
          padding: 40px 0 20px;
        }
        .pageTitle h1{
          margin:0;
          font-size: clamp(28px, 3.5vw, 44px);
          text-transform:uppercase;
          letter-spacing:0.10em;
          font-weight:950;
          color:var(--ink);
        }
        .pageTitle p{
          margin:8px 0 0;
          font-size:14px;
          color:var(--muted);
        }

        .grid{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 18px;
          padding-top: 12px;
          max-width:800px;
          margin:0 auto;
        }
        .product{
          border:none;
          background:transparent;
          display:flex;
          flex-direction:column;
          min-height: 520px;
        }
        .product .media{
          aspect-ratio: 4/3;
          background: #fafafa;
          border-bottom:none;
          overflow:hidden;
          position:relative;
        }
        .product .media img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          transition: opacity 0.4s ease;
        }
        .product .media img.preview-model{
          opacity:0;
        }
        .product .media:hover img.preview-model{
          opacity:1;
        }
        .product .media:hover img:first-child{
          opacity:0;
        }
        .product .body{
          padding: 16px;
          display:flex;
          flex-direction:column;
          gap:10px;
          min-height: 170px;
        }
        .product .name{
          margin:0;
          font-weight:950;
          text-transform:uppercase;
          letter-spacing:-0.02em;
          font-size:16px;
          line-height:1.05;
          color:var(--ink);
        }
        .product .desc{
          margin:0;
          color:var(--muted);
          font-size:13px;
          max-width:62ch;
          overflow:hidden;
          display:-webkit-box;
          -webkit-line-clamp:4;
          -webkit-box-orient:vertical;
        }
        .product .bottom{
          margin-top:auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          border-top:none;
          padding: 14px 16px;
        }
        .product .bottom .btn{
          font-size:0.8rem;
          letter-spacing:0.08em;
          padding:10px 16px;
        }
        .price{
          font-weight:950;
          letter-spacing:-0.02em;
          color:var(--ink);
        }
        .fine{
          font-size:12px;
          color:var(--muted);
          margin-top:2px;
        }
        .current-drop-container { max-width:480px; margin:0 auto; text-align:center; }
        .current-drop-container .drop-img-wrap {
          position:relative;
          display:inline-block;
        }
        .current-drop-container .drop-img-wrap img {
          max-width:460px;
          max-height:380px;
          margin:0 auto;
          object-fit:contain;
          transition: opacity 0.4s ease;
        }
        .current-drop-container .drop-img-wrap img.preview-model{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          opacity:0;
        }
        .current-drop-container .drop-img-wrap:hover img.preview-model{
          opacity:1;
        }
        .current-drop-container .drop-img-wrap:hover img:first-child{
          opacity:0;
        }
        .drop-actions {
          display:flex;
          align-items:center;
          justify-content:center;
          gap:16px;
          margin-top:14px;
        }
        .current-drop-description {
          margin:8px 0 0;
          color:var(--muted);
          font-size:13px;
          max-width:42ch;
          margin-left:auto;
          margin-right:auto;
        }
        .current-drop-release { font-size:0.8rem; opacity:0.6; margin-top:6px; color:var(--muted); }
        .current-drop-archive {
          max-width:420px;
          margin:24px auto 0;
          text-align:center;
          font-size:13px;
          color:var(--muted);
        }
        .inline-link{
          color:inherit;
          text-decoration:underline;
          text-underline-offset:3px;
          text-decoration-color:rgba(0,0,0,.25);
          transition: color .2s ease, text-decoration-color .2s ease;
        }
        .inline-link:hover{
          color:var(--ink);
          text-decoration-color:var(--ink);
        }

        /* Gear: hover image swap */
        .grid .product .media img.preview-model{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          max-height:none;
          margin-bottom:0;
          object-fit:cover;
        }

        /* Gear section editorial refinements */
        .grid .product .name {
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: none;
          line-height: 1.35;
        }
        .grid .product .media img {
          margin-bottom: 14px;
          max-height: 240px;
          object-fit: contain;
        }
        .grid .product .bottom .btn {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          padding: 10px 18px;
        }
        .grid .product .desc {
          max-width: 340px;
        }

        .memberBanner{
          background:var(--ink);
          color:#fff;
          text-align:center;
          padding:10px 16px;
          font-size:12px;
          font-weight:700;
          letter-spacing:0.06em;
          text-transform:uppercase;
        }
        .memberBanner a{
          color:#fff;
          text-decoration:underline;
          text-underline-offset:3px;
          margin-left:6px;
          font-weight:900;
        }
        .memberBanner a:hover{ opacity:.8; }

        @media (max-width: 980px){
          /* Page title */
          .pageTitle{ padding: 28px 0 14px; }
          .pageTitle h1{ font-size: clamp(24px, 7vw, 36px); }

          /* Product grid — single column on mobile */
          .grid{
            grid-template-columns: 1fr;
            gap: 14px;
            max-width: 100%;
          }
          .product{ min-height: auto; }
          .product .media{ aspect-ratio: 4/3; }
          .product .body{ min-height: auto; padding: 14px; gap: 8px; }
          .product .name{ font-size: 15px; }
          .product .desc{ font-size: 12px; -webkit-line-clamp: 3; }
          .product .bottom{ padding: 12px 14px; }

          /* Core grid — horizontal swipe on mobile */
          .coreGrid{
            display:flex;
            overflow-x:auto;
            scroll-snap-type:x mandatory;
            scroll-behavior:smooth;
            -webkit-overflow-scrolling:touch;
            scrollbar-width:none;
            gap:14px;
            padding-bottom:8px;
          }
          .coreGrid::-webkit-scrollbar{ display:none; }
          .coreGrid .product{
            flex:0 0 75vw;
            max-width:300px;
            scroll-snap-align:center;
            scroll-snap-stop:always;
          }

          /* Drop image centering */
          .current-drop-container .drop-img-wrap{
            display:flex;
            justify-content:center;
            padding:16px 0;
          }
          .current-drop-container .drop-img-wrap img{
            max-width:100%;
            max-height:300px;
          }
        }
      `}</style>
    </>
  );
}
