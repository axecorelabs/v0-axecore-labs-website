'use client'

import { Brain, Code2, Server, Atom } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/reveal'

const CARDS = [
  {
    icon: Brain,
    title: 'AI & Automation',
    body: 'Design intelligent systems that automate workflows, operations, customer experiences, and business processes.',
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    body: 'Build scalable web platforms, SaaS products, enterprise software, and digital ecosystems.',
  },
  {
    icon: Server,
    title: 'Cloud & Infrastructure',
    body: 'Deploy secure, resilient, high-performance infrastructure built for growth.',
  },
  {
    icon: Atom,
    title: 'Emerging Technology',
    body: 'Explore and implement next-generation technologies that create competitive advantages.',
  },
]

export function WhatWeDo() {
  return (
    <section id="products" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Engineering Tomorrow's Digital Infrastructure"
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => {
            const Icon = card.icon
            return (
              <StaggerItem key={card.title}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
