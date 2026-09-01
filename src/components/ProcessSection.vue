<script setup>
import { process } from '../content.js'
</script>

<template>
  <section id="haladas" class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="md:max-w-2xl mb-14">
        <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ process.title }}</h2>
      </div>

      <div class="space-y-6">
        <div v-for="(step, i) in process.steps" :key="i" class="rounded-card bg-aqua/25 border border-aqua/40 p-7 md:p-8">
          <h3 class="font-display text-xl text-ink mb-3">{{ step.title }}</h3>
          <p class="text-sm md:text-[15px] text-body leading-relaxed">{{ step.description }}</p>
        </div>
      </div>

      <div class="mt-8 border border-dashed border-gold/70 bg-gold/15 rounded-card px-6 py-5 text-sm text-ink/70 leading-relaxed" v-html="process.note">
      </div>
    </div>
  </section>
</template>
