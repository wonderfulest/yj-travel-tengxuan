import { createMemoryHistory, createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { trackPageView } from '@/analytics'
import { applySeoMeta, getLocaleFromPath, isLocalePrefix } from '@/seo'
import { getCurrentLocale, getStoredLocale, setLocale, type Locale } from '@/i18n'

const localePrefixes = ['en', 'de', 'fr', 'es', 'zh'] as const

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/unsubscribe',
    name: 'unsubscribe',
    component: () => import('@/views/SubscriptionView.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('@/views/CompanyView.vue')
  },
  {
    path: '/company/photos',
    name: 'company-photos',
    component: () => import('@/views/CompanyPhotosView.vue')
  },
  {
    path: '/company/:slug',
    name: 'company-activity',
    component: () => import('@/views/CompanyActivityView.vue')
  },
  {
    path: '/destinations',
    name: 'destinations',
    component: () => import('@/views/DestinationsView.vue')
  },
  {
    path: '/custom-trip',
    name: 'custom-trip',
    component: () => import('@/views/CustomTripView.vue')
  },
  {
    path: '/cities',
    name: 'cities',
    component: () => import('@/views/CitiesView.vue')
  },
  {
    path: '/cities/:slug',
    name: 'city-detail',
    component: () => import('@/views/CityDetailView.vue')
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: () => import('@/views/AttractionsView.vue')
  },
  {
    path: '/attractions/:slug',
    name: 'attraction-detail',
    component: () => import('@/views/AttractionDetailView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    path: '/products/:slug',
    name: 'product-detail',
    component: () => import('@/views/ProductBeijingXianShanghaiView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FaqView.vue')
  },
  {
    path: '/visa-entry',
    name: 'visa-entry',
    component: () => import('@/views/VisaEntryView.vue')
  },
  {
    path: '/before-you-go',
    name: 'before-you-go',
    component: () => import('@/views/BeforeYouGoView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/TermsView.vue')
  },
  {
    path: '/cookie-policy',
    name: 'cookie-policy',
    component: () => import('@/views/CookiePolicyView.vue')
  }
]

const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('@/views/NotFoundView.vue')
}

function withLocalizedRoutes(routes: RouteRecordRaw[]) {
  const localized = localePrefixes.flatMap((locale) =>
    routes.map((route) => {
      const routePath = route.path === '/' ? `/${locale}` : `/${locale}${route.path}`

      return {
        ...route,
        path: routePath,
        name: `${String(route.name)}-${locale}`
      }
    })
  )

  return [...routes, ...localized, notFoundRoute]
}

export function createWebsiteRouter() {
  const router = createRouter({
    history: typeof window === 'undefined' ? createMemoryHistory() : createWebHistory(),
    routes: withLocalizedRoutes(baseRoutes),
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) {
        return {
          el: to.hash,
          top: 84,
          behavior: 'smooth'
        }
      }
      return { top: 0 }
    }
  })

  router.beforeEach((to) => {
    const locale = getLocaleFromPath(to.path)
    if (locale && isLocalePrefix(locale)) {
      setLocale(locale as Locale)
      return
    }

    setLocale(getCurrentLocale() || getStoredLocale())
  })

  router.afterEach((to) => {
    if (typeof document === 'undefined') return
    applySeoMeta(to.name === 'not-found' ? '/404' : to.path)
    trackPageView(to.fullPath)
  })

  return router
}
