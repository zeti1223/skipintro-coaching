<script setup>
import { process } from '../content.js'
</script>

<template>
  <section id="process" class="relative py-12 md:py-16">
    <div class="absolute inset-0 z-0">
      <img 
        src="/Prev/AdobeStock_1760337244_Preview.jpeg" 
        alt="Erdős táj" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/75" />
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 items-start mb-14">
        <div>
          <h3 class="font-display text-3xl md:text-4xl text-gold mb-6">{{ process.titleSteps }}</h3>
          
          <div class="space-y-6">
            <div v-for="(step, i) in process.steps" :key="i" class="border-l-2 border-gold pl-5">
              <h4 class="font-display text-lg text-gold mb-2">{{ step.title }}</h4>
              <p class="text-white leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="font-display text-3xl md:text-4xl text-gold mb-4">{{ process.title }}</h2>
          
          <ul class="grid sm:grid-cols-1 gap-x-8 gap-y-3">
            <li v-for="(item, i) in process.items" :key="i" class="flex items-start gap-2.5 text-sm text-white">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-deep shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <a
          :href="process.cta.href"
          class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition"
        >
          {{ process.cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>
