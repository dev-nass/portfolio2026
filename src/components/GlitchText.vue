<script setup lang="ts">
// Simplified: renders static text without glitch for readability.
// Props kept for backwards compat.
withDefaults(defineProps<{
  text: string
  active?: boolean
  class?: string
}>(), {
  active: false,
})
</script>

<template>
  <span :class="$props.class">{{ text }}</span>
</template>
