import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import { createWebsiteRouter } from './router'
import './assets/styles.css'

type WebsiteAppOptions = {
  hydrate?: boolean
}

export function createWebsiteApp(options: WebsiteAppOptions = {}) {
  const app = options.hydrate === false ? createApp(App) : createSSRApp(App)
  const router = createWebsiteRouter()

  app.use(router)

  return { app, router }
}
