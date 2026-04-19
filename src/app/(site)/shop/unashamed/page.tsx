import type { Metadata } from "next";
import Link from "next/link";
import { ProductViewer } from "../_components/ProductViewer";
import { PRODUCT_PAGE_CSS } from "../_components/productStyles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4chariots.com";

export const metadata: Metadata = {
  title: "UNASHAMED Tee",
  description:
    "UNASHAMED Tee from FOUR CHARIOTS Core Collection — minimalist scripture apparel, made to order. Heavyweight cotton, built for daily wear.",
  alternates: { canonical: "/shop/unashamed" },
  openGraph: {
    title: "UNASHAMED Tee | FOUR CHARIOTS",
    description:
      "Core Collection scripture tee. Minimalist faith-driven apparel, made to order.",
    url: "/shop/unashamed",
    images: ["/images/core/unashamed/model.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNASHAMED Tee | FOUR CHARIOTS",
    description:
      "Core Collection scripture tee. Minimalist faith-driven apparel, made to order.",
    images: ["/images/core/unashamed/model.webp"],
  },
};

const PRODUCT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "UNASHAMED Tee",
  description:
    "UNASHAMED Tee from FOUR CHARIOTS Core Collection — minimalist scripture apparel, made to order. Heavyweight cotton, built for daily wear.",
  image: `${SITE_URL}/images/core/unashamed/model.webp`,
  sku: "unashamed-core",
  brand: { "@type": "Brand", name: "FOUR CHARIOTS" },
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/shop/unashamed`,
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
    { "@type": "ListItem", position: 3, name: "UNASHAMED Tee", item: `${SITE_URL}/shop/unashamed` },
  ],
};

export default function UnashamedPage() {
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
        <h1>UNASHAMED</h1>
        <p>Core Collection. Always available. Built for everyday wear.</p>
      </div>

      <ProductViewer
        productId="unashamed-core"
        productName="UNASHAMED Tee"
        altBase="UNASHAMED Tee"
        displayWord="UNASHAMED"
        modelSrc="/images/core/unashamed/model.webp"
        scriptureRef="Romans 1:16"
        scriptureQuote="For I am not ashamed of the gospel."
        sizes={["S", "M", "L", "XL", "2XL", "3XL"]}
        colors={[
          {
            name: "Black",
            src: "/images/core/unashamed/unashamedblk.webp",
            hex: "#1a1a1a",
            swatch: "/images/blackswatch.webp",
          },
          {
            name: "White",
            src: "/images/core/unashamed/unashamedwhite.webp",
            hex: "#f5f0e1",
            swatch: "/images/whiteswatch.webp",
          },
          {
            name: "Red",
            src: "/images/core/unashamed/unashamedred.webp",
            hex: "#8b2232",
            swatch: "/images/redswatch.webp",
          },
          {
            name: "Dapple",
            src: "/images/core/unashamed/unashameddap.webp",
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
            src="/images/core/unashamed/unashamedcloseup.webp"
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
            src="/images/core/unashamed/scripturecloseup.webp"
            alt="Sleeve scripture detail"
            style={{ maxWidth: 442 }}
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div className="craftText">
            <h3>SCRIPTURE ON THE SLEEVE</h3>
            <p>
              Romans 1:16 rests along the right sleeve. A quiet detail that carries weight without needing to explain itself.
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
