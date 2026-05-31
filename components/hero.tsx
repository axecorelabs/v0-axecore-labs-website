'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDottedHover } from '@/components/use-dotted-hover'

const FADE = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  const { onPointerMove, onPointerLeave, overlayStyle } = useDottedHover()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy text-white"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {/* subtle dotted grid, faded toward edges */}
      <div
        className="pointer-events-none absolute inset-0 dotted-grid-dark"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={overlayStyle}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-28 pt-36 text-center sm:px-8 lg:pb-36 lg:pt-44">
        <motion.div
          {...FADE}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          African resilience. Global standards.
        </motion.div>

        <motion.h1
          {...FADE}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-7 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Building Intelligent Systems For The Future
        </motion.h1>

        <motion.p
          {...FADE}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
        >
          We design, engineer, and deploy transformative software, AI solutions, automation
          systems, and digital infrastructure that help organizations scale, innovate, and lead.
        </motion.p>

        <motion.div
          {...FADE}
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
          className="mt-16 grid w-full max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          {[
            { v: '60+', l: 'Systems shipped' },
            { v: '12', l: 'Industries served' },
            { v: '99.9%', l: 'Platform uptime' },
          ].map((s) => (
            <div key={s.l}>
              <dt className="text-2xl font-bold text-white sm:text-3xl">{s.v}</dt>
              <dd className="mt-1 text-xs text-white/55">{s.l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
