import { ref, onMounted, onBeforeUnmount } from 'vue'

// Digita o texto (que pode conter tags HTML) sem cortar tags no meio.
export function useTyping(full, speed = 28) {
  const typed = ref('')
  let timer

  onMounted(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { typed.value = full; return }
    let i = 0
    timer = setInterval(() => {
      i++
      if (full[i - 1] === '<') i = full.indexOf('>', i) + 1
      typed.value = full.slice(0, i)
      if (i >= full.length) clearInterval(timer)
    }, speed)
  })
  onBeforeUnmount(() => clearInterval(timer))

  return { typed }
}
