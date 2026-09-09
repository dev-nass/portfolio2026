<script setup lang="ts">
import { ref } from 'vue'
import { Send, Github, Linkedin, Mail } from 'lucide-vue-next'

const submitted = ref(false)

const name = ref('')
const email = ref('')
const message = ref('')

function handleSubmit() {
  if (!name.value || !email.value || !message.value) return
  submitted.value = true
}
</script>

<template>
  <section id="contact" class="mx-auto max-w-5xl px-4 py-12 md:py-20 lg:py-28">
    <!-- Header - clean -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold tracking-tight text-text md:text-3xl">Contact</h2>
      <p class="mt-2 text-sm leading-relaxed text-text-muted">
        Fill in the form below to send a message — I’ll get back to you soon.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <!-- Form -->
      <div class="border border-border bg-surface p-6">
        <template v-if="!submitted">
          <!-- Name -->
          <div class="mb-4">
            <label for="contact-name" class="mb-1.5 block text-sm font-medium text-text">
              Name
            </label>
            <input
              id="contact-name"
              v-model="name"
              type="text"
              placeholder="Your name"
              class="w-full border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-text-muted focus:border-green/50 focus:ring-1 focus:ring-green/20"
            />
          </div>

          <!-- Email -->
          <div class="mb-4">
            <label for="contact-email" class="mb-1.5 block text-sm font-medium text-text">
              Email
            </label>
            <input
              id="contact-email"
              v-model="email"
              type="email"
              placeholder="your@email.com"
              class="w-full border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-text-muted focus:border-green/50 focus:ring-1 focus:ring-green/20"
            />
          </div>

          <!-- Message -->
          <div class="mb-4">
            <label for="contact-message" class="mb-1.5 block text-sm font-medium text-text">
              Message
            </label>
            <textarea
              id="contact-message"
              v-model="message"
              rows="4"
              placeholder="Your message..."
              class="w-full resize-none border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-text-muted focus:border-green/50 focus:ring-1 focus:ring-green/20"
            />
          </div>

          <!-- Submit -->
          <button
            class="inline-flex w-full items-center justify-center gap-2 bg-green px-4 py-2.5 text-sm font-medium text-crust transition-colors hover:bg-green/90"
            @click="handleSubmit"
          >
            <Send :size="16" />
            Send message
          </button>
        </template>

        <!-- Success -->
        <div v-else class="flex flex-col items-center gap-3 py-8 text-center">
          <div class="text-sm font-medium text-green">Message sent successfully!</div>
          <div class="text-sm text-text-muted">
            Thank you, {{ name }}! I’ll get back to you soon.
          </div>
          <button class="mt-2 text-xs text-text-muted underline hover:text-text" @click="submitted = false">Send another message</button>
        </div>
      </div>

      <!-- Social Links -->
      <div class="flex flex-col gap-4">
        <div class="border border-border bg-surface p-6">
          <h3 class="mb-3 text-sm font-bold text-text">Find me online</h3>
          <div class="space-y-3">
            <a
              href="https://github.com/dev-nass"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-text"
            >
              <Github :size="18" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jonas-vince-macawile-480515371/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-text"
            >
              <Linkedin :size="18" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:hello@example.com"
              class="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-text"
            >
              <Mail :size="18" />
              <span>hello@example.com</span>
            </a>
          </div>
        </div>

        <div class="border border-border bg-surface p-6">
          <h3 class="mb-3 text-sm font-bold text-text">Availability</h3>
          <div class="flex items-center gap-2 text-sm">
            <span class="h-2 w-2 rounded-full bg-green animate-pulse" />
            <span class="text-green">Open to opportunities</span>
          </div>
          <p class="mt-2 text-sm leading-relaxed text-text-muted">
            Currently available for freelance work and full-time positions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
