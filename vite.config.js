import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

function generateStaticPages() {
  return {
    name: 'generate-static-pages',
    closeBundle() {
      const distDir = fileURLToPath(new URL('./dist', import.meta.url))
      const indexPath = path.join(distDir, 'index.html')
      if (!fs.existsSync(indexPath)) return

      const html = fs.readFileSync(indexPath, 'utf-8')

      // 404.html fallback for GitHub Pages SPA
      fs.writeFileSync(path.join(distDir, '404.html'), html)

      // Specialized HTML for /adatkezeles with updated title and canonical link
      const privacyHtml = html
        .replace(
          /<title>.*?<\/title>/,
          '<title>Adatkezelési tájékoztató | Skip Intro Coaching</title>'
        )
        .replace(
          /<link rel="canonical" href=".*?" \/>/,
          '<link rel="canonical" href="https://skipintro.hu/adatkezeles" />'
        )

      // Write adatkezeles.html & adatkezeles/index.html
      fs.writeFileSync(path.join(distDir, 'adatkezeles.html'), privacyHtml)
      const adatkezelesDir = path.join(distDir, 'adatkezeles')
      if (!fs.existsSync(adatkezelesDir)) {
        fs.mkdirSync(adatkezelesDir, { recursive: true })
      }
      fs.writeFileSync(path.join(adatkezelesDir, 'index.html'), privacyHtml)

      // Specialized HTML for /szerkeszto and /admin
      const adminHtml = html
        .replace(
          /<title>.*?<\/title>/,
          '<title>Szerkesztő Felület | Skip Intro Coaching</title>'
        )
        .replace(
          /<meta name="robots" content=".*?" \/>/,
          '<meta name="robots" content="noindex, nofollow" />'
        )

      // Write szerkeszto.html & szerkeszto/index.html
      fs.writeFileSync(path.join(distDir, 'szerkeszto.html'), adminHtml)
      const szerkesztoDir = path.join(distDir, 'szerkeszto')
      if (!fs.existsSync(szerkesztoDir)) {
        fs.mkdirSync(szerkesztoDir, { recursive: true })
      }
      fs.writeFileSync(path.join(szerkesztoDir, 'index.html'), adminHtml)

      // Write admin.html & admin/index.html
      fs.writeFileSync(path.join(distDir, 'admin.html'), adminHtml)
      const adminDir = path.join(distDir, 'admin')
      if (!fs.existsSync(adminDir)) {
        fs.mkdirSync(adminDir, { recursive: true })
      }
      fs.writeFileSync(path.join(adminDir, 'index.html'), adminHtml)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    generateStaticPages(),
  ],
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
