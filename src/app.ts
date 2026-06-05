import { createSSRApp } from 'vue'
import App from './App.vue'
import { createWebsiteRouter } from './router'
import './assets/styles.css'

export function createWebsiteApp() {
  const app = createSSRApp(App)
  const router = createWebsiteRouter()

  app.use(router)

  return { app, router }
}
