<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Terminal, User, FolderKanban, Layers, Briefcase, Mail, Menu, X } from 'lucide-vue-next'
import ThemeToggle from '@/components/ThemeToggle.vue'

const mobileOpen = ref(false)
const activeId = ref('hero')

const links = [
  { href: '#hero', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: FolderKanban },
  { href: '#skills', label: 'Skills', icon: Layers },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Mail },
]

function scrollTo(href: string) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  const ids = links.map(l => l.href.slice(1))
  const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as Element[]
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      }
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  )
  elements.forEach(el => observer!.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <!-- Mobile top bar -->
  <header class="sticky top-0 z-40 flex h-12 items-center justify-between border-b border-border bg-bg px-4 lg:hidden">
    <a href="#hero" class="flex items-center gap-2 text-text" @click.prevent="scrollTo('#hero')">
      <Terminal :size="18" class="text-green" />
      <span class="text-sm font-bold">dev-nass</span>
    </a>
    <div class="flex items-center gap-2">
      <ThemeToggle />
      <button
        class="flex h-8 w-8 items-center justify-center rounded-md text-text-muted hover:text-text"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = !mobileOpen"
      >
        <Menu v-if="!mobileOpen" :size="20" />
        <X v-else :size="20" />
      </button>
    </div>
  </header>

  <!-- Mobile drawer -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="mobileOpen" class="fixed inset-0 z-50 lg:hidden">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="mobileOpen = false" />
      <nav class="absolute left-0 top-0 flex h-full w-[280px] flex-col border-r border-border bg-surface px-4 py-6 shadow-xl">
        <div class="mb-8 flex items-center gap-2 text-text">
          <Terminal :size="18" class="text-green" />
          <span class="text-sm font-bold">dev-nass</span>
        </div>
        <div class="flex flex-col gap-1">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors"
            :class="activeId === link.href.slice(1) ? 'bg-mantle text-text' : 'text-text-muted hover:bg-mantle hover:text-text'"
            @click.prevent="scrollTo(link.href)"
          >
            <component :is="link.icon" :size="18" />
            {{ link.label }}
          </a>
        </div>
        <div class="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span class="text-xs text-text-muted">Theme</span>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  </Transition>

  <!-- Desktop sidebar - fixed smaller width, no collapse -->
  <aside
    class="sticky top-0 hidden h-screen w-[200px] shrink-0 flex-col border-r border-border bg-surface lg:flex"
  >
    <!-- Header -->
    <div class="flex h-14 items-center gap-2 border-b border-border px-4">
      <a
        href="#hero"
        class="flex items-center gap-2 text-text"
        @click.prevent="scrollTo('#hero')"
      >
        <Terminal :size="18" class="shrink-0 text-green" />
        <span class="truncate text-sm font-bold">dev-nass</span>
      </a>
    </div>

    <!-- Nav -->
    <nav class="flex-1 overflow-y-auto px-2 py-4">
      <div class="flex flex-col gap-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="flex items-center gap-3 rounded-md px-2.5 py-2.5 text-sm transition-colors"
          :class="activeId === link.href.slice(1) ? 'bg-mantle text-text' : 'text-text-muted hover:bg-mantle hover:text-text'"
          :aria-current="activeId === link.href.slice(1) ? 'page' : undefined"
          @click.prevent="scrollTo(link.href)"
        >
          <component :is="link.icon" :size="18" class="shrink-0" />
          <span class="truncate">{{ link.label }}</span>
        </a>
      </div>
    </nav>

    <!-- Footer - only theme toggle, no availability -->
    <div class="border-t border-border p-3">
      <div class="flex items-center justify-between">
        <span class="text-xs text-text-muted">Theme</span>
        <ThemeToggle />
      </div>
    </div>
  </aside>
</template>
