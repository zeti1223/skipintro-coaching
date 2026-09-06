<script setup>
import { site, footer } from '../content.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-paper/60 pt-16 pb-8">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-paper/10" v-reveal>
        <div>
          <p class="font-display text-xl text-paper mb-1">
            <span class="text-[1.125em]">S</span>kip Intro<span class="text-gold">.</span>
          </p>
          <p class="text-sm">{{ site.contactEmail }}</p>
        </div>

        <div class="flex items-center gap-3">
          <a
            :href="site.facebookUrl"
            aria-label="Facebook"
            class="w-9 h-9 rounded-full bg-paper/10 flex items-center justify-center hover:bg-paper/20 hover:scale-110 active:scale-95 transition text-paper"
          >
            <i class="fa-brands fa-facebook-f text-sm" />
          </a>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/40">
        <p>&copy; {{ year }} {{ site.brandName }} {{ site.brandSuffix }}. Minden jog fenntartva.</p>
        <a :href="site.privacyPolicyUrl" class="underline underline-offset-2 hover:text-paper transition-colors">Adatkezelési tájékoztató</a>
      </div>
    </div>

    <div class="mt-8 pt-6 border-t border-paper/5">
      <p class="text-center text-xs text-paper/30 mb-2">
        {{ footer.credits }}
      </p>
      <p class="text-center text-xs text-paper/30 mb-2">
        {{ footer.copyright }}
      </p>
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
