"use client"

import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import projects from "@/lib/data/projects.json"

export function PortfolioPreview() {
  const t = useTranslations('portfolio')
  const locale = useLocale()

  // Staggered animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="w-full py-20 sm:py-24 md:py-32 relative bg-slate-50 dark:bg-slate-950">
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

        {/* Portfolio Grid with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              className={project.size === 'large' ? 'md:col-span-2' : ''}
            >
              <Link href={`/${locale}/portfolyo/${project.slug}`}>
                <Card className="h-full group cursor-pointer glass-card border-0 overflow-hidden">
                {/* Project Preview Area */}
                <div className="relative w-full h-56 overflow-hidden">
                  {/* Background Image */}
                  <img
                    src="/clients/senoz2.png"
                    alt={project.title[locale as 'tr' | 'en']}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/50 to-blue-900/60 group-hover:from-green-900/70 group-hover:via-green-800/60 group-hover:to-blue-900/70 transition-all duration-300" />

                  {/* External Link Icon - Glassmorphism */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="glass p-2.5 rounded-xl border border-white/20 backdrop-blur-md bg-white/10">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:translate-x-1 transition-transform duration-300">
                    {project.title[locale as 'tr' | 'en']}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description[locale as 'tr' | 'en']}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
