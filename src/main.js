import { createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import { colors, theme } from './content.js'
import { reveal } from './directives/reveal.js'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faBars,
  faXmark,
  faCheck,
  faPlus,
  faArrowLeft,
  faCircleNotch,
  faImage,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(faBars, faXmark, faCheck, faPlus, faArrowLeft, faCircleNotch, faImage, faFacebookF)
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

const app = createSSRApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('reveal', reveal)
app.mount('#app')
