import type { Metadata } from "next";
import Link from "next/link";
import { ProductViewer } from "../_components/ProductViewer";
import { PRODUCT_PAGE_CSS } from "../_components/productStyles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4chariots.com";

export const metadata: Metadata = {
  title: "GRATEFUL Tee",
  description:
    "GRATEFUL Tee from FOUR CHARIOTS Core Collection — minimalist scripture apparel, made to order. Heavyweight cotton, built for daily wear.",
  alternates: { canonical: "/shop/grateful" },
  openGraph: {
    title: "GRATEFUL Tee | FOUR CHARIOTS",
    description:
      "Core Collection scripture tee. Minimalist faith-driven apparel, made to order.",
    url: "/shop/grateful",
    images: ["/images/core/grateful/model.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRATEFUL Tee | FOUR CHARIOTS",
    description:
      "Core Collection scripture tee. Minimalist faith-driven apparel, made to order.",
    images: ["/images/core/grateful/model.webp"],
  },
};

const PRODUCT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "GRATEFUL Tee",
  description:
    "GRATEFUL Tee from FOUR CHARIOTS Core Collection — minimalist scripture apparel, made to order. Heavyweight cotton, built for daily wear.",
  image: `${SITE_URL}/images/core/grateful/model.webp`,
  sku: "grateful-core",
  brand: { "@type": "Brand", name: "FOUR CHARIOTS" },
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/shop/grateful`,
    priceCurrency: "USD",
    price: "25.00",
    availability: "https://schema.org/PreOrder",
    seller: { "@type": "Organization", name: "FOUR CHARIOTS" },
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Shop", item: `${SITE_URL}/shop` },
    { "@type": "ListItem", position: 3, name: "GRATEFUL Tee", item: `${SITE_URL}/shop/grateful` },
  ],
};

export default function GratefulPage() {
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
        Free shipping on every drop &mdash; members only.
        <Link href="/membership">Join now</Link>
      </div>

      <div className="pageTitle">
        <h1>GRATEFUL</h1>
        <p>Core Collection. Always available. Built for everyday wear.</p>
      </div>

      <ProductViewer
        productId="grateful-core"
        productName="GRATEFUL Tee"
        altBase="GRATEFUL Tee"
        displayWord="GRATEFUL"
        modelSrc="/images/core/grateful/model.webp"
        scriptureRef="1 Thessalonians 5:18"
        scriptureQuote="Give thanks in all circumstances"
        sizes={["S", "M", "L", "XL", "2XL", "3XL"]}
        colors={[
          {
            name: "Black",
            src: "/images/core/grateful/gratefullblk.webp",
            hex: "#1a1a1a",
            swatch: "/images/blackswatch.webp",
          },
          {
            name: "White",
            src: "/images/core/grateful/gratefulwhite.webp",
            hex: "#f5f0e1",
            swatch: "/images/whiteswatch.webp",
          },
          {
            name: "Red",
            src: "/images/core/grateful/gratefulred.webp",
            hex: "#8b2232",
            swatch: "/images/redswatch.webp",
          },
          {
            name: "Dapple",
            src: "/images/core/grateful/gratefuldap.webp",
            hex: "#555555",
            swatch: "/images/dappleswatch.webp",
            comingSoon: true,
          },
        ]}
      />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: 0 }} />
      </div>

      <section className="craftScroll">
        <div className="craftBlock">
          <img
            src="/images/core/grateful/greatefulcloseup.webp"
            alt="Embroidery close-up"
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div className="craftText">
            <h3>CLEAN EMBROIDERY</h3>
            <p>
              Stitched with care, not excess. Dense enough to hold its shape through everyday wear and repeated washing.
            </p>
          </div>
        </div>

        <div className="craftBlock">
          <img
            src="/images/core/grateful/scripturecloseup.webp"
            alt="Sleeve scripture detail"
            style={{ maxWidth: 442 }}
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div className="craftText">
            <h3>SCRIPTURE ON THE SLEEVE</h3>
            <p>
              1 Thessalonians 5:18 rests along the right sleeve. A quiet detail that carries weight without needing to explain itself.
            </p>
          </div>
        </div>

        <div className="craftBlock">
          <img
            src="/images/closeupsleeve.webp"
            alt="Embroidered patch detail"
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div className="craftText">
            <h3>DETAILS THAT HOLD</h3>
            <p>
              Heavyweight cotton. Embroidered patch. Built for daily wear and made to last beyond the season.
            </p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: PRODUCT_PAGE_CSS }} />
    </>
  );
}
