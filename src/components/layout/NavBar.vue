<script setup lang="ts">
import { ref } from 'vue'
import { Terminal, Menu, X } from 'lucide-vue-next'

const mobileOpen = ref(false)

const links = [
  { href: '#hero', label: '~' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'exp' },
  { href: '#contact', label: 'contact' },
]

function scrollTo(href: string) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav class="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
    <div class="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
      <a
        href="#hero"
        class="flex items-center gap-2 text-green transition-all hover:glow-green"
        @click.prevent="scrollTo('#hero')"
      >
        <Terminal :size="16" />
        <span class="text-sm font-bold">~/portfolio</span>
      </a>

      <div class="hidden items-center gap-1 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="group relative px-3 py-1.5 text-sm text-text-muted transition-colors hover:text-text"
          @click.prevent="scrollTo(link.href)"
        >
          <span class="text-text-muted group-hover:text-green">$</span>
          {{ link.label }}
        </a>
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
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="block py-2 text-sm text-text-muted transition-colors hover:text-green"
          @click.prevent="scrollTo(link.href)"
        >
          <span class="text-text-muted">$</span> {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>
