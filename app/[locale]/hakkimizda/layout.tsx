import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://wavearc.co/${locale}/hakkimizda`,
      languages: {
        'tr': 'https://wavearc.co/tr/hakkimizda',
        'en': 'https://wavearc.co/en/hakkimizda',
        'x-default': 'https://wavearc.co/tr/hakkimizda'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
