<script setup>
import { hero, images } from '../content.js'
import NatureImage from './NatureImage.vue'
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-ink text-paper">
    <!-- ambient shapes -->
    <div class="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
    <div class="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-aqua/20 blur-3xl" />
    <div class="pointer-events-none absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-gradient-primary opacity-10 blur-3xl" />

    <div class="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <div
          class="inline-flex items-center gap-2 chapter-mark text-xs bg-paper/10 border border-paper/20 text-gold-soft px-3 py-1.5 rounded-full mb-8"
        >
          <span class="inline-block w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-gold-soft" />
          {{ hero.eyebrow }}
          <span class="opacity-50">·</span>
          {{ hero.eyebrowTime }}
        </div>

        <h1 class="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.08] whitespace-pre-line mb-6">
          {{ hero.title }}
        </h1>

        <p class="text-paper/70 text-lg leading-relaxed mb-10 max-w-lg">
          {{ hero.paragraph }}
        </p>

        <div class="flex flex-wrap items-center gap-4">
          <a
            :href="hero.primaryCta.href"
            class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition"
          >
            {{ hero.primaryCta.label }}
          </a>
          <a
            :href="hero.secondaryCta.href"
            class="inline-flex items-center gap-2 text-paper font-medium px-6 py-3.5 rounded-full border border-paper/30 hover:border-aqua/70 transition-colors"
          >
            {{ hero.secondaryCta.label }}
          </a>
        </div>
      </div>

      <div class="relative">
        <NatureImage :url="images.hero.url" :alt="hero.photoCaption || images.hero.alt" variant="dark" />
        <div
          class="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 bg-paper text-ink rounded-2xl shadow-xl px-5 py-4 w-max max-w-[85%]"
        >
          <p class="font-display text-sm font-medium leading-tight">{{ hero.coachName }}</p>
          <p class="text-xs text-ink/60 mt-0.5">{{ hero.coachRole }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
