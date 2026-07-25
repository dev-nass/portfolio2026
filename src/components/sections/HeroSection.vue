<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Github, Linkedin, FileText } from "lucide-vue-next";
import TypeWriter from "@/components/TypeWriter.vue";
import GlitchText from "@/components/GlitchText.vue";
import TerminalWindow from "@/components/TerminalWindow.vue";

const name = "Jonas Vince Macawile";
const title = "Full-Stack Developer";
const about = `I build things for the web. Currently a
4th year Information Systems student with a focus on
turning business challenges into clean tech solutions.`;

const stage = ref(0);
const isGlitching = ref(false);
let glitchTimer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
    glitchTimer = setInterval(
        () => {
            isGlitching.value = true;
            setTimeout(() => {
                isGlitching.value = false;
            }, 200);
        },
        4000 + Math.random() * 3000,
    );
});

onUnmounted(() => {
    if (glitchTimer) clearInterval(glitchTimer);
});
</script>

<template>
    <section id="hero" class="mx-auto max-w-5xl py-12 md:px-4 md:py-20 lg:px-4 lg:py-28">
        <div
            class="flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-8 lg:gap-12"
        >
            <!-- ASCII Art Image — hidden on mobile, shown on md+ -->
            <div class="hidden w-[30%] flex-shrink-0 md:block">
                <div
                    class="ascii-portrait relative h-full"
                    :class="{ 'is-glitching': isGlitching }"
                >
                    <img
                        src="/images/ascii-art.png"
                        alt="ASCII art portrait"
                        class="block h-full w-full rounded border border-border/50 object-cover"
                        :style="{
                            filter: 'sepia(1) hue-rotate(80deg) saturate(3) brightness(0.8)',
                        }"
                    />
                    <div
                        class="pointer-events-none absolute inset-0 rounded border border-green/10"
                    />
                </div>
            </div>

            <!-- Terminal Content -->
            <div class="min-w-0 flex-1">
                <TerminalWindow title="whoami — ~">
                    <div class="space-y-4 font-mono text-sm">
                        <!-- Name -->
                        <div>
                            <span class="text-green">$</span>
                            <span class="text-text-muted"> whoami</span>
                            <div class="mt-1 pl-2">
                                <GlitchText
                                    :text="name"
                                    class="text-xl font-bold text-green glow-green md:text-2xl"
                                />
                            </div>
                        </div>

                        <!-- Title -->
                        <div>
                            <span class="text-green">$</span>
                            <span class="text-text-muted"> echo $ROLE</span>
                            <div class="mt-1 pl-2 text-amber">
                                <TypeWriter
                                    :text="title"
                                    :speed="40"
                                    :delay="1500"
                                    @complete="stage = 1"
                                />
                            </div>
                        </div>

                        <!-- About -->
                        <div v-if="stage >= 1">
                            <span class="text-green">$</span>
                            <span class="text-text-muted"> cat about.txt</span>
                            <div
                                class="mt-1 whitespace-pre-line pl-2 text-text-muted"
                            >
                                <TypeWriter
                                    :text="about"
                                    :speed="20"
                                    :delay="500"
                                    @complete="stage = 2"
                                />
                            </div>
                        </div>

                        <!-- Social Links -->
                        <div
                            v-if="stage >= 2"
                            class="flex flex-wrap gap-3 pt-2"
                        >
                            <a
                                href="https://github.com/dev-nass"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-green"
                            >
                                <Github :size="14" />
                                <span class="text-xs">$ open github</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jonas-vince-macawile-480515371/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-cyan"
                            >
                                <Linkedin :size="14" />
                                <span class="text-xs">$ open linkedin</span>
                            </a>
                            <a
                                href="#"
                                class="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-amber"
                            >
                                <FileText :size="14" />
                                <span class="text-xs">$ cat resume.pdf</span>
                            </a>
                        </div>
                    </div>
                </TerminalWindow>
            </div>
        </div>
    </section>
</template>
