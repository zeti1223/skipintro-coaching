<script setup>
import { about, images } from '../content.js'
import NatureImage from './NatureImage.vue'
</script>

<template>
  <section id="rolam" class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-[minmax(0,280px)_1fr] gap-12 md:gap-16 items-start">
        <div>
          <NatureImage :url="images.about.url" :alt="images.about.alt" rounded="rounded-card" />
          <p class="mt-4 text-center font-display text-xl text-ink">{{ about.motto }}</p>
        </div>

        <div>
          <p v-for="(p, i) in about.paragraphs" :key="i" class="text-body/85 leading-relaxed mb-5 max-w-2xl" v-html="p">
          </p>

          <h3 class="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-4">
            {{ about.credentialsTitle }}
          </h3>
          <ul class="flex flex-col gap-y-3">
            <li v-for="(c, i) in about.credentials" :key="i" class="flex items-start gap-2.5 text-sm text-body">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-deep shrink-0" />
              {{ c }}
            </li>
          </ul>
          <div class="mt-8">
            <a
              href="#support"
              class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition"
            >
              Mutass többet a módszerről
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
