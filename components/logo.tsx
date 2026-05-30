import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 overflow-hidden rounded-lg ring-1 ring-accent/30',
        className,
      )}
    >
      <Image
        src="/axecore-logo.png"
        alt="Axecore Labs crown logo"
        fill
        sizes="40px"
        className="scale-[1.6] object-cover"
        priority
      />
    </span>
  )
}
