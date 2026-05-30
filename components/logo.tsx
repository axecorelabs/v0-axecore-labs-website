import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn('text-primary', className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M16 7l7 18h-3.4l-1.3-3.6h-4.6L12.4 25H9l7-18zm0 5.6l-1.5 4.2h3L16 12.6z"
        fill="var(--accent)"
      />
    </svg>
  )
}
