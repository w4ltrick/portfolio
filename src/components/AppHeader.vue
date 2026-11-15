<script setup>
import { ref } from 'vue'
import { links } from '../data/content'
import { useTheme } from '../composables/useTheme'

defineProps({ active: String })
const menu = ref(false)
const { dark, toggle } = useTheme()
</script>

<template>
  <header>
    <div class="wrap bar">
      <a class="logo" href="#home" aria-label="Início">vitor<span>.dev</span></a>
      <nav :class="{ open: menu }" aria-label="Principal">
        <ul>
          <li v-for="l in links" :key="l.id">
            <a :href="'#' + l.id" :class="{ on: active === l.id }" @click="menu = false">{{ l.label }}</a>
          </li>
        </ul>
      </nav>
      <div class="tools">
        <button class="ico" :aria-label="dark ? 'Ativar tema claro' : 'Ativar tema escuro'" @click="toggle">{{ dark ? '☀' : '☾' }}</button>
        <button class="ico burger" :aria-expanded="menu" aria-label="Abrir menu" @click="menu = !menu">{{ menu ? '✕' : '☰' }}</button>
      </div>
    </div>
  </header>
</template>
