<script setup>
import SectionTitle from './SectionTitle.vue'
import { CONTACT } from '../data/content'
import { useContactForm } from '../composables/useContactForm'

const { form, errors, sent, validate, submit } = useContactForm()
</script>

<template>
  <section id="contato">
    <div class="wrap">
      <SectionTitle title="Vamos conversar?" sub="Aberto a oportunidades, estágios, projetos e networking." />
      <div class="contact rv" v-reveal>
        <div>
          <p>Se você tem uma vaga, uma ideia ou só quer trocar experiências sobre tecnologia, me escreva. Respondo o mais rápido possível.</p>
          <div class="links-list">
            <a :href="CONTACT.github" target="_blank" rel="noopener">GitHub · w4ltrick</a>
            <a :href="CONTACT.linkedin" target="_blank" rel="noopener">LinkedIn · w4ltrick</a>
            <a :href="'mailto:' + CONTACT.email">E-mail · {{ CONTACT.email }}</a>
            <a :href="CONTACT.whatsapp" target="_blank" rel="noopener">WhatsApp · {{ CONTACT.whatsappLabel }}</a>
          </div>
        </div>
        <form novalidate @submit.prevent="submit">
          <label>Nome
            <input v-model.trim="form.name" :class="{ invalid: errors.name }" autocomplete="name" :aria-invalid="!!errors.name" @blur="validate('name')">
            <span class="err" role="alert">{{ errors.name }}</span>
          </label>
          <label>E-mail
            <input v-model.trim="form.email" type="email" :class="{ invalid: errors.email }" autocomplete="email" :aria-invalid="!!errors.email" @blur="validate('email')">
            <span class="err" role="alert">{{ errors.email }}</span>
          </label>
          <label>Mensagem
            <textarea v-model.trim="form.message" rows="5" :class="{ invalid: errors.message }" :aria-invalid="!!errors.message" @blur="validate('message')"></textarea>
            <span class="err" role="alert">{{ errors.message }}</span>
          </label>
          <button class="btn main" type="submit">Enviar mensagem</button>
          <p v-if="sent" class="ok" role="status">Mensagem pronta! Seu aplicativo de e-mail abriu para você confirmar o envio.</p>
        </form>
      </div>
    </div>
  </section>
</template>
