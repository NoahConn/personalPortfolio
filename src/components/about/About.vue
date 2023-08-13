<template>
  <div 
    class="transition duration-1000 backdrop-blur-0 hover:backdrop-blur-0 mt-4 md:mt-0 bg-light text bg-zinc-800/80 text-lighter rounded-2xl p-6"
    :class="{'backdrop-blur-sm': renderBlur == true}"
  >
    <div class="flex justify-evenly">
      <span class="block h-0.5 bg-lighter w-full me-5 rounded-xl my-auto"></span>
      <h1 class="text-4xl md:text-6xl font-bold text-center text-lighter mb-4">About</h1>
      <span class="block h-0.5 bg-lighter w-full ms-5 rounded-xl my-auto"></span>
    </div>
    
    <div class="text-xl lg:px-8">
      <img class="rounded-full ring-1 ring-light h-48 w-36 md:h-60 md:w-44 lg:h-72 lg:w-56 float-right m-1 lg:m-4" src="../../assets/bioPhotos/DSCF1791.jpeg" alt="">
      <p class="mb-4 md:indent-10">
        My name is Noah Connolly and I'm a full stack web developer specializing in Vue.js, Firebase, and Cloud Service Integration.
        I studied computer science and oboe performance at Ball State University in Muncie, Indiana.
        After graduating in the summer of 2021, I immediately began freelance consulting as a data analyst and web developer.
        I had the oppurtunity to work on projects ranging from electronic health record applications to large scale data mining, cleaning, and conversions.
      </p>
      <p class="mb-4 indent-10">
        Software development is hard enough as it is and developers run into problems like misscomunication and burnout. 
        Some the the key principles I bring to a team are adaptability, reliability, and effective communication.
        I strive to establish clear expecations for my colleagues and clients, providing regular updates to keep everyone on the same page.
        Tackling problems as a team, where everyone contributes to the best of their ability, can make the difference between success and failure.
        Thats why I always offer myself up as someone my fellow developers can lean on; whether that be technical challenges or mental road blocks.
        As the world of tech is always changing, I aim to stay flexible and embrace being a life long learner.
        This allows me to onboard and implement new technologies quickly and effectively.
      </p>
      <p class="mb-4 indent-10">
        Outside of software, I have a wide array of hobbies that keep me busy.
        During the summers you can find me exploring the PNW; camping, hiking, and rock climbing in some of the most beautiful places on earth.
        I've recently found a new hobby, photography, that I use to document and capture the places I explore and the people I explore with.
        When the PNW rain returns and time outside is less common, I still climb indoors and dive into fitness. 
        As my second major may suggest, I am also a musician!
        I've made music since I was 6 when I started playing the piano and it has been intertwined in my life ever since.
        While I don't play the oboe much anymore, I spend a lot of time writing music with my guitar, covering my favorite songs, and producing tunes on Ableton.
        I post all of my musical and nature adventures on my social medias, check them out!
      </p>
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
<style>
.indent-text {
  text-indent: 20px;
}
</style>