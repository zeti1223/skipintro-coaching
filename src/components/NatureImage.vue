<script setup>
defineProps({
  url: { type: String, default: '' },
  alt: { type: String, default: '' },
  // 'dark' = sötét (ink) háttér előtt (pl. Hero), 'light' = világos háttér előtt
  variant: { type: String, default: 'light' },
  aspect: { type: String, default: 'aspect-[4/5]' },
  rounded: { type: String, default: 'rounded-[1.75rem]' },
})
</script>

<template>
  <div :class="[aspect, rounded, 'relative overflow-hidden']">
    <img
      v-if="url"
      :src="url"
      :alt="alt"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div
      v-else
      :class="[
        'absolute inset-0 flex flex-col items-center justify-center text-center px-8 gap-3 border-2 border-dashed',
        variant === 'dark'
          ? 'border-aqua/40 bg-paper/5'
          : 'border-aqua/40 bg-aqua/8',
      ]"
    >
      <span class="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path
            class="text-ink"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 17l5-6 4 4 3-4 6 6M5 7l1.5-2L8 7"
          />
          <circle cx="17" cy="6" r="1.4" class="text-ink" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <p
        class="chapter-mark text-xs uppercase tracking-[0.15em] leading-relaxed"
        :class="variant === 'dark' ? 'text-paper/50' : 'text-ink/35'"
      >
        {{ alt || 'Fotó' }}
      </p>
    </div>
  </div>
</template>
