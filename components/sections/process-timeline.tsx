"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Search, Ruler, Code, FlaskConical, Rocket } from "lucide-react"

const steps = [
  { key: "step1", icon: Search },
  { key: "step2", icon: Ruler },
  { key: "step3", icon: Code },
  { key: "step4", icon: FlaskConical },
  { key: "step5", icon: Rocket }
]

export function ProcessTimeline() {
  const t = useTranslations("process")

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
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

        {/* Timeline - Desktop */}
        <div className="hidden md:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 mb-8">
                    <div className="w-20 h-20 rounded-full glass-card border-0 flex items-center justify-center">
                      <Icon className="w-9 h-9 text-foreground" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-4"
              >
                {/* Left: Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full glass-card border-0 flex items-center justify-center relative">
                    <Icon className="w-7 h-7 text-foreground" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>

              {/* Right: Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-lg font-semibold mb-2">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`${step.key}.description`)}
                </p>
              </div>

              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border" />
              )}
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
