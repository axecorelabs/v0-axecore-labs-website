'use client'

import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/reveal'

const ARTICLES = [
  {
    tag: 'AI Strategy',
    date: 'May 2026',
    title: 'Designing Agentic Systems That Earn Enterprise Trust',
    body: 'How to architect AI agents with guardrails, observability, and human oversight built in.',
  },
  {
    tag: 'Infrastructure',
    date: 'Apr 2026',
    title: 'Building Resilient Cloud Platforms for African Scale',
    body: 'Lessons from deploying high-availability infrastructure across emerging markets.',
  },
  {
    tag: 'Automation',
    date: 'Mar 2026',
    title: 'From Workflow to Outcome: Automating What Actually Matters',
    body: 'A framework for identifying the automation opportunities with real business impact.',
  },
]

export function Insights() {
  return (
    <section id="insights" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Insights" title="Insights From The Lab" align="left" />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <StaggerItem key={article.title}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
                    {article.tag}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
