<script setup>
import { audience } from '../content.js'
</script>

<template>
  <section id="kiknek" class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="md:max-w-2xl mb-14">
        <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ audience.title }}</h2>
        <p class="text-body/80 leading-relaxed">{{ audience.intro }}</p>
      </div>

      <div class="rounded-card bg-aqua/25 border border-aqua/40 p-7 md:p-8">
        <h3 class="font-display text-xl text-ink mb-5">{{ audience.forTitle }}</h3>
        <ul class="space-y-4">
          <li v-for="(item, i) in audience.for" :key="i" class="flex gap-3">
            <span class="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-ink/15 text-ink flex items-center justify-center">
              <i class="fa-solid fa-check text-[10px]" />
            </span>
            <span class="text-sm md:text-[15px] text-body leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-8 border border-dashed border-gold/70 bg-gold/15 rounded-card px-6 py-5 text-sm text-ink/70 leading-relaxed">
        {{ audience.disclaimer }}
      </div>
    </div>
  </section>
</template>
