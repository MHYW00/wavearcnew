"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const t = useTranslations('contact')
  const tCommon = useTranslations('common')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        const { toast } = await import('sonner')
        const { trackContactFormSubmit } = await import('@/lib/analytics')
        toast.success(t('form.success'))
        trackContactFormSubmit()
        ;(e.target as HTMLFormElement).reset()
      } else {
        const { toast } = await import('sonner')
        toast.error(t('form.error'))
      }
    } catch (error) {
      const { toast } = await import('sonner')
      toast.error(t('form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: tCommon('email'),
      href: `mailto:${tCommon('email')}`
    },
    {
      icon: Phone,
      label: tCommon('phone'),
      value: tCommon('phone'),
      href: `tel:${tCommon('phone')}`
    },
    {
      icon: MapPin,
      label: t('info.address'),
      value: t('info.address'),
      href: null
    },
    {
      icon: Clock,
      label: t('info.workingHours'),
      value: t('info.workingHoursText'),
      href: null
    }
  ]

  // Staggered animations
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
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Page Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="neomorph-card bg-background border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{t('form.title')}</CardTitle>
                <CardDescription>
                  {t('form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {/* Name Field */}
                  <motion.div className="space-y-2" variants={item}>
                    <Label htmlFor="name" className="text-sm font-medium">
                      {t('form.name')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder={t('form.namePlaceholder')}
                      className="neomorph-inset focus-ring bg-slate-50 dark:bg-slate-900 border-0 h-12"
                    />
                  </motion.div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div className="space-y-2" variants={item}>
                      <Label htmlFor="email" className="text-sm font-medium">
                        {t('form.email')}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t('form.emailPlaceholder')}
                        className="neomorph-inset focus-ring bg-slate-50 dark:bg-slate-900 border-0 h-12"
                      />
                    </motion.div>

                    <motion.div className="space-y-2" variants={item}>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        {t('form.phone')}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={t('form.phonePlaceholder')}
                        className="neomorph-inset focus-ring bg-slate-50 dark:bg-slate-900 border-0 h-12"
                      />
                    </motion.div>
                  </div>

                  {/* Subject Field */}
                  <motion.div className="space-y-2" variants={item}>
                    <Label htmlFor="subject" className="text-sm font-medium">
                      {t('form.subject')}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder={t('form.subjectPlaceholder')}
                      className="neomorph-inset focus-ring bg-slate-50 dark:bg-slate-900 border-0 h-12"
                    />
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div className="space-y-2" variants={item}>
                    <Label htmlFor="message" className="text-sm font-medium">
                      {t('form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder={t('form.messagePlaceholder')}
                      rows={6}
                      className="neomorph-inset focus-ring bg-slate-50 dark:bg-slate-900 border-0 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={item}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full neomorph-button tactile-button bg-slate-50 dark:bg-slate-900 text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 border-0 h-12 text-base font-semibold group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="h-4 w-4 border-2 border-t-transparent rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              style={{ borderColor: 'currentColor' }}
                            />
                            {t('form.sending')}
                          </>
                        ) : (
                          <>
                            {t('form.submit')}
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="neomorph-card bg-background border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {t('info.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  const content = (
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold mb-1 text-foreground">
                          {info.label}
                        </p>
                        <p className="text-sm text-muted-foreground break-words">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  )

                  if (info.href) {
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                      >
                        {content}
                      </a>
                    )
                  }

                  return (
                    <div key={info.label} className="p-4">
                      {content}
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
