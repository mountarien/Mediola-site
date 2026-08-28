import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-stone-100 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <span className="font-display font-700 text-lg text-white">
            MEDIOLA
          </span>
          <p className="mt-3 text-sm text-navy-100 max-w-xs">
            Smart home systems for real estate developments across the UAE.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3">Company</p>
          <ul className="space-y-2 text-sm text-navy-100">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-white transition-colors">
                Work
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3">Get in touch</p>
          <ul className="space-y-2 text-sm text-navy-100">
            <li>
              <Link href="/quote" className="hover:text-white transition-colors">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white transition-colors">
                Support &amp; Maintenance
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-600">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-navy-100">
          © {new Date().getFullYear()} Mediola. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
