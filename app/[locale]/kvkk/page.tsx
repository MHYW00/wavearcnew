import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "kvkk" })

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  }
}

export default function KVKKPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = useTranslations("kvkk")

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">{t("title")}</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
        {/* Last Updated */}
        <p className="text-sm text-muted-foreground">
          {t("lastUpdated")}: 16.11.2025
        </p>

        {/* Introduction */}
        <section>
          <p className="text-lg">{t("intro.text")}</p>
        </section>

        {/* Data Controller */}
        <section>
          <h2 className="text-2xl font-semibold">{t("controller.title")}</h2>
          <p>{t("controller.text")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>{t("controller.company")}:</strong> WaveArc</li>
            <li><strong>{t("controller.email")}:</strong> mete@wavearc.co</li>
            <li><strong>{t("controller.website")}:</strong> https://wavearc.co</li>
          </ul>
        </section>

        {/* Personal Data */}
        <section>
          <h2 className="text-2xl font-semibold">{t("data.title")}</h2>
          <p>{t("data.text")}</p>

          <h3 className="text-xl font-semibold mt-4">{t("data.contact.title")}</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("data.contact.name")}</li>
            <li>{t("data.contact.email")}</li>
            <li>{t("data.contact.phone")}</li>
            <li>{t("data.contact.subject")}</li>
            <li>{t("data.contact.message")}</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">{t("data.technical.title")}</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("data.technical.ip")}</li>
            <li>{t("data.technical.browser")}</li>
            <li>{t("data.technical.device")}</li>
            <li>{t("data.technical.pages")}</li>
            <li>{t("data.technical.duration")}</li>
            <li>{t("data.technical.referrer")}</li>
          </ul>
        </section>

        {/* Processing Purpose */}
        <section>
          <h2 className="text-2xl font-semibold">{t("purpose.title")}</h2>
          <p>{t("purpose.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("purpose.communication")}</li>
            <li>{t("purpose.service")}</li>
            <li>{t("purpose.analytics")}</li>
            <li>{t("purpose.security")}</li>
            <li>{t("purpose.legal")}</li>
          </ul>
        </section>

        {/* Legal Basis */}
        <section>
          <h2 className="text-2xl font-semibold">{t("legal.title")}</h2>
          <p>{t("legal.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t("legal.consent.title")}:</strong> {t("legal.consent.text")}</li>
            <li><strong>{t("legal.contract.title")}:</strong> {t("legal.contract.text")}</li>
            <li><strong>{t("legal.legitimate.title")}:</strong> {t("legal.legitimate.text")}</li>
            <li><strong>{t("legal.obligation.title")}:</strong> {t("legal.obligation.text")}</li>
          </ul>
        </section>

        {/* Data Transfer */}
        <section>
          <h2 className="text-2xl font-semibold">{t("transfer.title")}</h2>
          <p>{t("transfer.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Resend (ABD):</strong> {t("transfer.resend")}</li>
            <li><strong>Google Analytics (ABD):</strong> {t("transfer.google")}</li>
            <li><strong>Vercel (ABD):</strong> {t("transfer.vercel")}</li>
          </ul>
          <p className="mt-4">{t("transfer.protection")}</p>
        </section>

        {/* Retention */}
        <section>
          <h2 className="text-2xl font-semibold">{t("retention.title")}</h2>
          <p>{t("retention.text")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("retention.contact")}</li>
            <li>{t("retention.analytics")}</li>
            <li>{t("retention.logs")}</li>
          </ul>
        </section>

        {/* Rights */}
        <section>
          <h2 className="text-2xl font-semibold">{t("rights.title")}</h2>
          <p>{t("rights.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("rights.learn")}</li>
            <li>{t("rights.purpose")}</li>
            <li>{t("rights.thirdParty")}</li>
            <li>{t("rights.correction")}</li>
            <li>{t("rights.deletion")}</li>
            <li>{t("rights.notification")}</li>
            <li>{t("rights.objection")}</li>
            <li>{t("rights.complaint")}</li>
          </ul>
        </section>

        {/* Application */}
        <section>
          <h2 className="text-2xl font-semibold">{t("application.title")}</h2>
          <p>{t("application.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("application.email")}</li>
            <li>{t("application.identity")}</li>
            <li>{t("application.specific")}</li>
          </ul>
          <p className="mt-4">{t("application.response")}</p>
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
