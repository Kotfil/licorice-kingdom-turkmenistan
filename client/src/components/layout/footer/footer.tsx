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
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start md:text-left">
          <div>
            <p>{t("copyright", { year: currentYear })}</p>
          </div>
          <div className="max-w-xl">
            <p className="mb-3 font-semibold text-foreground">{t("contactsTitle")}</p>
            <ul className="space-y-1">
              <li>
                <span className="font-medium text-foreground">{t("addressLabel")}:</span>{" "}
                <span>{t("addressValue")}</span>
              </li>
              <li>
                <span className="font-medium text-foreground">{t("emailLabel")}:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:text-foreground"
                  href={`mailto:${t("emailValue")}`}
                >
                  {t("emailValue")}
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">{t("tel1Label")}:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:text-foreground"
                  href={`tel:${t("tel1Value")}`}
                >
                  {t("tel1Value")}
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">{t("tel2Label")}:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:text-foreground"
                  href={`tel:${t("tel2Value")}`}
                >
                  {t("tel2Value")}
                </a>{" "}
                <span className="text-zinc-500 dark:text-zinc-400">{t("tel2Note")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
