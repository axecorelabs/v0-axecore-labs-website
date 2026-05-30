'use client'

import {
  Landmark,
  HeartPulse,
  GraduationCap,
  Sprout,
  Truck,
  Building,
  ShoppingBag,
  Radio,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/reveal'

const INDUSTRIES = [
  { icon: Landmark, name: 'Financial Services' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Sprout, name: 'Agriculture' },
  { icon: Truck, name: 'Logistics' },
  { icon: Building, name: 'Government' },
  { icon: ShoppingBag, name: 'Retail' },
  { icon: Radio, name: 'Telecommunications' },
]

export function Industries() {
  return (
    <section id="industries" className="border-y border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Industries" title="Industries We Empower" />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" stagger={0.06}>
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon
            return (
              <StaggerItem key={industry.name}>
                <article className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{industry.name}</h3>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
