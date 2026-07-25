<script setup lang="ts">
import { ref } from "vue";
import TypeWriter from "@/components/TypeWriter.vue";

const headerDone = ref(false);

const categories = [
    {
        label: "Languages",
        color: "green",
        skills: [
            { name: "TypeScript", status: "learning", year: 2026 },
            { name: "Lua", status: "familiar", year: 2025 },
            { name: "JavaScript", status: "proficient", year: 2024 },
            { name: "PHP", status: "proficient", year: 2024 },
            { name: "MySQL", status: "proficient", year: 2023 },
            { name: "Java", status: "familiar", year: 2023 },
            { name: "C++", status: "familiar", year: 2023 },
        ],
    },
    {
        label: "Frameworks",
        color: "cyan",
        skills: [
            { name: "Vue 3", status: "proficient", year: 2025 },
            { name: "Laravel 13", status: "proficient", year: 2025 },
            { name: "Tailwind CSS", status: "proficient", year: 2025 },
            { name: "Boostrap CSS", status: "proficient", year: 2023 },
        ],
    },
    {
        label: "Tools",
        color: "amber",
        skills: [
            { name: "Vim & Neovim", status: "proficient", year: 2025 },
            { name: "Linux", status: "proficient", year: 2025 },
            { name: "Git & GitHub", status: "proficient", year: 2023 },
        ],
    },
];

function statusColor(status: string) {
    if (status === "proficient") return "text-green";
    if (status === "familiar") return "text-amber";
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
            <div class="mt-1 text-amber">
                <TypeWriter
                    text="PID   USER     PRI  NI  VIRT  RES  SHR  S  CPU%  MEM%  COMMAND"
                    :speed="15"
                    :delay="300"
                    @complete="headerDone = true"
                />
            </div>
        </div>

        <!-- Skills Table -->
        <div
            v-if="headerDone"
            class="overflow-x-auto rounded-lg border border-border bg-surface"
        >
            <table class="w-full min-w-[520px] font-mono text-sm">
                <thead>
                    <tr
                        class="border-b border-border bg-surface-light text-left text-xs text-text-muted"
                    >
                        <th class="px-4 py-2">PID</th>
                        <th class="px-4 py-2">COMMAND</th>
                        <th class="px-4 py-2">STATUS</th>
                        <th class="px-4 py-2 text-right">YEAR</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="cat in categories" :key="cat.label">
                        <!-- Category Header -->
                        <tr
                            class="border-b border-border/50 bg-surface-light/50"
                        >
                            <td
                                colspan="4"
                                class="px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                                :class="`text-${cat.color}`"
                            >
                                [{{ cat.label }}]
                            </td>
                        </tr>
                        <!-- Skills -->
                        <tr
                            v-for="(skill, i) in cat.skills"
                            :key="skill.name"
                            class="border-b border-border/30 transition-colors hover:bg-surface-light/30"
                        >
                            <td class="px-4 py-2 text-text-muted">
                                {{ String(i + 1).padStart(3, "0") }}
                            </td>
                            <td class="px-4 py-2">{{ skill.name }}</td>
                            <td class="px-4 py-2">
                                <span :class="statusColor(skill.status)">{{
                                    skill.status
                                }}</span>
                            </td>
                            <td class="px-4 py-2 text-right text-text-muted">
                                {{ skill.year }}
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </section>
</template>
