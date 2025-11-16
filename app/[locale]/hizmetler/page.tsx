"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Lightbulb, Building2, CheckCircle2, Smartphone, Globe, Database, Cloud, Cpu, Shield, BarChart, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const t = useTranslations('services')

  const services = [
    {
      icon: Code2,
      key: 'software',
      color: 'slate',
      features: [
        { icon: Globe, textKey: 'features.webApps' },
        { icon: Smartphone, textKey: 'features.mobileApps' },
        { icon: Database, textKey: 'features.apiDev' },
        { icon: Cloud, textKey: 'features.cloudSolutions' }
      ]
    },
    {
      icon: Lightbulb,
      key: 'consulting',
      color: 'slate',
      features: [
        { icon: Zap, textKey: 'features.digitalTransform' },
        { icon: Cpu, textKey: 'features.techArchitecture' },
        { icon: Shield, textKey: 'features.securityCompliance' },
        { icon: BarChart, textKey: 'features.performanceOpt' }
      ]
    },
    {
      icon: Building2,
      key: 'corporate',
      color: 'slate',
      features: [
        { icon: Database, textKey: 'features.erpSystems' },
        { icon: Globe, textKey: 'features.crmSolutions' },
        { icon: BarChart, textKey: 'features.businessIntel' },
        { icon: Cloud, textKey: 'features.systemIntegration' }
      ]
    }
  ]

  const process = [
    {
      step: '01',
      titleKey: 'processSteps.step1Title',
      descKey: 'processSteps.step1Desc'
    },
    {
      step: '02',
      titleKey: 'processSteps.step2Title',
      descKey: 'processSteps.step2Desc'
    },
    {
      step: '03',
      titleKey: 'processSteps.step3Title',
      descKey: 'processSteps.step3Desc'
    },
    {
      step: '04',
      titleKey: 'processSteps.step4Title',
      descKey: 'processSteps.step4Desc'
    },
    {
      step: '05',
      titleKey: 'processSteps.step5Title',
      descKey: 'processSteps.step5Desc'
    }
  ]

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

  const item = {
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

      {/* Main Services Grid */}
      <section className="w-full py-16 sm:py-20 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div key={service.key} variants={item}>
                  <Card className="h-full group cursor-pointer glass-card bg-background border-0 hover:translate-y-[-4px] transition-all duration-300">
                    <CardHeader className="space-y-6">
                      {/* Icon with Neomorphic Circle */}
                      <div className="inline-flex">
                        <motion.div
                          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl neomorph-inset bg-slate-100 dark:bg-slate-900"
                          whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="h-10 w-10 text-foreground" />
                        </motion.div>
                      </div>

                      <div>
                        <CardTitle className="text-2xl sm:text-3xl mb-3 font-bold">
                          {t(`${service.key}.title`)}
                        </CardTitle>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {t(`${service.key}.description`)}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`${service.key}.details`)}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => {
                          const FeatureIcon = feature.icon
                          return (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 group/feature"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 group-hover/feature:bg-slate-200 dark:group-hover/feature:bg-slate-800 transition-colors">
                                <FeatureIcon className="h-4 w-4 text-foreground flex-shrink-0" />
                              </div>
                              <span className="text-sm text-foreground leading-relaxed pt-1">
                                {t(feature.textKey)}
                              </span>
                            </motion.div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 sm:py-20 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              {t('processTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('processSubtitle')}
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-card bg-background border-0 hover:translate-y-[-2px] transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="text-4xl font-bold text-slate-300 dark:text-slate-700">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg font-bold">
                      {t(step.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card bg-background border-0 overflow-hidden">
              <CardContent className="p-8 sm:p-12 md:p-16 text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                  {t('ctaTitle')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {t('ctaSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button className="neomorph-button tactile-button bg-slate-50 dark:bg-slate-900 text-foreground border-0 px-8 py-6 text-base group" asChild>
                    <Link href="/tr/iletisim">
                      {t('ctaContact')}
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="ghost" className="px-8 py-6 text-base hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl" asChild>
                    <Link href="/tr/portfolyo">
                      {t('ctaPortfolio')}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
