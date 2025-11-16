"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  {
    name: "Senoz Ekovadi",
    logo: "/clients/senoz.png",
    url: null
  },
  {
    name: "T.C. Çayeli Kaymakamlığı",
    logo: "/clients/cayeli.png",
    url: "http://www.cayeli.gov.tr/"
  },
  {
    name: "DOKAP",
    logo: "/clients/dokap.png",
    url: "https://www.dokap.gov.tr/"
  },
  {
    name: "Viracup",
    logo: "/clients/viracup.png",
    url: "https://viracuponline.com/"
  }
]

export function References() {
  const t = useTranslations("references")

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 rounded-2xl overflow-hidden aspect-square transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )

            if (client.url) {
              return (
                <a
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  {content}
                </a>
              )
            }

            return <div key={client.name}>{content}</div>
          })}
        </div>
      </div>
    </section>
  )
}
