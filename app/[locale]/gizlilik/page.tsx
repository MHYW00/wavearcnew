import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "privacy" })

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  }
}

export default function PrivacyPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = useTranslations("privacy")

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

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold">{t("collect.title")}</h2>

          <h3 className="text-xl font-semibold mt-4">{t("collect.provided.title")}</h3>
          <p>{t("collect.provided.text")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("collect.provided.name")}</li>
            <li>{t("collect.provided.email")}</li>
            <li>{t("collect.provided.phone")}</li>
            <li>{t("collect.provided.message")}</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">{t("collect.auto.title")}</h3>
          <p>{t("collect.auto.text")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("collect.auto.ip")}</li>
            <li>{t("collect.auto.browser")}</li>
            <li>{t("collect.auto.device")}</li>
            <li>{t("collect.auto.pages")}</li>
            <li>{t("collect.auto.cookies")}</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section>
          <h2 className="text-2xl font-semibold">{t("use.title")}</h2>
          <p>{t("use.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("use.respond")}</li>
            <li>{t("use.improve")}</li>
            <li>{t("use.analytics")}</li>
            <li>{t("use.security")}</li>
            <li>{t("use.legal")}</li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-2xl font-semibold">{t("thirdParty.title")}</h2>
          <p>{t("thirdParty.text")}</p>

          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Google Analytics</h4>
              <p className="text-sm">{t("thirdParty.google")}</p>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {t("thirdParty.privacyPolicy")}
              </a>
            </div>

            <div>
              <h4 className="font-semibold">Resend</h4>
              <p className="text-sm">{t("thirdParty.resend")}</p>
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {t("thirdParty.privacyPolicy")}
              </a>
            </div>

            <div>
              <h4 className="font-semibold">Vercel</h4>
              <p className="text-sm">{t("thirdParty.vercel")}</p>
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {t("thirdParty.privacyPolicy")}
              </a>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold">{t("security.title")}</h2>
          <p>{t("security.text")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("security.ssl")}</li>
            <li>{t("security.encryption")}</li>
            <li>{t("security.access")}</li>
            <li>{t("security.monitoring")}</li>
          </ul>
          <p className="mt-4">{t("security.disclaimer")}</p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-semibold">{t("retention.title")}</h2>
          <p>{t("retention.text")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("retention.contact")}</li>
            <li>{t("retention.analytics")}</li>
            <li>{t("retention.deletion")}</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-2xl font-semibold">{t("children.title")}</h2>
          <p>{t("children.text")}</p>
        </section>

        {/* International Transfers */}
        <section>
          <h2 className="text-2xl font-semibold">{t("international.title")}</h2>
          <p>{t("international.text")}</p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold">{t("rights.title")}</h2>
          <p>{t("rights.text")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("rights.access")}</li>
            <li>{t("rights.correction")}</li>
            <li>{t("rights.deletion")}</li>
            <li>{t("rights.objection")}</li>
            <li>{t("rights.portability")}</li>
          </ul>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-2xl font-semibold">{t("changes.title")}</h2>
          <p>{t("changes.text")}</p>
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
