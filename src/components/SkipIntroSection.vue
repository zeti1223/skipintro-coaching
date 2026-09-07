<script setup>
import { skipIntro } from '../content.js'
</script>

<template>
  <section id="skipintro" class="relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 items-start mb-6">
        <div v-reveal="{ type: 'left' }">
          <h2 class="font-display text-3xl md:text-4xl text-ink mb-6" v-html="skipIntro.title"></h2>
          
          <p class="text-body/85 leading-relaxed mb-8 max-w-2xl" v-html="skipIntro.intro"></p>
          
          <p class="text-body/85 leading-relaxed mb-8 max-w-2xl" v-html="skipIntro.conclusion"></p>
        </div>

        <div v-if="skipIntro.image" v-reveal="{ type: 'right', delay: 100 }">
          <div class="rounded-card overflow-hidden border border-aqua/40 group">
            <img 
              :src="skipIntro.image.url" 
              :alt="skipIntro.image.alt"
              class="w-full h-full object-cover img-zoom"
            />
          </div>
          <blockquote v-if="skipIntro.quote" class="mt-10 border-l-2 border-gold pl-5 font-bold font-display italic text-lg md:text-2xl text-ink/90">
            „{{ skipIntro.quote }}"
          </blockquote>
        </div>
      </div>

      <div class="text-center" v-reveal>
        <a
          href="#szolgaltatasok"
          class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 hover:scale-105 active:scale-95 transition"
        >
          Kérem a részleteket
      </a>
      </div>
    </div>
  </section>
</template>
