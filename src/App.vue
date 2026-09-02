<script setup>
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import AudienceSection from './components/AudienceSection.vue'
import PricingSection from './components/PricingSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import ImageBand from './components/ImageBand.vue'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.vue'
import { images } from './content.js'

const isPrivacyPage = window.location.pathname.replace(/\/+$/, '') === '/adatkezeles'
</script>

<template>
  <TheNav />
  <main class="font-body">
    <PrivacyPolicyPage v-if="isPrivacyPage" />
    <template v-else>
      <HeroSection />
      <AudienceSection />
      <ImageBand :url="images.divider1.url" :alt="images.divider1.alt" aspectRatio="aspect-[3/2] sm:aspect-[21/9] md:aspect-[2/1]"/>
      <ProcessSection />
      <ImageBand :url="images.divider2.url" :alt="images.divider2.alt" :quote="images.divider2.quote"/>
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <ImageBand :url="images.divider3.url" :alt="images.divider3.alt" :quote="images.divider3.quote" :quoteAuthor="images.divider3.quoteAuthor"  />
      <FaqSection />
    </template>
  </main>
  <TheFooter />
</template>
