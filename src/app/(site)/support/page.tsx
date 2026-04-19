import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "FAQs, shipping info, returns, sizing, and contact for FOUR CHARIOTS \u2014 faith-driven apparel made to order in Leitchfield, KY.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support | FOUR CHARIOTS",
    description:
      "FAQs, shipping info, returns, sizing, and contact for FOUR CHARIOTS.",
    url: "/support",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support | FOUR CHARIOTS",
    description:
      "FAQs, shipping info, returns, sizing, and contact for FOUR CHARIOTS.",
    images: ["/images/logo.png"],
  },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I place an order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Browse available pieces through the Shop or current Drop pages, select your color and size, and check out securely through Stripe. You'll receive a confirmation email once your order is placed.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'made to order' mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every piece is produced specifically for you after you order. Nothing sits in a warehouse. This means less waste and a product made with intention, but production takes a few extra days compared to pre-stocked items.",
      },
    },
    {
      "@type": "Question",
      name: "Is checkout secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All payments are processed through Stripe, one of the most trusted payment platforms in the world. We never see or store your card details.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change or cancel my order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because items are made to order, we have a short window to make changes. Reach out within 24 hours of placing your order and we'll do our best to help. After production starts, changes aren't possible.",
      },
    },
    {
      "@type": "Question",
      name: "Where do you ship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We ship worldwide. Each piece is crafted per order through our trusted production partners to maintain consistency across every release. Your order ships from the facility closest to you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does shipping take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production typically takes 2-5 business days. After that, shipping is usually 3-7 business days domestically (US) and 7-14 business days internationally. You'll receive a tracking number once your order ships.",
      },
    },
    {
      "@type": "Question",
      name: "How much does shipping cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shipping costs are calculated at checkout for individual purchases. Members receive free shipping on every drop.",
      },
    },
    {
      "@type": "Question",
      name: "What's your return policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because every piece is made to order, we don't accept returns for change of mind. However, if your item arrives damaged, defective, or incorrect, we'll make it right. Reach out within 14 days of delivery with photos and we'll send a replacement or issue a refund.",
      },
    },
    {
      "@type": "Question",
      name: "My item arrived damaged. What do I do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email us with your order number and photos of the damage. We'll get a replacement to you as quickly as possible at no extra cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I exchange for a different size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can't do direct exchanges on made-to-order items, but if you're unsure about sizing, check the size guide on each product page before ordering. If something doesn't fit, reach out and we'll work with you on a solution.",
      },
    },
    {
      "@type": "Question",
      name: "How do drops work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We release one new piece per month. Each drop features a single word rooted in scripture, designed with intention. Once a drop ends, that design is gone. We don't restock.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know when a new drop is coming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best way is to sign up for our newsletter on the about page. We'll send you a heads up before each release so you never miss one.",
      },
    },
    {
      "@type": "Question",
      name: "Are all pieces limited drops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Core Collection remains available year-round. Drops are limited monthly releases that move into the archive once they end. Core pieces can be ordered anytime.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy past drops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once a drop is gone, it's gone. That's by design. Each piece is tied to a moment. If you missed one, the next drop is never far away.",
      },
    },
    {
      "@type": "Question",
      name: "What is the membership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The membership reserves your seat for 12 guaranteed drops inside the reserved circle. No waiting, no sell-outs. Your pieces ship automatically each release with member-first access.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my membership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Membership secures a reserved seat for 12 drops and cannot be canceled or prorated once the circle begins. All 12 drops ship automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What materials are your products made from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tees are made from high-quality cotton blends chosen for comfort, durability, and print quality. Specific material details are listed on each product page.",
      },
    },
    {
      "@type": "Question",
      name: "How should I care for my piece?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Machine wash cold, inside out. Tumble dry low or hang dry. Avoid ironing directly on the print. Following these steps keeps the design sharp and the fabric lasting longer.",
      },
    },
    {
      "@type": "Question",
      name: "Why are Four Chariots pieces priced differently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every piece is built to last. We use heavyweight cotton, precision embroidery, and individually numbered drops. Combined with intentional limited releases and made-to-order production, each item carries a level of craft and exclusivity that sets it apart from standard retail.",
      },
    },
    {
      "@type": "Question",
      name: "What does the scripture reference on the sleeve mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each drop carries a connected scripture, chosen to reflect the word on the front. It's embroidered quietly along the right sleeve as a mark of intention. Not a loud statement. A quiet reminder you carry with you.",
      },
    },
  ],
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
      name: "Support",
      item: "https://4chariots.com/support",
    },
  ],
};

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />

      <div className="divider" />

      <div className="pageHero fade-up">
        <h1>
          WE&apos;VE
          <br />
          GOT YOU.
        </h1>
        <p className="intro">
          Everything you need to know about ordering, shipping, returns, and how
          FOUR CHARIOTS works. If you can&apos;t find what you&apos;re looking
          for, reach out directly.
        </p>
      </div>

      {/* Ordering */}
      <div className="faqGroup fade-up" style={{ transitionDelay: ".1s" }}>
        <h2>Ordering</h2>
        <div className="faqList">
          <details>
            <summary>How do I place an order?</summary>
            <div className="answer">
              Browse available pieces through the <Link href="/shop">Shop</Link>{" "}
              or current <Link href="/drop">Drop</Link> pages, select your color
              and size, and check out securely through Stripe. You&apos;ll
              receive a confirmation email once your order is placed.
            </div>
          </details>
          <details>
            <summary>What does &quot;made to order&quot; mean?</summary>
            <div className="answer">
              Every piece is produced specifically for you after you order.
              Nothing sits in a warehouse. This means less waste and a product
              made with intention, but it also means production takes a few
              extra days compared to pre-stocked items.
            </div>
          </details>
          <details>
            <summary>Is checkout secure?</summary>
            <div className="answer">
              Yes. All payments are processed through <strong>Stripe</strong>,
              one of the most trusted payment platforms in the world. We never
              see or store your card details.
            </div>
          </details>
          <details>
            <summary>Can I change or cancel my order?</summary>
            <div className="answer">
              Because items are made to order, we have a short window to make
              changes. Reach out within 24 hours of placing your order and
              we&apos;ll do our best to help. After production starts, changes
              aren&apos;t possible.
            </div>
          </details>
        </div>
      </div>

      {/* Shipping */}
      <div className="faqGroup fade-up" style={{ transitionDelay: ".15s" }}>
        <h2>Shipping</h2>
        <div className="faqList">
          <details>
            <summary>Where do you ship?</summary>
            <div className="answer">
              We ship worldwide. Each piece is crafted per order through our
              trusted production partners to maintain consistency across every
              release. Your order ships from the facility closest to you.
            </div>
          </details>
          <details>
            <summary>How long does shipping take?</summary>
            <div className="answer">
              Production typically takes 2-5 business days. After that, shipping
              is usually 3-7 business days domestically (US) and 7-14 business
              days internationally. You&apos;ll receive a tracking number once
              your order ships.
            </div>
          </details>
          <details>
            <summary>How much does shipping cost?</summary>
            <div className="answer">
              Shipping costs are calculated at checkout for individual
              purchases. Members receive free shipping on every drop.
            </div>
          </details>
        </div>
      </div>

      {/* Returns */}
      <div className="faqGroup fade-up" style={{ transitionDelay: ".2s" }}>
        <h2>Returns &amp; Exchanges</h2>
        <div className="faqList">
          <details>
            <summary>What&apos;s your return policy?</summary>
            <div className="answer">
              Because every piece is made to order, we don&apos;t accept returns
              for change of mind. However, if your item arrives damaged,
              defective, or incorrect, we&apos;ll make it right. Reach out
              within 14 days of delivery with photos and we&apos;ll send a
              replacement or issue a refund.
            </div>
          </details>
          <details>
            <summary>My item arrived damaged. What do I do?</summary>
            <div className="answer">
              We&apos;re sorry about that. Email us with your order number and
              photos of the damage. We&apos;ll get a replacement to you as
              quickly as possible at no extra cost.
            </div>
          </details>
          <details>
            <summary>Can I exchange for a different size?</summary>
            <div className="answer">
              We can&apos;t do direct exchanges on made-to-order items, but if
              you&apos;re unsure about sizing, check the size guide on each
              product page before ordering. If something doesn&apos;t fit, reach
              out and we&apos;ll work with you on a solution.
            </div>
          </details>
        </div>
      </div>

      {/* The Drops */}
      <div className="faqGroup fade-up" style={{ transitionDelay: ".1s" }}>
        <h2>The Drops</h2>
        <div className="faqList">
          <details>
            <summary>How do drops work?</summary>
            <div className="answer">
              We release one new piece per month. Each drop features a single
              word rooted in scripture, designed with intention. Once a drop
              ends, that design is gone. We don&apos;t restock.
            </div>
          </details>
          <details>
            <summary>How do I know when a new drop is coming?</summary>
            <div className="answer">
              The best way is to sign up for our newsletter on the{" "}
              <Link href="/about">about page</Link>. We&apos;ll send you a heads
              up before each release so you never miss one.
            </div>
          </details>
          <details>
            <summary>Are all pieces limited drops?</summary>
            <div className="answer">
              No. The Core Collection remains available year-round. Drops are
              limited monthly releases that move into the archive once they
              end. Core pieces can be ordered anytime.
            </div>
          </details>
          <details>
            <summary>Can I buy past drops?</summary>
            <div className="answer">
              Once a drop is gone, it&apos;s gone. That&apos;s by design. Each
              piece is tied to a moment. If you missed one, the next drop is
              never far away.
            </div>
          </details>
        </div>
      </div>

      {/* Membership */}
      <div className="faqGroup fade-up" style={{ transitionDelay: ".15s" }}>
        <h2>Membership</h2>
        <div className="faqList">
          <details>
            <summary>What is the membership?</summary>
            <div className="answer">
              The membership reserves your seat for 12 guaranteed drops inside
              the reserved circle. No waiting, no sell-outs. Your pieces ship
              automatically each release with member-first access.{" "}
              <Link href="/membership">Learn more here</Link>.
            </div>
          </details>
          <details>
            <summary>Can I cancel my membership?</summary>
            <div className="answer">
              No. Membership secures a reserved seat for 12 drops and cannot be
              canceled or prorated once the circle begins. All 12 drops ship
              automatically.
              <br />
              <br />
              If a particular word isn&apos;t for you, many members choose to
              gift their piece forward. Each design is individually numbered and
              carries meaning whether you wear it or pass it on.
            </div>
          </details>
        </div>
      </div>

      {/* Product & Care */}
      <div className="faqGroup fade-up" style={{ transitionDelay: ".2s" }}>
        <h2>Product &amp; Care</h2>
        <div className="faqList">
          <details>
            <summary>What materials are your products made from?</summary>
            <div className="answer">
              Our tees are made from high-quality cotton blends chosen for
              comfort, durability, and print quality. Specific material details
              are listed on each product page.
            </div>
          </details>
          <details>
            <summary>How should I care for my piece?</summary>
            <div className="answer">
              Machine wash cold, inside out. Tumble dry low or hang dry. Avoid
              ironing directly on the print. Following these steps keeps the
              design sharp and the fabric lasting longer.
            </div>
          </details>
          <details>
            <summary>Why are Four Chariots pieces priced differently?</summary>
            <div className="answer">
              Every piece is built to last. We use heavyweight cotton, precision
              embroidery, and individually numbered drops. Combined with
              intentional limited releases and made-to-order production, each
              item carries a level of craft and exclusivity that sets it apart
              from standard retail.
            </div>
          </details>
          <details>
            <summary>
              What does the scripture reference on the sleeve mean?
            </summary>
            <div className="answer">
              Each drop carries a connected scripture, chosen to reflect the
              word on the front. It&apos;s embroidered quietly along the right
              sleeve as a mark of intention. Not a loud statement. A quiet
              reminder you carry with you.
            </div>
          </details>
        </div>
      </div>

      {/* Contact */}
      <div className="contactCard fade-up" style={{ transitionDelay: ".1s" }}>
        <h3>Still Have Questions?</h3>
        <p>We typically respond within 24 hours. Don&apos;t hesitate to reach out.</p>
        <div className="contactMethods">
          <a className="contactMethod" href="mailto:support@4chariots.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
            <span>support@4chariots.com</span>
          </a>
        </div>
      </div>

      <style>{`
        [id]{ scroll-margin-top:24px; }

        /* page header */
        .pageHero{
          padding: 50px 0 40px;
          max-width:720px;
        }
        .pageHero h1{
          margin:0;
          font-size: clamp(32px, 4vw, 52px);
          line-height:0.98;
          letter-spacing:-0.04em;
          text-transform:uppercase;
          font-weight:950;
          color:var(--ink);
        }
        .pageHero .intro{
          margin:18px 0 0;
          font-size:17px;
          color:var(--muted);
          line-height:1.6;
          max-width:58ch;
        }

        /* FAQ sections */
        .faqGroup{
          padding: 30px 0;
          border-top:1px solid var(--line);
        }
        .faqGroup h2{
          margin:0 0 16px;
          font-size:15px;
          text-transform:uppercase;
          letter-spacing:0.12em;
          font-weight:950;
          color:var(--ink);
        }
        .faqList{
          display:flex;
          flex-direction:column;
          gap:0;
        }
        details{
          border-bottom:1px solid var(--line);
        }
        details:last-child{
          border-bottom:none;
        }
        summary{
          padding:14px 0;
          font-size:14px;
          font-weight:700;
          color:var(--text);
          cursor:pointer;
          list-style:none;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          user-select:none;
        }
        summary::-webkit-details-marker{ display:none; }
        summary::after{
          content:"+";
          font-size:18px;
          font-weight:400;
          color:var(--muted);
          flex-shrink:0;
          transition: transform .2s ease;
        }
        details[open] summary::after{
          content:"\\2212";
        }
        details .answer{
          padding:0 0 16px;
          color:var(--muted);
          font-size:14px;
          line-height:1.65;
          max-width:64ch;
        }
        details .answer a{
          color:var(--ink);
          text-decoration:underline;
          text-underline-offset:2px;
        }
        details .answer a:hover{
          opacity:.7;
        }

        /* contact card */
        .contactCard{
          margin-top:40px;
          padding:30px;
          border:1px solid var(--line);
          background:var(--soft);
          display:flex;
          flex-direction:column;
          gap:12px;
        }
        .contactCard h3{
          margin:0;
          font-size:16px;
          text-transform:uppercase;
          letter-spacing:0.08em;
          font-weight:950;
          color:var(--ink);
        }
        .contactCard p{
          margin:0;
          color:var(--muted);
          font-size:14px;
          line-height:1.6;
        }
        .contactCard a{
          color:var(--ink);
          text-decoration:underline;
          text-underline-offset:2px;
        }
        .contactCard a:hover{ opacity:.7; }
        .contactMethods{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
          margin-top:4px;
        }
        .contactMethod{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:13px;
          color:var(--muted);
        }
        .contactMethod svg{
          width:18px;
          height:18px;
          color:var(--ink);
          flex-shrink:0;
        }

        @media (max-width: 980px){
          .contactCard{ padding:20px; }
        }
      `}</style>
    </>
  );
}
