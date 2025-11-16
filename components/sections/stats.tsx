"use client"

import { motion } from "framer-motion"
import { Users, Code, Award, Smile } from "lucide-react"
import { useTranslations } from "next-intl"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  {
    icon: Users,
    value: 20,
    suffix: "+",
    key: "clients"
  },
  {
    icon: Code,
    value: 10,
    suffix: "+",
    key: "projects"
  },
  {
    icon: Award,
    value: 3,
    suffix: "+",
    key: "experience"
  },
  {
    icon: Smile,
    value: 98,
    suffix: "%",
    key: "satisfaction"
  }
]

export function Stats() {
  const t = useTranslations("stats")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="w-full py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.key}
                variants={item}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-foreground" />
                </div>
                <div className="text-4xl font-bold tracking-tighter text-foreground mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  {t(stat.key)}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
