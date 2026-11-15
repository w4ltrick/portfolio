// v-reveal: anima o elemento uma única vez quando ele entra na tela.
export default {
  mounted(el) {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
  }
}
