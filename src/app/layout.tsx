import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { getPublicSiteUrl, seo, siteName, socialImage } from "@/lib/seo";
import { images } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const siteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  applicationName: siteName,
  icons: {
    icon: images.logo.src,
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: {
          canonical: "/",
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName,
    title: seo.title,
    description: seo.description,
    ...(siteUrl
      ? {
          url: "/",
          images: [
            {
              url: socialImage.path,
              alt: socialImage.alt,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: seo.title,
    description: seo.description,
    ...(siteUrl
      ? {
          images: [socialImage.path],
        }
      : {}),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
        <RevealObserver />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
