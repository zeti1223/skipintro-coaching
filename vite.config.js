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

      // Write adatkezeles.html
      fs.writeFileSync(path.join(distDir, 'adatkezeles.html'), privacyHtml)

      // Write adatkezeles/index.html
      const adatkezelesDir = path.join(distDir, 'adatkezeles')
      if (!fs.existsSync(adatkezelesDir)) {
        fs.mkdirSync(adatkezelesDir, { recursive: true })
      }
      fs.writeFileSync(path.join(adatkezelesDir, 'index.html'), privacyHtml)
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
