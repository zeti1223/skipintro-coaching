// Scroll-triggered reveal animation directive.
// Usage:
//   v-reveal                  -> fade + slide up, no delay
//   v-reveal="150"             -> fade + slide up, 150ms delay
//   v-reveal="{ delay: 150, type: 'left' }"  -> custom delay + direction
//
// Available types: 'up' (default), 'left', 'right', 'scale'

function resolveOptions(binding) {
  const raw = binding.value
  if (raw && typeof raw === 'object') {
    return { delay: raw.delay ?? 0, type: raw.type ?? 'up' }
  }
  if (typeof raw === 'number') {
    return { delay: raw, type: 'up' }
  }
  return { delay: 0, type: 'up' }
}

export const reveal = {
  mounted(el, binding) {
    const { delay, type } = resolveOptions(binding)

    el.classList.add('reveal', `reveal-${type}`)
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}
