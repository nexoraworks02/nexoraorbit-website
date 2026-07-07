"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center rounded-lg bg-slate-950 text-lg font-bold text-white shadow-lg shadow-sky-200">
            NO
          </span>
          <span>
            <span className="block text-base font-bold text-slate-950">
              Nexora Orbit Digital
            </span>
            <span className="block text-xs font-medium text-slate-500">
              Digital Growth Solutions
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  active ? "text-sky-600" : "text-slate-700 hover:text-sky-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-md bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600 lg:inline-flex"
        >
          Get Free Consultation
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-slate-200 text-slate-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-sky-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-sky-500 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
