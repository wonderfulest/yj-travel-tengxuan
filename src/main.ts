import { createWebsiteApp } from './app'

const { app, router } = createWebsiteApp({ hydrate: false })
const initialRoute = `${window.location.pathname}${window.location.search}${window.location.hash}`

router.push(initialRoute).then(() => router.isReady()).then(() => {
  app.mount('#app')
})
