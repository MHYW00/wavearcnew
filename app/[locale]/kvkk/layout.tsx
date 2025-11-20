import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://wavearc.co/${locale}/kvkk`,
      languages: {
        'tr': 'https://wavearc.co/tr/kvkk',
        'en': 'https://wavearc.co/en/kvkk',
        'x-default': 'https://wavearc.co/tr/kvkk'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
