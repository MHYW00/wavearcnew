"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function NewsletterForm() {
  const t = useTranslations("newsletter")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        const { trackNewsletterSignup } = await import('@/lib/analytics')
        toast.success(t('success'))
        trackNewsletterSignup()
        setEmail("")
      } else {
        toast.error(t('error'))
      }
    } catch (error) {
      toast.error(t('error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('placeholder')}
        required
        disabled={isSubmitting}
        className="flex-1 bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="neomorph-button"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowRight className="h-4 w-4" />
        )}
      </Button>
    </form>
  )
}
