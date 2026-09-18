"use client";

import { useEffect, useState } from "react";

import { Logo } from "@/components/Logo";
import { Close, Menu } from "@/components/icons";
import { ButtonLink, cx } from "@/components/primitives";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A scrolled-away menu that is still open traps the page — close on resize up.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, [open]);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-line bg-bone/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav aria-label="Main" className="shell flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#top" className="rounded-md" aria-label="outsource.hub — home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="#contact" className="px-5 py-2.5" withArrow>
            Hire with us
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-clay/40 lg:hidden"
        >
          {open ? <Close className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-bone lg:hidden"
      >
        <ul className="shell flex flex-col py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line-2 py-3.5 text-base font-medium text-ink-2"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <ButtonLink
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full"
              withArrow
            >
              Hire with us
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
