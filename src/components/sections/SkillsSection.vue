<script setup lang="ts">
const categories = [
    {
        label: "Languages",
        color: "text-green",
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
        color: "text-teal",
        skills: [
            { name: "Vue 3", status: "active", year: 2025 },
            { name: "Laravel 13", status: "active", year: 2025 },
            { name: "Tailwind CSS", status: "active", year: 2025 },
            { name: "Bootstrap CSS", status: "idle", year: 2023 },
        ],
    },
    {
        label: "Tools",
        color: "text-peach",
        skills: [
            { name: "Vim & Neovim", status: "active", year: 2025 },
            { name: "Linux", status: "active", year: 2025 },
            { name: "Git & GitHub", status: "active", year: 2023 },
            { name: "Obsidian", status: "active", year: 2024 },
            { name: "Jira", status: "idle", year: 2025 },
        ],
    },
    {
        label: "AI & Agents",
        color: "text-mauve",
        skills: [
            { name: "Hermes Agent", status: "active", year: 2026 },
            { name: "OpenCode", status: "active", year: 2026 },
            { name: "Anthropic", status: "active", year: 2026 },
            { name: "OpenAI", status: "active", year: 2026 },
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
        <!-- Header - includes AI -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold tracking-tight text-text md:text-3xl">
                Skills & Expertise
            </h2>
            <p class="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
                Languages, frameworks, everyday tools, and AI agents — including
                Hermes Agent, OpenCode, Anthropic, and OpenAI — grouped for
                quick scanning.
            </p>
        </div>

        <!-- Skills Grid - no typewriter gate -->
        <div class="space-y-8">
            <div v-for="cat in categories" :key="cat.label">
                <!-- Category Header -->
                <div
                    class="mb-3 text-sm font-bold uppercase tracking-wider"
                    :class="cat.color"
                >
                    {{ cat.label }}
                </div>

                <!-- Skill Grid -->
                <div
                    class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
                >
                    <div
                        v-for="skill in cat.skills"
                        :key="skill.name"
                        class="group flex flex-col justify-between border border-border bg-surface p-4 transition-colors hover:border-border-light hover:bg-surface-light"
                    >
                        <span class="text-sm font-medium text-text">{{
                            skill.name
                        }}</span>
                        <div class="mt-3 flex items-center justify-between">
                            <span
                                class="flex items-center gap-1.5 text-xs"
                                :class="statusLabel(skill.status)"
                            >
                                <span
                                    class="inline-block h-1.5 w-1.5 rounded-full"
                                    :class="statusColor(skill.status)"
                                ></span>
                                {{ skill.status }}
                            </span>
                            <span class="text-xs text-text-muted">{{
                                skill.year
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
