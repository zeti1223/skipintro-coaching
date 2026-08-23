<script setup>
import { site, privacyPolicy } from '../content.js'
</script>

<template>
  <section class="relative pt-28 pb-20 md:pt-32 md:pb-28">
    <div class="max-w-3xl mx-auto px-6">
      <a
        href="/"
        class="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-ink transition-colors mb-10"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
        Vissza a főoldalra
      </a>

      <h1 class="font-display text-3xl md:text-4xl text-ink mb-3">{{ privacyPolicy.title }}</h1>
      <p class="text-xs uppercase tracking-[0.2em] text-ink/40 mb-8">
        Utoljára frissítve: {{ privacyPolicy.lastUpdated }}
      </p>

      <p class="text-body/80 leading-relaxed mb-12">{{ privacyPolicy.intro }}</p>

      <div class="divide-y divide-ink/10 border-t border-b border-ink/10">
        <div v-for="(section, i) in privacyPolicy.sections" :key="i" class="py-6">
          <h2 class="font-display text-lg md:text-xl text-ink mb-3">{{ section.heading }}</h2>
          <p class="text-body/80 leading-relaxed whitespace-pre-line">{{ section.body }}</p>
        </div>
      </div>

      <p class="text-sm text-ink/50 mt-10">
        Kérdésed van az adatkezeléssel kapcsolatban? Írj a
        <a :href="`mailto:${site.contactEmail}`" class="underline underline-offset-2">{{ site.contactEmail }}</a>
        címre.
      </p>
    </div>
  </section>
</template>
