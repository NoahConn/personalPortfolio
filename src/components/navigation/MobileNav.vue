<template>
  <Popover v-slot="{ open }" class="relative pointer-events-auto md:hidden">
    <PopoverButton
      :class="open ? '' : 'text-opacity-90'"
      class="group flex items-center rounded-full px-5 py-3 text-sm font-medium text-lighter shadow-lg shadow-zinc-800/5 ring-2 ring-zinc-900/5 backdrop-blur bg-zinc-800/60 dark:ring-light/30 dark:hover:ring-lighter/30"
    >
      <span>Menu</span>
      <ChevronDownIcon
        :class="open ? '' : 'text-opacity-70'"
        class="ml-3 h-auto my-auto w-4 stroke-lighter"
        aria-hidden="true"
      />
    </PopoverButton>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverOverlay class="fixed inset-0 z-50 backdrop-blur-sm bg-black/80" />
    </Transition>
    

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        v-slot="{ close }"
        class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
      >
      <div className="flex flex-row-reverse items-center justify-between">
        <PopoverButton aria-label="Close menu" className="-m-1 p-1">
          <svg class="h-6 w-6 text-zinc-500 dark:text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </PopoverButton>
        <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Navigation
        </h2>
      </div>
      <nav className="mt-6">
        <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
          <a v-for="tab in allTabs" class="block my-auto py-3 cursor-pointer" @click="nav.selectTab(tab.name); accept(close)">{{ tab.name }}</a>
        </ul>
      </nav>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed, inject } from 'vue';
const nav = inject('nav')
const allTabs = computed(() => nav.getAllTabs)
const accept = async (close) => {
  // await fetch('/accept-terms', { method: 'POST' })
  close()
}
</script>
