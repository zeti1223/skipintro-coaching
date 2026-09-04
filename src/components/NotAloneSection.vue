<script setup>
import { notAlone } from '../content.js'
</script>

<template>
  <section id="kiknek" class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 items-start mb-14">
        <div>
          <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ notAlone.title }}</h2>
          <p class="text-body/80 leading-relaxed" v-html="notAlone.intro"></p>
        </div>

        <div v-if="notAlone.image" class="rounded-card overflow-hidden border border-aqua/40">
          <img 
            :src="notAlone.image.url" 
            :alt="notAlone.image.alt"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="text-center">
        <a
          v-if="notAlone.cta"
          :href="notAlone.cta.href"
          class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition"
        >
          {{ notAlone.cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>
