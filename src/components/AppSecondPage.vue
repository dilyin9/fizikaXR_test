<template>
  <div class="second_page page_layout_height">
    <div class="left_block">
      <img v-show="show" class="img" src="../assets/image2.jpg" @load="setShowTrue" />
    </div>
    <div class="right_block">
      <div class="settings">
        <span>Введите количество блоков с текстом</span>
        <input type="number" min="1" max="100" v-model="blockCounter" />
        <button @click="fetchText">Применить</button>
      </div>
      <div class="blocks">
        <SecondPageActionBlock
          v-for="item in posts"
          :key="item.id"
          :text="item.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SecondPageActionBlock from '../components/SecondPageActionBlock.vue'
type Post = {
  id: number
  title: string
}
const blockCounter = ref(3)
const show = ref(false)
const posts = ref<Post[]>([])
onMounted(() => {
  fetchText()
})
const setShowTrue = () => {
  show.value = true
}
const fetchText = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${blockCounter.value}`)
    .then(resp => resp.json())
    .then(json => posts.value = json)
}
</script>

<style scoped>
.second_page {
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  .left_block {
    display: flex;
    overflow: hidden;
    padding: .5rem;
    align-items: center;
    justify-content: center;
    .img {
      max-width: 100%;
      max-height: 100%;
      /* object-fit: contain; */
    }
  }
  .right_block {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    flex: 1;
    .settings {
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 1rem;

      span {
        font-size: 20px;
      }
    }
    .blocks {
      display: flex;
      flex-direction: column;
      row-gap: .5rem;
      overflow-y: auto;
    }
  }
}
</style>