<template>
  <div></div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps(['action'])
const { action } = props

const response = ref(null);

const executeCaptcha = async () => {
  if (window.grecaptcha) {
    const token = await window.grecaptcha.execute('6Lc-iagnAAAAAKnXsvD3HOyqUBzoUUV-qtCtFQBq', { action })
    response.value = token
    emit('update:modelValue', token)
  }
}

watch(() => executeCaptcha());
</script>