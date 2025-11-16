import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CommandPalette } from '@/components/command-palette';
import { Analytics } from '@/components/analytics';
import { ScrollProgress } from '@/components/scroll-progress';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { CookieConsent } from '@/components/cookie-consent';
import { Toaster } from 'sonner';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href={`https://wavearc.co/${locale}`} />
        <link rel="alternate" hrefLang="tr" href="https://wavearc.co/tr" />
        <link rel="alternate" hrefLang="en" href="https://wavearc.co/en" />
        <link rel="alternate" hrefLang="x-default" href="https://wavearc.co/tr" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          <CommandPalette />
          <WhatsAppButton />
          <CookieConsent />
          <Toaster position="top-right" richColors />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
