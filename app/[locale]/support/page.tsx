"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  const t = useTranslations('support')

  const supportChannels = [
    {
      icon: Mail,
      titleKey: 'general.title',
      email: 'mete@wavearc.co',
      responseKey: 'general.response',
      descKey: 'general.desc'
    },
    {
      icon: Mail,
      titleKey: 'technical.title',
      email: 'mete@wavearc.co',
      responseKey: 'technical.response',
      descKey: 'technical.desc'
    }
  ]

  const faqs = [
    {
      questionKey: 'faq.q1',
      answerKey: 'faq.a1'
    },
    {
      questionKey: 'faq.q2',
      answerKey: 'faq.a2'
    },
    {
      questionKey: 'faq.q3',
      answerKey: 'faq.a3'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full glass-card bg-background border-0 hover:translate-y-[-4px] transition-all duration-300">
                    <CardHeader className="space-y-4">
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 w-fit">
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <CardTitle className="text-2xl font-bold">
                        {t(channel.titleKey)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {t(channel.descKey)}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-foreground">
                          <Mail className="h-4 w-4" />
                          <a
                            href={`mailto:${channel.email}`}
                            className="hover:underline font-medium"
                          >
                            {channel.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{t(channel.responseKey)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* FAQ Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <HelpCircle className="h-8 w-8 text-foreground" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                  {t('faq.title')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="glass-card bg-background border-0">
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {t(faq.questionKey)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(faq.answerKey)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="glass-card bg-background border-0 overflow-hidden">
              <CardContent className="p-8 sm:p-12 text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
                  {t('cta.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {t('cta.subtitle')}
                </p>
                <Button className="neomorph-button tactile-button bg-slate-50 dark:bg-slate-900 text-foreground border-0 px-8 py-6 text-base" asChild>
                  <Link href="/tr/iletisim">
                    {t('cta.button')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
