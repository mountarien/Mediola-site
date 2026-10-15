import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
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
      <body className="min-h-full flex flex-col bg-sand-50 text-navy-900 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
