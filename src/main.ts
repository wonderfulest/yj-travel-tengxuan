import { createWebsiteApp } from './app'

const { app, router } = createWebsiteApp()

router.isReady().then(() => {
  app.mount('#app')
})
