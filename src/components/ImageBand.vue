<script setup>
defineProps({
  url: { type: String, default: '' },
  alt: { type: String, default: '' },
  quote: { type: String, default: '' },
})
</script>

<template>
  <div class="relative w-full aspect-video sm:aspect-21/9 md:aspect-3/1 overflow-hidden">
    <img
      v-if="url"
      :src="url"
      :alt="alt"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div
      v-else
      class="absolute inset-0 flex items-center justify-center border-y-2 border-dashed border-aqua/30 bg-aqua/6 px-6"
    >
      <p class="chapter-mark text-xs uppercase tracking-[0.15em] text-ink/35 text-center max-w-md">
        {{ alt || 'Fotó' }}
      </p>
    </div>

    <template v-if="url">
      <div class="absolute inset-0 bg-ink/35" />
      <p
        v-if="quote"
        class="absolute inset-0 flex items-center justify-center text-center px-6 font-display italic text-xl md:text-3xl lg:text-4xl text-paper max-w-2xl mx-auto"
      >
        „{{ quote }}”
      </p>
    </template>
  </div>
</template>
