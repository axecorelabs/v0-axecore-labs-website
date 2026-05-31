'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Reveal } from '@/components/reveal'
import { submitContact, type ContactState } from '@/app/actions/contact'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'support@axecorelabs.bords.app',
    href: 'mailto:support@axecorelabs.bords.app',
  },
  { icon: Phone, label: '+234 702 540 4838', href: 'tel:+2347025404838' },
  { icon: MapPin, label: 'Lagos, Nigeria · Remote-first' },
]

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'X' },
  { icon: Github, label: 'GitHub' },
]

const INITIAL_STATE: ContactState = { ok: false }

export function Contact() {
  const [state, formAction, pending] = useActionState(submitContact, INITIAL_STATE)
  const [projectType, setProjectType] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset()
      setProjectType('')
    }
  }, [state.ok])

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="pointer-events-none absolute inset-0 dotted-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pt-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Let&apos;s Build Something Remarkable
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/65">
              Tell us about your challenge. Our team will get back to you within one business day to
              scope a path forward.
            </p>

            <ul className="mt-10 space-y-4">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    {item.label}
                  </>
                )
                return (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-white/80">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 transition-colors hover:text-accent"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            {state.ok ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">Message received</h3>
                <p className="mt-2 max-w-xs text-sm text-white/60">
                  Thank you for reaching out. We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form ref={formRef} action={formAction} className="grid gap-5">
                <input type="hidden" name="projectType" value={projectType} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-white/80">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-accent"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company" className="text-white/80">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      className="border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-white/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-accent"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="project-type" className="text-white/80">
                    Project Type
                  </Label>
                  <Select value={projectType} onValueChange={setProjectType}>
                    <SelectTrigger
                      id="project-type"
                      className="border-white/15 bg-white/5 text-white focus-visible:ring-accent data-[placeholder]:text-white/40"
                    >
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai">AI &amp; Automation</SelectItem>
                      <SelectItem value="product">Product Engineering</SelectItem>
                      <SelectItem value="infra">Cloud &amp; Infrastructure</SelectItem>
                      <SelectItem value="emerging">Emerging Technology</SelectItem>
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-white/80">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-accent"
                  />
                </div>

                {state.error ? (
                  <p className="text-sm text-red-400" role="alert">
                    {state.error}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  disabled={pending}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {pending ? 'Sending...' : 'Book a Consultation'}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
