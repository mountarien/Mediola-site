import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-300">
      <div className="mx-auto max-w-6xl px-6 h-18 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display font-700 text-xl tracking-tight text-navy-900">
            MEDIOLA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/quote"
          className="inline-flex items-center rounded-md bg-amber-500 px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
