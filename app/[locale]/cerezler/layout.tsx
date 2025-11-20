import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://www.wavearc.co/${locale}/cerezler`,
      languages: {
        'tr': 'https://www.wavearc.co/tr/cerezler',
        'en': 'https://www.wavearc.co/en/cerezler',
        'x-default': 'https://www.wavearc.co/tr/cerezler'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
