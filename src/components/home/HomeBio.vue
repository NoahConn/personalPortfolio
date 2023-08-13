<template>
  <div class="flex justify-center mx-6">
    <img 
      class="inline-block h-28 w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 rounded-full ring-1 ring-light mt-2" 
      src="../../assets/bioPhotos/3A2D9369-1CEE-481C-9055-3855A0ADD6F1_1_201_a.jpeg" 
      alt="" 
    />
    <div class="flex flex-col sm:flex-row sm:text-6xl my-auto ml-2 sm:ml-4 text-lighter font-extrabold text-4xl lg:text-8xl">
      <h1>Noah</h1>
      <h1 class="sm:ml-4">Connolly</h1>
    </div>
  </div>
  <div 
    class="bg-zinc-800/80 rounded-2xl p-6 mt-8 transition duration-1000 backdrop-blur-0"
    :class="{'backdrop-blur-sm': renderBlur == true}"
  >
    <div class="text-lighter font-semibold text-2xl lg:text-5xl">
      Full Stack Developer, Musician, and Nature Enthusiast.
    </div>
    <p class="mt-2 text-lighter text-lg lg:text-2xl">
      I'm Noah, a full stack developer from the Pacific Northwest. 
      As the owner of Cascade Tech Consulting I've designed and developed web apps; 
      handling front-end UI/UX, back-end data architecture, and cloud service integration. 
      I've led and mentored developers, helping foster confidence and achievemnt across the team while effectively managing business objectives and deadlines.
      My core principles as a developer are adaptability, reliability, and effective communication. 
      Thanks for visiting, have a look around!
    </p>

  </div>
</template>
<script setup>
import { inject, onMounted, ref } from 'vue';
const nav = inject('nav')
const renderBlur = ref(false)
onMounted(() => {
  setTimeout(() => {
    renderBlur.value = true
  }, 300)
})
</script>