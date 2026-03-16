import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { CenteredSection } from "@/components/sections/centered-section/centered-section";

type Props = { params: Promise<{ locale: string }> };

/**
 * Home page: semantic layout with header, two centered sections, footer.
 * Responsive from 320px to 4K. Content from i18n.
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1" role="main">
        <CenteredSection id="section-1" title={t("section1Title")}>
          <p>{t("section1Content")}</p>
        </CenteredSection>
        <CenteredSection id="section-2" title={t("section2Title")}>
          <p>{t("section2Content")}</p>
        </CenteredSection>
      </main>
      <Footer />
    </>
  );
}
