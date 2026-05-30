'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  { n: '01', title: 'Research', body: 'Deep discovery into your market, users, and constraints.' },
  { n: '02', title: 'Strategy', body: 'A clear roadmap aligned to measurable business outcomes.' },
  { n: '03', title: 'Design', body: 'Intuitive, accessible experiences engineered to convert.' },
  { n: '04', title: 'Development', body: 'Scalable architecture built with modern practices.' },
  { n: '05', title: 'Deployment', body: 'Secure, resilient launches with zero-downtime rollout.' },
  { n: '06', title: 'Growth', body: 'Continuous iteration, optimization, and scaling.' },
]

export function ProductInnovation() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Product Innovation"
          title="From Ideas To Scalable Products"
          description="A disciplined process that turns ambitious ideas into resilient, market-ready products."
        />

        <div className="relative mt-16">
          {/* connector line */}
          <div className="absolute left-0 top-7 hidden h-px w-full bg-border lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-0 top-7 hidden h-px w-full bg-gradient-to-r from-primary via-primary to-accent lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card font-mono text-sm font-semibold text-primary shadow-sm">
                  {step.n}
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
