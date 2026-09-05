<script setup>
import { hero, images, site } from '../content.js'
import NatureImage from './NatureImage.vue'
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-ink text-paper">
    <!-- ambient shapes -->
    <div class="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-float-a" />
    <div class="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-aqua/20 blur-3xl animate-float-b" />
    <div class="pointer-events-none absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-gradient-primary opacity-10 blur-3xl animate-float-b-slow" />

    <div class="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-14 items-start">
      <div>
        <div class="font-display text-2xl md:text-4xl tracking-tight text-paper mb-10" v-reveal>
          {{ site.brandName }}<span class="text-gold">.</span
          ><span class="hidden sm:inline text-paper font-body text-sm md:text-2xl ml-1 opacity-70">{{
            site.brandSuffix
          }}</span>
        </div>

        <h1 class="font-display font-medium text-3xl md:text-4xl lg:text-5xl leading-[1.08] mb-6" v-reveal="80">
          {{ hero.name }}
          <span class="font-thin block text-1xl md:text-2xl lg:text-3xl whitespace-pre-line">{{ hero.subtitle }}</span>
        </h1>

        <p class="text-gold text-3xl md:text-4xl font-handwriting mb-4" v-reveal="160">{{ hero.greeting }}</p>

        <p class="text-paper/70 text-lg leading-relaxed mb-10 max-w-lg" v-html="hero.paragraph" v-reveal="240"></p>

        <div class="flex flex-col sm:flex-row items-center gap-4" v-reveal="320">
          <a
            :href="hero.primaryCta.href"
            class="inline-flex items-center justify-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 hover:scale-105 active:scale-95 transition whitespace-nowrap"
          >
            {{ hero.primaryCta.label }}
          </a>
          <a
            :href="hero.secondaryCta.href"
            class="inline-flex items-center justify-center gap-2 bg-rose text-ink font-medium px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-rose/20 hover:scale-105 active:scale-95 transition whitespace-nowrap"
          >
            {{ hero.secondaryCta.label }}
          </a>
        </div>
      </div>

      <div class="relative group" v-reveal="{ delay: 200, type: 'scale' }">
        <NatureImage :url="images.hero.url" :alt="hero.photoCaption || images.hero.alt" variant="dark" imgClass="img-zoom" />
        <blockquote v-if="hero.quote" class="mt-6 border-l-2 border-gold pl-5 font-display italic text-lg md:text-xl text-paper/90">
          „{{ hero.quote }}"
          <cite v-if="hero.quoteAuthor" class="block mt-3 text-sm text-paper/60 not-italic font-body">— {{ hero.quoteAuthor }}</cite>
        </blockquote>
      </div>
    </div>
  </section>
</template>
