<template>
  <AppHeader />
  <router-view v-slot="{ Component }">
    <transition name="page-slide">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<style scoped></style>
