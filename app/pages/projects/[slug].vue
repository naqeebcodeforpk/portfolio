<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ''))

const { data: project } = await useAsyncData(`project-${slug.value}`, () =>
  queryContent('projects').where({ _path: `/projects/${slug.value}` }).findOne()
)

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
    <NuxtLink
      to="/projects"
      class="group inline-flex items-center gap-1.5 text-sm font-medium text-[#475569] hover:text-[#1E3A8A] transition-colors mb-6"
    >
      <span
        aria-hidden="true"
        class="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1"
      >&larr;</span>
      Back to projects
    </NuxtLink>

    <div
      v-if="!project"
      class="rounded-[20px] border border-[#D8E3F0] p-10 sm:p-12 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
      style="background-image: linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%);"
    >
      <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
        Project not found
      </h1>
      <p class="mt-3 text-[#475569]">
        We couldn't find a project at this URL. Head back to the
        <NuxtLink to="/projects" class="text-[#2563EB] hover:text-[#1E3A8A] underline-offset-2 hover:underline">projects index</NuxtLink>.
      </p>
    </div>

    <template v-else>
      <header
        ref="heroRef"
        class="hero-banner relative isolate overflow-hidden rounded-[24px] border border-[#B8C7DA] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
      >
        <div class="hero-banner__glow" aria-hidden="true"></div>

        <div class="absolute top-6 right-6 sm:top-8 sm:right-8 z-10">
          <span class="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EEF4FF] border-2 border-white shadow-[0_6px_18px_-8px_rgba(15,23,42,0.25)] text-base sm:text-lg font-semibold text-[#1E3A8A] overflow-hidden">
            {{ (project.company || '?').charAt(0).toUpperCase() }}
            <img
              v-if="project.logo"
              :src="project.logo"
              alt=""
              loading="eager"
              decoding="async"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </span>
        </div>

        <div class="relative px-8 sm:px-10 py-8 sm:py-10">
          <div class="pr-24 sm:pr-28">
            <p class="text-[11px] uppercase tracking-[0.14em] font-medium text-[#64748B]">
              {{ project.company }}
            </p>
            <h1 class="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A] leading-tight">
              {{ project.title }}
            </h1>
          </div>
          <p v-if="project.domain" class="mt-4 text-[15px] text-[#334155] leading-relaxed">
            {{ project.domain }}
          </p>
        </div>
      </header>

      <div class="max-w-3xl">
        <dl
          v-if="project.role || project.duration || project.teamSize"
          class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 rounded-[18px] border border-[#D8E3F0] p-6 sm:p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          style="background-image: linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 100%);"
        >
          <div v-if="project.role">
            <dt class="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#64748B]">Role</dt>
            <dd class="mt-1.5 text-sm text-[#0F172A] leading-snug">{{ project.role }}</dd>
          </div>
          <div v-if="project.duration">
            <dt class="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#64748B]">Duration</dt>
            <dd class="mt-1.5 text-sm text-[#0F172A] leading-snug">{{ project.duration }}</dd>
          </div>
          <div v-if="project.teamSize" class="sm:col-span-2">
            <dt class="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#64748B]">Team</dt>
            <dd class="mt-1.5 text-sm text-[#0F172A] leading-snug">{{ project.teamSize }}</dd>
          </div>
        </dl>

        <section v-if="project.techStack?.length" class="mt-8">
          <h2 class="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#64748B] mb-3">Tech Stack</h2>
          <ul class="flex flex-wrap gap-1.5">
            <li
              v-for="tech in project.techStack"
              :key="tech"
              class="rounded-md border border-[#D6E4FF] bg-[#EEF4FF] px-2.5 py-1 text-[12px] font-medium text-[#1E3A8A]"
            >
              {{ tech }}
            </li>
          </ul>
        </section>

        <div class="project-prose mt-12 prose prose-slate max-w-none">
          <ContentRenderer :value="project" />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.hero-banner {
  background-color: #C8D2DE;
  background-image: linear-gradient(
    100deg,
    #DDE3EA 0%,
    #CFD7E0 25%,
    #BAC5D3 50%,
    #A8B5C5 75%,
    #94A3B8 100%
  );
  background-size: 140% 100%;
  background-position: 0% 50%;
  animation: hero-gradient-drift 22s ease-in-out infinite alternate;
  will-change: background-position;
}

@keyframes hero-gradient-drift {
  0%   { background-position: 0%  50%; }
  100% { background-position: 15% 50%; }
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

.project-prose :deep(h2) {
  color: #0F172A;
  font-weight: 600;
  letter-spacing: -0.01em;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.project-prose :deep(h3) {
  color: #0F172A;
  font-weight: 600;
  letter-spacing: -0.01em;
  font-size: 1.125rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.project-prose :deep(p),
.project-prose :deep(li) {
  color: #334155;
}

.project-prose :deep(strong) {
  color: #0F172A;
  font-weight: 600;
}

.project-prose :deep(a) {
  color: #2563EB;
  text-decoration: none;
  transition: color 200ms ease;
}

.project-prose :deep(a:hover) {
  color: #1E3A8A;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.project-prose :deep(code) {
  color: #1E3A8A;
  background-color: #EEF4FF;
  border: 1px solid #D6E4FF;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  font-size: 0.875em;
  font-weight: 500;
}

.project-prose :deep(code::before),
.project-prose :deep(code::after) {
  content: none;
}

.project-prose :deep(pre) {
  background-color: #0F172A;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}

.project-prose :deep(pre code) {
  background: transparent;
  border: none;
  color: #E2E8F0;
  padding: 0;
}

.project-prose :deep(ul) {
  list-style: none;
  padding-left: 0;
}

.project-prose :deep(ul > li) {
  position: relative;
  padding-left: 1.25rem;
}

.project-prose :deep(ul > li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background-color: #94A3B8;
}

.project-prose :deep(blockquote) {
  border-left: 3px solid #94A3B8;
  background-color: #F1F5F9;
  border-radius: 0 8px 8px 0;
  padding: 0.5rem 1rem;
  font-style: normal;
  color: #334155;
}

.project-prose :deep(hr) {
  border-color: #D8E3F0;
  margin: 2.5rem 0;
}
</style>
