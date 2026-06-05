import { cp, readdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const clientDir = path.join(distDir, 'client')
const tempDir = path.join(root, 'output', 'dist-client-promote')

await rm(tempDir, { recursive: true, force: true })
await cp(clientDir, tempDir, { recursive: true })

for (const entry of await readdir(distDir)) {
  if (entry === 'client') continue
  await rm(path.join(distDir, entry), { recursive: true, force: true })
}

for (const entry of await readdir(tempDir)) {
  await cp(path.join(tempDir, entry), path.join(distDir, entry), { recursive: true })
}

await rm(path.join(distDir, 'client'), { recursive: true, force: true })
await rm(tempDir, { recursive: true, force: true })
