<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import SectionDivider from '@/components/SectionDivider.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="scanline-overlay" />
    <NavBar />
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
</template>
