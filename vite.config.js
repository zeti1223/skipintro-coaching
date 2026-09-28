import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

import { defineConfig, createServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

function prerenderPages() {
  return {
    name: 'prerender-pages',
    apply: 'build',
    async closeBundle() {
      const distDir = fileURLToPath(new URL('./dist', import.meta.url))
      const indexPath = path.join(distDir, 'index.html')
      if (!fs.existsSync(indexPath)) return

      const templateHtml = fs.readFileSync(indexPath, 'utf-8')

      // Spin up Vite in SSR mode to render Vue components
      const server = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        ssr: {
          noExternal: ['@fortawesome/*'],
        },
      })

      const { render } = await server.ssrLoadModule('/src/entry-server.js')

      const homeContent = await render('/')
      const privacyContent = await render('/adatkezeles')

      await server.close()

      // 1. Generate full Home HTML
      const fullHomeHtml = templateHtml.replace(
        '<div id="app"></div>',
        `<div id="app">${homeContent}</div>`
      )
      fs.writeFileSync(indexPath, fullHomeHtml)

      // 2. Generate 404.html fallback
      fs.writeFileSync(path.join(distDir, '404.html'), fullHomeHtml)

      // 3. Generate specialized /adatkezeles HTML
      const privacyTitle = 'Adatkezelési tájékoztató | Skip Intro Coaching – André Melinda'
      const privacyDesc =
        'A Skip Intro Coaching (André Melinda) adatkezelési tájékoztatója. Információk a személyes adatok kezeléséről, védelméről és az érintetti jogokról.'
      const privacyUrl = 'https://skipintro.hu/adatkezeles'

      const fullPrivacyHtml = templateHtml
        .replace('<div id="app"></div>', `<div id="app">${privacyContent}</div>`)
        .replace(/<title>.*?<\/title>/, `<title>${privacyTitle}</title>`)
        .replace(
          /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
          `<meta name="description" content="${privacyDesc}" />`
        )
        .replace(
          /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
          `<link rel="canonical" href="${privacyUrl}" />`
        )
        .replace(
          /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
          `<meta property="og:title" content="${privacyTitle}" />`
        )
        .replace(
          /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
          `<meta property="og:description" content="${privacyDesc}" />`
        )
        .replace(
          /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
          `<meta property="og:url" content="${privacyUrl}" />`
        )
        .replace(
          /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
          `<meta name="twitter:title" content="${privacyTitle}" />`
        )
        .replace(
          /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
          `<meta name="twitter:description" content="${privacyDesc}" />`
        )

      // Write adatkezeles.html
      fs.writeFileSync(path.join(distDir, 'adatkezeles.html'), fullPrivacyHtml)

      // Write adatkezeles/index.html
      const adatkezelesDir = path.join(distDir, 'adatkezeles')
      if (!fs.existsSync(adatkezelesDir)) {
        fs.mkdirSync(adatkezelesDir, { recursive: true })
      }
      fs.writeFileSync(path.join(adatkezelesDir, 'index.html'), fullPrivacyHtml)

      console.log('Prerendered HTML pages generated successfully for / and /adatkezeles')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), prerenderPages()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8000,
    allowedHosts: true,
  },
})
