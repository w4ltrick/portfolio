import { reactive, ref } from 'vue'
import { CONTACT } from '../data/content'

const rules = {
  name: v => (v.length < 2 ? 'Informe seu nome com pelo menos 2 letras.' : ''),
  email: v => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Informe um e-mail válido, como nome@exemplo.com.'),
  message: v => (v.length < 10 ? 'Escreva pelo menos 10 caracteres.' : '')
}

export function useContactForm() {
  const form = reactive({ name: '', email: '', message: '' })
  const errors = reactive({ name: '', email: '', message: '' })
  const sent = ref(false)

  const validate = k => (errors[k] = rules[k](form[k]))

  const submit = () => {
    const ok = Object.keys(rules).map(validate).every(e => !e)
    if (!ok) return
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    const subject = `Contato pelo portfólio: ${form.name}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    sent.value = true
    form.name = form.email = form.message = ''
    Object.keys(errors).forEach(k => (errors[k] = ''))
  }

  return { form, errors, sent, validate, submit }
}
