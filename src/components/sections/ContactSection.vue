<script setup lang="ts">
import { ref } from 'vue'
import { Send, Github, Linkedin, Mail } from 'lucide-vue-next'
import TypeWriter from '@/components/TypeWriter.vue'

const headerDone = ref(false)
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
    <!-- Header -->
    <div class="mb-10">
      <span class="text-green">$</span>
      <span class="text-text-muted"> cat ~/</span><span class="text-green font-bold">contact</span><span class="text-text-muted">.txt</span>
      <div class="mt-1 text-amber">
        <TypeWriter
          text="Fill in the fields below to send a message"
          :speed="20"
          :delay="300"
          @complete="headerDone = true"
        />
      </div>
    </div>

    <div v-if="headerDone" class="grid gap-8 md:grid-cols-2">
      <!-- Terminal Form -->
      <div class="rounded-lg border border-border bg-surface p-5 font-mono text-sm">
        <template v-if="!submitted">
          <!-- Name -->
          <div class="mb-4">
            <label class="mb-1 block text-xs text-text-muted">
              <span class="text-green">$</span> echo "name" &gt; name
            </label>
            <input
              v-model="name"
              type="text"
              placeholder="Your Name"
              class="w-full rounded border border-border bg-bg px-3 py-2 text-sm text-text outline-none transition-colors placeholder:text-text-muted focus:border-green/50"
            />
          </div>

          <!-- Email -->
          <div class="mb-4">
            <label class="mb-1 block text-xs text-text-muted">
              <span class="text-green">$</span> echo "email" &gt; email
            </label>
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              class="w-full rounded border border-border bg-bg px-3 py-2 text-sm text-text outline-none transition-colors placeholder:text-text-muted focus:border-green/50"
            />
          </div>

          <!-- Message -->
          <div class="mb-4">
            <label class="mb-1 block text-xs text-text-muted">
              <span class="text-green">$</span> echo "message" &gt; message
            </label>
            <textarea
              v-model="message"
              rows="4"
              placeholder="Your message..."
              class="w-full resize-none rounded border border-border bg-bg px-3 py-2 text-sm text-text outline-none transition-colors placeholder:text-text-muted focus:border-green/50"
            />
          </div>

          <!-- Submit -->
          <button
            class="inline-flex items-center gap-2 rounded border border-green/30 bg-green/10 px-4 py-2 text-sm text-green transition-all hover:bg-green/20 hover:shadow-[0_0_10px_rgba(0,255,65,0.15)]"
            @click="handleSubmit"
          >
            <Send :size="14" />
            $ cat name email message | send
          </button>
        </template>

        <!-- Success -->
        <div v-else class="flex flex-col items-center gap-3 py-8 text-center">
          <div class="text-green">Message sent successfully!</div>
          <div class="text-xs text-text-muted">
            <span class="text-green">$</span> echo "Thank you, {{ name }}! I'll get back to you soon."
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="flex flex-col gap-4">
        <div class="rounded-lg border border-border bg-surface p-5">
          <h3 class="mb-3 text-sm font-bold text-text">Find me online</h3>
          <div class="space-y-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-green"
            >
              <Github :size="16" />
              <span>$ open github</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-cyan"
            >
              <Linkedin :size="16" />
              <span>$ open linkedin</span>
            </a>
            <a
              href="mailto:hello@example.com"
              class="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-amber"
            >
              <Mail :size="16" />
              <span>$ mail hello@example.com</span>
            </a>
          </div>
        </div>

        <div class="rounded-lg border border-border bg-surface p-5">
          <h3 class="mb-3 text-sm font-bold text-text">Availability</h3>
          <div class="flex items-center gap-2 text-sm">
            <span class="h-2 w-2 rounded-full bg-green animate-pulse" />
            <span class="text-green">Open to opportunities</span>
          </div>
          <p class="mt-2 text-xs text-text-muted">
            Currently available for freelance work and full-time positions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
