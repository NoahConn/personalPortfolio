<template>
  <div 
    class="transition duration-1000 backdrop-blur-0 hover:backdrop-blur-0 mt-4 md:mt-0 text bg-zinc-800/80 text-lighter rounded-2xl p-6"
    :class="{'backdrop-blur-sm': renderBlur == true}"
  >
    <div class="flex justify-evenly mb-3">
      <span class="block h-0.5 bg-lighter w-full me-5 rounded-xl my-auto"></span>
      <h1 class="text-4xl md:text-6xl font-bold text-center text-lighter mb-4">Contact</h1>
      <span class="block h-0.5 bg-lighter w-full ms-5 rounded-xl my-auto"></span>
    </div>
    <form v-if="!messageSent" @submit.prevent="sendMessage" class="flex flex-col md:flex-row rounded-2xl border border-light p-6">
      <h2 class="text-sm font-semibold text-zinc-100 md:w-3/5 lg:w-1/3 flex flex-col justify-between md:mb-20">
        <div class="flex flex-row md:justify-center">
          <!-- mobile -->
          <!-- <div class="md:hidden flex flex-">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-20 w-20 flex-none">
              <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" class="fill-zinc-100/10 stroke-zinc-500"></path>
              <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" class="stroke-zinc-400 dark:stroke-zinc-500"></path>
            </svg>
            <span class="ml-3 my-auto text-3xl">Get in touch!</span>
          </div> -->
          <!-- desktop -->
          <div class="flex flex-row text-center m-auto md:flex-col md:justify-center">
            <div class="flex justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-12 w-12 md:h-16 lg:h-24 lg:w-24 flex-none lg:mb-4">
                <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" class="fill-zinc-100/10 stroke-zinc-500"></path>
                <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" class="stroke-zinc-400 dark:stroke-zinc-500"></path>
              </svg>
            </div>
            
            <span class="ml-3 md:ml-0 lg:ml-3 my-auto text-2xl lg:text-4xl">Get in touch!</span>
          </div>
        </div>
        <span class="hidden md:block h-0.5 bg-light mx-6 rounded-xl md:my-2 lg:my-6"></span>
        <p class="text-sm md:text-lg text-center text-lighter">Wanna get connected? Tell me about your projects? Or just say something funny? Send me a message!</p>
      </h2>
     
      
      <div class="md:ml-6">
        <input placeholder="Name" aria-label="Name" required="" class="mt-6 w-full flex-auto appearance-none rounded-md border border-light/60 bg-dark px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-lighter focus:border-lighter-500 focus:outline-none focus:ring-4 focus:ring-light/10 sm:text-sm" type="email">
        <input placeholder="Subject" aria-label="Subject" required="" class="mt-6  w-full flex-auto appearance-none rounded-md border border-light/60 bg-dark px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-lighter focus:border-lighter-500 focus:outline-none focus:ring-4 focus:ring-light/10 sm:text-sm" type="email">
        <input placeholder="Email address" aria-label="Email address" required="" class="mt-6  w-full flex-auto appearance-none rounded-md border border-light/60 bg-dark px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-lighter focus:border-lighter-500 focus:outline-none focus:ring-4 focus:ring-light/10 sm:text-sm" type="email">
        <textarea placeholder="Your message..." required="" class="mt-6 w-full min-h-[150px] appearance-none rounded-md border border-light/60 bg-dark px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-lighter focus:border-lighter-500 focus:outline-none focus:ring-4 focus:ring-light/10 sm:text-sm"></textarea>
        <div class="flex justify-center mt-6">
          <!-- <ChallengeV3 v-model="response" action="submit" /> -->
          <button class="inline-flex items-center gap-2 w-36 text-xl justify-center rounded-lg py-2 px-4 outline-offset-2 transition active:transition-none bg-dark font-semibold text-lighter border border-light/60 hover:bg-darker/60 hover:border-lighter active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 ml-4 flex-none" type="submit">Send</button>
        </div>
      </div>

      <!-- {{ response }} -->
      
    </form>

    <!-- Message after sending -->
    <div v-if="messageSent" class="mt-6">
      <p class="text-lg text-zinc-100">Thank you! Your message has been sent.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ChallengeV3 from './ChallengeV3.vue'

const renderBlur = ref(false)
const messageSent = ref(false)

const response = ref()

onMounted(() => {
  setTimeout(() => {
    renderBlur.value = true
  }, 150)
})


const sendMessage = () => {
  // Logic for sending the message (API calls, etc.)
  // For this example, we're just setting messageSent to true to show the confirmation message.
  messageSent.value = true;
}
</script>
