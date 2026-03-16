"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { HeaderProps } from "./header.types";

/**
 * Site header with nav and locale switcher. Semantic <header> for a11y and SEO.
 */
export function Header({ className = "" }: HeaderProps) {
  const t = useTranslations("header");
  const tSwitcher = useTranslations("localeSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const isEn = locale === "en";
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
            href="#section-1"
            className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
          >
            {t("navSection1")}
          </Link>
          <Link
            href="#section-2"
            className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-base"
          >
            {t("navSection2")}
          </Link>
          <span className="text-zinc-400 dark:text-zinc-500" aria-hidden>
            |
          </span>
          <div className="flex gap-2" role="group" aria-label={tSwitcher("ariaLabel")}>
            <Link
              href={pathname}
              locale="en"
              className={`text-sm font-medium sm:text-base ${
                isEn
                  ? "text-foreground underline"
                  : "text-zinc-500 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {tSwitcher("en")}
            </Link>
            <Link
              href={pathname}
              locale="ru"
              className={`text-sm font-medium sm:text-base ${
                !isEn
                  ? "text-foreground underline"
                  : "text-zinc-500 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {tSwitcher("ru")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
