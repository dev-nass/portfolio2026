<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="overflow-hidden border border-border bg-surface">
    <div class="border-b border-border bg-mantle px-4 py-3">
      <span class="text-sm font-medium text-text">{{ title }}</span>
    </div>
    <div class="p-5">
      <slot />
    </div>
  </div>
</template>
