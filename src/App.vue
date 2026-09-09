<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue'
import Footer from '@/components/layout/Footer.vue'
import SectionDivider from '@/components/SectionDivider.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen lg:flex">
    <div class="scanline-overlay" />
    <Sidebar />
    <div class="flex min-w-0 flex-1 flex-col">
      <main class="flex-1">
        <HeroSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </div>
</template>
