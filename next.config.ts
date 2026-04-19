import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/shop.html", destination: "/shop", permanent: true },
      { source: "/drop.html", destination: "/drop", permanent: true },
      { source: "/membership.html", destination: "/membership", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/support.html", destination: "/support", permanent: true },
      { source: "/chosen.html", destination: "/shop/chosen", permanent: true },
      { source: "/forgiven.html", destination: "/shop/forgiven", permanent: true },
      { source: "/grateful.html", destination: "/shop/grateful", permanent: true },
      { source: "/unashamed.html", destination: "/shop/unashamed", permanent: true },
      { source: "/mug.html", destination: "/shop/mug", permanent: true },
      { source: "/sticker.html", destination: "/shop/sticker", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
