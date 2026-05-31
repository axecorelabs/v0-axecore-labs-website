'use client'

import { useActionState } from 'react'
import { Check, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Reveal } from '@/components/reveal'
import { subscribeNewsletter, type NewsletterState } from '@/app/actions/newsletter'

const INITIAL: NewsletterState = { ok: false }

export function Newsletter() {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, INITIAL)

  return (
    <section id="newsletter" className="border-t border-border bg-secondary/30 py-20">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Newsletter
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Get the latest insights, product updates, and engineering deep-dives from Axecore Labs
            — delivered straight to your inbox.
          </p>

          {state.ok ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary">
              <Check className="h-4 w-4" />
              You&apos;re subscribed. Welcome aboard.
            </div>
          ) : (
            <form
              action={formAction}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-2"
            >
              <Input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="sm:w-72"
              />
              <Button type="submit" disabled={pending}>
                {pending ? 'Subscribing…' : 'Subscribe'}
              </Button>
            </form>
          )}

          {state.error && (
            <p className="mt-3 text-sm text-destructive" role="alert">
              {state.error}
            </p>
          )}

          <p className="mt-5 text-xs text-muted-foreground">
            No spam, ever. Unsubscribe at any time.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
