import type { Metadata } from "next";
import Link from "next/link";
import { NotifyButton } from "@/components/NotifyButton";

export const metadata: Metadata = {
  title: { absolute: "Membership — FOUR CHARIOTS" },
  description:
    "The Circle — FOUR CHARIOTS membership. Reserved access to 12 monthly drops, guaranteed inventory, free shipping. A year of faith-driven releases.",
  alternates: { canonical: "/membership" },
  openGraph: {
    siteName: "FOUR CHARIOTS",
    type: "website",
    url: "/membership",
    title: "Membership — FOUR CHARIOTS",
    description:
      "Reserved access to 12 monthly drops, guaranteed inventory, free shipping.",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership — FOUR CHARIOTS",
    description:
      "Reserved access to 12 monthly drops, guaranteed inventory, free shipping.",
    images: ["/images/logo.png"],
  },
};

export default function MembershipPage() {
  return (
    <>
      <div className="divider" />

      <section className="hero" id="join">
        <div>
          <p className="kicker">Membership</p>
          <h1 className="headline">Never miss a drop.</h1>
          <p className="subhead" style={{ fontSize: 14 }}>
            Limited to 12 members. Each circle includes 12 guaranteed drops.
            When a circle is complete, seats reopen as space becomes available.
          </p>
          <p className="subhead">
            Reserved inventory. Zero sell-outs. Members receive each release
            automatically as part of a continuous 12-drop series.
          </p>

          <div className="grid">
            <div
              className="mini"
              style={{
                background: "#f5f4f0",
                borderColor: "rgba(11,26,42,.12)",
              }}
            >
              <img
                className="miniIcon"
                src="/images/guaranteed-inventory-icon.webp"
                alt=""
                width={900}
                height={900}
                loading="lazy"
              />
              <div className="miniText">
                <h3>12 Guaranteed Drops</h3>
                <p>
                  One release each month. Reserved inventory before public
                  access.
                </p>
              </div>
            </div>
            <div className="mini">
              <img
                className="miniIcon"
                src="/images/automatic-delivery-icon.webp"
                alt=""
                width={900}
                height={900}
                loading="lazy"
              />
              <div className="miniText">
                <h3>Automatic Delivery</h3>
                <p>
                  Ships automatically each month. No checkout required. Free
                  delivery included.
                </p>
              </div>
            </div>
            <div className="mini">
              <img
                className="miniIcon"
                src="/images/members-vote-icon.webp"
                alt=""
                width={900}
                height={900}
                loading="lazy"
              />
              <div className="miniText">
                <h3>Member Voting</h3>
                <p>Members vote on future word drops.</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="card">
          <p
            style={{
              margin: "0 0 4px",
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Reserved Access Membership
          </p>
          <div className="priceRow">
            <p className="price">
              $480{" "}
              <span
                style={{
                  fontSize: "0.45em",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  opacity: 0.55,
                  marginLeft: 6,
                }}
              >
                12-Drop Reserved Circle
              </span>
            </p>
          </div>

          <p
            style={{
              margin: "0 0 14px",
              color: "var(--muted)",
              fontSize: 12,
              lineHeight: 1.45,
            }}
          >
            This membership secures 12 guaranteed drops inside the reserved
            circle. Releases move forward each month as part of a continuous
            series.
          </p>

          <div className="contrast" aria-label="Membership vs public drop">
            <div className="contrastRow">
              <div className="contrastLabel">❌ Public</div>
              <p className="contrastText">
                Access opens after the member window. Availability depends on
                what remains.
              </p>
            </div>
            <div className="contrastRow">
              <div className="contrastLabel">✅ Members</div>
              <p className="contrastText">
                Enter first. Reserved access inside the 66-piece release.
              </p>
            </div>
          </div>

          <NotifyButton
            className="btn primary"
            id="memberCheckoutBtn"
            style={{ marginTop: 18 }}
            productId="fc-membership"
            productName="Membership — The Circle"
            variant=""
          >
            Notify me when seats open
          </NotifyButton>
          <Link className="btn" href="/shop" style={{ marginLeft: 10 }}>
            Shop single drop
          </Link>
          <div
            id="memberError"
            style={{
              fontSize: 12,
              color: "#8b2020",
              marginTop: 8,
              display: "none",
            }}
          />

          <ul className="bullets">
            <li>Member-first access to every release</li>
            <li>First drop ships immediately when you join</li>
            <li>Free delivery included on every drop</li>
            <li>12 guaranteed releases inside the circle</li>
          </ul>

          <p
            style={{
              margin: "12px 0 0",
              color: "var(--muted)",
              fontSize: 11,
              lineHeight: 1.45,
            }}
          >
            Seats are limited to 12 members. When a circle completes, previous
            members receive a short re-entry window before invitations move to
            the waitlist in order. If a word isn&apos;t for you, many members
            choose to gift their piece forward.
          </p>
        </aside>
      </section>

      <section className="section" id="faq">
        <p className="sectionTitle">FAQ</p>

        <details>
          <summary>How do sizing and color selection work?</summary>
          <p>
            After joining, you&apos;ll choose your size and color for the first
            drop. Before each new release, members receive a preview window to
            confirm or update their selection. If no changes are made, we ship
            the last confirmed size and color automatically.
          </p>
        </details>

        <details>
          <summary>What if a drop sells out?</summary>
          <p>
            Members enter first through a reserved access window before the
            public release opens. Each monthly release is still limited to 66
            pieces. Public availability depends on what remains after the
            member window closes.
          </p>
        </details>

        <details>
          <summary>Can I cancel my membership?</summary>
          <p>
            Membership secures a reserved seat for 12 drops and cannot be
            canceled or prorated once the circle begins. All 12 drops ship
            automatically. If a word isn&apos;t for you, many members choose
            to gift their piece forward.
          </p>
        </details>

        <details>
          <summary>When do drops ship?</summary>
          <p>
            Each drop moves through a release window. Members enter first,
            then pieces are made to order, fulfilled, and delivered during
            that same window.
          </p>
        </details>

        <details>
          <summary>Do I need to create an account?</summary>
          <p>
            Not required. You&apos;ll receive email confirmations, and you can
            manage preferences through support if needed.
          </p>
        </details>

        <details>
          <summary>What if a drop word isn&apos;t for me?</summary>
          <p>
            Every drop ships automatically as part of your 12-drop circle. If
            a particular word isn&apos;t for you, many members choose to gift
            their piece forward. Each design is individually numbered and
            tied to a moment — it carries meaning whether you wear it or pass
            it on.
          </p>
        </details>

        <details>
          <summary>When does my circle begin?</summary>
          <p>
            Your membership starts on the date you join and covers the next
            12 monthly releases from that point forward. Membership does not
            renew automatically. When your circle is complete, new openings
            return as space becomes available.
          </p>
        </details>

        <details>
          <summary>What happens after my 12 drops are complete?</summary>
          <p>
            Once your circle is complete, your seat may reopen. Previous
            members receive a private invitation window before openings move
            to the waitlist.
          </p>
        </details>

        <details>
          <summary>How does the waitlist work?</summary>
          <p>
            When seats open, invitations are sent in order of the waitlist.
            If a spot is not claimed within the invitation window, it moves
            to the next person.
          </p>
        </details>

        <details>
          <summary>Do members influence future designs?</summary>
          <p>Yes. Members vote on upcoming word drops through private polls.</p>
        </details>
      </section>

      <style>{`
        .hero{
          padding: 28px 0 14px;
          display:grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 28px;
          align-items:start;
        }
        .headline{
          margin:0;
          font-size: clamp(34px, 4.8vw, 56px);
          line-height:0.95;
          letter-spacing:-0.045em;
          text-transform:uppercase;
          font-weight:950;
          color:var(--ink);
        }
        .subhead{
          margin:16px 0 0;
          font-size:16px;
          max-width:60ch;
          color:var(--muted);
          line-height:1.55;
        }

        .card{
          border:1px solid rgba(0,0,0,.08);
          background:#fbfbfb;
          padding: 24px 18px 18px;
          box-shadow: 0 1px 4px rgba(0,0,0,.04);
        }
        .cardTitle{
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 900;
          margin:0 0 10px;
        }
        .priceRow{
          display:flex;
          align-items:baseline;
          justify-content:space-between;
          gap:12px;
          padding: 10px 0 12px;
          border-top:none;
          border-bottom:1px solid var(--line);
          margin: 10px 0 10px;
        }
        .price{
          font-size: 28px;
          font-weight: 950;
          letter-spacing:-0.03em;
          color: var(--ink);
          margin:0;
        }
        .priceNote{
          margin:0;
          color:var(--muted);
          font-size:12px;
          line-height:1.4;
          text-align:right;
        }

        .valueLine{
          margin: 0 0 14px;
          color: var(--ink);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.85;
        }

        .contrast{
          border:1px solid rgba(0,0,0,.08);
          background:#fff;
          padding: 12px 12px;
          margin: 10px 0 18px;
        }
        .contrastRow{
          display:flex;
          gap:10px;
          align-items:flex-start;
          justify-content:space-between;
          padding: 8px 0;
          border-top:1px solid var(--line);
        }
        .contrastRow:first-child{
          border-top:none;
          padding-top:0;
        }
        .contrastLabel{
          font-size:11px;
          font-weight:950;
          letter-spacing:0.12em;
          text-transform:uppercase;
          color:var(--muted);
          white-space:nowrap;
          min-width:110px;
        }
        .contrastText{
          margin:0;
          color:var(--text);
          font-size:12px;
          line-height:1.45;
          text-align:right;
          max-width:40ch;
        }

        .bullets{
          margin: 12px 0 0;
          padding-left: 18px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.5;
        }
        .bullets li{ margin: 6px 0; }

        .grid{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 28px;
        }
        .mini{
          border:1px solid var(--line);
          padding: 14px;
          background: #fff;
          display:flex;
          gap:14px;
          align-items:flex-start;
        }
        .mini img.miniIcon{
          width:96px;
          height:96px;
          object-fit:contain;
          flex-shrink:0;
          opacity:.85;
        }
        .miniText{ flex:1; }
        .mini h3{
          margin:0;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 950;
          color: var(--ink);
        }
        .mini p{
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.45;
        }

        .section{
          padding: 22px 0 0;
        }
        .sectionTitle{
          margin:0;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 950;
        }

        details{
          border-top: 1px solid var(--line);
          padding-top: 12px;
          margin-top: 12px;
        }
        summary{
          list-style:none;
          cursor:pointer;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-size: 12px;
          color: var(--ink);
          outline:none;
        }
        summary::-webkit-details-marker{ display:none; }
        details p{
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.55;
          max-width: 80ch;
        }

        @media (max-width: 980px){
          .hero{ grid-template-columns: 1fr; }
          .grid{ grid-template-columns: 1fr; gap: 10px; }
          .mini{ padding: 12px; }
          .contrastLabel{ min-width:95px; }
          .card .btn{
            width:100%;
            margin-left:0 !important;
            margin-top:10px;
            display:flex;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
}
