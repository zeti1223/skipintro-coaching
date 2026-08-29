<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)
const isDragging = ref(false)
const barRef = ref(null)

function updateProgress() {
  if (isDragging.value) return
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0
}

function handlePointer(e) {
  const rect = barRef.value?.getBoundingClientRect()
  if (!rect || rect.width === 0) return

  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight <= 0) return

  const clientX = e.clientX
  const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
  progress.value = ratio * 100
  window.scrollTo({
    top: ratio * docHeight,
    behavior: 'auto'
  })
}

function onPointerDown(e) {
  isDragging.value = true
  document.documentElement.style.scrollBehavior = 'auto'
  e.currentTarget.setPointerCapture(e.pointerId)
  handlePointer(e)
}

function onPointerMove(e) {
  if (!isDragging.value) return
  handlePointer(e)
}

function onPointerUp(e) {
  if (!isDragging.value) return
  isDragging.value = false
  document.documentElement.style.scrollBehavior = ''
  try {
    e.currentTarget.releasePointerCapture(e.pointerId)
  } catch {}
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  document.documentElement.style.scrollBehavior = ''
})
</script>

<template>
  <div
    ref="barRef"
    class="fixed bottom-0 left-0 right-0 z-50 h-3.5 group cursor-pointer touch-none select-none flex items-end"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
  >
    <!-- Background track -->
    <div
      class="w-full h-1 bg-ink/10 relative transition-all duration-150 group-hover:h-1.5"
      :class="{ 'h-1.5': isDragging }"
    >
      <!-- Active progress -->
      <div
        class="h-full bg-gradient-progress relative"
        :class="{ 'transition-[width] duration-150 ease-out': !isDragging }"
        :style="{ width: progress + '%' }"
      >
        <!-- Grab handle / dot -->
        <span
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-rose-deep shadow-[0_0_0_3px_var(--color-paper)] transition-transform duration-150 hover:scale-125 cursor-grab"
          :class="{ 'scale-125 cursor-grabbing': isDragging }"
        />
      </div>
    </div>
  </div>
</template>
