import type { Metadata, Viewport } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (
    await import(`../../../messages/${locale}.json`)
  ).default as { metadata: { description: string } };
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://licorice-kingdom-turkmenistan.example.com";
  const isEn = locale === "en";
  const description = messages.metadata.description;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: isEn
        ? "Licorice Kingdom Turkmenistan"
        : "Царство солодки Туркменистан",
      template: isEn ? "%s | Licorice Kingdom" : "%s | Царство солодки",
    },
    description,
    keywords: isEn
      ? ["licorice", "Turkmenistan", "natural products", "herbs"]
      : ["солодка", "Туркменистан", "натуральные продукты", "травы"],
    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      siteName: isEn
        ? "Licorice Kingdom Turkmenistan"
        : "Царство солодки Туркменистан",
      title: isEn
        ? "Licorice Kingdom Turkmenistan"
        : "Царство солодки Туркменистан",
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
