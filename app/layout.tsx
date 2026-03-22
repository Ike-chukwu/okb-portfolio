import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist,
  Geist_Mono,
} from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "OKB | Videographer and Creative",
  description:
    "Professional portfolio for OKB featuring brand films, event coverage, and social video work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] antialiased">
        <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgb(248_246_241_/_0.92)] backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/#home" className="flex flex-col leading-none text-black">
              <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-black/45">
                Portfolio
              </span>
              <span className="font-display text-3xl tracking-[0.16em]">
                OKB
              </span>
            </Link>

            <nav className="flex flex-wrap items-center gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-[0.24em] text-black/65 transition hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
