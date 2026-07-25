<script setup lang="ts">
import { Terminal } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-border bg-surface/50 py-6">
    <div class="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 text-sm text-text-muted sm:flex-row sm:justify-between">
      <div class="flex items-center gap-2">
        <Terminal :size="14" class="text-green" />
        <span>built with Vue 3 + Tailwind CSS</span>
      </div>
      <div>
        <span class="text-green">&copy;</span> {{ new Date().getFullYear() }}
      </div>
    </div>
  </footer>
</template>
