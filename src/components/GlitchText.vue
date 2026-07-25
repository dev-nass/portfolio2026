<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  text: string
  active?: boolean
  class?: string
}>(), {
  active: true,
})

const glitched = ref(props.text)
const original = props.text
const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'

function glitch() {
  if (!props.active) return
  const arr = original.split('')
  const count = Math.ceil(arr.length * 0.1)
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * arr.length)
    arr[idx] = chars[Math.floor(Math.random() * chars.length)]
  }
  glitched.value = arr.join('')
}

function reset() {
  glitched.value = original
}

onMounted(() => {
  if (!props.active) return
  setInterval(() => {
    glitch()
    setTimeout(reset, 100)
  }, 3000 + Math.random() * 2000)
})
</script>

<template>
  <span
    :class="props.class"
    class="inline-block"
    :style="{ animation: 'glitch 0.3s ease-in-out' }"
  >{{ glitched }}</span>
</template>
