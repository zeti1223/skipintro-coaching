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
        <i class="fa-solid fa-image text-ink text-base" />
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
