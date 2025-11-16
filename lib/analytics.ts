// Google Analytics Event Tracking Helper

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Track page views
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID || !window.gtag) return

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (!window.gtag) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Predefined events for common actions
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  })
}

export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: buttonName,
  })
}

export const trackProjectView = (projectName: string) => {
  event({
    action: 'project_view',
    category: 'engagement',
    label: projectName,
  })
}

export const trackNewsletterSignup = () => {
  event({
    action: 'newsletter_signup',
    category: 'conversion',
    label: 'footer_newsletter',
  })
}

export const trackContactFormSubmit = () => {
  event({
    action: 'contact_form_submit',
    category: 'conversion',
    label: 'contact_page',
  })
}
