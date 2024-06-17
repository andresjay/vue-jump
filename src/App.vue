<script setup lang="ts">
  import { common } from '@/utils/common';
  import * as THREE from 'three';
  import Game from '@/components/jump/jump-game.vue'

  window.THREE = common.THREE = THREE;
</script>

<template>
  <header>
    <!-- ... -->
  </header>

  <main>
    <Game />
  </main>
</template>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;
  }
</style>
