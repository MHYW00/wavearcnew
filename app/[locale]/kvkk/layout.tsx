import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://www.wavearc.co/${locale}/kvkk`,
      languages: {
        'tr': 'https://www.wavearc.co/tr/kvkk',
        'en': 'https://www.wavearc.co/en/kvkk',
        'x-default': 'https://www.wavearc.co/tr/kvkk'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
