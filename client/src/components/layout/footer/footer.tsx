"use client";

import { useTranslations } from "next-intl";
import type { FooterProps } from "./footer.types";

/**
 * Site footer. Semantic <footer> for accessibility and SEO.
 */
export function Footer({ className = "" }: FooterProps) {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`mt-auto w-full border-t border-zinc-200 bg-background px-4 py-6 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 sm:px-6 sm:py-8 md:px-8 lg:px-10 xl:px-12 2xl:max-w-[2560px] 2xl:mx-auto ${className}`}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <p>{t("copyright", { year: currentYear })}</p>
      </div>
    </footer>
  );
}
