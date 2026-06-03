export interface SubscriptionPayload {
  token: string
}

export interface SubscriptionStatus {
  tenantId: string
  customerId: string
  email?: string
  contactStatus: string
  subscribed: boolean
}

const API_BASE_URL = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export async function unsubscribe(payload: SubscriptionPayload): Promise<SubscriptionStatus> {
  return postSubscription('/api/subscriptions/unsubscribe', payload)
}

export async function subscribe(payload: SubscriptionPayload): Promise<SubscriptionStatus> {
  return postSubscription('/api/subscriptions/subscribe', payload)
}

async function postSubscription(path: string, payload: SubscriptionPayload): Promise<SubscriptionStatus> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  const body = await response.json().catch(() => null) as unknown
  if (!response.ok) {
    throw new Error(errorMessage(body) || 'Subscription request failed')
  }
  return unwrapData(body)
}

function unwrapData(body: unknown): SubscriptionStatus {
  if (body && typeof body === 'object' && 'data' in body) {
    const wrapped = body as { code?: number; msg?: string; data?: unknown }
    if (wrapped.code && wrapped.code >= 400) {
      throw new Error(wrapped.msg || 'Subscription request failed')
    }
    return wrapped.data as SubscriptionStatus
  }
  return body as SubscriptionStatus
}

function errorMessage(body: unknown): string {
  if (body && typeof body === 'object' && 'msg' in body) {
    return String((body as { msg?: unknown }).msg || '')
  }
  return ''
}
