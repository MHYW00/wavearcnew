import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { ServicesPreview } from "@/components/sections/services-preview"
import { ProcessTimeline } from "@/components/sections/process-timeline"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { References } from "@/components/sections/references"
import { CTA } from "@/components/sections/cta"

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  return (
    <div className="flex flex-col page-transition">
      <Hero locale={locale} />
      <Stats />
      <ServicesPreview />
      <ProcessTimeline />
      <PortfolioPreview />
      <References />
      <CTA locale={locale} />
    </div>
  )
}
