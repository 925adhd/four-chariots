import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FOUR CHARIOTS collects, stores, and uses waitlist emails. No tracking, no analytics, no selling your data.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <div className="updated">Last updated: April 18, 2026</div>

      <p>
        FOUR CHARIOTS (&quot;we&quot;, &quot;our&quot;) is a small apparel brand
        based in Leitchfield, Kentucky. This policy explains what information we
        collect when you visit{" "}
        <a href="https://4chariots.com">4chariots.com</a> or join our waitlist,
        and what we do with it.
      </p>

      <div className="note">
        Short version: we collect an email address if you join the waitlist. We
        use it to tell you when a product you signed up for is available. We
        don&apos;t sell your data, we don&apos;t track you across the web, and
        we don&apos;t run analytics or advertising cookies.
      </div>

      <h2>1. What we collect</h2>
      <p>When you submit the &quot;Notify me&quot; form on a product page, we collect:</p>
      <ul>
        <li>The email address you enter</li>
        <li>The product you asked to be notified about (and variant, if applicable)</li>
        <li>The page URL you submitted from</li>
        <li>A timestamp of when you signed up</li>
      </ul>
      <p>
        We do not collect your name, address, payment details, IP address, or
        browser fingerprint through the waitlist form.
      </p>

      <h2>2. How we store it</h2>
      <p>Waitlist emails are stored in two places:</p>
      <ul>
        <li>
          <strong>Supabase</strong> — our database provider, who stores the
          record securely with row-level security.
        </li>
        <li>
          <strong>Web3Forms</strong> — a form-handling service that also
          delivers a notification email to us when you sign up.
        </li>
      </ul>
      <p>
        Both are third-party processors with their own privacy policies. We
        never sell, rent, or share your email with anyone outside these
        processors.
      </p>

      <h2>3. How we use it</h2>
      <p>
        Your email is used only to notify you when the product you signed up for
        becomes available. We may also send related launch announcements for
        products in the same collection. We do not use it for marketing of
        unrelated products, and we do not share it with partners.
      </p>

      <h2>4. How long we keep it</h2>
      <p>
        We keep waitlist records until you ask us to delete them, or until you
        unsubscribe and the associated product has launched (whichever comes
        first). You can request deletion at any time.
      </p>

      <h2>5. Cookies &amp; tracking</h2>
      <p>
        The public site does not set any tracking cookies. We do not use Google
        Analytics, Meta Pixel, or any other third-party analytics. The only
        storage the site uses is browser localStorage for UI state (like
        remembering your cart is empty while we&apos;re in waitlist mode). No
        personal data is stored in localStorage.
      </p>

      <h2>6. Your rights</h2>
      <p>You can:</p>
      <ul>
        <li>Ask what data we hold about you</li>
        <li>Ask for it to be corrected or deleted</li>
        <li>Opt out of future emails</li>
      </ul>
      <p>
        Email <a href="mailto:support@4chariots.com">support@4chariots.com</a>{" "}
        with your request and we&apos;ll act on it within 30 days.
      </p>

      <h2>7. Children</h2>
      <p>
        The site is not directed at children under 13 and we do not knowingly
        collect information from them. If you believe a child has signed up,
        email us and we will delete the record.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        If we change how we handle data, we&apos;ll update this page and the
        &quot;Last updated&quot; date above. Material changes will be announced
        on the homepage.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about privacy? Email{" "}
        <a href="mailto:support@4chariots.com">support@4chariots.com</a>.
      </p>
    </>
  );
}
