import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
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
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
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
