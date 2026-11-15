<script setup>
import SectionTitle from './SectionTitle.vue'
import SkillCard from './SkillCard.vue'
import { skills } from '../data/content'
</script>

<template>
  <section id="habilidades">
    <div class="wrap">
      <SectionTitle title="Habilidades técnicas" sub="As tecnologias com que trabalho e estudo." />
      <div class="grid4 rv" v-reveal>
        <SkillCard v-for="s in skills" :key="s.name" v-bind="s" />
      </div>
    </div>
  </section>
</template>
