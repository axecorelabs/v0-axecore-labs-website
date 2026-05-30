'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Headphones,
  Bot,
  Workflow,
  LayoutDashboard,
  LineChart,
  Building2,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const SOLUTIONS = [
  {
    icon: Headphones,
    title: 'Customer Experience Systems',
    detail: 'Personalized, AI-driven journeys that resolve faster and convert better.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    detail: 'Autonomous agents that reason, act, and integrate with your stack.',
  },
  {
    icon: Workflow,
    title: 'Automation Platforms',
    detail: 'Orchestrate complex operations end-to-end with zero manual overhead.',
  },
  {
    icon: LayoutDashboard,
    title: 'Internal Business Tools',
    detail: 'Bespoke dashboards and tools tailored to how your teams actually work.',
  },
  {
    icon: LineChart,
    title: 'Data Intelligence Platforms',
    detail: 'Turn raw data into decisions with real-time analytics and modeling.',
  },
  {
    icon: Building2,
    title: 'Enterprise Applications',
    detail: 'Mission-critical software engineered for scale, security, and uptime.',
  },
]

export function Solutions() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="solutions" className="border-y border-border bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Solutions
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Solutions Built Around Outcomes
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Axecore Labs focuses on solving business challenges rather than simply delivering
              software. We start with the outcome you need, then engineer the system that gets you
              there — measurable, durable, and built to grow with you.
            </p>
            <ul className="mt-8 space-y-3">
              {['Outcome-first discovery', 'Production-grade engineering', 'Continuous optimization'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>

        <Stagger className="grid gap-3 sm:grid-cols-2" stagger={0.07}>
          {SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon
            const isActive = active === i
            return (
              <StaggerItem key={sol.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group h-full w-full rounded-2xl border border-border bg-card p-5 text-left transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{sol.title}</h3>
                  <motion.p
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-xs leading-relaxed text-muted-foreground"
                  >
                    <span className="block pt-2">{sol.detail}</span>
                  </motion.p>
                </button>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
