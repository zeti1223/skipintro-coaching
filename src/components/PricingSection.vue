<script setup>
import { pricing } from '../content.js'
import ChapterMark from './ChapterMark.vue'
</script>

<template>
  <section id="szolgaltatasok" class="relative bg-ink text-paper py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <ChapterMark :time="pricing.chapterMark" label="Szolgáltatások" dark />

      <div class="md:max-w-2xl mb-4">
        <h2 class="font-display text-3xl md:text-4xl mb-4">{{ pricing.title }}</h2>
      </div>
      <p class="text-paper/50 text-sm mb-14">{{ pricing.intro }}</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="plan in pricing.plans"
          :key="plan.name"
          class="rounded-card p-6 flex flex-col"
          :class="plan.featured ? 'bg-gradient-primary text-ink' : 'bg-paper/[0.06] border border-paper/10'"
        >
          <p
            class="chapter-mark text-xs uppercase tracking-[0.12em] mb-6"
            :class="plan.featured ? 'text-ink/60' : 'text-paper/40'"
          >
            {{ plan.duration }}
          </p>
          <h3 class="font-display text-lg mb-2 leading-snug">{{ plan.name }}</h3>
          <p class="text-sm mb-6 leading-relaxed flex-1" :class="plan.featured ? 'text-ink/70' : 'text-paper/60'">
            {{ plan.description }}
          </p>
          <p class="font-display text-2xl mb-5">{{ plan.price }}</p>
          <a
            href="#kapcsolat"
            class="inline-flex items-center justify-center text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
            :class="
              plan.featured
                ? 'bg-ink text-paper hover:bg-ink-soft'
                : 'bg-paper/10 hover:bg-paper/20 border border-paper/15'
            "
          >
            Foglalok időpontot
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
