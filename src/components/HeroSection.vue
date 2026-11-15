<script setup>
import { codeSnippet } from '../data/content'
import { useTyping } from '../composables/useTyping'

const { typed } = useTyping(codeSnippet)
</script>

<template>
  <section id="home" class="hero">
    <div class="blob" aria-hidden="true"></div>
    <div class="wrap">
      <div>
        <h1>Vitor W <em>Oliveira</em></h1>
        <p class="role">Desenvolvedor de Software</p>
        <p class="lead">Transformo ideias em interfaces rápidas e sistemas organizados. Estudo, construo e aprendo todos os dias, de Florianópolis para qualquer lugar.</p>
        <div class="cta">
          <a class="btn main" href="#projetos">Ver projetos</a>
          <a class="btn" href="#contato">Entrar em contato</a>
        </div>
      </div>
      <div class="code" aria-hidden="true">
        <div class="top"><i></i><i></i><i></i></div>
        <pre><span v-html="typed"></span><span class="caret"></span></pre>
      </div>
    </div>
  </section>
</template>
