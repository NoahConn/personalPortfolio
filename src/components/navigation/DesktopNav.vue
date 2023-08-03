<template>
  <div class="pointer-events-auto hidden md:block">
    <nav>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm xl:text-lg font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-light/60 backdrop-blur dark:bg-zinc-800/60 dark:text-zinc-200 dark:ring-light/30">
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
import { computed, inject } from 'vue';

const nav = inject('nav')
const selectedTab = computed(() => nav.getSelectedTab)
const allTabs = computed(() => nav.getAllTabs)
</script>
