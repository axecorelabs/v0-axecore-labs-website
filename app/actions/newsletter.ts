'use server'

import { getDb } from '@/lib/mongodb'

export type NewsletterState = {
  ok: boolean
  error?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase()

  if (!email || !isValidEmail(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  try {
    const db = await getDb()
    await db.collection('newsletter_subscribers').updateOne(
      { email },
      { $setOnInsert: { email, subscribedAt: new Date() } },
      { upsert: true },
    )
  } catch {
    return { ok: false, error: 'Something went wrong. Please try again.' }
  }

  return { ok: true }
}
