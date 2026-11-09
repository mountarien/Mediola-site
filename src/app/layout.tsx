import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contact, siteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Structured data so search engines can identify the business. Contact
// fields are left out until they are filled in src/lib/site.ts.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Mediola",
  url: siteUrl,
  description:
    "Smart home systems for homes in the UAE: lighting, climate, security, intercom and music, designed, installed and supported locally.",
  image: `${siteUrl}/mediola_projects/completed_projects/paragon-living.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  ...(contact.phone && { telephone: contact.phone }),
  ...(contact.email && { email: contact.email }),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mediola | Smart homes that take care of you",
    template: "%s | Mediola",
  },
  description:
    "Come home to a home that already knows. Mediola makes lighting, climate, security and music in your UAE home effortless — one touch, one voice, or no thought at all.",
  openGraph: {
    title: "Mediola | Smart homes that take care of you",
    description:
      "Lighting, climate, security and music that respond to your life. Book a free home visit in the UAE.",
    images: ["/mediola_projects/completed_projects/paragon-living.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      {/* Browser extensions (e.g. Grammarly) add attributes to <body> before React loads */}
      <body
        className="min-h-full flex flex-col bg-sand-50 text-navy-900 font-sans"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
