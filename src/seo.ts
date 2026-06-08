import {
  attractionDetails,
  cities,
  companyDetail,
  images,
  tourProducts,
  type AttractionDetail,
  type City,
  type CompanyActivityCategory,
  type TourProduct
} from '@/content/travel'

export type SeoMeta = {
  path: string
  title: string
  description: string
  canonical: string
  image: string
  type: 'website' | 'article'
  htmlLang: string
  status: 200 | 404
  noindex?: boolean
  alternates: Array<{ hreflang: string; href: string }>
  structuredData: JsonLd[]
}

export const defaultLocale = 'en'
export const seoLocales = ['en', 'de', 'fr', 'es', 'zh'] as const
export type SeoLocale = (typeof seoLocales)[number]
export type UrlLocale = 'en' | 'de' | 'fr' | 'es' | 'zh'
type JsonLd = Record<string, unknown>

const localeHtmlLang: Record<SeoLocale, string> = {
  en: 'en',
  de: 'de',
  fr: 'fr',
  es: 'es',
  zh: 'zh-CN'
}

const siteUrl = String(import.meta.env.VITE_SITE_URL || 'https://www.tengxuantrip.com').replace(/\/$/, '')
const defaultImage = images.greatWall

const staticSeo: Record<string, { title: string; description: string; image?: string }> = {
  '/': {
    title: 'China Private Tour and Travel Agency for Groups | Tengxuan',
    description:
      'Plan China private tours, agency group routes, Beijing Xi’an Shanghai itineraries, Great Wall tours from Beijing, visa-friendly entry planning, and custom quotes.',
    image: images.greatWall
  },
  '/company': {
    title: 'Tengxuan Travel Group Company Profile',
    description:
      'Tengxuan Travel Group company profile, airline resources, inbound China travel capability, branch network, brand system, milestones, honors, and corporate culture.',
    image: companyDetail.photoSlots[0]?.image
  },
  '/company/photos': {
    title: 'Tengxuan Travel Group Team Photos',
    description:
      'Team photos from Tengxuan Travel Group offices, company activities, partner events, meetings, and employee culture moments.',
    image: companyDetail.mediaGallery[0]?.image || companyDetail.photoSlots[0]?.image
  },
  '/destinations': {
    title: 'China Destinations: City Guides and Must-See Attractions | Tengxuan',
    description:
      'Browse China destination planning in one place: city guides for route rhythm, stay length, season, and transport plus attraction guides for visit flow and practical notes.',
    image: images.greatWall
  },
  '/custom-trip': {
    title: 'Custom China Itinerary for Inbound Travelers | Tengxuan',
    description:
      'Request a custom China itinerary by email with arrival city, departure city, travel dates, group size, hotel level, pace, interests, and inbound travel needs.',
    image: images.shanghai
  },
  '/cities': {
    title: 'China City Guides for Private Tours and Group Itineraries',
    description:
      'Compare Beijing, Xi’an, Shanghai, Chengdu, Guilin, Hangzhou, and more by traveler type, stay length, season, transport, attractions, products, and FAQ.',
    image: images.shanghai
  },
  '/attractions': {
    title: 'Signature China Attractions and Great Wall Tour Planning',
    description:
      'Plan Great Wall tours from Beijing, Terracotta Army visits, The Bund, Panda Base, Li River, and West Lake with timing, transport, route context, and FAQ.',
    image: images.xian
  },
  '/products': {
    title: 'Classic China Travel Products by Destination | Tengxuan',
    description:
      'Browse classic China travel products by destination, including Beijing and Xi’an routes with day-by-day plans, guide service, destination filters, and traveler feedback.',
    image: images.greatWall
  },
  '/contact': {
    title: 'Contact Tengxuan China Travel Specialists',
    description:
      'Send arrival city, dates, group size, hotel level, guide language, and must-see places for a China travel quotation.',
    image: images.shanghai
  },
  '/faq': {
    title: 'China Private Tour and Group Travel Agency FAQ',
    description:
      'Operational answers for China private routes, agency group quotations, price scope, customization, service inclusions, and planning requests.'
  },
  '/visa-entry': {
    title: 'China Visa-Free Transit and Entry Planning Checklist',
    description:
      'Check China visa-free transit eligibility, traveler nationality, passport validity, routing, hotel details, invitation-letter needs, and official entry rules before booking.'
  },
  '/before-you-go': {
    title: 'China Travel Booking Services',
    description:
      'Arrange China flights, hotels, train tickets, car rental, private guides, attraction tickets, and SIM cards with Tengxuan Travel booking support.'
  },
  '/privacy': {
    title: 'Privacy Policy | Tengxuan Travel',
    description:
      'How Tengxuan Travel handles enquiry, quotation, booking, supplier coordination, and subscription information for travel service requests.'
  },
  '/terms': {
    title: 'Terms of Use | Tengxuan Travel',
    description:
      'Tengxuan Travel route, quotation, inclusion, exclusion, cancellation, document, and traveler responsibility terms for public website visitors.'
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Tengxuan Travel',
    description:
      'Essential browser storage and future analytics cookie policy for Tengxuan Travel website language preferences and subscription interactions.'
  }
}

export function getSeoMeta(path: string): SeoMeta {
  const locale = getSeoLocaleFromPath(path)
  const contentPath = normalizeContentPath(path)
  const page = resolvePageSeo(contentPath)
  const status = page.status ?? 200
  const canonicalPath = hasLocalePrefix(path) ? localizePath(contentPath, locale) : contentPath

  return {
    path: canonicalPath,
    title: page.title,
    description: page.description,
    canonical: absoluteUrl(canonicalPath),
    image: absoluteAssetUrl(page.image || defaultImage),
    type: page.type || 'website',
    htmlLang: localeHtmlLang[locale],
    status,
    noindex: status === 404 || page.noindex,
    alternates: buildAlternates(contentPath),
    structuredData: buildStructuredData(contentPath)
  }
}

export function renderHeadTags(seo: SeoMeta) {
  const noindex = seo.noindex ? '<meta name="robots" content="noindex, follow" />\n    ' : ''
  const alternates = seo.alternates
    .map((alternate) => `<link rel="alternate" hreflang="${escapeAttr(alternate.hreflang)}" href="${escapeAttr(alternate.href)}" />`)
    .join('\n    ')

  const jsonLd = seo.structuredData.map(renderJsonLdScript).join('\n    ')

  return `${noindex}<title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeAttr(seo.description)}" />
    <link rel="canonical" href="${escapeAttr(seo.canonical)}" />
    ${alternates}
    <meta property="og:title" content="${escapeAttr(seo.title)}" />
    <meta property="og:description" content="${escapeAttr(seo.description)}" />
    <meta property="og:type" content="${escapeAttr(seo.type)}" />
    <meta property="og:url" content="${escapeAttr(seo.canonical)}" />
    <meta property="og:image" content="${escapeAttr(seo.image)}" />
    <meta property="og:site_name" content="Tengxuan Travel" />
    <meta property="og:locale" content="${escapeAttr(openGraphLocale(seo.htmlLang))}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(seo.title)}" />
    <meta name="twitter:description" content="${escapeAttr(seo.description)}" />
    <meta name="twitter:image" content="${escapeAttr(seo.image)}" />
    ${jsonLd}`
}

export function applySeoMeta(path: string) {
  if (typeof document === 'undefined') return

  const seo = getSeoMeta(path)
  document.documentElement.lang = seo.htmlLang
  document.title = seo.title

  setMeta('name', 'description', seo.description)
  setLink('canonical', seo.canonical)
  setMeta('property', 'og:title', seo.title)
  setMeta('property', 'og:description', seo.description)
  setMeta('property', 'og:type', seo.type)
  setMeta('property', 'og:url', seo.canonical)
  setMeta('property', 'og:image', seo.image)
  setMeta('property', 'og:site_name', 'Tengxuan Travel')
  setMeta('property', 'og:locale', openGraphLocale(seo.htmlLang))
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', seo.title)
  setMeta('name', 'twitter:description', seo.description)
  setMeta('name', 'twitter:image', seo.image)

  document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => node.remove())
  for (const jsonLd of seo.structuredData) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seoJsonld = 'true'
    script.textContent = serializeJsonLd(jsonLd)
    document.head.appendChild(script)
  }

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove())
  for (const alternate of seo.alternates) {
    const link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = alternate.hreflang
    link.href = alternate.href
    document.head.appendChild(link)
  }
}

export function getPrerenderPaths() {
  const contentPaths = getContentPaths()
  return [
    ...contentPaths,
    ...seoLocales.flatMap((locale) => contentPaths.map((path) => localizePath(path, locale))),
    '/404'
  ]
}

export function getSitemapEntries() {
  const contentPaths = getContentPaths()
  return [
    ...contentPaths,
    ...seoLocales.flatMap((locale) => contentPaths.map((path) => localizePath(path, locale)))
  ].map((path) => ({ path, url: absoluteUrl(path), alternates: buildAlternates(normalizeContentPath(path)) }))
}

export function getLocaleFromPath(path: string) {
  return path.split('/').filter(Boolean)[0] || ''
}

export function getSeoLocaleFromPath(path: string): SeoLocale {
  const locale = getLocaleFromPath(path)
  return isSeoLocale(locale) ? locale : defaultLocale
}

export function isLocalePrefix(value: string): value is UrlLocale {
  return ['en', 'de', 'fr', 'es', 'zh'].includes(value)
}

export function normalizeContentPath(path: string) {
  const withoutQuery = path.split('?')[0].split('#')[0] || '/'
  const normalized = withoutQuery.length > 1 ? withoutQuery.replace(/\/$/, '') : withoutQuery
  const parts = normalized.split('/').filter(Boolean)

  if (parts.length && isLocalePrefix(parts[0])) {
    const contentPath = `/${parts.slice(1).join('/')}`
    return contentPath === '/' || contentPath === '' ? '/' : contentPath
  }

  return normalized
}

export function localizePath(path: string, locale: UrlLocale) {
  const contentPath = normalizeContentPath(path)
  return contentPath === '/' ? `/${locale}` : `/${locale}${contentPath}`
}

function resolvePageSeo(path: string): Partial<SeoMeta> & { title: string; description: string; image?: string } {
  const city = matchDetail(path, '/cities/', cities)
  if (city) {
    return {
      title: `${city.name} City Guide for China Private Tours | Tengxuan`,
      description: `${city.name} travel guide for China private tours: best for ${city.bestFor.join(', ')}, recommended stay ${city.duration}, season, transport, and attractions.`,
      image: city.image,
      type: 'article'
    }
  }

  const attraction = matchDetail(path, '/attractions/', attractionDetails)
  if (attraction) {
    return {
      title: `${attraction.name} Tour Guide for China Itineraries | Tengxuan`,
      description: `${attraction.name} guide: ${attraction.summary || attraction.intro} Includes suitable travelers, stay length, best season, transport, FAQ, city links, and related tour products.`,
      image: attraction.image,
      type: 'article'
    }
  }

  const product = matchDetail(path, '/products/', tourProducts)
  if (product) {
    return {
      title: `${product.name} Itinerary and Group Quote | Tengxuan`,
      description: `${product.name}: ${product.summary} ${product.duration}, route ${product.route}, with itinerary, inclusions, exclusions, suitable groups, FAQ, city links, and enquiry details.`,
      image: product.heroImage,
      type: 'article'
    }
  }

  const companyActivity = matchDetail(path, '/company/', companyDetail.activityCategories)
  if (companyActivity) {
    return {
      title: `${companyActivity.title} | Tengxuan Travel Group`,
      description: companyActivity.summary,
      image: companyActivity.cover,
      type: 'article'
    }
  }

  if (path === '/unsubscribe') {
    return {
      title: 'Manage Email Subscription | Tengxuan Travel',
      description: 'Manage Tengxuan Travel email subscription preferences from a secure email link.',
      noindex: true
    }
  }

  if (path === '/404') {
    return notFoundSeo()
  }

  const staticPage = staticSeo[path]
  if (staticPage) return staticPage

  return notFoundSeo()
}

function notFoundSeo() {
  return {
    title: 'Page Not Found | Tengxuan Travel',
    description: 'The requested Tengxuan Travel page could not be found. Use the main navigation to open city guides, attractions, products, FAQ, or contact pages.',
    status: 404 as const,
    noindex: true
  }
}

function getContentPaths() {
  return [
    '/',
    '/company',
    '/company/photos',
    ...companyDetail.activityCategories.map((category) => `/company/${category.slug}`),
    '/destinations',
    '/custom-trip',
    '/cities',
    ...cities.map((city) => `/cities/${city.slug}`),
    '/attractions',
    ...attractionDetails.map((attraction) => `/attractions/${attraction.slug}`),
    '/products',
    ...tourProducts.map((product) => `/products/${product.slug}`),
    '/contact',
    '/faq',
    '/visa-entry',
    '/before-you-go',
    '/privacy',
    '/terms',
    '/cookie-policy'
  ]
}

function buildAlternates(contentPath: string) {
  if (contentPath === '/404') return []

  return [
    { hreflang: 'x-default', href: absoluteUrl(contentPath) },
    ...seoLocales.map((locale) => ({
      hreflang: localeHtmlLang[locale],
      href: absoluteUrl(localizePath(contentPath, locale))
    }))
  ]
}

function buildStructuredData(path: string): JsonLd[] {
  if (path === '/404' || path === '/unsubscribe') return []

  const data: JsonLd[] = [buildTravelAgencySchema(), buildWebsiteSchema()]

  if (path !== '/' && !path.startsWith('/cities/') && !path.startsWith('/attractions/') && !path.startsWith('/products/')) {
    data.push(buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: pageLabel(path), path }
    ]))
  }

  if (path === '/faq') {
    data.push(buildFaqSchema([
      {
        question: 'Are prices final?',
        answer: 'Published prices are guide prices. Final quotes depend on date, hotel class, transport inventory, guide language, and group size.'
      },
      {
        question: 'Can routes be customized?',
        answer: 'Yes. Products can be adjusted for arrival city, departure city, hotel standard, pace, dietary needs, and special interests.'
      },
      {
        question: 'Do tours include shopping stops?',
        answer: 'The quoted private products are designed around sightseeing and service delivery. Shopping stops are not used as a price subsidy.'
      },
      {
        question: 'What should agencies send?',
        answer: 'Send market, expected group size, travel window, target price, hotel level, guide language, and required inclusions.'
      }
    ]))
  }

  if (path === '/visa-entry') {
    data.push(buildHowToSchema('China visa-free transit and entry planning checklist', [
      'Confirm traveler nationality, passport validity, and entry purpose against current official rules.',
      'Check arrival city, departure city, transit cities, and ticketed routing before quoting the route.',
      'Prepare hotel details, invitation letter needs, and passport copies required for booking.'
    ]))
  }

  if (path === '/before-you-go') {
    data.push(buildHowToSchema('China travel booking service request', [
      'Share travel dates, arrival and departure cities, traveler count, route preferences, and budget range.',
      'Provide passport names and passport numbers for real-name flights, trains, and attraction tickets.',
      'Confirm hotel level, rooming needs, vehicle requirements, guide language, SIM card needs, and must-visit sights.'
    ]))
  }

  const city = matchDetail(path, '/cities/', cities)
  if (city) {
    data.push(
      buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'City Guides', path: '/cities' },
        { name: city.name, path }
      ])
    )
    return data
  }

  const attraction = matchDetail(path, '/attractions/', attractionDetails)
  if (attraction) {
    data.push(
      {
        '@context': 'https://schema.org',
        '@type': 'TouristAttraction',
        '@id': `${absoluteUrl(path)}#attraction`,
        name: attraction.name,
        description: attraction.summary || attraction.intro,
        image: absoluteAssetUrl(attraction.image),
        url: absoluteUrl(path),
        address: {
          '@type': 'PostalAddress',
          addressLocality: attraction.city,
          addressCountry: 'CN'
        },
        touristType: attraction.facts.find((fact) => fact.label === 'Good for')?.value
      },
      buildFaqSchema([
        {
          question: `Who is ${attraction.name} best for?`,
          answer: attraction.facts.find((fact) => fact.label === 'Good for')?.value || attraction.intro
        },
        {
          question: `How long does ${attraction.name} need?`,
          answer: attraction.facts.find((fact) => fact.label === 'Best pace')?.value || attraction.visitFlow[0]
        },
        {
          question: `What is the best way to visit ${attraction.name}?`,
          answer: attraction.visitFlow[0]
        }
      ]),
      buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Attractions', path: '/attractions' },
        { name: attraction.name, path }
      ])
    )
    return data
  }

  const product = matchDetail(path, '/products/', tourProducts)
  if (product) {
    data.push(
      {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        '@id': `${absoluteUrl(path)}#trip`,
        name: product.name,
        description: product.summary,
        image: absoluteAssetUrl(product.heroImage),
        url: absoluteUrl(path),
        duration: product.duration,
        touristType: product.facts.find((fact) => fact.label === 'Best for')?.value,
        offers: product.prices.map((price) => ({
          '@type': 'Offer',
          name: price.group,
          description: `${price.price}. ${price.basis}`,
          availability: 'https://schema.org/InStock',
          url: absoluteUrl(path)
        })),
        itinerary: product.days.map((day) => ({
          '@type': 'ItemList',
          name: `${day.day}: ${day.title}`,
          description: day.summary,
          itemListElement: day.sights.map((sight, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: sight
          }))
        })),
        provider: {
          '@id': `${siteUrl}/#travelagency`
        }
      },
      buildFaqSchema([
        {
          question: 'What group type is this product suitable for?',
          answer:
            product.facts.find((fact) => fact.label === 'Best for')?.value ||
            'Private groups, families, MICE add-ons, and agency groups.'
        },
        {
          question: 'What is included?',
          answer: product.inclusions.join(' ')
        },
        {
          question: 'What information is needed for a quote?',
          answer:
            'Send travel dates, arrival and departure cities, group size, hotel level, guide language, rooming list, and must-see places for a confirmed quotation.'
        }
      ]),
      buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: product.name, path }
      ])
    )
  }

  return data
}

function buildTravelAgencySchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'TravelAgency'],
    '@id': `${siteUrl}/#travelagency`,
    name: 'Tengxuan Travel Group',
    alternateName: 'Tengxuan Travel',
    url: siteUrl,
    image: absoluteAssetUrl(companyDetail.photoSlots[0]?.image || defaultImage),
    foundingDate: '2001',
    email: 'support@tengxuan.com',
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'NEEQ securities code',
        value: '833741'
      }
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 546
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '北京市东城区朝阳门银河SOHO D座5层50520',
      addressLocality: 'Beijing',
      addressCountry: 'CN'
    },
    areaServed: ['China', 'Global inbound travel markets'],
    description: companyDetail.heroSummary,
    sameAs: ['https://www.tengxuantrip.com/company']
  }
}

function buildWebsiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Tengxuan Travel',
    url: siteUrl,
    publisher: {
      '@id': `${siteUrl}/#travelagency`
    },
    inLanguage: seoLocales.map((locale) => localeHtmlLang[locale])
  }
}

function buildFaqSchema(items: Array<{ question: string; answer: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

function buildHowToSchema(name: string, steps: string[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((text, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text
    }))
  }
}

function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  }
}

function pageLabel(path: string) {
  const staticPage = staticSeo[path]
  if (staticPage) return staticPage.title
  return path
    .split('/')
    .filter(Boolean)
    .slice(-1)[0]
    ?.split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') || 'Tengxuan Travel'
}

function hasLocalePrefix(path: string) {
  return isSeoLocale(getLocaleFromPath(path))
}

function matchDetail<T extends City | AttractionDetail | TourProduct | CompanyActivityCategory>(path: string, prefix: string, entries: T[]) {
  if (!path.startsWith(prefix)) return null
  const slug = path.slice(prefix.length)
  return entries.find((entry) => entry.slug === slug) || null
}

function absoluteUrl(path: string) {
  return `${siteUrl}${path === '/' ? '' : path}`
}

function absoluteAssetUrl(asset: string) {
  if (/^https?:\/\//.test(asset)) return asset
  return `${siteUrl}${asset.startsWith('/') ? asset : `/${asset}`}`
}

function openGraphLocale(htmlLang: string) {
  if (htmlLang === 'zh-CN') return 'zh_CN'
  if (htmlLang === 'en') return 'en_US'
  return htmlLang.replace('-', '_')
}

function renderJsonLdScript(jsonLd: JsonLd) {
  return `<script type="application/ld+json" data-seo-jsonld="true">${serializeJsonLd(jsonLd)}</script>`
}

function serializeJsonLd(jsonLd: JsonLd) {
  return JSON.stringify(jsonLd).replace(/</g, '\\u003c')
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`
  const meta = document.querySelector<HTMLMetaElement>(selector) || document.head.appendChild(document.createElement('meta'))
  meta.setAttribute(attribute, key)
  meta.content = content
}

function setLink(rel: string, href: string) {
  const link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`) || document.head.appendChild(document.createElement('link'))
  link.rel = rel
  link.href = href
}

function isSeoLocale(value: string): value is SeoLocale {
  return seoLocales.includes(value as SeoLocale)
}

function escapeHtml(value: string) {
  return value.replace(/[&<>]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[char] || char)
}

function escapeAttr(value: string) {
  return escapeHtml(value).replace(/"/g, '&quot;')
}
