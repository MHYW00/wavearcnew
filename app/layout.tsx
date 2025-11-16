import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://wavearc.co"),
  title: {
    default: "WaveArc - Think Different, Build Better",
    template: "%s | WaveArc"
  },
  description: "Modern yazılım çözümleri ve teknoloji danışmanlığı. Özelleştirilmiş web, mobil ve kurumsal uygulamalar geliştiriyoruz.",
  keywords: ["yazılım geliştirme", "software development", "web development", "mobile app", "teknoloji danışmanlığı", "React", "Next.js", "Flutter", "kurumsal yazılım"],
  authors: [{ name: "WaveArc", url: "https://wavearc.co" }],
  creator: "WaveArc",
  publisher: "WaveArc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://wavearc.co",
    languages: {
      'tr': "https://wavearc.co/tr",
      'en': "https://wavearc.co/en",
    }
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://wavearc.co",
    siteName: "WaveArc",
    title: "WaveArc - Think Different, Build Better",
    description: "Modern yazılım çözümleri ve teknoloji danışmanlığı. Özelleştirilmiş web, mobil ve kurumsal uygulamalar geliştiriyoruz.",
    images: [
      {
        url: "/clients/wavearc-siyah-logo.png",
        width: 1200,
        height: 630,
        alt: "WaveArc Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "WaveArc - Think Different, Build Better",
    description: "Modern yazılım çözümleri ve teknoloji danışmanlığı",
    images: ["/clients/wavearc-siyah-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
