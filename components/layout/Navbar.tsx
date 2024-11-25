"use client";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { useTranslations } from "use-intl";

type NavbarProps = {
  onSignOut: () => Promise<void>;
};

const Navbar: React.FC<NavbarProps> = ({ onSignOut }) => {
  const session = useSession();
  const user = session?.data?.user;
  console.log({ user });
  const t = useTranslations("Navbar");

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="flex justify-around items-center py-4 bg-[#141414] text-white">
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-lg font-bold hover:text-gray-300"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="md:flex items-center space-x-4 list-none">
        {!user ? (
          <>
            <li>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                onSignOut();
              }}
            >
              Logout
            </Button>
          </li>
        )}
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
