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
  el.style.setProperty('--mx', `${pending.x}%`)
  el.style.setProperty('--my', `${pending.y}%`)
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
      class="hero-banner relative isolate overflow-hidden rounded-[24px] border border-[#B8C7DA] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
    >
      <div class="hero-banner__glow" aria-hidden="true"></div>

      <img
        src="/img/naqeeb.png"
        alt="Naqeeb Ullah"
        width="80"
        height="80"
        loading="eager"
        decoding="async"
        class="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-[0_6px_18px_-8px_rgba(15,23,42,0.25)]"
      />

      <div class="relative px-8 sm:px-10 py-8 sm:py-10">
        <div class="pr-24 sm:pr-28">
          <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
            Naqeeb Ullah
          </h1>
          <p class="mt-2 text-sm text-[#475569]">
            Senior full-stack engineer. Berlin.
          </p>
        </div>
        <div class="mt-5 space-y-3 text-[15px] text-[#334155] leading-relaxed">
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
    </section>

    <section class="mt-24">
      <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
        Featured Projects
      </h2>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="project in featuredProjects"
          :key="project._path"
          :to="`/projects/${slugFor(project)}`"
          class="group relative block overflow-hidden rounded-[20px] border border-[#D8E3F0] p-7 sm:p-8 transition-all duration-300 ease-out shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:shadow-[0_4px_14px_-8px_rgba(37,99,235,0.10)]"
          style="background-image: linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%);"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#BFDBFE] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          ></span>

          <p class="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] font-medium text-[#64748B]">
            <span class="relative inline-flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] text-[10px] font-semibold text-[#1E3A8A] overflow-hidden">
              {{ (project.company || '?').charAt(0).toUpperCase() }}
              <img
                v-if="project.logo"
                :src="project.logo"
                alt=""
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover"
              />
            </span>
            <span class="min-w-0">{{ project.company }}</span>
          </p>
          <h3 class="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#1E3A8A]">
            {{ project.title }}
          </h3>
          <p v-if="project.domain" class="mt-2.5 text-sm text-[#334155] leading-relaxed">
            {{ project.domain }}
          </p>
          <ul v-if="project.techStack?.length" class="mt-5 flex flex-wrap gap-1.5">
            <li
              v-for="tech in project.techStack.slice(0, 4)"
              :key="tech"
              class="rounded-md border border-[#D6E4FF] bg-[#EEF4FF] px-2.5 py-1 text-[11px] font-medium text-[#1E3A8A]"
            >
              {{ tech }}
            </li>
            <li
              v-if="project.techStack.length > 4"
              class="rounded-md border border-[#E2E8F0] bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#64748B]"
            >
              +{{ project.techStack.length - 4 }} more
            </li>
          </ul>
        </NuxtLink>
      </div>

      <p class="mt-12">
        <NuxtLink
          to="/projects"
          class="group inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:text-[#1E3A8A] transition-colors"
        >
          View all projects
          <span
            aria-hidden="true"
            class="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
          >&rarr;</span>
        </NuxtLink>
      </p>
    </section>
  </div>
</template>

<style scoped>
.hero-banner {
  background-color: #E6EEF8;
  background-image: linear-gradient(
    135deg,
    #E8F1FA 0%,
    #DBEAFE 35%,
    #E0E7FF 70%,
    #EEF2FF 100%
  );
  background-size: 220% 220%;
  background-position: 0% 50%;
  animation: hero-gradient-drift 22s ease-in-out infinite alternate;
  will-change: background-position;
}

@keyframes hero-gradient-drift {
  0%   { background-position: 0%   30%; }
  50%  { background-position: 100% 70%; }
  100% { background-position: 30%  100%; }
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
    animation: none;
    background-position: 50% 50% !important;
  }
  .hero-banner__glow {
    display: none;
  }
}
</style>
