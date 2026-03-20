"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { locales } from "@/i18n/locales";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { HeaderProps } from "./header.types";

/**
 * Site header with nav and locale switcher. Semantic <header> for a11y and SEO.
 */
/** Path without locale segment so Link + locale doesn't duplicate locale. */
function getPathWithoutLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];
  if (first && locales.includes(first as (typeof locales)[number])) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function Header({ className = "" }: HeaderProps) {
  const t = useTranslations("header");
  const tSwitcher = useTranslations("localeSwitcher");
  const locale = useLocale();
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const pathForLocale = getPathWithoutLocale(pathname);
  const localeFromUrl = params?.locale;
  const activeLocale = (locales.includes(localeFromUrl as never)
    ? (localeFromUrl as (typeof locales)[number])
    : (locale as (typeof locales)[number]));

  const localeOptions: Array<{ value: (typeof locales)[number]; label: string }> =
    [
      { value: "en", label: "EN" },
      { value: "zh", label: "CN" },
      { value: "fr", label: "FR" },
      { value: "it", label: "IT" },
      { value: "ar", label: "AR" },
      { value: "nl", label: "NL" },
      { value: "ja", label: "JP" },
      { value: "hi", label: "HI" },
      { value: "ko", label: "KO" },
      { value: "sv", label: "SV" },
      { value: "ru", label: "RU" },
      { value: "fi", label: "FI" },
      ...locales
        .filter(
          (l) =>
            ![
              "en",
              "zh",
              "fr",
              "it",
              "ar",
              "nl",
              "ja",
              "hi",
              "ko",
              "sv",
              "ru",
              "fi",
            ].includes(l)
        )
        .map((l) => ({ value: l, label: l.toUpperCase() })),
    ];
  return (
    <header
      className={`w-full border-b border-zinc-200 bg-background px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-10 xl:px-12 2xl:max-w-[2560px] 2xl:mx-auto dark:border-zinc-800 ${className}`}
      role="banner"
    >
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Link
          href="/"
          locale={activeLocale}
          className="block w-full text-center text-lg font-semibold leading-snug text-foreground sm:w-auto sm:shrink-0 sm:text-start sm:text-xl"
        >
          {t("siteName")}
        </Link>
        <nav
          aria-label={t("ariaNav")}
          className="flex w-full shrink-0 items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-4 md:gap-6"
        >
          <div className="w-[88px] sm:w-[112px]" aria-label={tSwitcher("ariaLabel")}>
            <Select
              value={activeLocale}
              onValueChange={(nextLocale) => {
                if (nextLocale === activeLocale) return;
                router.push(pathForLocale, { locale: nextLocale as (typeof locales)[number] });
              }}
            >
              <SelectTrigger aria-label={tSwitcher("ariaLabel")} className="h-8 px-2 text-xs sm:h-9 sm:px-3 sm:text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  {localeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Image
            src="/logo.webp"
            width={80}
            height={80}
            alt={t("siteName")}
            className="h-10 w-10 rounded-sm object-contain sm:h-12 sm:w-12 lg:h-16 lg:w-16"
          />
        </nav>
      </div>
    </header>
  );
}
