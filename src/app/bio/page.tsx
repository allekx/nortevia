import type { Metadata, Viewport } from "next";
import { BioPage } from "@/components/bio/BioPage";
import { getPublicSiteUrl, seo, socialImage } from "@/lib/seo";

const siteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  title: seo.bio.title,
  description: seo.bio.description,
  openGraph: {
    title: `${seo.bio.title} | NorteVia`,
    description: seo.bio.description,
    images: [
      {
        url: socialImage.path,
        alt: socialImage.alt,
      },
    ],
    ...(siteUrl ? { url: "/bio" } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${seo.bio.title} | NorteVia`,
    description: seo.bio.description,
    images: [socialImage.path],
  },
  ...(siteUrl
    ? {
        alternates: {
          canonical: "/bio",
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function Bio() {
  return <BioPage />;
}
