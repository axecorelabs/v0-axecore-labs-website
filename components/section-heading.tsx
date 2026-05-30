import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  invert?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.2em]',
            invert ? 'text-accent' : 'text-primary',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl',
          invert ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed',
            invert ? 'text-white/65' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
