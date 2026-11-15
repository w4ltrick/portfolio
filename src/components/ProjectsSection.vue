<script setup>
import SectionTitle from './SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/content'
</script>

<template>
  <section id="projetos">
    <div class="wrap">
      <SectionTitle title="Projetos" sub="Alguns trabalhos e estudos que desenvolvi." />
      <div class="projects rv" v-reveal>
        <ProjectCard v-for="p in projects" :key="p.name" :project="p" />
      </div>
    </div>
  </section>
</template>
