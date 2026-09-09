<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  src?: string
  width?: number
  height?: number
}>(), {
  width: 36,
  height: 36,
})

const ASCII_CHARS = ' .·•●'
const asciiOutput = ref('')

function getChar(brightness: number): string {
  const idx = Math.floor((brightness / 255) * (ASCII_CHARS.length - 1))
  return ASCII_CHARS[idx]
}

function generatePlaceholder(): string[] {
  const lines: string[] = []
  const center = { x: props.width / 2, y: props.height / 2 }
  for (let y = 0; y < props.height; y++) {
    let row = ''
    for (let x = 0; x < props.width; x++) {
      const dx = x - center.x
      const dy = y - center.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxDist = Math.min(center.x, center.y)
      const brightness = Math.max(0, 255 - (dist / maxDist) * 255)
      if (dist < maxDist * 0.85) {
        row += getChar(brightness * 0.7)
      } else if (dist < maxDist) {
        row += getChar(brightness * 0.3)
      } else {
        row += ' '
      }
    }
    lines.push(row)
  }
  return lines
}

function renderImage(img: HTMLImageElement) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const aspectRatio = img.height / img.width
  const adjustedHeight = Math.floor(props.height * aspectRatio * 0.55)
  canvas.width = props.width
  canvas.height = adjustedHeight

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const pixels = imageData.data

  const lines: string[] = []
  for (let y = 0; y < canvas.height; y++) {
    let row = ''
    for (let x = 0; x < canvas.width; x++) {
      const idx = (y * canvas.width + x) * 4
      const r = pixels[idx]
      const g = pixels[idx + 1]
      const b = pixels[idx + 2]
      const brightness = (r * 0.299 + g * 0.587 + b * 0.114)
      row += getChar(brightness)
    }
    lines.push(row)
  }

  asciiOutput.value = lines.join('\n')
}

onMounted(() => {
  const lines = generatePlaceholder()
  asciiOutput.value = lines.join('\n')

  if (props.src) {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => renderImage(img)
    img.src = props.src
  }
})
</script>

<template>
  <div class="relative">
    <pre
      class="select-none text-[3px] leading-[3.5px] text-green sm:text-[4px] sm:leading-[4.5px] md:text-[5px] md:leading-[5.5px] lg:text-[6px] lg:leading-[6.5px]"
      aria-label="ASCII art portrait"
    >{{ asciiOutput }}</pre>
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
  </div>
</template>
