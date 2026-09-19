import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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

export async function render(url = '/') {
  const app = createSSRApp({
    render: () => h(App, { url }),
  })

  app.component('font-awesome-icon', FontAwesomeIcon)
  app.directive('reveal', {
    getSSRProps(binding) {
      const raw = binding.value
      const type =
        raw && typeof raw === 'object' ? (raw.type ?? 'up') : typeof raw === 'string' ? raw : 'up'
      return {
        class: `reveal reveal-${type}`,
      }
    },
  })

  const ctx = {}
  const html = await renderToString(app, ctx)
  return html
}
