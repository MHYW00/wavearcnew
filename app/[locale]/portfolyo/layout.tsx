import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://www.wavearc.co/${locale}/portfolyo`,
      languages: {
        'tr': 'https://www.wavearc.co/tr/portfolyo',
        'en': 'https://www.wavearc.co/en/portfolyo',
        'x-default': 'https://www.wavearc.co/tr/portfolyo'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
