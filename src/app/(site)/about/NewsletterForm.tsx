"use client";

import { useState } from "react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addr = email.trim();
    if (!addr || !EMAIL_RE.test(addr)) {
      setMsg("Please enter a valid email.");
      return;
    }
    setSubmitting(true);

    const pageUrl = typeof window !== "undefined" ? window.location.href : "";

    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("botcheck", "");
    fd.append("subject", "FOUR CHARIOTS Newsletter Signup");
    fd.append("from_name", "FOUR CHARIOTS Newsletter");
    fd.append("form_source", "fc_newsletter");
    fd.append("email", addr);
    fd.append("page_url", pageUrl);
    fd.append("message", `New newsletter signup\n\nEmail: ${addr}\nPage: ${pageUrl}`);

    let ok = false;
    if (WEB3FORMS_KEY) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: fd,
        });
        const json = await res.json().catch(() => ({}));
        ok = !!json?.success;
      } catch {
        ok = false;
      }
    } else {
      ok = true;
    }

    if (ok) {
      setMsg("You\u2019re in. We\u2019ll let you know when the next drop lands.");
      setEmail("");
    } else {
      setMsg("Could not submit. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <form className="nlForm" onSubmit={onSubmit} noValidate>
        <input
          type="email"
          id="nlEmail"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button className="btn primary" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Subscribe"}
        </button>
      </form>
      <p className="nlMsg" id="nlMsg" role="status" aria-live="polite">
        {msg}
      </p>
    </>
  );
}
