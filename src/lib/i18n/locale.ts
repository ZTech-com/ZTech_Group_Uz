export type Locale = "en" | "uz" | "ru";

export const DEFAULT_LOCALE: Locale = "uz";

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "uz", label: "O'zbekcha", short: "UZ" },
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "RU" },
];
