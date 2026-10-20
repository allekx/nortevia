import { images, site } from "@/lib/site";

export const seo = {
  title: "NorteVia | Locação de Caixa Estacionária de 5 m³ em Manaus",
  titleTemplate: "%s | NorteVia",
  description:
    "Locação de caixa estacionária de 5 m³ em Manaus para obras, reformas e entulho. Consulte o valor e a disponibilidade para o seu endereço.",
} as const;

const reservedHosts = new Set([
  "localhost",
  "127.0.0.1",
  "::1",
  "example.com",
  "www.example.com",
  "exemplo.com",
  "www.exemplo.com",
]);

export function getPublicSiteUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!raw) {
    return undefined;
  }

  try {
    const url = new URL(raw);
    const hostname = url.hostname.toLowerCase();

    if (url.protocol !== "https:") {
      return undefined;
    }

    if (reservedHosts.has(hostname)) {
      return undefined;
    }

    return url.origin;
  } catch {
    return undefined;
  }
}

export const socialImage = {
  path: images.hero.src,
  alt: images.hero.alt,
} as const;

export const siteName = site.name;
