<template>
  <div class="flex justify-center my-8 md:my-12">
    <button @click="openResume" class="py-4 px-12 bg-light ring-2 md:ring-4 ring-zinc-600 text-zinc-600 rounded-full font-extrabold text-lg transition duration-200 shadow-xl hover:text-zinc-900 hover:ring-zinc-900">R E S U M E</button>
  </div>
</template>

<script setup>
const openResume = () => {
  const pdfUrl = 'https://drive.google.com/file/d/1wNYuULRf1Nqsw_PyFx_j8pepJn1ojrpP/view?usp=drive_link'
  window.open(pdfUrl, '_blank')
}
</script>