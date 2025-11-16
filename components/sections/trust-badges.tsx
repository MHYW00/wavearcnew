"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Shield, Clock, Award, Lock } from "lucide-react"

const badges = [
  { key: "support", icon: Clock },
  { key: "delivery", icon: Award },
  { key: "quality", icon: Shield },
  { key: "security", icon: Lock }
]

export function TrustBadges() {
  const t = useTranslations("trust")

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl glass-card text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-sm md:text-base">
                  {t(badge.key)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
