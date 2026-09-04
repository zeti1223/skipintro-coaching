<script setup>
import { audience } from '../content.js'
import { computed } from 'vue'

const parsedItems = computed(() => {
  return audience.for.map(item => {
    const colonIndex = item.indexOf(':')
    if (colonIndex === -1) {
      return { title: item, description: '' }
    }
    return {
      title: item.substring(0, colonIndex).trim(),
      description: item.substring(colonIndex + 1).trim()
    }
  })
})
</script>

<template>
  <section id="kiknek" class="relative py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 items-start mb-14">
        <div>
          <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ audience.title }}</h2>
          <p class="text-body/80 leading-relaxed" v-html="audience.intro"></p>
        </div>

        <div v-if="audience.image" class="rounded-card overflow-hidden border border-aqua/40 mt-10">
          <img 
            :src="audience.image.url" 
            :alt="audience.image.alt"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-stretch">
        <div v-if="audience.sidebarImage" class="rounded-card overflow-hidden border border-aqua/40">
          <img 
            :src="audience.sidebarImage.url" 
            :alt="audience.sidebarImage.alt"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="rounded-card bg-aqua/25 border border-aqua/40 p-7 md:p-8 flex flex-col">
          <h3 class="font-display text-xl text-ink mb-5">{{ audience.forTitle }}</h3>
          <ul class="space-y-4 flex-grow">
            <li v-for="(item, i) in parsedItems" :key="i" class="flex gap-3">
              <span class="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-ink/15 text-ink flex items-center justify-center">
                <i class="fa-solid fa-check text-[10px]" />
              </span>
              <span class="text-sm md:text-[15px] text-body leading-relaxed">
                <span class="font-bold text-ink text-base">{{ item.title }}:</span>
                <span v-if="item.description">{{ item.description }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border border-dashed border-gold/70 bg-gold/15 rounded-card px-6 py-5 text-sm text-ink/70 leading-relaxed">
        {{ audience.disclaimer }}
      </div>

      <div class="mt-8 text-center">
        <a
          href="#szolgaltatasok"
          class="inline-flex items-center gap-2 bg-gradient-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition"
        >
          LÉPJ egy szintet előre!
        </a>
      </div>
    </div>
  </section>
</template>
