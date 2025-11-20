import { notFound } from "next/navigation"
import projects from "@/lib/data/projects.json"
import { ArrowLeft, Code, Database, Smartphone, Globe, Zap, Shield, Cloud } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

interface ProjectPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params

  return {
    alternates: {
      canonical: `https://www.wavearc.co/${locale}/portfolyo/${slug}`,
      languages: {
        'tr': `https://www.wavearc.co/tr/portfolyo/${slug}`,
        'en': `https://www.wavearc.co/en/portfolyo/${slug}`,
        'x-default': `https://www.wavearc.co/tr/portfolyo/${slug}`
      }
    }
  }
}

export async function generateStaticParams() {
  const locales = ['tr', 'en']
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  )
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Senoz Ekovadi için özel içerik
  if (slug === "senoz-ekovadi") {
    return (
      <div className="min-h-screen">
        {/* Hero Section with Image */}
        <div className="relative text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/clients/senoz2.webp"
              alt="Senoz Ekovadi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-blue-900/80" />
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10 py-32">
            <Link href={`/${locale}/portfolyo`}>
              <Button variant="ghost" className="mb-8 text-white hover:bg-white/10 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {locale === 'tr' ? 'Portfolyoya Dön' : 'Back to Portfolio'}
              </Button>
            </Link>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Senoz Ekovadi
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
                {locale === 'tr'
                  ? "Çayeli'nin dijital dönüşümü: iOS, Android ve Web platformlarında tam donanımlı ekoturizm ekosistemi"
                  : "Digital transformation of Çayeli: Full-featured ecotourism ecosystem on iOS, Android and Web platforms"
                }
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  <span className="text-sm">🏢</span>
                  <span className="text-sm font-medium">{project.client}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  <span className="text-sm">📅</span>
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  <span className="text-sm">⏱️</span>
                  <span className="text-sm font-medium">3 {locale === 'tr' ? 'Ay' : 'Months'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Badges */}
        <div className="container mx-auto max-w-6xl px-4 -mt-8 relative z-20">
          <div className="flex flex-wrap gap-3">
            {project.platform.map((platform) => (
              <div key={platform} className="glass-card px-6 py-3 rounded-xl">
                <span className="font-semibold text-lg">📱 {platform}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div className="bg-slate-50 dark:bg-slate-900 py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {locale === 'tr' ? '3-Tier Mimari' : '3-Tier Architecture'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {locale === 'tr'
                  ? 'Ölçeklenebilir, güvenli ve bakımı kolay mimari tasarım'
                  : 'Scalable, secure and maintainable architectural design'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Client Layer */}
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Client Layer</h3>
                <p className="text-muted-foreground mb-4">
                  {locale === 'tr'
                    ? 'Kullanıcıların etkileşimde bulunduğu katman'
                    : 'User interaction layer'
                  }
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Flutter Mobile App (iOS/Android)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Next.js Admin Panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Responsive & Offline-First</span>
                  </li>
                </ul>
              </div>

              {/* Application Layer */}
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Application Layer</h3>
                <p className="text-muted-foreground mb-4">
                  {locale === 'tr'
                    ? 'İş mantığı ve API katmanı'
                    : 'Business logic and API layer'
                  }
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Node.js/Express REST API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>WebSocket Server (Real-time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>JWT Auth + Rate Limiting</span>
                  </li>
                </ul>
              </div>

              {/* Data Layer */}
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Layer</h3>
                <p className="text-muted-foreground mb-4">
                  {locale === 'tr'
                    ? 'Veri depolama ve yönetimi'
                    : 'Data storage and management'
                  }
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>PostgreSQL 15 (Docker)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>61 Relational Tables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Connection Pooling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="container mx-auto max-w-6xl px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {locale === 'tr' ? 'Altyapı & DevOps' : 'Infrastructure & DevOps'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{locale === 'tr' ? 'Bulut Altyapısı' : 'Cloud Infrastructure'}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{locale === 'tr' ? 'Üretim Sunucusu' : 'Production Server'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Linux {locale === 'tr' ? 'Tabanlı' : 'Based'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{locale === 'tr' ? 'Yüksek Performanslı' : 'High Performance'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{locale === 'tr' ? 'Güvenli Bağlantı' : 'Secure Connection'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{locale === 'tr' ? '%99.9 Çalışma Süresi' : '99.9% Uptime'}</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DevOps Stack</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Nginx (Reverse Proxy + SSL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PM2 (Process Management)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Docker (PostgreSQL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Let's Encrypt (SSL/TLS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Automated Backups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">3</div>
                <div className="text-muted-foreground">{locale === 'tr' ? 'Platform' : 'Platforms'}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">61</div>
                <div className="text-muted-foreground">{locale === 'tr' ? 'Veritabanı Tablosu' : 'Database Tables'}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">300K+</div>
                <div className="text-muted-foreground">{locale === 'tr' ? 'Satır Kod' : 'Lines of Code'}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">3</div>
                <div className="text-muted-foreground">{locale === 'tr' ? 'Ay Geliştirme' : 'Months Dev'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="container mx-auto max-w-4xl px-4 py-20">
          {locale === 'tr' && (
            <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-lg prose-p:leading-relaxed">
              <h2>Proje Vizyonu</h2>
              <p className="lead text-xl text-muted-foreground border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-green-950/20 rounded-r-lg">
                Doğu Karadeniz'in sarp vadileri arasında saklı bir cevher olan Çayeli, zengin tarihi, eşsiz doğası ve yaşayan kültürüyle her zaman bir potansiyele sahipti. Ancak bu potansiyeli dijital çağın dinamikleriyle buluşturmak, dağınık bilgileri tek bir çatı altında toplamak ve bölge turizmine gerçek bir ivme kazandırmak için güçlü bir vizyon gerekiyordu.
              </p>

              <p>
                İşte bu vizyon, Doğu Karadeniz Projesi Bölge Kalkınma İdaresi Başkanlığı (DOKAP) ve Çayeli Kaymakamlığı'nın öncülüğünde somut bir projeye dönüştü. Biz de WaveArc olarak, bu iddialı projeyi hayata geçirmek, statik bir rehberden öte, yaşayan, nefes alan ve "her zaman güncel" bir dijital ekosistem yaratmak için teknik partner olarak bu yolculuğa dahil olduk.
              </p>

              <h2>Mimari Kararlar</h2>

              <h3>Neden 3-Tier Architecture?</h3>
              <p>
                Başarılı bir dijital ürünün temeli, onun mimarisinde yatar. Projemiz üç ana kullanıcı kitlesine hizmet edecekti: iOS kullanıcıları, Android kullanıcıları ve platformu yöneten adminler. Bu ihtiyaca cevap vermek için, kendini kanıtlamış, esnek ve güvenli 3 Katmanlı Mimari modelini benimsedik.
              </p>

              <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                <h4 className="text-xl font-bold mb-3">Teknik Highlight</h4>
                <p className="text-muted-foreground">
                  Bu mimari, sorumlulukları net bir şekilde ayırarak paralel geliştirmeye olanak tanıdı ve sistemin gelecekteki bakımını kolaylaştırdı. Her katman bağımsız olarak ölçeklendirilebilir ve test edilebilir hale geldi.
                </p>
              </div>

              <h3>Mobil Platform: Flutter'ı Seçmek</h3>
              <p>
                Hem iOS hem de Android için ayrı ayrı kod yazmak (Swift/Kotlin), iddialı bir zaman çizelgesinde verimsiz olacaktı. Flutter'ı seçerek, tek bir Dart kod tabanıyla her iki platformda da pürüzsüz, 60fps animasyonlara sahip natif bir deneyim sunduk.
              </p>

              <ul>
                <li><strong>Durum Yönetimi:</strong> Provider kullanarak hafif ve güçlü state management</li>
                <li><strong>Haritalar:</strong> OpenStreetMap ile tam özelleştirme özgürlüğü</li>
                <li><strong>Offline-First:</strong> SQLite + Memory Cache + Disk Cache stratejisi</li>
                <li><strong>Real-time:</strong> WebSocket ile canlı veri senkronizasyonu</li>
              </ul>

              <h2>Mühendislik Zorlukları</h2>

              <h3>Zorluk 1: Gerçek Zamanlı Veri Senkronizasyonu</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">
                    Admin panelden bir veri değiştiğinde, sunucunun o an uygulamaya bakan binlerce kullanıcıya "Hey, bu veri değişti!" demesi nasıl sağlanacaktı?
                  </p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Çözüm</h4>
                  <p className="text-sm text-muted-foreground">
                    WebSocket teknolojisini devreye alarak, sunucu ile her mobil istemci arasında sürekli açık, çift yönlü bir iletişim tüneli kurduk.
                  </p>
                </div>
              </div>

              <h3>Zorluk 2: Medya Performansı</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">
                    Yüksek çözünürlüklü (10-15MB) fotoğraflar hem kullanıcının mobil veri kotasını tüketir hem de uygulamanın açılışını yavaşlatırdı.
                  </p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Çözüm</h4>
                  <p className="text-sm text-muted-foreground">
                    Sharp kütüphanesi ile sunucu tarafında anlık işleme. Her fotoğraf farklı boyutlarda oluşturuldu ve modern WebP formatına dönüştürüldü.
                  </p>
                </div>
              </div>

              <h3>Zorluk 3: Karmaşık Veritabanı Sorguları</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">
                    60+ tablo arasında karmaşık sorgular (JOIN) performansı düşürüyordu.
                  </p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Çözüm</h4>
                  <p className="text-sm text-muted-foreground">
                    PostgreSQL'in gelişmiş indeksleme stratejilerini (B-Tree, GIN) devreye alarak sorgu sürelerini milisaniyelere indirdik.
                  </p>
                </div>
              </div>

              <h2>Performans Metrikleri</h2>
              <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
                <div className="p-6 glass-card rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">~2.5s</div>
                  <div className="text-sm text-muted-foreground">İlk Açılış</div>
                </div>
                <div className="p-6 glass-card rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">&lt;300ms</div>
                  <div className="text-sm text-muted-foreground">Ekran Geçiş</div>
                </div>
                <div className="p-6 glass-card rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">150ms</div>
                  <div className="text-sm text-muted-foreground">API Response</div>
                </div>
              </div>

              <h2>Sonuç: Yaşayan Dijital Ekosistem</h2>
              <p>
                DOKAP ve Çayeli Kaymakamlığı'nın net vizyonuyla başlayan ve WaveArc'ın teknik uzmanlığıyla hayata geçen Senoz Ekovadi projesi, iddialı bir geliştirme sürecinin sonunda hedefine ulaştı. Ortaya çıkan ürün, statik bir uygulamadan öte, bölgenin turizm potansiyelini destekleyen, yerel işletmelere can suyu olan ve ziyaretçilere bağlantıda oldukları sürece en güncel rehberliği sunan yaşayan bir dijital ekosistem haline geldi.
              </p>

              <div className="not-prose my-12 p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Proje Başarı Kriterleri</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Cross-platform mobil uygulama (iOS & Android)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>RESTful Backend API + WebSocket</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Offline-first architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Push notification system (FCM)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Modern admin panel (Next.js)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Production deployment (SSL/HTTPS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>99.9% Uptime guarantee</span>
                  </li>
                </ul>
              </div>
            </article>
          )}

          {locale === 'en' && (
            <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-lg prose-p:leading-relaxed">
              <h2>Project Vision</h2>
              <p className="lead text-xl text-muted-foreground border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-green-950/20 rounded-r-lg">
                Çayeli, a hidden gem among the steep valleys of the Eastern Black Sea, has always had potential with its rich history, unique nature and living culture. However, a strong vision was needed to bring this potential together with the dynamics of the digital age, consolidate scattered information under one roof, and give real momentum to regional tourism.
              </p>

              <p>
                This vision was transformed into a concrete project under the leadership of the Eastern Black Sea Project Regional Development Administration (DOKAP) and Çayeli District Governorate. As WaveArc, we became the technical partner to bring this ambitious project to life, creating not just a static guide, but a living, breathing digital ecosystem that is "always up-to-date."
              </p>

              <h2>Architectural Decisions</h2>

              <h3>Why 3-Tier Architecture?</h3>
              <p>
                The foundation of a successful digital product lies in its architecture. Our project would serve three main user groups: iOS users, Android users and admins managing the platform. To meet this need, we adopted the proven, flexible and secure 3-Tier Architecture model.
              </p>

              <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                <h4 className="text-xl font-bold mb-3">Technical Highlight</h4>
                <p className="text-muted-foreground">
                  This architecture allowed parallel development by clearly separating responsibilities and made future maintenance of the system easier. Each layer became independently scalable and testable.
                </p>
              </div>

              <h3>Mobile Platform: Choosing Flutter</h3>
              <p>
                Writing separate code for both iOS and Android (Swift/Kotlin) would have been inefficient within an ambitious timeline. By choosing Flutter, we delivered a native experience with smooth, 60fps animations on both platforms using a single Dart codebase.
              </p>

              <ul>
                <li><strong>State Management:</strong> Lightweight and powerful state management using Provider</li>
                <li><strong>Maps:</strong> Full customization freedom with OpenStreetMap</li>
                <li><strong>Offline-First:</strong> SQLite + Memory Cache + Disk Cache strategy</li>
                <li><strong>Real-time:</strong> Live data synchronization with WebSocket</li>
              </ul>

              <h2>Engineering Challenges</h2>

              <h3>Challenge 1: Real-Time Data Synchronization</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">
                    When data changes in the admin panel, how can the server notify thousands of users currently viewing the app that "this data has changed"?
                  </p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    We implemented WebSocket technology, creating a continuously open, bidirectional communication tunnel between the server and each mobile client.
                  </p>
                </div>
              </div>

              <h3>Challenge 2: Media Performance</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">
                    High-resolution photos (10-15MB) would consume users' mobile data quota and slow down app loading.
                  </p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    Server-side on-the-fly processing with Sharp library. Each photo was generated in different sizes and converted to modern WebP format.
                  </p>
                </div>
              </div>

              <h3>Challenge 3: Complex Database Queries</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">
                    Complex queries (JOINs) across 60+ tables were degrading performance.
                  </p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg">
                  <h4 className="font-bold text-lg mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    We leveraged PostgreSQL's advanced indexing strategies (B-Tree, GIN) to reduce query times to milliseconds.
                  </p>
                </div>
              </div>

              <h2>Performance Metrics</h2>
              <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
                <div className="p-6 glass-card rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">~2.5s</div>
                  <div className="text-sm text-muted-foreground">Initial Launch</div>
                </div>
                <div className="p-6 glass-card rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">&lt;300ms</div>
                  <div className="text-sm text-muted-foreground">Screen Transition</div>
                </div>
                <div className="p-6 glass-card rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">150ms</div>
                  <div className="text-sm text-muted-foreground">API Response</div>
                </div>
              </div>

              <h2>Conclusion: A Living Digital Ecosystem</h2>
              <p>
                Starting with the clear vision of DOKAP and Çayeli District Governorate and brought to life with WaveArc's technical expertise, the Senoz Ekovadi project reached its goal after an ambitious development process. The resulting product became more than a static application—it's a living digital ecosystem that supports the region's tourism potential, provides lifeline to local businesses, and offers visitors the most up-to-date guidance as long as they're connected.
              </p>

              <div className="not-prose my-12 p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Project Success Criteria</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Cross-platform mobile app (iOS & Android)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>RESTful Backend API + WebSocket</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Offline-first architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Push notification system (FCM)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Modern admin panel (Next.js)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Production deployment (SSL/HTTPS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>99.9% Uptime guarantee</span>
                  </li>
                </ul>
              </div>
            </article>
          )}
        </div>

        {/* Tech Stack Section */}
        <div className="container mx-auto max-w-6xl px-4 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {locale === 'tr' ? 'Teknoloji Stack' : 'Technology Stack'}
            </h2>
            <p className="text-xl text-muted-foreground">
              {locale === 'tr'
                ? 'Modern, ölçeklenebilir ve güvenli altyapı'
                : 'Modern, scalable and secure infrastructure'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Mobile */}
            <div className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Flutter 3.8.1+</p>
                <p>• Provider (State)</p>
                <p>• SQLite + Dio</p>
                <p>• FCM + WebSocket</p>
                <p>• OpenStreetMap</p>
              </div>
            </div>

            {/* Backend */}
            <div className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Node.js 18+</p>
                <p>• Express.js 4.18</p>
                <p>• JWT + bcrypt</p>
                <p>• Multer + Sharp</p>
                <p>• WebSocket (ws)</p>
              </div>
            </div>

            {/* Admin Panel */}
            <div className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Admin</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Next.js 14.2</p>
                <p>• React 18 + TS</p>
                <p>• MUI + Ant Design</p>
                <p>• React Query</p>
                <p>• Tailwind CSS</p>
              </div>
            </div>

            {/* Database */}
            <div className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Database className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Database</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• PostgreSQL 15</p>
                <p>• Docker Container</p>
                <p>• 61 Tables</p>
                <p>• Connection Pool</p>
                <p>• Advanced Indexing</p>
              </div>
            </div>
          </div>

          {/* All Technologies */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">{locale === 'tr' ? 'Tüm Teknolojiler' : 'All Technologies'}</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 hover:border-green-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Download Links Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {locale === 'tr' ? 'Uygulamayı İndirin' : 'Download the App'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {locale === 'tr'
                  ? 'Senoz Ekovadi uygulamasını mobil cihazınıza indirin'
                  : 'Download Senoz Ekovadi app to your mobile device'
                }
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/tr/app/senoz-ekovadi/id6752955816?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl flex items-center gap-4 min-w-[240px]">
                  <div className="w-12 h-12 rounded-xl bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white dark:text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground">
                      {locale === 'tr' ? 'Şuradan indirin' : 'Download on the'}
                    </span>
                    <span className="text-lg font-bold">App Store</span>
                  </div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.cayeli.tourism.kesfet_cayeli&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl flex items-center gap-4 min-w-[240px]">
                  <div className="w-12 h-12 rounded-xl bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D856"/>
                      <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00"/>
                      <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.35 12L17.89 9.5L20.16 10.81Z" fill="#00A6F6"/>
                      <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#FF3E00"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground">
                      {locale === 'tr' ? 'Şuradan edinin' : 'Get it on'}
                    </span>
                    <span className="text-lg font-bold">Google Play</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Diğer projeler için generic template
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href={`/${locale}/portfolyo`}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {locale === 'tr' ? 'Geri Dön' : 'Go Back'}
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4">
          {project.title[locale as 'tr' | 'en']}
        </h1>
        <p className="text-muted-foreground mb-8">
          {project.description[locale as 'tr' | 'en']}
        </p>
      </div>
    </div>
  )
}
