<script setup lang="ts">
import { Github, Linkedin, FileText } from "lucide-vue-next";
import { useTheme } from "@/composables/useTheme";

const name = "Jonas Vince Macawile";
const title = "Full-Stack Developer";
const about = `I build things for the web. Currently a 4th year Information Systems student focus on turning business challenges into clean tech solutions.`;
const about_two = `As of now I am focused on building a knowledge base repository using Obsidian for my AI Agents and exploring open-source AI skills and technologies.`;

const { isDark } = useTheme();
</script>

<template>
    <section id="hero" class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28">
        <div
            class="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10 lg:gap-12"
        >
            <!-- Portrait — expanded, same height as text card -->
            <div class="hidden w-[38%] max-w-[340px] shrink-0 md:block">
                <div
                    class="relative h-full min-h-[380px] overflow-hidden border border-border"
                >
                    <img
                        src="/images/portrait.png"
                        alt="Portrait of Jonas Vince Macawile"
                        class="portrait-img absolute inset-0 h-full w-full object-cover transition-opacity duration-400"
                        :class="isDark ? 'opacity-100' : 'opacity-0'"
                    />
                    <img
                        src="/images/portrait-glasses.png"
                        alt="Portrait of Jonas Vince Macawile with glasses"
                        class="portrait-img absolute inset-0 h-full w-full object-cover transition-opacity duration-400"
                        :class="isDark ? 'opacity-0' : 'opacity-100'"
                    />
                </div>
            </div>

            <!-- Text Content — two simple paragraphs, no current focus label -->
            <div class="min-w-0 flex flex-1 flex-col">
                <div
                    class="flex h-full flex-col border border-border bg-surface p-6 md:p-7"
                >
                    <div class="flex flex-1 flex-col space-y-5">
                        <div>
                            <h1
                                class="text-3xl font-bold tracking-tight text-text md:text-4xl"
                            >
                                {{ name }}
                            </h1>
                            <p
                                class="mt-1.5 text-sm font-medium tracking-wide text-peach uppercase"
                            >
                                {{ title }}
                            </p>
                        </div>

                        <div class="h-px bg-border" />

                        <div class="space-y-3">
                            <p
                                class="text-[14px] leading-relaxed text-text-muted"
                            >
                                {{ about }}
                            </p>
                            <p
                                class="text-[14px] leading-relaxed text-text-muted"
                            >
                                {{ about_two }}
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-2.5 pt-1">
                            <a
                                href="https://github.com/dev-nass"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 border border-border bg-mantle px-4 py-2 text-sm text-text transition-colors hover:border-border-light hover:bg-surface-light"
                            >
                                <Github :size="16" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jonas-vince-macawile-480515371/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 border border-border bg-mantle px-4 py-2 text-sm text-text transition-colors hover:border-border-light hover:bg-surface-light"
                            >
                                <Linkedin :size="16" />
                                LinkedIn
                            </a>
                            <a
                                href="/Jonas-Macawile-Resume.pdf"
                                download="Jonas-Macawile-Resume.pdf"
                                class="inline-flex items-center gap-2 bg-green px-4 py-2 text-sm font-medium text-crust transition-colors hover:bg-green/90"
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
