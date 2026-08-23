<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})
onUnmounted(() => window.removeEventListener('scroll', updateProgress))
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 h-0.75 bg-ink/10">
    <div
      class="h-full bg-gradient-progress relative transition-[width] duration-150 ease-out"
      :style="{ width: progress + '%' }"
    >
      <span
        class="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-rose-deep shadow-[0_0_0_3px_var(--color-paper)]"
      />
    </div>
  </div>
</template>
