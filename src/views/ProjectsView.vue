<script setup lang="ts">
import TerminalWindow from '@/components/TerminalWindow.vue'
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-12 md:py-20">
    <TerminalWindow title="ls ~/projects">
      <p class="text-text-muted">$ ls ~/projects</p>
      <p class="mt-2 text-amber">TODO — Coming soon</p>
    </TerminalWindow>
  </section>
</template>
