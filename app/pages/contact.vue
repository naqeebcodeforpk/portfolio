<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

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
            Contact
          </h1>
          <p class="mt-2 text-sm text-[#475569]">
            Senior full-stack engineer. Berlin.
          </p>
        </div>
        <!-- <p class="mt-5 text-[15px] text-[#334155] leading-relaxed">
          Open to senior full-stack roles in Germany and remote-friendly EU teams.
          The best way to reach me is by email — I'll respond within a day or two.
        </p> -->
        <p class="mt-5 text-[15px] text-[#334155] leading-relaxed">
          Feel free to reach out to me through any of the following channels.
        </p>
      </div>
    </section>

    <section class="mt-12 max-w-2xl">
      <ul class="space-y-2.5">
        <li>
          <a
            href="mailto:ullah.naqeeb@outlook.com"
            class="group flex items-center gap-4 rounded-[14px] border border-[#D8E3F0] bg-white px-5 py-4 transition-all duration-300 hover:border-[#BFDBFE] hover:shadow-[0_2px_10px_-6px_rgba(37,99,235,0.15)]"
          >
            <span class="inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] text-[#1E3A8A]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="M3 7l9 6 9-6"/>
              </svg>
            </span>
            <span class="w-20 shrink-0 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#64748B]">Email</span>
            <span class="flex-1 min-w-0 truncate text-sm sm:text-base font-medium text-[#0F172A] transition-colors duration-300 group-hover:text-[#1E3A8A]">
              ullah.naqeeb@outlook.com
            </span>
            <span aria-hidden="true" class="shrink-0 text-[#94A3B8] transition-all duration-300 group-hover:text-[#1E3A8A] group-hover:translate-x-0.5">→</span>
          </a>
        </li>

        <li>
          <a
            href="tel:+491771446932"
            class="group flex items-center gap-4 rounded-[14px] border border-[#D8E3F0] bg-white px-5 py-4 transition-all duration-300 hover:border-[#BFDBFE] hover:shadow-[0_2px_10px_-6px_rgba(37,99,235,0.15)]"
          >
            <span class="inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] text-[#1E3A8A]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <span class="w-20 shrink-0 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#64748B]">Phone</span>
            <span class="flex-1 min-w-0 text-sm sm:text-base font-medium text-[#0F172A] transition-colors duration-300 group-hover:text-[#1E3A8A]">
              +49 177 144 6932
            </span>
            <span aria-hidden="true" class="shrink-0 text-[#94A3B8] transition-all duration-300 group-hover:text-[#1E3A8A] group-hover:translate-x-0.5">→</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/ullah-naqeeb"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 rounded-[14px] border border-[#D8E3F0] bg-white px-5 py-4 transition-all duration-300 hover:border-[#BFDBFE] hover:shadow-[0_2px_10px_-6px_rgba(37,99,235,0.15)]"
          >
            <span class="inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] text-[#1E3A8A]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7 1.7.7 1.7 1.7-.7 1.7-1.7 1.7zM20 19h-3v-5.6c0-1.5-.5-2.4-1.7-2.4-1.4 0-2.3 1-2.3 2.4V19h-3V8h3v1.3c.6-1 1.7-1.6 3.1-1.6 2.3 0 3.9 1.4 3.9 4.3V19z"/>
              </svg>
            </span>
            <span class="w-20 shrink-0 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#64748B]">LinkedIn</span>
            <span class="flex-1 min-w-0 truncate text-sm sm:text-base font-medium text-[#0F172A] transition-colors duration-300 group-hover:text-[#1E3A8A]">
              linkedin.com/in/ullah-naqeeb
            </span>
            <span aria-hidden="true" class="shrink-0 text-[#94A3B8] transition-all duration-300 group-hover:text-[#1E3A8A] group-hover:translate-x-0.5">↗</span>
          </a>
        </li>

        <li>
          <div class="flex items-center gap-4 rounded-[14px] border border-[#D8E3F0] bg-white px-5 py-4">
            <span class="inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <span class="w-20 shrink-0 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#64748B]">Location</span>
            <span class="flex-1 min-w-0 text-sm sm:text-base font-medium text-[#0F172A]">
              Berlin, Germany
            </span>
          </div>
        </li>
      </ul>
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
