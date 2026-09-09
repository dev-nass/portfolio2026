<script setup lang="ts">
// Simplified: renders static text immediately for readability.
// Props kept for backwards compat — no typing animation, no cursor blink.
withDefaults(defineProps<{
  text: string
  speed?: number
  delay?: number
  class?: string
}>(), {
  speed: 50,
  delay: 0,
})
</script>

<template>
  <span :class="$props.class">{{ text }}</span>
</template>
