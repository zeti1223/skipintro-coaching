<script setup>
import { ref, computed, nextTick } from 'vue'
import { renderMarkdown } from '../../utils/markdown.js'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Írj ide szöveget... (formázáshoz használd az eszköztár gombjait)',
  },
  rows: {
    type: Number,
    default: 5,
  },
  helpText: {
    type: String,
    default: '',
  },
  allowSplit: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const editAreaRef = ref(null)
const splitAreaRef = ref(null)
// Modes: 'edit' | 'split' | 'preview'
const viewMode = ref('edit')

// Undo / Redo History Stack
const undoStack = ref([])
const redoStack = ref([])
let typingTimer = null
let sessionSnapshot = null

function getActiveTextarea() {
  if (viewMode.value === 'split' && splitAreaRef.value) {
    return splitAreaRef.value
  }
  return editAreaRef.value || splitAreaRef.value
}

function pushUndo(val, start = 0, end = 0) {
  // Cap undo stack at 50 entries to preserve memory
  if (undoStack.value.length >= 50) {
    undoStack.value.shift()
  }
  undoStack.value.push({
    value: val,
    start,
    end,
  })
}

function onInput(event) {
  const newVal = event.target.value
  const curStart = event.target.selectionStart || 0
  const curEnd = event.target.selectionEnd || 0

  // If this is the start of a typing burst, record the snapshot of before-typing state
  if (sessionSnapshot === null) {
    sessionSnapshot = {
      value: props.modelValue || '',
      start: curStart,
      end: curEnd,
    }
  }

  emit('update:modelValue', newVal)
  redoStack.value = [] // New typing invalidates redo stack

  // Debounce saving the burst to undoStack
  clearTimeout(typingTimer)
  typingTimer = setTimeout(() => {
    if (sessionSnapshot !== null && sessionSnapshot.value !== newVal) {
      pushUndo(sessionSnapshot.value, sessionSnapshot.start, sessionSnapshot.end)
      sessionSnapshot = null
    }
  }, 400)
}

function flushTypingSession() {
  clearTimeout(typingTimer)
  if (sessionSnapshot !== null && sessionSnapshot.value !== props.modelValue) {
    pushUndo(sessionSnapshot.value, sessionSnapshot.start, sessionSnapshot.end)
    sessionSnapshot = null
  }
}

function undo() {
  flushTypingSession()
  if (undoStack.value.length === 0) return

  const textarea = getActiveTextarea()
  const curStart = textarea ? textarea.selectionStart : 0
  const curEnd = textarea ? textarea.selectionEnd : 0

  // Push current state to redo
  redoStack.value.push({
    value: props.modelValue || '',
    start: curStart,
    end: curEnd,
  })

  // Pop previous state
  const prev = undoStack.value.pop()
  emit('update:modelValue', prev.value)

  nextTick(() => {
    const ta = getActiveTextarea()
    if (ta) {
      ta.focus()
      const pos = Math.min(prev.start, prev.value.length)
      ta.setSelectionRange(pos, Math.min(prev.end, prev.value.length))
    }
  })
}

function redo() {
  flushTypingSession()
  if (redoStack.value.length === 0) return

  const textarea = getActiveTextarea()
  const curStart = textarea ? textarea.selectionStart : 0
  const curEnd = textarea ? textarea.selectionEnd : 0

  // Push current state to undo
  undoStack.value.push({
    value: props.modelValue || '',
    start: curStart,
    end: curEnd,
  })

  // Pop next state
  const next = redoStack.value.pop()
  emit('update:modelValue', next.value)

  nextTick(() => {
    const ta = getActiveTextarea()
    if (ta) {
      ta.focus()
      const pos = Math.min(next.start, next.value.length)
      ta.setSelectionRange(pos, Math.min(next.end, next.value.length))
    }
  })
}

function handleKeydown(e) {
  const isCtrlOrMeta = e.ctrlKey || e.metaKey
  if (isCtrlOrMeta) {
    if (e.key === 'z' || e.key === 'Z') {
      e.preventDefault()
      if (e.shiftKey) {
        redo()
      } else {
        undo()
      }
    } else if (e.key === 'y' || e.key === 'Y') {
      e.preventDefault()
      redo()
    } else if (e.key === 'b' || e.key === 'B') {
      e.preventDefault()
      applyFormat('bold')
    } else if (e.key === 'i' || e.key === 'I') {
      e.preventDefault()
      applyFormat('italic')
    }
  }
}

const previewHtml = computed(() => {
  return renderMarkdown(props.modelValue || '')
})

function applyFormat(type) {
  const textarea = getActiveTextarea()
  if (!textarea) return

  flushTypingSession()

  const start = textarea.selectionStart || 0
  const end = textarea.selectionEnd || 0
  const val = props.modelValue || ''
  const selected = val.substring(start, end)

  // Save to undo stack before format mutation
  pushUndo(val, start, end)
  redoStack.value = []

  let replacement = ''
  let newCursorPos = start

  switch (type) {
    case 'bold':
      replacement = selected ? `**${selected}**` : '**félkövér szöveg**'
      newCursorPos = selected ? end + 4 : start + 2
      break

    case 'italic':
      replacement = selected ? `*${selected}*` : '*dőlt szöveg*'
      newCursorPos = selected ? end + 2 : start + 1
      break

    case 'heading':
      replacement = selected ? `\n### ${selected}\n` : '\n### Címsor\n'
      newCursorPos = start + 5
      break

    case 'ol': // Számozott lista (ol)
      if (selected) {
        const lines = selected.split('\n')
        replacement = lines.map((line, idx) => `${idx + 1}. ${line}`).join('\n')
      } else {
        replacement = '\n1. Első lépés\n2. Második lépés\n3. Harmadik lépés\n'
      }
      newCursorPos = start + replacement.length
      break

    case 'ul': // Pontozott felsorolás (ul)
      if (selected) {
        const lines = selected.split('\n')
        replacement = lines.map((line) => `- ${line}`).join('\n')
      } else {
        replacement = '\n- Első pont\n- Második pont\n- Harmadik pont\n'
      }
      newCursorPos = start + replacement.length
      break

    case 'quote':
      replacement = selected ? `\n> ${selected}\n` : '\n> Idézet szövege\n'
      newCursorPos = start + 3
      break

    case 'br':
      replacement = '<br>\n'
      newCursorPos = start + replacement.length
      break

    case 'link': {
      const url = prompt('Add meg a webcímet (pl. https://...):', 'https://')
      if (!url) return
      const text = selected || prompt('Add meg a link szövegét:', 'Kattints ide') || url
      replacement = `[${text}](${url})`
      newCursorPos = start + replacement.length
      break
    }
    default:
      return
  }

  const updated = val.substring(0, start) + replacement + val.substring(end)
  emit('update:modelValue', updated)

  // Auto-focus and set cursor position
  nextTick(() => {
    const ta = getActiveTextarea()
    if (ta) {
      ta.focus()
      ta.setSelectionRange(newCursorPos, newCursorPos)
    }
  })
}

function clearContent() {
  if (confirm('Biztosan törölni szeretnéd a mező tartalmát?')) {
    flushTypingSession()
    pushUndo(props.modelValue || '', 0, 0)
    redoStack.value = []
    emit('update:modelValue', '')
  }
}
</script>

<template>
  <div
    class="rich-editor rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden focus-within:border-ink/50 focus-within:ring-4 focus-within:ring-ink/5 transition-all"
    @keydown="handleKeydown"
  >
    <!-- Editor Header Bar -->
    <div
      class="flex flex-wrap items-center justify-between border-b border-slate-100 bg-slate-50/75 px-4 py-2.5 gap-2"
    >
      <!-- Label -->
      <div
        v-if="label"
        class="font-semibold text-xs text-ink uppercase tracking-wider flex items-center gap-2"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-gold"></span>
        <span>{{ label }}</span>
      </div>
      <div v-else></div>

      <!-- View Switcher (Edit / Split / Preview) -->
      <div
        class="flex items-center gap-1 bg-slate-200/60 p-1 rounded-xl text-xs font-medium text-slate-600"
      >
        <button
          type="button"
          @click="viewMode = 'edit'"
          :class="[
            'px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer',
            viewMode === 'edit'
              ? 'bg-white text-ink font-semibold shadow-xs'
              : 'hover:text-slate-900 hover:bg-white/50',
          ]"
          title="Csak szerkesztő nézet"
        >
          <i class="fa-solid fa-pen-to-square text-[11px]"></i>
          <span>Szerkesztés</span>
        </button>

        <button
          v-if="allowSplit"
          type="button"
          @click="viewMode = 'split'"
          :class="[
            'hidden sm:flex px-2.5 py-1 rounded-lg transition-all items-center gap-1.5 cursor-pointer',
            viewMode === 'split'
              ? 'bg-white text-ink font-semibold shadow-xs'
              : 'hover:text-slate-900 hover:bg-white/50',
          ]"
          title="Kétoszlopos nézet (balra gépelsz, jobbra azonnal látod)"
        >
          <i class="fa-solid fa-table-columns text-[11px]"></i>
          <span>Osztott</span>
        </button>

        <button
          type="button"
          @click="viewMode = 'preview'"
          :class="[
            'px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer',
            viewMode === 'preview'
              ? 'bg-white text-ink font-semibold shadow-xs'
              : 'hover:text-slate-900 hover:bg-white/50',
          ]"
          title="Csak formázott előnézet"
        >
          <i class="fa-solid fa-eye text-[11px]"></i>
          <span>Előnézet</span>
        </button>
      </div>
    </div>

    <!-- Toolbar (Available in Edit and Split views) -->
    <div
      v-if="viewMode !== 'preview'"
      class="flex flex-wrap items-center gap-1 px-3 py-2 bg-slate-50/40 border-b border-slate-100"
    >
      <!-- UNDO (Ctrl+Z) -->
      <button
        type="button"
        @click="undo"
        :disabled="undoStack.length === 0"
        title="Visszavonás (Ctrl+Z)"
        class="h-8 px-2.5 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1 text-xs cursor-pointer"
      >
        <i class="fa-solid fa-rotate-left text-xs"></i>
        <span class="text-[10px] hidden sm:inline font-mono">Ctrl+Z</span>
      </button>

      <!-- REDO (Ctrl+Y) -->
      <button
        type="button"
        @click="redo"
        :disabled="redoStack.length === 0"
        title="Újra (Ctrl+Y vagy Ctrl+Shift+Z)"
        class="h-8 px-2 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center text-xs cursor-pointer"
      >
        <i class="fa-solid fa-rotate-right text-xs"></i>
      </button>

      <span class="w-[1px] h-4 bg-slate-200 mx-1"></span>

      <!-- Bold -->
      <button
        type="button"
        @click="applyFormat('bold')"
        title="Félkövér kiemelés (Ctrl+B)"
        class="w-8 h-8 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 transition-colors flex items-center justify-center cursor-pointer"
      >
        <i class="fa-solid fa-bold text-xs"></i>
      </button>

      <!-- Italic -->
      <button
        type="button"
        @click="applyFormat('italic')"
        title="Dőlt betű (Ctrl+I)"
        class="w-8 h-8 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 transition-colors flex items-center justify-center cursor-pointer"
      >
        <i class="fa-solid fa-italic text-xs"></i>
      </button>

      <span class="w-[1px] h-4 bg-slate-200 mx-1"></span>

      <!-- Ordered List (OL) -->
      <button
        type="button"
        @click="applyFormat('ol')"
        title="Számozott lista (1. 2. 3.)"
        class="h-8 px-2.5 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
      >
        <i class="fa-solid fa-list-ol text-xs text-ink"></i>
        <span class="text-[11px] hidden sm:inline text-slate-600">Számozott</span>
      </button>

      <!-- Unordered List (UL) -->
      <button
        type="button"
        @click="applyFormat('ul')"
        title="Pontozott felsorolás"
        class="h-8 px-2.5 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
      >
        <i class="fa-solid fa-list-ul text-xs text-ink"></i>
        <span class="text-[11px] hidden sm:inline text-slate-600">Felsorolás</span>
      </button>

      <span class="w-[1px] h-4 bg-slate-200 mx-1"></span>

      <!-- Heading -->
      <button
        type="button"
        @click="applyFormat('heading')"
        title="Alcím / Címsor kiemelés"
        class="h-8 px-2.5 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
      >
        <i class="fa-solid fa-heading text-xs"></i>
      </button>

      <!-- Quote -->
      <button
        type="button"
        @click="applyFormat('quote')"
        title="Idézet kiemelés"
        class="w-8 h-8 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 transition-colors flex items-center justify-center cursor-pointer"
      >
        <i class="fa-solid fa-quote-left text-xs"></i>
      </button>

      <!-- Link -->
      <button
        type="button"
        @click="applyFormat('link')"
        title="Hivatkozás / Link beszúrása"
        class="h-8 px-2.5 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
      >
        <i class="fa-solid fa-link text-xs"></i>
        <span class="text-[11px] hidden sm:inline text-slate-600">Link</span>
      </button>

      <!-- Line Break -->
      <button
        type="button"
        @click="applyFormat('br')"
        title="Sortörés beszúrása (<br>)"
        class="h-8 px-2.5 rounded-lg text-slate-700 hover:text-ink hover:bg-slate-200/70 active:bg-slate-300 transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
      >
        <i class="fa-solid fa-arrow-turn-down text-xs text-slate-500"></i>
        <span class="text-[11px] hidden sm:inline text-slate-500">Új sor</span>
      </button>

      <div class="ml-auto flex items-center gap-1">
        <button
          v-if="modelValue"
          type="button"
          @click="clearContent"
          title="Szöveg kiürítése"
          class="w-8 h-8 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors flex items-center justify-center cursor-pointer"
        >
          <i class="fa-regular fa-trash-can text-xs"></i>
        </button>
      </div>
    </div>

    <!-- Editor Body -->
    <div class="relative">
      <!-- Edit Mode: Full Textarea -->
      <div v-show="viewMode === 'edit'" class="p-4">
        <textarea
          ref="editAreaRef"
          :value="modelValue"
          @input="onInput"
          :rows="rows"
          :placeholder="placeholder"
          class="w-full text-slate-800 font-body text-sm leading-relaxed outline-hidden resize-y bg-transparent placeholder:text-slate-400"
        ></textarea>
      </div>

      <!-- Split Mode: Left Textarea, Right Preview -->
      <div
        v-show="viewMode === 'split'"
        class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200"
      >
        <div class="p-4">
          <div
            class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1"
          >
            <i class="fa-solid fa-code text-[9px]"></i>
            <span>Szerkesztő</span>
          </div>
          <textarea
            ref="splitAreaRef"
            :value="modelValue"
            @input="onInput"
            :rows="rows"
            :placeholder="placeholder"
            class="w-full text-slate-800 font-body text-sm leading-relaxed outline-hidden resize-y bg-transparent placeholder:text-slate-400"
          ></textarea>
        </div>

        <div class="p-4 bg-slate-50/50 min-h-[140px] overflow-y-auto">
          <div
            class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1"
          >
            <i class="fa-solid fa-desktop text-[9px]"></i>
            <span>Élő előnézet</span>
          </div>
          <div
            v-if="modelValue && modelValue.trim()"
            v-html="previewHtml"
            class="markdown-preview text-slate-800 text-sm leading-relaxed"
          ></div>
          <div v-else class="text-slate-400 italic text-xs py-4 flex items-center gap-2">
            <i class="fa-regular fa-pen-to-square"></i>
            <span>Kezdj el gépelni a bal oldali mezőben az előnézet megjelenítéséhez...</span>
          </div>
        </div>
      </div>

      <!-- Preview Mode: Full Preview -->
      <div
        v-show="viewMode === 'preview'"
        class="p-6 bg-slate-50/60 min-h-[150px] text-slate-800 text-sm leading-relaxed"
      >
        <div
          v-if="modelValue && modelValue.trim()"
          v-html="previewHtml"
          class="markdown-preview"
        ></div>
        <div
          v-else
          class="text-slate-400 italic text-xs py-6 text-center flex flex-col items-center justify-center gap-2"
        >
          <i class="fa-regular fa-file-lines text-2xl text-slate-300"></i>
          <span>A mező jelenleg üres. Válts vissza a Szerkesztés fülre a szöveg beírásához!</span>
        </div>
      </div>
    </div>

    <!-- Help text footer -->
    <div
      v-if="helpText"
      class="px-4 py-2 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-2"
    >
      <i class="fa-solid fa-lightbulb text-gold text-xs"></i>
      <span>{{ helpText }}</span>
    </div>
  </div>
</template>

<style scoped>
.markdown-preview :deep(strong) {
  font-weight: 700;
  color: #354f64;
}
.markdown-preview :deep(em) {
  font-style: italic;
}
.markdown-preview :deep(h1),
.markdown-preview :deep(h2),
.markdown-preview :deep(h3) {
  font-family: var(--font-display, serif);
  font-weight: 600;
  color: #354f64;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
}
.markdown-preview :deep(ul) {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.markdown-preview :deep(ol) {
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.markdown-preview :deep(li) {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.markdown-preview :deep(blockquote) {
  border-left: 3px solid #ffdb66;
  padding-left: 0.75rem;
  font-style: italic;
  color: #466986;
  margin: 0.5rem 0;
}
.markdown-preview :deep(a) {
  color: #1c7d76;
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
