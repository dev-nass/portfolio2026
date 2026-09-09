<script setup lang="ts">
import { Github, Linkedin, FileText } from "lucide-vue-next";
import { useTheme } from "@/composables/useTheme";

const name = "Jonas Vince Macawile";
const title = "Full-Stack Developer";
const about = `I build things for the web. Currently a 4th year Information Systems student with a focus on turning business challenges into clean tech solutions.`;

const { isDark } = useTheme();
</script>

<template>
    <section id="hero" class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28">
        <div
            class="flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-8 lg:gap-12"
        >
            <!-- Portrait Image — hidden on mobile, shown on md+ -->
            <div class="hidden w-[30%] flex-shrink-0 md:block">
                <div
                    class="relative h-full overflow-hidden rounded-xl border border-border"
                >
                    <!-- Dark mode image (normal) -->
                    <img
                        src="/images/portrait.png"
                        alt="Portrait of Jonas Vince Macawile"
                        class="portrait-img block h-full w-full object-cover transition-opacity duration-400"
                        :class="isDark ? 'opacity-100' : 'opacity-0'"
                    />
                    <!-- Light mode image (glasses) -->
                    <img
                        src="/images/portrait-glasses.png"
                        alt="Portrait of Jonas Vince Macawile with glasses"
                        class="portrait-img absolute inset-0 block h-full w-full object-cover transition-opacity duration-400"
                        :class="isDark ? 'opacity-0' : 'opacity-100'"
                    />
                </div>
            </div>

            <!-- Text Content - clean readable, unified mono -->
            <div class="min-w-0 flex-1">
                <div class="rounded-xl border border-border bg-surface p-6 md:p-8">
                    <div class="space-y-5">
                        <div>
                            <h1 class="text-3xl font-bold tracking-tight text-text md:text-4xl">
                                {{ name }}
                            </h1>
                            <p class="mt-2 text-base text-peach">{{ title }}</p>
                        </div>

                        <p class="whitespace-pre-line text-[15px] leading-relaxed text-text-muted">
                            {{ about }}
                        </p>

                        <div class="flex flex-wrap gap-3 pt-2">
                            <a
                                href="https://github.com/dev-nass"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 rounded-md border border-border bg-mantle px-4 py-2 text-sm text-text transition-colors hover:border-border-light hover:bg-surface-light"
                            >
                                <Github :size="16" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jonas-vince-macawile-480515371/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 rounded-md border border-border bg-mantle px-4 py-2 text-sm text-text transition-colors hover:border-border-light hover:bg-surface-light"
                            >
                                <Linkedin :size="16" />
                                LinkedIn
                            </a>
                            <a
                                href="/Jonas-Macawile-Resume.pdf"
                                download="Jonas-Macawile-Resume.pdf"
                                class="inline-flex items-center gap-2 rounded-md bg-green px-4 py-2 text-sm font-medium text-crust transition-colors hover:bg-green/90"
                            >
                                <FileText :size="16" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.portrait-img {
    transition: opacity 0.4s ease;
}
</style>
