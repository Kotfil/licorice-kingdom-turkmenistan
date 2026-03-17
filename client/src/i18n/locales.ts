export const locales = [
  "en",
  "ru",
  "fr",
  "sv",
  "zh",
  "ar",
  "hi",
  "ko",
  "ja",
  "it",
  "fi",
  "nl",
] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";

