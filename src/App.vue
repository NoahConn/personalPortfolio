<template>
  <div class="retro-background min-h-screen bg-fade-bottom flex justify-center">
    <div 
      class="container flex flex-col px-4 w-full xl:px-20 md:pt-12 transition-opacity duration-300 ease-in-out"
      :class="{ 'opacity-0': !initLoad, 'opacity-100': initLoad }"
    >
      <Header class="sticky top-8 h-16 mb-6 z-50" />
      <!-- CONTENT -->
      <div 
        class="transition-opacity ease-in-out duration-300 mt-4 mb-8 md:pt-2 max-h-full overflow-y-auto"
        :class="{'opacity-0': visible == false, 'opacity-100': visible == true}"
      >
        <div v-if="activeTab == 'Home'" class="" 
        >
          <HomeBio />
          <SocialIcons />
          <ResumeFAB />
        </div>
        <div v-else-if="activeTab == 'About'">
          <About/>
        </div>
        <div v-else-if="activeTab == 'Projects'">
          <Projects/>
        </div>
        <div v-else-if="activeTab == 'Skills'">
          <Skills />
        </div>
        <div v-else-if="activeTab == 'Photography'">
          <Photography />
        </div>
        <div v-else-if="activeTab == 'Contact'">
          <Contact />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="bg-light px-4 py-2">
      
  </div> -->
</template>
 
<script setup>
import Header from './components/header.vue'
import SocialIcons from './components/home/SocialIcons.vue'
import HomeBio from './components/home/HomeBio.vue'
import ResumeFAB from './components/home/ResumeFAB.vue'
import useNavigationStore from './store/navigationStore'
import { computed, provide, ref } from 'vue'
import About from './components/about/About.vue'
import Projects from './components/projects/Projects.vue'
import Skills from './components/skills/Skills.vue'
import Photography from './components/photography/Photography.vue'
import Contact from './components/contact/Contact.vue'

const nav = useNavigationStore()
provide('nav', nav)

const activeTab = computed(() => nav.getActiveTab)
const visible = computed(() => nav.getVisible)


const initLoad = ref(false)
setTimeout(() => {
  initLoad.value = true
}, 1)
</script>