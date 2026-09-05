import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { colors, theme } from './content.js'
import { reveal } from './directives/reveal.js'

function applyTheme(config) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const colorMap = config?.colors || colors || {}

  Object.entries(colorMap).forEach(([key, val]) => {
    if (!val) return
    const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
    root.style.setProperty(cssVar, val)
  })

  const gradientMap = config?.gradients || {}
  Object.entries(gradientMap).forEach(([key, val]) => {
    if (!val) return
    const cssVar = `--gradient-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
    root.style.setProperty(cssVar, val)
  })
}

applyTheme(theme)

const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')

