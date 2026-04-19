import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4chariots.com";

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FOUR CHARIOTS",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: "support@4chariots.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Leitchfield",
    addressRegion: "KY",
    addressCountry: "US",
  },
};

const STORE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "FOUR CHARIOTS",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  email: "support@4chariots.com",
  description:
    "FOUR CHARIOTS is a faith-driven apparel brand based in Leitchfield, KY. Minimalist scripture tees and gear made to order.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Leitchfield",
    addressRegion: "KY",
    addressCountry: "US",
  },
  priceRange: "$$",
  knowsAbout: [
    "faith-driven apparel",
    "scripture tees",
    "Christian streetwear",
    "minimalist faith apparel",
    "made-to-order clothing",
  ],
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STORE_JSON_LD) }}
      />
      <div className="wrap" id="top">
        <TopBar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
