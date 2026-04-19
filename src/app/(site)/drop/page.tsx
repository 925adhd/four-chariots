import type { Metadata } from "next";
import Link from "next/link";
import { DropShowcase } from "./DropShowcase";
import { CraftScroll } from "./CraftScroll";

export const metadata: Metadata = {
  title: { absolute: "UNSHAKEN Tee — Drop 001 | FOUR CHARIOTS" },
  description:
    "UNSHAKEN Tee — Drop 001 from FOUR CHARIOTS. A limited release of 66 individually numbered pieces. Precision embroidery, heavyweight cotton.",
  alternates: { canonical: "/drop" },
  openGraph: {
    siteName: "FOUR CHARIOTS",
    type: "website",
    url: "/drop",
    title: "UNSHAKEN Tee — Drop 001 | FOUR CHARIOTS",
    description:
      "A limited release of 66 individually numbered pieces. Precision embroidery, heavyweight cotton.",
    images: ["/images/drops/unshaken/unshakenblk.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNSHAKEN Tee — Drop 001 | FOUR CHARIOTS",
    description:
      "A limited release of 66 individually numbered pieces. Precision embroidery, heavyweight cotton.",
    images: ["/images/drops/unshaken/unshakenblk.webp"],
  },
};

const PRODUCT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "UNSHAKEN Tee — Drop 001",
  description:
    "UNSHAKEN Tee — Drop 001 from FOUR CHARIOTS. A limited release of 66 individually numbered pieces. Precision embroidery, heavyweight cotton.",
  image: "https://4chariots.com/images/drops/unshaken/unshakenblk.webp",
  sku: "unshaken-drop-001",
  brand: { "@type": "Brand", name: "FOUR CHARIOTS" },
  offers: {
    "@type": "Offer",
    url: "https://4chariots.com/drop.html",
    priceCurrency: "USD",
    price: "50.00",
    availability: "https://schema.org/PreOrder",
    seller: { "@type": "Organization", name: "FOUR CHARIOTS" },
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://4chariots.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Shop",
      item: "https://4chariots.com/shop.html",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "UNSHAKEN Tee — Drop 001",
      item: "https://4chariots.com/drop.html",
    },
  ],
};

export default function DropPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />

      <div className="divider" />

      <div className="memberBanner">
        Members receive free shipping on every drop.{" "}
        <Link href="/membership">Join now</Link>
      </div>

      <div className="pageTitle">
        <h1>Drop 001</h1>
        <p className="value-anchor">
          Heavyweight premium cotton. Precision embroidery. Limited to 66.
        </p>
        <p>
          Each piece includes a sewn exterior label individually numbered 1 of
          66, marking its place within the release.
        </p>
      </div>

      <DropShowcase />

      <CraftScroll />

      <style>{`
        .pageTitle{
          text-align:center;
          padding: 28px 0 12px;
        }
        .pageTitle h1{
          margin:0;
          font-size: clamp(22px, 2.5vw, 34px);
          text-transform:uppercase;
          letter-spacing:0.10em;
          font-weight:950;
          color:var(--ink);
        }
        .pageTitle p{
          margin:8px 0 0;
          font-size:14px;
          color:var(--muted);
          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }

        .scSwatch.coming-soon{
          pointer-events:none;
          cursor:default;
          margin-left:10px;
        }
        .scSwatch.coming-soon::after{
          white-space:nowrap;
        }

        /* UNSHAKEN showcase */
        .showcase{
          display:grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap:0;
          border:1px solid var(--line);
          background:var(--bg);
          overflow:hidden;
          max-width:900px;
          margin:12px auto 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }
        .scGallery{
          background:#fafafa;
          border-right:1px solid var(--line);
          display:flex;
          flex-direction:row;
          align-items:center;
          gap:12px;
          padding:14px;
        }
        .scMainImg{
          flex:1;
          display:flex;
          align-items:center;
          justify-content:center;
          min-width:0;
        }
        .scMainImg img{
          max-width:100%;
          max-height:520px;
          object-fit:contain;
          transition: opacity .3s ease;
        }
        .scThumbs{
          display:flex;
          flex-direction:column;
          order:-1;
          flex-shrink:0;
          max-height:520px;
          overflow-y:auto;
          gap:8px;
          justify-content:center;
        }
        .scThumb{
          width:64px;
          height:64px;
          border:2px solid transparent;
          background:var(--soft);
          overflow:hidden;
          cursor:pointer;
          transition: border-color .2s ease;
          padding:4px;
        }
        .scThumb.active{ border-color:var(--ink); }
        .scThumb img{
          width:100%;
          height:100%;
          object-fit:contain;
        }
        .scInfo{
          padding:24px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:12px;
        }
        .scTitle{
          margin:0;
          font-size: clamp(24px, 3vw, 36px);
          line-height:1;
          letter-spacing:-0.03em;
          text-transform:uppercase;
          font-weight:950;
          color:var(--ink);
        }
        .scPrice{
          font-size:20px;
          font-weight:900;
          color:var(--ink);
          letter-spacing:-0.02em;
        }
        .member-benefit{
          font-size: 13px;
          color: #6b7280;
          margin-top: 4px;
          margin-bottom: 4px;
        }
        .scDesc{
          color:var(--muted);
          font-size:14px;
          line-height:1.75;
          max-width:48ch;
        }
        .product-material-note {
          font-size:0.9rem;
          letter-spacing:0.03em;
          text-transform:uppercase;
          margin:6px 0 14px 0;
          opacity:0.55;
          color:var(--muted);
          font-weight:400;
        }
        .product-divider {
          border: none;
          border-top: 1px solid rgba(0,0,0,0.08);
          margin: 14px 0 18px 0;
        }
        .product-description { margin-top: 18px; }
        .scripture-hint { font-size:12px; color:var(--muted); margin:14px 0 8px; }

        /* ── Conversion: value anchor ── */
        .value-anchor{
          margin:14px 0 0;
          font-size:13px;
          font-weight:600;
          letter-spacing:0.08em;
          text-transform:uppercase;
          color:var(--ink);
          display:block;
          -webkit-line-clamp:unset;
          overflow:visible;
        }

        /* ── Conversion: proof list ── */
        .proof-list{
          display:flex;
          flex-direction:column;
          gap:4px;
          margin:0 0 6px;
        }
        .proof-list span{
          font-size:11px;
          font-weight:800;
          letter-spacing:0.10em;
          text-transform:uppercase;
          color:var(--muted);
        }

        /* ── Conversion: trust strip ── */
        .trust-strip{
          padding-top:12px;
          border-top:1px solid var(--line);
          display:flex;
          flex-direction:column;
          gap:6px;
        }
        .trust-strip .scMetaItem{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:12px;
          color:var(--muted);
        }

        /* ── Conversion: claimed meter ── */
        .claimed-meter{
          width:100%;
          height:3px;
          background:var(--line);
          margin-top:4px;
          overflow:hidden;
        }
        .claimed-meter .fill{
          height:100%;
          background:var(--ink);
          opacity:.35;
          transition:width .6s ease;
        }
        .stockStatus{
          font-size:12px;
          font-weight:700;
          letter-spacing:0.04em;
        }

        /* ── Conversion: price sub ── */
        .price-sub{
          font-size:12px;
          color:var(--muted);
          margin:2px 0 0;
          letter-spacing:0.02em;
        }
        .scLabel{
          font-size:12px;
          font-weight:600;
          text-transform:uppercase;
          letter-spacing:0.08em;
          color:var(--muted);
        }
        .scLabel .val{
          font-weight:400;
          color:var(--muted);
          text-transform:none;
          letter-spacing:0;
          margin-left:6px;
          opacity:0.75;
        }
        .colorError{
          font-size:12px;
          color:#8b2020;
          margin-top:6px;
          display:none;
        }
        .sizeError{
          font-size:12px;
          color:#8b2020;
          margin-top:6px;
          display:none;
        }
        .sizeBtns{
          display:flex;
          gap:6px;
          flex-wrap:wrap;
          margin-top:8px;
        }
        .sizeBtn{
          padding:8px 14px;
          font-size:12px;
          font-weight:700;
          font-family:var(--font);
          letter-spacing:0.04em;
          border:1px solid var(--line);
          background:transparent;
          color:var(--text);
          cursor:pointer;
          transition: border-color .2s ease, background .2s ease;
        }
        .sizeBtn:hover{ border-color:var(--ink); }
        .sizeBtn.active{
          background:var(--ink);
          color:var(--bg);
          border-color:var(--ink);
        }
        .scColors{
          display:flex;
          gap:8px;
          justify-content:center;
        }
        .scSwatch{
          width:32px;
          height:32px;
          border-radius:50%;
          border:2px solid transparent;
          cursor:pointer;
          padding:0;
          background:none;
          transition: border-color .2s ease, transform .15s ease;
        }
        .scSwatch:hover{ transform:scale(1.1); }
        .scSwatch.active{ border-color:var(--ink); }
        .scSwatch .inner{
          display:block;
          width:100%;
          height:100%;
          border-radius:50%;
          border:1px solid var(--line);
          background-size:cover;
          background-position:center;
        }
        .scMeta{
          padding-top:14px;
          border-top:1px solid var(--line);
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        .scMetaItem{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:12px;
          color:var(--muted);
        }
        .scMetaItem svg{
          width:16px;
          height:16px;
          flex-shrink:0;
          color:var(--ink);
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

          /* Showcase — stack vertically */
          .showcase{ grid-template-columns: 1fr; }
          .scGallery{ flex-direction:column; border-right:none; border-bottom:1px solid var(--line); padding:14px; align-items:center; }
          .scMainImg{ justify-content:center; }
          .scMainImg img{ max-height:280px; }
          .scThumbs{ flex-direction:row; order:0; max-height:none; overflow-y:visible; gap:6px; flex-wrap:wrap; justify-content:center; margin-bottom:12px; }
          .scThumb{ width:48px; height:48px; }
          .scThumb.model-thumb{ order:1; }
          .scInfo{ padding:18px; gap:10px; align-items:center; text-align:center; }
          .sizeBtns{ justify-content:center; }
          .scSwatches{ justify-content:center; }
          .scMeta{ justify-content:center; }
          .scMetaItem{ justify-content:center; }
          .scTitle{ font-size: clamp(22px, 6vw, 32px); }
          .scPrice{ font-size:18px; }
          .scDesc{ font-size:13px; margin-bottom:14px; }
          .scMeta{ gap:6px; }
          .scColors{ margin-top:10px !important; padding-top:10px; border-top:1px solid rgba(0,0,0,0.05); }

          /* Mobile reordering: bring options above story */
          .product-layout {
            display: flex;
            flex-direction: column;
          }
          .product-header { order: 1; }
          .stockStatus { margin-bottom: 10px; }
          .product-options { order: 2; margin-top: 0; margin-bottom: 14px; }
          .product-cta { order: 3; margin-top: 0; }
          .connected-verse { order: 4; padding-top: 10px; }
          .product-story { order: 5; }
        }

        /* ── Product state styles ── */
        .stockStatus.low{
          color:#7a7062;
        }

        /* Archived overlay on gallery */
        .showcase.archived .scGallery{
          position:relative;
        }
        .showcase.archived .scGallery::after{
          content:"";
          position:absolute;
          inset:0;
          background:rgba(255,255,255,.30);
          pointer-events:none;
        }
        .showcase.archived .scPrice{
          display:none;
        }
        .archivedLabel{
          font-size:20px;
          font-weight:900;
          color:var(--muted);
          letter-spacing:0.10em;
          text-transform:uppercase;
          display:none;
        }
        .showcase.archived .archivedLabel{
          display:block;
        }
        .releaseClosed{
          font-size:11px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:0.10em;
          color:var(--muted);
          display:none;
          margin-bottom:4px;
        }
        .showcase.archived .releaseClosed{
          display:block;
        }
        .showcase.archived .btn.primary{
          background:transparent;
          color:var(--muted);
          border-color:var(--line);
          pointer-events:none;
          cursor:default;
          letter-spacing:0.10em;
        }
        .showcase.archived .btn.primary:hover{
          transform:none;
        }
        .showcase.archived .scSwatch,
        .showcase.archived .sizeBtn{
          opacity:.4;
          pointer-events:none;
        }

        /* ───────── PREMIUM CRAFT SCROLL ───────── */

        .craftScroll{
          margin-top:40px;
          border-top:1px solid var(--line);
        }

        .craftBlock{
          display:grid;
          grid-template-columns:1fr 1fr;
          align-items:center;
          gap:40px;
          padding:60px 0;
          border-bottom:1px solid var(--line);
        }

        .craftBlock img{
          width:100%;
          height:auto;
          object-fit:cover;
          border:1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 26px rgba(0,0,0,0.06);
        }

        .craftText h3{
          margin:0 0 14px;
          font-size:18px;
          letter-spacing:0.12em;
          text-transform:uppercase;
          color:var(--ink);
        }

        .craftText p{
          margin:0;
          color:var(--muted);
          line-height:1.8;
          max-width:44ch;
        }

        .craftBlock:first-child img{
          max-height:420px;
          object-fit:contain;
        }

        .craftBlock.reverse{
          direction:rtl;
        }

        .craftBlock.reverse .craftText{
          direction:ltr;
        }

        @media (max-width:980px){
          .craftBlock{
            grid-template-columns:1fr;
            gap:18px;
            padding:36px 0;
          }
          .craftText h3{
            margin-bottom:10px;
          }
          .craftText p{
            line-height:1.65;
          }
          .craftBlock:first-child img{
            max-height:340px;
          }
          .craftBlock:last-child img{
            max-width:85%;
            margin:0 auto;
          }
        }

        .craftBlock:last-child img{
          max-width:80%;
          margin:0 auto;
        }

        /* Subtle reveal */
        .craftBlock.reveal{
          opacity:0;
          transform:translateY(14px);
          transition: opacity .55s ease, transform .55s ease;
          will-change: opacity, transform;
        }
        .craftBlock.reveal.is-visible{
          opacity:1;
          transform:translateY(0);
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce){
          .craftBlock.reveal{
            opacity:1;
            transform:none;
            transition:none;
          }
        }
      `}</style>
    </>
  );
}
