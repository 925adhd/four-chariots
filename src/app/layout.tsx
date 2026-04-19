import type { Metadata, Viewport } from "next";
import { NotifyProvider } from "@/components/NotifyModal";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4chariots.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FOUR CHARIOTS",
    template: "%s | FOUR CHARIOTS",
  },
  description:
    "FOUR CHARIOTS — faith-driven apparel and scripture tees made to order. Minimalist pieces with meaning, shipped nationwide from Leitchfield, KY.",
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='15' fill='%230b1a2a'/><text x='16' y='22' text-anchor='middle' font-size='18' font-weight='900' font-family='system-ui,sans-serif' fill='%23ffffff'>4C</text></svg>",
        type: "image/svg+xml",
      },
      { url: "/images/logo.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/images/logo.png",
  },
  openGraph: {
    siteName: "FOUR CHARIOTS",
    type: "website",
    url: SITE_URL,
    title: "FOUR CHARIOTS — Faith-Driven Apparel",
    description:
      "Minimalist scripture tees and gear made with intention. Shipped nationwide from Leitchfield, KY.",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FOUR CHARIOTS — Faith-Driven Apparel",
    description:
      "Minimalist scripture tees and gear made with intention. Shipped nationwide from Leitchfield, KY.",
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NotifyProvider>
          <SkipLink />
          {children}
        </NotifyProvider>
      </body>
    </html>
  );
}
