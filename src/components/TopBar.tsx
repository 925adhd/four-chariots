"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NotifyButton } from "./NotifyButton";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/shop", label: "Shop" },
  { href: "/drop", label: "The Drop" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export function TopBar() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="topbar">
      <button
        ref={btnRef}
        className="menuBtn"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        &#9776;
      </button>

      <Link className="brand" href="/" aria-label="Four Chariots home">
        <span className="brandSplit brandSplitLeft">FOUR</span>
        <img
          className="mark"
          src="/images/logo.png"
          alt="Four Chariots logo"
          width={512}
          height={512}
        />
        <span className="wordmark">
          <span className="name">FOUR CHARIOTS</span>
        </span>
        <span className="brandSplit brandSplitRight">CHARIOTS</span>
      </Link>

      <nav
        className={"nav" + (open ? " open" : "")}
        aria-label="Site navigation"
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href) ? "navActive" : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div
        className={"navOverlay" + (open ? " open" : "")}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className="ctaRow">
        <Link className="btn" href="/shop">
          Shop
        </Link>
        <NotifyButton className="btn primary" productId="general">
          Notify Me
        </NotifyButton>
      </div>
    </div>
  );
}
