<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'

defineProps<{
  name: string
  description: string
  tech: string[]
  github?: string
  live?: string
}>()
</script>

<template>
  <div class="project-card group flex flex-col overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-green/30 hover:shadow-[0_0_15px_var(--color-green)]">
    <div class="border-b border-border bg-mantle px-4 py-3">
      <span class="text-[15px] font-bold tracking-tight text-text">{{ name }}</span>
    </div>

    <div class="flex flex-1 flex-col gap-3 p-5">
      <p class="text-sm leading-relaxed text-subtext1">{{ description }}</p>

      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="t in tech"
          :key="t"
          class="bg-green/10 px-2 py-1 text-xs font-medium text-green"
        >
          {{ t }}
        </span>
      </div>

      <div class="mt-auto flex gap-3 pt-2">
        <a
          v-if="github"
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-text"
        >
          <Github :size="14" />
          GitHub
        </a>
        <a
          v-if="live"
          :href="live"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-text"
        >
          <ExternalLink :size="14" />
          Live demo
        </a>
      </div>
    </div>
  </div>
</template>
