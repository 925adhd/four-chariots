import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey",
};

// In-memory cache (persists while the edge function instance is warm)
let cachedListResponse: string | null = null;
let listCacheTimestamp = 0;
const productCache = new Map<string, { body: string; ts: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const productId = url.searchParams.get("id");
    const now = Date.now();

    const PRINTIFY_API_KEY = Deno.env.get("PRINTIFY_API_KEY");
    const PRINTIFY_SHOP_ID = Deno.env.get("PRINTIFY_SHOP_ID");

    if (!PRINTIFY_API_KEY || !PRINTIFY_SHOP_ID) {
      throw new Error("Missing Printify credentials in environment");
    }

    // Single product fetch
    if (productId) {
      const cached = productCache.get(productId);
      if (cached && (now - cached.ts) < CACHE_TTL) {
        return new Response(cached.body, {
          headers: { ...corsHeaders, "Content-Type": "application/json", "X-Cache": "HIT" },
        });
      }

      const res = await fetch(
        `https://api.printify.com/v1/shops/${PRINTIFY_SHOP_ID}/products/${productId}.json`,
        {
          headers: {
            Authorization: `Bearer ${PRINTIFY_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Printify API error: ${res.status}`);
      }

      const p = await res.json();

      const product = {
        id: p.id,
        title: p.title,
        description: p.description,
        images: p.images.map((img: any) => ({ src: img.src, variant_ids: img.variant_ids, is_default: img.is_default })),
        variants: p.variants.map((v: any) => ({
          id: v.id,
          title: v.title,
          price: v.price,
          is_enabled: v.is_enabled,
          options: v.options || {},
        })),
        options: p.options || [],
        tags: p.tags,
      };

      const body = JSON.stringify({ product });
      productCache.set(productId, { body, ts: now });

      return new Response(body, {
        headers: { ...corsHeaders, "Content-Type": "application/json", "X-Cache": "MISS" },
      });
    }

    // List all products (existing behavior)
    if (cachedListResponse && (now - listCacheTimestamp) < CACHE_TTL) {
      return new Response(cachedListResponse, {
        headers: { ...corsHeaders, "Content-Type": "application/json", "X-Cache": "HIT" },
      });
    }

    const res = await fetch(
      `https://api.printify.com/v1/shops/${PRINTIFY_SHOP_ID}/products.json`,
      {
        headers: {
          Authorization: `Bearer ${PRINTIFY_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Printify API error: ${res.status}`);
    }

    const data = await res.json();

    const products = data.data.map((p: any) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      images: p.images.map((img: any) => img.src),
      variants: p.variants.map((v: any) => ({
        id: v.id,
        title: v.title,
        price: v.price,
        is_enabled: v.is_enabled,
      })),
      tags: p.tags,
    }));

    const body = JSON.stringify({ products });
    cachedListResponse = body;
    listCacheTimestamp = now;

    return new Response(body, {
      headers: { ...corsHeaders, "Content-Type": "application/json", "X-Cache": "MISS" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
