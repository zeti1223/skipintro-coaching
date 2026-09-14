import { contentState } from './composables/useContentStore.js'

export const theme = {
  colors: {
    ink: '#354f64',
    inkSoft: '#466986',
    paper: '#e5fff8',
    paperDark: '#ccfff1',
    body: '#233543',
    gold: '#ffdb66',
    goldSoft: '#ffe799',
    aqua: '#59d9d1',
    aquaSoft: '#acece8',
    aquaDeep: '#1c7d76',
    rose: '#ffcccf',
    roseDeep: '#cc000e',
  },

  gradients: {
    primary: 'linear-gradient(135deg, var(--color-gold), var(--color-rose))',
    progress: 'linear-gradient(90deg, var(--color-gold), var(--color-aqua), var(--color-rose))',
    cool: 'linear-gradient(135deg, var(--color-aqua), var(--color-paper-dark))',
  },
}

export const colors = theme.colors

export const site = contentState.site
export const images = contentState.images
export const nav = contentState.nav
export const hero = contentState.hero
export const notAlone = contentState.notAlone
export const support = contentState.support
export const skipIntro = contentState.skipIntro
export const process = contentState.process
export const pricing = contentState.pricing
export const contact = contentState.contact
export const footer = contentState.footer
export const about = contentState.about
export const faq = contentState.faq
export const privacyPolicy = contentState.privacyPolicy
