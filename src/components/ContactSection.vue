<script setup>
import { reactive, ref } from 'vue'
import { contact, site } from '../content.js'
import { buildOwnerEmail } from '../email-templates/ownerNotification.js'
import { buildClientEmail } from '../email-templates/clientConfirmation.js'

const form = reactive({
  name: '',
  email: '',
  message: '',
  consent: false,
})

const status = ref('idle')

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

function sendEmail(templateId, templateParams) {
  return fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: site.emailjsServiceId,
      template_id: templateId,
      user_id: site.emailjsPublicKey,
      template_params: templateParams,
    }),
  })
}

async function submit() {
  status.value = 'sending'
  try {
    const data = {
      name: form.name,
      email: form.email,
      message: form.message || '(nincs kísérő üzenet)',
    }

    const ownerEmail = buildOwnerEmail(data)
    const clientEmail = buildClientEmail(data)

    const [ownerRes, clientRes] = await Promise.all([
      sendEmail(site.emailjsOwnerTemplateId, {
        subject: ownerEmail.subject,
        message: ownerEmail.message,
      }),
      sendEmail(site.emailjsClientTemplateId, {
        to_email: form.email,
        subject: clientEmail.subject,
        message: clientEmail.message,
      }),
    ])

    if (ownerRes.ok && clientRes.ok) {
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
    <h2 class="font-display text-3xl md:text-4xl text-ink mb-4">{{ contact.title }}</h2>
    <p class="text-body/80 leading-relaxed mb-10 max-w-xl">{{ contact.intro }}</p>

    <form
      id="booking-form"
      class="rounded-card bg-gold/25 border border-gold/50 p-8 md:p-10 shadow-lg shadow-gold/10"
      @submit.prevent="submit"
    >
      <div class="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label for="name" class="block text-sm font-medium text-ink/70 mb-1.5">Név <span class="text-rose-700">*</span></label>
          <input
            id="name"
            v-model="form.name"
            name="name"
            type="text"
            required
            class="w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-ink/70 mb-1.5">E-mail cím <span class="text-rose-700">*</span></label>
          <input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            required
            class="w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
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
          class="w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
        />
      </div>

      <label class="flex items-start gap-2.5 mb-6 text-sm text-ink/70">
        <input
          v-model="form.consent"
          type="checkbox"
          required
          class="mt-0.5 rounded border-ink/30 text-gold-deep focus:ring-gold"
        />
        <span>
          Elfogadom az
          <a :href="site.privacyPolicyUrl" class="underline decoration-gold underline-offset-2">adatkezelési tájékoztatót</a>
          és hozzájárulok adataim feldolgozásához.<span class="text-rose-700">*</span>
        </span>
      </label>

      <button
        type="submit"
        :disabled="status === 'sending'"
        class="inline-flex items-center gap-2 bg-gold text-ink font-semibold px-6 py-3 rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-gold/20 transition disabled:opacity-50 cursor-pointer"
      >
        {{ status === 'sending' ? 'Küldés…' : 'Elküldöm' }}
      </button>

      <p v-if="status === 'success'" class="mt-4 text-sm text-gold-deep">{{ contact.successMessage }}</p>
      <p v-if="status === 'error'" class="mt-4 text-sm text-gold-deep">{{ contact.errorMessage }}</p>
    </form>
  </section>
</template>
