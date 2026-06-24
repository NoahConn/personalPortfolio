<template>
  <div
    class="transition duration-1000 backdrop-blur-0 hover:backdrop-blur-0 mt-4 md:mt-0 text bg-zinc-800/80 text-lighter rounded-2xl p-6"
    :class="{ 'backdrop-blur-sm': renderBlur == true }"
  >
    <div class="flex justify-evenly mb-3">
      <span class="block h-0.5 bg-lighter w-full me-5 rounded-xl my-auto"></span>
      <h1 class="text-4xl md:text-6xl font-bold text-center text-lighter mb-4">Contact</h1>
      <span class="block h-0.5 bg-lighter w-full ms-5 rounded-xl my-auto"></span>
    </div>

    <div class="rounded-2xl border border-light min-h-full p-6 flex flex-col items-center text-center">
      <!-- Mail icon -->
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-16 w-16 md:h-24 md:w-24 flex-none mb-4">
        <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" class="fill-darker/0 stroke-light"></path>
        <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" class="stroke-light"></path>
      </svg>

      <span class="text-2xl lg:text-4xl">Get in touch!</span>
      <span class="block h-0.5 bg-light w-2/3 rounded-xl my-4"></span>
      <p class="text-sm md:text-lg text-lighter max-w-md">
        Wanna get connected, tell me about your projects, or just say something funny?
        Drop me an email &mdash; or find me on the links below.
      </p>

      <a
        :href="`mailto:${contactEmail}`"
        class="inline-flex items-center gap-2 mt-6 text-xl justify-center rounded-lg py-2 px-6 outline-offset-2 transition active:transition-none font-semibold text-lighter border border-light/60 hover:bg-darker/60 hover:border-lighter active:bg-zinc-800 active:text-zinc-100/70 bg-zinc-700"
      >
        Email me
      </a>

      <SocialIcons class="w-full max-w-xs" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SocialIcons from '../home/SocialIcons.vue'

// Public contact address for the portfolio. Override at build time with VITE_CONTACT_EMAIL.
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'noah@cascadetechconsulting.com'

const renderBlur = ref(false)

onMounted(() => {
  setTimeout(() => {
    renderBlur.value = true
  }, 150)
})
</script>
