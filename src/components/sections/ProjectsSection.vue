<script setup lang="ts">
import { ref } from "vue";
import TypeWriter from "@/components/TypeWriter.vue";
import ProjectCard from "@/components/ProjectCard.vue";

const headerDone = ref(false);

const projects = [
    {
        name: "Viva La Vida",
        description:
            "A Web-based POS System for a small Guitar shop for our 2nd Year 1st Semester Web Systems Course.",
        tech: ["PHP", "MySQL", "Bootstrap CSS", "JavaScript"],
        github: "https://github.com/dev-nass/VivaLaVida",
        // live: "https://example.com",
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
        // live: "https://example.com",
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
        <!-- Header -->
        <div class="mb-10">
            <span class="text-green">$</span>
            <span class="text-text-muted"> ls ~/</span
            ><span class="text-green font-bold">projects</span>
            <div class="mt-1 text-peach">
                <TypeWriter
                    text="drwxr-xr-x  4 user  staff  — showing 4 projects"
                    :speed="25"
                    :delay="300"
                    @complete="headerDone = true"
                />
            </div>
        </div>

        <!-- Project Grid -->
        <div v-if="headerDone" class="grid gap-4 sm:grid-cols-2">
            <ProjectCard
                v-for="project in projects"
                :key="project.name"
                v-bind="project"
            />
        </div>
    </section>
</template>
