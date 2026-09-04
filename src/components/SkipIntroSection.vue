<script setup>
import { skipIntro } from '../content.js'
</script>

<template>
  <section id="skipintro" class="relative py-20 md:py-28">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="font-display text-3xl md:text-4xl text-ink mb-6">{{ skipIntro.title }}</h2>
      
      <p class="text-body/85 leading-relaxed mb-8 max-w-2xl">
        {{ skipIntro.intro }}
      </p>
      
      <p class="text-body/85 leading-relaxed mb-8 max-w-2xl">
        {{ skipIntro.conclusion }}
      </p>
      
      <a
        href="#szolgaltatasok"
        class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition"
      >
        Szeretném a személyre szabott coaching programot
      </a>
    </div>
  </section>
</template>
