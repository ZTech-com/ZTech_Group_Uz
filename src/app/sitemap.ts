import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: "2026-01-01",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
