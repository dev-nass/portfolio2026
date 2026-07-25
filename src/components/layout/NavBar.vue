<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Terminal, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const mobileOpen = ref(false)

const links = [
  { path: '/', label: 'home', display: '~' },
  { path: '/projects', label: 'projects', display: 'projects' },
  { path: '/skills', label: 'skills', display: 'skills' },
  { path: '/experience', label: 'experience', display: 'exp' },
  { path: '/contact', label: 'contact', display: 'contact' },
]

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <nav class="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
    <div class="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
      <RouterLink to="/" class="flex items-center gap-2 text-green hover:glow-green transition-all">
        <Terminal :size="16" />
        <span class="text-sm font-bold">~/portfolio</span>
      </RouterLink>

      <div class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="group relative px-3 py-1.5 text-sm text-text-muted transition-colors hover:text-text"
          :class="{ 'text-green': isActive(link.path) }"
        >
          <span class="text-text-muted group-hover:text-green">$</span>
          {{ link.display }}
          <span
            v-if="isActive(link.path)"
            class="absolute bottom-0 left-3 right-3 h-px bg-green"
          />
        </RouterLink>
      </div>

      <button
        class="text-text-muted hover:text-green md:hidden"
        @click="mobileOpen = !mobileOpen"
      >
        <Menu v-if="!mobileOpen" :size="20" />
        <X v-else :size="20" />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="border-t border-border bg-surface px-4 pb-4 pt-2 md:hidden"
      >
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="block py-2 text-sm text-text-muted transition-colors hover:text-green"
          :class="{ 'text-green': isActive(link.path) }"
          @click="mobileOpen = false"
        >
          <span class="text-text-muted">$</span> {{ link.display }}
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>
