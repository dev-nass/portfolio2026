<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";

const projects = [
    {
        name: "Viva La Vida",
        description:
            "A Web-based POS System for a small Guitar shop for our 2nd Year 1st Semester Web Systems Course.",
        tech: ["PHP", "MySQL", "Bootstrap CSS", "JavaScript"],
        github: "https://github.com/dev-nass/VivaLaVida",
    },
    {
        name: "Norte Cafe",
        description:
            "Development of Web-based Online Ordering System for Norte Cafe a local cafe near school area.",
        tech: ["PHP", "MySQL", "Bootstrap CSS", "JavaScript"],
        github: "https://github.com/dev-nass/NorteCafe",
    },
    {
        name: "PHP-Template",
        description:
            "A PHP template based on Laracast 30-days-php-beginners-tutorial but refactored to suit the need of the dev who developed it.",
        tech: ["PHP", "MySQL", "Bootstrap CSS"],
        github: "https://github.com/dev-nass/PHP-Template",
    },
    {
        name: "dotfiles",
        description:
            "Personal development environment configs — neovim, tmux, zsh, and more.",
        tech: ["Lua", "Shell", "Bash"],
        github: "https://github.com/dev-nass/Linux_Ricing",
    },
];
</script>

<template>
    <section
        id="projects"
        class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28"
    >
        <!-- Header - clean readable -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold tracking-tight text-text md:text-3xl">Projects</h2>
            <p class="mt-2 text-sm leading-relaxed text-text-muted">
                A selection of 4 projects — web systems, templates, and tooling.
            </p>
        </div>

        <!-- Project Grid - no typewriter gate -->
        <div class="grid gap-4 sm:grid-cols-2">
            <ProjectCard
                v-for="project in projects"
                :key="project.name"
                v-bind="project"
            />
        </div>
    </section>
</template>
