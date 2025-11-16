import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "cookies" })

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  }
}

export default function CookiesPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = useTranslations("cookies")

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

        {/* What Are Cookies */}
        <section>
          <h2 className="text-2xl font-semibold">{t("what.title")}</h2>
          <p>{t("what.text")}</p>
          <p className="mt-4">{t("what.purpose")}</p>
        </section>

        {/* Types of Cookies We Use */}
        <section>
          <h2 className="text-2xl font-semibold">{t("types.title")}</h2>
          <p>{t("types.text")}</p>

          {/* Essential Cookies */}
          <div className="mt-6 rounded-lg border p-4">
            <h3 className="text-xl font-semibold">{t("types.essential.title")}</h3>
            <p className="mt-2">{t("types.essential.text")}</p>
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <strong>{t("types.essential.session.name")}:</strong> {t("types.essential.session.purpose")}
              </div>
              <div>
                <strong>{t("types.essential.locale.name")}:</strong> {t("types.essential.locale.purpose")}
              </div>
              <div>
                <strong>{t("types.essential.theme.name")}:</strong> {t("types.essential.theme.purpose")}
              </div>
              <div>
                <strong>{t("types.essential.consent.name")}:</strong> {t("types.essential.consent.purpose")}
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-muted-foreground">
              {t("types.essential.required")}
            </p>
          </div>

          {/* Analytics Cookies */}
          <div className="mt-6 rounded-lg border p-4">
            <h3 className="text-xl font-semibold">{t("types.analytics.title")}</h3>
            <p className="mt-2">{t("types.analytics.text")}</p>
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <strong>_ga:</strong> {t("types.analytics.ga.purpose")} ({t("types.analytics.ga.duration")})
              </div>
              <div>
                <strong>_gid:</strong> {t("types.analytics.gid.purpose")} ({t("types.analytics.gid.duration")})
              </div>
              <div>
                <strong>_gat:</strong> {t("types.analytics.gat.purpose")} ({t("types.analytics.gat.duration")})
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary">
              {t("types.analytics.optional")}
            </p>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section>
          <h2 className="text-2xl font-semibold">{t("thirdParty.title")}</h2>
          <p>{t("thirdParty.text")}</p>

          <div className="mt-4">
            <h4 className="font-semibold">Google Analytics</h4>
            <p className="mt-2 text-sm">{t("thirdParty.google")}</p>
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              {t("thirdParty.learn")}
            </a>
          </div>
        </section>

        {/* Managing Cookies */}
        <section>
          <h2 className="text-2xl font-semibold">{t("manage.title")}</h2>
          <p>{t("manage.text")}</p>

          <h3 className="text-xl font-semibold mt-4">{t("manage.ourSettings.title")}</h3>
          <p>{t("manage.ourSettings.text")}</p>

          <h3 className="text-xl font-semibold mt-4">{t("manage.browser.title")}</h3>
          <p>{t("manage.browser.text")}</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              <strong>Chrome:</strong>{" "}
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {t("manage.browser.instructions")}
              </a>
            </li>
            <li>
              <strong>Firefox:</strong>{" "}
              <a
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {t("manage.browser.instructions")}
              </a>
            </li>
            <li>
              <strong>Safari:</strong>{" "}
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {t("manage.browser.instructions")}
              </a>
            </li>
            <li>
              <strong>Edge:</strong>{" "}
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {t("manage.browser.instructions")}
              </a>
            </li>
          </ul>

          <p className="mt-4 text-sm text-muted-foreground">{t("manage.warning")}</p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-2xl font-semibold">{t("updates.title")}</h2>
          <p>{t("updates.text")}</p>
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
