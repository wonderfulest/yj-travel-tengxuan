import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const clientDir = path.join(distDir, 'client')
const serverEntry = path.join(distDir, 'server', 'entry-server.js')

const template = await readFile(path.join(clientDir, 'index.html'), 'utf8')
const { render } = await import(serverEntry)
const { getPrerenderPaths, getSitemapEntries } = await import(serverEntry)

const paths = getPrerenderPaths()

for (const urlPath of paths) {
  const rendered = await render(urlPath)
  const html = template
    .replace('<html lang="en">', `<html ${rendered.htmlAttrs}>`)
    .replace('<!--app-head-->', rendered.headTags)
    .replace('<div id="app"><!--app-html--></div>', `<div id="app">${rendered.appHtml}</div>`)

  const targetPath = urlPath === '/404' ? path.join(clientDir, '404.html') : path.join(clientDir, normalizeOutputPath(urlPath), 'index.html')
  await mkdir(path.dirname(targetPath), { recursive: true })
  await writeFile(targetPath, html)
}

await writeFile(path.join(clientDir, 'sitemap.xml'), renderSitemap(getSitemapEntries()))
await writeFile(
  path.join(clientDir, 'robots.txt'),
  ['User-agent: *', 'Allow: /', 'Disallow: /unsubscribe', `Sitemap: https://www.tengxuantrip.com/sitemap.xml`, ''].join('\n')
)

await rm(path.join(distDir, 'server'), { recursive: true, force: true })

function normalizeOutputPath(urlPath) {
  const trimmed = urlPath.replace(/^\/+|\/+$/g, '')
  return trimmed || ''
}

function renderSitemap(entries) {
  const urls = entries
    .map((entry) => {
      const links = entry.alternates
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hreflang)}" href="${escapeXml(alternate.href)}" />`
        )
        .join('\n')

      return `  <url>
    <loc>${escapeXml(entry.url)}</loc>
${links}
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
