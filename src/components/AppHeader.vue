<template>
  <div class="header">
    <RouterLink :to="headerName.path">
      <h1>
        {{ headerName.title }}
      </h1>
    </RouterLink>
  </div> 
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const headerName = computed(() => {
  if (route.path === '/second') {
    return {
      path: '/',
      title: 'Вернуться на главную'
    }
  } else {
    return {
      path: '/second',
      title: 'Перейти на вторую страницу'
    }
  }
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 5rem;
  background: #19314c;
  h1 {
    color: #fff;
  }
}
</style>