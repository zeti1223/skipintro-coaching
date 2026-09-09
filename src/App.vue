<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import NotAloneSection from './components/NotAloneSection.vue'
import SupportSection from './components/SupportSection.vue'
import SkipIntroSection from './components/SkipIntroSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import PricingSection from './components/PricingSection.vue'
import AboutSection from './components/AboutSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.vue'

function checkPrivacyPage() {
  return (
    window.location.pathname.replace(/\.html$/, '').replace(/\/+$/, '') === '/adatkezeles'
  )
}

const isPrivacyPage = ref(checkPrivacyPage())

function onPopState() {
  isPrivacyPage.value = checkPrivacyPage()
}

onMounted(() => {
  window.addEventListener('popstate', onPopState)
})

onUnmounted(() => {
  window.removeEventListener('popstate', onPopState)
})
</script>

<template>
  <TheNav />
  <main class="font-body">
    <PrivacyPolicyPage v-if="isPrivacyPage" />
    <template v-else>
      <HeroSection />
      <NotAloneSection />
      <SkipIntroSection />
      <SupportSection />
      <ProcessSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <FaqSection />
    </template>
  </main>
  <TheFooter />
</template>
