import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://wavearc.co/${locale}/portfolyo`,
      languages: {
        'tr': 'https://wavearc.co/tr/portfolyo',
        'en': 'https://wavearc.co/en/portfolyo',
        'x-default': 'https://wavearc.co/tr/portfolyo'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
