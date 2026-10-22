import type { Metadata } from "next";
import { Audience } from "@/components/home/Audience";
import { Benefits } from "@/components/home/Benefits";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Service } from "@/components/home/Service";
import { getPublicSiteUrl } from "@/lib/seo";

const siteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl
    ? {
        alternates: {
          canonical: "/",
        },
        openGraph: {
          url: "/",
        },
      }
    : {}),
};

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <Benefits />
      <Service />
      <Pricing />
      <HowItWorks />
      <Audience />
      <Faq />
      <FinalCta />
    </main>
  );
}
