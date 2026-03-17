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
  const tel2Value = t("contactsTel2Value");
  const tel2Href = tel2Value.replace(/\s*\(.*\)$/, "");
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1" role="main">
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-10 xl:px-12 2xl:mx-auto 2xl:max-w-[2560px]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 sm:text-base">
              {t("heroKicker")}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              {t("heroSubtitle")}
            </p>
          </div>
        </section>

        <CenteredSection id="profession" title={t("professionTitle")}>
          <p>{t("professionText")}</p>
        </CenteredSection>

        <CenteredSection id="history" title={t("historyTitle")}>
          <p>{t("historyParagraph1")}</p>
          <p>{t("historyParagraph2")}</p>
          <p>{t("historyParagraph3")}</p>
          <p>{t("historyParagraph4")}</p>
        </CenteredSection>

        <CenteredSection id="products" title={t("productsTitle")}>
          <p>{t("productsIntro")}</p>
          <ul className="mt-4 list-disc pl-5">
            <li>{t("productsItem1")}</li>
            <li>{t("productsItem2")}</li>
            <li>{t("productsItem3")}</li>
            <li>{t("productsItem4")}</li>
          </ul>
        </CenteredSection>

        <CenteredSection id="quality" title={t("qualityTitle")}>
          <p>{t("qualityParagraph1")}</p>
          <p>{t("qualityParagraph2")}</p>
          <p>{t("qualityParagraph3")}</p>
        </CenteredSection>

        <CenteredSection id="offer" title={t("offerTitle")}>
          <ul className="list-disc pl-5">
            <li>{t("offerItem1")}</li>
            <li>{t("offerItem2")}</li>
            <li>{t("offerItem3")}</li>
            <li>{t("offerItem4")}</li>
          </ul>
        </CenteredSection>

        <CenteredSection id="goal" title={t("goalTitle")}>
          <p>{t("goalText")}</p>
        </CenteredSection>

        <CenteredSection id="contacts" title={t("contactsTitle")}>
          <ul className="space-y-1">
            <li>
              <span className="font-medium text-foreground">{t("contactsEmailLabel")}:</span>{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href={`mailto:${t("contactsEmailValue")}`}
              >
                {t("contactsEmailValue")}
              </a>
            </li>
            <li>
              <span className="font-medium text-foreground">{t("contactsTel1Label")}:</span>{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href={`tel:${t("contactsTel1Value")}`}
              >
                {t("contactsTel1Value")}
              </a>
            </li>
            <li>
              <span className="font-medium text-foreground">{t("contactsTel2Label")}:</span>{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href={`tel:${tel2Href}`}
              >
                {tel2Value}
              </a>
            </li>
            <li>
              <span className="font-medium text-foreground">{t("contactsWebsiteLabel")}:</span>{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href={`https://${t("contactsWebsiteValue")}`}
                target="_blank"
                rel="noreferrer"
              >
                {t("contactsWebsiteValue")}
              </a>
            </li>
            <li>
              <span className="font-medium text-foreground">{t("contactsMirrorLabel")}:</span>{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href={t("contactsMirrorValue")}
                target="_blank"
                rel="noreferrer"
              >
                {t("contactsMirrorValue")}
              </a>
            </li>
          </ul>
          <p className="mt-6 font-medium text-foreground">{t("closing")}</p>
        </CenteredSection>
      </main>
      <Footer />
    </>
  );
}
