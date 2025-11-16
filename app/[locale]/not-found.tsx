"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  const t = useTranslations("notFound")
  const locale = useLocale()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-foreground/5 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center neomorph-card">
              <span className="text-4xl">🔍</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            asChild
            size="lg"
            className="neomorph-button w-full sm:w-auto"
          >
            <Link href={`/${locale}`}>
              <Home className="mr-2 h-5 w-5" />
              {t("backHome")}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="neomorph-button w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}
