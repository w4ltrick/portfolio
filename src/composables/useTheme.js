import { ref, onMounted } from 'vue'

export function useTheme() {
  const dark = ref(true)
  const apply = () => document.documentElement.setAttribute('data-theme', dark.value ? 'dark' : 'light')

  const toggle = () => {
    dark.value = !dark.value
    apply()
    try { localStorage.setItem('theme', dark.value ? 'dark' : 'light') } catch (e) { /* ignora */ }
  }

  onMounted(() => {
    let saved = null
    try { saved = localStorage.getItem('theme') } catch (e) { /* ignora */ }
    dark.value = saved ? saved === 'dark' : !matchMedia('(prefers-color-scheme: light)').matches
    apply()
  })

  return { dark, toggle }
}
