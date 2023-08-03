<template>
  <div 
    class="transition duration-1000 backdrop-blur-0 hover:backdrop-blur-0 bg-light text dark:bg-zinc-800/80 dark:text-lighter rounded-2xl p-6"
    :class="{'backdrop-blur-sm': renderBlur == true}"
  >
    <h1 class="text-4xl md:text-6xl font-bold dark:text-lighter">Photography</h1>
    <p>Coming soon...</p>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const renderBlur = ref(false)
onMounted(() => {
  setTimeout(() => {
    renderBlur.value = true
  }, 150)
})
</script>