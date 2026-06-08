type GtagCommand = 'js' | 'config' | 'event'

type Gtag = (
  command: GtagCommand,
  target: Date | string,
  params?: Record<string, unknown>
) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: Gtag
  }
}

const measurementId = 'G-R9ZJWT550Q'

let initialized = false

export function isGoogleAnalyticsEnabled() {
  return Boolean(measurementId) && typeof window !== 'undefined' && typeof document !== 'undefined'
}

export function initializeGoogleAnalytics() {
  if (!isGoogleAnalyticsEnabled() || initialized) return

  initialized = true
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args) {
      window.dataLayer?.push(args)
    }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })
}

export function trackPageView(path: string) {
  if (!isGoogleAnalyticsEnabled()) return

  initializeGoogleAnalytics()

  window.gtag?.('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path
  })
}
