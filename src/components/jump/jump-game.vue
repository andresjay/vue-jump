<template>
  <div id="game"></div>
</template>


<script setup lang="ts">
  import { onMounted } from 'vue';
  import Game from './game'

  onMounted(() => {
    Game.init();
  })
</script>

<style scoped>
 #game {
  width: 100%;
  height: 100%;
 }
</style>
