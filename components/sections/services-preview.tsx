"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Lightbulb, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code2,
    key: 'software',
  },
  {
    icon: Lightbulb,
    key: 'consulting',
  },
  {
    icon: Building2,
    key: 'corporate',
  }
]

export function ServicesPreview() {
  const t = useTranslations('services')

  // Staggered animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="w-full py-20 sm:py-24 md:py-32 relative bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.key} variants={cardVariant}>
                <Card className="h-full group cursor-pointer glass-card border-0">
                  <CardHeader>
                    {/* Icon Circle */}
                    <div className="inline-flex mb-6">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card"
                        whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8 text-foreground" />
                      </motion.div>
                    </div>

                    <CardTitle className="text-2xl mb-3 font-bold">
                      {t(`${service.key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {t(`${service.key}.description`)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`${service.key}.details`)}
                    </p>

                    {/* Hover Indicator */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{t('learnMore')}</span>
                      <span>→</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
