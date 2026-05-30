import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { TrustSection } from '@/components/trust-section'
import { WhatWeDo } from '@/components/what-we-do'
import { Solutions } from '@/components/solutions'
import { ProductInnovation } from '@/components/product-innovation'
import { Industries } from '@/components/industries'
import { WhyAxecore } from '@/components/why-axecore'
import { Capabilities } from '@/components/capabilities'
import { Insights } from '@/components/insights'
import { Vision } from '@/components/vision'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <TrustSection />
      <WhatWeDo />
      <Solutions />
      <ProductInnovation />
      <Industries />
      <WhyAxecore />
      <Capabilities />
      <Insights />
      <Vision />
      <Contact />
      <SiteFooter />
    </main>
  )
}
