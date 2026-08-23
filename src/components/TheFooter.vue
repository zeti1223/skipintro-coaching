<script setup>
import { site } from '../content.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-paper/60 pt-16 pb-8">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-paper/10">
        <div>
          <p class="font-display text-xl text-paper mb-1">
            {{ site.brandName }}<span class="text-gold">.</span>
          </p>
          <p class="text-sm">{{ site.contactEmail }}</p>
        </div>

        <div class="flex items-center gap-3">
          <a
            :href="site.facebookUrl"
            aria-label="Facebook"
            class="w-9 h-9 rounded-full bg-paper/10 flex items-center justify-center hover:bg-paper/20 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/40">
        <p>&copy; {{ year }} {{ site.brandName }} {{ site.brandSuffix }}. Minden jog fenntartva.</p>
        <a :href="site.privacyPolicyUrl" class="underline underline-offset-2">Adatkezelési tájékoztató</a>
      </div>
    </div>

    <div class="mt-8 pt-6 border-t border-paper/5">
      <p class="text-center text-xs text-paper/30">
        A weboldalt a
        <a
          :href="site.creatorUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="underline underline-offset-2 hover:text-paper/50 transition-colors"
          >{{ site.creatorLabel }}</a
        >
        készítette.
      </p>
    </div>
  </footer>
</template>
