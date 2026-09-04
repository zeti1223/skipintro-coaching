<script setup>
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import AudienceSection from './components/AudienceSection.vue'
import SkipIntroSection from './components/SkipIntroSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import PricingSection from './components/PricingSection.vue'
import AboutSection from './components/AboutSection.vue'
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
      <SkipIntroSection />
      <ProcessSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <FaqSection />
    </template>
  </main>
  <TheFooter />
</template>
