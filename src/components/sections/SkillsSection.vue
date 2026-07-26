<script setup lang="ts">
import { ref } from "vue";
import TypeWriter from "@/components/TypeWriter.vue";

const headerDone = ref(false);

const categories = [
    {
        label: "Languages",
        color: "green",
        skills: [
            { name: "TypeScript", status: "active", year: 2026 },
            { name: "Lua", status: "idle", year: 2025 },
            { name: "JavaScript", status: "active", year: 2024 },
            { name: "PHP", status: "active", year: 2024 },
            { name: "MySQL", status: "active", year: 2023 },
            { name: "Java", status: "idle", year: 2023 },
            { name: "C++", status: "idle", year: 2023 },
        ],
    },
    {
        label: "Frameworks",
        color: "teal",
        skills: [
            { name: "Vue 3", status: "active", year: 2025 },
            { name: "Laravel 13", status: "active", year: 2025 },
            { name: "Tailwind CSS", status: "active", year: 2025 },
            { name: "Bootstrap CSS", status: "idle", year: 2023 },
        ],
    },
    {
        label: "Tools",
        color: "peach",
        skills: [
            { name: "Vim & Neovim", status: "active", year: 2025 },
            { name: "Linux", status: "active", year: 2025 },
            { name: "Git & GitHub", status: "active", year: 2023 },
        ],
    },
];

function statusColor(status: string) {
    if (status === "active") return "bg-green";
    return "bg-text-muted";
}

function statusLabel(status: string) {
    if (status === "active") return "text-green";
    return "text-text-muted";
}
</script>

<template>
    <section id="skills" class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28">
        <!-- Header -->
        <div class="mb-10">
            <span class="text-green">$</span>
            <span class="text-text-muted"> htop --filter=</span
            ><span class="text-green font-bold">skills</span>
            <div class="mt-1 text-peach">
                <TypeWriter
                    text="PID   USER     PRI  NI  VIRT  RES  SHR  S  CPU%  MEM%  COMMAND"
                    :speed="15"
                    :delay="300"
                    @complete="headerDone = true"
                />
            </div>
        </div>

        <!-- Skills Grid -->
        <div v-if="headerDone" class="space-y-8">
            <div v-for="cat in categories" :key="cat.label">
                <!-- Category Header -->
                <div
                    class="mb-3 text-sm font-bold uppercase tracking-wider"
                    :class="`text-${cat.color}`"
                >
                    [{{ cat.label }}]
                </div>

                <!-- Skill Grid -->
                <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    <div
                        v-for="skill in cat.skills"
                        :key="skill.name"
                        class="group flex flex-col justify-between rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-light hover:bg-surface-light"
                    >
                        <span class="text-base font-medium text-text">{{ skill.name }}</span>
                        <div class="mt-3 flex items-center justify-between">
                            <span
                                class="flex items-center gap-1.5 text-sm"
                                :class="statusLabel(skill.status)"
                            >
                                <span
                                    class="inline-block h-1.5 w-1.5 rounded-full"
                                    :class="statusColor(skill.status)"
                                ></span>
                                {{ skill.status }}
                            </span>
                            <span class="text-sm text-text-muted">{{
                                skill.year
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
