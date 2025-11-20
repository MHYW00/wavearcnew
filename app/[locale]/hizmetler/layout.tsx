import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://wavearc.co/${locale}/hizmetler`,
      languages: {
        'tr': 'https://wavearc.co/tr/hizmetler',
        'en': 'https://wavearc.co/en/hizmetler',
        'x-default': 'https://wavearc.co/tr/hizmetler'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
