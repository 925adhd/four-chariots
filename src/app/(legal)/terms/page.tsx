import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of use for the FOUR CHARIOTS website, waitlist, and future store.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <div className="updated">Last updated: April 18, 2026</div>

      <p>
        These terms govern your use of{" "}
        <a href="https://4chariots.com">4chariots.com</a> (the &quot;Site&quot;),
        operated by FOUR CHARIOTS (&quot;we&quot;, &quot;our&quot;), based in
        Leitchfield, Kentucky. By using the Site, you agree to these terms.
      </p>

      <div className="note">
        Short version: use the site, join the waitlist, read about what we make.
        Don&apos;t scrape, abuse, or misuse it. We make things by hand and try
        our best. Kentucky law applies.
      </div>

      <h2>1. Use of the site</h2>
      <p>
        The Site is provided for informational purposes and to let you join a
        waitlist for upcoming apparel releases. You may browse and interact with
        the Site for personal, non-commercial use. You may not:
      </p>
      <ul>
        <li>Scrape, crawl, or extract data without permission</li>
        <li>Submit the waitlist form with false or automated information</li>
        <li>Attempt to reverse engineer, probe, or disrupt the Site</li>
        <li>Use the Site to violate any law or the rights of others</li>
      </ul>

      <h2>2. Waitlist</h2>
      <p>
        Joining the waitlist does not guarantee that a product will become
        available, that you will be notified, or that you will be able to
        purchase it when it is available. We may end or modify the waitlist for
        any product at any time. See our <a href="/privacy">Privacy Policy</a>{" "}
        for how we handle waitlist emails.
      </p>

      <h2>3. Purchases</h2>
      <p>
        Once our online store is live, purchases will be made to order and
        processed through Stripe. Additional purchase terms — including
        shipping, returns, sizing, and made-to-order policies — will be
        published on the relevant product and <a href="/support">support</a>{" "}
        pages and form part of these terms at the time of checkout.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        The FOUR CHARIOTS name, logo, designs, graphics, product photography,
        and written content are owned by us or licensed to us. You may not copy,
        reproduce, or use them for commercial purposes without written
        permission. Scripture quoted on the Site is drawn from publicly
        available translations and remains public domain; our layout and design
        of scripture references, however, are not.
      </p>

      <h2>5. Third-party services</h2>
      <p>
        The Site relies on third-party service providers we do not control for
        things like database hosting, form handling, payment processing, and
        production &amp; fulfillment. Your use of services delivered through
        these providers is subject to their own terms. If you want details about
        which services handle your personal data, see our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        The Site is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, express or implied. We do not warrant
        that the Site will be uninterrupted, error-free, or secure. Product
        images and descriptions are provided in good faith; actual items may
        vary slightly due to the made-to-order process.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, FOUR CHARIOTS is not liable for
        any indirect, incidental, consequential, or special damages arising out
        of or in connection with your use of the Site or any products purchased
        through it. Our total liability for any claim will not exceed the amount
        you paid us in the 12 months preceding the claim (or, if nothing was
        paid, USD $50).
      </p>

      <h2>8. Indemnity</h2>
      <p>
        You agree to indemnify and hold FOUR CHARIOTS harmless from any claim or
        demand arising out of your misuse of the Site or breach of these terms.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of the Commonwealth of Kentucky,
        USA, without regard to its conflict-of-law principles. Any dispute will
        be resolved in the state or federal courts located in Kentucky.
      </p>

      <h2>10. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The &quot;Last
        updated&quot; date above will reflect the most recent revision.
        Continued use of the Site after changes means you accept the revised
        terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:support@4chariots.com">support@4chariots.com</a>.
      </p>
    </>
  );
}
