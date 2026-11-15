<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="card proj">
    <img v-if="project.image" :src="project.image" :alt="'Prévia do projeto ' + project.name" class="preview" loading="lazy">
    <div v-else class="preview" :class="{ empty: project.empty }" role="img" :aria-label="'Pré-visualização de ' + project.name">
      {{ project.empty ? 'Em breve' : project.initials }}
    </div>
    <div class="body">
      <h3>{{ project.name }}</h3>
      <p>{{ project.desc }}</p>
      <ul class="tags"><li v-for="t in project.tech" :key="t" class="tag">{{ t }}</li></ul>
      <div v-if="!project.empty" class="links">
        <a v-if="project.github" class="btn" :href="project.github" target="_blank" rel="noopener">GitHub</a>
        <a v-if="project.demo" class="btn main" :href="project.demo" target="_blank" rel="noopener">Demonstração</a>
      </div>
    </div>
  </article>
</template>
