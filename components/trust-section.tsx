import { Reveal } from '@/components/reveal'

const TECHNOLOGIES = [
  'OpenAI',
  'Anthropic',
  'Google Cloud',
  'AWS',
  'Microsoft Azure',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'Supabase',
  'Cloudflare',
]

export function TrustSection() {
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted Technologies
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center text-base font-semibold text-muted-foreground/70 grayscale transition-all duration-300 hover:text-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
