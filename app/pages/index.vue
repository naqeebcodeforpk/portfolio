<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const { data: featuredProjects } = await useAsyncData('featured-projects', () =>
  queryContent('projects')
    .where({ featured: true })
    .sort({ order: 1 })
    .limit(3)
    .find()
)

function slugFor(project: any): string {
  if (!project?._path) return ''
  return project._path.replace(/^\/projects\//, '')
}

const heroRef = ref<HTMLElement | null>(null)
let rafId: number | null = null
let pending: { x: number; y: number } | null = null

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
}

function apply() {
  rafId = null
  const el = heroRef.value
  if (!el || !pending) return
  const { x, y } = pending
  el.style.setProperty('--mx', `${x}%`)
  el.style.setProperty('--my', `${y}%`)
  const px = (x - 50) / 50
  const py = (y - 50) / 50
  const max = 12
  el.style.setProperty('--bgx', `${(-px * max).toFixed(2)}px`)
  el.style.setProperty('--bgy', `${(-py * max).toFixed(2)}px`)
  el.style.setProperty('--glow-o', '1')
  pending = null
}

function onMouseMove(e: MouseEvent) {
  if (prefersReducedMotion()) return
  const el = heroRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  pending = {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  }
  if (rafId == null) rafId = requestAnimationFrame(apply)
}

function onMouseLeave() {
  const el = heroRef.value
  if (!el) return
  el.style.setProperty('--bgx', '0px')
  el.style.setProperty('--bgy', '0px')
  el.style.setProperty('--glow-o', '0')
}

onBeforeUnmount(() => {
  if (rafId != null) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div>
    <section
      ref="heroRef"
      class="hero-banner relative isolate w-screen ml-[calc(50%-50vw)] -mt-16 sm:-mt-16 pt-16 sm:pt-24 pb-14 sm:pb-24 overflow-hidden border-b border-[#B8C7DA]"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
    >
      <div class="hero-banner__glow" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-6 sm:px-10">
        <div class="max-w-2xl">
          <h1 class="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950">
            Naqeeb Ullah
          </h1>
          <p class="mt-4 text-lg text-slate-700">
            Senior full-stack engineer. Berlin.
          </p>
          <div class="mt-8 space-y-6 text-base text-slate-700 leading-relaxed">
            <p>
              Eight years building production systems across healthcare, government,
              e-commerce, and ed-tech. Backend focus — schema design, API
              architecture, framework migrations, and replacing legacy workflows
              with software that gets used.
            </p>
            <p>
              Currently building healthcare ERP software at Zahnarztpraxis
              Wunschlachen in Berlin.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-24">
      <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
        Featured Projects
      </h2>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="project in featuredProjects"
          :key="project._path"
          :to="`/projects/${slugFor(project)}`"
          class="block border border-slate-200 rounded-lg p-6 hover:border-slate-900 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <p class="text-xs uppercase tracking-wide text-slate-400">
            {{ project.company }}
          </p>
          <h3 class="mt-1 text-lg font-semibold tracking-tight text-slate-900">
            {{ project.title }}
          </h3>
          <p v-if="project.domain" class="text-sm text-slate-600 mt-2">
            {{ project.domain }}
          </p>
          <ul v-if="project.techStack?.length" class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="tech in project.techStack.slice(0, 4)"
              :key="tech"
              class="bg-slate-100 text-slate-700 rounded px-2 py-1 text-xs"
            >
              {{ tech }}
            </li>
            <li
              v-if="project.techStack.length > 4"
              class="bg-slate-100 text-slate-700 rounded px-2 py-1 text-xs"
            >
              +{{ project.techStack.length - 4 }} more
            </li>
          </ul>
        </NuxtLink>
      </div>

      <p class="mt-10">
        <NuxtLink to="/projects" class="text-slate-900 hover:text-blue-600 transition-colors">
          View all projects &rarr;
        </NuxtLink>
      </p>
    </section>
  </div>
</template>

<style scoped>
.hero-banner {
  background-color: #F8FAFC;
  background-image:
    linear-gradient(rgba(248, 250, 252, 0.45), rgba(248, 250, 252, 0.45)),
    url('/img/hero-banner.svg');
  background-size: cover, cover;
  background-position:
    center,
    calc(100% + var(--bgx, 0px)) calc(50% + var(--bgy, 0px));
  background-repeat: no-repeat, no-repeat;
  transition: background-position 600ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: background-position;
}

.hero-banner__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    420px circle at var(--mx, 50%) var(--my, 50%),
    rgba(96, 165, 250, 0.09),
    rgba(99, 102, 241, 0.04) 45%,
    transparent 70%
  );
  opacity: var(--glow-o, 0);
  transition: opacity 350ms ease;
  will-change: opacity;
}

@media (prefers-reduced-motion: reduce) {
  .hero-banner {
    transition: none;
    background-position: center, right center !important;
  }
  .hero-banner__glow {
    display: none;
  }
}
</style>
