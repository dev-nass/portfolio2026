import { ref } from 'vue'

const isDark = ref(true)

export function useTheme() {
    function toggle() {
        isDark.value = !isDark.value
        document.documentElement.classList.toggle('dark', isDark.value)
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }

    function init() {
        const saved = localStorage.getItem('theme')
        if (saved) {
            isDark.value = saved === 'dark'
        } else {
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        document.documentElement.classList.toggle('dark', isDark.value)
    }

    return { isDark, toggle, init }
}
