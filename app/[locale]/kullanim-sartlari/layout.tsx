import { Metadata } from "next"

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `https://wavearc.co/${locale}/kullanim-sartlari`,
      languages: {
        'tr': 'https://wavearc.co/tr/kullanim-sartlari',
        'en': 'https://wavearc.co/en/kullanim-sartlari',
        'x-default': 'https://wavearc.co/tr/kullanim-sartlari'
      }
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
