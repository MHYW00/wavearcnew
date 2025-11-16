"use client"

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

interface CookieSettingsProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: () => void
}

export function CookieSettings({ open, onOpenChange, onSave }: CookieSettingsProps) {
  const t = useTranslations('cookieSettings')
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    // Load current settings
    const consent = localStorage.getItem('cookie-consent')
    if (consent) {
      const { analytics: analyticsConsent } = JSON.parse(consent)
      setAnalytics(analyticsConsent)
    }
  }, [open])

  const handleSave = () => {
    const consent = { essential: true, analytics }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }))
    onSave?.()
    onOpenChange(false)
  }

  const handleAcceptAll = () => {
    setAnalytics(true)
    const consent = { essential: true, analytics: true }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }))
    onSave?.()
    onOpenChange(false)
  }

  const handleRejectAll = () => {
    setAnalytics(false)
    const consent = { essential: true, analytics: false }
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }))
    onSave?.()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('description')}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Essential Cookies */}
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base font-semibold">{t('essential.title')}</Label>
                <p className="text-sm text-muted-foreground">
                  {t('essential.description')}
                </p>
              </div>
              <Switch checked={true} disabled className="ml-4" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {t('essential.always')}
            </p>
          </div>

          <Separator />

          {/* Analytics Cookies */}
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base font-semibold">{t('analytics.title')}</Label>
                <p className="text-sm text-muted-foreground">
                  {t('analytics.description')}
                </p>
              </div>
              <Switch
                checked={analytics}
                onCheckedChange={setAnalytics}
                className="ml-4"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {t('analytics.details')}
            </p>
          </div>
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-row">
          <Button onClick={handleRejectAll} variant="outline" className="w-full sm:w-auto">
            {t('rejectAll')}
          </Button>
          <div className="flex flex-1 gap-2">
            <Button onClick={handleSave} variant="secondary" className="flex-1">
              {t('savePreferences')}
            </Button>
            <Button onClick={handleAcceptAll} className="flex-1">
              {t('acceptAll')}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
