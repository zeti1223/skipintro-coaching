<script setup>
import { support } from '../content.js'
</script>

<template>
  <section class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 items-stretch">
        <div v-if="support.sidebarImage" class="rounded-card overflow-hidden border border-aqua/40">
          <img 
            :src="support.sidebarImage.url" 
            :alt="support.sidebarImage.alt"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="rounded-card bg-aqua/25 border border-aqua/40 p-7 md:p-8 flex flex-col">
          <h3 class="font-display text-3xl md:text-4xl text-ink mb-5">{{ support.title }}</h3>
          <ul class="space-y-4 flex-grow">
            <li v-for="(item, i) in support.items" :key="i" class="flex gap-3">
              <span class="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-ink/15 text-ink flex items-center justify-center">
                <i class="fa-solid fa-check text-[10px]" />
              </span>
              <span class="text-sm md:text-[15px] text-body leading-relaxed" v-html="item"></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border border-dashed border-gold/70 bg-gold/15 rounded-card px-6 py-5 text-sm text-ink/70 leading-relaxed" v-html="support.disclaimer"></div>

      <div class="mt-8 text-center">
        <a
          href="#szolgaltatasok"
          class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition"
        >
          Lépj egy szintet előre!
        </a>
      </div>
    </div>
  </section>
</template>
