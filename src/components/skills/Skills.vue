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

    <div class="ml-6 md:ml-8 lg:ml-16 mb-8">

      <div class="flex">
        <h3 class="text-4xl font-semibold text-light">Languages </h3>
        <!-- <span class="block h-0.5 bg-lighter w-full ms-5 rounded-xl my-auto"></span> -->
      </div>
      <div class="grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-12 mt-6">
        <div v-for="lang in languages" class="flex flex-col">
          <div class="flex flex-col justify-between h-full">
            <div class="text-xl font-medium mb-2">{{lang.text}}</div>
            <img :class="`h-${lang.height} w-${lang.width}`" :src="lang.path" :alt="lang.text">
          </div>
        </div>
      </div>

      <div class="flex mt-12">
        <h3 class="text-4xl font-semibold text-light">Cloud Services</h3>
        <!-- <span class="block h-0.5 bg-lighter w-full ms-5 rounded-xl my-auto"></span> -->
      </div>
      <div class="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-12 mt-6">
        <div v-for="service in cloudServices" class="flex flex-col">
          <div class="flex flex-col justify-between h-full">
            <div class="text-xl font-medium mb-2">{{service.text}}</div>
            <img :class="`h-${service.height} w-${service.width}`" :src="service.path" :alt="service.text">
          </div>
        </div>
      </div>

      <div class="flex mt-12">
        <h3 class="text-4xl font-semibold text-light">Data</h3>
        <!-- <span class="block h-0.5 bg-lighter w-full ms-5 rounded-xl my-auto"></span> -->
      </div>
      <div class="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-12 mt-6">
        <div v-for="data in dataStandards" class="flex flex-col">
          <div class="flex flex-col justify-between h-full">
            <div class="text-xl font-medium mb-2">{{data.text}}</div>
            <img :class="`h-${data.height} w-${data.width}`" :src="data.path" :alt="data.text">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const renderBlur = ref(false)
onMounted(() => {
  setTimeout(() => {
    renderBlur.value = true
  }, 150)
})

const languages = ref([
  {
    text: 'Javascript', 
    path: '/icons/JSLogo.png', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'Typescript', 
    path: '/icons/TSLogo.png', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'HTML', 
    path: '/icons/HTMLLogo.png', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'CSS', 
    path: '/icons/CSSLogo.svg', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'Python', 
    path: '/icons/PythonLogo.svg', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'Java', 
    path: '/icons/JavaLogo.svg', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'PHP', 
    path: '/icons/PHPLogo.png', 
    height: '', 
    width: '16'
  }, 
  {
    text: 'C#', 
    path: '/icons/CSharpLogo.png', 
    height: '16', 
    width: '16'
  }
])

const cloudServices = ref([
  {
    text: 'Firebase', 
    path: '/icons/FirebaseLogo.svg', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'Google Cloud Platform', 
    path: '/icons/GCPLogo.svg', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'Amazon Web Services', 
    path: '/icons/AWSLogo.svg', 
    height: '12', 
    width: '12'
  }, 
  {
    text: 'Mongo DB', 
    path: '/icons/MongoDBLogo.svg', 
    height: '12', 
    width: '12'
  }, 
])

const dataStandards = ref([
  {
    text: 'SQL', 
    path: '/icons/SQL.svg', 
    height: '12', 
    width: '12'
  },
  {
    text: 'FHIR', 
    path: '/icons/FHIRLogo.png',
    width: '36', 
    height: '12'
  },
  {
    text: 'NoSQL', 
    path: '/icons/NoSQLLogo.png', 
    height: '12', 
    width: '12'
  }
])
</script>