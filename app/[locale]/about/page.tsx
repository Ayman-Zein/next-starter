import { getTranslations } from "next-intl/server";
import Link from "next/link";
// with server side rendering example
const AboutPage = async () => {
  const t = await getTranslations("AboutPage");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href="/">{t("home")}</Link>
    </>
  );
};
export default AboutPage;
