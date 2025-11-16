import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "terms" })

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  }
}

export default function TermsPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = useTranslations("terms")

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">{t("title")}</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
        <p className="text-sm text-muted-foreground">
          {t("lastUpdated")}: 16.11.2025
        </p>

        {/* Introduction */}
        <section>
          <p className="text-lg">{t("intro.text")}</p>
        </section>

        {/* Acceptance */}
        <section>
          <h2 className="text-2xl font-semibold">{t("acceptance.title")}</h2>
          <p>{t("acceptance.text")}</p>
        </section>

        {/* Use of Website */}
        <section>
          <h2 className="text-2xl font-semibold">{t("use.title")}</h2>
          <p>{t("use.text")}</p>

          <h3 className="text-xl font-semibold mt-4">{t("use.permitted.title")}</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("use.permitted.info")}</li>
            <li>{t("use.permitted.services")}</li>
            <li>{t("use.permitted.contact")}</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">{t("use.prohibited.title")}</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("use.prohibited.illegal")}</li>
            <li>{t("use.prohibited.harm")}</li>
            <li>{t("use.prohibited.spam")}</li>
            <li>{t("use.prohibited.reverse")}</li>
            <li>{t("use.prohibited.scrape")}</li>
            <li>{t("use.prohibited.interfere")}</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold">{t("ip.title")}</h2>
          <p>{t("ip.text")}</p>
          <p className="mt-4">{t("ip.ownership")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("ip.logo")}</li>
            <li>{t("ip.design")}</li>
            <li>{t("ip.content")}</li>
            <li>{t("ip.code")}</li>
          </ul>
          <p className="mt-4">{t("ip.permission")}</p>
        </section>

        {/* User Content */}
        <section>
          <h2 className="text-2xl font-semibold">{t("userContent.title")}</h2>
          <p>{t("userContent.text")}</p>
          <p className="mt-4">{t("userContent.responsibility")}</p>
        </section>

        {/* Third-Party Links */}
        <section>
          <h2 className="text-2xl font-semibold">{t("links.title")}</h2>
          <p>{t("links.text")}</p>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-2xl font-semibold">{t("disclaimer.title")}</h2>
          <p>{t("disclaimer.text")}</p>
          <p className="mt-4 font-semibold">{t("disclaimer.asis")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("disclaimer.accuracy")}</li>
            <li>{t("disclaimer.availability")}</li>
            <li>{t("disclaimer.errors")}</li>
            <li>{t("disclaimer.results")}</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold">{t("liability.title")}</h2>
          <p>{t("liability.text")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("liability.indirect")}</li>
            <li>{t("liability.loss")}</li>
            <li>{t("liability.errors")}</li>
            <li>{t("liability.thirdParty")}</li>
          </ul>
        </section>

        {/* Indemnification */}
        <section>
          <h2 className="text-2xl font-semibold">{t("indemnification.title")}</h2>
          <p>{t("indemnification.text")}</p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-2xl font-semibold">{t("changes.title")}</h2>
          <p>{t("changes.text")}</p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-semibold">{t("law.title")}</h2>
          <p>{t("law.text")}</p>
        </section>

        {/* Contact */}
        <section className="mt-12 rounded-lg border bg-muted/50 p-6">
          <h2 className="text-2xl font-semibold">{t("contact.title")}</h2>
          <p className="mt-2">{t("contact.text")}</p>
          <p className="mt-4">
            <strong>{t("contact.email")}:</strong>{" "}
            <a href="mailto:mete@wavearc.co" className="text-primary hover:underline">
              mete@wavearc.co
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
