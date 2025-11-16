"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { useLocale } from "next-intl"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations("stickyButton")
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  // Don't show on contact page
  const isContactPage = pathname.includes("/iletisim") || pathname.includes("/contact")

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isContactPage) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.button
            onClick={() => router.push(`/${locale}/iletisim`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all neomorph-button font-semibold"
          >
            <span>{t("startProject")}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
