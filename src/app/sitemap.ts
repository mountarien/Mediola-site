import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Add a line here whenever a new page is created.
const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/living", priority: 0.9 },
  { path: "/homes", priority: 0.8 },
  { path: "/consultation", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/developers", priority: 0.6 },
  { path: "/support", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
