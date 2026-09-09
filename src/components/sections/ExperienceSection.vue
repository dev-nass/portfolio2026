<script setup lang="ts">
const experiences = [
    {
        id: "capstone",
        company: "Capstone",
        role: "Full-Stack Developer",
        date: "Dec 2025 — Present",
        achievements: [
            "Built client websites with Laravel, Vue and Tailwind",
            "Developed custom 2D Mapping and REST API integrations",
            "Reduced page load times through query optimization of 21k records",
        ],
    },
    {
        id: "pawpal",
        company: "PawPal",
        role: "Lead Arduino Developer",
        date: "Nov 2025 — Dec 2025",
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
        <!-- Header - clean -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold tracking-tight text-text md:text-3xl">Experience</h2>
            <p class="mt-2 text-sm leading-relaxed text-text-muted">
                Roles and projects in chronological order.
            </p>
        </div>

        <!-- Timeline - no git log metaphor -->
        <div class="space-y-4">
            <div
                v-for="exp in experiences"
                :key="exp.id"
                class="border border-border bg-surface p-6 transition-colors hover:border-border-light"
            >
                <div class="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 class="text-base font-bold text-text">{{ exp.role }}</h3>
                    <span class="text-xs text-text-muted">{{ exp.date }}</span>
                </div>
                <div class="mt-1 text-sm font-medium text-teal">{{ exp.company }}</div>

                <ul class="mt-4 space-y-2">
                    <li
                        v-for="(item, i) in exp.achievements"
                        :key="i"
                        class="flex gap-2 text-sm leading-relaxed text-text-muted"
                    >
                        <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green"></span>
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
