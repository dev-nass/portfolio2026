<script setup lang="ts">
import { Github, Linkedin, FileText } from "lucide-vue-next";
import { useTheme } from "@/composables/useTheme";

const name = "Jonas Vince Macawile";
const title = "Full-Stack Developer";
const about = `I build things for the web.
Currently focused on providing the solution for business owners
and apply my knowledge on tech alongside it.`;

const { isDark } = useTheme();
</script>

<template>
    <section class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28">
        <div
            class="flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-8 lg:gap-12"
        >
            <!-- Portrait Image — hidden on mobile, shown on md+ -->
            <div class="hidden w-[30%] flex-shrink-0 md:block">
                <div
                    class="relative h-full overflow-hidden border border-border"
                >
                    <img
                        src="/images/portrait.png"
                        alt="Portrait"
                        class="portrait-img block h-full w-full object-cover transition-opacity duration-400"
                        :class="isDark ? 'opacity-100' : 'opacity-0'"
                    />
                    <img
                        src="/images/portrait-glasses.png"
                        alt="Portrait with glasses"
                        class="portrait-img absolute inset-0 block h-full w-full object-cover transition-opacity duration-400"
                        :class="isDark ? 'opacity-0' : 'opacity-100'"
                    />
                </div>
            </div>

            <div class="min-w-0 flex-1">
                <div class="border border-border bg-surface p-6 md:p-8">
                    <div class="space-y-5">
                        <div>
                            <h1 class="text-3xl font-bold tracking-tight text-text md:text-4xl">{{ name }}</h1>
                            <p class="mt-2 text-base text-peach">{{ title }}</p>
                        </div>
                        <p class="whitespace-pre-line text-[15px] leading-relaxed text-text-muted">{{ about }}</p>
                        <div class="flex flex-wrap gap-3 pt-2">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 border border-border bg-mantle px-4 py-2 text-sm text-text transition-colors hover:border-border-light"
                            >
                                <Github :size="16" />
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 border border-border bg-mantle px-4 py-2 text-sm text-text transition-colors hover:border-border-light"
                            >
                                <Linkedin :size="16" />
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                class="inline-flex items-center gap-2 bg-green px-4 py-2 text-sm font-medium text-crust hover:bg-green/90"
                            >
                                <FileText :size="16" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll indicator - plain -->
        <div class="mt-16 flex justify-center">
            <div class="flex flex-col items-center gap-2 text-text-muted">
                <span class="text-xs">Scroll down</span>
                <div class="h-8 w-px bg-border" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.portrait-img {
    transition: opacity 0.4s ease;
}
</style>
