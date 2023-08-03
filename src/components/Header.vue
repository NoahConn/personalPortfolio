<template>
  <div class="px-4 w-full flex justify-end md:justify-center">
    <img 
      class="inline-block h-16 w-16 md:me-4 rounded-full ring-1 ring-light cursor-pointer transition-opacity ease-in-out duration-150" 
      @click="nav.selectTab('Home')"
      :class="{ 'opacity-0': activeTab == 'Home' || selectedTab == 'Home', 'opacity-100': activeTab != 'Home' && selectedTab != 'Home' }"
      src="../assets/bioPhotos/3A2D9369-1CEE-481C-9055-3855A0ADD6F1_1_201_a.jpeg" 
      alt="" 
    />
    <div class="my-auto hidden md:block">
      <DesktopNav/>
    </div>
    <div class="my-auto ms-4 hidden">
      <DarkModeToggle />
    </div>
    <div class="my-auto ps-4">
      <MobileNav/>
    </div>
    <!-- <div class="flex">
      
    </div> -->
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import MobileNav from './navigation/MobileNav.vue'
import DesktopNav from './navigation/DesktopNav.vue'
import DarkModeToggle from './DarkModeToggle.vue'
const nav = inject('nav')
const activeTab = computed(() => nav.getActiveTab)
const selectedTab = computed(() => nav.getSelectedTab)
</script>

