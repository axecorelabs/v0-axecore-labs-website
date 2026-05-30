'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Cpu, Workflow, Database, Cloud, Boxes } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NODES = [
  { icon: Cpu, label: 'AI Systems', x: '8%', y: '12%', delay: 0 },
  { icon: Workflow, label: 'Automation', x: '64%', y: '6%', delay: 0.15 },
  { icon: Database, label: 'Data Networks', x: '4%', y: '62%', delay: 0.3 },
  { icon: Cloud, label: 'Cloud Infra', x: '66%', y: '58%', delay: 0.45 },
  { icon: Boxes, label: 'Products', x: '34%', y: '78%', delay: 0.6 },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* grid + glow background */}
      <div className="pointer-events-none absolute inset-0 grid-pattern-dark opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:pb-32 lg:pt-40">
        {/* Left copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            African ambition. Global standards.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building Intelligent Systems For The Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
          >
            We design, engineer, and deploy transformative software, AI solutions, automation
            systems, and digital infrastructure that help organizations scale, innovate, and lead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contact">
                Start a Project
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#solutions">Explore Solutions</a>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { v: '60+', l: 'Systems shipped' },
              { v: '12', l: 'Industries served' },
              { v: '99.9%', l: 'Platform uptime' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-bold text-white">{s.v}</dt>
                <dd className="mt-1 text-xs text-white/55">{s.l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative aspect-square w-full max-w-lg justify-self-center lg:max-w-none"
        >
          {/* central core */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-br from-primary to-primary/60 shadow-2xl shadow-primary/40"
          >
            <Sparkles className="h-10 w-10 text-white" />
          </motion.div>

          {/* connecting rings */}
          <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

          {/* floating nodes */}
          {NODES.map((node) => {
            const Icon = node.icon
            return (
              <motion.div
                key={node.label}
                style={{ left: node.x, top: node.y }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.4 + node.delay },
                  y: { duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: node.delay },
                }}
                className="absolute flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.07] px-3.5 py-2.5 backdrop-blur-md"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium text-white/85">{node.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
