import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
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
  const description = messages.metadata.description;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Turkmen Licorice Co.",
      template: "%s | Turkmen Licorice Co.",
    },
    description,
    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      siteName: "Turkmen Licorice Co.",
      title: "Turkmen Licorice Co.",
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
  const messages = await getMessages();
  const isRtl = locale === "ar";
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "text-right" : ""}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
