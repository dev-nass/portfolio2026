<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-border bg-surface">
    <div class="flex items-center gap-2 border-b border-border bg-surface-light px-4 py-2.5">
      <span class="h-3 w-3 rounded-full bg-red/80" />
      <span class="h-3 w-3 rounded-full bg-peach/80" />
      <span class="h-3 w-3 rounded-full bg-green/80" />
      <span class="ml-2 text-xs text-text-muted">{{ title }}</span>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
