export const locales = ["id", "en"] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = "id";

export function isValidLocale(value: string): value is AppLocale {
  return (locales as readonly string[]).includes(value);
}
