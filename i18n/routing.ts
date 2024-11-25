import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
  // A list of all routes with their pathnames for each locale
  pathnames: {
    "/": {
      en: "/",
      fr: "/",
      ar: "/",
    },
    "/about": {
      en: "/about",
      fr: "/a-propos",
      ar: "/عن-الموقع",
    },
    "/contact": {
      en: "/contact",
      fr: "/contact",
      ar: "/اتصل-بنا",
    },
    "/login": {
      en: "/login",
      fr: "/login",
      ar: "/تسجيل-الدخول",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing)["locales"][number]; // "en" | "fr" | "ar" (create new type for locale )
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
