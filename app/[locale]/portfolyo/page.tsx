"use client"

import { useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import projects from "@/lib/data/projects.json"
import { ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const t = useTranslations('portfolio')
  const locale = useLocale()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { key: 'all', label: t('filters.all') },
    { key: 'web', label: t('filters.web') },
    { key: 'mobile', label: t('filters.mobile') },
    { key: 'api', label: t('filters.api') },
    { key: 'enterprise', label: t('filters.enterprise') }
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

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

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <div className="flex flex-col page-transition">
      {/* Hero Section */}
      <section className="w-full py-20 sm:py-24 md:py-32 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full py-8 sticky top-16 z-40 glass-strong border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <Button
                key={category.key}
                variant="ghost"
                onClick={() => setActiveCategory(category.key)}
                className={`
                  neomorph-button tactile-button px-6 py-2 rounded-xl font-medium transition-all
                  ${activeCategory === category.key
                    ? 'bg-slate-100 dark:bg-slate-900 text-foreground'
                    : 'bg-background text-muted-foreground hover:text-foreground hover:bg-slate-50 dark:hover:bg-slate-950'
                  }
                `}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="w-full py-16 sm:py-20 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
            >
              {filteredProjects.map((project, index) => {
                // Bento grid sizing logic - some cards are larger
                const isLarge = project.size === 'large'
                const isTall = project.size === 'tall'
                const spanClass = isLarge ? 'md:col-span-2' : isTall ? 'md:row-span-2' : ''

                return (
                  <motion.div
                    key={project.id}
                    variants={item}
                    layout
                    className={spanClass}
                  >
                    <a href={`/${locale}/portfolyo/${project.slug}`}>
                      <Card className="h-full group cursor-pointer neomorph-card bg-background border-0 hover:translate-y-[-4px] transition-all duration-300 overflow-hidden">
                        {/* Project Image */}
                        <div className={`relative w-full ${isTall ? 'h-96' : 'h-64'} overflow-hidden`}>
                          <img
                            src="/clients/senoz2.webp"
                            alt={project.title[locale as 'tr' | 'en']}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/50 to-blue-900/60" />

                          {/* Category badge floating */}
                          <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white uppercase tracking-wider">
                            {project.category}
                          </div>

                          {/* Project title overlay on hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-950/50 backdrop-blur-sm">
                            <div className="text-center space-y-3">
                              <ExternalLink className="h-12 w-12 text-white mx-auto" />
                              <p className="text-white text-sm font-medium">View Project</p>
                            </div>
                          </div>
                        </div>

                      <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl font-bold">
                          {project.title[locale as 'tr' | 'en']}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base leading-relaxed">
                          {project.description[locale as 'tr' | 'en']}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                              {t('technologies')}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 text-xs rounded-lg neomorph-inset bg-slate-50 dark:bg-slate-900 text-foreground font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    </a>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-muted-foreground">
                Bu kategoride henüz proje bulunmuyor.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 sm:py-20 relative bg-background border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { value: '10+', label: 'Tamamlanan Proje' },
              { value: '20+', label: 'Mutlu Müşteri' },
              { value: '3+', label: 'Yıl Deneyim' },
              { value: '98%', label: 'Başarı Oranı' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
