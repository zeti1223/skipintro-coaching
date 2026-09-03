<script setup>
import { process } from '../content.js'
</script>

<template>
  <section id="haladas" class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="md:max-w-2xl mb-14">
        <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ process.title }}</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-stretch">
        <div class="rounded-card bg-aqua/25 border border-aqua/40 p-7 md:p-8 flex flex-col justify-center">
          <p class="text-sm md:text-[15px] text-body leading-relaxed">
            <span v-for="(step, i) in process.steps" :key="i">
              {{ step.description }}
              <span v-if="i < process.steps.length - 1"> </span>
            </span>
          </p>
        </div>

        <div class="rounded-lg overflow-hidden shadow-lg">
          <img :src="process.image.url" :alt="process.image.alt" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>
