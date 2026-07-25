# Vue.js Terminal Portfolio — Project Plan

## Overview

A terminal-styled portfolio website built with Vue 3, featuring an ASCII art portrait in the hero section, typing animations, and a dark terminal aesthetic. Inspired by [nhatvule.netlify.app](https://nhatvule.netlify.app).

---

## Tech Stack

| Category | Library | Purpose |
|----------|---------|---------|
| Framework | **Vue 3** (Composition API, `<script setup>`) | UI framework |
| Router | **Vue Router 4** | Client-side routing |
| Build | **Vite** | Dev server & bundler |
| Language | **TypeScript** | Type safety |
| Styling | **Tailwind CSS v4** | Utility-first CSS |
| UI Components | **shadcn-vue** | Pre-built accessible components |
| Icons | **Lucide Vue** | Icon library |
| Animation | **Motion for Vue** | Page transitions, scroll reveals, hover effects |
| Fonts | **JetBrains Mono**, **Space Mono**, **IBM Plex Mono** | Terminal monospace aesthetic |

---

## Project Structure

```
portfolio/
├── public/
│   └── portrait.jpg              # Placeholder portrait image
├── src/
│   ├── assets/
│   │   └── main.css              # Tailwind imports + custom theme + fonts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── NavBar.vue        # Terminal-style top bar (file tabs)
│   │   │   └── Footer.vue        # Terminal-style footer
│   │   ├── ui/                   # shadcn-vue generated components
│   │   │   └── ...
│   │   ├── AsciiPortrait.vue     # Canvas-based ASCII art renderer
│   │   ├── TypeWriter.vue        # Typing animation component
│   │   ├── GlitchText.vue        # Glitch effect for text
│   │   ├── TerminalWindow.vue    # Reusable terminal frame (title bar + slot)
│   │   ├── ProjectCard.vue       # Project card with terminal styling
│   │   └── SkillTable.vue        # htop-style skills table
│   ├── views/
│   │   ├── HomeView.vue          # Hero + About section
│   │   ├── ProjectsView.vue      # Project showcase
│   │   ├── SkillsView.vue        # Technical skills
│   │   ├── ExperienceView.vue    # Work experience timeline
│   │   └── ContactView.vue       # Contact form
│   ├── composables/
│   │   └── useAscii.ts           # ASCII rendering logic
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
└── tailwind.config.ts
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#0a0a0a` | Page background |
| `--surface` | `#111111` | Card/terminal backgrounds |
| `--border` | `#1e1e1e` | Borders and dividers |
| `--text` | `#e0e0e0` | Primary text |
| `--text-muted` | `#666666` | Secondary text |
| `--green` | `#00ff41` | Primary accent (terminal green) |
| `--amber` | `#ffb000` | Secondary accent |
| `--cyan` | `#00d4ff` | Tertiary accent |
| `--red` | `#ff3333` | Errors / highlights |
| `--glow` | `0 0 10px #00ff4180` | Green glow effect |

---

## Sections

### 1. Hero / About (`/`)
- **Left**: ASCII art portrait rendered on `<canvas>`
  - Portrait image → grayscale → brightness-mapped to ASCII characters
  - Characters: `@#S%:. ` (darkest to lightest)
  - Green tint via CSS `mix-blend-mode` or canvas pixel coloring
  - Glitch animation overlay (random character corruption every few seconds)
- **Right**: Terminal window with:
  - `$ whoami` → name with typing animation
  - `$ cat about.txt` → short bio with typing animation
  - Blinking cursor `_`
- **Below**: Social links styled as terminal commands

### 2. Projects (`/projects`)
- Section header: `$ ls ~/projects`
- Grid of terminal-window cards
- Each card:
  - Title bar: `project-name — ~/projects`
  - Tech stack tags (colored badges)
  - Description
  - Links (GitHub, Live) styled as `$ open <url>`
- Hover effect: card glow + slight scale

### 3. Skills (`/skills`)
- Styled as `htop` / system monitor output
- Table with columns: Category | Skill | Proficiency
- Proficiency shown as colored bars (`████████░░ 80%`)
- Color-coded by category (languages = green, frameworks = cyan, tools = amber)

### 4. Experience (`/experience`)
- Styled as `git log` output
- Each entry:
  ```
  commit abc1234 (HEAD -> main)
  Author: Company Name
  Date: Jan 2024 — Present

      Role Title

      - Achievement 1
      - Achievement 2
  ```
- Entries separated by terminal dividers

### 5. Contact (`/contact`)
- Styled as a terminal input session:
  ```
  $ echo "Your Name" > name
  $ echo "your@email.com" > email
  $ echo "Your message..." > message
  $ cat name email message | send
  ```
- Input fields styled as terminal prompts
- Social links at the bottom
- Optional: Form submission via EmailJS or Formspree

---

## Key Component Details

### AsciiPortrait.vue
- Loads portrait image onto hidden `<canvas>`
- Iterates over pixels in a grid (e.g., every 4th pixel)
- Maps pixel brightness (0-255) to ASCII character
- Renders as `<pre>` element with monospace font
- Applies green color via CSS
- Glitch effect: setInterval that randomly replaces 5% of characters for 200ms

### TerminalWindow.vue
- Reusable wrapper component
- Props: `title: string`, `icon?: string`
- Renders macOS-style title bar (red/yellow/green dots)
- Slot for content area with dark background and border

### TypeWriter.vue
- Props: `text: string`, `speed?: number`, `delay?: number`
- Emits `@complete` when done
- Character-by-character reveal with blinking cursor

### GlitchText.vue
- Props: `text: string`, `active?: boolean`
- CSS-based glitch with `clip-path` and `transform` layers
- Random character corruption animation

---

## Implementation Steps

1. Scaffold Vue 3 + Vite project with TypeScript template
2. Install dependencies (Tailwind, shadcn-vue, Lucide Vue, Motion, Vue Router)
3. Configure Tailwind with custom theme (colors, fonts)
4. Set up router with 5 view routes
5. Build reusable components (TerminalWindow, TypeWriter, GlitchText, AsciiPortrait)
6. Implement HomeView (hero with ASCII portrait + typing intro)
7. Implement ProjectsView (card grid)
8. Implement SkillsView (htop-style table)
9. Implement ExperienceView (git log timeline)
10. Implement ContactView (terminal form)
11. Build NavBar and Footer
12. Add page transitions and scroll animations
13. Add responsive design
14. Polish: glow effects, hover states, cursor blink
15. Verify with type checking

---

## Dependencies (package.json)

```json
{
  "dependencies": {
    "vue": "^3.5.0",
    "vue-router": "^4.4.0",
    "motion": "^11.0.0",
    "lucide-vue-next": "^0.462.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.0.0",
    "class-variance-authority": "^0.7.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.0",
    "vite": "^6.0.0",
    "typescript": "^5.7.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "shadcn-vue": "latest"
  }
}
```
