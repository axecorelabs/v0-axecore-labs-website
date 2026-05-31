'use client'

import { useState } from 'react'
import QRCode from 'react-qr-code'
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Send, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'support@axecorelabs.bords.app'
const TELEGRAM_BOT_ID = process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID ?? ''

type Channel = 'email' | 'telegram'

const CHANNELS: { id: Channel; label: string; Icon: typeof Mail }[] = [
  { id: 'email', label: 'Email', Icon: Mail },
  { id: 'telegram', label: 'Telegram', Icon: Send },
]

const channelConfig: Record<
  Channel,
  { qrValue: string; href: string; buttonLabel: string; description: string }
> = {
  email: {
    qrValue: `mailto:${CONTACT_EMAIL}`,
    href: `mailto:${CONTACT_EMAIL}`,
    buttonLabel: 'Send us an Email',
    description: 'Scan with your phone to open in your email app, or click the button below.',
  },
  telegram: {
    qrValue: TELEGRAM_BOT_ID ? `https://t.me/${TELEGRAM_BOT_ID}` : 'https://t.me/',
    href: TELEGRAM_BOT_ID ? `https://t.me/${TELEGRAM_BOT_ID}` : 'https://t.me/',
    buttonLabel: 'Open in Telegram',
    description: 'Scan with your phone camera or Telegram app, or click the button below.',
  },
}

const CONTACT_INFO = [
  {
    icon: Mail,
    label: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  { icon: Phone, label: '+234 701 540 4838', href: 'tel:+2347015404838' },
  { icon: MapPin, label: 'Lagos, Nigeria · Remote-first', href: undefined },
]

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'X' },
  { icon: Github, label: 'GitHub' },
]

export function Contact() {
  const [channel, setChannel] = useState<Channel>('email')
  const config = channelConfig[channel]

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="pointer-events-none absolute inset-0 dotted-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* ── Left column: info ── */}
        <div className="lg:pt-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Let&apos;s Build Something Remarkable
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/65">
              Reach us through your preferred channel. Scan the QR code or tap the button to get
              started.
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

        {/* ── Right column: channel switcher + QR ── */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            {/* Toggle */}
            <div className="flex rounded-xl border border-white/10 bg-white/5 p-1">
              {CHANNELS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setChannel(id)}
                  className={cn(
                    'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200',
                    channel === id
                      ? 'bg-white text-navy shadow-sm'
                      : 'text-white/60 hover:text-white',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* QR code */}
            <div className="mt-8 flex flex-col items-center gap-5">
              <div className="rounded-2xl bg-white p-4 shadow-lg">
                <QRCode
                  value={config.qrValue}
                  size={180}
                  bgColor="#ffffff"
                  fgColor="#071224"
                  level="M"
                />
              </div>

              <p className="max-w-xs text-center text-sm text-white/55">{config.description}</p>

              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href={config.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {config.buttonLabel}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
