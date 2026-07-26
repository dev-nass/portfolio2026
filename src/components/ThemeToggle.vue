<script setup lang="ts">
import { onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggle, init } = useTheme()

onMounted(() => {
    init()
})
</script>

<template>
    <button
        @click="toggle"
        class="flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-border-light hover:text-text"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
        <Sun v-if="isDark" :size="14" />
        <Moon v-else :size="14" />
    </button>
</template>
