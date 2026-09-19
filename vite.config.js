import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

import { defineConfig, createServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

function googleFontsSelfHost() {
  async function ensureFonts() {
    const cacheDir = fileURLToPath(new URL('./node_modules/.cache/google-fonts', import.meta.url))
    const cssPath = path.join(cacheDir, 'fonts.css')
    if (fs.existsSync(cssPath)) return

    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true })
    }

    const url =
      'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,400..600&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Homemade+Apple&display=swap'

    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    })
    let css = await res.text()

    const fontUrlRegex = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g
    let match
    const urls = new Set()
    while ((match = fontUrlRegex.exec(css)) !== null) {
      urls.add(match[1])
    }

    for (const fontUrl of urls) {
      const filename = path.basename(fontUrl).split('?')[0]
      const destPath = path.join(cacheDir, filename)
      if (!fs.existsSync(destPath)) {
        const fRes = await fetch(fontUrl)
        const buf = Buffer.from(await fRes.arrayBuffer())
        fs.writeFileSync(destPath, buf)
      }
      css = css.replaceAll(fontUrl, `./${filename}`)
    }

    fs.writeFileSync(cssPath, css)
    console.log('Google Fonts cached in node_modules/.cache/google-fonts')
  }

  return {
    name: 'google-fonts-self-host',
    async buildStart() {
      await ensureFonts()
    },
    async configResolved() {
      await ensureFonts()
    },
  }
}

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
  plugins: [googleFontsSelfHost(), vue(), tailwindcss(), prerenderPages()],
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
