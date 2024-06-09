<template>
  <div class="main_page page_layout_height">
    <img class="img" src="../../public/assets/welcome.jpg"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main_page {
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  .img {
    max-width: 100%;
    max-height: 80%;
    object-fit: contain;
  }
}

</style>