"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Zap, Shield, Users, Code, Lightbulb, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const t = useTranslations('about')

  // Staggered animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const values = [
    {
      icon: Target,
      key: 'precision',
      title: 'Hassasiyet ve Kalite',
      description: 'Her kod satırında mükemmellik arayışı. Detaylara gösterdiğimiz özen, projelerimizin temelini oluşturur.'
    },
    {
      icon: Heart,
      key: 'passion',
      title: 'Tutku ile Geliştirme',
      description: 'Sadece kod yazmıyoruz, çözümler üretiyoruz. Her projede içtenlikle çalışıyoruz.'
    },
    {
      icon: Zap,
      key: 'innovation',
      title: 'Yenilikçi Yaklaşım',
      description: 'En güncel teknolojileri kullanarak, geleceğe hazır sistemler inşa ediyoruz.'
    },
    {
      icon: Shield,
      key: 'reliability',
      title: 'Güvenilirlik',
      description: 'Projeleriniz bizimle güvende. Sağlam altyapı ve sürekli destek garantisi.'
    }
  ]

  const stats = [
    { icon: Users, value: "20+", label: "Mutlu Müşteri" },
    { icon: Code, value: "10+", label: "Tamamlanan Proje" },
    { icon: Lightbulb, value: "3+", label: "Yıl Deneyim" },
    { icon: TrendingUp, value: "98%", label: "Müşteri Memnuniyeti" }
  ]

  return (
    <div className="flex flex-col page-transition">
      {/* Hero Section */}
      <section className="w-full py-20 sm:py-24 md:py-32 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - 2 Column Grid */}
      <section className="w-full py-16 sm:py-20 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground">
                Hikayemiz
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                2022 yılında tutkulu bir ekiple başladığımız yolculukta, bugün 20'den fazla mutlu müşteriyle birlikte çalışıyoruz. Her projede aynı özveriyle, kod kalitesini ve kullanıcı deneyimini ön planda tutarak ilerledik.
              </p>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="glass-card bg-background rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:translate-y-[-2px] transition-transform duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-16 sm:py-20 relative bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card bg-background border-0">
                <CardHeader>
                  <div className="inline-flex mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card bg-blue-500/10">
                      <Target className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold">
                    Misyonumuz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Müşterilerimize en yüksek kalitede yazılım çözümleri sunarak, dijital dönüşüm yolculuklarında güvenilir bir iş ortağı olmak. Her projede mükemmellik arayışıyla, kullanıcı deneyimini ön planda tutarak, ölçeklenebilir ve sürdürülebilir sistemler geliştirmek.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card bg-background border-0">
                <CardHeader>
                  <div className="inline-flex mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card bg-purple-500/10">
                      <Lightbulb className="h-8 w-8 text-purple-500" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold">
                    Vizyonumuz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Türkiye'nin en yenilikçi ve güvenilir yazılım geliştirme şirketlerinden biri olmak. Teknolojinin gücünü kullanarak, işletmelerin dijital dünyada fark yaratmasını sağlamak ve sektörde örnek teşkil eden projelerle iz bırakmak.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 sm:py-20 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              Değerlerimiz
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Bizi özel kılan prensipler ve iş yapış şeklimiz
            </p>
          </motion.div>

          {/* Values Grid with Staggered Animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div key={value.key} variants={item}>
                  <Card className="h-full group cursor-pointer glass-card bg-background border-0 hover:translate-y-[-4px] transition-all duration-300">
                    <CardHeader>
                      {/* Icon with Neomorphic Circle */}
                      <div className="inline-flex mb-6">
                        <motion.div
                          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-card bg-slate-100 dark:bg-slate-900"
                          whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="h-8 w-8 text-foreground" />
                        </motion.div>
                      </div>

                      <CardTitle className="text-xl mb-3 font-bold">
                        {value.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full py-16 sm:py-20 relative bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card bg-background border-0">
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tighter">
                  Teknoloji Stack'imiz
                </CardTitle>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Modern ve güvenilir teknolojilerle çalışıyoruz
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {[
                    'Next.js',
                    'React',
                    'TypeScript',
                    'Node.js',
                    'PostgreSQL',
                    'MongoDB',
                    'AWS',
                    'Docker',
                    'Kubernetes',
                    'GraphQL',
                    'REST API',
                    'Tailwind CSS',
                    'Python',
                    'Go',
                    'Java',
                    'C',
                    'C++',
                    'C#',
                    'Swift',
                    'Dart',
                    'Redis',
                    'Microservices',
                    'Flutter',
                    'React Native'
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2.5 text-sm rounded-xl neomorph-button bg-slate-50 dark:bg-slate-900 text-foreground font-medium tactile-button cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
