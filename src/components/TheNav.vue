<script setup>
import { ref } from 'vue'
import { nav, site } from '../content.js'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/10">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <a href="/#hero" class="font-display text-xl tracking-tight text-ink">
        {{ site.brandName }}<span class="text-gold">.</span
        ><span class="hidden sm:inline text-body font-body text-sm ml-1 opacity-70">{{
          site.brandSuffix
        }}</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-ink/80 hover:text-ink transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>

      <a
        href="/#kapcsolat"
        class="hidden md:inline-flex items-center gap-2 bg-ink text-paper text-sm font-semibold px-4 py-2 rounded-full hover:bg-ink-soft transition-colors"
      >
        Időpontfoglalás
      </a>

      <button
        class="md:hidden text-ink p-2 -mr-2 flex items-center justify-center w-10 h-10"
        aria-label="Menü megnyitása"
        @click="open = !open"
      >
        <i v-if="!open" class="fa-solid fa-bars text-xl" />
        <i v-else class="fa-solid fa-xmark text-xl" />
      </button>
    </div>

    <div v-if="open" class="md:hidden border-t border-ink/10 bg-paper px-6 py-4 flex flex-col gap-4">
      <a
        v-for="item in nav"
        :key="item.href"
        :href="item.href"
        class="text-sm font-medium text-ink/80"
        @click="open = false"
      >
        {{ item.label }}
      </a>
      <a
        href="/#kapcsolat"
        class="inline-flex items-center justify-center gap-2 bg-ink text-paper text-sm font-semibold px-4 py-2.5 rounded-full"
        @click="open = false"
      >
        Időpontfoglalás
      </a>
    </div>
  </header>
</template>
