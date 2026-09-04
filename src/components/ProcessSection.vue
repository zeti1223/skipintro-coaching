<script setup>
import { process } from '../content.js'
import NatureImage from './NatureImage.vue'
</script>

<template>
  <section id="process" class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 items-start mb-14">
        <div v-if="process.image" class="rounded-card overflow-hidden border border-aqua/40">
          <img 
            :src="process.image.url" 
            :alt="process.image.alt"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="rounded-card bg-aqua/25 border border-aqua/40 p-7 md:p-8 flex flex-col">
          <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ process.title }}</h2>
          <p class="text-body/80 leading-relaxed mb-6">{{ process.intro }}</p>
          
          <ul class="grid sm:grid-cols-1 gap-x-8 gap-y-3">
            <li v-for="(item, i) in process.items" :key="i" class="flex items-start gap-2.5 text-sm text-body">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-deep shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mb-12">
        <h3 class="font-display text-2xl md:text-3xl text-ink mb-6">{{ process.titleSteps }}</h3>
        
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div class="space-y-6">
            <div v-for="(step, i) in process.steps" :key="i" class="border-l-2 border-gold pl-5">
              <h4 class="font-display text-lg text-ink mb-2">{{ step.title }}</h4>
              <p class="text-body/80 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>

          <div v-if="process.stepsImage" class="rounded-card overflow-hidden border border-aqua/40">
            <img 
              :src="process.stepsImage.url" 
              :alt="process.stepsImage.alt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="text-center">
        <a
          href="#szolgaltatasok"
          class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition"
        >
          Jelenkezem az ingyenes konzultációra
        </a>
      </div>
    </div>
  </section>
</template>
