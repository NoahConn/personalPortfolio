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
    <form @submit.prevent="sendMessage" class="rounded-2xl border border-light min-h-full p-6">

      <div >
        <!-- Text -->
        <div v-if="!messageSent && !sendingMessage" class="flex flex-col md:flex-row justify-center transition-all ease-in-out duration-500"
          :class="{ 'opacity-100': visibleForm, 'opacity-0': !visibleForm }"
        >
          <h2  class="text-sm font-semibold text-zinc-100 md:w-3/5 lg:w-1/3 flex flex-col justify-between mt-6 md:mb-28">
            <div class="flex flex-row md:justify-center">
              <div class="flex flex-row text-center m-auto md:flex-col md:justify-center">
                <div class="flex justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-12 w-12 md:h-16 lg:h-24 lg:w-24 flex-none lg:mb-4">
                    <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" class="fill-darker/0 stroke-light"></path>
                    <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" class="stroke-light"></path>
                  </svg>
                </div>
                
                <span class="ml-3 md:ml-0 lg:ml-3 my-auto text-2xl lg:text-4xl">Get in touch!</span>
              </div>
            </div>
            <span class="hidden md:block h-0.5 bg-light mx-6 rounded-xl md:my-2 lg:my-6"></span>
            <p class="text-sm md:text-lg text-center text-lighter">Wanna get connected? Tell me about your projects? Or just say something funny? Send me a message!</p>
          </h2>
          <!-- Inputs -->
          <div v-if="!messageSent && !sendingMessage" class="md:ml-6 md:min-h-full">
            <input v-model="name" placeholder="Name" aria-label="Name" required class="mt-6 w-full flex-auto appearance-none rounded-md border border-light/60 bg-dark px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-lighter/60 focus:border-lighter-500 focus:outline-none focus:ring-4 focus:ring-light/10 sm:text-sm" type="text">
            <input v-model="subject" placeholder="Subject" aria-label="Subject" required class="mt-6  w-full flex-auto appearance-none rounded-md border border-light/60 bg-dark px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-lighter/60 focus:border-lighter-500 focus:outline-none focus:ring-4 focus:ring-light/10 sm:text-sm" type="text">
            <input v-model="email" placeholder="Email address" aria-label="Email address" required class="mt-6  w-full flex-auto appearance-none rounded-md border border-light/60 bg-dark px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-lighter/60 focus:border-lighter-500 focus:outline-none focus:ring-4 focus:ring-light/10 sm:text-sm" type="email">
            <textarea v-model="message" placeholder="Your message..." required class="mt-6 w-full min-h-[150px] appearance-none rounded-md border border-light/60 bg-dark px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-lighter/60 focus:border-lighter-500 focus:outline-none focus:ring-4 focus:ring-light/10 sm:text-sm"></textarea>
            <div class="flex justify-center mt-6">
              <!-- <ChallengeV3 v-model="response" action="submit" /> -->
              <button class="inline-flex items-center gap-2 w-36 text-xl justify-center rounded-lg py-2 px-4 outline-offset-2 transition active:transition-none font-semibold text-lighter border border-light/60 hover:bg-darker/60 hover:border-lighter active:bg-zinc-800 active:text-zinc-100/70 bg-zinc-700 ml-4 flex-none" type="submit">Send</button>
            </div>
          </div>
        </div>
        
        <!-- Loading Widget -->
        <div v-show="sendingMessage" class="flex justify-center w-full py-6 my-auto md:min-h-full">
          <div class="transition-all ease-in-out duration-500"
            :class="{ 'opacity-0': !animate, 'opacity-100': animate }"
          >
            <div class="flex w-full items-center justify-center">
              <div class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-light to-darker ring-1 ring-light animate-spin">
                <div class=" h-10 w-10 rounded-full bg-zinc-800/80 ring-1 ring-light"></div>
              </div>
            </div>
          </div>
          
        </div>
        <!-- Thank you / Error -->
        <div v-if="messageSent">
          <div class="transition-all ease-in-out duration-500"
            :class="{ 'opacity-0': !showThanks, 'opacity-100': showThanks }"
          >
            <div class="flex w-full justify-center">
              <p class="text-lg text-zinc-100">Thank you! Your message has been sent.</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ChallengeV3 from './ChallengeV3.vue'
import axios from 'axios'

const renderBlur = ref(false)


const response = ref()

onMounted(() => {
  setTimeout(() => {
    renderBlur.value = true
  }, 150)
})

const appState = import.meta.env.MODE

const name = ref('')
const subject = ref('')
const email = ref('')
const message = ref('')

const messageSent = ref(false)
const sendingMessage = ref(false)
const visibleForm = ref(true)
const animate = ref(false)
const showThanks = ref(false)
const error = ref('')


const sendMessage = async () => {
  visibleForm.value = false
  setTimeout(() => {
    sendingMessage.value = true
  }, 500)
  
  setTimeout(() => {
    animate.value = true
  }, 501)
  const messageBundle = {
    name: name.value, 
    subject: subject.value, 
    email: email.value, 
    message: message.value 
  }
  await sendContactMessage(messageBundle)
}

const sendContactMessage = async (messageBundle) => {
  const url = appState == 'development' ? 'http://127.0.0.1:5001/personalportfolio-45314/us-central1/sendContactMessage' : 'https://us-central1-personalportfolio-45314.cloudfunctions.net/sendContactMessage'
  try {
    const response = await axios.post(url, messageBundle)
  } catch (error) {
    console.error('Error sending message:', error)
    error.value = error
  }
  animate.value = false
  setTimeout(() => {
    sendingMessage.value = false
    messageSent.value = true
  }, 500)
  setTimeout(() => {
    showThanks.value = true
  }, 501)
}
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #1f2937 inset !important;
  box-shadow: 0 0 0 30px #1f2937 inset !important;
  -webkit-text-fill-color: #FCF7ED !important;
}
</style>
