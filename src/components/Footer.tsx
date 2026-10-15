import Link from "next/link";
import { contact, whatsappLink } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/living", label: "Smart living" },
      { href: "/homes", label: "Mediola homes" },
      { href: "/about", label: "Our story" },
    ],
  },
  {
    title: "Get started",
    links: [
      { href: "/consultation", label: "Book a free home visit" },
      { href: "/support", label: "Resident support" },
      { href: "/developers", label: "For developers & contractors" },
    ],
  },
];

export default function Footer() {
  const wa = whatsappLink();

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-white">Mediola</p>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            Smart homes that take care of you — designed, installed and
            supported in the UAE.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-200 mb-4">
              {col.title}
            </p>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-200 mb-4">
            Talk to us
          </p>
          <ul className="space-y-2.5 text-sm">
            {contact.phone && (
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
            )}
            {wa && (
              <li>
                <a href={wa} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            )}
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            )}
            <li>{contact.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-xs text-navy-200">
          © {new Date().getFullYear()} Mediola. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
