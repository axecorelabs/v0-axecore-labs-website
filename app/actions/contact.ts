'use server'

import { randomUUID } from 'crypto'
import { getDb } from '@/lib/mongodb'
import { Resend } from 'resend'

const NOTIFY_EMAIL = 'support@axecorelabs.bords.app'

export type ContactState = {
  ok: boolean
  error?: string
}

const PROJECT_LABELS: Record<string, string> = {
  ai: 'AI & Automation',
  product: 'Product Engineering',
  infra: 'Cloud & Infrastructure',
  emerging: 'Emerging Technology',
  other: 'Something else',
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const projectType = String(formData.get('projectType') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { ok: false, error: 'Please fill in your name, email, and message.' }
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  const id = randomUUID()
  const projectLabel = PROJECT_LABELS[projectType] ?? projectType ?? 'Not specified'
  const submission = {
    id,
    name,
    email,
    company: company || null,
    projectType: projectLabel,
    message,
    createdAt: new Date(),
  }

  try {
    const db = await getDb()
    await db.collection('contact_submissions').insertOne(submission)
  } catch (err) {
    console.log('[v0] Failed to store contact submission:', err)
    return { ok: false, error: 'Something went wrong. Please try again in a moment.' }
  }

  // Email notification is best-effort: never block a successful submission on it.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Axecore Labs <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || 'N/A'}`,
          `Project type: ${projectLabel}`,
          '',
          'Message:',
          message,
          '',
          `Received: ${submission.createdAt.toISOString()}`,
        ].join('\n'),
      })
    } catch (err) {
      console.log('[v0] Failed to send notification email:', err)
    }
  }

  return { ok: true }
}
