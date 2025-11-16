# WaveArc - Modern Yazılım Şirketi Web Sitesi

> **Think Different, Build Better**

Modern, performanslı ve SEO optimize kurumsal web sitesi. Next.js 15, TypeScript, Tailwind CSS ve shadcn/ui ile geliştirilmiştir.

## ✨ Özellikler

### 🎨 Tema Sistemi
- **Dark/Light Mode**: Minimalist siyah-beyaz tasarım
- Sistem teması otomatik algılama
- Smooth transitions between themes

### 🌐 Çok Dilli Destek (i18n)
- Türkçe (TR)
- İngilizce (EN)
- next-intl ile yapılandırılmış routing
- SEO-friendly language alternates

### ⚡ Command Palette (⌘K)
- Hızlı sayfa navigasyonu
- Tema değiştirme
- Dil değiştirme
- Klavye kısayolları ile erişim

### 🎭 Animasyonlar
- Framer Motion ile yumuşak geçişler
- Scroll-based animasyonlar
- Hover efektleri
- Page transitions

### 📱 Responsive Tasarım
- Mobile-first yaklaşım
- Tablet ve desktop optimizasyonu
- Touch-friendly arayüz

### 🎯 SEO Optimize
- Next.js Metadata API
- Schema.org Organization markup (JSON-LD)
- Dynamic sitemap.xml with hreflang
- robots.txt
- Open Graph ve Twitter Card desteği
- Canonical URLs
- PWA manifest.json
- Favicon ve app icons
- Google Analytics ready

## 🛠️ Teknoloji Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Dil**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Bileşenleri**: [shadcn/ui](https://ui.shadcn.com/)
- **Animasyonlar**: [Framer Motion](https://www.framer.com/motion/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Tema Yönetimi**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Email**: [Resend](https://resend.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Kurulum

### Gereksinimler
- Node.js 18.17 veya üzeri
- npm veya yarn

### Adımlar

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Environment variables dosyasını oluşturun:
```bash
cp .env.example .env.local
```

3. Development server'ı başlatın:
```bash
npm run dev
```

4. Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

## 📁 Proje Yapısı

```
wavearc-new/
├── app/
│   ├── [locale]/          # Dil bazlı routing
│   │   ├── page.tsx       # Anasayfa
│   │   ├── hakkimizda/    # Hakkımızda sayfası (TR) / about (EN)
│   │   ├── hizmetler/     # Hizmetler sayfası (TR) / services (EN)
│   │   ├── portfolyo/     # Portfolyo sayfası (TR) / portfolio (EN)
│   │   ├── iletisim/      # İletişim sayfası (TR) / contact (EN)
│   │   ├── support/       # Destek sayfası
│   │   └── layout.tsx     # Locale layout
│   ├── api/
│   │   └── send-email/    # Email gönderme endpoint
│   ├── icon.png           # Favicon
│   ├── apple-icon.png     # Apple touch icon
│   ├── opengraph-image.png # OG image
│   ├── manifest.json      # PWA manifest
│   ├── globals.css        # Global stiller
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # shadcn/ui bileşenleri
│   ├── layout/            # Header, Footer
│   ├── command-palette.tsx
│   ├── theme-provider.tsx
│   ├── analytics.tsx      # Google Analytics
│   ├── scroll-progress.tsx
│   └── sticky-cta.tsx
├── lib/
│   ├── i18n/              # Dil dosyaları (tr.json, en.json)
│   ├── data/              # Statik veriler (projects.json)
│   └── utils.ts           # Yardımcı fonksiyonlar
└── public/
    ├── sitemap.xml        # SEO sitemap with hreflang
    ├── robots.txt         # Robots configuration
    └── clients/           # Client logos ve görseller
```

## 🎨 Tasarım Sistemi

### Renkler
- **Light Mode**: Beyaz background, slate text
- **Dark Mode**: Dark slate background, beyaz text
- **Primary**: Slate renk paleti
- **Glass Effects**: Backdrop blur ile glassmorphism

### Tipografi
- **Font**: Inter (Sans-serif)
- **Mono**: JetBrains Mono (Code blocks için hazır)

## ⌨️ Klavye Kısayolları

- `Cmd/Ctrl + K`: Command Palette'i aç
- Command Palette içinde:
  - Arrow keys: Navigasyon
  - Enter: Seçimi onayla
  - Esc: Kapat

## 📝 İçerik Yönetimi

### V1.0: Lokal Dosyalar
Şu anda içerikler `lib/data/` ve `lib/i18n/` klasörlerinde JSON dosyaları olarak tutulmaktadır.

#### Proje Ekleme
`lib/data/projects.json` dosyasını düzenleyin:
```json
{
  "id": 4,
  "title": { "tr": "Yeni Proje", "en": "New Project" },
  "description": { "tr": "Açıklama", "en": "Description" },
  "technologies": ["Next.js", "TypeScript"],
  "category": "web",
  "size": "medium"
}
```

#### Çeviri Ekleme/Düzenleme
- Türkçe: `lib/i18n/tr.json`
- İngilizce: `lib/i18n/en.json`

### Gelecek: CMS Entegrasyonu
Projeyi Payload CMS veya Sanity.io gibi bir headless CMS'e entegre etmek için sadece veri çekme fonksiyonlarını değiştirmeniz yeterli:

```typescript
// Önce:
import projects from '@/lib/data/projects.json'

// Sonra:
const projects = await fetch('https://cms.wavearc.co/api/projects')
```

## 🚀 Deployment

### Vercel (Önerilen)
1. Projeyi GitHub'a push edin
2. [Vercel](https://vercel.com)'e import edin
3. Environment variables'ları ekleyin
4. Deploy!

```bash
npm run build    # Production build test
npm run start    # Production server test
```

### Diğer Platformlar
Next.js 14+ App Router'ı destekleyen herhangi bir platformda çalışır:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway

## 🔧 Konfigürasyon

### Environment Variables
`.env.local` dosyası oluşturun:
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://wavearc.co

# Resend API (Email gönderimi için)
RESEND_API_KEY=re_xxxxxxxxxx
CONTACT_EMAIL=mete@wavearc.co
```

## 📊 Performans & SEO

### Performans
- ✅ Server Components (RSC) kullanımı
- ✅ Otomatik kod bölme (code splitting)
- ✅ Image optimization (next/image)
- ✅ Font optimization (next/font)
- ✅ CSS optimization (Tailwind JIT)

### SEO Features
- ✅ Semantic HTML5
- ✅ Schema.org markup (Organization)
- ✅ Sitemap.xml with hreflang alternates
- ✅ Robots.txt
- ✅ Meta tags (OG, Twitter Card)
- ✅ Canonical URLs
- ✅ Language alternates (TR/EN)
- ✅ PWA manifest
- ✅ Optimized images and icons

### Sayfalar
- 🏠 Anasayfa (/)
- 📖 Hakkımızda (/hakkimizda, /about)
- 🛠️ Hizmetler (/hizmetler, /services)
- 💼 Portfolyo (/portfolyo, /portfolio)
- 📞 İletişim (/iletisim, /contact)
- 🆘 Destek (/support) - Site içi erişim yok, direkt URL ile erişim

## 🤝 Katkıda Bulunma

Bu proje WaveArc için özel olarak geliştirilmiştir. Öneri ve hata raporları için iletişime geçin.

## 📧 İletişim

- **Email**: mete@wavearc.co
- **Website**: [wavearc.co](https://wavearc.co)

## 📄 Lisans

© 2025 WaveArc. Tüm hakları saklıdır.

---

## 🔗 Linkler

- **Production**: [https://wavearc.co](https://wavearc.co)
- **GitHub**: [https://github.com/MHYW00/wavearcnew](https://github.com/MHYW00/wavearcnew)
- **Instagram**: [@wavearc.co](https://www.instagram.com/wavearc.co/)
- **App Store**: [Mete Han Yıldırım](https://apps.apple.com/tr/developer/mete-han-yildirim/id1841905668)

**Built with 💻 by WaveArc**
