"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/locales";
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
  const pathname = usePathname();
  const pathForLocale = getPathWithoutLocale(pathname);
  const activeLocale = locale as (typeof locales)[number];

  const localeOptions: Array<{ value: (typeof locales)[number]; label: string }> =
    [
      { value: "en", label: "EN" },
      { value: "ru", label: "RU" },
      { value: "fr", label: "FR" },
      { value: "sv", label: "SV" },
      { value: "zh", label: "中文" },
      { value: "ar", label: "AR" },
      { value: "hi", label: "HI" },
      { value: "ko", label: "KO" },
      { value: "ja", label: "JA" },
      { value: "it", label: "IT" },
      { value: "fi", label: "FI" },
      { value: "nl", label: "NL" }
    ];
  return (
    <header
      className={`w-full border-b border-zinc-200 bg-background px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-10 xl:px-12 2xl:max-w-[2560px] 2xl:mx-auto dark:border-zinc-800 ${className}`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground sm:text-xl"
        >
          {t("siteName")}
        </Link>
        <nav aria-label={t("ariaNav")} className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#profession"
            className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
          >
            {t("navSection1")}
          </Link>
          <Link
            href="#products"
            className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
          >
            {t("navSection2")}
          </Link>
          <span className="text-zinc-400 dark:text-zinc-500" aria-hidden>
            |
          </span>
          <div className="flex flex-wrap items-center justify-end gap-2" role="group" aria-label={tSwitcher("ariaLabel")}>
            {localeOptions.map((option) => (
              <Link
                key={option.value}
                href={pathForLocale}
                locale={option.value}
                className={`text-sm font-medium sm:text-base ${
                  activeLocale === option.value
                    ? "text-foreground underline"
                    : "text-zinc-500 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
