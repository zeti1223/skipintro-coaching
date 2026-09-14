<script setup>
import { ref } from 'vue'
import { useContentStore } from '../../composables/useContentStore.js'
import RichMarkdownEditor from './RichMarkdownEditor.vue'

const store = useContentStore()
const content = store.content

// Authentication state
const isAuthenticated = ref(store.isAuthenticated())
const passwordInput = ref('')
const authError = ref('')

// Active section tab
const activeTab = ref('hero')

// Status & notifications
const isPublishing = ref(false)
const statusMessage = ref('')
const statusType = ref('info') // 'info' | 'success' | 'error'

// Settings modal
const showSettings = ref(false)
const ghTokenInput = ref(store.getGithubToken())
const ghRepoInput = ref(store.getGithubRepo())
const newPasswordInput = ref('')
const commitMessageInput = ref('')

const tabs = [
  { id: 'hero', name: 'Kezdőlap & Hero', icon: 'fa-solid fa-house' },
  { id: 'skipIntro', name: 'Skip Intro & Célok', icon: 'fa-solid fa-compass' },
  {
    id: 'pricing',
    name: 'Szolgáltatások & Árak',
    icon: 'fa-solid fa-tags',
    badge: () => content.pricing?.plans?.length,
  },
  {
    id: 'process',
    name: 'Folyamat & Lépések',
    icon: 'fa-solid fa-route',
    badge: () => content.process?.steps?.length,
  },
  { id: 'about', name: 'Rólam (Bemutatkozás)', icon: 'fa-solid fa-user' },
  {
    id: 'faq',
    name: 'Gyakori Kérdések (GYIK)',
    icon: 'fa-solid fa-circle-question',
    badge: () => content.faq?.items?.length,
  },
  { id: 'contact', name: 'Kapcsolat & Lábléc', icon: 'fa-solid fa-address-book' },
  { id: 'privacy', name: 'Adatkezelési tájékoztató', icon: 'fa-solid fa-shield-halved' },
]

function handleLogin() {
  const pin = passwordInput.value.trim()
  if (store.verifyPassword(pin)) {
    store.setAuthenticated(true)
    isAuthenticated.value = true
    authError.value = ''
  } else {
    authError.value = 'Helytelen jelszó!'
  }
}

function handleLogout() {
  store.setAuthenticated(false)
  isAuthenticated.value = false
}

function saveSettings() {
  store.setGithubToken(ghTokenInput.value)
  store.setGithubRepo(ghRepoInput.value)
  if (newPasswordInput.value.trim()) {
    store.setAdminPassword(newPasswordInput.value.trim())
    newPasswordInput.value = ''
  }
  showSettings.value = false
  showMessage('A beállítások és az új jelszó sikeresen mentve lettek!', 'success')
}

function showMessage(msg, type = 'info', duration = 6000) {
  statusMessage.value = msg
  statusType.value = type
  if (duration > 0) {
    setTimeout(() => {
      if (statusMessage.value === msg) {
        statusMessage.value = ''
      }
    }, duration)
  }
}

async function handlePublish() {
  const token = store.getGithubToken()
  if (!token) {
    showSettings.value = true
    showMessage(
      'Kérlek add meg a GitHub Access Tokent a publikáláshoz a Beállítások ablakban!',
      'error',
    )
    return
  }

  isPublishing.value = true
  showMessage('Mentés folyamatban a szerverre... Kérlek várj pár másodpercet!', 'info', 0)

  try {
    const msg = commitMessageInput.value || 'Weboldal szöveg frissítése a szerkesztőből'
    await store.publishToGithub(msg)
    showMessage(
      'SIKERES PUBLIKÁLÁS! A módosítások bekerültek a rendszerbe. A weboldal ~1-2 percen belül automatikusan frissül az éles címen.',
      'success',
      10000,
    )
    commitMessageInput.value = ''
  } catch (err) {
    console.error('Publish error:', err)
    showMessage('Hiba történt a publikálás során: ' + (err.message || err), 'error', 10000)
  } finally {
    isPublishing.value = false
  }
}

function handleReset() {
  if (
    confirm(
      'Biztosan visszaállítod a szövegeket az eredeti alapértelmezett állapotra? A módosításaid elvesznek!',
    )
  ) {
    store.resetToDefault()
    showMessage('Minden szöveg visszaállítva az eredeti állapotra.', 'info')
  }
}

function handleExport() {
  store.exportJson()
  showMessage('Biztonsági mentés fájl sikeresen letöltve a gépedre!', 'success')
}

function triggerImportFile() {
  const input = document.getElementById('json-import-input')
  if (input) input.click()
}

function handleFileImport(e) {
  const file = e.target.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (event) => {
    const result = store.importJson(event.target.result)
    if (result.success) {
      showMessage('Tartalom sikeresen betöltve a mentésfájlból!', 'success')
    } else {
      showMessage('Hiba a fájl betöltésekor: ' + result.error, 'error')
    }
  }
  reader.readAsText(file)
}

// Array item helpers with move up/down
function addArrayItem(arr, template = '') {
  arr.push(template)
}

function removeArrayItem(arr, index) {
  if (confirm('Biztosan törlöd ezt az elemet a listából?')) {
    arr.splice(index, 1)
  }
}

function moveItem(arr, index, direction) {
  const newIndex = index + direction
  if (newIndex < 0 || newIndex >= arr.length) return
  const temp = arr[index]
  arr[index] = arr[newIndex]
  arr[newIndex] = temp
}

function addFaqItem() {
  content.faq.items.push({
    question: 'Új kérdés címe',
    answer: 'Ide írd a választ...',
  })
}

function addPricingPlan() {
  content.pricing.plans.push({
    name: 'Új coaching csomag',
    duration: '60 perc',
    price: '20 000 Ft',
    perSession: true,
    description: '',
    featured: false,
  })
}
</script>

<template>
  <div
    class="min-h-screen bg-slate-100/90 text-slate-800 font-body antialiased flex flex-col selection:bg-gold selection:text-ink"
  >
    <!-- AUTHENTICATION SCREEN -->
    <div
      v-if="!isAuthenticated"
      class="flex-1 flex items-center justify-center p-6 bg-radial from-slate-100 to-slate-200"
    >
      <div
        class="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-8 text-center relative overflow-hidden"
      >
        <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-ink via-aqua to-gold"></div>

        <div
          class="w-16 h-16 bg-ink text-gold rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-ink/20"
        >
          <i class="fa-solid fa-forward-step text-2xl"></i>
        </div>

        <h1 class="text-2xl font-display font-bold text-ink mb-1">Skip Intro Vezérlőpult</h1>
        <p class="text-slate-500 text-xs mb-8">Kérlek add meg a jelszót a szerkesztő eléréséhez</p>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400"
            >
              <i class="fa-solid fa-key text-sm"></i>
            </div>
            <input
              type="password"
              v-model="passwordInput"
              placeholder="Belépési jelszó vagy PIN..."
              class="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-300 focus:outline-hidden focus:ring-4 focus:ring-ink/10 focus:border-ink text-base transition-all"
              autofocus
            />
          </div>

          <div
            v-if="authError"
            class="text-rose-600 text-xs font-medium flex items-center justify-center gap-1.5 pt-1"
          >
            <i class="fa-solid fa-circle-exclamation"></i>
            <span>{{ authError }}</span>
          </div>

          <button
            type="submit"
            class="w-full bg-ink hover:bg-inkSoft text-paper font-semibold py-3.5 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Belépés a Szerkesztőbe</span>
            <i class="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </form>

        <div
          class="mt-8 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400"
        >
          <i class="fa-solid fa-shield-halved text-slate-300"></i>
          <span>Védett adminisztrációs felület</span>
        </div>
      </div>
    </div>

    <!-- MAIN ADMIN INTERFACE -->
    <template v-else>
      <!-- Top Navigation Header -->
      <header
        class="bg-ink text-paper sticky top-0 z-50 shadow-md border-b border-white/10 backdrop-blur-md"
      >
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3"
        >
          <!-- Logo & Status -->
          <div class="flex items-center gap-4">
            <a href="/" class="flex items-center gap-2.5 group">
              <div
                class="w-9 h-9 bg-gold text-ink rounded-xl flex items-center justify-center font-display font-bold shadow-sm group-hover:scale-105 transition-transform"
              >
                <i class="fa-solid fa-forward-step text-sm"></i>
              </div>
              <div>
                <span class="font-display font-bold text-base text-white tracking-tight"
                  >Skip Intro</span
                >
                <span
                  class="text-gold text-xs block font-mono uppercase tracking-wider font-semibold"
                  >Tartalomkezelő</span
                >
              </div>
            </a>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 sm:gap-3 flex-wrap">
            <!-- View Site -->
            <a
              href="/"
              target="_blank"
              class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-paper text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
              title="Weboldal megtekintése új lapon"
            >
              <i class="fa-solid fa-arrow-up-right-from-square text-xs text-aqua"></i>
              <span class="hidden sm:inline">Oldal megtekintése</span>
            </a>

            <!-- Settings -->
            <button
              type="button"
              @click="showSettings = true"
              class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-paper text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
              title="GitHub és publikálási beállítások"
            >
              <i class="fa-solid fa-gear text-xs text-gold"></i>
              <span class="hidden sm:inline">Beállítások</span>
            </button>

            <!-- Publish Button -->
            <button
              type="button"
              @click="handlePublish"
              :disabled="isPublishing"
              class="px-5 py-2 rounded-xl bg-gradient-to-r from-gold to-goldSoft text-ink font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i v-if="isPublishing" class="fa-solid fa-circle-notch fa-spin text-sm"></i>
              <i v-else class="fa-solid fa-cloud-arrow-up text-sm"></i>
              <span>{{ isPublishing ? 'Mentés folyamatban...' : 'Mentés & Publikálás' }}</span>
            </button>

            <!-- Logout -->
            <button
              type="button"
              @click="handleLogout"
              class="w-9 h-9 rounded-xl hover:bg-white/10 text-paper/70 hover:text-white transition-colors flex items-center justify-center text-sm cursor-pointer"
              title="Kijelentkezés a szerkesztőből"
            >
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </header>

      <!-- Status Notification Banner -->
      <Transition name="fade">
        <div
          v-if="statusMessage"
          class="sticky top-15 z-40 px-4 py-3 transition shadow-lg flex items-center justify-between"
          :class="{
            'bg-emerald-700 text-white': statusType === 'success',
            'bg-rose-700 text-white': statusType === 'error',
            'bg-sky-800 text-white': statusType === 'info',
          }"
        >
          <div class="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
            <div class="text-xs sm:text-sm font-medium flex items-center gap-2.5">
              <i
                v-if="statusType === 'success'"
                class="fa-solid fa-circle-check text-base text-emerald-200"
              ></i>
              <i
                v-else-if="statusType === 'error'"
                class="fa-solid fa-triangle-exclamation text-base text-rose-200"
              ></i>
              <i v-else class="fa-solid fa-circle-info text-base text-sky-200"></i>
              <span>{{ statusMessage }}</span>
            </div>
            <button
              @click="statusMessage = ''"
              class="text-white/80 hover:text-white p-1 cursor-pointer"
            >
              <i class="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>
        </div>
      </Transition>

      <!-- Main Layout -->
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        <!-- Sidebar Navigation -->
        <aside class="lg:col-span-3 space-y-4">
          <!-- Section Nav -->
          <div class="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-3 space-y-1">
            <div
              class="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2 flex items-center gap-2"
            >
              <i class="fa-solid fa-layer-group text-[10px]"></i>
              <span>Szerkesztendő részek</span>
            </div>

            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-medium transition-all cursor-pointer text-left',
                activeTab === tab.id
                  ? 'bg-ink text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
              ]"
            >
              <div class="flex items-center gap-3">
                <i
                  :class="[
                    tab.icon,
                    'text-xs w-4 text-center',
                    activeTab === tab.id ? 'text-gold' : 'text-slate-400',
                  ]"
                ></i>
                <span>{{ tab.name }}</span>
              </div>
              <span
                v-if="tab.badge && tab.badge() !== undefined"
                :class="[
                  'text-[10px] px-2 py-0.5 rounded-full font-mono font-bold',
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600',
                ]"
              >
                {{ tab.badge() }}
              </span>
            </button>
          </div>

          <!-- Quick Tools Box -->
          <div class="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-4 space-y-2.5">
            <div
              class="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-2"
            >
              <i class="fa-solid fa-toolbox text-[10px]"></i>
              <span>Biztonsági műveletek</span>
            </div>

            <button
              @click="handleExport"
              class="w-full py-2.5 px-3 text-xs font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <i class="fa-solid fa-download text-ink"></i>
              <span>Biztonsági mentés (JSON)</span>
            </button>

            <button
              @click="triggerImportFile"
              class="w-full py-2.5 px-3 text-xs font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <i class="fa-solid fa-upload text-ink"></i>
              <span>Mentés visszatöltése</span>
            </button>

            <input
              id="json-import-input"
              type="file"
              accept=".json"
              @change="handleFileImport"
              class="hidden"
            />

            <button
              @click="handleReset"
              class="w-full py-2 px-3 text-xs font-medium rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200/80 flex items-center justify-center gap-2 transition-all cursor-pointer mt-1"
            >
              <i class="fa-solid fa-rotate-left"></i>
              <span>Alaphelyzet visszaállítása</span>
            </button>
          </div>

          <!-- Help Info Card -->
          <div
            class="bg-gradient-to-br from-paper to-paperDark/60 rounded-3xl border border-aqua/30 p-4 text-xs text-ink space-y-2"
          >
            <div class="font-bold flex items-center gap-2">
              <i class="fa-solid fa-circle-info text-aquaDeep"></i>
              <span>Kényelmes munka:</span>
            </div>
            <p class="leading-relaxed text-ink/80 text-[11px]">
              A beírt változtatások azonnal elmentődnek a böngésződben. Ha készen vagy a
              szerkesztéssel, kattints a jobb felső <strong>Mentés & Publikálás</strong> gombra!
            </p>
          </div>
        </aside>

        <!-- Main Workspace -->
        <main
          class="lg:col-span-9 bg-white rounded-3xl shadow-xs border border-slate-200/90 p-6 md:p-8 space-y-8"
        >
          <!-- TAB 1: HERO & KEZDŐLAP -->
          <div v-if="activeTab === 'hero'" class="space-y-6">
            <div class="border-b border-slate-100 pb-4">
              <h2 class="text-xl font-display font-bold text-ink flex items-center gap-2.5">
                <i class="fa-solid fa-house text-sm text-gold"></i>
                <span>Kezdőlap & Hero szekció</span>
              </h2>
              <p class="text-slate-500 text-xs mt-1">
                A honlap legfelső, kiemelt bemutató része és szlogenjei.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Név</label
                >
                <input
                  type="text"
                  v-model="content.hero.name"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 focus:border-ink text-sm"
                />
              </div>
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Titulus / Alcím</label
                >
                <input
                  type="text"
                  v-model="content.hero.subtitle"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 focus:border-ink text-sm"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >Kiemelt üdvözlés</label
              >
              <input
                type="text"
                v-model="content.hero.greeting"
                class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 focus:border-ink text-sm font-semibold"
              />
            </div>

            <div>
              <RichMarkdownEditor
                v-model="content.hero.paragraph"
                label="Fő bemutató szöveg (Hero bekezdés)"
                help-text="Használd a fejlécben található eszköztárat a formázáshoz. Válts 'Osztott' nézetre a gépelés közbeni azonnali előnézethez!"
                :rows="8"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Fő gomb felirata</label
                >
                <input
                  type="text"
                  v-model="content.hero.primaryCta.label"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 text-sm"
                />
              </div>
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Másodlagos gomb felirata</label
                >
                <input
                  type="text"
                  v-model="content.hero.secondaryCta.label"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 text-sm"
                />
              </div>
            </div>

            <div class="pt-4 border-t border-slate-100 space-y-4">
              <h3
                class="text-sm font-bold text-ink uppercase tracking-wider flex items-center gap-2"
              >
                <i class="fa-solid fa-quote-left text-gold text-xs"></i>
                <span>Idézet doboz</span>
              </h3>
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1">Idézet szövege</label>
                <textarea
                  v-model="content.hero.quote"
                  rows="2"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 text-sm"
                ></textarea>
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1">Idézet szerzője</label>
                <input
                  type="text"
                  v-model="content.hero.quoteAuthor"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 text-sm"
                />
              </div>
            </div>
          </div>

          <!-- TAB 2: SKIP INTRO & CÉLOK -->
          <div v-if="activeTab === 'skipIntro'" class="space-y-8">
            <div class="border-b border-slate-100 pb-4">
              <h2 class="text-xl font-display font-bold text-ink flex items-center gap-2.5">
                <i class="fa-solid fa-compass text-sm text-gold"></i>
                <span>Skip Intro módszer & Célok</span>
              </h2>
              <p class="text-slate-500 text-xs mt-1">
                „Nem vagy egyedül”, a módszer bemutatása és az elérhető célok.
              </p>
            </div>

            <!-- Not alone -->
            <div class="space-y-4 pb-6 border-b border-slate-100">
              <h3
                class="text-sm font-bold text-ink uppercase tracking-wider flex items-center gap-2"
              >
                <i class="fa-solid fa-hand-holding-heart text-aqua text-xs"></i>
                <span>1. „Nem vagy egyedül” blokk</span>
              </h3>
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1">Cím</label>
                <input
                  type="text"
                  v-model="content.notAlone.title"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 text-sm"
                />
              </div>
              <div>
                <RichMarkdownEditor
                  v-model="content.notAlone.intro"
                  label="Szöveges üzenet"
                  :rows="6"
                />
              </div>
            </div>

            <!-- Skip intro section -->
            <div class="space-y-4 pb-6 border-b border-slate-100">
              <h3
                class="text-sm font-bold text-ink uppercase tracking-wider flex items-center gap-2"
              >
                <i class="fa-solid fa-forward-step text-gold text-xs"></i>
                <span>2. Miért Skip Intro?</span>
              </h3>
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1">Cím</label>
                <input
                  type="text"
                  v-model="content.skipIntro.title"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 text-sm"
                />
              </div>
              <div>
                <RichMarkdownEditor v-model="content.skipIntro.intro" label="Bevezetés" :rows="4" />
              </div>
              <div>
                <RichMarkdownEditor
                  v-model="content.skipIntro.conclusion"
                  label="Összegzés és lényeg"
                  :rows="4"
                />
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1">Idézet mondat</label>
                <input
                  type="text"
                  v-model="content.skipIntro.quote"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-4 focus:ring-ink/5 text-sm"
                />
              </div>
            </div>

            <!-- Support / Amit elérhetünk -->
            <div class="space-y-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3
                    class="text-sm font-bold text-ink uppercase tracking-wider flex items-center gap-2"
                  >
                    <i class="fa-solid fa-bullseye text-rose-500 text-xs"></i>
                    <span>3. Amit együtt elérhetünk</span>
                  </h3>
                  <p class="text-xs text-slate-500">Miben tudsz segíteni a hozzád fordulóknak?</p>
                </div>
                <button
                  type="button"
                  @click="addArrayItem(content.support.items, 'Új elérhető cél leírása')"
                  class="px-3.5 py-2 bg-ink text-gold rounded-xl text-xs font-semibold hover:bg-inkSoft transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <i class="fa-solid fa-plus text-xs"></i>
                  <span>Új cél pont hozzáadása</span>
                </button>
              </div>

              <div class="space-y-3">
                <div
                  v-for="(item, idx) in content.support.items"
                  :key="idx"
                  class="p-4 bg-slate-50/70 rounded-2xl border border-slate-200/90 space-y-2 transition-all hover:border-slate-300"
                >
                  <div
                    class="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-2"
                  >
                    <div class="flex items-center gap-2">
                      <span
                        class="w-6 h-6 rounded-lg bg-ink text-gold font-mono font-bold text-xs flex items-center justify-center"
                      >
                        {{ idx + 1 }}
                      </span>
                      <span class="text-xs font-semibold text-slate-700">Cél pont</span>
                    </div>

                    <div class="flex items-center gap-1">
                      <button
                        type="button"
                        @click="moveItem(content.support.items, idx, -1)"
                        :disabled="idx === 0"
                        class="w-7 h-7 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-200/60 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xs"
                        title="Mozgatás feljebb"
                      >
                        <i class="fa-solid fa-arrow-up"></i>
                      </button>
                      <button
                        type="button"
                        @click="moveItem(content.support.items, idx, 1)"
                        :disabled="idx === content.support.items.length - 1"
                        class="w-7 h-7 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-200/60 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xs"
                        title="Mozgatás lejjebb"
                      >
                        <i class="fa-solid fa-arrow-down"></i>
                      </button>
                      <button
                        type="button"
                        @click="removeArrayItem(content.support.items, idx)"
                        class="w-7 h-7 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 flex items-center justify-center text-xs cursor-pointer ml-1"
                        title="Pont törlése"
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>

                  <RichMarkdownEditor
                    v-model="content.support.items[idx]"
                    :rows="2"
                    placeholder="Pont leírása..."
                  />
                </div>
              </div>

              <div class="pt-4 border-t border-slate-100">
                <RichMarkdownEditor
                  v-model="content.support.disclaimer"
                  label="Ami kizáró ok (Egészségügyi és szakmai nyilatkozat)"
                  :rows="3"
                />
              </div>
            </div>
          </div>

          <!-- TAB 3: SZOLGÁLTATÁSOK ÉS ÁRAK -->
          <div v-if="activeTab === 'pricing'" class="space-y-6">
            <div
              class="flex items-center justify-between flex-wrap gap-3 border-b border-slate-100 pb-4"
            >
              <div>
                <h2 class="text-xl font-display font-bold text-ink flex items-center gap-2.5">
                  <i class="fa-solid fa-tags text-sm text-gold"></i>
                  <span>Szolgáltatások és Árak</span>
                </h2>
                <p class="text-slate-500 text-xs mt-1">
                  A csomagok, díjszabások és az árak feletti tájékoztató szöveg.
                </p>
              </div>
              <button
                type="button"
                @click="addPricingPlan"
                class="px-4 py-2 bg-ink text-gold rounded-xl text-xs font-bold hover:bg-inkSoft transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <i class="fa-solid fa-plus text-xs"></i>
                <span>Új csomag hozzáadása</span>
              </button>
            </div>

            <div>
              <RichMarkdownEditor
                v-model="content.pricing.intro"
                label="Árak feletti tájékoztató szöveg (Fizetési módok, időpontok, helyszín)"
                :rows="4"
              />
            </div>

            <div class="space-y-4">
              <h3
                class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2"
              >
                <i class="fa-solid fa-receipt text-xs text-slate-400"></i>
                <span>Csomagok listája ({{ content.pricing.plans.length }} db)</span>
              </h3>

              <div
                v-for="(plan, idx) in content.pricing.plans"
                :key="idx"
                class="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/90 space-y-4 transition-all hover:border-slate-300"
              >
                <div class="flex items-center justify-between border-b border-slate-200/60 pb-3">
                  <div class="flex items-center gap-2.5">
                    <span
                      class="w-6 h-6 rounded-lg bg-ink text-gold font-mono font-bold text-xs flex items-center justify-center"
                    >
                      #{{ idx + 1 }}
                    </span>
                    <span class="text-sm font-bold text-slate-800">{{
                      plan.name || 'Névtelen csomag'
                    }}</span>
                    <span
                      v-if="plan.featured"
                      class="px-2 py-0.5 rounded-md bg-gold/30 text-ink text-[10px] font-bold uppercase tracking-wider border border-gold/40"
                    >
                      Kiemelt csomag
                    </span>
                  </div>

                  <div class="flex items-center gap-1">
                    <button
                      type="button"
                      @click="moveItem(content.pricing.plans, idx, -1)"
                      :disabled="idx === 0"
                      class="w-7 h-7 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-200/60 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xs"
                      title="Mozgatás feljebb"
                    >
                      <i class="fa-solid fa-arrow-up"></i>
                    </button>
                    <button
                      type="button"
                      @click="moveItem(content.pricing.plans, idx, 1)"
                      :disabled="idx === content.pricing.plans.length - 1"
                      class="w-7 h-7 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-200/60 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xs"
                      title="Mozgatás lejjebb"
                    >
                      <i class="fa-solid fa-arrow-down"></i>
                    </button>
                    <button
                      type="button"
                      @click="removeArrayItem(content.pricing.plans, idx)"
                      class="w-7 h-7 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 flex items-center justify-center text-xs cursor-pointer ml-1"
                      title="Csomag törlése"
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1"
                      >Csomag megnevezése</label
                    >
                    <input
                      type="text"
                      v-model="plan.name"
                      class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                    />
                  </div>
                  <div>
                    <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1"
                      >Időtartam</label
                    >
                    <input
                      type="text"
                      v-model="plan.duration"
                      placeholder="pl. 60 perc"
                      class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                    />
                  </div>
                  <div>
                    <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1"
                      >Ár</label
                    >
                    <input
                      type="text"
                      v-model="plan.price"
                      placeholder="pl. 19 000 Ft"
                      class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold text-ink focus:ring-2 focus:ring-ink"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1"
                      >Helyszín / Egyéb megjegyzés</label
                    >
                    <input
                      type="text"
                      v-model="plan.description"
                      placeholder="pl. Helyszín: Érd"
                      class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                    />
                  </div>
                  <div class="flex items-center gap-4 pt-5">
                    <label
                      class="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        v-model="plan.featured"
                        class="rounded text-ink w-4 h-4 cursor-pointer"
                      />
                      <span>Kiemelt csomagként jelenjen meg</span>
                    </label>
                    <label
                      class="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        v-model="plan.perSession"
                        class="rounded text-ink w-4 h-4 cursor-pointer"
                      />
                      <span>„/alkalom” felirat</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 4: FOLYAMAT & LÉPÉSEK -->
          <div v-if="activeTab === 'process'" class="space-y-6">
            <div class="border-b border-slate-100 pb-4">
              <h2 class="text-xl font-display font-bold text-ink flex items-center gap-2.5">
                <i class="fa-solid fa-route text-sm text-gold"></i>
                <span>Folyamat & Lépések</span>
              </h2>
              <p class="text-slate-500 text-xs mt-1">
                „Erre számíthatsz” alapelvek és a célok felé vezető lépések.
              </p>
            </div>

            <!-- Items -->
            <div class="space-y-4 pb-6 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <h3
                  class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2"
                >
                  <i class="fa-solid fa-handshake text-xs text-slate-400"></i>
                  <span>„Erre számíthatsz” alapelvek</span>
                </h3>
                <button
                  type="button"
                  @click="addArrayItem(content.process.items, 'Új alapelv')"
                  class="px-3 py-1.5 bg-ink text-gold rounded-xl text-xs font-semibold hover:bg-inkSoft transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <i class="fa-solid fa-plus text-[10px]"></i>
                  <span>Új elv</span>
                </button>
              </div>

              <div
                v-for="(item, idx) in content.process.items"
                :key="idx"
                class="flex items-center gap-2"
              >
                <span
                  class="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 text-xs font-mono font-bold flex items-center justify-center shrink-0"
                >
                  {{ idx + 1 }}
                </span>
                <input
                  type="text"
                  v-model="content.process.items[idx]"
                  class="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                />
                <button
                  type="button"
                  @click="removeArrayItem(content.process.items, idx)"
                  class="w-8 h-8 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 flex items-center justify-center text-xs cursor-pointer shrink-0"
                  title="Törlés"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>

            <!-- Steps -->
            <div class="space-y-4">
              <h3
                class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2"
              >
                <i class="fa-solid fa-shoe-prints text-xs text-slate-400"></i>
                <span>A coaching folyamat lépései</span>
              </h3>

              <div
                v-for="(step, idx) in content.process.steps"
                :key="idx"
                class="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/90 space-y-3"
              >
                <div class="flex items-center gap-2.5">
                  <span
                    class="w-7 h-7 rounded-xl bg-ink text-gold text-xs flex items-center justify-center font-bold"
                  >
                    {{ idx + 1 }}
                  </span>
                  <input
                    type="text"
                    v-model="step.title"
                    placeholder="Lépés címe"
                    class="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold text-slate-800"
                  />
                </div>
                <RichMarkdownEditor
                  v-model="step.description"
                  label="Lépés részletes leírása"
                  :rows="3"
                />
              </div>
            </div>
          </div>

          <!-- TAB 5: RÓLAM -->
          <div v-if="activeTab === 'about'" class="space-y-6">
            <div class="border-b border-slate-100 pb-4">
              <h2 class="text-xl font-display font-bold text-ink flex items-center gap-2.5">
                <i class="fa-solid fa-user text-sm text-gold"></i>
                <span>Rólam (Bemutatkozás)</span>
              </h2>
              <p class="text-slate-500 text-xs mt-1">
                Bemutatkozó gondolatok, élettapasztalat és szakmai képesítések.
              </p>
            </div>

            <!-- Paragraphs -->
            <div class="space-y-4 pb-6 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <h3
                  class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2"
                >
                  <i class="fa-solid fa-paragraph text-xs text-slate-400"></i>
                  <span>Bemutatkozó bekezdések</span>
                </h3>
                <button
                  type="button"
                  @click="addArrayItem(content.about.paragraphs, 'Új bekezdés szövege...')"
                  class="px-3.5 py-2 bg-ink text-gold rounded-xl text-xs font-semibold hover:bg-inkSoft transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <i class="fa-solid fa-plus text-xs"></i>
                  <span>Új bekezdés</span>
                </button>
              </div>

              <div
                v-for="(p, idx) in content.about.paragraphs"
                :key="idx"
                class="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 space-y-2 relative"
              >
                <div class="flex items-center justify-between pb-1">
                  <span class="text-xs font-bold text-slate-500 font-mono"
                    >{{ idx + 1 }}. bekezdés</span
                  >
                  <button
                    type="button"
                    @click="removeArrayItem(content.about.paragraphs, idx)"
                    class="text-rose-500 hover:text-rose-700 text-xs font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <i class="fa-solid fa-trash-can text-xs"></i>
                    <span>Törlés</span>
                  </button>
                </div>
                <RichMarkdownEditor v-model="content.about.paragraphs[idx]" :rows="4" />
              </div>
            </div>

            <!-- Credentials -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <h3
                    class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2"
                  >
                    <i class="fa-solid fa-graduation-cap text-xs text-slate-400"></i>
                    <span>Szakmai képesítések listája</span>
                  </h3>
                  <p class="text-xs text-slate-500">Okleveles diplomák, tréningek és képzések</p>
                </div>
                <button
                  type="button"
                  @click="addArrayItem(content.about.credentials, 'Új képesítés megnevezése')"
                  class="px-3.5 py-2 bg-ink text-gold rounded-xl text-xs font-semibold hover:bg-inkSoft transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <i class="fa-solid fa-plus text-xs"></i>
                  <span>Új képesítés</span>
                </button>
              </div>

              <div
                v-for="(c, idx) in content.about.credentials"
                :key="idx"
                class="flex items-center gap-2"
              >
                <span
                  class="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 text-xs font-mono font-bold flex items-center justify-center shrink-0"
                >
                  {{ idx + 1 }}
                </span>
                <input
                  type="text"
                  v-model="content.about.credentials[idx]"
                  class="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                />
                <button
                  type="button"
                  @click="removeArrayItem(content.about.credentials, idx)"
                  class="w-8 h-8 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 flex items-center justify-center text-xs cursor-pointer shrink-0"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- TAB 6: GYIK -->
          <div v-if="activeTab === 'faq'" class="space-y-6">
            <div
              class="flex items-center justify-between flex-wrap gap-3 border-b border-slate-100 pb-4"
            >
              <div>
                <h2 class="text-xl font-display font-bold text-ink flex items-center gap-2.5">
                  <i class="fa-solid fa-circle-question text-sm text-gold"></i>
                  <span>Gyakori Kérdések és Válaszok (GYIK)</span>
                </h2>
                <p class="text-slate-500 text-xs mt-1">
                  Gyakran felmerülő kérdések, foglalási és fizetési tudnivalók.
                </p>
              </div>
              <button
                type="button"
                @click="addFaqItem"
                class="px-4 py-2 bg-ink text-gold rounded-xl text-xs sm:text-sm font-bold hover:bg-inkSoft transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <i class="fa-solid fa-plus text-xs"></i>
                <span>Új kérdés hozzáadása</span>
              </button>
            </div>

            <div class="space-y-4">
              <div
                v-for="(item, idx) in content.faq.items"
                :key="idx"
                class="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/90 space-y-3 transition-all hover:border-slate-300"
              >
                <div class="flex items-center justify-between border-b border-slate-200/60 pb-2">
                  <div class="flex items-center gap-2">
                    <span
                      class="w-6 h-6 rounded-lg bg-ink text-gold font-mono font-bold text-xs flex items-center justify-center"
                    >
                      #{{ idx + 1 }}
                    </span>
                    <span class="text-xs font-bold text-slate-700 uppercase">Kérdés & Válasz</span>
                  </div>

                  <div class="flex items-center gap-1">
                    <button
                      type="button"
                      @click="moveItem(content.faq.items, idx, -1)"
                      :disabled="idx === 0"
                      class="w-7 h-7 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-200/60 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xs"
                      title="Mozgatás feljebb"
                    >
                      <i class="fa-solid fa-arrow-up"></i>
                    </button>
                    <button
                      type="button"
                      @click="moveItem(content.faq.items, idx, 1)"
                      :disabled="idx === content.faq.items.length - 1"
                      class="w-7 h-7 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-200/60 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xs"
                      title="Mozgatás lejjebb"
                    >
                      <i class="fa-solid fa-arrow-down"></i>
                    </button>
                    <button
                      type="button"
                      @click="removeArrayItem(content.faq.items, idx)"
                      class="w-7 h-7 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 flex items-center justify-center text-xs cursor-pointer ml-1"
                      title="Kérdés törlése"
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1"
                    >Kérdés szövege</label
                  >
                  <input
                    type="text"
                    v-model="item.question"
                    class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 focus:ring-2 focus:ring-ink"
                  />
                </div>

                <div>
                  <RichMarkdownEditor v-model="item.answer" label="Kifejtett válasz" :rows="4" />
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 7: KAPCSOLAT & LÁBLÉC -->
          <div v-if="activeTab === 'contact'" class="space-y-6">
            <div class="border-b border-slate-100 pb-4">
              <h2 class="text-xl font-display font-bold text-ink flex items-center gap-2.5">
                <i class="fa-solid fa-address-book text-sm text-gold"></i>
                <span>Kapcsolat & Lábléc adatok</span>
              </h2>
              <p class="text-slate-500 text-xs mt-1">
                Elérhetőségek, űrlap szövegek és szerzői jogi információk.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Kapcsolattartó Email cím</label
                >
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400"
                  >
                    <i class="fa-solid fa-envelope text-xs"></i>
                  </div>
                  <input
                    type="email"
                    v-model="content.site.contactEmail"
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                  />
                </div>
              </div>

              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Facebook profil / oldal link</label
                >
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400"
                  >
                    <i class="fa-brands fa-facebook text-xs"></i>
                  </div>
                  <input
                    type="text"
                    v-model="content.site.facebookUrl"
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                  />
                </div>
              </div>
            </div>

            <div>
              <RichMarkdownEditor
                v-model="content.contact.intro"
                label="Kapcsolatfelvételi űrlap bevezetője"
                :rows="3"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Sikeres küldés visszajelzése</label
                >
                <input
                  type="text"
                  v-model="content.contact.successMessage"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                />
              </div>
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Hibaüzenet (ha nem sikerülne)</label
                >
                <input
                  type="text"
                  v-model="content.contact.errorMessage"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                />
              </div>
            </div>

            <div class="pt-4 border-t border-slate-100 space-y-4">
              <h3
                class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2"
              >
                <i class="fa-solid fa-copyright text-xs text-slate-400"></i>
                <span>Lábléc szövegek</span>
              </h3>
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1">Fotó kreditek</label>
                <input
                  type="text"
                  v-model="content.footer.credits"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1"
                  >Szerzői jogi nyilatkozat</label
                >
                <textarea
                  v-model="content.footer.copyright"
                  rows="2"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- TAB 8: ADATKEZELÉS -->
          <div v-if="activeTab === 'privacy'" class="space-y-6">
            <div class="border-b border-slate-100 pb-4">
              <h2 class="text-xl font-display font-bold text-ink flex items-center gap-2.5">
                <i class="fa-solid fa-shield-halved text-sm text-gold"></i>
                <span>Adatkezelési tájékoztató</span>
              </h2>
              <p class="text-slate-500 text-xs mt-1">
                A GDPR előírásoknak megfelelő adatkezelési szabályzat.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Oldal címe</label
                >
                <input
                  type="text"
                  v-model="content.privacyPolicy.title"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                />
              </div>
              <div>
                <label
                  class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >Utolsó frissítés dátuma</label
                >
                <input
                  type="text"
                  v-model="content.privacyPolicy.lastUpdated"
                  class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-ink"
                />
              </div>
            </div>

            <div>
              <RichMarkdownEditor
                v-model="content.privacyPolicy.intro"
                label="Bevezetés"
                :rows="3"
              />
            </div>

            <div class="space-y-4">
              <h3
                class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2"
              >
                <i class="fa-solid fa-list-check text-xs text-slate-400"></i>
                <span>Adatkezelési pontok</span>
              </h3>

              <div
                v-for="(sec, idx) in content.privacyPolicy.sections"
                :key="idx"
                class="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/90 space-y-3"
              >
                <div>
                  <label class="block text-[11px] font-bold text-slate-600 uppercase mb-1"
                    >Címsor / Fejléc</label
                  >
                  <input
                    type="text"
                    v-model="sec.heading"
                    class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold text-slate-800"
                  />
                </div>
                <div>
                  <RichMarkdownEditor v-model="sec.body" label="Részletes leírás" :rows="4" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </template>

    <!-- SETTINGS MODAL -->
    <div
      v-if="showSettings"
      class="fixed inset-0 bg-ink/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
    >
      <div
        class="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 space-y-6 border border-slate-200"
      >
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <h3 class="text-lg font-bold text-ink flex items-center gap-2.5">
            <i class="fa-solid fa-gear text-gold"></i>
            <span>Publikálási Beállítások</span>
          </h3>
          <button
            @click="showSettings = false"
            class="text-slate-400 hover:text-slate-700 text-base p-1 cursor-pointer"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div class="space-y-4 text-sm">
          <div
            class="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5"
          >
            <i class="fa-solid fa-info text-aquaDeep mt-0.5"></i>
            <span>
              A [skipintro.hu](https://skipintro.hu) közvetlen frissítéséhez szükséges egy GitHub
              Token. Ezt csak <strong>egyetlen egyszer</strong> kell beállítani ezen a számítógépen.
            </span>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >GitHub Kódtár (Repo)</label
            >
            <input
              type="text"
              v-model="ghRepoInput"
              placeholder="zeti1223/skipintro-coaching"
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-800 focus:ring-2 focus:ring-ink"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >GitHub Personal Access Token (PAT)</label
            >
            <input
              type="password"
              v-model="ghTokenInput"
              placeholder="github_pat_... vagy ghp_..."
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-800 focus:ring-2 focus:ring-ink"
            />
            <span class="text-[11px] text-slate-400 block mt-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-shield-halved text-[10px]"></i>
              <span
                >Szükséges jogosultság: Fine-grained token "Contents: Read and write" joggal.</span
              >
            </span>
          </div>

          <div class="pt-2 border-t border-slate-100">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >Admin Belépési Jelszó Módosítása</label
            >
            <input
              type="password"
              v-model="newPasswordInput"
              placeholder="Új jelszó (hagyd üresen, ha nem változtatod)..."
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-800 focus:ring-2 focus:ring-ink"
            />
            <span class="text-[11px] text-slate-400 block mt-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-key text-[10px]"></i>
              <span>Alapértelmezett jelszó: <code>skipintro</code>.</span>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button
            type="button"
            @click="showSettings = false"
            class="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
          >
            Mégse
          </button>
          <button
            type="button"
            @click="saveSettings"
            class="px-5 py-2.5 rounded-xl bg-ink hover:bg-inkSoft text-gold font-bold text-xs transition-all shadow-sm cursor-pointer flex items-center gap-2"
          >
            <i class="fa-solid fa-check"></i>
            <span>Mentés a böngészőbe</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
