"use client"

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { X, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CookieSettings } from './cookie-settings'

export function CookieConsent() {
  const t = useTranslations('cookieConsent')
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }))
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const consent = { essential: true, analytics: false }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }))
    setShowBanner(false)
  }

  const handleCustomize = () => {
    setShowSettings(true)
  }

  const handleSettingsSave = () => {
    setShowBanner(false)
    setShowSettings(false)
  }

  return (
    <>
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
          >
            <Card className="border-2 bg-background/95 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="mb-2 font-semibold">{t('title')}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {t('description')}
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button onClick={handleAcceptAll} size="sm" className="flex-1">
                      {t('acceptAll')}
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      {t('rejectAll')}
                    </Button>
                    <Button
                      onClick={handleCustomize}
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      {t('customize')}
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => setShowBanner(false)}
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <CookieSettings
        open={showSettings}
        onOpenChange={setShowSettings}
        onSave={handleSettingsSave}
      />
    </>
  )
}
