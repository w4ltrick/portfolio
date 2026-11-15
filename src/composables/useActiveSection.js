import { ref, onMounted, onBeforeUnmount } from 'vue'

// Descobre qual seção está no centro da tela, para destacar o menu.
export function useActiveSection() {
  const active = ref('home')
  let io

  onMounted(() => {
    io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) active.value = e.target.id }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    document.querySelectorAll('main section[id]').forEach(s => io.observe(s))
  })
  onBeforeUnmount(() => io && io.disconnect())

  return { active }
}
