<script setup>
import { ref } from 'vue'
import { faq } from '../content.js'

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="gyik" class="relative pt-12 pb-8 md:pt-16 md:pb-10">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="font-display text-3xl md:text-4xl text-ink mb-10" v-reveal>{{ faq.title }}</h2>

      <div class="divide-y divide-ink/10 border-t border-b border-ink/10">
        <div v-for="(item, i) in faq.items" :key="i" v-reveal="i * 60">
          <button
            class="w-full flex items-center justify-between gap-4 py-5 text-left group"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span
              class="font-display text-base md:text-lg transition-colors duration-200"
              :class="openIndex === i ? 'text-gold-deep' : 'text-ink group-hover:text-ink/70'"
              >{{ item.question }}</span
            >
            <span
              class="shrink-0 w-7 h-7 rounded-full border border-ink/15 flex items-center justify-center text-ink/60 transition-all duration-300 group-hover:border-gold group-hover:text-gold-deep"
              :class="{ 'rotate-45 border-gold text-gold-deep': openIndex === i }"
            >
              <i class="fa-solid fa-plus text-xs" />
            </span>
          </button>
          <div
            class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
            :style="{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <p
                class="text-body/80 leading-relaxed pb-5 pr-10 transition-all duration-300"
                :class="openIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'"
              >
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
