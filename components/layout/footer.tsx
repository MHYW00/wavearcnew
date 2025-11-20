"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { Mail, Phone, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { CookieSettings } from "@/components/cookie-settings"

export function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const currentYear = new Date().getFullYear()
  const [showCookieSettings, setShowCookieSettings] = useState(false)

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/wavearc.co/", label: "Instagram" },
    {
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
        </svg>
      ),
      href: "https://apps.apple.com/tr/developer/mete-han-yildirim/id1841905668?l=tr",
      label: "App Store"
    }
  ]

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-background">
      {/* Schema.org Organization Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WaveArc",
            "alternateName": "WaveArc Yazılım",
            "url": "https://www.wavearc.co",
            "logo": "https://www.wavearc.co/clients/wavearc-siyah-logo.png",
            "description": "Modern yazılım çözümleri ve teknoloji danışmanlığı. Web, mobil ve kurumsal uygulamalar.",
            "email": "mete@wavearc.co",
            "telephone": "+905102210353",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TR",
              "addressLocality": "Turkey"
            },
            "sameAs": [
              "https://www.instagram.com/wavearc.co/",
              "https://apps.apple.com/tr/developer/mete-han-yildirim/id1841905668?l=tr"
            ],
            "foundingDate": "2025",
            "slogan": "Think Different, Build Better"
          })
        }}
      />
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/clients/wavearc-beyaz-logo.webp"
                alt="WaveArc Logo"
                width={40}
                height={40}
                className="h-10 w-auto dark:brightness-100 brightness-0"
              />
              <h3 className="text-2xl font-bold tracking-tighter text-foreground">
                WaveArc
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t('common.tagline')}.
            </p>

            {/* Social Links - Minimal */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('nav.home')}
            </h4>
            <nav className="flex flex-col space-y-3">
              {[
                { href: `/${locale}/hakkimizda`, label: t('nav.about') },
                { href: `/${locale}/hizmetler`, label: t('nav.services') },
                { href: `/${locale}/portfolyo`, label: t('nav.portfolio') },
                { href: `/${locale}/iletisim`, label: t('nav.contact') }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.legal')}
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href={`/${locale}/kvkk`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.kvkk')}
              </Link>
              <Link
                href={`/${locale}/gizlilik`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href={`/${locale}/kullanim-sartlari`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.terms')}
              </Link>
              <Link
                href={`/${locale}/cerezler`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.cookies')}
              </Link>
              <button
                onClick={() => setShowCookieSettings(true)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {t('footer.cookieSettings')}
              </button>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('contact.title')}
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href={`mailto:${t('common.email')}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                {t('common.email')}
              </a>
              <a
                href={`tel:${t('common.phone')}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                {t('common.phone')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} WaveArc. {t('footer.rights')}
          </p>
        </motion.div>
      </div>

      <CookieSettings
        open={showCookieSettings}
        onOpenChange={setShowCookieSettings}
      />
    </footer>
  )
}
