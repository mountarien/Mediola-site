import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mediola | Smart Home Solutions for UAE Developments",
  description:
    "Mediola designs and installs smart home systems for real estate developments across the UAE — switches, thermostats, sensors, intercoms, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-navy-900 font-body">
        {children}
      </body>
    </html>
  );
}
