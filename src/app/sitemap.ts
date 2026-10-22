import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getPublicSiteUrl();

  if (!siteUrl) {
    return [];
  }

  return [
    {
      url: siteUrl,
    },
    {
      url: `${siteUrl}/bio`,
    },
  ];
}
