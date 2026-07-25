<script setup lang="ts">
import { ref } from 'vue'
import TypeWriter from '@/components/TypeWriter.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const headerDone = ref(false)

const projects = [
  {
    name: 'portfolio-2026',
    description: 'Terminal-styled portfolio built with Vue 3, featuring ASCII art and typing animations.',
    tech: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/',
    live: 'https://example.com',
  },
  {
    name: 'cli-dashboard',
    description: 'A real-time system monitoring dashboard with a retro terminal interface.',
    tech: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    github: 'https://github.com/',
  },
  {
    name: 'api-gateway',
    description: 'Lightweight API gateway with rate limiting, auth, and request logging.',
    tech: ['Go', 'Redis', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/',
    live: 'https://example.com',
  },
  {
    name: 'dotfiles',
    description: 'Personal development environment configs — neovim, tmux, zsh, and more.',
    tech: ['Lua', 'Shell', 'Nix'],
    github: 'https://github.com/',
  },
]
</script>

<template>
  <section id="projects" class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28">
    <!-- Header -->
    <div class="mb-10">
      <span class="text-green">$</span>
      <span class="text-text-muted"> ls ~/</span><span class="text-green font-bold">projects</span>
      <div class="mt-1 text-amber">
        <TypeWriter
          text="drwxr-xr-x  4 user  staff  — showing 4 projects"
          :speed="25"
          :delay="300"
          @complete="headerDone = true"
        />
      </div>
    </div>

    <!-- Project Grid -->
    <div
      v-if="headerDone"
      class="grid gap-4 sm:grid-cols-2"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        v-bind="project"
      />
    </div>
  </section>
</template>
