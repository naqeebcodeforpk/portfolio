<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const { data: projects } = await useAsyncData('projects-list', () =>
  queryContent('projects').sort({ order: 1 }).find()
)

function summaryFor(project: any): string {
  if (project?.domain) return project.domain
  return ''
}

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

      <div class="relative px-8 sm:px-10 py-8 sm:py-10">
        <div>
          <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
            Projects
          </h1>
          <p class="mt-2 text-sm text-[#475569]">
            Case studies &middot; production systems.
          </p>
        </div>
        <p class="mt-5 text-[15px] text-[#334155] leading-relaxed">
          Ten case studies across healthcare, government, e-commerce, ed-tech, and
          industrial calibration — covering framework migrations, multi-tenant
          architectures, offline-first mobile systems, and the messy real-world
          problems of replacing manual workflows with software.
        </p>
      </div>
    </section>

    <section class="mt-16">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li
          v-for="project in projects"
          :key="project._path"
          class="group relative overflow-hidden rounded-[20px] border border-[#D8E3F0] transition-all duration-300 ease-out shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:shadow-[0_4px_14px_-8px_rgba(37,99,235,0.10)]"
          style="background-image: linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%);"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#BFDBFE] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          ></span>

          <NuxtLink :to="`/projects/${slugFor(project)}`" class="block p-7 sm:p-8">
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
            <h2 class="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#1E3A8A]">
              {{ project.title }}
            </h2>
            <p v-if="summaryFor(project)" class="mt-2.5 text-sm text-[#334155] leading-relaxed">
              {{ summaryFor(project) }}
            </p>
            <ul v-if="project.techStack?.length" class="mt-5 flex flex-wrap gap-1.5">
              <li
                v-for="tech in project.techStack"
                :key="tech"
                class="rounded-md border border-[#D6E4FF] bg-[#EEF4FF] px-2.5 py-1 text-[11px] font-medium text-[#1E3A8A]"
              >
                {{ tech }}
              </li>
            </ul>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="mt-24 border-t border-[#D8E3F0] pt-16">
      <h2 class="text-2xl font-semibold tracking-tight mb-6 text-[#0F172A]">Earlier Career (2017–2018)</h2>
      <div class="space-y-4 text-[#334155] leading-relaxed">
        <p>
          Before Code For Pakistan and Cyber Cloud, I started my professional career at
          <span class="font-medium text-[#0F172A]">Shaheer Solutions</span>
          (Peshawar, Pakistan) while completing my Computer Science degree. I built and
          migrated CakePHP web applications for small US clients in hospitality and local
          commerce, including a Joomla → CakePHP migration with Stripe payment integration.
        </p>
        <p>
          This early work laid the foundation for the larger migrations I would later lead —
          Yii → Laravel (Trade Simple) and WordPress → Laravel (Kalista Beauty).
        </p>
      </div>
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
