'use client'

import { motion } from 'framer-motion'
import { Activity, ArrowUpRight, Cpu } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const BADGES = [
  'Artificial Intelligence',
  'Machine Learning',
  'LLM Integrations',
  'Workflow Automation',
  'API Engineering',
  'Cloud Architecture',
  'Data Engineering',
  'Cybersecurity',
  'SaaS Development',
  'Product Strategy',
]

const BARS = [42, 68, 55, 80, 62, 95, 73]

export function Capabilities() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Capabilities"
          title="A Full-Stack Innovation Engine"
          description="Deep expertise across the entire modern technology stack, unified under one team."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Dashboard mockup */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.03]">
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Cpu className="h-4 w-4 text-primary" />
                  System Intelligence
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-5">
                {[
                  { label: 'Throughput', value: '1.24M', delta: '+18%' },
                  { label: 'Latency', value: '42ms', delta: '-9%' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-secondary/50 p-4">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1.5 text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="mt-1 inline-flex items-center gap-0.5 text-xs font-medium text-primary">
                      <ArrowUpRight className="h-3 w-3" />
                      {stat.delta}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground">Model Performance</span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Activity className="h-3 w-3 text-accent" /> Live
                  </span>
                </div>
                <div className="flex h-40 items-end gap-2.5">
                  {BARS.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
                      className="w-full rounded-t-md bg-gradient-to-t from-primary/40 to-primary"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Badges */}
          <div>
            <Reveal>
              <p className="text-sm leading-relaxed text-muted-foreground">
                From foundational models to production infrastructure, our capability stack covers
                every layer required to design, ship, and scale intelligent systems.
              </p>
            </Reveal>
            <Stagger className="mt-7 flex flex-wrap gap-2.5" stagger={0.05}>
              {BADGES.map((badge) => (
                <StaggerItem key={badge}>
                  <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary">
                    {badge}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
