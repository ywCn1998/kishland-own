import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fa"],
  defaultLocale: "fa", // ✅ must be 'en' or 'fa'
  localePrefix: "always",
});
