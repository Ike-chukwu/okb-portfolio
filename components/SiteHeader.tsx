"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  links: NavLink[];
};

export default function SiteHeader({ links }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgb(248_246_241_/_0.92)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/#home" className="flex flex-col leading-none text-black">
          <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-black/45">
            Portfolio
          </span>
          <span className="font-display text-3xl tracking-[0.16em]">OKB</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-black/65 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-black transition hover:bg-black hover:text-white md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 origin-center bg-current transition duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : "translate-y-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-5 origin-center bg-current transition duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-x-0 top-full border-b border-[var(--line)] bg-[color:rgb(248_246_241_/_0.97)] backdrop-blur-xl transition-all duration-300 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-5 sm:px-8">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black/78 transition hover:bg-black hover:text-white"
                style={{
                  transitionDelay: menuOpen ? `${index * 40}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
