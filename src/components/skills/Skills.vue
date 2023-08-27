<template>
  <div 
    class="transition duration-1000 backdrop-blur-0 hover:backdrop-blur-0 mt-4 md:mt-0 text bg-zinc-800/80 text-lighter rounded-2xl p-6"
    :class="{'backdrop-blur-sm': renderBlur == true}"
  >
  <div class="flex justify-evenly mb-3">
      <span class="block h-0.5 bg-lighter w-full me-5 rounded-xl my-auto"></span>
      <h1 class="text-4xl md:text-6xl font-bold text-center text-lighter mb-4">Skills</h1>
      <span class="block h-0.5 bg-lighter w-full ms-5 rounded-xl my-auto"></span>
    </div>
    <div class="grid grid-rows-4 grid-flow-col gap-12 mt-8">
      <img class="h-12 w-12" src="../../assets/icons/VueLogo.svg" alt="">
      <img class="h-12 w-12" src="../../assets/icons/ReactLogo.svg" alt="">
      <img class="h-12 w-12" src="../../assets/icons/FirebaseLogo.svg" alt="">
      <img class="h-12 w-12" src="../../assets/icons/MongoDBLogo.svg" alt="">
      <img class="h-12 w-12" src="../../assets/icons/GCPLogo.svg" alt="">
      <img class="h-12 w-12" src="../../assets/icons/AWSLogo.svg" alt="">
      <img class="h-12" src="../../assets/icons/FHIRLogo.png" alt="">
      <img class="h-12" src="../../assets/icons/JSLogo.png" alt="">
      <img class="h-12" src="../../assets/icons/TSLogo.png" alt="">
      <img class="h-12" src="../../assets/icons/JavaLogo.svg" alt="">
      <img class="h-12" src="../../assets/icons/PythonLogo.svg" alt="">
      <img class="h-12" src="../../assets/icons/CSharpLogo.png" alt="">
      <img class="h-12" src="../../assets/icons/HTMLLogo.png" alt="">
      <img class="h-12" src="../../assets/icons/CSSLogo.svg" alt="">
      <img class="h-12" src="../../assets/icons/TWLogo.svg" alt="">
      <img class="h-12" src="../../assets/icons/SQL.svg" alt="">
    </div>
    
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