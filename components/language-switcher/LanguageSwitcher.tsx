"use client";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  const locale = useLocale();

  return (
    <select
      className="bg-[#141414] text-white mx-3"
      value={locale}
      onChange={(e) => {
        const selectedLocale = e.target.value as Locale;
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          { pathname, params },
          { locale: selectedLocale as Locale }
        );
      }}
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
};
export default LanguageSwitcher;
