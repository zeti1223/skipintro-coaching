<script setup>
import { about, images } from '../content.js'
import NatureImage from './NatureImage.vue'
</script>

<template>
  <section id="rolam" class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-[minmax(0,280px)_1fr] gap-12 md:gap-16 items-start">
        <NatureImage :url="images.about.url" :alt="images.about.alt" rounded="rounded-card" />

        <div>
          <h2 class="font-display text-3xl md:text-4xl text-ink mb-6">{{ about.title }}</h2>

          <p v-for="(p, i) in about.paragraphs" :key="i" class="text-body/85 leading-relaxed mb-5 max-w-2xl">
            {{ p }}
          </p>

          <blockquote class="border-l-2 border-gold pl-5 my-8 font-display text-xl text-ink/90 max-w-xl">
            „{{ about.quote }}"
            <cite class="block mt-3 text-sm text-ink/60 not-italic font-body">— {{ about.quoteAuthor }}</cite>
          </blockquote>

          <h3 class="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-4">
            {{ about.credentialsTitle }}
          </h3>
          <ul class="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            <li v-for="(c, i) in about.credentials" :key="i" class="flex items-start gap-2.5 text-sm text-body">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-deep shrink-0" />
              {{ c }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
