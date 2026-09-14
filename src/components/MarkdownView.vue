<script setup>
import { computed } from 'vue'
import { renderMarkdown } from '../utils/markdown.js'

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  inline: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'div',
  },
})

const html = computed(() => renderMarkdown(props.content, props.inline))
</script>

<template>
  <component :is="tag" v-html="html" class="markdown-body inline-block" />
</template>

<style>
.markdown-body strong {
  font-weight: 700;
}
.markdown-body em {
  font-style: italic;
}
.markdown-body a {
  text-decoration: underline;
  text-underline-offset: 2px;
}
.markdown-body ul {
  list-style-type: disc;
  margin-left: 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.markdown-body ol {
  list-style-type: decimal;
  margin-left: 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.markdown-body li {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.markdown-body blockquote {
  border-left: 3px solid currentColor;
  padding-left: 0.75rem;
  opacity: 0.85;
  font-style: italic;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
