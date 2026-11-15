<script setup>
defineProps({ emoji: String, name: String, items: Array })
</script>

<template>
  <article class="card">
    <span class="emoji" aria-hidden="true">{{ emoji }}</span>
    <h3>{{ name }}</h3>
    <ul class="tags"><li v-for="i in items" :key="i" class="tag">{{ i }}</li></ul>
  </article>
</template>
