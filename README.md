# WaveArc - Modern Yazılım Şirketi Web Sitesi

> **Think Different, Build Better**

Modern, performanslı ve özelleştirilebilir kurumsal web sitesi. Next.js 14+, TypeScript, Tailwind CSS ve shadcn/ui ile geliştirilmiştir.

## ✨ Özellikler

### 🎨 İki Farklı Tema
- **Klasik Tema**: Minimalist siyah-beyaz tasarım (Dark/Light mode)
- **Neon Tema**: 80'lerin retro neon estetiğinden ilham alan marjinal tasarım
  - Ultra siyah (#070119) zemin
  - Neon pembe (#FF10F0) ve elektrik yeşili (#CCFF00) vurgu renkleri
  - Glow/Bloom efektleri
  - Glitch animasyonları

### 🌐 Çok Dilli Destek (i18n)
- Türkçe (Ana dil)
- İngilizce
- next-intl ile yapılandırılmış routing

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
- Structured data (JSON-LD)
- Sitemap ve robots.txt hazır
- Open Graph ve Twitter Card desteği

## 🛠️ Teknoloji Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Dil**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Bileşenleri**: [shadcn/ui](https://ui.shadcn.com/)
- **Animasyonlar**: [Framer Motion](https://www.framer.com/motion/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Tema Yönetimi**: [next-themes](https://github.com/pacocoursey/next-themes)

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
│   │   ├── hakkimizda/    # Hakkımızda sayfası
│   │   ├── hizmetler/     # Hizmetler sayfası
│   │   ├── portfolyo/     # Portfolyo sayfası
│   │   └── iletisim/      # İletişim sayfası
│   ├── globals.css        # Global stiller
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # shadcn/ui bileşenleri
│   ├── layout/            # Header, Footer
│   ├── sections/          # Sayfa bölümleri
│   ├── command-palette.tsx
│   └── theme-switcher.tsx
├── lib/
│   ├── i18n/              # Dil dosyaları (tr.json, en.json)
│   ├── data/              # Statik veriler (projects.json)
│   └── utils.ts           # Yardımcı fonksiyonlar
└── public/
    └── images/            # Görseller
```

## 🎨 Tema Kullanımı

### Klasik Tema
Sade, profesyonel siyah-beyaz tasarım. Dark ve Light mode desteği vardır.

### Neon Tema
80'lerin retro neon estetiğinden ilham alan, cesur ve dikkat çekici tasarım:
- **Aktivasyon**: Header'daki palet ikonuna tıklayın veya Command Palette (⌘K) üzerinden
- **Renkler**:
  - Background: #070119 (Ultra Siyah)
  - Primer: #FF10F0 (Neon Pembe)
  - Sekonder: #CCFF00 (Elektrik Yeşili)
  - Accent: #00FFFF (Neon Mavi)

### Glow Efektleri
Neon temasında kullanılabilen CSS sınıfları:
```css
.glow-pink      /* Pembe text glow */
.glow-lime      /* Yeşil text glow */
.box-glow-pink  /* Pembe box shadow */
.glass-neon     /* Glassmorphism efekti */
```

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

### Google Analytics
`.env.local` dosyasına ekleyin:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Site URL
```env
NEXT_PUBLIC_SITE_URL=https://wavearc.co
```

## 📊 Performans

- ✅ Server Components (RSC) kullanımı
- ✅ Otomatik kod bölme (code splitting)
- ✅ Image optimization
- ✅ Font optimization (next/font)
- ✅ CSS optimization (Tailwind JIT)

## 🤝 Katkıda Bulunma

Bu proje WaveArc için özel olarak geliştirilmiştir. Öneri ve hata raporları için iletişime geçin.

## 📧 İletişim

- **Email**: mete@wavearc.co
- **Website**: [wavearc.co](https://wavearc.co)

## 📄 Lisans

© 2025 WaveArc. Tüm hakları saklıdır.

---

**Built with ❤️ by WaveArc Team**
