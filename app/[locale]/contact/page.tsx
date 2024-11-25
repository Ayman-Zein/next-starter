import { useTranslations } from "next-intl";

// with client side rendering example
const ContactPage = () => {
  const t = useTranslations("ContactPage");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};
export default ContactPage;
