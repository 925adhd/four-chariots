import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="legalWrap">
      <div className="legalTopbar">
        <Link className="legalBrand" href="/">
          <img
            src="/images/logo.png"
            alt="Four Chariots logo"
            width={512}
            height={512}
          />
          FOUR CHARIOTS
        </Link>
        <Link className="legalBack" href="/">
          ← Back home
        </Link>
      </div>
      <main id="main-content" tabIndex={-1} className="legalMain">
        {children}
      </main>
      <footer className="legalFooter">
        <div>© {new Date().getFullYear()} FOUR CHARIOTS</div>
        <div>
          <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
        </div>
      </footer>

      <style>{`
        .legalWrap{
          max-width:780px;
          margin:0 auto;
          padding:24px 20px 80px;
          line-height:1.55;
        }
        .legalWrap a{ color:var(--ink); text-decoration:underline; }
        .legalWrap a:hover{ opacity:.75; }
        .legalTopbar{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:14px 0;
          border-bottom:1px solid var(--line);
        }
        .legalBrand{
          display:flex;
          align-items:center;
          gap:10px;
          text-decoration:none !important;
          font-weight:900;
          letter-spacing:0.1em;
          text-transform:uppercase;
          font-size:14px;
          color:var(--text);
        }
        .legalBrand img{ height:40px; width:auto; }
        .legalBack{
          font-size:12px;
          color:var(--muted);
          text-decoration:none !important;
          letter-spacing:0.06em;
          text-transform:uppercase;
          font-weight:700;
        }
        .legalBack:hover{ color:var(--text); }
        .legalMain{ padding-top:40px; }
        .legalMain h1{
          font-size:32px;
          letter-spacing:-0.02em;
          margin:0 0 8px;
          line-height:1.15;
        }
        .legalMain .updated{
          font-size:12px;
          color:var(--muted);
          letter-spacing:0.08em;
          text-transform:uppercase;
          margin-bottom:32px;
        }
        .legalMain h2{
          font-size:18px;
          margin:32px 0 12px;
          letter-spacing:-0.01em;
        }
        .legalMain p,
        .legalMain li{ font-size:15px; color:var(--text); }
        .legalMain ul{ padding-left:22px; }
        .legalMain li{ margin-bottom:6px; }
        .legalMain .note{
          background:#f6f6f6;
          padding:14px 16px;
          border-left:3px solid var(--ink);
          margin:18px 0;
          font-size:14px;
          color:var(--muted);
        }
        .legalFooter{
          margin-top:64px;
          padding-top:24px;
          border-top:1px solid var(--line);
          font-size:12px;
          color:var(--muted);
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:12px;
        }
        .legalFooter a{ color:var(--muted); text-decoration:underline; }
      `}</style>
    </div>
  );
}
