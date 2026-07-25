<script setup lang="ts">
import { ref } from 'vue'
import TypeWriter from '@/components/TypeWriter.vue'

const headerDone = ref(false)

const categories = [
  {
    label: 'Languages',
    color: 'green',
    skills: [
      { name: 'TypeScript', status: 'proficient', year: 2022 },
      { name: 'JavaScript', status: 'proficient', year: 2021 },
      { name: 'Python', status: 'familiar', year: 2023 },
      { name: 'Go', status: 'familiar', year: 2024 },
      { name: 'Rust', status: 'learning', year: 2025 },
    ],
  },
  {
    label: 'Frameworks',
    color: 'cyan',
    skills: [
      { name: 'Vue 3', status: 'proficient', year: 2022 },
      { name: 'React', status: 'familiar', year: 2023 },
      { name: 'Node.js', status: 'proficient', year: 2022 },
      { name: 'Tailwind CSS', status: 'proficient', year: 2022 },
    ],
  },
  {
    label: 'Tools',
    color: 'amber',
    skills: [
      { name: 'Git', status: 'proficient', year: 2021 },
      { name: 'Docker', status: 'familiar', year: 2023 },
      { name: 'Linux', status: 'proficient', year: 2022 },
      { name: 'PostgreSQL', status: 'familiar', year: 2023 },
      { name: 'Redis', status: 'familiar', year: 2024 },
    ],
  },
]

function statusColor(status: string) {
  if (status === 'proficient') return 'text-green'
  if (status === 'familiar') return 'text-amber'
  return 'text-text-muted'
}
</script>

<template>
  <section id="skills" class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28">
    <!-- Header -->
    <div class="mb-10">
      <span class="text-green">$</span>
      <span class="text-text-muted"> htop --filter=</span><span class="text-green font-bold">skills</span>
      <div class="mt-1 text-amber">
        <TypeWriter
          text="PID   USER     PRI  NI  VIRT  RES  SHR  S  CPU%  MEM%  COMMAND"
          :speed="15"
          :delay="300"
          @complete="headerDone = true"
        />
      </div>
    </div>

    <!-- Skills Table -->
    <div
      v-if="headerDone"
      class="overflow-x-auto rounded-lg border border-border bg-surface"
    >
      <table class="w-full min-w-[520px] font-mono text-sm">
        <thead>
          <tr class="border-b border-border bg-surface-light text-left text-xs text-text-muted">
            <th class="px-4 py-2">PID</th>
            <th class="px-4 py-2">COMMAND</th>
            <th class="px-4 py-2">STATUS</th>
            <th class="px-4 py-2 text-right">YEAR</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="cat in categories" :key="cat.label">
            <!-- Category Header -->
            <tr class="border-b border-border/50 bg-surface-light/50">
              <td colspan="4" class="px-4 py-1.5 text-xs font-bold uppercase tracking-wider" :class="`text-${cat.color}`">
                [{{ cat.label }}]
              </td>
            </tr>
            <!-- Skills -->
            <tr
              v-for="(skill, i) in cat.skills"
              :key="skill.name"
              class="border-b border-border/30 transition-colors hover:bg-surface-light/30"
            >
              <td class="px-4 py-2 text-text-muted">{{ String(i + 1).padStart(3, '0') }}</td>
              <td class="px-4 py-2">{{ skill.name }}</td>
              <td class="px-4 py-2">
                <span :class="statusColor(skill.status)">{{ skill.status }}</span>
              </td>
              <td class="px-4 py-2 text-right text-text-muted">{{ skill.year }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>
