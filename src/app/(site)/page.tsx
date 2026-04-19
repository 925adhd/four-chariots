import type { Metadata } from "next";
import Link from "next/link";
import { NotifyButton } from "@/components/NotifyButton";
import { HomeAnimator } from "@/components/HomeAnimator";
import { HomepageDropGallery } from "./HomepageDropGallery";

export const metadata: Metadata = {
  title: { absolute: "FOUR CHARIOTS" },
  description:
    "FOUR CHARIOTS — faith-driven apparel and scripture tees made to order. Minimalist pieces with meaning, shipped nationwide from Leitchfield, KY.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FOUR CHARIOTS — Faith-Driven Apparel",
    description:
      "Minimalist scripture tees and gear made with intention. Shipped nationwide from Leitchfield, KY.",
    url: "/",
    images: ["/images/logo.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeAnimator />
      <div className="divider" />

      <section className="hero" id="heroSection">
        <div>
          <NotifyButton className="heroEyebrow" productId="general">
            Coming soon · Join the waitlist
          </NotifyButton>

          <h1 className="headline">
            <span className="word"><span>DISCIPLINE,</span></span>
            <br />
            <span className="word"><span>WITHOUT</span></span>{" "}
            <span className="word"><span>NOISE.</span></span>
          </h1>

          <span className="accentLine" />

          <p className="subhead fade-up" style={{ transitionDelay: ".6s" }}>
            Minimal faithwear for everyday movement. Simple words that keep you
            steady and start conversations worth having.
          </p>
          <p
            className="fade-up heroSub1"
            style={{
              transitionDelay: ".66s",
              margin: "8px 0 0",
              fontSize: 14,
              color: "var(--muted)",
            }}
          >
            Worn daily. Not loud. Built to last.
          </p>
          <p
            className="fade-up heroSub2"
            style={{
              transitionDelay: ".7s",
              margin: "6px 0 0",
              fontSize: 12,
              color: "var(--muted)",
            }}
          >
            Core pieces stay ready. Drops release quietly in limited numbers.
          </p>

          <div className="fade-up" style={{ marginTop: 16, transitionDelay: ".72s" }}>
            <Link className="btn primary" href="/drop">
              View The Drop
            </Link>
            <Link
              className="btn quiet"
              href="/shop"
              style={{
                marginLeft: 10,
                borderColor: "var(--line)",
                color: "var(--muted)",
                fontWeight: 600,
                fontSize: 12,
              }}
            >
              Core Collection
            </Link>
          </div>
        </div>

        <div className="heroImg fade-up" style={{ transitionDelay: ".85s" }}>
          <img
            src="/images/core/unashamed/model2.webp"
            alt="UNSHAKEN Tee"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "30% top",
            }}
            width={1024}
            height={1536}
            fetchPriority="high"
          />
        </div>
      </section>

      <div className="divider" style={{ marginTop: 10 }} />

      <section className="dropReveal" id="drop">
        <div className="dropHeader">
          <h2>Drop 001</h2>
          <p
            style={{
              fontSize: 11,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--muted)",
              margin: 0,
            }}
          >
            Individually Numbered Release
          </p>
        </div>

        <HomepageDropGallery />

        <p
          style={{
            textAlign: "center",
            margin: "20px 0 0",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          Members enter first through a reserved access window inside the
          66-piece release.
        </p>

        <aside
          className="heroCard missionCard missionCardMobile fade-up"
          style={{ transitionDelay: ".85s" }}
        >
          <div className="missionTop">
            <div>
              <div className="missionTitle">FOUR DIRECTIONS. ONE WORD.</div>
              <div className="missionSub">
                Precision embroidery. Heavyweight cotton. One word carried
                quietly.
                <br />
                Each piece carries a word meant to travel further than you do.
              </div>
            </div>
          </div>
          <div className="missionSteps" role="list">
            <div className="step" role="listitem">
              <div className="stepText">
                <div className="stepTitle">Wear it</div>
                <div className="stepDesc">A single word that keeps you steady.</div>
              </div>
            </div>
            <div className="step" role="listitem">
              <div className="stepText">
                <div className="stepTitle">Carry it</div>
                <div className="stepDesc">Let it follow you into ordinary moments.</div>
              </div>
            </div>
            <div className="step" role="listitem">
              <div className="stepText">
                <div className="stepTitle">Spread it</div>
                <div className="stepDesc">A conversation starter. Not a billboard.</div>
              </div>
            </div>
            <div className="step" role="listitem">
              <div className="stepText">
                <div className="stepTitle">Send it</div>
                <div className="stepDesc">Four directions. One word.</div>
              </div>
            </div>
          </div>
        </aside>

        <div
          className="memberTeaser fade-up"
          style={{ transitionDelay: ".08s" }}
          aria-label="Reserved membership"
        >
          <div className="memberLeft">
            <div className="memberKicker">Reserved Membership</div>
            <p className="memberTitle">Never Miss a Drop</p>
            <p className="memberDesc">
              A quiet circle, limited to 12. Reserved inventory. Zero sell-outs.
              Each circle secures 12 consecutive releases delivered
              automatically as part of the series.
            </p>
            <ul className="memberFeatures">
              <li>Members enter before the public release</li>
              <li>Automatic delivery every drop</li>
              <li>Free shipping included</li>
            </ul>
            <Link className="memberLink" href="/membership">
              Learn more about membership
            </Link>
          </div>
          <div className="memberCta">
            <Link className="btn primary" href="/membership">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero{
          display:flex;
          align-items:center;
          justify-content:flex-start;
          gap: 56px;
          padding: 30px 0 50px;
        }
        .hero > div:first-child{
          flex: 0 0 min(640px, 48%);
          margin-left: 30px;
        }
        .heroImg{
          flex: 0 0 min(520px, 44%);
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 2px;
          margin-top: 16px;
          margin-left: 40px;
        }
        .heroEyebrow{
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:transparent;
          border:1px solid var(--ink);
          color:var(--ink);
          padding:7px 12px;
          margin:0 0 16px;
          font-family:inherit;
          font-size:11px;
          font-weight:800;
          letter-spacing:0.14em;
          text-transform:uppercase;
          cursor:pointer;
          transition: background .2s ease, color .2s ease;
        }
        .heroEyebrow::before{
          content:"";
          display:inline-block;
          width:7px;
          height:7px;
          border-radius:50%;
          background:var(--ink);
          animation: fcPulse 1.6s ease-in-out infinite;
        }
        .heroEyebrow:hover{ background:var(--ink); color:#fff; }
        .heroEyebrow:hover::before{ background:#fff; }
        @keyframes fcPulse{
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:.4; transform:scale(.75); }
        }

        .headline{
          margin:0;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height:0.95;
          letter-spacing:-0.045em;
          text-transform:uppercase;
          font-weight:950;
          color:var(--ink);
        }
        .headline .word{
          display:inline-block;
          overflow:hidden;
          vertical-align:top;
        }
        .headline .word span{
          display:inline-block;
          transform:translateY(105%);
          transition: transform .65s cubic-bezier(.16,1,.3,1);
        }
        .headline.visible .word span{ transform:translateY(0); }

        .accentLine{
          display:block;
          width:0;
          height:3px;
          background:var(--ink);
          margin:18px 0 0;
          transition: width .8s cubic-bezier(.16,1,.3,1);
          transition-delay:.5s;
        }
        .hero.animated .accentLine{ width:80px; }

        .subhead{
          margin:28px 0 0;
          font-size:18px;
          max-width:520px;
          color:var(--muted);
          line-height:1.5;
        }
        .heroSub2{ color: #6c727a; }

        .heroCard{ border:1px solid rgba(11,26,42,.08); padding: 18px; background: transparent; }
        .missionCard{
          background: rgba(11,26,42,.015);
          box-shadow: none;
          border-color: rgba(11,26,42,.05);
          padding: 18px;
        }
        .missionTop{
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(11,26,42,.05);
          margin-bottom: 14px;
        }
        .missionTitle{
          font-size: 12px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink);
          font-weight: 950;
        }
        .missionSub{
          margin-top: 6px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.45;
          max-width: 52ch;
        }
        .missionSteps{ display: flex; flex-direction: column; gap: 10px; }
        .step{ display: flex; gap: 10px; align-items: flex-start; }
        .stepTitle{
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--ink);
          font-size: 12px;
          line-height: 1.1;
        }
        .stepDesc{
          margin-top: 3px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.4;
        }
        .missionCardMobile{ display:none; }

        .dropReveal{ padding: 50px 0 10px; }
        .dropHeader{
          display:flex;
          align-items:baseline;
          justify-content:space-between;
          gap:14px;
          padding: 18px 0 10px;
          margin-top: 10px;
        }
        .dropHeader h2{
          margin:0;
          font-size: clamp(22px, 2.5vw, 32px);
          text-transform:uppercase;
          letter-spacing:0.06em;
          font-weight:950;
          color:var(--ink);
        }
        .dropHeader p{
          margin:0;
          color:var(--muted);
          font-size:13px;
          max-width: 60ch;
        }
        .dropCard{
          margin-top: 14px;
          border:1px solid var(--line);
          background: var(--bg);
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          overflow:hidden;
        }
        .dropMedia{
          background:#fafafa;
          border-right:1px solid var(--line);
          overflow:hidden;
          display:flex;
          flex-direction:column;
          gap:10px;
          padding:14px;
        }
        .dropMainImg{
          flex:1;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }
        .dropMainImg img{
          max-width:100%;
          max-height:380px;
          object-fit:contain;
          transition: opacity .3s ease;
        }
        .dropThumbs{
          display:flex;
          gap:8px;
          flex-wrap:wrap;
          justify-content:center;
        }
        .dropThumb{
          width:60px;
          height:60px;
          border:2px solid transparent;
          background:var(--soft);
          overflow:hidden;
          cursor:pointer;
          transition: border-color .2s ease;
          padding:4px;
        }
        .dropThumb.active{ border-color:var(--ink); }
        .dropThumb img{ width:100%; height:100%; object-fit:contain; }
        .dropBody{
          padding: 18px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap: 10px;
        }
        .dropWord{
          margin:0;
          font-weight:950;
          text-transform:uppercase;
          letter-spacing:-0.03em;
          font-size: clamp(28px, 3.5vw, 42px);
          line-height:1;
          color:var(--ink);
        }
        .dropPrice{
          font-size:18px;
          font-weight:900;
          color:var(--ink);
          letter-spacing:-0.02em;
          margin:0;
        }
        .dropDesc{
          margin:0;
          color:var(--muted);
          font-size:14px;
          line-height:1.65;
          max-width:52ch;
        }
        .dropActions{
          display:flex;
          gap:10px;
          align-items:center;
          flex-wrap:wrap;
          margin-top: 6px;
        }
        .dropMeta{
          margin-top: 8px;
          color:var(--muted);
          font-size:12px;
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          align-items:center;
        }

        .memberTeaser{
          margin-top: 52px;
          border: 1px solid rgba(11,26,42,.10);
          background: #f4f1ea;
          border-radius: 12px;
          padding: 28px 28px 24px;
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap: 24px;
        }
        .memberLeft{ display:flex; flex-direction:column; gap: 6px; max-width: 72ch; }
        .memberKicker{
          font-size: 11px;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 800;
        }
        .memberTitle{
          margin:0;
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 950;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--ink);
          line-height: 1.1;
        }
        .memberDesc{
          margin:4px 0 0;
          font-size: 14px;
          color: var(--muted);
          line-height: 1.55;
        }
        .memberFeatures{
          margin: 12px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .memberFeatures li{
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text);
          line-height: 1.3;
        }
        .memberFeatures li::before{
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ink);
          flex-shrink: 0;
          opacity: .45;
        }
        .memberCta{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .memberCta .btn.primary{ min-width: 180px; }
        .memberLink{
          font-size: 12px;
          color: var(--muted);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color .2s ease;
        }
        .memberLink:hover{ color: var(--ink); }

        @media (max-width: 980px){
          .hero{ flex-direction:column; align-items:stretch; gap:24px; padding:16px 0 30px; }
          .hero > div:first-child{ flex:unset; width:100%; margin-left:0; }
          .heroImg{ display:none !important; }
          .missionCardMobile{ display:block; margin-top:24px; }
          .dropCard{ grid-template-columns: 1fr; }
          .dropMedia{ border-right:none; border-bottom:1px solid var(--line); }
          .dropMainImg img{ width:100%; height:100%; object-fit:cover; }
          .memberTeaser{
            flex-direction: column;
            align-items: stretch;
            padding: 22px 20px 20px;
            gap: 18px;
          }
          .memberCta{ width: 100%; align-items: stretch; }
          .memberCta .btn.primary{ width: 100%; display: flex; min-width: unset; }
        }

        @media (max-width: 640px){
          .hero{ padding: 10px 0 24px; gap: 20px; }
          .headline{ font-size: clamp(32px, 9vw, 48px); letter-spacing: -0.04em; }
          .accentLine{ margin-top: 12px; }
          .subhead{ font-size: 15px; margin-top: 14px; line-height: 1.5; }
          .hero .fade-up .btn{
            display: flex;
            width: 100%;
            margin-left: 0 !important;
            padding: 14px 16px;
            font-size: 13px;
          }
          .hero .fade-up{ display: flex; flex-direction: column; gap: 10px; }
          .missionCard{ padding: 14px; }
          .missionTop{ padding-bottom: 8px; margin-bottom: 10px; }
          .missionTitle{ font-size: 11px; }
          .missionSub{ font-size: 11px; }
          .missionSteps{ gap: 8px; }
          .step{ gap: 8px; }
          .stepTitle{ font-size: 11px; }
          .stepDesc{ font-size: 11px; }
          .dropReveal{ padding: 24px 0 6px; }
          .dropHeader{ padding: 14px 0 8px; margin-top: 6px; flex-direction: column; gap: 4px; }
          .dropHeader h2{ font-size: 20px; }
          .dropHeader p{ font-size: 12px; }
          .dropCard{ margin-top: 10px; }
          .dropMedia{ padding: 10px; gap: 8px; }
          .dropThumbs{ gap: 6px; flex-wrap: wrap; justify-content: center; padding-bottom: 4px; }
          .dropThumb{ width: 50px; height: 50px; padding: 3px; flex-shrink: 0; }
          .dropBody{ padding: 14px; gap: 8px; }
          .dropWord{ font-size: clamp(24px, 7vw, 34px); }
          .dropPrice{ font-size: 16px; }
          .dropDesc{ font-size: 13px; line-height: 1.5; }
          .dropActions{ margin-top: 4px; }
          .dropActions .btn{ width: 100%; display: flex; padding: 14px 16px; }
          .dropMeta{ font-size: 11px; gap: 8px; margin-top: 6px; }
          .memberTeaser{ padding: 18px 16px 16px; gap: 14px; margin-top: 40px; border-radius: 10px; }
          .memberKicker{ font-size: 10px; }
          .memberTitle{ font-size: 18px; }
          .memberDesc{ font-size: 13px; }
          .memberFeatures{ gap: 6px; margin-top: 10px; }
          .memberFeatures li{ font-size: 12px; gap: 8px; }
          .memberCta .btn.primary{ padding: 14px 16px; font-size: 13px; }
          .memberLink{ font-size: 11px; }
        }
      `}</style>
    </>
  );
}
