"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTranslations, useLocale } from "next-intl"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Home, Info, Briefcase, FolderKanban, Mail, Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const t = useTranslations()
  const locale = useLocale()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  const switchLocale = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr'
    const currentPath = window.location.pathname.replace(`/${locale}`, '')
    router.push(`/${newLocale}${currentPath}`)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={t('command.placeholder')} />
      <CommandList>
        <CommandEmpty>{t('command.noResults')}</CommandEmpty>
        <CommandGroup heading={t('command.navigation')}>
          <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}`))}>
            <Home className="mr-2 h-4 w-4" />
            <span>{t('nav.home')}</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/hakkimizda`))}>
            <Info className="mr-2 h-4 w-4" />
            <span>{t('nav.about')}</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/hizmetler`))}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>{t('nav.services')}</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/portfolyo`))}>
            <FolderKanban className="mr-2 h-4 w-4" />
            <span>{t('nav.portfolio')}</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push(`/${locale}/iletisim`))}>
            <Mail className="mr-2 h-4 w-4" />
            <span>{t('nav.contact')}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t('command.theme')}>
          <CommandItem onSelect={() => runCommand(() => setTheme(theme === 'dark' ? 'light' : 'dark'))}>
            {theme === 'dark' ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            <span>
              {theme === 'dark' ? t('theme.light') : t('theme.dark')}
            </span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t('command.language')}>
          <CommandItem onSelect={() => runCommand(switchLocale)}>
            <Languages className="mr-2 h-4 w-4" />
            <span>
              {locale === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}
            </span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
