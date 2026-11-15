<script setup>
defineProps({ title: String, sub: String })
</script>

<template>
  <div class="title rv" v-reveal>
    <h2>{{ title }}</h2>
    <p v-if="sub">{{ sub }}</p>
  </div>
</template>
