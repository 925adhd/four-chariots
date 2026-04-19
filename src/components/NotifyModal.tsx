"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type NotifyArgs = {
  productId?: string;
  productName?: string;
  variant?: string;
};

type NotifyContextValue = {
  open: (args?: NotifyArgs) => void;
  close: () => void;
};

const NotifyContext = createContext<NotifyContextValue | null>(null);

export function useNotify() {
  const ctx = useContext(NotifyContext);
  if (!ctx) throw new Error("useNotify must be used within NotifyProvider");
  return ctx;
}

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function NotifyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [args, setArgs] = useState<NotifyArgs>({});
  const [email, setEmail] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const isGeneral = args.productId === "general" || !args.productName;
  const productLabel = isGeneral
    ? "General waitlist"
    : `${args.productName ?? ""}${args.variant ? ` (${args.variant})` : ""}`;

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove("fcNotify-open");
    if (triggerRef.current && typeof triggerRef.current.focus === "function") {
      try {
        triggerRef.current.focus();
      } catch {
        /* element may be gone */
      }
    }
    triggerRef.current = null;
  }, []);

  const open = useCallback((next?: NotifyArgs) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setArgs({
      productId: next?.productId ?? "",
      productName: next?.productName ?? "",
      variant: next?.variant ?? "",
    });
    setEmail("");
    setBotcheck("");
    setError("");
    setSuccess(false);
    setSubmitting(false);
    setIsOpen(true);
    document.body.classList.add("fcNotify-open");
    setTimeout(() => emailRef.current?.focus(), 60);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input:not([type="hidden"]):not([tabindex="-1"]), select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const addr = email.trim();
    if (!addr || !EMAIL_RE.test(addr)) {
      setError("Please enter a valid email.");
      return;
    }
    if (botcheck) {
      setSuccess(true);
      return;
    }
    setSubmitting(true);

    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const productId = args.productId ?? "";
    const productName = args.productName ?? "";
    const variant = args.variant ?? "";

    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("botcheck", "");
    fd.append("subject", "FOUR CHARIOTS Waitlist — " + productLabel);
    fd.append("from_name", "FOUR CHARIOTS Waitlist");
    fd.append("form_source", "fc_waitlist");
    fd.append("email", addr);
    fd.append("product_id", productId);
    fd.append("product_name", productName);
    fd.append("variant", variant);
    fd.append("page_url", pageUrl);
    fd.append(
      "message",
      `New waitlist signup\n\nProduct: ${productLabel}\nProduct ID: ${productId}\nVariant: ${variant || "—"}\nEmail: ${addr}\nPage: ${pageUrl}`,
    );

    const web3Promise = WEB3FORMS_KEY
      ? fetch("https://api.web3forms.com/submit", { method: "POST", body: fd })
          .then((r) => r.json())
          .catch(() => ({ success: false }))
      : Promise.resolve({ success: false });

    const supaPromise = import("@/lib/supabase/client")
      .then(({ createClient }) =>
        createClient().from("waitlist").insert({
          email: addr,
          product_id: productId,
          product_name: productName,
          variant,
          source: "web",
          page_url: pageUrl,
        }),
      )
      .then(({ error }) => ({ ok: !error }))
      .catch(() => ({ ok: false }));

    const [w, s] = await Promise.all([web3Promise, supaPromise]);
    const ok = (w && (w as { success?: boolean }).success) || (s && s.ok);

    if (ok) {
      setSuccess(true);
    } else {
      setError(
        (w && (w as { message?: string }).message) ||
          "Could not submit. Please try again.",
      );
      setSubmitting(false);
    }
  };

  return (
    <NotifyContext.Provider value={{ open, close }}>
      {children}
      <div
        className="fcNotify"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fcNotifyTitle"
        hidden={!isOpen}
      >
        <div
          className="fcNotify-backdrop"
          onClick={close}
          aria-hidden="true"
        />
        <div className="fcNotify-dialog" ref={dialogRef}>
          <button
            className="fcNotify-close"
            type="button"
            onClick={close}
            aria-label="Close"
          >
            &times;
          </button>
          {!success ? (
            <div>
              <div className="fcNotify-eyebrow">Join the waitlist</div>
              <h2 className="fcNotify-title" id="fcNotifyTitle">
                Get notified
              </h2>
              {isGeneral ? (
                <p className="fcNotify-body">
                  Enter your email and we&apos;ll let you know when new pieces,
                  drops, or restocks are ready. No spam — only release
                  notifications.
                </p>
              ) : (
                <p className="fcNotify-body">
                  Enter your email and we&apos;ll reach out the moment{" "}
                  <strong>{args.productName}</strong> is available. No spam —
                  only release notifications.
                </p>
              )}
              <form className="fcNotify-form" onSubmit={onSubmit} noValidate>
                <label className="fcNotify-label" htmlFor="fcNotifyEmail">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="fcNotifyEmail"
                  required
                  placeholder="you@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="fcNotifyError"
                />
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    opacity: 0,
                  }}
                />
                <div
                  className="fcNotify-error"
                  id="fcNotifyError"
                  role="alert"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {error}
                </div>
                <button
                  type="submit"
                  className="fcNotify-submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Notify me"}
                </button>
              </form>
            </div>
          ) : (
            <div
              className="fcNotify-success"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="fcNotify-check" aria-hidden="true">
                &#10003;
              </div>
              <div className="fcNotify-successTitle">You&apos;re on the list</div>
              <div className="fcNotify-successBody">
                {isGeneral
                  ? "We'll email you when something new is ready."
                  : "We'll email you the moment this is available."}
              </div>
            </div>
          )}
        </div>
      </div>
    </NotifyContext.Provider>
  );
}
