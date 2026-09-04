<script setup>
import { notAlone } from '../content.js'
</script>

<template>
  <section id="kiknek" class="relative py-5 md:py-7">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 items-start mb-14">
        <div v-if="notAlone.image" class="rounded-card overflow-hidden border border-aqua/40">
          <img 
            :src="notAlone.image.url" 
            :alt="notAlone.image.alt"
            class="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ notAlone.title }}</h2>
          <p class="text-body/80 leading-relaxed" v-html="notAlone.intro"></p>
        </div>

        
      </div>
    </div>
  </section>
</template>
