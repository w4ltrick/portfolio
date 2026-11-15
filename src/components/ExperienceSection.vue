<script setup>
import SectionTitle from './SectionTitle.vue'
import { experience } from '../data/content'
</script>

<template>
  <section id="experiencia">
    <div class="wrap">
      <SectionTitle title="Experiência profissional" sub="Onde aprendi a ouvir o usuário." />
      <div class="tl rv" v-reveal>
        <div v-for="e in experience" :key="e.org" class="tl-item">
          <span class="when">{{ e.when }}</span>
          <h3>{{ e.role }}</h3>
          <div class="org">{{ e.org }}</div>
          <ul><li v-for="t in e.tasks" :key="t">{{ t }}</li></ul>
        </div>
      </div>
    </div>
  </section>
</template>
