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
import PrivacyPolicyPage from './components/PrivacyPolicyPage.vue'

const isPrivacyPage = window.location.pathname.replace(/\/+$/, '') === '/adatkezeles'
</script>

<template>
  <TheNav />
  <main class="font-body">
    <PrivacyPolicyPage v-if="isPrivacyPage" />
    <template v-else>
      <HeroSection />
      <AudienceSection />
      <ProcessSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <FaqSection />
    </template>
  </main>
  <TheFooter />
</template>
