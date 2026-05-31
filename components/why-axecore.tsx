'use client'

import { motion } from 'framer-motion'
import { Target, Cpu, Handshake, Lightbulb } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/reveal'
import { useDottedHover } from '@/components/use-dotted-hover'

const FEATURES = [
  {
    icon: Target,
    title: 'Strategic Thinking',
    body: 'Technology decisions aligned with business outcomes.',
  },
  {
    icon: Cpu,
    title: 'World-Class Engineering',
    body: 'Built using modern development practices and scalable architecture.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    body: 'Focused on sustainable growth and continuous improvement.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Culture',
    body: 'Constant exploration of emerging technologies and opportunities.',
  },
]

export function WhyAxecore() {
  const { onPointerMove, onPointerLeave, overlayStyle } = useDottedHover()

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy py-24 text-white"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="pointer-events-none absolute inset-0 dotted-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={overlayStyle} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Axecore Labs"
          title="Why Organizations Choose Axecore Labs"
          invert
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={feature.title}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{feature.body}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
