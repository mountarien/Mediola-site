import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old B2B routes now live under the new homeowner-facing structure.
  async redirects() {
    return [
      { source: "/services", destination: "/living", permanent: true },
      { source: "/work", destination: "/homes", permanent: true },
      { source: "/quote", destination: "/developers", permanent: true },
    ];
  },
};

export default nextConfig;
