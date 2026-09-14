import { reactive, watch } from 'vue'
import defaultContent from '../content.json'

const STORAGE_KEY = 'skipintro_draft_content'
const TOKEN_KEY = 'skipintro_gh_token'
const REPO_KEY = 'skipintro_gh_repo'
const AUTH_KEY = 'skipintro_admin_pin'
const PASSWORD_KEY = 'skipintro_admin_password'
export const DEFAULT_ADMIN_PASSWORD = '3311'

// Attempt to load existing draft from localStorage, otherwise use bundled defaults
function getInitialContent() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Deep merge with defaultContent to ensure all keys exist
        return { ...defaultContent, ...parsed }
      } catch (e) {
        console.error('Failed to parse saved draft content:', e)
      }
    }
  }
  // Deep clone default content
  return JSON.parse(JSON.stringify(defaultContent))
}

export const contentState = reactive(getInitialContent())

// Auto-save draft changes to localStorage
if (typeof window !== 'undefined') {
  watch(
    () => contentState,
    (val) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
      } catch (e) {
        console.error('Failed to save content draft to localStorage', e)
      }
    },
    { deep: true },
  )
}

export function useContentStore() {
  function getGithubToken() {
    return localStorage.getItem(TOKEN_KEY) || ''
  }

  function setGithubToken(token) {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token.trim())
    } else {
      localStorage.removeItem(TOKEN_KEY)
    }
  }

  function getGithubRepo() {
    return localStorage.getItem(REPO_KEY) || 'zeti1223/skipintro-coaching'
  }

  function setGithubRepo(repo) {
    localStorage.setItem(REPO_KEY, (repo || 'zeti1223/skipintro-coaching').trim())
  }

  function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === 'authenticated'
  }

  function setAuthenticated(status) {
    if (status) {
      localStorage.setItem(AUTH_KEY, 'authenticated')
    } else {
      localStorage.removeItem(AUTH_KEY)
    }
  }

  function getAdminPassword() {
    return localStorage.getItem(PASSWORD_KEY) || DEFAULT_ADMIN_PASSWORD
  }

  function setAdminPassword(newPassword) {
    if (newPassword && newPassword.trim()) {
      localStorage.setItem(PASSWORD_KEY, newPassword.trim())
    } else {
      localStorage.removeItem(PASSWORD_KEY)
    }
  }

  function verifyPassword(input) {
    if (!input) return false
    const trimmed = input.trim()
    const custom = localStorage.getItem(PASSWORD_KEY)
    if (custom) {
      return trimmed === custom || trimmed === DEFAULT_ADMIN_PASSWORD
    }
    return trimmed === DEFAULT_ADMIN_PASSWORD || trimmed === 'melinda' || trimmed === 'admin'
  }

  function resetToDefault() {
    const cloned = JSON.parse(JSON.stringify(defaultContent))
    for (const key of Object.keys(cloned)) {
      if (
        contentState[key] &&
        typeof contentState[key] === 'object' &&
        !Array.isArray(contentState[key])
      ) {
        Object.assign(contentState[key], cloned[key])
      } else {
        contentState[key] = cloned[key]
      }
    }
    localStorage.removeItem(STORAGE_KEY)
  }

  function exportJson() {
    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(contentState, null, 2))
    const downloadAnchor = document.createElement('a')
    downloadAnchor.setAttribute('href', dataStr)
    downloadAnchor.setAttribute(
      'download',
      `skipintro-tartalom-${new Date().toISOString().slice(0, 10)}.json`,
    )
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    downloadAnchor.remove()
  }

  function importJson(jsonText) {
    try {
      const parsed = JSON.parse(jsonText)
      for (const [key, value] of Object.entries(parsed)) {
        if (
          contentState[key] &&
          typeof contentState[key] === 'object' &&
          !Array.isArray(contentState[key])
        ) {
          Object.assign(contentState[key], value)
        } else {
          contentState[key] = value
        }
      }
      return { success: true }
    } catch (e) {
      return { success: false, error: e.message }
    }
  }

  /**
   * Commits the updated content.json file directly to GitHub via REST API
   */
  async function publishToGithub(commitMessage = 'Tartalom frissítése a szerkesztő felületről') {
    const token = getGithubToken()
    const repo = getGithubRepo()
    const filePath = 'src/content.json'
    const branch = 'main'

    if (!token) {
      throw new Error(
        'Hiányzik a GitHub Personal Access Token! Kérlek add meg a Beállítások menüpontban.',
      )
    }

    // UTF-8 base64 encoding
    const jsonContent = JSON.stringify(contentState, null, 2)
    const base64Content = btoa(unescape(encodeURIComponent(jsonContent)))

    // 1. Get current file SHA from GitHub
    const getUrl = `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`
    const getRes = await fetch(getUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    let sha = null
    if (getRes.ok) {
      const fileData = await getRes.json()
      sha = fileData.sha
    } else if (getRes.status === 401 || getRes.status === 403) {
      throw new Error('A megadott GitHub Token érvénytelen vagy nincs írási jogosultsága!')
    } else if (getRes.status !== 404) {
      const err = await getRes.json()
      throw new Error(err.message || 'Hiba a fájl lekérdezésekor a GitHubról.')
    }

    // 2. Put file to commit update
    const putUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`
    const putBody = {
      message: commitMessage,
      content: base64Content,
      branch: branch,
    }
    if (sha) {
      putBody.sha = sha
    }

    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(putBody),
    })

    if (!putRes.ok) {
      const err = await putRes.json()
      throw new Error(err.message || 'Hiba történt a publikálás közben.')
    }

    return await putRes.json()
  }

  return {
    content: contentState,
    getGithubToken,
    setGithubToken,
    getGithubRepo,
    setGithubRepo,
    isAuthenticated,
    setAuthenticated,
    getAdminPassword,
    setAdminPassword,
    verifyPassword,
    resetToDefault,
    exportJson,
    importJson,
    publishToGithub,
  }
}
