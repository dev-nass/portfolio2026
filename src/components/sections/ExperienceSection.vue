<script setup lang="ts">
import { ref } from 'vue'
import TypeWriter from '@/components/TypeWriter.vue'

const headerDone = ref(false)

const experiences = [
  {
    hash: 'a3f7b2c',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    date: '2024 — Present',
    achievements: [
      'Built and deployed 5+ client websites with Vue and Tailwind',
      'Developed custom WordPress themes and REST API integrations',
      'Reduced page load times by 40% through optimization',
    ],
  },
  {
    hash: 'e9d1f4a',
    company: 'Tech Startup Inc.',
    role: 'Frontend Developer Intern',
    date: '2023 — 2024',
    achievements: [
      'Implemented responsive dashboards with React and D3.js',
      'Collaborated with design team to improve UX by 25%',
      'Wrote unit tests increasing code coverage to 85%',
    ],
  },
  {
    hash: 'b5c8e1d',
    company: 'University Lab',
    role: 'Research Assistant',
    date: '2022 — 2023',
    achievements: [
      'Automated data pipeline processing 10k+ records daily',
      'Built internal tools with Python and PostgreSQL',
      'Presented findings at 2 department conferences',
    ],
  },
]
</script>

<template>
  <section id="experience" class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28">
    <!-- Header -->
    <div class="mb-10">
      <span class="text-green">$</span>
      <span class="text-text-muted"> git log --oneline --</span><span class="text-green font-bold">experience</span>
      <div class="mt-1 text-amber">
        <TypeWriter
          text="commit 3 entries — sorted by date"
          :speed="20"
          :delay="300"
          @complete="headerDone = true"
        />
      </div>
    </div>

    <!-- Timeline -->
    <div v-if="headerDone" class="space-y-6">
      <div
        v-for="exp in experiences"
        :key="exp.hash"
        class="rounded-lg border border-border bg-surface p-5 font-mono text-sm transition-colors hover:border-green/20"
      >
        <!-- Commit header -->
        <div class="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
          <span class="text-green">commit</span>
          <span class="text-purple">{{ exp.hash }}</span>
          <span class="text-text-muted">(HEAD)</span>
        </div>
        <div class="mb-1 text-xs text-text-muted">
          Author: <span class="text-cyan">{{ exp.company }}</span>
        </div>
        <div class="mb-3 text-xs text-text-muted">
          Date: <span class="text-amber">{{ exp.date }}</span>
        </div>

        <!-- Role -->
        <div class="mb-3 pl-4 text-base font-bold text-text">
          {{ exp.role }}
        </div>

        <!-- Achievements -->
        <ul class="space-y-1 pl-4">
          <li
            v-for="(item, i) in exp.achievements"
            :key="i"
            class="text-xs text-text-muted"
          >
            <span class="text-green">-</span> {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
