import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://wavearc.co/${locale}/gizlilik`,
      languages: {
        'tr': 'https://wavearc.co/tr/gizlilik',
        'en': 'https://wavearc.co/en/gizlilik',
        'x-default': 'https://wavearc.co/tr/gizlilik'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
