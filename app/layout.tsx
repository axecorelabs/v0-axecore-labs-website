import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Axecore Labs — Building Intelligent Systems For The Future',
  description:
    'Axecore Labs designs, engineers, and deploys transformative software, AI solutions, automation systems, and digital infrastructure that help organizations scale, innovate, and lead.',
  generator: 'v0.app',
  icons: {
    icon: '/axecore-logo.png',
    shortcut: '/axecore-logo.png',
    apple: '/axecore-logo.png',
  },
  keywords: [
    'AI solutions',
    'software engineering',
    'automation',
    'cloud infrastructure',
    'enterprise platforms',
    'Axecore Labs',
  ],
  openGraph: {
    title: 'Axecore Labs — Building Intelligent Systems For The Future',
    description:
      'Transformative software, AI solutions, automation systems, and digital infrastructure for organizations that want to scale, innovate, and lead.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#071224',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
