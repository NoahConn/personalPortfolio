<template>
  <div 
    class="transition duration-1000 backdrop-blur-0 hover:backdrop-blur-0 mt-4 md:mt-0 text bg-zinc-800/80 text-lighter rounded-2xl p-6"
    :class="{'backdrop-blur-sm': renderBlur == true}"
  >
    <h1 class="text-4xl md:text-6xl font-bold text-lighter">Projects</h1>
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