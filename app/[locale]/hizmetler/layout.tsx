import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://www.wavearc.co/${locale}/hizmetler`,
      languages: {
        'tr': 'https://www.wavearc.co/tr/hizmetler',
        'en': 'https://www.wavearc.co/en/hizmetler',
        'x-default': 'https://www.wavearc.co/tr/hizmetler'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
