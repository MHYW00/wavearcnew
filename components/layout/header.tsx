"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.about'), href: `/${locale}/hakkimizda` },
    { name: t('nav.services'), href: `/${locale}/hizmetler` },
    { name: t('nav.portfolio'), href: `/${locale}/portfolyo` },
    { name: t('nav.contact'), href: `/${locale}/iletisim` },
  ]

  const isActive = (href: string) => pathname === href

  const switchLocale = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath
  }

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass-strong border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-background/60 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <img
            src="/clients/wavearc-beyaz-logo.png"
            alt="WaveArc Logo"
            className="h-8 w-auto"
          />
          <motion.span
            className="text-2xl font-bold tracking-tighter text-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring" as const, stiffness: 400 }}
          >
            WaveArc
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                isActive(item.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.div
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-foreground"
                  layoutId="activeNav"
                  transition={{ type: "spring" as const, stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Side: Theme Switcher + Language */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={switchLocale}
            className="text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {locale === 'tr' ? 'EN' : 'TR'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden glass-strong border-t border-slate-200 dark:border-slate-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="container mx-auto flex flex-col space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-all rounded-lg",
                    isActive(item.href)
                      ? "bg-slate-100 dark:bg-slate-800 text-foreground"
                      : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={switchLocale}
                  className="hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {locale === 'tr' ? 'EN' : 'TR'}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
