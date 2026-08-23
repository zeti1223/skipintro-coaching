<script setup>
defineProps({
  time: { type: String, required: true },
  label: { type: String, required: true },
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <div class="flex items-center gap-3 mb-4">
    <span class="chapter-mark text-xs font-medium text-rose-deep bg-rose/60 px-2.5 py-1 rounded-full">{{
      time
    }}</span>
    <span
      class="chapter-mark text-xs uppercase tracking-[0.2em]"
      :class="dark ? 'text-paper/40' : 'text-ink/40'"
      >{{ label }}</span
    >
  </div>
</template>
