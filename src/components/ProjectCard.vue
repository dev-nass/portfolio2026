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
  <div class="project-card group overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:border-green/30 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)]">
    <div class="flex items-center gap-2 border-b border-border bg-surface-light px-4 py-2.5">
      <span class="h-3 w-3 rounded-full bg-red/80" />
      <span class="h-3 w-3 rounded-full bg-amber/80" />
      <span class="h-3 w-3 rounded-full bg-green/80" />
      <span class="ml-2 text-xs text-text-muted">{{ name }} — ~/projects</span>
    </div>

    <div class="flex flex-col gap-3 p-4">
      <p class="text-sm text-text-muted">{{ description }}</p>

      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="t in tech"
          :key="t"
          class="rounded bg-green/10 px-2 py-0.5 text-xs text-green"
        >
          {{ t }}
        </span>
      </div>

      <div class="flex gap-3 pt-1">
        <a
          v-if="github"
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-green"
        >
          <Github :size="12" />
          $ open github
        </a>
        <a
          v-if="live"
          :href="live"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-cyan"
        >
          <ExternalLink :size="12" />
          $ open live
        </a>
      </div>
    </div>
  </div>
</template>
