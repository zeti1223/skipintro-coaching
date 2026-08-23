<script setup>
import { reactive, ref } from 'vue'
import { contact, site } from '../content.js'
import ChapterMark from './ChapterMark.vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
  consent: false,
})

const status = ref('idle') // idle | sending | success | error

async function submit() {
  status.value = 'sending'
  try {
    const res = await fetch(site.formspreeEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(document.querySelector('#booking-form')),
    })
    if (res.ok) {
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
      form.consent = false
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="kapcsolat" class="max-w-3xl mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-28">
    <ChapterMark :time="contact.chapterMark" label="Kapcsolat" />
    <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ contact.title }}</h2>
    <p class="text-body/80 leading-relaxed mb-10 max-w-xl">{{ contact.intro }}</p>

    <form
      id="booking-form"
      class="rounded-card bg-ink/[0.03] border border-ink/10 p-6 md:p-9"
      @submit.prevent="submit"
    >
      <div class="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="name" class="block text-sm font-medium text-ink/70 mb-1.5">Név *</label>
          <input
            id="name"
            v-model="form.name"
            name="name"
            type="text"
            required
            class="w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-ink/70 mb-1.5">E-mail cím *</label>
          <input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            required
            class="w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
          />
        </div>
      </div>

      <div class="mb-5">
        <label for="message" class="block text-sm font-medium text-ink/70 mb-1.5">Üzenet (nem kötelező)</label>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          rows="4"
          class="w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-aqua resize-none"
        />
      </div>

      <label class="flex items-start gap-2.5 mb-6 text-sm text-ink/70">
        <input
          v-model="form.consent"
          type="checkbox"
          required
          class="mt-0.5 rounded border-ink/30 text-aqua-deep focus:ring-aqua"
        />
        <span>
          Elfogadom az
          <a :href="site.privacyPolicyUrl" class="underline decoration-gold underline-offset-2">adatkezelési tájékoztatót</a>
          és hozzájárulok adataim feldolgozásához. *
        </span>
      </label>

      <button
        type="submit"
        :disabled="status === 'sending'"
        class="inline-flex items-center gap-2 bg-ink text-paper font-semibold px-6 py-3 rounded-full hover:bg-ink-soft transition-colors disabled:opacity-50"
      >
        {{ status === 'sending' ? 'Küldés…' : 'Elküldöm' }}
      </button>

      <p v-if="status === 'success'" class="mt-4 text-sm text-aqua-deep">{{ contact.successMessage }}</p>
      <p v-if="status === 'error'" class="mt-4 text-sm text-rose-deep">{{ contact.errorMessage }}</p>
    </form>
  </section>
</template>
