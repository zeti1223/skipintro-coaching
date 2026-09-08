<script setup>
import { ref } from 'vue'
import { nav, site } from '../content.js'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/10">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <a href="/#hero" class="font-display text-xl tracking-tight text-ink">
        <span class="text-[1.125em]">S</span>kip Intro<span class="text-gold">.</span
        ><span class="inline text-body font-body text-sm ml-1 opacity-70">{{
          site.brandSuffix
        }}</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="relative text-sm font-medium text-ink/80 hover:text-ink transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full"
        >
          {{ item.label }}
        </a>
      </nav>

      <a
        href="/#kapcsolat"
        class="hidden md:inline-flex items-center gap-2 bg-ink text-paper text-sm font-semibold px-4 py-2 rounded-full hover:bg-ink-soft hover:scale-105 active:scale-95 transition"
      >
        Időpontfoglalás
      </a>

      <button
        class="md:hidden text-ink p-2 -mr-2 flex items-center justify-center w-10 h-10"
        aria-label="Menü megnyitása"
        @click="open = !open"
      >
        <i
          class="fa-solid text-xl transition-transform duration-300"
          :class="open ? 'fa-xmark rotate-90' : 'fa-bars rotate-0'"
        />
      </button>
    </div>

    <Transition name="fade-slide">
      <div v-if="open" class="md:hidden border-t border-ink/10 bg-paper px-6 py-4 flex flex-col gap-4">
        <a
          v-for="(item, i) in nav"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-ink/80 hover:text-ink hover:translate-x-1 transition-all"
          v-reveal="i * 60"
          @click="open = false"
        >
          {{ item.label }}
        </a>
        <a
          href="/#kapcsolat"
          class="inline-flex items-center justify-center gap-2 bg-ink text-paper text-sm font-semibold px-4 py-2.5 rounded-full hover:scale-105 active:scale-95 transition"
          @click="open = false"
        >
          Időpontfoglalás
        </a>
      </div>
    </Transition>
  </header>
</template>
