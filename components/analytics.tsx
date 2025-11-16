"use client"

import Script from 'next/script'
import { useEffect, useState } from 'react'

const GA_ID = 'G-MEC1V1DRW0'

export function Analytics() {
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    // Check cookie consent from localStorage
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (cookieConsent) {
      const { analytics } = JSON.parse(cookieConsent)
      setConsent(analytics)
    }

    // Listen for consent changes
    const handleConsentChange = (e: CustomEvent) => {
      setConsent(e.detail.analytics)
    }

    window.addEventListener('cookie-consent-change' as any, handleConsentChange)
    return () => {
      window.removeEventListener('cookie-consent-change' as any, handleConsentChange)
    }
  }, [])

  // Don't load GA if consent is not given
  if (consent !== true) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  )
}
