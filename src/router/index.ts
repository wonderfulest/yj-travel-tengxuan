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
      path: '/products/beijing-xian-shanghai',
      name: 'beijing-xian-shanghai',
      component: () => import('@/views/ProductBeijingXianShanghaiView.vue')
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
