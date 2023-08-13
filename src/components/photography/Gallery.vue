<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div v-for="image in organizedImages" :key="image.src" class="" :class="image.landscape ? 'col-span-2 md:col-span-3' : ''">
      <img :src="image.src" alt="" class="w-full rounded-xl cursor-pointer" @click="openImage(image.src)"/>
    </div>
  </div>
  <!-- <div v-if="showImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click="closeImage">
    <img :src="selectedImage" class="max-w-full max-h-full rounded-xl" />
  </div> -->
  <!-- <Dialog :open="showImage" @close="setIsOpen" class="relative z-50">
    <div class="fixed inset-0 bg-darker/90" aria-hidden="true" />
    <div class="fixed inset-0 flex items-center justify-center min-w-96">
      <DialogPanel class="w-full max-w-sm bg-darker rounded-xl">
        <img :src="selectedImage" class="min-w-full max-h-full rounded-xl" />
      </DialogPanel>
    </div>
  </Dialog> -->
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

const images = ref([]);

const columns = computed(() => window.innerWidth >= 768 ? 3 : 2)

const showImage = ref(false)

const setIsOpen = (value) => {
  showImage.value = value
}

const selectedImage = ref(null);

const openImage = (src) => {
  selectedImage.value = src;
  showImage.value = true;
};

const closeImage = () => {
  showImage.value = false;
};

const organizedImages = computed(() => {
  if (images.value.length == 0) return []
  const result = []
  const remainingImages = [...images.value]
  let pendingPortraits = []

  while (remainingImages.length > 0) {

    const image = remainingImages.shift()

    if (image.landscape) {
      if (pendingPortraits.length > 0) {
        // If there's a single pending portrait, fill in rest of portraits depending on column length
        while (pendingPortraits.length < columns.value) {
          const nextPortraitIndex = remainingImages.findIndex(img => !img.landscape)
          if (nextPortraitIndex !== -1) {
            pendingPortraits.push(remainingImages.splice(nextPortraitIndex, 1)[0])
          } else {
            break
          }
        }
      }
      result.push(...pendingPortraits, image)
      pendingPortraits = []
    } else {
      pendingPortraits.push(image)
      if (pendingPortraits.length === columns.value) {
        result.push(...pendingPortraits)
        pendingPortraits = []
      }
    }
  }

  if (pendingPortraits.length) {
    result.push(...pendingPortraits)
  }

  return result

})

const loadImages = async () => {
  const imageModules = import.meta.glob('/src/assets/photography/*.{jpeg,png}')
  const imagePromises = Object.values(imageModules).map((importModule) =>
    importModule().then((module) => module.default)
  );
  const imagePaths = await Promise.all(imagePromises)
  const loadingPromises = []

  // Determine the orientation of each image
  for (const path of imagePaths) {
    const imgPromise = new Promise((resolve) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        resolve({
          src: path,
          landscape: img.width > img.height,
        });
      };
    });

    loadingPromises.push(imgPromise)
  }
  return Promise.all(shuffleArray(loadingPromises))
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

onMounted(async () => {
  images.value = await loadImages()
})




</script>
