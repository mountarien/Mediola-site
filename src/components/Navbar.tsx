"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/living", label: "Smart living" },
  { href: "/homes", label: "Mediola homes" },
  { href: "/about", label: "Our story" },
  { href: "/support", label: "Residents" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand-50/85 backdrop-blur-md border-b border-sand-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-18 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/mediola-logo.svg"
            alt=""
            width={34}
            height={30}
            className="h-7 w-auto"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-navy-900">
            Mediola
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-navy-900" : "text-navy-400 hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/consultation"
            className="hidden sm:inline-flex items-center rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-700 transition-colors"
          >
            Book a free home visit
          </Link>
          <button
            type="button"
            className="md:hidden -mr-2 p-2 text-navy-900"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden border-t border-sand-200 bg-sand-50 px-5 pb-6 pt-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-2xl text-navy-900 border-b border-sand-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/consultation"
            onClick={() => setOpen(false)}
            className="mt-6 flex justify-center rounded-full bg-amber-500 px-5 py-3.5 text-sm font-semibold text-navy-950"
          >
            Book a free home visit
          </Link>
        </nav>
      )}
    </header>
  );
}
