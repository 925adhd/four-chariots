import Link from "next/link";

export function Footer() {
  return (
    <footer id="support">
      <div>© {new Date().getFullYear()} FOUR CHARIOTS</div>
      <div className="links">
        <a href="mailto:support@4chariots.com">Contact</a>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
      <div style={{ marginTop: 8, fontSize: "0.75rem", color: "#6c727a" }}>
        <a
          href="https://studio925.design"
          target="_blank"
          rel="noopener"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          Website by Studio 925
        </a>
      </div>
    </footer>
  );
}
