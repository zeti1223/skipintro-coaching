<script setup>
import ScrollProgress from './components/ScrollProgress.vue'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import AudienceSection from './components/AudienceSection.vue'
import PricingSection from './components/PricingSection.vue'
import AboutSection from './components/AboutSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import ImageBand from './components/ImageBand.vue'
import { images } from './content.js'
</script>

<template>
  <ScrollProgress />
  <TheNav />
  <main class="font-body">
    <HeroSection />
    <AudienceSection />
    <ImageBand :url="images.divider1.url" :alt="images.divider1.alt" :quote="images.divider1.quote" />
    <PricingSection />
    <AboutSection />
    <FaqSection />
    <ImageBand :url="images.divider2.url" :alt="images.divider2.alt" :quote="images.divider2.quote" />
    <ContactSection />
  </main>
  <TheFooter />
</template>
