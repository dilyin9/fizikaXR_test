<template>
  <div class="second_page_block">
    <button @click="changeState">{{ buttonText }}</button>
    <span v-if="state">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';


const props = defineProps<{
  text: string
}>()
const state = ref(true)
const buttonText = computed(() => {
  return state.value ? 'Скрыть текст' : 'Показать текст'
})
const changeState = () => {
  state.value = !state.value
}
</script>

<style scoped>
.second_page_block {
  padding: 0.5rem;
  display: flex;
  column-gap: 1rem;
  flex-direction: row;
  align-items: center;
  border: solid 2px #2e2f3d;
}
</style>