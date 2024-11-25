import { Link } from "@/i18n/routing";
import { getSession } from "@/lib/getSession";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  const session = await getSession();
  const user = session?.user;
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}
