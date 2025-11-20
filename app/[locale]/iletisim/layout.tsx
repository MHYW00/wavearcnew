import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://wavearc.co/${locale}/iletisim`,
      languages: {
        'tr': 'https://wavearc.co/tr/iletisim',
        'en': 'https://wavearc.co/en/iletisim',
        'x-default': 'https://wavearc.co/tr/iletisim'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
