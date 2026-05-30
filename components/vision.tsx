import { Reveal } from '@/components/reveal'

export function Vision() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Vision
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Building Technology That Moves Africa Forward
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Axecore Labs exists to create intelligent systems, scalable platforms, and
            transformative technology solutions that empower businesses, institutions, and
            communities to thrive in a digital future.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
