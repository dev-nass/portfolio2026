<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = withDefaults(defineProps<{
  text: string
  speed?: number
  delay?: number
  class?: string
}>(), {
  speed: 50,
  delay: 0,
})

const emit = defineEmits<{
  complete: []
}>()

const displayText = ref('')
const started = ref(false)
const done = ref(false)

onMounted(() => {
  setTimeout(() => {
    started.value = true
    let i = 0
    const interval = setInterval(() => {
      if (i < props.text.length) {
        displayText.value += props.text[i]
        i++
      } else {
        clearInterval(interval)
        done.value = true
        emit('complete')
      }
    }, props.speed)
  }, props.delay)
})

watch(() => props.text, () => {
  displayText.value = ''
  started.value = false
  done.value = false
})
</script>

<template>
  <span :class="props.class">
    {{ displayText }}<span
      v-if="!done"
      class="cursor-blink text-green"
    >_</span>
  </span>
</template>
