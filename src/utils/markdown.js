import { marked } from 'marked'

// Configure marked defaults
marked.setOptions({
  breaks: true,
  gfm: true,
})

/**
 * Parses markdown text into HTML string.
 * @param {string} text
 * @param {boolean} inlineOnly
 * @returns {string}
 */
export function renderMarkdown(text, inlineOnly = false) {
  if (!text || typeof text !== 'string') return ''

  if (inlineOnly) {
    try {
      return marked.parseInline(text)
    } catch {
      return text
    }
  }

  try {
    return marked.parse(text)
  } catch {
    return text
  }
}
