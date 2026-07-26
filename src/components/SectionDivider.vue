<template>
  <div class="mx-auto max-w-5xl px-4">
    <div class="glow-line h-px w-full bg-gradient-to-r from-transparent via-green/60 to-transparent" />
  </div>
</template>

<style scoped>
.glow-line {
  box-shadow: 0 0 8px color-mix(in srgb, var(--color-green) 40%, transparent), 0 0 20px color-mix(in srgb, var(--color-green) 15%, transparent);
}
</style>
