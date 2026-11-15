<script setup>
import SectionTitle from './SectionTitle.vue'
import { facts } from '../data/content'
</script>

<template>
  <section id="sobre">
    <div class="wrap">
      <SectionTitle title="Sobre mim" sub="Quem está por trás do código." />
      <div class="about rv" v-reveal>
        <div>
          <p>Sou tecnólogo em Análise e Desenvolvimento de Sistemas pelo SENAI de Florianópolis, com conclusão prevista para o início de 2026. A graduação me deu base em programação, arquitetura de sistemas e metodologias ágeis.</p>
          <p>Comecei pelo suporte técnico, ouvindo usuários e levando problemas reais para a equipe de desenvolvimento. Essa vivência me ensinou a escrever software pensando em quem o usa. Hoje foco em front-end com Vue.js e React, sem perder de vista o back-end e os dados.</p>
          <p>Também concluí o AWS Academy Graduate em Data Engineering, o que ampliou meu olhar para pipelines e análise na nuvem.</p>
        </div>
        <div class="facts">
          <div v-for="f in facts" :key="f.t" class="fact"><b>{{ f.t }}</b><span>{{ f.d }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
