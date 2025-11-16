"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero')
  const common = useTranslations('common')

  // Staggered animation for children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <motion.div
          className="flex flex-col items-center text-center space-y-8 sm:space-y-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Logo with Glow Effect */}
          <motion.div
            variants={item}
            className="relative"
          >
            <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
            <img
              src="/clients/wavearc-beyaz-logo.png"
              alt="WaveArc"
              className="relative h-28 sm:h-36 md:h-44 w-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Main Heading - Bold and Geometric */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-5xl"
            variants={item}
          >
            <span className="text-foreground">{t('title')}</span>
            {" "}
            <span className="text-slate-600 dark:text-slate-400">
              {t('titleHighlight')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            variants={item}
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons - Neomorphic Design */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={item}
          >
            {/* Primary Button - Neomorphic Raised */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="neomorph-button tactile-button bg-slate-50 dark:bg-slate-900 text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 border-0 px-8 py-6 text-base font-semibold"
              >
                <Link href={`/${locale}/iletisim`} className="flex items-center gap-2">
                  {t('cta')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Secondary Button - Neomorphic Inset */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="neomorph-inset tactile-button bg-background text-foreground hover:bg-slate-50 dark:hover:bg-slate-900 border-0 px-8 py-6 text-base font-semibold"
              >
                <Link href={`/${locale}/portfolyo`}>
                  {t('ctaSecondary')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Subtle Accent Indicator */}
          <motion.div
            className="pt-8"
            variants={item}
          >
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
