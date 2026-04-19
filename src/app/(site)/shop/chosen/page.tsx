import type { Metadata } from "next";
import Link from "next/link";
import { ProductViewer } from "../_components/ProductViewer";
import { PRODUCT_PAGE_CSS } from "../_components/productStyles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4chariots.com";

export const metadata: Metadata = {
  title: "CHOSEN Tee",
  description:
    "CHOSEN Tee from FOUR CHARIOTS Core Collection — minimalist faith-driven apparel, made to order. Heavyweight cotton, built for daily wear.",
  alternates: { canonical: "/shop/chosen" },
  openGraph: {
    title: "CHOSEN Tee | FOUR CHARIOTS",
    description:
      "Core Collection scripture tee. Minimalist faith-driven apparel, made to order.",
    url: "/shop/chosen",
    images: ["/images/core/chosen/model.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHOSEN Tee | FOUR CHARIOTS",
    description:
      "Core Collection scripture tee. Minimalist faith-driven apparel, made to order.",
    images: ["/images/core/chosen/model.webp"],
  },
};

const PRODUCT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "CHOSEN Tee",
  description:
    "CHOSEN Tee from FOUR CHARIOTS Core Collection — minimalist faith-driven apparel, made to order. Heavyweight cotton, built for daily wear.",
  image: `${SITE_URL}/images/core/chosen/model.webp`,
  sku: "chosen-core",
  brand: { "@type": "Brand", name: "FOUR CHARIOTS" },
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/shop/chosen`,
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
    { "@type": "ListItem", position: 3, name: "CHOSEN Tee", item: `${SITE_URL}/shop/chosen` },
  ],
};

export default function ChosenPage() {
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
        <h1>CHOSEN</h1>
        <p>Core Collection. Always available. Built for everyday wear.</p>
      </div>

      <ProductViewer
        productId="chosen-core"
        productName="CHOSEN Tee"
        altBase="CHOSEN Tee"
        displayWord="CHOSEN"
        modelSrc="/images/core/chosen/model.webp"
        scriptureRef="John 15:16"
        scriptureQuote="You did not choose Me, but I chose you."
        sizes={["S", "M", "L", "XL", "2XL", "3XL"]}
        colors={[
          {
            name: "Black",
            src: "/images/core/chosen/cosenblk.webp",
            hex: "#1a1a1a",
            swatch: "/images/blackswatch.webp",
          },
          {
            name: "White",
            src: "/images/core/chosen/chosenwhite.webp",
            hex: "#f5f0e1",
            swatch: "/images/whiteswatch.webp",
          },
          {
            name: "Red",
            src: "/images/core/chosen/chosenred.webp",
            hex: "#8b2232",
            swatch: "/images/redswatch.webp",
          },
          {
            name: "Dapple",
            src: "/images/core/chosen/chosendap.webp",
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
            src="/images/core/chosen/choesencloseup.webp"
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
            src="/images/core/chosen/scripturecloseup.webp"
            alt="Sleeve scripture detail"
            style={{ maxWidth: 442 }}
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div className="craftText">
            <h3>SCRIPTURE ON THE SLEEVE</h3>
            <p>
              John 15:16 rests along the right sleeve. A quiet detail that carries weight without needing to explain itself.
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
