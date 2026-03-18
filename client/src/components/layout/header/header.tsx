"use client";

import { useTranslations, useLocale } from "next-intl";
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
          locale={activeLocale}
          className="text-lg font-semibold text-foreground sm:text-xl"
        >
          {t("siteName")}
        </Link>
        <nav aria-label={t("ariaNav")} className="flex items-center gap-4 sm:gap-6">
          <div className="w-[112px]" aria-label={tSwitcher("ariaLabel")}>
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
        </nav>
      </div>
    </header>
  );
}
