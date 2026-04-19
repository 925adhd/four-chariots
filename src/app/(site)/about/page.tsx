import type { Metadata } from "next";
import { NewsletterForm } from "./NewsletterForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind FOUR CHARIOTS \u2014 a faith-driven apparel brand from Leitchfield, KY. Minimalist scripture tees and gear made with intention.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | FOUR CHARIOTS",
    description:
      "The story behind FOUR CHARIOTS \u2014 a faith-driven apparel brand from Leitchfield, KY.",
    url: "/about",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | FOUR CHARIOTS",
    description:
      "The story behind FOUR CHARIOTS \u2014 a faith-driven apparel brand from Leitchfield, KY.",
    images: ["/images/logo.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="divider" />

      <div className="pageHero fade-up">
        <h1>
          STEADFAST
          <br />
          IN MOTION.
        </h1>
        <p className="intro intro-creed">
          Four Chariots is built on one idea: movement with purpose.
        </p>
        <p className="intro intro-support">
          Minimal pieces. Clear direction. Every drop carries meaning.
        </p>
        <p className="intro intro-full">
          We make minimal pieces that let scripture and conviction speak quietly
          through daily life. The words you carry shape the way you move through
          the world.
        </p>
      </div>

      <div className="aboutGrid">
        <section className="aboutSection fade-up" style={{ transitionDelay: ".1s" }}>
          <h2>The Origin</h2>
          <p>
            FOUR CHARIOTS didn&apos;t start with a business plan. It started
            with a prayer, a Bible, and a request for direction while seeking
            inspiration for a faith-based mission. Built during a quiet season
            where clarity mattered more than noise.
          </p>
          <p>
            From there, the focus became simple: words that point back to truth.
            Not noise for attention, but something steady to carry into everyday
            life.
          </p>

          <div className="fourColors" aria-label="Four colorways meaning">
            <div className="fourColorsHeader">
              <div className="label">Four Colorways</div>
              <p className="foundation">
                Inspired by Zechariah 6, where the four chariots are called the
                four spirits of heaven sent out before the Lord of all the
                earth. Each moves with purpose, each drawn by horses of a
                different color. The four colorways echo that vision.
              </p>
            </div>

            <div className="colorRow">
              <div className="colorItem">
                <span className="chip red" aria-hidden="true" />
                <div>
                  <p className="colorName">Red</p>
                  <p className="colorDesc">
                    Judgment and resolve. Movement that carries weight.
                  </p>
                </div>
              </div>

              <div className="colorItem">
                <span className="chip ink" aria-hidden="true" />
                <div>
                  <p className="colorName">Black</p>
                  <p className="colorDesc">
                    Endurance in hidden seasons. Strength that holds without
                    noise.
                  </p>
                </div>
              </div>

              <div className="colorItem">
                <span className="chip cream" aria-hidden="true" />
                <div>
                  <p className="colorName">White</p>
                  <p className="colorDesc">
                    Righteousness and clarity. Set apart, steady and sure.
                  </p>
                </div>
              </div>

              <div className="colorItem">
                <span className="chip dapple" aria-hidden="true" />
                <div>
                  <p className="colorName">Dapple</p>
                  <p className="colorDesc">
                    Faith shaped by contrast. Perseverance through every season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="aboutSection fade-up"
          style={{
            transitionDelay: ".2s",
            borderTop: "none",
            paddingTop: "48px",
          }}
        >
          <h2 style={{ opacity: 0.7 }}>The Approach</h2>
          <div className="approach-block">
            <p>
              Every piece begins with a single word. One clear message pointing
              back to truth.
              <br />
              The design stays minimal so meaning carries further than the
              garment itself.
              <br />
              Each word is stitched, not printed. Made to endure daily wear.
            </p>
          </div>
          <div className="approach-block">
            <p>
              Made to start quiet conversations. Faith brought into everyday
              spaces, where one word can open the door to something deeper.
            </p>
          </div>
          <div className="approach-block">
            <p>
              Made to order. Intentional releases. Monthly drops that move
              quietly into the archive.
            </p>
          </div>
          <div className="approach-block">
            <p>
              A connected scripture reference sits subtly on the sleeve.
              <br />
              Worn close as a reminder wherever you go.
            </p>
          </div>
        </section>
      </div>

      <section className="aboutSection fade-up" style={{ transitionDelay: ".1s" }}>
        <h2>What We Stand On</h2>
        <div className="valuesGrid">
          <div className="valueCard">
            <h3>Discipline</h3>
            <p>
              Every decision, from design to delivery, is made with restraint.
              We say less so the message lands harder. Built for steady wear.
            </p>
          </div>
          <div className="valueCard">
            <h3>Intention</h3>
            <p>
              Nothing is accidental. Every word is chosen, every piece is
              purposeful. Carry it into ordinary moments.
            </p>
          </div>
          <div className="valueCard">
            <h3>Movement</h3>
            <p>
              Truth isn&apos;t meant to sit still. Every piece is a conversation
              starter, not a billboard. It goes where you go &mdash; into work,
              worship, and the ordinary in between.
            </p>
          </div>
          <div className="valueCard">
            <h3>Faith</h3>
            <p>
              Everything we make is rooted in scripture. Not as decoration, but
              as foundation. Four directions. One word. Sent further than you
              go.
            </p>
          </div>
        </div>
      </section>

      <div
        className="ctaBanner fade-up"
        style={{
          transitionDelay: ".1s",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h3>Stay in the Loop</h3>
          <p>
            Be notified when each new word moves into release. Limited drops,
            early notice, and a small welcome gift on your first order.
          </p>
        </div>
        <NewsletterForm />
      </div>

      <style>{`
        [id]{ scroll-margin-top:24px; }

        .pageHero{
          padding: 54px 0 44px;
          max-width: 780px;
        }
        .pageHero h1{
          margin:0;
          font-size: clamp(32px, 4vw, 52px);
          line-height:0.98;
          letter-spacing:-0.03em;
          text-transform:uppercase;
          font-weight:950;
          color:#000;
        }
        .pageHero .intro{
          margin:18px 0 0;
          font-size:17px;
          color:var(--muted);
          line-height:1.6;
          max-width:60ch;
        }

        /* content sections */
        .aboutGrid{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 10px 0 40px;
          align-items:start;
        }
        .aboutSection{
          padding: 30px 0;
          border-top:1px solid var(--line);
        }
        .aboutSection h2{
          margin:0 0 14px;
          font-size:15px;
          text-transform:uppercase;
          letter-spacing:0.12em;
          font-weight:950;
          color:var(--ink);
        }
        .aboutSection p{
          margin:0 0 14px;
          color:var(--muted);
          font-size:15px;
          line-height:1.65;
          max-width:60ch;
        }
        .aboutSection p:last-child{ margin-bottom:0; }

        /* Four colorways block */
        .fourColors{
          border: 1px solid var(--line);
          background: #fbfbfb;
          padding: 20px;
          margin-top: 18px;
        }
        .fourColorsHeader{
          margin-bottom: 16px;
        }
        .fourColorsHeader .label{
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 900;
          margin: 0 0 10px;
        }
        .fourColorsHeader .foundation{
          margin: 0;
          font-size: 13px;
          color: var(--muted);
          line-height: 1.55;
          max-width: 64ch;
        }
        .colorRow{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 18px;
          padding-top: 16px;
          border-top: 1px solid var(--line);
        }
        .colorItem{
          display:flex;
          gap:10px;
          align-items:flex-start;
        }
        .chip{
          width: 12px;
          height: 12px;
          border: 1px solid rgba(0,0,0,.18);
          flex-shrink:0;
          margin-top: 4px;
          background: #fff;
        }
        .chip.ink{ background: #0b1a2a; border-color: rgba(11,26,42,.22); }
        .chip.cream{ background: #f4f1ea; border-color: rgba(0,0,0,.12); }
        .chip.red{ background: #7a1e1e; border-color: rgba(122,30,30,.25); }
        .chip.dapple{
          background:
            radial-gradient(circle at 30% 30%, rgba(0,0,0,.22) 0 2px, transparent 3px),
            radial-gradient(circle at 60% 55%, rgba(0,0,0,.18) 0 2px, transparent 3px),
            radial-gradient(circle at 45% 75%, rgba(0,0,0,.14) 0 2px, transparent 3px),
            linear-gradient(#efefef, #f8f8f8);
          border-color: rgba(0,0,0,.14);
        }
        .colorName{
          margin:0;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          line-height: 1.1;
        }
        .colorDesc{
          margin: 3px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.5;
        }

        /* values grid */
        .valuesGrid{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap:20px;
          padding: 10px 0;
        }
        .valueCard{
          border:1px solid var(--line);
          padding:20px;
          background:var(--soft);
        }
        .valueCard .dot{
          width:32px;
          height:32px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border:1px solid var(--ink);
          background:#fff;
          color:var(--ink);
          font-weight:900;
          font-size:11px;
          letter-spacing:0.12em;
          border-radius:50%;
          margin-bottom:12px;
        }
        .valueCard h3{
          margin:0 0 8px;
          font-size:13px;
          text-transform:uppercase;
          letter-spacing:0.08em;
          font-weight:950;
          color:var(--ink);
        }
        .valueCard p{
          margin:0;
          color:var(--muted);
          font-size:13px;
          line-height:1.5;
        }

        /* cta banner */
        .ctaBanner{
          margin-top:40px;
          padding:30px;
          border:1px solid var(--line);
          background:var(--soft);
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          flex-wrap:wrap;
        }
        .ctaBanner h3{
          margin:0;
          font-size:16px;
          text-transform:uppercase;
          letter-spacing:0.08em;
          font-weight:950;
          color:var(--ink);
        }
        .ctaBanner p{
          margin:4px 0 0;
          color:var(--muted);
          font-size:13px;
        }
        .nlForm{
          display:flex;
          gap:8px;
          width:100%;
          max-width:420px;
        }
        .nlForm input{
          flex:1;
          padding:12px 14px;
          font-size:13px;
          font-family:var(--font);
          border:1px solid var(--line);
          background:#fff;
          color:var(--text);
          outline:none;
          border-radius:var(--radius);
        }
        .nlForm input:focus{ border-color:var(--ink); }
        .nlForm input::placeholder{ color:#aaa; }
        .nlMsg{
          margin:8px 0 0;
          font-size:12px;
          color:var(--muted);
        }

        .approach-block{
          margin-bottom: 24px;
          padding-left: 14px;
          border-left: 1px solid rgba(0,0,0,0.05);
        }
        .approach-block:last-child{ margin-bottom: 0; }
        .approach-block p{ opacity:.8; }

        /* Four Directions philosophy card */
        .directionsCard{
          max-width: 580px;
          border: 1px solid rgba(11,26,42,.08);
          background: rgba(11,26,42,.015);
          padding: 18px;
          margin: 10px 0 36px;
        }
        .directionsTop{
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(11,26,42,.05);
          margin-bottom: 14px;
        }
        .directionsTitle{
          font-size: 12px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink);
          font-weight: 950;
        }
        .directionsSub{
          margin-top: 6px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.45;
          max-width: 52ch;
        }
        .directionsSteps{
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .directionsCard .dot{
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(11,26,42,.18);
          background: transparent;
          color: var(--muted);
          font-weight: 600;
          font-size: 8px;
          letter-spacing: 0.06em;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .directionsCard .stepTitle{
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--ink);
          font-size: 12px;
          line-height: 1.1;
        }
        .directionsCard .stepDesc{
          margin-top: 3px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.4;
        }

        @media (max-width: 980px){
          .aboutGrid{ grid-template-columns: 1fr; gap:0; }
          .ctaBanner{ flex-direction:column; align-items:flex-start; }
          .colorRow{ grid-template-columns: 1fr; }
          .pageHero{ padding: 44px 0 36px; }
        }

        /* Mobile-only: tighter hero + collapsible sections */
        @media (max-width: 640px){
          .pageHero{ padding: 30px 0 20px; }
          .pageHero h1{ font-size: clamp(28px, 8vw, 40px); }
          .intro-creed{
            font-size: 16px;
            font-weight: 700;
            color: var(--ink);
            margin: 14px 0 0;
            line-height: 1.45;
          }
          .intro-support{
            font-size: 14px;
            margin: 8px 0 0;
          }
          .intro-full{ display: none; }

          .aboutSection{ padding: 22px 0; }
          .aboutSection h2{ margin-bottom: 10px; }
          .aboutSection p{ font-size: 14px; margin-bottom: 14px; }
          .approach-block{ margin-bottom: 26px; }

          .directionsCard{
            max-width: 100%;
            padding: 14px;
            margin: 6px 0 28px;
          }
          .directionsTop{ padding-bottom: 8px; margin-bottom: 10px; }
          .directionsTitle{ font-size: 11px; }
          .directionsSub{ font-size: 11px; }
          .directionsSteps{ gap: 8px; }
          .directionsCard .dot{ width: 18px; height: 18px; font-size: 7px; }
          .directionsCard .stepTitle{ font-size: 11px; }
          .directionsCard .stepDesc{ font-size: 11px; }
        }

        /* Desktop: show everything, hide toggles */
        @media (min-width: 641px){
          .intro-full{ display: block; }
          .intro-creed{ display: none; }
          .intro-support{ display: none; }
        }
      `}</style>
    </>
  );
}
