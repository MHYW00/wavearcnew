import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://wavearc.co/${locale}/cerezler`,
      languages: {
        'tr': 'https://wavearc.co/tr/cerezler',
        'en': 'https://wavearc.co/en/cerezler',
        'x-default': 'https://wavearc.co/tr/cerezler'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
