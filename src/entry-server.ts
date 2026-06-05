import { renderToString } from '@vue/server-renderer'
import { createWebsiteApp } from './app'
import { getSeoMeta, renderHeadTags } from './seo'

export { getPrerenderPaths, getSitemapEntries } from './seo'

export async function render(url: string) {
  const { app, router } = createWebsiteApp()

  await router.push(url)
  await router.isReady()

  const route = router.currentRoute.value
  const appHtml = await renderToString(app)
  const seo = getSeoMeta(route.path)

  return {
    appHtml,
    headTags: renderHeadTags(seo),
    htmlAttrs: `lang="${seo.htmlLang}"`,
    status: seo.status
  }
}
