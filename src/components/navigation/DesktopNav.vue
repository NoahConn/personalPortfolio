<template>
  <div class="pointer-events-auto hidden md:block">
    <nav>
      <ul class="flex rounded-full transition duration-1000 backdrop-blur-0 px-3 text-sm lg:text-lg font-medium shadow-lg shadow-zinc-800/5 ring-1 bg-zinc-800/60 text-zinc-200 ring-light/30"
        :class="{'backdrop-blur-sm': renderBlur == true}"
      >
        <Link v-for="tab in allTabs" class="relative block px-3 py-2 transition group text-lighter duration-150 cursor-pointer">
          <a @click="nav.selectTab(tab.name)">{{ tab.name }}</a>
          <span :class="[
              'block rounded-lg max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-light',
              { 'max-w-full': selectedTab == tab.name }
            ]"
          ></span>
        </Link>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref } from 'vue';
const renderBlur = ref(false)
onMounted(() => {
  setTimeout(() => {
    renderBlur.value = true
  }, 150)
})
const nav = inject('nav')
const selectedTab = computed(() => nav.getSelectedTab)
const allTabs = computed(() => nav.getAllTabs)
</script>
