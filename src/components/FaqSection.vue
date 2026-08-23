<script setup>
import { ref } from 'vue'
import { faq } from '../content.js'
import ChapterMark from './ChapterMark.vue'

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="gyik" class="relative pt-20 pb-10 md:pt-28 md:pb-14">
    <div class="max-w-3xl mx-auto px-6">
      <ChapterMark :time="faq.chapterMark" label="GYIK" />
      <h2 class="font-display text-3xl md:text-4xl text-ink mb-10">{{ faq.title }}</h2>

      <div class="divide-y divide-ink/10 border-t border-b border-ink/10">
        <div v-for="(item, i) in faq.items" :key="i">
          <button
            class="w-full flex items-center justify-between gap-4 py-5 text-left"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span class="font-display text-base md:text-lg text-ink">{{ item.question }}</span>
            <span
              class="shrink-0 w-7 h-7 rounded-full border border-ink/15 flex items-center justify-center text-ink/60 transition-transform duration-200"
              :class="{ 'rotate-45': openIndex === i }"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          <div
            class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
            :style="{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <p class="text-body/80 leading-relaxed pb-5 pr-10">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
