import type { Metadata } from "next";
import Link from "next/link";
import { MugPdp } from "./MugPdp";

export const metadata: Metadata = {
  title: "Horse Emblem Mug",
  description:
    "Horse Emblem Mug from FOUR CHARIOTS — glossy ceramic coffee mug (11oz / 15oz). Precision emblem detail, built for daily use. Faith-driven gear.",
  alternates: { canonical: "/shop/mug" },
  openGraph: {
    title: "Horse Emblem Mug | FOUR CHARIOTS",
    description:
      "Glossy ceramic coffee mug (11oz / 15oz). Precision emblem detail, built for daily use.",
    url: "/shop/mug",
    images: [
      "/images/gear/four-chariots-horse-emblem-mug-glossy-ceramic-coffee-mug-11oz-15oz.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horse Emblem Mug | FOUR CHARIOTS",
    description:
      "Glossy ceramic coffee mug (11oz / 15oz). Precision emblem detail, built for daily use.",
    images: [
      "/images/gear/four-chariots-horse-emblem-mug-glossy-ceramic-coffee-mug-11oz-15oz.webp",
    ],
  },
};

const PRODUCT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Horse Emblem Mug",
  description:
    "Horse Emblem Mug from FOUR CHARIOTS — glossy ceramic coffee mug available in 11oz and 15oz. Precision emblem detail, built for daily use.",
  image:
    "https://4chariots.com/images/gear/four-chariots-horse-emblem-mug-glossy-ceramic-coffee-mug-11oz-15oz.webp",
  sku: "fc-horse-emblem-mug",
  brand: { "@type": "Brand", name: "FOUR CHARIOTS" },
  offers: {
    "@type": "AggregateOffer",
    url: "https://4chariots.com/shop/mug",
    priceCurrency: "USD",
    lowPrice: "15.00",
    highPrice: "18.00",
    offerCount: 2,
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
      item: "https://4chariots.com/shop",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Horse Emblem Mug",
      item: "https://4chariots.com/shop/mug",
    },
  ],
};

export default function MugPage() {
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

      <div className="divider"></div>

      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/shop">Shop</Link>
        <span className="sep">/</span>
        <span>
          FOUR CHARIOTS Horse Emblem Mug — Glossy Ceramic Coffee Mug (11oz /
          15oz)
        </span>
      </div>

      <MugPdp />

      <style>{`
        .breadcrumb{
          padding:16px 0 0;
          font-size:12px;
          color:var(--muted);
          display:flex;
          gap:6px;
          align-items:center;
        }
        .breadcrumb a:hover{ color:var(--text); }
        .breadcrumb .sep{ opacity:.5; }

        .pdp{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap:40px;
          padding:24px 0 40px;
          align-items:start;
        }
        .gallery{
          display:flex;
          flex-direction:column;
          gap:12px;
        }
        .mainImage{
          aspect-ratio:1;
          background:var(--soft);
          border:1px solid var(--line);
          overflow:hidden;
          position:relative;
        }
        .mainImage img{
          width:100%;
          height:100%;
          object-fit:contain;
          transition: opacity .3s ease;
        }
        .thumbStrip{
          display:flex;
          gap:8px;
          overflow-x:auto;
        }
        .thumbStrip::-webkit-scrollbar{ height:4px; }
        .thumbStrip::-webkit-scrollbar-thumb{ background:var(--line); border-radius:2px; }
        .thumb{
          width:72px;
          height:72px;
          flex-shrink:0;
          border:2px solid transparent;
          background:var(--soft);
          overflow:hidden;
          cursor:pointer;
          transition: border-color .2s ease;
        }
        .thumb.active{ border-color:var(--ink); }
        .thumb img{
          width:100%;
          height:100%;
          object-fit:contain;
        }
        .pdpInfo{
          display:flex;
          flex-direction:column;
          gap:0;
        }
        .pdpTitle{
          margin:0;
          font-size: clamp(24px, 3vw, 36px);
          line-height:1;
          letter-spacing:-0.03em;
          text-transform:uppercase;
          font-weight:950;
          color:var(--ink);
        }
        .pdpPrice{
          margin:12px 0 0;
          font-size:22px;
          font-weight:900;
          color:var(--ink);
          letter-spacing:-0.02em;
        }
        .pdpDesc{
          margin:16px 0 0;
          color:var(--muted);
          font-size:14px;
          line-height:1.6;
          max-width:52ch;
        }
        .optionGroup{ margin-top:20px; }
        .optionLabel{
          font-size:12px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:0.10em;
          color:var(--ink);
          margin-bottom:8px;
        }
        .optionLabel .chosen{
          font-weight:500;
          color:var(--muted);
          text-transform:none;
          letter-spacing:0;
          margin-left:6px;
        }
        .sizePills{
          display:flex;
          gap:8px;
          flex-wrap:wrap;
        }
        .sizePill{
          padding:8px 16px;
          border:1px solid var(--line);
          background:var(--bg);
          font-size:13px;
          font-weight:700;
          letter-spacing:0.04em;
          cursor:pointer;
          transition: background .2s ease, border-color .2s ease, color .2s ease;
        }
        .sizePill:hover{ border-color:var(--text); }
        .sizePill.active{
          background:var(--ink);
          color:var(--btnText);
          border-color:var(--ink);
        }
        .qtyRow{
          display:flex;
          align-items:center;
          gap:0;
          margin-top:20px;
        }
        .qtyLabel{
          font-size:12px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:0.10em;
          color:var(--ink);
          margin-right:14px;
        }
        .qtyBtn{
          width:36px;
          height:36px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border:1px solid var(--line);
          background:var(--bg);
          font-size:16px;
          font-weight:700;
          color:var(--text);
          cursor:pointer;
          transition: background .15s ease;
          user-select:none;
          padding:0;
        }
        .qtyBtn:hover{ background:var(--soft); }
        .qtyVal{
          width:44px;
          height:36px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-top:1px solid var(--line);
          border-bottom:1px solid var(--line);
          font-size:14px;
          font-weight:700;
          color:var(--ink);
        }
        .addToCart{
          margin-top:20px;
          width:100%;
          padding:16px;
          font-size:14px;
        }
        .btn.primary:disabled:hover{
          background:var(--btn);
          color:var(--btnText);
          transform:none;
        }
        .pdpMeta{
          margin-top:20px;
          padding-top:16px;
          border-top:1px solid var(--line);
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .metaItem{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:12px;
          color:var(--muted);
        }
        .metaItem svg{
          width:16px;
          height:16px;
          flex-shrink:0;
          color:var(--ink);
        }
        .paymentIcons{
          margin-top:12px;
          display:flex;
          gap:8px;
          align-items:center;
        }
        .payIcon{
          padding:4px 10px;
          border:1px solid var(--line);
          border-radius:4px;
          font-size:11px;
          font-weight:700;
          color:var(--muted);
          background:var(--bg);
          letter-spacing:0.02em;
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
        .shippingPerk{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:12px;
          color:var(--ink);
          font-weight:700;
          letter-spacing:0.04em;
          text-transform:uppercase;
          margin-top:2px;
        }
        .shippingPerk svg{ width:16px; height:16px; flex-shrink:0; }
        .shippingPerk a{
          text-decoration:underline;
          text-underline-offset:3px;
          font-weight:900;
        }

        @media (max-width: 980px){
          .pdp{ grid-template-columns: 1fr; gap:24px; }
          .mainImage{ aspect-ratio: auto; max-height:420px; }
          .mainImage img{ max-height:420px; object-fit:contain; }
          .thumb{ width:60px; height:60px; }
          .pdpTitle{ font-size: clamp(22px, 6vw, 32px); }
          .pdpPrice{ font-size:20px; }
          .pdpDesc{ font-size:13px; }
          .paymentIcons{ flex-wrap:wrap; }
        }
      `}</style>
    </>
  );
}
