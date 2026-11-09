import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// The site loads everything from its own origin: no third-party scripts,
// fonts or images. Add the host here before embedding an outside service
// (analytics, a form backend, a map), otherwise the browser will block it.
const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js injects inline bootstrap scripts; dev mode also needs eval.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  // Old B2B routes now live under the new homeowner-facing structure.
  async redirects() {
    return [
      { source: "/services", destination: "/living", permanent: true },
      { source: "/work", destination: "/homes", permanent: true },
      { source: "/quote", destination: "/developers", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
