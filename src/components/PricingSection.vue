<script setup>
import { pricing } from '../content.js'
</script>

<template>
  <section id="szolgaltatasok" class="relative bg-ink text-paper py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="md:max-w-2xl mb-4">
        <h2 class="font-display text-3xl md:text-4xl mb-4">{{ pricing.title }}</h2>
      </div>
      <p class="text-paper/50 text-sm mb-14">{{ pricing.intro }}</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="plan in pricing.plans"
          :key="plan.name"
          class="rounded-card p-6 flex flex-col"
          :class="plan.featured ? 'bg-gradient-primary text-ink' : 'bg-paper/6 border border-paper/10'"
        >
          <h3 class="font-display text-lg mb-2 leading-snug">{{ plan.name }}</h3>
          <p class="text-sm mb-4 leading-relaxed flex-1" :class="plan.featured ? 'text-ink/70' : 'text-paper/60'">
            {{ plan.description }}
          </p>
          <p
            class="font-display text-xl mb-5 font-semibold"
            :class="plan.featured ? 'text-ink' : 'text-gold'"
          >
            {{ plan.duration }}
          </p>
          <p class="font-display text-2xl mb-5">{{ plan.price }}</p>
          <a
            href="#kapcsolat"
            class="inline-flex items-center justify-center text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
            :class="
              plan.featured
                ? 'bg-ink text-paper hover:bg-ink-soft'
                : 'bg-gold-soft text-ink hover:brightness-105 hover:shadow-lg hover:shadow-gold-soft/20'
            "
          >
            Foglalok időpontot
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
