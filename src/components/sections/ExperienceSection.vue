<script setup lang="ts">
import { ref } from "vue";
import TypeWriter from "@/components/TypeWriter.vue";

const headerDone = ref(false);

const experiences = [
    {
        hash: "a3f7b2c",
        company: "Capstone",
        role: "Full-Stack Developer",
        date: "Dec, 2025 — Present",
        achievements: [
            "Built client websites with Laravel, Vue and Tailwind",
            "Developed custom 2D Mapping and REST API integrations",
            "Reduced page load times through query optimization of 21k records",
        ],
    },
    {
        hash: "e9d1f4a",
        company: "PawPal",
        role: "Lead Arduino Developer",
        date: "Nov, 2025 — Dec, 2025",
        achievements: [
            "Implemented a dog feeder that detects their proximity",
            "Collaborated with design team to implement the hardware correctly",
            "Test the effectiveness of the feeder on 3 Shih Tzu dogs",
        ],
    },
];
</script>

<template>
    <section
        id="experience"
        class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28"
    >
        <!-- Header -->
        <div class="mb-10">
            <span class="text-green">$</span>
            <span class="text-text-muted"> git log --oneline --</span
            ><span class="text-green font-bold">experience</span>
            <div class="mt-1 text-amber">
                <TypeWriter
                    text="commit 3 entries — sorted by date"
                    :speed="20"
                    :delay="300"
                    @complete="headerDone = true"
                />
            </div>
        </div>

        <!-- Timeline -->
        <div v-if="headerDone" class="space-y-6">
            <div
                v-for="exp in experiences"
                :key="exp.hash"
                class="rounded-lg border border-border bg-surface p-5 font-mono text-sm transition-colors hover:border-green/20"
            >
                <!-- Commit header -->
                <div
                    class="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs"
                >
                    <span class="text-green">commit</span>
                    <span class="text-purple">{{ exp.hash }}</span>
                    <span class="text-text-muted">(HEAD)</span>
                </div>
                <div class="mb-1 text-xs text-text-muted">
                    Author: <span class="text-cyan">{{ exp.company }}</span>
                </div>
                <div class="mb-3 text-xs text-text-muted">
                    Date: <span class="text-amber">{{ exp.date }}</span>
                </div>

                <!-- Role -->
                <div class="mb-3 pl-4 text-base font-bold text-text">
                    {{ exp.role }}
                </div>

                <!-- Achievements -->
                <ul class="space-y-1 pl-4">
                    <li
                        v-for="(item, i) in exp.achievements"
                        :key="i"
                        class="text-xs text-text-muted"
                    >
                        <span class="text-green">-</span> {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
