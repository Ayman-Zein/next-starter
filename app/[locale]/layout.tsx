import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { handleSignOut } from "@/actions";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <SessionProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar onSignOut={handleSignOut} />
            <main>{children}</main>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
