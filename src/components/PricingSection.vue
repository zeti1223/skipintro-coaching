<script setup>
import { pricing } from '../content.js'
</script>

<template>
  <section id="szolgaltatasok" class="relative bg-ink text-paper py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4">
      <div class="md:max-w-2xl mb-4" v-reveal>
        <h2 class="font-display text-3xl md:text-4xl mb-4" v-html=" pricing.title"></h2>
      </div>
      <p class="text-paper/50 text-sm mb-14" v-html=" pricing.intro" v-reveal="80"></p>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div
          v-for="(plan, i) in pricing.plans"
          :key="plan.name"
          class="rounded-card p-6 flex flex-col"
          :class="plan.featured ? 'bg-gradient-primary text-ink' : 'bg-paper/6 border border-paper/10'"
          v-reveal="{ delay: i * 100, type: 'scale' }"
        >
          <p
            class="font-display text-xl mb-5 font-semibold"
            :class="plan.featured ? 'text-ink' : 'text-gold'"
          >
            {{ plan.duration }}
          </p>
          <h3 class="font-display text-lg mb-2 leading-snug">{{ plan.name }}</h3>
          <p class="text-sm mb-4 leading-relaxed flex-1" :class="plan.featured ? 'text-ink/70' : 'text-paper/60'">
            {{ plan.description }}
          </p>
          
          <p class="font-display text-2xl mb-5">
            {{ plan.price }}<span v-if="plan.perSession" class="text-sm ml-1">/alkalom</span>
          </p>
          <a
            href="#kapcsolat"
            class="inline-flex items-center justify-center text-sm font-semibold px-4 py-2.5 rounded-full transition hover:scale-105 active:scale-95"
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
