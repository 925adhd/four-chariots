import type { Metadata } from "next";
import Link from "next/link";
import { ProductViewer } from "../_components/ProductViewer";
import { PRODUCT_PAGE_CSS } from "../_components/productStyles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4chariots.com";

export const metadata: Metadata = {
  title: "FORGIVEN Tee",
  description:
    "FORGIVEN Tee from FOUR CHARIOTS Core Collection — minimalist scripture apparel, made to order. Heavyweight cotton, built for daily wear.",
  alternates: { canonical: "/shop/forgiven" },
  openGraph: {
    title: "FORGIVEN Tee | FOUR CHARIOTS",
    description:
      "Core Collection scripture tee. Minimalist faith-driven apparel, made to order.",
    url: "/shop/forgiven",
    images: ["/images/core/forgiven/model.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORGIVEN Tee | FOUR CHARIOTS",
    description:
      "Core Collection scripture tee. Minimalist faith-driven apparel, made to order.",
    images: ["/images/core/forgiven/model.webp"],
  },
};

const PRODUCT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "FORGIVEN Tee",
  description:
    "FORGIVEN Tee from FOUR CHARIOTS Core Collection — minimalist scripture apparel, made to order. Heavyweight cotton, built for daily wear.",
  image: `${SITE_URL}/images/core/forgiven/model.webp`,
  sku: "forgiven-core",
  brand: { "@type": "Brand", name: "FOUR CHARIOTS" },
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/shop/forgiven`,
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
    { "@type": "ListItem", position: 3, name: "FORGIVEN Tee", item: `${SITE_URL}/shop/forgiven` },
  ],
};

export default function ForgivenPage() {
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
        <h1>FORGIVEN</h1>
        <p>Core Collection. Always available. Built for everyday wear.</p>
      </div>

      <ProductViewer
        elevated
        productId="forgiven-core"
        productName="FORGIVEN Tee"
        altBase="FORGIVEN Tee"
        displayWord="FORGIVEN"
        modelSrc="/images/core/forgiven/model.webp"
        scriptureRef="Psalm 130:4"
        scriptureQuote="But with You there is forgiveness."
        sizes={["S", "M", "L", "XL", "2XL", "3XL"]}
        colors={[
          {
            name: "Black",
            src: "/images/core/forgiven/forgivenblk.webp",
            hex: "#1a1a1a",
            swatch: "/images/blackswatch.webp",
          },
          {
            name: "White",
            src: "/images/core/forgiven/forgivenwhite.webp",
            hex: "#f5f0e1",
            swatch: "/images/whiteswatch.webp",
          },
          {
            name: "Red",
            src: "/images/core/forgiven/forgivenred.webp",
            hex: "#8b2232",
            swatch: "/images/redswatch.webp",
          },
          {
            name: "Dapple",
            src: "/images/core/forgiven/forgivendap.webp",
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
            src="/images/core/forgiven/forgivencloseup.webp"
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
            src="/images/core/forgiven/scripturecloseup.webp"
            alt="Sleeve scripture detail"
            style={{ maxWidth: 442 }}
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div className="craftText">
            <h3>SCRIPTURE ON THE SLEEVE</h3>
            <p>
              Psalm 130:4 rests along the right sleeve. A quiet detail that carries weight without needing to explain itself.
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
